import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment449Component } from './experiment449.component';

describe('Experiment449Component', () => {
  let component: Experiment449Component;
  let fixture: ComponentFixture<Experiment449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
