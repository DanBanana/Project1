import { AppRoutingModule } from './router'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login"
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login"

import { MaterialComponent } from './material'
import { AppComponent } from './app.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { GoogleBtnComponent } from './google-btn/google-btn.component'
import { HomePageComponent } from './home-page/home-page.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1021336407843-vskuovqcksc3pjqi6368ua6f35190cqf.apps.googleusercontent.com")
  }
])

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    GoogleBtnComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    SocialLoginModule,
  ], 
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


