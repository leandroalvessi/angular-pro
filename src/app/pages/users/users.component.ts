import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserCardComponent } from "../../components/user-card/user-card.component";
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [UserCardComponent, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
 // users: string[] = ["Leandro", "Marcella", "Fernanda", "Aparecida"]
 userSelecionado: User | undefined;
 userForm: FormGroup = new FormGroup({});

 constructor(private fb: FormBuilder) {}

 ngOnInit(): void {
   this.initilizeForm();
 }

 initilizeForm() {
  this.userForm = this.fb.group({
    nome: ['', [Validators.required, Validators.maxLength(50)]],
    idade: ['', [Validators.required, Validators.min(10), Validators.max(110)]],
  })
 }

 SubmitForm() {
  if (this.userForm.valid) {
    this.users.push(this.userForm.value);
    this.userForm.reset();
  }
 }

 users: User[] = [
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

 infoUserSelecionado(user: User) {
  this.userSelecionado = user;
 }
}
