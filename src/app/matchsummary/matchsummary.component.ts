import { Component, OnInit } from '@angular/core';
import { MatchSummary, MatchService } from '../match.service'


@Component({
  selector: 'app-matchsummary',
  templateUrl: './matchsummary.component.html',
  styleUrls: ['./matchsummary.component.css']
})
export class MatchsummaryComponent implements OnInit {

  public file: string;
  public matchSummary: MatchSummary;

  public home: string;
  public away: string;

  constructor(private matchService: MatchService) {
    this.file = 'ACH_FCD_19122015_goal.xml';
    this.matchSummary;
  }

  ngOnInit() {
    this.updateMatches();
  }

  updateMatches() {
    this.matchService.getMatchSummary(this.file)
      .subscribe(
        data => this.matchSummary = data,
        error => console.log(error),
        () => this.showSummary());
  }

  showSummary() {
    console.log(this.matchSummary);
  }


}
