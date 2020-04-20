import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment892Component } from './experiment892.component';

describe('Experiment892Component', () => {
  let component: Experiment892Component;
  let fixture: ComponentFixture<Experiment892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
