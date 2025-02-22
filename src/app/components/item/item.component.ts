import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;

  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  public faPen = faPen;
  public faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges() { }

  ngOnDestroy() {
    console.log('Conseguiram me calar.');
  }

  public editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  public deletarItem() {
    this.emitindoIdParaDeletar.emit(this.item.id);
  }
}
