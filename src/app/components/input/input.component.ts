import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;

  public valorItem !: string;

  constructor(
    private listaService: ListaDeCompraService,
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  public adicionarItem() {
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  private limparCampo() {
    this.valorItem = '';
  }
}
