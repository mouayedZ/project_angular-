import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurenceComponent } from './occurence.component';

describe('OccurenceComponent', () => {
  let component: OccurenceComponent;
  let fixture: ComponentFixture<OccurenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
