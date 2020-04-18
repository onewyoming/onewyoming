import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1372Component } from './experiment1372.component';

describe('Experiment1372Component', () => {
  let component: Experiment1372Component;
  let fixture: ComponentFixture<Experiment1372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
