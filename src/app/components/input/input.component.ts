import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  valorItem!: string;

  constructor(
    private servicoListaDeCompra: ListaDeCompraService,
  ) { }

  ngOnInit(): void { }

  adicionarItem() {
    this.servicoListaDeCompra.adicionarItemNaLista(this.valorItem);

    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = "";
  }
}
