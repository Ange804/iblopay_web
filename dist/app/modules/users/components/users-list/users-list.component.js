var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// src/app/modules/users/components/users-list/users-list.component.ts
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { phoneValidator, emailValidator, cniValidator } from '../../../auth/validators/email.validator';
let UsersListComponent = (() => {
    let _classDecorators = [Component({
            selector: 'app-users-list',
            templateUrl: './users-list.component.html',
            styleUrls: ['./users-list.component.scss']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var UsersListComponent = _classThis = class {
        constructor(fb, authService) {
            this.fb = fb;
            this.authService = authService;
            this.users = [];
            this.filteredUsers = [];
            this.isLoading = false;
            // Search & Filter
            this.searchTerm = '';
            this.roleFilter = '';
            this.statusFilter = '';
            // Modals
            this.showAddEditModal = false;
            this.isEditMode = false;
            this.selectedUserId = null;
            this.formError = '';
            this.formSuccess = '';
            this.submitting = false;
            // Confirm delete / status change
            this.showConfirmModal = false;
            this.confirmActionType = 'delete';
            this.confirmMessage = '';
            this.targetUserId = '';
            this.targetStatus = '';
            this.destroy$ = new Subject();
        }
        ngOnInit() {
            this.initForm();
            this.loadUsers();
        }
        ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
        }
        initForm() {
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
        loadUsers() {
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
        applyFilters() {
            this.filteredUsers = this.users.filter(u => {
                const matchesSearch = u.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    u.last_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    u.phone_number.includes(this.searchTerm) ||
                    (u.email && u.email.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
                    (u.cni_number && u.cni_number.includes(this.searchTerm));
                const matchesRole = !this.roleFilter || u.role?.name === this.roleFilter;
                const matchesStatus = !this.statusFilter || u.status === this.statusFilter;
                return matchesSearch && matchesRole && matchesStatus;
            });
        }
        onSearchChange() {
            this.applyFilters();
        }
        onFilterChange() {
            this.applyFilters();
        }
        openAddModal() {
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
        openEditModal(user) {
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
        closeModal() {
            this.showAddEditModal = false;
        }
        onSubmitForm() {
            if (this.userForm.invalid) {
                this.userForm.markAllAsTouched();
                return;
            }
            this.submitting = true;
            this.formError = '';
            this.formSuccess = '';
            const formData = this.userForm.value;
            if (this.isEditMode && this.selectedUserId) {
                const updateData = formData;
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
            }
            else {
                const createData = formData;
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
        openDeleteConfirm(user) {
            this.confirmActionType = 'delete';
            this.targetUserId = user.user_id;
            this.confirmMessage = `Êtes-vous sûr de vouloir supprimer l'utilisateur "${user.first_name} ${user.last_name}" ? Cette action est irréversible.`;
            this.showConfirmModal = true;
        }
        openStatusConfirm(user, newStatus) {
            this.confirmActionType = 'status';
            this.targetUserId = user.user_id;
            this.targetStatus = newStatus;
            this.confirmMessage = `Voulez-vous changer le statut de "${user.first_name} ${user.last_name}" à "${newStatus}" ?`;
            this.showConfirmModal = true;
        }
        closeConfirmModal() {
            this.showConfirmModal = false;
        }
        onExecuteConfirm() {
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
            }
            else if (this.confirmActionType === 'status') {
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
        getFieldError(fieldName) {
            const control = this.userForm.get(fieldName);
            if (!control || !control.errors || !control.touched)
                return '';
            if (control.errors['required'])
                return 'Ce champ est requis';
            if (control.errors['minlength'])
                return 'Longueur minimale non respectée';
            if (control.errors['phoneFormat'])
                return control.errors['phoneFormat'];
            if (control.errors['emailFormat'])
                return control.errors['emailFormat'];
            if (control.errors['cniFormat'])
                return control.errors['cniFormat'];
            return 'Valeur invalide';
        }
    };
    __setFunctionName(_classThis, "UsersListComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsersListComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsersListComponent = _classThis;
})();
export { UsersListComponent };
//# sourceMappingURL=users-list.component.js.map