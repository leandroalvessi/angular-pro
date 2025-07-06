import { Component, DoCheck, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements DoCheck {
  nun: number = 1;

  adiciona() {
    this.nun++; 
  }

  ngDoCheck(): void {
    console.log("Uma mudança foi feita")
  }
}
