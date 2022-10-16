import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModifNoteComponent } from './dialog-modif-note.component';

describe('DialogModifNoteComponent', () => {
  let component: DialogModifNoteComponent;
  let fixture: ComponentFixture<DialogModifNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogModifNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModifNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
