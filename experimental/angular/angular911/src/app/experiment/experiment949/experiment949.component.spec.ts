import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment949Component } from './experiment949.component';

describe('Experiment949Component', () => {
  let component: Experiment949Component;
  let fixture: ComponentFixture<Experiment949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
