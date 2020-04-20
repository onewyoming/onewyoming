import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment486Component } from './experiment486.component';

describe('Experiment486Component', () => {
  let component: Experiment486Component;
  let fixture: ComponentFixture<Experiment486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
