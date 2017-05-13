import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../hero/service/hero.service';
import { Hero } from '../../hero/components/hero';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //#region Properties

  private _heroes: Hero[];
  public get heroes(): Hero[] {
    return this._heroes;
  }
  public set heroes(v: Hero[]) {
    this._heroes = v;
  }

  //#endregion

  //#region Component lifecycle events
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  //#endregion

  //#region constructor
  constructor(private heroService: HeroService) { }
  //#endregion

  //#region Public Methods
  //#endregion

  //#region Private Methods
  //#endregion
}
