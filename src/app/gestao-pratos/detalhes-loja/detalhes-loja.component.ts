import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmarSairSemSalvar } from '../../shared/ConfirmarSairSemSalvar';

@Component({
  selector: 'app-detalhes-loja',
  templateUrl: './detalhes-loja.component.html',
  styleUrls: ['./detalhes-loja.component.scss']
})
export class DetalhesLojaComponent implements OnInit, ConfirmarSairSemSalvar {


  loja = {id: null, nome: 'Minha Loja'};

  private dadosAlterados = false;

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

  salvarLoja(id: number, nome: string) {
    console.log(`Loja: Id=${id}, Nome=${nome}`);
    this.dadosAlterados = false;
  }

  onInput() {
    this.dadosAlterados = true;
    console.log(this.dadosAlterados);
  }

  checaSairSemSalvar(): boolean {
    if (this.dadosAlterados) {
      return confirm('Deseja sair do detalhe da loja sem salvar?');
    }
    return true;
  }
}
