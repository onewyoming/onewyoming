import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment856Component } from './experiment856.component';

describe('Experiment856Component', () => {
  let component: Experiment856Component;
  let fixture: ComponentFixture<Experiment856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
