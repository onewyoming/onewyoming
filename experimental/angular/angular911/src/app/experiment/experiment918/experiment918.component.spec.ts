import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment918Component } from './experiment918.component';

describe('Experiment918Component', () => {
  let component: Experiment918Component;
  let fixture: ComponentFixture<Experiment918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
