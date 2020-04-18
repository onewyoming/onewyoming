import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment162Component } from './experiment162.component';

describe('Experiment162Component', () => {
  let component: Experiment162Component;
  let fixture: ComponentFixture<Experiment162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
