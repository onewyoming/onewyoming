import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment363Component } from './experiment363.component';

describe('Experiment363Component', () => {
  let component: Experiment363Component;
  let fixture: ComponentFixture<Experiment363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
