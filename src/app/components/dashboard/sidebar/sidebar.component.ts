import {Component, OnInit} from '@angular/core';

declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: ''},
  {path: '/orders', title: 'Jewelry Making Orders', icon: 'create_new_folder', class: ''},
  {path: '/gem', title: 'Gems', icon: 'star', class: ''},
  {path: '/metal', title: 'Metals', icon: 'kitchen', class: ''},
  {path: '/makers', title: 'Jewelry Makers', icon: 'person', class: ''},
  {path: '/login', title: 'Login', icon: 'lock', class: ''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {
  }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
