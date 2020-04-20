import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1324Component } from './experiment1324.component';

describe('Experiment1324Component', () => {
  let component: Experiment1324Component;
  let fixture: ComponentFixture<Experiment1324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
