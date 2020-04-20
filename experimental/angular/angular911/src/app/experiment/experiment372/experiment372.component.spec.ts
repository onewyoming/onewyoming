import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment372Component } from './experiment372.component';

describe('Experiment372Component', () => {
  let component: Experiment372Component;
  let fixture: ComponentFixture<Experiment372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
