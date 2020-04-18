import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment809Component } from './experiment809.component';

describe('Experiment809Component', () => {
  let component: Experiment809Component;
  let fixture: ComponentFixture<Experiment809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
