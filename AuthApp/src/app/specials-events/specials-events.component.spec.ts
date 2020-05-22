import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsEventsComponent } from './specials-events.component';

describe('SpecialsEventsComponent', () => {
  let component: SpecialsEventsComponent;
  let fixture: ComponentFixture<SpecialsEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialsEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
