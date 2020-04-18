import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment685Component } from './experiment685.component';

describe('Experiment685Component', () => {
  let component: Experiment685Component;
  let fixture: ComponentFixture<Experiment685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
