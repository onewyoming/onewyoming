import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment129Component } from './experiment129.component';

describe('Experiment129Component', () => {
  let component: Experiment129Component;
  let fixture: ComponentFixture<Experiment129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
