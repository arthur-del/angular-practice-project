import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Champion } from '../champion.interface';
import { ChampionService } from '../champion.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})

export class ChampionComponent implements OnInit {

  constructor(private championService: ChampionService, private router: Router, private activatedRoute: ActivatedRoute) { }

  currentChampion: Champion;
  armor; mr; ad; asp; cs; hp; hpr; ar; mp; mpr: number
  @ViewChild('championLevel') championLevel: ElementRef;


  ngOnInit() {
    this.currentChampion = this.championService.getChampion(this.router.url.split('/')[2]);
    setTimeout(() => {
      this.updateGrid();
    }, 1000);
    
  }


  updateGrid() {
    let level = this.championLevel.nativeElement.value;
    this.armor = this.currentChampion.stats.armor + this.currentChampion.stats.armorperlevel * level
    this.mr = this.currentChampion.stats.spellblock + this.currentChampion.stats.spellblockperlevel * level
    this.ad = this.currentChampion.stats.attackdamage + this.currentChampion.stats.attackdamageperlevel * level
    this.asp = this.currentChampion.stats.attackspeed + this.currentChampion.stats.attackspeedperlevel * level
    this.cs = this.currentChampion.stats.crit + this.currentChampion.stats.critperlevel * level
    this.hp = this.currentChampion.stats.hp + this.currentChampion.stats.hpperlevel * level
    this.hpr = this.currentChampion.stats.hpregen + this.currentChampion.stats.hpregen * level
    this.ar = this.currentChampion.stats.attackrange;
    this.mp = this.currentChampion.stats.mp + this.currentChampion.stats.mpperlevel * level
    this.mpr = this.currentChampion.stats.mpregen + this.currentChampion.stats.mpregenperlevel * level
  }

 

}
