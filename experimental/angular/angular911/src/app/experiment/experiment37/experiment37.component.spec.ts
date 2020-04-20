import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment37Component } from './experiment37.component';

describe('Experiment37Component', () => {
  let component: Experiment37Component;
  let fixture: ComponentFixture<Experiment37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment37Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
