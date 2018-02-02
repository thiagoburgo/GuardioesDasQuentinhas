import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-loja',
  templateUrl: './listagem-loja.component.html',
  styleUrls: ['./listagem-loja.component.scss']
})
export class ListagemLojaComponent implements OnInit {

  lojas: Array<any> = [
    {nome: 'Loja 1', id: 1},
    {nome: 'Loja 2', id: 2},
    {nome: 'Loja 3', id: 3},
    {nome: 'Loja 4', id: 4},
    {nome: 'Loja 5', id: 5},
    {nome: 'Loja 6', id: 6},
    {nome: 'Loja 7', id: 7}
];

constructor() { }

  ngOnInit() {
  }

}
