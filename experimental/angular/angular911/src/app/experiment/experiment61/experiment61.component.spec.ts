import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment61Component } from './experiment61.component';

describe('Experiment61Component', () => {
  let component: Experiment61Component;
  let fixture: ComponentFixture<Experiment61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
