import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment433Component } from './experiment433.component';

describe('Experiment433Component', () => {
  let component: Experiment433Component;
  let fixture: ComponentFixture<Experiment433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
