import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { LeftpaneService } from '../service/leftpane.service';
import { LeftpaneHeader } from '../model/leftpaneHeader.model';
import { WorkareaCanvasComponent } from '../workarea-canvas/workarea-canvas.component';

@Component({
  selector: 'app-leftpane',
  templateUrl: './leftpane.component.html',
  styleUrls: ['./leftpane.component.css']
})
export class LeftpaneComponent implements OnInit {

  leftpaneHeader: LeftpaneHeader[];
  @Input() workarea: WorkareaCanvasComponent
  @ViewChild('leftpane') leftpane: ElementRef

  constructor(private leftpaneService: LeftpaneService) { }

  ngOnInit() {
    this.leftpaneService.leftpaneHeaderChanged.subscribe(
      (changedData) => {
        console.log("CHANGED DATA:", changedData)
        this.leftpaneHeader = changedData
      }
    );
    this.getLeftpaneData();
    setTimeout(() => {
      this.onToggleHeaders('h1');
    }, 3000)
  }




  getLeftpaneData() {
    this.leftpaneHeader = this.leftpaneService.getLeftpaneData();
    console.log("leftpaneData:", this.leftpaneHeader)
  }

  onToggleHeaders(id) {
    this.leftpaneService.onToggleHeaders(id);
  }

  onResizeRightpane() {
    var width = this.leftpane.nativeElement.style.width
      this.workarea.onResizeleftpane(parseInt(width) + 10 + 'px')
  }

}
