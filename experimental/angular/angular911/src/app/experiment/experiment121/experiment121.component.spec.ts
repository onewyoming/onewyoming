import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment121Component } from './experiment121.component';

describe('Experiment121Component', () => {
  let component: Experiment121Component;
  let fixture: ComponentFixture<Experiment121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
