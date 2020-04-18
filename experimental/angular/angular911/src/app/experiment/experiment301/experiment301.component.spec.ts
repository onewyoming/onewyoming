import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment301Component } from './experiment301.component';

describe('Experiment301Component', () => {
  let component: Experiment301Component;
  let fixture: ComponentFixture<Experiment301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
