import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment952Component } from './experiment952.component';

describe('Experiment952Component', () => {
  let component: Experiment952Component;
  let fixture: ComponentFixture<Experiment952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
