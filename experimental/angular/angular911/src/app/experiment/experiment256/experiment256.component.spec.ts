import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment256Component } from './experiment256.component';

describe('Experiment256Component', () => {
  let component: Experiment256Component;
  let fixture: ComponentFixture<Experiment256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
