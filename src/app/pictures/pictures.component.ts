import { Component, OnInit } from '@angular/core';
import {ITEMS} from './mock-transport';
import { Transport } from './transport';
@Component({
  selector: 'app-pictures',
  template: `<ul class="items">
            <button *ngFor="let item of items"
            (click)="onSelect(item)"
            [class.selected]="item === selectedItem">
            {{item.title}}
            </button>
            </ul>
            <div *ngIf="selectedItem">
            <p>{{selectedItem.info}}</p>
            <img [attr.src]='selectedItem.photo'>
            </div>`,
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  items = ITEMS;
  selectedItem: Transport= new Transport()

  onSelect(item: Transport): void {
  this.selectedItem = item;
  }

  constructor() { }

  ngOnInit(): void {

  }
}
