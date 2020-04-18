import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment519Component } from './experiment519.component';

describe('Experiment519Component', () => {
  let component: Experiment519Component;
  let fixture: ComponentFixture<Experiment519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
