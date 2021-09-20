import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.css'],
  })
  export class LoginPage implements OnInit {
    ngOnInit(): void {
        console.log("estamos en metodo oninit");
        //throw new Error("Method not implemented.");
    }
}