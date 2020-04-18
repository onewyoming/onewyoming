import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1006Component } from './experiment1006.component';

describe('Experiment1006Component', () => {
  let component: Experiment1006Component;
  let fixture: ComponentFixture<Experiment1006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
