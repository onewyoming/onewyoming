import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment497Component } from './experiment497.component';

describe('Experiment497Component', () => {
  let component: Experiment497Component;
  let fixture: ComponentFixture<Experiment497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
