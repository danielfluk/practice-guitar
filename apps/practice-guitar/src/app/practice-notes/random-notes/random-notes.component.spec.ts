import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomNotesComponent } from './random-notes.component';

describe('RandomNotesComponent', () => {
  let component: RandomNotesComponent;
  let fixture: ComponentFixture<RandomNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomNotesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
