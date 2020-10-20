import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  sliderConfig = {
    slidesPerView: 2.1,
    spaceBetween: 1,
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
