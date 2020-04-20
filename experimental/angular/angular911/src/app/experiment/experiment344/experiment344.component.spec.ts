import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment344Component } from './experiment344.component';

describe('Experiment344Component', () => {
  let component: Experiment344Component;
  let fixture: ComponentFixture<Experiment344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
