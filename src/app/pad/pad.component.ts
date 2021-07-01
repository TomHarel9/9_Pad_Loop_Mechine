import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pad',
  template: `
    <button class="play">{{Name}}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class PadComponent implements OnInit {

  constructor(public Name:String ,public isClicked: Boolean) { 
  }

  ngOnInit(): void {
  }

}
