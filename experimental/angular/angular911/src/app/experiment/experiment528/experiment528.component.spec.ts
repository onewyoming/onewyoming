import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment528Component } from './experiment528.component';

describe('Experiment528Component', () => {
  let component: Experiment528Component;
  let fixture: ComponentFixture<Experiment528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
