import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersTeamsComponent } from './players-teams.component';

describe('PlayersTeamsComponent', () => {
  let component: PlayersTeamsComponent;
  let fixture: ComponentFixture<PlayersTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
