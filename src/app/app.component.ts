import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BaseUiComponent } from "./components/base-ui/base-ui.component";
import { UsersComponent } from "./pages/users/users.component";
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, BaseUiComponent, ReactiveFormsModule, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getUser();
  }

  constructor(private userService: UserService){}

  getUser() {
    const user = localStorage.getItem('user');
    this.userService.setUser(JSON.parse(user ?? '{}'));
  }

  title = 'angular-pro';
  exibiHome: boolean = true;

  destruir() {
    this.exibiHome = false;
  }
}
