import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1259Component } from './experiment1259.component';

describe('Experiment1259Component', () => {
  let component: Experiment1259Component;
  let fixture: ComponentFixture<Experiment1259Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1259Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
