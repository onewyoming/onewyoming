import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment972Component } from './experiment972.component';

describe('Experiment972Component', () => {
  let component: Experiment972Component;
  let fixture: ComponentFixture<Experiment972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
