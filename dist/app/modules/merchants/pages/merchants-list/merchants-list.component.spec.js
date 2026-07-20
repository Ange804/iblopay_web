import { TestBed } from '@angular/core/testing';
import { MerchantsListComponent } from './merchants-list.component';
describe('MerchantsListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MerchantsListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(MerchantsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=merchants-list.component.spec.js.map