import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment890Component } from './experiment890.component';

describe('Experiment890Component', () => {
  let component: Experiment890Component;
  let fixture: ComponentFixture<Experiment890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
