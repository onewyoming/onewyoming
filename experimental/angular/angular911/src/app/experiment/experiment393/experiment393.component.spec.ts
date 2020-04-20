import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment393Component } from './experiment393.component';

describe('Experiment393Component', () => {
  let component: Experiment393Component;
  let fixture: ComponentFixture<Experiment393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
