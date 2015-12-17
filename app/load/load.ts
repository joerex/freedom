import {Component} from 'angular2/core';

@Component({
    selector: 'load',
    template: ` <div id="load-screen">
                  <div class="container">
                    <div class="wrap">
                      <div class="left">{{percLoaded}}</div>
                      <div class="right">{{percLoaded}}</div>
                    </div>
                  </div>
                </div>
              `
})

export class Load {
  public percLoaded : number;
  public totalSize : number;
  public numLoaded : number;
  public assets : Object[];

  constructor() {
    this.assets = [
      {
        uri: 'assets/loading-screen.jpg',
        type: 'image',
        size: 60
      },
      {
        uri: 'assets/jumbotron.png',
        type: 'image',
        size: 456
      },
      {
        uri: 'assets/stadium-top.jpg',
        type: 'image',
        size: 1800
      },
      {
        uri: 'assets/video/jumbotron-frame.mp4',
        type: 'video',
        size: 12800
      }

    ];
    // initiate values
    this.numLoaded= 0;
    this.totalSize = 0;
    this.percLoaded = 0;
    // save context
    var _this = this;
    // get total size of assets
    this.assets.forEach(function(asset) {
      _this.totalSize += asset.size;
    });
    console.log('Total size: ' + this.totalSize);
    // assign percentage of 100% to each asset
    this.assets.forEach(function(asset) {
      asset.perc = Math.round(asset.size / _this.totalSize * 100);
    });
    // move on to load
    this.loadFiles();
  }

  loadFiles() {
    // save context
    var _this = this;
    // load assets
    this.assets.forEach(function(asset) {
      // console.log('Preloading: ', asset.uri, asset.perc);
      /* images  ----------------------------------------------------------- */
      if (asset.type === 'image') {
        var img = new Image();
        img.onload = function() {
          _this.numLoaded++;
          _this.percLoaded += asset.perc;
          //console.log(thisapp.percLoaded);
        };
        img.src = asset.uri;
      }
      /* video  ----------------------------------------------------------- */
      else if (asset.type === 'video') {
        var video = document.createElement( 'video' );
        // play inline if on an iphone (only works for native/hybrid apps)
        var attr = document.createAttribute('webkit-playsinline');
        attr.value = 'true';
        video.setAttributeNode(attr);
        video.addEventListener('loadeddata', function() {
          _this.numLoaded++;
          _this.percLoaded += asset.perc;
          //console.log(thisapp.percLoaded);
        }, false);
      	video.src = asset.uri;
      	video.load();
      }
    });
  }

}
