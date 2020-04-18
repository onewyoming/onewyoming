import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment910Component } from './experiment910.component';

describe('Experiment910Component', () => {
  let component: Experiment910Component;
  let fixture: ComponentFixture<Experiment910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
