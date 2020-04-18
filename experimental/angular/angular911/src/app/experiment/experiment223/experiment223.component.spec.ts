import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment223Component } from './experiment223.component';

describe('Experiment223Component', () => {
  let component: Experiment223Component;
  let fixture: ComponentFixture<Experiment223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
