import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class Match {
  constructor(public file: string, public team1: string, public team2: string, public score: string) {}
}

export class MatchSummary {
  constructor(public home: string, public away: string) {}
}

@Injectable()
export class MatchService {

  api = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) {}

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.api + '/get_matches');
  }

  getMatchSummary(file: string): Observable<MatchSummary> {
    return this.http.get<MatchSummary>(this.api + '/get_summary', {
      params: {'file': file}
    });
  }

}
