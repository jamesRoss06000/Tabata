(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["countdown-countdown-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/countdown/countdown.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/countdown/countdown.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"https://kit.fontawesome.com/8965a0620e.js\"></script>\r\n\r\n<body>\r\n\r\n\r\n  <ion-header>\r\n    <ion-toolbar color=\"medium\">\r\n      <ion-title style=\"text-align: center\">\r\n        JR Coaching Apps\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content color=\"dark\">\r\n\r\n    <ion-card id=\"startBtn\" color=\"tertiary\" (click)=\"repeat()\" class=\"green\">\r\n      <ion-card-content id=\"start\">\r\n        Start Countdown\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div>\r\n      <ion-card color=\"medium\">\r\n        <ion-card-content id=\"currentSet\" [innerHTML]=\"this.currentSet\">\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-card color=\"success\">\r\n        <ion-card-content class=\"green orange\" id=\"counter\" [innerHTML]=\"this.countdown\">\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <ion-card color=\"medium\">\r\n      <ion-card-content id=\"elapsedLabel\">\r\n        Total Time Elapsed\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card color=\"medium\">\r\n      <ion-card-content id=\"timeElapsed\">\r\n        <span id=\"m\"></span>\r\n        :\r\n        <span id=\"s\"></span>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card color=\"success\" (click)=\"pausePlay()\">\r\n      <ion-card-content id=\"pause\">\r\n        pause / play\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card color=\"danger\" (click)=\"previousPage()\">\r\n      <ion-card-content id=\"quit\">\r\n        Previous Page\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n  </ion-content>\r\n</body>"

/***/ }),

/***/ "./src/app/countdown/countdown.module.ts":
/*!***********************************************!*\
  !*** ./src/app/countdown/countdown.module.ts ***!
  \***********************************************/
/*! exports provided: CountdownPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownPageModule", function() { return CountdownPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _countdown_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./countdown.page */ "./src/app/countdown/countdown.page.ts");







const routes = [
    {
        path: '',
        component: _countdown_page__WEBPACK_IMPORTED_MODULE_6__["CountdownPage"]
    }
];
let CountdownPageModule = class CountdownPageModule {
};
CountdownPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_countdown_page__WEBPACK_IMPORTED_MODULE_6__["CountdownPage"]]
    })
], CountdownPageModule);



/***/ }),

/***/ "./src/app/countdown/countdown.page.scss":
/*!***********************************************!*\
  !*** ./src/app/countdown/countdown.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  text-align: center;\n  color: black;\n  font-weight: 550;\n}\n\n#counter, #timeElapsed {\n  font-family: Orbitron;\n  font-size: 50px;\n}\n\n.green {\n  background-color: #01AA31;\n  min-height: 47px;\n}\n\n.orange {\n  background-color: #e27b1b;\n}\n\n.grey {\n  padding-top: 17px;\n  background-color: #979192;\n  min-height: 47px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRkb3duL0M6XFxsYXJhZ29uXFx3d3dcXFRhYmF0YS9zcmNcXGFwcFxcY291bnRkb3duXFxjb3VudGRvd24ucGFnZS5zY3NzIiwic3JjL2FwcC9jb3VudGRvd24vY291bnRkb3duLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZG93bi9jb3VudGRvd24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbn1cclxuXHJcbiNjb3VudGVyLCAjdGltZUVsYXBzZWR7XHJcbiAgICBmb250LWZhbWlseTogT3JiaXRyb247XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5ncmVlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMUFBMzE7XHJcbiAgICBtaW4taGVpZ2h0OiA0N3B4O1xyXG59XHJcblxyXG4ub3Jhbmdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyN2IxYjtcclxufVxyXG5cclxuLmdyZXkge1xyXG4gICAgcGFkZGluZy10b3A6IDE3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5MTkyO1xyXG4gICAgbWluLWhlaWdodDogNDdweDtcclxuICAgIC8vIGNvbG9yOiAjRjRGNEY0O1xyXG59IiwiKiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNTUwO1xufVxuXG4jY291bnRlciwgI3RpbWVFbGFwc2VkIHtcbiAgZm9udC1mYW1pbHk6IE9yYml0cm9uO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMUFBMzE7XG4gIG1pbi1oZWlnaHQ6IDQ3cHg7XG59XG5cbi5vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI3YjFiO1xufVxuXG4uZ3JleSB7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc5MTkyO1xuICBtaW4taGVpZ2h0OiA0N3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/countdown/countdown.page.ts":
/*!*********************************************!*\
  !*** ./src/app/countdown/countdown.page.ts ***!
  \*********************************************/
/*! exports provided: CountdownPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownPage", function() { return CountdownPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CountdownPage = class CountdownPage {
    constructor(Auth, http, router, route) {
        this.Auth = Auth;
        this.http = http;
        this.router = router;
        this.route = route;
    }
    repeat() {
        this.startBtn.classList.remove('green');
        this.startBtn.classList.add('grey');
        this.startBtn.innerHTML = "Prepare/Rest on orange, Workout on green";
        this.intervalOne = setInterval(() => this.begin(this.countdown, this.tabata, this.displayDiv), 1000);
        this.intervalFour = setInterval(() => this.totalTime(this.secs, this.restSecs), 1000);
    }
    begin(myCountdown, myTabata, myDisplay) {
        this.displayDiv = myDisplay;
        if (this.set == 1) {
            this.countdown = myCountdown - 1;
            this.countdown > 0;
            if (this.countdown < 10) {
                this.countdown = "0" + this.countdown;
            }
            this.displayDiv.innerHTML = this.countdown;
            if (this.countdown == 0) {
                clearInterval(this.intervalOne);
                this.intervalTwo = setInterval(() => this.work(this.restTime, this.set), 1000);
                this.displayDiv.classList.remove('orange');
            }
        }
    }
    work(myRest, set) {
        this.set = set;
        this.secondCount--;
        if (this.secondCount < 10) {
            this.secondCount = "0" + this.secondCount;
        }
        this.displayDiv.innerHTML = this.secondCount;
        if (this.secondCount == 0) {
            clearInterval(this.intervalTwo);
            this.displayDiv.classList.remove('green');
            this.displayDiv.classList.add('orange');
            this.secondCount = +this.tabata.split(':')[1];
            if (this.set < 8) {
                this.intervalThree = setInterval(() => this.rest(this.displayDiv, this.restTime, this.set), 1000);
            }
            else {
                alert("Good work!");
            }
        }
    }
    rest(myDisplay, myRest, set) {
        var displayDiv = myDisplay;
        this.restTime = myRest;
        this.set = set;
        this.restTime--;
        if (this.restTime < 10) {
            this.restTime = "0" + this.restTime;
        }
        displayDiv.innerHTML = this.restTime;
        if (this.restTime == 0) {
            clearInterval(this.intervalThree);
            this.displayDiv.classList.remove('orange');
            this.displayDiv.classList.add('green');
            this.secondCount = +this.tabata.split(':')[1];
            switch (this.id) {
                case this.id = "0":
                    this.restTime = Math.ceil(this.secondCount * 0.5);
                    break;
                case this.id = "1":
                    this.restTime = Math.ceil(this.secondCount * 0.33);
                    break;
                case this.id = "2":
                    this.restTime = Math.ceil(this.secondCount * 0.25);
                    break;
                case this.id = "3":
                    this.restTime = Math.ceil(this.secondCount * 0.20);
                    break;
            }
            this.set++;
            console.log("this set = ", this.set);
            this.intervalTwo = setInterval(() => this.work(this.secondCount, this.set), 1000);
            this.currentSetDiv.innerHTML = "Set " + this.set + " of 8";
        }
    }
    totalTime(seconds, rests) {
        var fullTime = seconds * 8 + rests * 7;
        fullTime--;
        this.secCounter++;
        if (this.secCounter < 10) {
            this.secCounter = "0" + this.secCounter;
        }
        // if (this.minCounter < 10) {
        //     this.minCounter = "00";
        // }
        if (this.secCounter == 60) {
            this.secCounter = "00";
            this.minCounter++;
        }
        if (fullTime == 0) {
            clearInterval(this.intervalFour);
        }
        this.m.innerHTML = this.minCounter;
        this.s.innerHTML = this.secCounter;
        console.log(this.secCounter, this.minCounter, "test");
    }
    previousPage() {
        const url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1);
        clearInterval(this.intervalOne);
        clearInterval(this.intervalTwo);
        clearInterval(this.intervalThree);
        clearInterval(this.intervalFour);
        this.router.navigate(['/set-timer/', id]);
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.countdown = this.router.getCurrentNavigation().extras.state.tabataData[0].substring(17, 19);
                this.tabata = this.router.getCurrentNavigation().extras.state.tabataData[1].substring(14, 19);
                this.id = this.router.getCurrentNavigation().extras.state.tabataData[2];
                this.set = 1;
                this.currentSet = "Set " + this.set + " of 8";
                this.startBtn = document.querySelector('#startBtn');
                this.displayDiv = document.querySelector('#counter');
                this.currentSetDiv = document.querySelector('#currentSet');
                let secondCount = +this.tabata.split(':')[1];
                this.secondCount = +this.tabata.split(':')[1];
                switch (this.id) {
                    case this.id = "0":
                        this.restTime = Math.ceil(secondCount * 0.5);
                        break;
                    case this.id = "1":
                        this.restTime = Math.ceil(secondCount * 0.33);
                        break;
                    case this.id = "2":
                        this.restTime = Math.ceil(secondCount * 0.25);
                        break;
                    case this.id = "3":
                        this.restTime = Math.ceil(secondCount * 0.20);
                        break;
                }
                this.secs = this.secondCount;
                this.restSecs = this.restTime;
                this.m = document.querySelector('#m');
                this.s = document.querySelector('#s');
                this.secCounter = 0;
                this.minCounter = 0;
            }
        });
    }
};
CountdownPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CountdownPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-countdown',
        template: __webpack_require__(/*! raw-loader!./countdown.page.html */ "./node_modules/raw-loader/index.js!./src/app/countdown/countdown.page.html"),
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
        styles: [__webpack_require__(/*! ./countdown.page.scss */ "./src/app/countdown/countdown.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], CountdownPage);



/***/ })

}]);
//# sourceMappingURL=countdown-countdown-module-es2015.js.map