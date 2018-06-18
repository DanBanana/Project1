import { Component, NgModule , OnInit} from '@angular/core'
import { FormsModule } from '@angular/forms'

import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app'
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
