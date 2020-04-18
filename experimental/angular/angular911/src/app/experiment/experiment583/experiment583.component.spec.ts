import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment583Component } from './experiment583.component';

describe('Experiment583Component', () => {
  let component: Experiment583Component;
  let fixture: ComponentFixture<Experiment583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
