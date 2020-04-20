import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment576Component } from './experiment576.component';

describe('Experiment576Component', () => {
  let component: Experiment576Component;
  let fixture: ComponentFixture<Experiment576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
