import { Router, NavigationExtras } from '@angular/router';
import { GamesListService } from './../services/games-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
  games: { name: string; company: string; summary: string; }[];

  constructor(
    private gamesList: GamesListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.games = this.gamesList.getAllGames();
  }

  onClik() {
    this.router.navigate(['/add-game']);
  }

  onClick(i: any) {
    let navExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(i)
      }
    }
    this.router.navigate(['/display-game-detail'], navExtras);
  }

  delete(nme: any) {
    this.gamesList.delGame(nme);
  }
}
