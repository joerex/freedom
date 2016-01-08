import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {ComponentInstruction} from 'angular2/router';
import {DataService} from '../data/data.service';

@Component({
    selector: 'map',
    template: `
      <div id="map-wrapper">
        <div id="map"></div>
        <div id="info">
          <p>
            {{data.mapTicker}}
          </p>
        </div>
        <audio id="map-audio" autoplay loop>
          <source src="assets/audio/Overhead_Stadium_Audio_Final.ogg" type="audio/ogg" />
          <source src="assets/audio/Overhead_Stadium_Audio_Final.mp3" type="audio/mpeg" />
        </audio>
      </div>
    `
})

export class Map {
  dataservice : DataService;
  audio : Object;

  constructor( public data : DataService ) {
    this.dataservice = data;
    this.load();
    this.audio = document.getElementById('map-audio');
    this.audio.play();
  }

  load() {
    if (!this.dataservice.loaded) {
      var _app = this;
      setTimeout(function() { _app.load() }, 200);
    }
    else {
      var container = document.getElementById('map');
      var options = {
            center: new google.maps.LatLng(this.data.lastLat, this.data.lastLon),
            disableDefaultUI: true,
            zoomControl: true,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
      var map = new google.maps.Map(container, options);
      var marker = new google.maps.Marker({
           position: new google.maps.LatLng(this.data.lastLat, this.data.lastLon),
           map: map,
           icon: 'assets/images/marker.png'
         });
    }
  }

  routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return Observable.of(true).delay(400).toPromise();
  }

  routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return Observable.of(true).delay(400).toPromise();
  }

}
