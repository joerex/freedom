System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Load;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Load = (function () {
                function Load() {
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
                    this.numLoaded = 0;
                    this.totalSize = 0;
                    this.percLoaded = 0;
                    // save context
                    var _this = this;
                    // get total size of assets
                    this.assets.forEach(function (asset) {
                        _this.totalSize += asset.size;
                    });
                    console.log('Total size: ' + this.totalSize);
                    // assign percentage of 100% to each asset
                    this.assets.forEach(function (asset) {
                        asset.perc = Math.round(asset.size / _this.totalSize * 100);
                    });
                    // move on to load
                    this.loadFiles();
                }
                Load.prototype.loadFiles = function () {
                    // save context
                    var _this = this;
                    // load assets
                    this.assets.forEach(function (asset) {
                        // console.log('Preloading: ', asset.uri, asset.perc);
                        /* images  ----------------------------------------------------------- */
                        if (asset.type === 'image') {
                            var img = new Image();
                            img.onload = function () {
                                _this.numLoaded++;
                                _this.percLoaded += asset.perc;
                                //console.log(thisapp.percLoaded);
                            };
                            img.src = asset.uri;
                        }
                        else if (asset.type === 'video') {
                            var video = document.createElement('video');
                            // play inline if on an iphone (only works for native/hybrid apps)
                            var attr = document.createAttribute('webkit-playsinline');
                            attr.value = 'true';
                            video.setAttributeNode(attr);
                            video.addEventListener('loadeddata', function () {
                                _this.numLoaded++;
                                _this.percLoaded += asset.perc;
                                //console.log(thisapp.percLoaded);
                            }, false);
                            video.src = asset.uri;
                            video.load();
                        }
                    });
                };
                Load = __decorate([
                    core_1.Component({
                        selector: 'load',
                        template: " <div id=\"load-screen\">\n                  <div class=\"container\">\n                    <div class=\"wrap\">\n                      <div class=\"left\">{{percLoaded}}</div>\n                      <div class=\"right\">{{percLoaded}}</div>\n                    </div>\n                  </div>\n                </div>\n              "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Load);
                return Load;
            })();
            exports_1("Load", Load);
        }
    }
});
//# sourceMappingURL=load.js.map