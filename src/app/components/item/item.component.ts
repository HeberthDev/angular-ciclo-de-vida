import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;

  @Output() emitindoItemParaEditar = new EventEmitter();

  public faPen = faPen;
  public faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges() { }

  public editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }
}
