import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-workarea-canvas',
  templateUrl: './workarea-canvas.component.html',
  styleUrls: ['./workarea-canvas.component.css']
})
export class WorkareaCanvasComponent implements OnInit {

  @ViewChild('workarea') workarea: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onResizeRightpane(width: String) {
    this.workarea.nativeElement.style.marginRight = width
  }

  onResizeleftpane(width: string) {
    console.log("width:",width)
    if(parseInt(width)>500){
      this.workarea.nativeElement.style.marginLeft = '510px' 
    }
    else{
      this.workarea.nativeElement.style.marginLeft =width
    }
  }

}
