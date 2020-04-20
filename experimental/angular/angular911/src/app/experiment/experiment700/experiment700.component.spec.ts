import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment700Component } from './experiment700.component';

describe('Experiment700Component', () => {
  let component: Experiment700Component;
  let fixture: ComponentFixture<Experiment700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
