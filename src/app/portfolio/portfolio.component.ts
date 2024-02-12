import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  imgSrc(myClick:HTMLDivElement){
    myClick.classList.add( "d-block" );
    myClick.classList.remove( "d-none" );
  }

  close( click:HTMLDivElement ){
    click.classList.add( "d-none" );
  }
}
