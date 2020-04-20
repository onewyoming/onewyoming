import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment539Component } from './experiment539.component';

describe('Experiment539Component', () => {
  let component: Experiment539Component;
  let fixture: ComponentFixture<Experiment539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
