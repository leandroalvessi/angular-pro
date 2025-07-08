import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user'

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: User = {
    nome: "sss",
    idade: 4
  };

  @Output() userInfoEmitter = new EventEmitter<User>();

  RetornarDados() {
    this.userInfoEmitter.emit(this.user);
  }
}
