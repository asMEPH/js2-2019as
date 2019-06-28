import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-haslo',
  templateUrl: './haslo.component.html',
  styleUrls: ['./haslo.component.less']
})
export class HasloComponent implements OnInit {
  m = new Map<string,string>();
  s = 'btn-outline-warning';
  y = 'btn-outline-warning';
  a = '';
  login = '';
  b = '';


  constructor(private router: Router) { }


  ngOnInit() {
    this.m.set('admin', 'admin');
    this.m.set('host', 'host');
    // this.m.set('admin', this.b);
    // this.m.set('host', this.b);
  }


  /*
    loginUser(e) {

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
    */

  loginUser(){

    /*let map = new Map<string,string>([
      [ "host", "host"],
      [ "admin", "admin"]
    ]);

    console.log(map);
    for (let [key, value] of map.Map()) {
      console.log(key, value);
    }*/


    console.log(this.m.get('admin'));
    let pass = this.m.get(this.login);


    // console.log(this.m.get('host'));

    if(this.a===pass){
      this.router.navigate(['zalogowany']);
    }
    if(this.a==='host' && this.login==='host'){
      this.router.navigate(['zalogowany']);
    }
    // }

    else {
      this.y = 'btn-outline-danger';
    }

  }

  changeP() {
    this.m.set('admin', this.b);
    this.m.set('host', this.b);

    if(this.a==='admin' && this.login === 'admin' || this.a==='host' && this.login === 'host'){
      this.m.set(this.a, this.b ); //nadpis
      console.log(this.m.get('admin'));
      console.log(this.m.get('host'))
    }
    else {
      this.s = 'btn-outline-danger';
    }
  }


}
