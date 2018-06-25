import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  menus: any = [];

  constructor() { }

  ngOnInit() {
    const m1 = new Menu('a1', '菜单1');
    const m2 = new Menu('a2' , '菜单2');
    this.menus =[
      m1, m2
    ];
  }


}

export class Menu {
  public url: string;
  public title: string;


  constructor(url: string, title: string) {
    this.url = url;
    this.title = title;
  }
}
