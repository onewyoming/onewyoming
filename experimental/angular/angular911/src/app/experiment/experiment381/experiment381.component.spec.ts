import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment381Component } from './experiment381.component';

describe('Experiment381Component', () => {
  let component: Experiment381Component;
  let fixture: ComponentFixture<Experiment381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
