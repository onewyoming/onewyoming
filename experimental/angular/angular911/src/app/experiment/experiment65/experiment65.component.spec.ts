import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment65Component } from './experiment65.component';

describe('Experiment65Component', () => {
  let component: Experiment65Component;
  let fixture: ComponentFixture<Experiment65Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment65Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
