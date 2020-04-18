import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment785Component } from './experiment785.component';

describe('Experiment785Component', () => {
  let component: Experiment785Component;
  let fixture: ComponentFixture<Experiment785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
