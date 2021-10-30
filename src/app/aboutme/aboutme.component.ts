import { Component, OnDestroy, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { fromEvent } from 'rxjs';

import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit ,OnDestroy{
  myDestroy: Subscription = new Subscription;
  constructor() { }

  ngOnInit(): void {
    // const of$=of(1,2,3,4,5,6,7,8,9,10).pipe(filter(f=>f%2==0),map(m=>m*100));
    // of$.subscribe(sub=>{

    //   console.log(sub);
    // })
    

    const el = document.getElementById('my-element')!;
    
    // Create an Observable that will publish mouse movements
    const mouseMoves = fromEvent<MouseEvent>(el, 'click');
    
    // Subscribe to start listening for mouse-move events
    const subscription = mouseMoves.subscribe(evt => {
      // Log coords of mouse movements
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    
      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
    });


    
  }
ngOnDestroy()
{
this.myDestroy.unsubscribe();

}


}
