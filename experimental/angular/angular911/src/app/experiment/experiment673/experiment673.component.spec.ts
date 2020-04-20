import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment673Component } from './experiment673.component';

describe('Experiment673Component', () => {
  let component: Experiment673Component;
  let fixture: ComponentFixture<Experiment673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
