import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment5Component } from './experiment5.component';

describe('Experiment5Component', () => {
  let component: Experiment5Component;
  let fixture: ComponentFixture<Experiment5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
