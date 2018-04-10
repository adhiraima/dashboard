import { Component, OnInit } from '@angular/core';
import { AgmMap } from '@agm/core';


@Component({
  selector: 'app-map-info',
  templateUrl: './map-info.component.html',
  styleUrls: ['./map-info.component.css']
})
export class MapInfoComponent implements OnInit {
  private lat: number;
  private lng: number;

  constructor() { 
    this.lat = 51.678418;
    this.lng = 7.809007;
  }

  ngOnInit() {
  }

}
