import { Component, OnInit } from '@angular/core';
import { LeftpaneService } from '../service/leftpane.service';
import { LeftpaneHeader } from '../model/leftpaneHeader.model';

@Component({
  selector: 'app-leftpane',
  templateUrl: './leftpane.component.html',
  styleUrls: ['./leftpane.component.css']
})
export class LeftpaneComponent implements OnInit {

  leftpaneHeader: LeftpaneHeader[];

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


}
