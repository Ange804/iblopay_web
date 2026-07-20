import { TestBed } from '@angular/core/testing';
import { ReportsListComponent } from './reports-list.component';
describe('ReportsListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReportsListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ReportsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reports-list.component.spec.js.map