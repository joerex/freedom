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
    var Scoreboard;
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
            Scoreboard = (function () {
                function Scoreboard(data) {
                    this.data = data;
                    console.log('Constructing Scoreboard', data);
                    this.jumbotron = document.getElementById('jumbo-main');
                    this.jumbotron.play();
                    this.ticker = document.getElementById('ticker');
                    this.ticker.play();
                    setTimeout(function () { console.log('Data', data.lastTarget); }, 2000);
                }
                Scoreboard.prototype.routerOnActivate = function (next, prev) {
                    return Rx_1.Observable.of(true).delay(400).toPromise();
                };
                Scoreboard.prototype.routerOnDeactivate = function (next, prev) {
                    return Rx_1.Observable.of(true).delay(400).toPromise();
                };
                Scoreboard = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.None,
                        selector: 'scoreboard',
                        template: " <div id=\"jumbotron\" class=\"desktop\">\n                  <div class=\"screen-wrap\">\n                      <div class=\"stats-wrap\">\n                        <div class=\"stats-container\">\n                          <div class=\"stat\"><span class=\"target\">{{data.lastTarget}}</span></div>\n                          <div class=\"stat\"><span class=\"date\">{{data.lastDate}}</span></div>\n                          <div class=\"stat\"><span class=\"kills\">{{data.lastKills}}</span></div>\n                          <div class=\"stat\"><span class=\"total-kills\">{{data.totalKills}}</span></div>\n                        </div>\n                      </div>\n                      <!-- movie -->\n                      <div class=\"video\">\n                        <video id=\"jumbo-main\" autoplay loop>\n                          <source src=\"http://jdreckley.cachefly.net/freedom/assets/video/Globatron_Video_1_Final_2_23RF.mp4\" type=\"video/mp4\">\n                        </video>\n                      </div>\n                      <!-- end movie -->\n                      <!-- right side -->\n                      <div class=\"\"></div>\n                      <!-- end right side -->\n                  </div>\n                  <div class=\"ticker-wrap\">\n                    <div class=\"ticker-container\">\n                      <span>{{data.homeTicker}}</span>\n                      <video id=\"ticker\" class=\"bg-vid\" autoplay loop>\n                        <source src=\"http://jdreckley.cachefly.net/freedom/assets/video/STOCK_TICKER_LOOP_FINAL.mp4\" type=\"video/mp4\">\n                      </video>\n                    </div>\n                  </div>\n              </div>\n              "
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], Scoreboard);
                return Scoreboard;
            })();
            exports_1("Scoreboard", Scoreboard);
        }
    }
});
//# sourceMappingURL=scoreboard.component.js.map