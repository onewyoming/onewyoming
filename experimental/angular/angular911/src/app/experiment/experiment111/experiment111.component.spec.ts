import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment111Component } from './experiment111.component';

describe('Experiment111Component', () => {
  let component: Experiment111Component;
  let fixture: ComponentFixture<Experiment111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
