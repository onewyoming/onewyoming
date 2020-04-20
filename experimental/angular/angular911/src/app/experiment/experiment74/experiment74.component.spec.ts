import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment74Component } from './experiment74.component';

describe('Experiment74Component', () => {
  let component: Experiment74Component;
  let fixture: ComponentFixture<Experiment74Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment74Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
