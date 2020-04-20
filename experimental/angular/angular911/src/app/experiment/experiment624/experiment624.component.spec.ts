import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment624Component } from './experiment624.component';

describe('Experiment624Component', () => {
  let component: Experiment624Component;
  let fixture: ComponentFixture<Experiment624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
