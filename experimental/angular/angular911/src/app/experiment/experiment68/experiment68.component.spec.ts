import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment68Component } from './experiment68.component';

describe('Experiment68Component', () => {
  let component: Experiment68Component;
  let fixture: ComponentFixture<Experiment68Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment68Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
