import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment931Component } from './experiment931.component';

describe('Experiment931Component', () => {
  let component: Experiment931Component;
  let fixture: ComponentFixture<Experiment931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
