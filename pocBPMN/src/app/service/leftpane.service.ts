import { Injectable } from '@angular/core';
import { LeftpaneHeader } from '../model/leftpaneHeader.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeftpaneService {
  leftpaneHeader: LeftpaneHeader[] = [
    new LeftpaneHeader('h1', 'Standard', ['1', 2, 3, '4'], true),
    new LeftpaneHeader('h2', 'Flowchart', ['a', 'b', 'c', 'd'], true),
    new LeftpaneHeader('h3', 'Containers', ['A', 'B', 'C', 'D'], true),
    new LeftpaneHeader('h4', 'Shapes', ['Square', 'Circle', 'Rectangle', 'Triangle'], true),
  ];
 

  leftpaneHeaderChanged = new Subject<LeftpaneHeader[]>();

  constructor() {
  }

  getLeftpaneData() {
    return this.leftpaneHeader.slice();
  }

  onToggleHeaders(id) {
    this.leftpaneHeader.map(h => {
      if (h.id === id) {
        h.show = !h.show
      }
    })
    this.leftpaneHeaderChanged.next(this.leftpaneHeader.slice())
  }

}
