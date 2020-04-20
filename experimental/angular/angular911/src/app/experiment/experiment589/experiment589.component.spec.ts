import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment589Component } from './experiment589.component';

describe('Experiment589Component', () => {
  let component: Experiment589Component;
  let fixture: ComponentFixture<Experiment589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
