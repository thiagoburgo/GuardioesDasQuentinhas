import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-porcao',
  templateUrl: './cadastro-porcao.component.html',
  styleUrls: ['./cadastro-porcao.component.scss']
})
export class CadastroPorcaoComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  irParaLogin() {
    this.router.navigate(['/account/login']);
  }
}
