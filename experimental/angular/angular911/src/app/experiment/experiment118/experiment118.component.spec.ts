import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment118Component } from './experiment118.component';

describe('Experiment118Component', () => {
  let component: Experiment118Component;
  let fixture: ComponentFixture<Experiment118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
