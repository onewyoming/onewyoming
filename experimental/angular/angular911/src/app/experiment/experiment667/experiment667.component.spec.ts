import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment667Component } from './experiment667.component';

describe('Experiment667Component', () => {
  let component: Experiment667Component;
  let fixture: ComponentFixture<Experiment667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
