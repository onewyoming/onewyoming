import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment182Component } from './experiment182.component';

describe('Experiment182Component', () => {
  let component: Experiment182Component;
  let fixture: ComponentFixture<Experiment182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
