import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment321Component } from './experiment321.component';

describe('Experiment321Component', () => {
  let component: Experiment321Component;
  let fixture: ComponentFixture<Experiment321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
