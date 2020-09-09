import { Injectable, OnInit } from "@angular/core";
import { Champion } from './champion.interface';
import championFile from './dataset/champion.json';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ChampionService {

    championDictionnary = championFile; // get champion data from file
    championsArray: Champion[] = this.formatChampionData(); // array of all the champions according the champion interface
    championPool = new Observable<Champion[]>(); // needs to be an observable for others in champion and champion pool
    currentChampion = new Subject<Champion>(); // needs to be an observable for others in champion and champion pool
    
    constructor() { }

    getChampionArray() {
        return this.championsArray;
    }
    getChampionPool(){
        return this.championPool;
    }
    // returns null if champion not found
    getChampion(name: string) {
       return this.championsArray.find(obj => {
            return obj.name === name;
        })
    }
    //returns the currently selected champion for viewing
    getCurrentChampion(){
        return this.currentChampion;
    }
    setCurrentChampion(champion: Champion){
        // this.currentChampion = this.getChampion(champion);
        this.currentChampion.next(champion)
        console.log(champion)
        console.log('Inside champion service:', this.currentChampion)
    }
    addChampionToPool(updatedPool: Champion[]) {
        this.championPool.next(updatedPool)
        // console.log('Inside champion service: ',this.championPool)
      }
    // Translates the json file into a championsArray
    formatChampionData() {
        let champArray: Champion[] = [];
        for (var key in this.championDictionnary) {
            let icon: string = '../assets/img/champion/tiles/' + key + '_0.jpg';
            let processedChampion: Champion = {
                name: this.championDictionnary[key].name,
                title: this.championDictionnary[key].title,
                blurb: this.championDictionnary[key].blurb,
                stats: this.championDictionnary[key].stats,
                icon: icon,
            }
            champArray.push(processedChampion);
        }
        return champArray;
    }
}
