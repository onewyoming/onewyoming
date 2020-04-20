import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment217Component } from './experiment217.component';

describe('Experiment217Component', () => {
  let component: Experiment217Component;
  let fixture: ComponentFixture<Experiment217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
