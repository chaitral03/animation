import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
   styles:[`
      div{
         margin: 0 auto;
         text-align: center;
         width:200px;
      }
      
   `],
   animations: [
      //trigger('myanimation',
        // state('smaller',style({
          //  transform : 'translateY(300px)'
         //})),
         //state('larger',style({
           // transform : 'translateY(0px)'
         //})),
         //transition('smaller <=> larger',animate('500ms ease-in'))
      //])
      trigger('rotate', [
         state('default', style({ transform: 'rotate(0)' })),
         state('rotated', style({ transform: 'rotate(-180deg)' })),
         transition('rotated => default', animate('400ms ease-out')),
         transition('default => rotated', animate('400ms ease-in'))
   ])

   ]
})
export class AppComponent {
   //state: string = "smaller";
   //animate() {
     // this.state= this.state == 'larger' ? 'smaller' : 'larger';
   //}
   state: string = 'default';

    rotate() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }
}