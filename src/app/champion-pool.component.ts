import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Champion } from './champion.interface';
import { ChampionService } from './champion.service';

@Component({
    selector: 'app-champion-pool',
    templateUrl: './champion-pool.component.html',
    styleUrls: ['./champion-pool.component.css']
})

export class championPoolComponent implements OnInit {
    constructor(private championService: ChampionService) { }
    championPool: Champion[] = [];
    levelInput: number = 1;
    @ViewChild('newChampion') newChampion: ElementRef;
    @ViewChild('championDetail') championDetail: ElementRef;
    showDetail: boolean = false;

    showChamp() {
        this.showDetail = !this.showDetail;
    }
    addChampionToPool() {
        let championName: string = this.newChampion.nativeElement.value

        if (this.championService.getChampion(championName)) {
            this.championPool.push(this.championService.getChampion(championName));
            this.championService.addChampionToPool(this.championPool);
        }
        else console.error("Sorry, we couldn't find that champion");
    }


    chooseChampLevel(level: number) { }

    ngOnInit() {
        this.championService.championPool
            .subscribe(
                (championPool: Champion[]) => {
                    this.championPool = championPool;
                }
            );


    }



}