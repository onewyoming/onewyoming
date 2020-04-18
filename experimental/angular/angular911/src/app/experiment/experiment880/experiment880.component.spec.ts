import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment880Component } from './experiment880.component';

describe('Experiment880Component', () => {
  let component: Experiment880Component;
  let fixture: ComponentFixture<Experiment880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
