import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyC7ivqcRB9Wsavsb68YLVjZ304tx7OVNPk",
      authDomain: "ng-recipe-book-e15b5.firebaseapp.com"
    });
  }
}
