import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment173Component } from './experiment173.component';

describe('Experiment173Component', () => {
  let component: Experiment173Component;
  let fixture: ComponentFixture<Experiment173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
