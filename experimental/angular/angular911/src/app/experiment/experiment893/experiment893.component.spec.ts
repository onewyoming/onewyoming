import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment893Component } from './experiment893.component';

describe('Experiment893Component', () => {
  let component: Experiment893Component;
  let fixture: ComponentFixture<Experiment893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
