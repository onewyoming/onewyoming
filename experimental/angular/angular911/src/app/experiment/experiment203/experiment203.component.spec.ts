import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment203Component } from './experiment203.component';

describe('Experiment203Component', () => {
  let component: Experiment203Component;
  let fixture: ComponentFixture<Experiment203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
