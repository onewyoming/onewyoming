import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment862Component } from './experiment862.component';

describe('Experiment862Component', () => {
  let component: Experiment862Component;
  let fixture: ComponentFixture<Experiment862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
