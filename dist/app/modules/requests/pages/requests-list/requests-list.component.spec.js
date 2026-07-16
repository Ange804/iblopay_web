import { TestBed } from '@angular/core/testing';
import { RequestsListComponent } from './requests-list.component';
describe('RequestsListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RequestsListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(RequestsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=requests-list.component.spec.js.map