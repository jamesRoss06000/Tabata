import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTimerPage } from './set-timer.page';

describe('SetTimerPage', () => {
  let component: SetTimerPage;
  let fixture: ComponentFixture<SetTimerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTimerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
