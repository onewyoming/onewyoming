import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment137Component } from './experiment137.component';

describe('Experiment137Component', () => {
  let component: Experiment137Component;
  let fixture: ComponentFixture<Experiment137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
