import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment233Component } from './experiment233.component';

describe('Experiment233Component', () => {
  let component: Experiment233Component;
  let fixture: ComponentFixture<Experiment233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
