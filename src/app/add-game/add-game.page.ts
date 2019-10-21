import { Router } from '@angular/router';
import { GamesListService } from './../services/games-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.page.html',
  styleUrls: ['./add-game.page.scss'],
})
export class AddGamePage implements OnInit {
  name: string;
  dev: string;
  des: string;

  constructor(private gamesList: GamesListService, private router: Router) { }

  ngOnInit() {
  }

  processFrm() {
    const i = {
      name: this.name,
      company: this.dev,
      summary: this.des
    };
    this.gamesList.addGame(i);
    this.router.navigate(['/home']);
  }

}
