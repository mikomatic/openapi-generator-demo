import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';

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

  // constructor(private readonly defaultService: DefaultService) {
  // }

  ngOnInit(): void {
    // this.defaultService.getAllBook().subscribe(value => {
    //   this.books = value;
    // })
  }


}
