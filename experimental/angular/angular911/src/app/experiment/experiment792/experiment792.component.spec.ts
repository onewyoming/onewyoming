import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment792Component } from './experiment792.component';

describe('Experiment792Component', () => {
  let component: Experiment792Component;
  let fixture: ComponentFixture<Experiment792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
