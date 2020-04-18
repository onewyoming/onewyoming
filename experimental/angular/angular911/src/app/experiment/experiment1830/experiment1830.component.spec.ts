import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1830Component } from './experiment1830.component';

describe('Experiment1830Component', () => {
  let component: Experiment1830Component;
  let fixture: ComponentFixture<Experiment1830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
