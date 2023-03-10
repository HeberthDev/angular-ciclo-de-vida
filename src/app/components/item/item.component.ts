import { Item } from 'src/app/interfaces/iItem';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnChanges(){
    console.log('OnChanges');
  }

}
