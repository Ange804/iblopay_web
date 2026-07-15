import { TestBed } from '@angular/core/testing';
import { AgentsListComponent } from './agents-list.component';
describe('AgentsListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AgentsListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AgentsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=agents-list.component.spec.js.map