import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment471Component } from './experiment471.component';

describe('Experiment471Component', () => {
  let component: Experiment471Component;
  let fixture: ComponentFixture<Experiment471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
