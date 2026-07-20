import { TestBed } from '@angular/core/testing';
import { SuperAgentsListComponent } from './super-agents-list.component';
describe('SuperAgentsListComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SuperAgentsListComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(SuperAgentsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=super-agents-list.component.spec.js.map