import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1044Component } from './experiment1044.component';

describe('Experiment1044Component', () => {
  let component: Experiment1044Component;
  let fixture: ComponentFixture<Experiment1044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
