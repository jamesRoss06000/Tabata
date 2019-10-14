import { Component, OnInit, DebugEventListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-countdown',
    templateUrl: './countdown.page.html',
    styleUrls: ['./countdown.page.scss'],
    providers: [AuthService]
})
export class CountdownPage implements OnInit {

    countdown: any;
    tabata: any;
    id: any;
    set: any;
    currentSet: any;
    currentSetDiv: any;
    setTest: any;
    phaseEnd: any;
    restTime: any;
    intervalOne: any;
    intervalTwo: any;
    intervalThree: any;
    intervalFour: any;
    displayDiv: any;
    m: any;
    s: any;
    startBtn: any;
    authState$: Observable<boolean>;
    secondCount: any;
    secs: any;
    restSecs: any;
    secCounter: any;
    minCounter: any;

    constructor(private Auth: AuthService, public http: HttpClient, private router: Router, private route: ActivatedRoute) {
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
            this.countdown > 0
            if (this.countdown < 10) {
                this.countdown = "0" + this.countdown;
            }
            this.displayDiv.innerHTML = this.countdown;
            if (this.countdown == 0) {
                clearInterval(this.intervalOne);
                this.intervalTwo = setInterval(() => this.work(this.restTime, this.set), 1000)
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
                this.intervalThree = setInterval(() => this.rest(this.displayDiv, this.restTime, this.set), 1000)
            } else {
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
                let secondCount: any = +this.tabata.split(':')[1];
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
}