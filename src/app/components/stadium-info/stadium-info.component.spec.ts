import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumInfoComponent } from './stadium-info.component';

describe('StadiumInfoComponent', () => {
  let component: StadiumInfoComponent;
  let fixture: ComponentFixture<StadiumInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
