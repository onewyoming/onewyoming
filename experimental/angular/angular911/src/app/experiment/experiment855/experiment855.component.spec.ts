import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment855Component } from './experiment855.component';

describe('Experiment855Component', () => {
  let component: Experiment855Component;
  let fixture: ComponentFixture<Experiment855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
