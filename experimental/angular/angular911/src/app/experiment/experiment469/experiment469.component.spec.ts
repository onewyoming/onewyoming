import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment469Component } from './experiment469.component';

describe('Experiment469Component', () => {
  let component: Experiment469Component;
  let fixture: ComponentFixture<Experiment469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
