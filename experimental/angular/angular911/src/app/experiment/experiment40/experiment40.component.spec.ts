import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment40Component } from './experiment40.component';

describe('Experiment40Component', () => {
  let component: Experiment40Component;
  let fixture: ComponentFixture<Experiment40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
