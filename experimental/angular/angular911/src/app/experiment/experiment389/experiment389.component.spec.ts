import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment389Component } from './experiment389.component';

describe('Experiment389Component', () => {
  let component: Experiment389Component;
  let fixture: ComponentFixture<Experiment389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
