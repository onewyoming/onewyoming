import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment167Component } from './experiment167.component';

describe('Experiment167Component', () => {
  let component: Experiment167Component;
  let fixture: ComponentFixture<Experiment167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
