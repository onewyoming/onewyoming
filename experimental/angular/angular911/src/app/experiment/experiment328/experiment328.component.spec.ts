import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment328Component } from './experiment328.component';

describe('Experiment328Component', () => {
  let component: Experiment328Component;
  let fixture: ComponentFixture<Experiment328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
