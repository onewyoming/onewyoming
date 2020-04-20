import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment294Component } from './experiment294.component';

describe('Experiment294Component', () => {
  let component: Experiment294Component;
  let fixture: ComponentFixture<Experiment294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
