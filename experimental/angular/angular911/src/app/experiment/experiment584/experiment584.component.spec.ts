import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment584Component } from './experiment584.component';

describe('Experiment584Component', () => {
  let component: Experiment584Component;
  let fixture: ComponentFixture<Experiment584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
