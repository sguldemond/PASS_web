import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Match, MatchService } from '../match.service'

@Component({
  selector: 'app-matchlist',
  templateUrl: './matchlist.component.html',
  styleUrls: ['./matchlist.component.css']
})
export class MatchlistComponent implements OnInit {

  public loading: boolean;
  public status: string;
  public file: string;
  public matchList$: Observable<Match[]>;

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.loading = true;
    this.status = "Wedstrijden aan het ophalen..."
    this.matchList$ = this.matchService.getMatches();
  }

  selectFile(file) {
    console.log(file);
    this.file = file;
    this.status = "Samenvatting aan het ophalen..."
  }

  matchInfo(info) {
    return `${info.league}: ${info.home_team} - ${info.away_team} (${info.final_score})`;
  }

  // updateMatches() {
  //   this.matchService.getMatches()
  //     .subscribe(data => this.matchList$ = data);
  // }

}
