import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment793Component } from './experiment793.component';

describe('Experiment793Component', () => {
  let component: Experiment793Component;
  let fixture: ComponentFixture<Experiment793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
