import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment337Component } from './experiment337.component';

describe('Experiment337Component', () => {
  let component: Experiment337Component;
  let fixture: ComponentFixture<Experiment337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
