import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-haslo',
  templateUrl: './haslo.component.html',
  styleUrls: ['./haslo.component.less']
})
export class HasloComponent implements OnInit {
  y = 'btn-outline-warning';


  constructor(private router: Router) { }

  LoginUser(e) {

    var alias = e.target.elements[0].value ;
    var password = e.target.elements[1].value ;

    console.log(alias,password);

    if(alias === 'host' && password === 'host'){
      this.router.navigate(['zalogowany']);
    }
    if(alias === 'admin' && password === 'admin'){
      this.router.navigate(['zalogowany']);
    }

    else {
      this.y = 'btn-outline-danger';
    }
  }

/*LoginUser(){


  let map = new Map<string,string>();
  map.set("alias", "host");
  map.set("password", "host");



  console.log(map);


}

*/

  ngOnInit() {
  }

}
