import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment244Component } from './experiment244.component';

describe('Experiment244Component', () => {
  let component: Experiment244Component;
  let fixture: ComponentFixture<Experiment244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
