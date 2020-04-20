import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment22Component } from './experiment22.component';

describe('Experiment22Component', () => {
  let component: Experiment22Component;
  let fixture: ComponentFixture<Experiment22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
