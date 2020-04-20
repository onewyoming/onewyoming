import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1337Component } from './experiment1337.component';

describe('Experiment1337Component', () => {
  let component: Experiment1337Component;
  let fixture: ComponentFixture<Experiment1337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
