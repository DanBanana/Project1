import { Component, OnInit } from '@angular/core'
import { Router, NavigationExtras } from '@angular/router'

import { AuthService } from "angularx-social-login"
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login"
import { SocialUser } from "angularx-social-login"

@Component({
  selector: 'app-google-btn',
  templateUrl: './google-btn.component.html',
  styleUrls: ['./google-btn.component.scss']
})
export class GoogleBtnComponent implements OnInit {

  constructor(private authService: AuthService,public router: Router) { }

  ngOnInit() {}
  
  login() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      sessionStorage.setItem('profile', JSON.stringify(user))
      this.router.navigate(["/home"])
    })
  }
}
