import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment361Component } from './experiment361.component';

describe('Experiment361Component', () => {
  let component: Experiment361Component;
  let fixture: ComponentFixture<Experiment361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
