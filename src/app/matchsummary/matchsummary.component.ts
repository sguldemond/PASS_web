import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { MatchSummary, MatchService } from '../match.service'


@Component({
  selector: 'app-matchsummary',
  templateUrl: './matchsummary.component.html',
  styleUrls: ['./matchsummary.component.css']
})
export class MatchsummaryComponent implements OnInit, OnChanges {

  @Input() file: string;
  public matchSummary$: Observable<MatchSummary>;

  constructor(private matchService: MatchService) {
    this.file = 'ACH_FCD_19122015_goal.xml';
  }

  ngOnInit() {
    this.showSummary;
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for(let propName in changes) {
      let changedProp = changes[propName];
      console.log(changedProp);
      
      this.file = changedProp.currentValue;
      this.showSummary();
    }
  }

  showSummary() {
    this.matchSummary$ = this.matchService.getMatchSummary(this.file);
  }


}
