import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from './../environments/environment';

export class Match {
  constructor(public file: string, public info: {}) {}
}

export class MatchSummary {
  constructor(public meta: {}, public content: {}) {}
}

@Injectable()
export class MatchService {

  constructor(private http: HttpClient) {}

  getMatches(): Observable<Match[]> {
    const url = environment.apiUrl + '/get_matches';
    console.log(`Getting matches with '${url}' ...`)
    return this.http.get<Match[]>(url);
  }

  getMatchSummary(file: string): Observable<MatchSummary> {
    const url = environment.apiUrl + '/get_summary';
    console.log(`Getting summary with '${url}' ...`)
    return this.http.get<MatchSummary>(url, {
      params: {'file': file}
    });
  }

  matchDate(matchInfo) {
    var date = new Date(matchInfo.match_date);
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


}
