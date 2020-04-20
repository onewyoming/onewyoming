import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment54Component } from './experiment54.component';

describe('Experiment54Component', () => {
  let component: Experiment54Component;
  let fixture: ComponentFixture<Experiment54Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment54Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
