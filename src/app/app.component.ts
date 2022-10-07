
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipes';

  
  constructor( )  {
    // this.translate.setDefaultLang('en');
    // this.translate.use;



  }
showbasket = false;


ngOnInit()
{

}



translate1()
{}


// se face pentru a deschide si inchide cosul cu recete !
togglebasket() {
  this.showbasket = !this.showbasket;
  // console.log(this.showbasket);
  
}

}
