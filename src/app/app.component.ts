import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-lista-de-compras';

  public listaDeCompra! : Array<Item>

  constructor(
    private servicoListaDeCompra: ListaDeCompraService,
  ) { }

  ngOnInit(){
    this.listaDeCompra = this.servicoListaDeCompra.getListaDeCompra();
  }

  editarItem(item: Item) {
    console.log(item);
  }
}
