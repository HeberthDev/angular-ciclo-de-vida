import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck {
  public title = 'app-lista-de-compras';
  public listaDeCompras !: Array<Item>;
  public itemParaSerEditado !: Item;

  constructor(
    private listaService: ListaDeCompraService,
  ) { }

  ngOnInit(): void {
    this.listaDeCompras = this.listaService.getListaDeCompra();
    console.log('listaDeCompras -> ', this.listaDeCompras);
  }

  ngDoCheck() {
    console.log('DoCheck foi chamado.')
    this.listaService.atualizarLocalStorage();
  }

  public editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }
}
