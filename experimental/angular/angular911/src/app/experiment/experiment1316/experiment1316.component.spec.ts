import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1316Component } from './experiment1316.component';

describe('Experiment1316Component', () => {
  let component: Experiment1316Component;
  let fixture: ComponentFixture<Experiment1316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
