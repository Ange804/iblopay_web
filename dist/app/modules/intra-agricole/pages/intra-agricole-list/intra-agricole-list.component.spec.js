import { TestBed } from '@angular/core/testing';
import { IntraAgricoleListComponent } from './intra-agricole-list.component';
describe('IntraAgricoleListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IntraAgricoleListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IntraAgricoleListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=intra-agricole-list.component.spec.js.map