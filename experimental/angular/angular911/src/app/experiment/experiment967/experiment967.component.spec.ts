import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment967Component } from './experiment967.component';

describe('Experiment967Component', () => {
  let component: Experiment967Component;
  let fixture: ComponentFixture<Experiment967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
