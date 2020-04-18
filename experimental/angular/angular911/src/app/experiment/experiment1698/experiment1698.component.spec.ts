import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1698Component } from './experiment1698.component';

describe('Experiment1698Component', () => {
  let component: Experiment1698Component;
  let fixture: ComponentFixture<Experiment1698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
