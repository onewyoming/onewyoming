import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment370Component } from './experiment370.component';

describe('Experiment370Component', () => {
  let component: Experiment370Component;
  let fixture: ComponentFixture<Experiment370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
