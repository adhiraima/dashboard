import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
    // const httpOptions = { headers: new HttpHeaders({'Cookie': 'user=admin; session=724e3820ca5f317906df81bad926f771'})};
    // this.http.get('http://localhost:3000/lua/network_load.lua', httpOptions).subscribe(
    //   response => this.data = response.toString(),
    //   error => console.log(error)
    // );
  }
}
