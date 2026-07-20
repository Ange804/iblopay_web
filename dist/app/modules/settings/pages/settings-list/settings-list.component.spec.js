import { TestBed } from '@angular/core/testing';
import { SettingsListComponent } from './settings-list.component';
describe('SettingsListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SettingsListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SettingsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=settings-list.component.spec.js.map