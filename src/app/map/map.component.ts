import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private map;

  constructor(private markerService: MarkerService) {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [54.572573, 18.429189],
      scrollWheelZoom: false,
      zoom: 15
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    const marker = L.marker([54.572573, 18.429189], {
      icon: L.icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    });
    marker.bindPopup('<b>Magia Ogrodów. Beata Kulling-Nitkowska</b><br/>Adres:<br/>Dębogórska 8<br/> 84-230 Dębogórze Wybudowanie').openPopup();
    marker.addTo(this.map);
    tiles.addTo(this.map);
  }
}
