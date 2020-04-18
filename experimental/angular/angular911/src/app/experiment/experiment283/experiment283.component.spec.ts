import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment283Component } from './experiment283.component';

describe('Experiment283Component', () => {
  let component: Experiment283Component;
  let fixture: ComponentFixture<Experiment283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
