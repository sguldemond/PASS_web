import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Match, MatchService } from '../match.service'

@Component({
  selector: 'app-matchlist',
  templateUrl: './matchlist.component.html',
  styleUrls: ['./matchlist.component.css']
})
export class MatchlistComponent implements OnInit {

  public file: string;
  public matchList$: Observable<Match[]>;

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.matchList$ = this.matchService.getMatches();
  }

  selectFile(file) {
    console.log(file);
    this.file = file;
  }

  matchInfo(info) {
    return `${info.league}: ${info.home_team} - ${info.away_team} (${info.final_score})`;
  }

  matchDate(matchInfo) {
    var date = new Date(matchInfo.match_date);
    // TODO: format aanpassen DD-MM-YYYY
    var monthNames = [
      "januari", "februari", "maart",
      "april", "mei", "juni", "juli",
      "augustus", "september", "oktober",
      "november", "december"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

  // updateMatches() {
  //   this.matchService.getMatches()
  //     .subscribe(data => this.matchList$ = data);
  // }

}
