import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1712Component } from './experiment1712.component';

describe('Experiment1712Component', () => {
  let component: Experiment1712Component;
  let fixture: ComponentFixture<Experiment1712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
