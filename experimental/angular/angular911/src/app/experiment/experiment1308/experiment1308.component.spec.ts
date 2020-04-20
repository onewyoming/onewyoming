import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1308Component } from './experiment1308.component';

describe('Experiment1308Component', () => {
  let component: Experiment1308Component;
  let fixture: ComponentFixture<Experiment1308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
