import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DataService {
  sheetid : string;
  data : Object;
  lastLat: number;
  lastLon: number;
  lastTarget: string;
  lastDate: string;
  lastKills: number;
  totalKills: number;
  homeTicker: string;
  mapTicker: string;
  loaded : Boolean;

  constructor( public http : Http ) {
    // this.load();
  }

  endpoint() {
    return 'https://spreadsheets.google.com/feeds/list/' +
            this.sheetid +
            '/od6/public/values?alt=json';
  }

  total() {
    return 102;
  }

  getStuff() {
    return this.lastLon;
  }

  load() {
    console.log('Constructing DataService');
    this.sheetid = '1JnlN7n_lGguvIJgQTA3f_tckG8wM8CyvTcbPqyZCPk8';
    this.loaded = false;
    this.http.get(this.endpoint())
    .map(res => res.json())
    .subscribe(
      res => {
        this.data = res.feed.entry;
        this.lastTarget = this.data[0].gsx$target.$t;
        this.lastDate = this.data[0].gsx$date.$t;
        this.lastKills = this.data[0].gsx$kills.$t;
        this.lastLat = this.data[0].gsx$latitude.$t;
        this.lastLon = this.data[0].gsx$longitude.$t;
        this.homeTicker = this.data[0].gsx$hometicker.$t;
        this.mapTicker = this.data[0].gsx$mapticker.$t;
        this.totalKills = this.total();
        this.loaded = true;
      },
      err => console.log('Error: ', err),
      () => console.log('')
    );
  }

}
