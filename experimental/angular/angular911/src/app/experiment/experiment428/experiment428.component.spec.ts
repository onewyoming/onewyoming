import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment428Component } from './experiment428.component';

describe('Experiment428Component', () => {
  let component: Experiment428Component;
  let fixture: ComponentFixture<Experiment428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
