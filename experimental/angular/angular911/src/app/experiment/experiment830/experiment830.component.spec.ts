import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment830Component } from './experiment830.component';

describe('Experiment830Component', () => {
  let component: Experiment830Component;
  let fixture: ComponentFixture<Experiment830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
