import { Item } from 'src/app/interfaces/iItem';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;
  @Output() emitirItemParaEditar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(){

  }

  editarItem() {
    this.emitirItemParaEditar.emit(this.item);
  }

}
