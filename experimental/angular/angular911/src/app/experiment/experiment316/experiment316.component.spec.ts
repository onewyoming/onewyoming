import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment316Component } from './experiment316.component';

describe('Experiment316Component', () => {
  let component: Experiment316Component;
  let fixture: ComponentFixture<Experiment316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
