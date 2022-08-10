import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  activeNavLink!: string;

  constructor() { }

  ngOnInit(): void {
    this.activeNavLink = 'home';
  }

  isActive(navLink: string): boolean {
    if(this.activeNavLink === navLink)
      return true;
    else
      return false;
  }

}
