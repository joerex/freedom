System.register(['angular2/core', 'angular2/router', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, Rx_1;
    var Load;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            Load = (function () {
                function Load(_router, elem) {
                    this._router = _router;
                    this.elem = elem;
                    this.assets = [
                        {
                            uri: 'http://jdreckley.cachefly.net/freedom/assets/images/loading-screen.jpg',
                            type: 'image',
                            size: 33
                        },
                        {
                            uri: 'http://jdreckley.cachefly.net/freedom/assets/images/globatron/GLOBATRON_SCOREBOARD.png',
                            type: 'image',
                            size: 456
                        },
                        {
                            uri: 'http://jdreckley.cachefly.net/freedom/assets/images/globatron/GLOBATRON_WALL_Top.png',
                            type: 'image',
                            size: 1800
                        },
                        {
                            uri: 'http://jdreckley.cachefly.net/freedom/assets/images/globatron/GLOBATRON_WALL.jpg',
                            type: 'image',
                            size: 1800
                        },
                        {
                            uri: 'http://jdreckley.cachefly.net/freedom/assets/video/Globatron_Video_1_Final_2_23RF.mp4',
                            type: 'video',
                            size: 12800
                        },
                        {
                            uri: 'http://jdreckley.cachefly.net/freedom/assets/video/Background_Sky_Final.mp4',
                            type: 'video',
                            size: 3300
                        },
                        {
                            uri: 'http://jdreckley.cachefly.net/freedom/assets/video/intro.mp4',
                            type: 'video',
                            size: 4400
                        },
                        {
                            uri: 'http://jdreckley.cachefly.net/freedom/assets/video/Audience_Loop_Final_3.mp4',
                            type: 'video',
                            size: 3700
                        },
                        {
                            uri: 'http://jdreckley.cachefly.net/freedom/assets/video/STOCK_TICKER_LOOP_FINAL.mp4',
                            type: 'video',
                            size: 4000
                        }
                    ];
                    // initiate values
                    this.numLoaded = 0;
                    this.totalSize = 0;
                    this.percLoaded = 0;
                    this.videos = [];
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
                    var _this = this;
                    // load assets
                    this.assets.forEach(function (asset) {
                        //console.log('Preloading: ', asset.uri, asset.perc);
                        /* images  ----------------------------------------------------------- */
                        if (asset.type === 'image') {
                            var img = new Image();
                            img.onload = function () {
                                //console.log('Image loaded. Total loaded: ' + _this.percLoaded, asset.uri);
                                _this.numLoaded++;
                                _this.percLoaded += asset.perc;
                                if (_this.numLoaded === _this.assets.length) {
                                    setTimeout(function () { _this.finish(); }, 1000);
                                }
                            };
                            img.onerror = function () {
                                console.log('Image load failed.', asset.uri);
                            };
                            img.src = asset.uri;
                        }
                        else if (asset.type === 'video') {
                            var video = document.createElement('video');
                            // play inline if on an iphone (only works for native/hybrid apps)
                            //var attr = document.createAttribute('webkit-playsinline');
                            //attr.value = 'true';
                            //video.setAttributeNode(attr);
                            video.addEventListener('loadeddata', function () {
                                //console.log('Video loaded. Total loaded: ' + _this.percLoaded, asset.uri);
                                _this.numLoaded++;
                                _this.percLoaded += asset.perc;
                                if (_this.numLoaded === _this.assets.length) {
                                    setTimeout(function () { _this.finish(); }, 1000);
                                }
                            }, false);
                            video.addEventListener('onerror', function () {
                                console.log('Video load failed.', asset.uri);
                            }, false);
                            video.src = asset.uri;
                            video.load();
                            _this.videos.push(video);
                        }
                    });
                };
                Load.prototype.finish = function () {
                    console.log('Finishing');
                    var event = document.createEvent('Event');
                    event.initEvent('setForIntro', true, true);
                    this.elem.nativeElement.dispatchEvent(event);
                    this._router.navigate(['Intro']);
                };
                Load.prototype.routerOnActivate = function (next, prev) {
                    return Rx_1.Observable.of(true).delay(100).toPromise();
                };
                Load.prototype.routerOnDeactivate = function (next, prev) {
                    return Rx_1.Observable.of(true).delay(200).toPromise();
                };
                Load = __decorate([
                    core_1.Component({
                        selector: 'load',
                        template: " <div id=\"load-screen\">\n                  <div class=\"container\">\n                    <div class=\"wrap\">\n                      <div class=\"left\">{{percLoaded}}</div>\n                      <div class=\"right\">{{percLoaded}}</div>\n                    </div>\n                  </div>\n                </div>\n              "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef])
                ], Load);
                return Load;
            })();
            exports_1("Load", Load);
        }
    }
});
//# sourceMappingURL=load.component.js.map