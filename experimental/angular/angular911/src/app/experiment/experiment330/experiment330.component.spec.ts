import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment330Component } from './experiment330.component';

describe('Experiment330Component', () => {
  let component: Experiment330Component;
  let fixture: ComponentFixture<Experiment330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
