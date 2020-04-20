import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment885Component } from './experiment885.component';

describe('Experiment885Component', () => {
  let component: Experiment885Component;
  let fixture: ComponentFixture<Experiment885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
