import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment148Component } from './experiment148.component';

describe('Experiment148Component', () => {
  let component: Experiment148Component;
  let fixture: ComponentFixture<Experiment148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
