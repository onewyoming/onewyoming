import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment649Component } from './experiment649.component';

describe('Experiment649Component', () => {
  let component: Experiment649Component;
  let fixture: ComponentFixture<Experiment649Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment649Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
