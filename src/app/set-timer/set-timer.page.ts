import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-set-timer',
  templateUrl: './set-timer.page.html',
  styleUrls: ['./set-timer.page.scss'],
})
export class SetTimerPage implements OnInit {
  id: any;
  authState$: Observable<boolean>;

  constructor(private Auth: AuthService, public http: HttpClient, private router: Router, private route: ActivatedRoute) { }

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

}
