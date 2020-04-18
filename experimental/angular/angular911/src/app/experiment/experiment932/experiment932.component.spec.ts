import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment932Component } from './experiment932.component';

describe('Experiment932Component', () => {
  let component: Experiment932Component;
  let fixture: ComponentFixture<Experiment932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
