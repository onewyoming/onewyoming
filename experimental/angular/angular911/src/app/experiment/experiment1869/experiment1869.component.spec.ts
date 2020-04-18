import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1869Component } from './experiment1869.component';

describe('Experiment1869Component', () => {
  let component: Experiment1869Component;
  let fixture: ComponentFixture<Experiment1869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
