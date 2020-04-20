import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment324Component } from './experiment324.component';

describe('Experiment324Component', () => {
  let component: Experiment324Component;
  let fixture: ComponentFixture<Experiment324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
