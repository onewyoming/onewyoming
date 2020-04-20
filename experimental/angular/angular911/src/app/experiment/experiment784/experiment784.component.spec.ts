import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment784Component } from './experiment784.component';

describe('Experiment784Component', () => {
  let component: Experiment784Component;
  let fixture: ComponentFixture<Experiment784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
