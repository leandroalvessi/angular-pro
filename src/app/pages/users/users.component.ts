import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserCardComponent } from "../../components/user-card/user-card.component";
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  imports: [UserCardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
 // users: string[] = ["Leandro", "Marcella", "Fernanda", "Aparecida"]
 user: User[] = [
  {
    nome: "Leandro",
    idade: 39
  },
  {
    nome: "Fernanda",
    idade: 34
  },
  {
    nome: "Marcella",
    idade: 4
  },
  {
    nome: "Aparecida",
    idade:60
  }
 ]
}
