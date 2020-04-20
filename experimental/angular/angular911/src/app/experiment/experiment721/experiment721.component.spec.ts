import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment721Component } from './experiment721.component';

describe('Experiment721Component', () => {
  let component: Experiment721Component;
  let fixture: ComponentFixture<Experiment721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
