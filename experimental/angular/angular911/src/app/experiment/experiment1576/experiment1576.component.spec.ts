import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1576Component } from './experiment1576.component';

describe('Experiment1576Component', () => {
  let component: Experiment1576Component;
  let fixture: ComponentFixture<Experiment1576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
