import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  data: string;

  constructor(private http: HttpClient) {
    this.data = 'No Data fetched yet!!';
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/lua/hosts_stats.lua').subscribe(
      response => this.data = response.toString(),
      error => console.log(error)
    );
  }

}
