import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment936Component } from './experiment936.component';

describe('Experiment936Component', () => {
  let component: Experiment936Component;
  let fixture: ComponentFixture<Experiment936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
