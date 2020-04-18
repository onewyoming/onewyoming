import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment869Component } from './experiment869.component';

describe('Experiment869Component', () => {
  let component: Experiment869Component;
  let fixture: ComponentFixture<Experiment869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
