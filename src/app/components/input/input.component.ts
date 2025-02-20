import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public valorItem !: string;

  constructor() { }

  ngOnInit(): void { }

  public adicionarItem() {
    console.log(this.valorItem);
  }
}
