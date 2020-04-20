import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment356Component } from './experiment356.component';

describe('Experiment356Component', () => {
  let component: Experiment356Component;
  let fixture: ComponentFixture<Experiment356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
