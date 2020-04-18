import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment229Component } from './experiment229.component';

describe('Experiment229Component', () => {
  let component: Experiment229Component;
  let fixture: ComponentFixture<Experiment229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
