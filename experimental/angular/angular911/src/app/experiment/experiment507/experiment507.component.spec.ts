import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment507Component } from './experiment507.component';

describe('Experiment507Component', () => {
  let component: Experiment507Component;
  let fixture: ComponentFixture<Experiment507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
