import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment852Component } from './experiment852.component';

describe('Experiment852Component', () => {
  let component: Experiment852Component;
  let fixture: ComponentFixture<Experiment852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
