import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment723Component } from './experiment723.component';

describe('Experiment723Component', () => {
  let component: Experiment723Component;
  let fixture: ComponentFixture<Experiment723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
