import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment921Component } from './experiment921.component';

describe('Experiment921Component', () => {
  let component: Experiment921Component;
  let fixture: ComponentFixture<Experiment921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
