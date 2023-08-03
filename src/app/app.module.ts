import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StandingsComponent } from './components/standings/standings.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { MatchFormComponent } from './components/match-form/match-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';

import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTeamsComponent } from './components/players-teams/players-teams.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayersInfoComponent } from './components/players-info/players-info.component';
import { BannerComponent } from './components/banner/banner.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import { OccurenceComponent } from './components/occurence/occurence.component';
import { HttpClientModule } from '@angular/common/http';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumTableComponent } from './components/stadium-table/stadium-table.component';
import { StadiumInfoComponent } from './components/stadium-info/stadium-info.component';
import { SearchStadiumComponent } from './components/search-stadium/search-stadium.component';
import { CustomFilterPipe } from './pipes/custom-filter.pipe';
import { AddStadiumTestComponent } from './components/add-stadium-test/add-stadium-test.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MatchesComponent,
    PlayersComponent,
    TeamsComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    LoginComponent,
    SignupComponent,
    
    MatchFormComponent,
    PlayerFormComponent,
    
    AddTeamComponent,
    EditTeamComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayersTeamsComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MatchInfoComponent,
    PlayersInfoComponent,
    BannerComponent,
    SearchMatchComponent,
    ReversePipe,
    ReplacePipe,
    OccurenceComponent,
    AddStadiumComponent,
    StadiumTableComponent,
    StadiumInfoComponent,
    SearchStadiumComponent,
    CustomFilterPipe,
    AddStadiumTestComponent,
    WeatherComponent,
    SignupAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


