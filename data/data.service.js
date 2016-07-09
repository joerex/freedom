System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                    // this.load();
                }
                DataService.prototype.endpoint = function () {
                    return 'https://spreadsheets.google.com/feeds/list/' +
                        this.sheetid +
                        '/od6/public/values?alt=json';
                };
                DataService.prototype.total = function () {
                    return 102;
                };
                DataService.prototype.getStuff = function () {
                    return this.lastLon;
                };
                DataService.prototype.load = function () {
                    var _this = this;
                    console.log('Constructing DataService');
                    this.sheetid = '1JnlN7n_lGguvIJgQTA3f_tckG8wM8CyvTcbPqyZCPk8';
                    this.loaded = false;
                    this.http.get(this.endpoint())
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        _this.data = res.feed.entry;
                        _this.lastTarget = _this.data[0].gsx$target.$t;
                        _this.lastDate = _this.data[0].gsx$date.$t;
                        _this.lastKills = _this.data[0].gsx$kills.$t;
                        _this.lastLat = _this.data[0].gsx$latitude.$t;
                        _this.lastLon = _this.data[0].gsx$longitude.$t;
                        _this.homeTicker = _this.data[0].gsx$hometicker.$t;
                        _this.mapTicker = _this.data[0].gsx$mapticker.$t;
                        _this.totalKills = _this.total();
                        _this.loaded = true;
                    }, function (err) { return console.log('Error: ', err); }, function () { return console.log(''); });
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
