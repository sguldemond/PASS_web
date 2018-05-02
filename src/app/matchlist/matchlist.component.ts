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
    return `${info.league}: ${info.HomeTeam} - ${info.AwayTeam} (${info.FinalScore})`;
  }

  // updateMatches() {
  //   this.matchService.getMatches()
  //     .subscribe(data => this.matchList$ = data);
  // }

}
