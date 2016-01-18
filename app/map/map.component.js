System.register(['angular2/core', 'rxjs/Rx', '../data/data.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1, data_service_1;
    var Map;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Map = (function () {
                function Map(data) {
                    this.data = data;
                    this.dataservice = data;
                    this.load();
                    this.audio = document.getElementById('map-audio');
                    this.audio.play();
                    this.scroller = document.getElementById('scroller');
                    this.scrollText = document.getElementById('map-text');
                    this.scrollPosition = 50;
                    var _this = this;
                    this.scrollTimeout = setInterval(function () { _this.scroll(); }, 100);
                }
                Map.prototype.scroll = function () {
                    if (this.scrollPosition < -this.scrollText.clientWidth) {
                        this.scrollPosition = this.scroller.clientWidth;
                    }
                    else {
                        this.scrollPosition -= 3;
                    }
                    this.scrollText.style.left = this.scrollPosition;
                };
                Map.prototype.load = function () {
                    if (!this.dataservice.loaded) {
                        var _app = this;
                        setTimeout(function () { _app.load(); }, 200);
                    }
                    else {
                        var container = document.getElementById('map');
                        var options = {
                            center: new google.maps.LatLng(this.data.lastLat, this.data.lastLon),
                            disableDefaultUI: true,
                            zoomControl: true,
                            zoom: 8,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
                        var map = new google.maps.Map(container, options);
                        var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(this.data.lastLat, this.data.lastLon),
                            map: map,
                            icon: 'assets/images/marker.png'
                        });
                    }
                };
                Map.prototype.routerOnActivate = function (next, prev) {
                    return Rx_1.Observable.of(true).delay(400).toPromise();
                };
                Map.prototype.routerOnDeactivate = function (next, prev) {
                    clearInterval(this.scrollTimeout);
                    return Rx_1.Observable.of(true).delay(400).toPromise();
                };
                Map = __decorate([
                    core_1.Component({
                        selector: 'map',
                        template: "\n      <div id=\"map-wrapper\">\n        <div id=\"map\"></div>\n        <div id=\"info\">\n          <div id=\"scroller\">\n            <span id=\"map-text\">{{data.mapTicker}}</span>\n          </div>\n        </div>\n        <audio id=\"map-audio\" autoplay loop>\n          <source src=\"assets/audio/Overhead_Stadium_Audio_Final.ogg\" type=\"audio/ogg\" />\n          <source src=\"assets/audio/Overhead_Stadium_Audio_Final.mp3\" type=\"audio/mpeg\" />\n        </audio>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], Map);
                return Map;
            })();
            exports_1("Map", Map);
        }
    }
});
//# sourceMappingURL=map.component.js.map