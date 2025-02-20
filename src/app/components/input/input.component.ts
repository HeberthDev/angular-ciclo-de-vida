import { Component, OnInit } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public valorItem !: string;

  constructor(
    private listaService: ListaDeCompraService,
  ) { }

  ngOnInit(): void { }

  public adicionarItem() {
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  private limparCampo() {
    this.valorItem = '';
  }
}
