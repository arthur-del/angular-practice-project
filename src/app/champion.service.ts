import { Injectable } from "@angular/core";
import { Champion } from './champion.interface';
import championFile from './dataset/champion.json';

@Injectable({
    providedIn: 'root'
})

export class ChampionService {

    championDictionnary = championFile; // get champion data from file
    championsArray: Champion[] = this.formatChampionData(); // array of all the champions according the champion interface
    championPool : Champion[] = []; // needs to be an observable for others in champion and champion pool
    
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
    addChampionToPool(updatedPool: Champion[]) {
       this.championPool = updatedPool;
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
