import { TestBed } from '@angular/core/testing';
import { NotificationsListComponent } from './notifications-list.component';
describe('NotificationsListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NotificationsListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(NotificationsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=notifications-list.component.spec.js.map