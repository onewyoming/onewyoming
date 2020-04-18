import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment104Component } from './experiment104.component';

describe('Experiment104Component', () => {
  let component: Experiment104Component;
  let fixture: ComponentFixture<Experiment104Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment104Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
