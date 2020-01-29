import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-workarea-canvas',
  templateUrl: './workarea-canvas.component.html',
  styleUrls: ['./workarea-canvas.component.css']
})
export class WorkareaCanvasComponent implements OnInit {

  @ViewChild('workarea') workarea:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onResizeWorkarea(width:String){
    console.log("called")
    this.workarea.nativeElement.style.marginRight=width
  }

}
