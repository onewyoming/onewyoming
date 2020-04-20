import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment581Component } from './experiment581.component';

describe('Experiment581Component', () => {
  let component: Experiment581Component;
  let fixture: ComponentFixture<Experiment581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
