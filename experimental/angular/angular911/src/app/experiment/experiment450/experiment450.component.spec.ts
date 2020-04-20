import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment450Component } from './experiment450.component';

describe('Experiment450Component', () => {
  let component: Experiment450Component;
  let fixture: ComponentFixture<Experiment450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
