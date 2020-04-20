import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment180Component } from './experiment180.component';

describe('Experiment180Component', () => {
  let component: Experiment180Component;
  let fixture: ComponentFixture<Experiment180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
