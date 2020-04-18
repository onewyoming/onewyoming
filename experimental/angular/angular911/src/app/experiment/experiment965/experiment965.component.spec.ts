import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment965Component } from './experiment965.component';

describe('Experiment965Component', () => {
  let component: Experiment965Component;
  let fixture: ComponentFixture<Experiment965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
