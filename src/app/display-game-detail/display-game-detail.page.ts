import { GamesListService } from './../services/games-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-game-detail',
  templateUrl: './display-game-detail.page.html',
  styleUrls: ['./display-game-detail.page.scss'],
})
export class DisplayGameDetailPage implements OnInit {
  data: { name: string; company: string; summary: string; };
  index: any;

  constructor(
    private route: ActivatedRoute,
    private gamesList: GamesListService,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.index = JSON.parse(params.special);
        this.data = this.gamesList.searchGame(this.index);
      }
    });
   }

  ngOnInit() {
  }

  onClick() {
    this.gamesList.delGame(this.index);
  }
}
