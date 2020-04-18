import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment798Component } from './experiment798.component';

describe('Experiment798Component', () => {
  let component: Experiment798Component;
  let fixture: ComponentFixture<Experiment798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
