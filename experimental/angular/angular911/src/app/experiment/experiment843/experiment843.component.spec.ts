import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment843Component } from './experiment843.component';

describe('Experiment843Component', () => {
  let component: Experiment843Component;
  let fixture: ComponentFixture<Experiment843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
