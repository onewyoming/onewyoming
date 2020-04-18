import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment962Component } from './experiment962.component';

describe('Experiment962Component', () => {
  let component: Experiment962Component;
  let fixture: ComponentFixture<Experiment962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
