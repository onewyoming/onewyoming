import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment218Component } from './experiment218.component';

describe('Experiment218Component', () => {
  let component: Experiment218Component;
  let fixture: ComponentFixture<Experiment218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
