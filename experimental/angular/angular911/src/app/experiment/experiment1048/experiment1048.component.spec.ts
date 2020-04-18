import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1048Component } from './experiment1048.component';

describe('Experiment1048Component', () => {
  let component: Experiment1048Component;
  let fixture: ComponentFixture<Experiment1048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
