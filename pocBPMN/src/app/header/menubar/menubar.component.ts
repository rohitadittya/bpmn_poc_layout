import { Component, OnInit } from '@angular/core';
import { LeftpaneService } from 'src/app/service/leftpane.service';
import { LeftpaneHeader } from 'src/app/model/leftpaneHeader.model';  
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  leftpaneHeader: LeftpaneHeader[]

  constructor(private leftpaneService: LeftpaneService) { }

  ngOnInit() {
    this.leftpaneService.leftpaneHeaderChanged.subscribe(
      (changedHeaders) => {
        this.leftpaneHeader = changedHeaders;
      }
    )
    this.getLeftpaneDate();
  }
  getLeftpaneDate() {
    this.leftpaneHeader = this.leftpaneService.getLeftpaneData();
  }



  onToggleLeftHeaders(id) {
    console.log("called", id)
    this.leftpaneService.onToggleHeaders(id);
  } 
}

