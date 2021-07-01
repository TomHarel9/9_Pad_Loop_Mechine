import { Component, OnInit } from '@angular/core';
import { PadComponent } from '../pad/pad.component';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  pads: PadComponent[] = [];
  PlayList: Map<Number,HTMLAudioElement> = new Map();
  isPlay: Boolean = false;

  constructor() { }

  ngOnInit(): void {
      this.pads = [
        new PadComponent('120_future_funk_beats_25', false),
        new PadComponent('120_stutter_breakbeats_16', false),
        new PadComponent('Bass Warwick heavy funk groove on E 120 BPM', false),
        new PadComponent('electric guitar coutry slide 120bpm - B', false),
        new PadComponent('FUD_120_StompySlosh', false),
        new PadComponent('GrooveB_120bpm_Tanggu', false),
        new PadComponent('MazePolitics_120_Perc', false),
        new PadComponent('PAS3GROOVE1.03B', false),
        new PadComponent('SilentStar_120_Em_OrganSynth', false)
      ]
  }

  toggleDone (id:number) {
    this.pads.map((v, i) => {
      if (i == id){
        v.isClicked = !v.isClicked;
        if(v.isClicked){
          this.PlayList.set(id, new Audio('../../assets/media/' + v.Name + '.mp3'));
        }
        else{
          this.PlayList.delete(id);
        }
      } 
      return v;
    })
    console.log(this.PlayList);
  }

  playPauseClick(){
    this.isPlay = !this.isPlay;
    if(this.isPlay){
      this.playAudio();
    } else{
      this.pauseAudio();
    }
  }

  playAudio(){
    for(let v of this.PlayList.values()){
      v.play();
      v.addEventListener('pause', (event) => {
        if(this.isPlay){
          this.playAudio();
        }
      });
    } 
  }

  pauseAudio(){
    for(let v of this.PlayList.values()){
      v.pause();
      v.currentTime = 0;
    }
  }

}
