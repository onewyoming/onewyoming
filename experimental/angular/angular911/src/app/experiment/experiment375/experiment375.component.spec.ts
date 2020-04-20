import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment375Component } from './experiment375.component';

describe('Experiment375Component', () => {
  let component: Experiment375Component;
  let fixture: ComponentFixture<Experiment375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
