import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment354Component } from './experiment354.component';

describe('Experiment354Component', () => {
  let component: Experiment354Component;
  let fixture: ComponentFixture<Experiment354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
