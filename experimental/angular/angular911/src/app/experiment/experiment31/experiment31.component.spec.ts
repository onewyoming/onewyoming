import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment31Component } from './experiment31.component';

describe('Experiment31Component', () => {
  let component: Experiment31Component;
  let fixture: ComponentFixture<Experiment31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
