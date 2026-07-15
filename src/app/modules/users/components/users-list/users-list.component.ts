// src/app/modules/users/components/users-list/users-list.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';
import { User, CreateUserRequest, UpdateUserRequest } from '../../../auth/models/user.model';
import { Role } from '../../../auth/enums/role.enum';
import { phoneValidator, emailValidator, cniValidator } from '../../../auth/validators/email.validator';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  filteredUsers: User[] = [];
  isLoading = false;
  
  // Search & Filter
  searchTerm = '';
  roleFilter = '';
  statusFilter = '';

  // Modals
  showAddEditModal = false;
  isEditMode = false;
  selectedUserId: string | null = null;
  userForm!: FormGroup;
  formError = '';
  formSuccess = '';
  submitting = false;

  // Confirm delete / status change
  showConfirmModal = false;
  confirmActionType: 'delete' | 'status' = 'delete';
  confirmMessage = '';
  targetUserId = '';
  targetStatus = '';

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      last_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      phone_number: ['', [Validators.required, phoneValidator()]],
      email: ['', [emailValidator()]],
      cni_number: ['', [cniValidator()]],
      photo_url: [''],
      role_id: ['role-admin', [Validators.required]],
      status: ['ACTIVE', [Validators.required]]
    });
  }

  loadUsers(): void {
    this.isLoading = true;
    this.authService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.users = data;
          this.applyFilters();
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Failed to load users', err);
          this.isLoading = false;
        }
      });
  }

  applyFilters(): void {
    this.filteredUsers = this.users.filter(u => {
      const matchesSearch = 
        u.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        u.last_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        u.phone_number.includes(this.searchTerm) ||
        (u.email && u.email.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (u.cni_number && u.cni_number.includes(this.searchTerm));

      const matchesRole = !this.roleFilter || u.role?.name === this.roleFilter;
      const matchesStatus = !this.statusFilter || u.status === this.statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  openAddModal(): void {
    this.isEditMode = false;
    this.selectedUserId = null;
    this.formError = '';
    this.formSuccess = '';
    this.userForm.reset({
      role_id: 'role-admin',
      status: 'ACTIVE'
    });
    this.showAddEditModal = true;
  }

  openEditModal(user: User): void {
    this.isEditMode = true;
    this.selectedUserId = user.user_id;
    this.formError = '';
    this.formSuccess = '';
    this.userForm.setValue({
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
      email: user.email || '',
      cni_number: user.cni_number || '',
      photo_url: user.photo_url || '',
      role_id: user.role_id,
      status: user.status
    });
    this.showAddEditModal = true;
  }

  closeModal(): void {
    this.showAddEditModal = false;
  }

  onSubmitForm(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.formError = '';
    this.formSuccess = '';

    const formData = this.userForm.value;

    if (this.isEditMode && this.selectedUserId) {
      const updateData: UpdateUserRequest = formData;
      this.authService.updateUser(this.selectedUserId, updateData).subscribe({
        next: () => {
          this.submitting = false;
          this.formSuccess = 'Utilisateur mis à jour avec succès!';
          this.loadUsers();
          setTimeout(() => this.closeModal(), 1200);
        },
        error: (err) => {
          this.submitting = false;
          this.formError = err.error?.message || 'Erreur lors de la mise à jour.';
        }
      });
    } else {
      const createData: CreateUserRequest = formData;
      this.authService.createUser(createData).subscribe({
        next: () => {
          this.submitting = false;
          this.formSuccess = 'Utilisateur créé avec succès! PIN par défaut: 1234';
          this.loadUsers();
          setTimeout(() => this.closeModal(), 1500);
        },
        error: (err) => {
          this.submitting = false;
          this.formError = err.error?.message || 'Erreur lors de la création.';
        }
      });
    }
  }

  openDeleteConfirm(user: User): void {
    this.confirmActionType = 'delete';
    this.targetUserId = user.user_id;
    this.confirmMessage = `Êtes-vous sûr de vouloir supprimer l'utilisateur "${user.first_name} ${user.last_name}" ? Cette action est irréversible.`;
    this.showConfirmModal = true;
  }

  openStatusConfirm(user: User, newStatus: string): void {
    this.confirmActionType = 'status';
    this.targetUserId = user.user_id;
    this.targetStatus = newStatus;
    this.confirmMessage = `Voulez-vous changer le statut de "${user.first_name} ${user.last_name}" à "${newStatus}" ?`;
    this.showConfirmModal = true;
  }

  closeConfirmModal(): void {
    this.showConfirmModal = false;
  }

  onExecuteConfirm(): void {
    if (this.confirmActionType === 'delete') {
      this.authService.deleteUser(this.targetUserId).subscribe({
        next: () => {
          this.loadUsers();
          this.showConfirmModal = false;
        },
        error: (err) => {
          console.error('Delete failed', err);
          this.showConfirmModal = false;
        }
      });
    } else if (this.confirmActionType === 'status') {
      this.authService.changeUserStatus(this.targetUserId, this.targetStatus).subscribe({
        next: () => {
          this.loadUsers();
          this.showConfirmModal = false;
        },
        error: (err) => {
          console.error('Status change failed', err);
          this.showConfirmModal = false;
        }
      });
    }
  }

  getFieldError(fieldName: string): string {
    const control = this.userForm.get(fieldName);
    if (!control || !control.errors || !control.touched) return '';

    if (control.errors['required']) return 'Ce champ est requis';
    if (control.errors['minlength']) return 'Longueur minimale non respectée';
    if (control.errors['phoneFormat']) return control.errors['phoneFormat'];
    if (control.errors['emailFormat']) return control.errors['emailFormat'];
    if (control.errors['cniFormat']) return control.errors['cniFormat'];

    return 'Valeur invalide';
  }
}
