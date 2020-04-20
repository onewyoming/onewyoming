import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment940Component } from './experiment940.component';

describe('Experiment940Component', () => {
  let component: Experiment940Component;
  let fixture: ComponentFixture<Experiment940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
