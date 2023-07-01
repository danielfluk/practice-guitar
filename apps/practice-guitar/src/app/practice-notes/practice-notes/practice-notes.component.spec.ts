import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticeNotesComponent } from './practice-notes.component';

describe('PracticeNotesComponentComponent', () => {
  let component: PracticeNotesComponent;
  let fixture: ComponentFixture<PracticeNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticeNotesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
