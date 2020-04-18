import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment484Component } from './experiment484.component';

describe('Experiment484Component', () => {
  let component: Experiment484Component;
  let fixture: ComponentFixture<Experiment484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
