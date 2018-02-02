import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-loja',
  templateUrl: './detalhes-loja.component.html',
  styleUrls: ['./detalhes-loja.component.scss']
})
export class DetalhesLojaComponent implements OnInit {

  loja = {id: null, nome: 'Minha Loja'};

  constructor(private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.loja.id = this.activeRoute.snapshot.params['id'];
    this.loja.nome = `${this.loja.nome} ${this.loja.id} `;

    console.log('Snapshot:', this.activeRoute.snapshot);

    this.activeRoute.url.subscribe((segments) => {
      console.log('Url change:', segments);
    });
  }

}
