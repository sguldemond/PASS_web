import { Component, OnInit } from '@angular/core';
import { Match, MatchService } from '../../src/app/match.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public matches: Match[];

  title = 'PASS web interface';

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.updateMatches();
  }

  updateMatches() {
    this.matchService.getMatches()
      .subscribe(data => this.matches = data);
  }
}
