import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment404Component } from './experiment404.component';

describe('Experiment404Component', () => {
  let component: Experiment404Component;
  let fixture: ComponentFixture<Experiment404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
