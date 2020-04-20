import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment845Component } from './experiment845.component';

describe('Experiment845Component', () => {
  let component: Experiment845Component;
  let fixture: ComponentFixture<Experiment845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
