import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment820Component } from './experiment820.component';

describe('Experiment820Component', () => {
  let component: Experiment820Component;
  let fixture: ComponentFixture<Experiment820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
