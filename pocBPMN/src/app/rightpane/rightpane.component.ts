import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { WorkareaCanvasComponent } from '../workarea-canvas/workarea-canvas.component';

@Component({
  selector: 'app-rightpane',
  templateUrl: './rightpane.component.html',
  styleUrls: ['./rightpane.component.css']
})
export class RightpaneComponent implements OnInit {

  @ViewChild('rightpane') rightpane: ElementRef
  @Input() workarea: WorkareaCanvasComponent
  show: boolean = true
  constructor() { }

  ngOnInit() {
  }

  openNav() {
    this.rightpane.nativeElement.style.width = '200px'
    this.workarea.onResizeWorkarea('210px')
    this.show = false
  }
  closeNav() {
    this.rightpane.nativeElement.style.width = '20px'
    this.workarea.onResizeWorkarea('30px')
    this.show = true
  }
}
