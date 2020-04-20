import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment935Component } from './experiment935.component';

describe('Experiment935Component', () => {
  let component: Experiment935Component;
  let fixture: ComponentFixture<Experiment935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
