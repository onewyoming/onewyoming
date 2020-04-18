import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment800Component } from './experiment800.component';

describe('Experiment800Component', () => {
  let component: Experiment800Component;
  let fixture: ComponentFixture<Experiment800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
