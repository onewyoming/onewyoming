import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment912Component } from './experiment912.component';

describe('Experiment912Component', () => {
  let component: Experiment912Component;
  let fixture: ComponentFixture<Experiment912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
