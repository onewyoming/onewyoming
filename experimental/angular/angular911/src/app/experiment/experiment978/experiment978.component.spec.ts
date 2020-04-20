import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment978Component } from './experiment978.component';

describe('Experiment978Component', () => {
  let component: Experiment978Component;
  let fixture: ComponentFixture<Experiment978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
