import { TestBed } from '@angular/core/testing';
import { ServicesPublicsListComponent } from './services-publics-list.component';
describe('ServicesPublicsListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ServicesPublicsListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ServicesPublicsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=services-publics-list.component.spec.js.map