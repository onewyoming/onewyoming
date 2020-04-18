import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1738Component } from './experiment1738.component';

describe('Experiment1738Component', () => {
  let component: Experiment1738Component;
  let fixture: ComponentFixture<Experiment1738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
