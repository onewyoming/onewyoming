import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment502Component } from './experiment502.component';

describe('Experiment502Component', () => {
  let component: Experiment502Component;
  let fixture: ComponentFixture<Experiment502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
