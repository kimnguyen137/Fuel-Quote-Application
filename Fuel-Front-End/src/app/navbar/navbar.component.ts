import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isCollapsed: boolean;
  isAbout: boolean;
  isRegister: boolean;
  isContact: boolean;
  navbarOpen = false;
  isHome: boolean;
  isProfile: boolean;
  isQuote: boolean;
  constructor(private appsevice: LoginService) {
  }
  ngOnInit() {
    this.appsevice.Collapsed.subscribe(c => {
      this.isCollapsed = c;
    });
    this.appsevice.Home.subscribe(c => {
      this.isHome = c;
    });
    this.appsevice.About.subscribe(c => {
      this.isAbout = c;
    });
    this.appsevice.Register.subscribe(c => {
      this.isRegister = c;
    });
    this.appsevice.Contact.subscribe (c => {
      this.isContact = c;
    });
    this.appsevice.Profile.subscribe (c => {
      this.isProfile = c;
    });
    this.appsevice.Quotes.subscribe(c => {
      this.isQuote = c;
    });
  }
  loginCollapsed() {
    this.appsevice.loginCollapsed();
  }
  homePage() {
    this.appsevice.homePage();
  }
  aboutPage() {
    this.appsevice.aboutPage();
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  registerPage() {
    this.appsevice.registerPage();
  }
  contactPage() {
    this.appsevice.contactPage();
  }
  profilePage() {
    this.appsevice.profilePage();
  }
  quotePage () {
    this.appsevice.QuotesPage();
  }
}
