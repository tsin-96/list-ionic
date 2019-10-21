import { mobiscroll } from '@mobiscroll/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesListService {

  constructor() { }
  flag: boolean;
  // tslint:disable-next-line: member-ordering
  fl = false;

  games = [
    // tslint:disable-next-line: max-line-length
    {name: 'Dota 2', company: 'Steam', summary: 'Dota 2 is a multiplayer online battle arena video game developed and published by Valve Corporation. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne.'},
    // tslint:disable-next-line: max-line-length
    {name: 'World of Warcraft', company: 'Blizzard Entertainment', summary: 'World of Warcraft is a massively multiplayer online role-playing game released in 2004 by Blizzard Entertainment. It is the fourth released game set in the Warcraft fantasy universe.'},
    {name: 'League of Legends', company: 'Riot Games', summary: ''},
    {name: 'Fortnite', company: 'Epic Games', summary: ''},
    {name: 'Call of Duty', company: 'Activision, Infinity Ward, Nokia', summary: ''},
    {name: 'Dishonored', company: 'ArKane Studios', summary: ''},
    {name: 'Minecraft', company: 'Mojang', summary: ''},
    {name: 'Assassin\'s Creed', company: 'Ubisoft', summary: ''}
  ];
  addGame(i: { name: string; company: string; summary: string; }) {
    this.games.push(i);
  }
  searchGame(index: any) {
    return this.games[index];
  }

  getAllGames() {
    return this.games;
  }

  showConfirm() {
    mobiscroll.confirm({
        title: 'Delete Game',
        message: 'Are you sure you want to delete?',
        okText: 'Agree',
        cancelText: 'Disagree',
        callback(res: any) {
            mobiscroll.toast({
                message: res ? 'Agreed' : 'Disagreed'
            });
            if (res === 'Agreed') {
              this.fl = true;
            }
        }
    });
    return this.fl;
}

  delGame(index: any) {
    this.flag = this.showConfirm();
    if (this.flag === true) {
      this.games.splice(index, 1);
    }
  }
}
