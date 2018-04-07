import { Component, OnInit } from '@angular/core';
import { Match, MatchService } from '../match.service'

@Component({
  selector: 'app-matchlist',
  templateUrl: './matchlist.component.html',
  styleUrls: ['./matchlist.component.css']
})
export class MatchlistComponent implements OnInit {

  public matches: Match[];

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.updateMatches();
  }

  updateMatches() {
    this.matchService.getMatches()
      .subscribe(data => this.matches = data);
  }

}
