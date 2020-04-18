import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment335Component } from './experiment335.component';

describe('Experiment335Component', () => {
  let component: Experiment335Component;
  let fixture: ComponentFixture<Experiment335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
