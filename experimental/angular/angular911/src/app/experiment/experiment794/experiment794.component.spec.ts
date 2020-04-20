import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment794Component } from './experiment794.component';

describe('Experiment794Component', () => {
  let component: Experiment794Component;
  let fixture: ComponentFixture<Experiment794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
