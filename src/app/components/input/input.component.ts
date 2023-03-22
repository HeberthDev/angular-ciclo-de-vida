import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Item } from './../../interfaces/iItem';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  editando = false;
  textoBtn = 'Salvar item';

  valorItem!: string;

  constructor(
    private servicoListaDeCompra: ListaDeCompraService,
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges){
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editar item';

      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  adicionarItem() {
    this.servicoListaDeCompra.adicionarItemNaLista(this.valorItem);

    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = ' ';
  }

  editarItem() {
    this.servicoListaDeCompra.editarItemDaLista(this.itemQueVaiSerEditado, this.valorItem);

    this.limparCampo();

    this.editando = false;
    this.textoBtn = 'Salvar item';
  }
}
