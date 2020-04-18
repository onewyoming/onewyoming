import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment773Component } from './experiment773.component';

describe('Experiment773Component', () => {
  let component: Experiment773Component;
  let fixture: ComponentFixture<Experiment773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
