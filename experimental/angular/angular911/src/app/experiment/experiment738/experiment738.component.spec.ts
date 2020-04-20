import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment738Component } from './experiment738.component';

describe('Experiment738Component', () => {
  let component: Experiment738Component;
  let fixture: ComponentFixture<Experiment738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
