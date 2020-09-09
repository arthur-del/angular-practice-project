import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatchHistoryComponent } from './lol/match-history/match-history.component';
import { ChampionBuildsComponent } from './lol/champion-builds/champion-builds.component';
import { FavoriteCompComponent } from './tft/favorite-comp/favorite-comp.component';
import { TftMatchComponent } from './tft/match-history/tft-match/tft-match.component';
import { LolMatchComponent } from './lol/match-history/lol-match/lol-match.component';
import { championPoolComponent } from './champion-pool.component';
import { ChampionComponent } from './champion/champion.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: 'champion-pool', component: championPoolComponent},
  {path: 'champion-pool/:name', component: championPoolComponent},
  {path: 'match-history', component: MatchHistoryComponent},
  {path: 'teamfight-tactics', component: TftMatchComponent},
  {path: '', component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MatchHistoryComponent,
    ChampionBuildsComponent,
    FavoriteCompComponent,
    TftMatchComponent,
    LolMatchComponent,
    championPoolComponent,
    ChampionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
