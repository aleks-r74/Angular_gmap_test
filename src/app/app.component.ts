/// <reference types="@types/google.maps" />
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user';
import { Company } from './company';
import { JsonPipe } from '@angular/common';
import { Gmap } from './gmap';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  user = new User();
  company = new Company();
  @ViewChild('myDiv') myDiv!: ElementRef;

  constructor(){}

  ngAfterViewInit (){
    const gMap = new Gmap(this.myDiv);
    gMap.addMarker(this.user.location);
    gMap.addMarker(this.company.location);
  }

  
}
