import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStadiumTestComponent } from './add-stadium-test.component';

describe('AddStadiumTestComponent', () => {
  let component: AddStadiumTestComponent;
  let fixture: ComponentFixture<AddStadiumTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStadiumTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStadiumTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
