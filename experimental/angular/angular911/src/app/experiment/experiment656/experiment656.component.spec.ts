import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment656Component } from './experiment656.component';

describe('Experiment656Component', () => {
  let component: Experiment656Component;
  let fixture: ComponentFixture<Experiment656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
