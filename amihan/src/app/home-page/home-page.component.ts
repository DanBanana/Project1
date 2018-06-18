import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { AuthService } from "angularx-social-login"
import { Session } from 'protractor'
import { AppModule } from '../app.module'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {  }
  
  ngOnInit() {
    if(sessionStorage.getItem('profile')){
      this.userProfile = JSON.parse(sessionStorage.getItem('profile'))
      this.name = this.userProfile['name']
      this.email = this.userProfile['email']
      this.pimg = this.userProfile['photoUrl']
    }else{
      this.router.navigate(['/login'])
    }
    
  }

  signOut() {
    this.authService.signOut()
    localStorage.clear()
    sessionStorage.clear()
    this.router.navigate(['/login'])
  }

  private name : String
  private email : String
  private pimg : String
  private userProfile : any
}