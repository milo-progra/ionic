import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { AuthPageRoutingModule } from "./auth.routing";
import { LoginPage } from "./login/login.page";
import { RegisterPage } from "./register/register.page";

@NgModule({
    declarations: [
        LoginPage,
        RegisterPage
    ], //paginas que involucro en el modulo
    entryComponents: [],
    imports: [//BrowserModule, solo en el principal 
        IonicModule.forRoot(),
        AuthPageRoutingModule,
            FormsModule
    ],
    //providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    //bootstrap: [AppComponent],
  })
  export class AuthModule {}
 
  