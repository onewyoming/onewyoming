import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment28Component } from './experiment28.component';

describe('Experiment28Component', () => {
  let component: Experiment28Component;
  let fixture: ComponentFixture<Experiment28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
