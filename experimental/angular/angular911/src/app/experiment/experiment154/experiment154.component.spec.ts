import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment154Component } from './experiment154.component';

describe('Experiment154Component', () => {
  let component: Experiment154Component;
  let fixture: ComponentFixture<Experiment154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
