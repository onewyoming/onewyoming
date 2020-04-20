import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment991Component } from './experiment991.component';

describe('Experiment991Component', () => {
  let component: Experiment991Component;
  let fixture: ComponentFixture<Experiment991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
