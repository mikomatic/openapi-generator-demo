import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';

// import {ApiModule, Book} from "./generated/openapi";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'demoApp';

  // books: Book[] = [];

  //constructor(private readonly defaultService: DefaultService) {
  //}

  ngOnInit(): void {
    //this.defaultService.getAllBooks().subscribe(value => {
    //  this.books = value;
    //})
  }


}
