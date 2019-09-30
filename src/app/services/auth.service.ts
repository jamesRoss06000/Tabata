import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Insomnia } from '@ionic-native/insomnia';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, public navCtrl: NavController, private router: Router) { }
  // Calculate break and total times in real time using times selected by user
  timeMath(restTime, restSec, secondCount, rest, total) {
    let totalRest = restSec * 7;
    let se = restTime % 60;
    restTime = (restTime - se) / 60;
    var sec;
    if (se <= 9) {
      sec = "0" + se;
    } else {
      sec = se;
    }
    let realRest = sec;
    rest.innerText = realRest;
    console.log(realRest);
    let completeSecondCount = secondCount * 8;
    var totalTime = completeSecondCount + totalRest;
    console.log("hello", completeSecondCount, totalRest, secondCount);
    let Tse = totalTime % 60;
    totalTime = (totalTime - Tse) / 60;
    let Tmi = totalTime % 60;
    var Tmin;
    var Tsec;
    if (Tmi <= 9) {
      Tmin = "0" + Tmi;
    } else {
      Tmin = Tmi;
    }
    if (Tse <= 9) {
      Tsec = "0" + Math.ceil(Tse);
    } else {
      Tsec = Math.ceil(Tse);
    }
    let realTotal = Tmin + ':' + Tsec;
    total.innerText = realTotal;
  }
  
  passData(countdown, tabata, id) {
    let navExtras: NavigationExtras = {
      state: {
        tabataData: [countdown, tabata, id]
      }
    }
    
    this.router.navigate(['/countdown/', id], navExtras);
  }
}