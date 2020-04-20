import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1155Component } from './experiment1155.component';

describe('Experiment1155Component', () => {
  let component: Experiment1155Component;
  let fixture: ComponentFixture<Experiment1155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
