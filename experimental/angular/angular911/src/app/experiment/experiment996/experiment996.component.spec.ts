import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment996Component } from './experiment996.component';

describe('Experiment996Component', () => {
  let component: Experiment996Component;
  let fixture: ComponentFixture<Experiment996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
