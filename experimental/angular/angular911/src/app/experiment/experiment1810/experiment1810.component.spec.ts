import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1810Component } from './experiment1810.component';

describe('Experiment1810Component', () => {
  let component: Experiment1810Component;
  let fixture: ComponentFixture<Experiment1810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
