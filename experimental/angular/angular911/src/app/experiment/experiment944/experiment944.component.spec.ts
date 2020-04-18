import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment944Component } from './experiment944.component';

describe('Experiment944Component', () => {
  let component: Experiment944Component;
  let fixture: ComponentFixture<Experiment944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
