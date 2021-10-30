import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myDestroy: Subscription = new Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const myobs$ = new Observable(obs => {
      console.log("Observable Starts");
      obs.next('200');
      // obs.error("not working hereafter");
      obs.next('300');
      // obs.complete();
      setTimeout(() => {
        obs.next('400');
      }, 1000);
      
      console.log("Observable End");


    })

    // myobs$.subscribe(sub => {
    //   console.log(sub);

    // }

    // )
    this.myDestroy=
    myobs$.subscribe(sub => {
      console.log(sub);

    },
      error => {
        console.log("Error" + error)

      },
      ()=>{
      console.log("Completed")

      }

    );
    this.myDestroy.unsubscribe();


  }
  gotocontact() {
    this.router.navigate(['/contactme']);

  }

}
