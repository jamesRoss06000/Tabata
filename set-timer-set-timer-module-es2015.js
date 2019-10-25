(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["set-timer-set-timer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/set-timer/set-timer.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/set-timer/set-timer.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-title style=\"text-align: center\">\r\n      JR Coaching Apps\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"dark\">\r\n  <p class=\"ion-padding\">Select time in green boxes. Orange to start!</p>\r\n  <form (submit)=\"startTabata($event)\">\r\n    <ion-card color=\"tertiary\">\r\n      <ion-card-content class=\"grn\">\r\n        <ion-item>\r\n          <ion-label>Countdown (Seconds)</ion-label>\r\n          <ion-datetime id=\"countdown\" display-format=\"ss\">\r\n          </ion-datetime>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card color=\"tertiary\">\r\n      <ion-card-content>\r\n        <ion-item>\r\n          <ion-label>Work Times</ion-label>\r\n          <ion-datetime id=\"tabata\" display-format=\"ss\"(ionChange)=\"showRest($event)\">\r\n          </ion-datetime>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card color=\"medium\">\r\n      <ion-card-content>\r\n        <ion-item>\r\n          <ion-label>Rest Times</ion-label>\r\n          <ion-card-content id=\"rest\"></ion-card-content>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card color=\"medium\">\r\n      <ion-card-content>\r\n        <ion-item>\r\n          <ion-label>Total Workout</ion-label>\r\n          <ion-card-content id=\"total\"></ion-card-content>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-item color=\"success\"><input type=\"submit\" value=\"Begin Workout!\"></ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card color=\"danger\" (click)=\"backPage()\">\r\n      <ion-card-content id=\"backBtn\">\r\n        Return to Main Menu\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n  </form>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/set-timer/set-timer.module.ts":
/*!***********************************************!*\
  !*** ./src/app/set-timer/set-timer.module.ts ***!
  \***********************************************/
/*! exports provided: SetTimerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTimerPageModule", function() { return SetTimerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _set_timer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./set-timer.page */ "./src/app/set-timer/set-timer.page.ts");







const routes = [
    {
        path: '',
        component: _set_timer_page__WEBPACK_IMPORTED_MODULE_6__["SetTimerPage"]
    }
];
let SetTimerPageModule = class SetTimerPageModule {
};
SetTimerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_set_timer_page__WEBPACK_IMPORTED_MODULE_6__["SetTimerPage"]]
    })
], SetTimerPageModule);



/***/ }),

/***/ "./src/app/set-timer/set-timer.page.scss":
/*!***********************************************!*\
  !*** ./src/app/set-timer/set-timer.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  color: black;\n  font-weight: 550;\n}\n\nion-content {\n  text-align: center;\n}\n\ninput {\n  width: 100%;\n  height: 65px;\n  text-align: center;\n  background-color: #e27b1b;\n  color: black;\n  border: none;\n}\n\n.timeBtns {\n  padding: 20px 0 0 0;\n  height: 65px;\n}\n\n#backBtn {\n  height: 65px;\n  padding: 23px 0 0 0;\n  font-size: 16px;\n}\n\n#rest, #total {\n  font-size: 16px;\n  padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0LXRpbWVyL0M6XFxsYXJhZ29uXFx3d3dcXFRhYmF0YS9zcmNcXGFwcFxcc2V0LXRpbWVyXFxzZXQtdGltZXIucGFnZS5zY3NzIiwic3JjL2FwcC9zZXQtdGltZXIvc2V0LXRpbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2V0LXRpbWVyL3NldC10aW1lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjdiMWI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuLnRpbWVCdG5ze1xyXG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuI2JhY2tCdG57XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBwYWRkaW5nOiAyM3B4IDAgMCAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4jcmVzdCwgI3RvdGFsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn0iLCIqIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNTUwO1xufVxuXG5pb24tY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjdiMWI7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udGltZUJ0bnMge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xuICBoZWlnaHQ6IDY1cHg7XG59XG5cbiNiYWNrQnRuIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBwYWRkaW5nOiAyM3B4IDAgMCAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNyZXN0LCAjdG90YWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/set-timer/set-timer.page.ts":
/*!*********************************************!*\
  !*** ./src/app/set-timer/set-timer.page.ts ***!
  \*********************************************/
/*! exports provided: SetTimerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTimerPage", function() { return SetTimerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SetTimerPage = class SetTimerPage {
    constructor(Auth, http, router, route) {
        this.Auth = Auth;
        this.http = http;
        this.router = router;
        this.route = route;
    }
    showRest(event) {
        const url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1);
        // Number(id);
        let countdown = document.getElementById("countdown");
        Number(countdown);
        let target = event.target;
        let tarVal = target.value;
        let tabata = tarVal.substring(14, 19);
        // let m = +tabata.split(':')[0];
        let s = +tabata.split(':')[1];
        let secondCount = s;
        let rest = document.getElementById("rest");
        let total = document.getElementById("total");
        switch (id) {
            case id = "0":
                var restTime = Math.ceil(secondCount * 0.5);
                var restSec = +tabata.split(':')[1] / 2;
                this.Auth.timeMath(restTime, restSec, secondCount, rest, total);
                break;
            case id = "1":
                restTime = Math.ceil(secondCount * 0.33);
                restSec = +tabata.split(':')[1] / 3;
                this.Auth.timeMath(restTime, restSec, secondCount, rest, total);
                break;
            case id = "2":
                restTime = Math.ceil(secondCount * 0.25);
                restSec = +tabata.split(':')[1] / 4;
                this.Auth.timeMath(restTime, restSec, secondCount, rest, total);
                break;
            case id = "3":
                restTime = Math.ceil(secondCount * 0.20);
                restSec = +tabata.split(':')[1] / 5;
                this.Auth.timeMath(restTime, restSec, secondCount, rest, total);
                break;
        }
    }
    startTabata(event) {
        const target = event.target;
        let countdown = target.querySelector('#countdown').value;
        let tabata = target.querySelector('#tabata').value;
        const url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1);
        this.Auth.passData(countdown, tabata, id);
        // console.log("start tabata", countdown);
    }
    backPage() {
        this.router.navigate(['/home/']);
    }
    ngOnInit() {
    }
};
SetTimerPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
SetTimerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-set-timer',
        template: __webpack_require__(/*! raw-loader!./set-timer.page.html */ "./node_modules/raw-loader/index.js!./src/app/set-timer/set-timer.page.html"),
        styles: [__webpack_require__(/*! ./set-timer.page.scss */ "./src/app/set-timer/set-timer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], SetTimerPage);



/***/ })

}]);
//# sourceMappingURL=set-timer-set-timer-module-es2015.js.map