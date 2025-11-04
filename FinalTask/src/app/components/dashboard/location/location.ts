import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { UserLocation } from '../../../services/user-location';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.html',
  imports: [CommonModule, NgIf],
  styleUrls: ['./location.css'],
})
export class Location implements OnInit {
  private userLocation = inject(UserLocation);
  userAddress?: string;
  private map?: L.Map;
  private id = inject(ActivatedRoute).snapshot.paramMap.get('id');
  ngOnInit() {
    this.userLocation.getUserLocation(this.id).subscribe(({username, lat, lng }) => {
      console.log('Latitude:', lat, 'Longitude:', lng);
      const latitude = Number(lat);
      const longitude = Number(lng);

    this.userAddress = `Latitude: ${latitude}, Longitude: ${longitude}`;
    this.initMap(username, latitude, longitude);
  });
}


private initMap(username: string, lat: number, lng: number): void {
  if (this.map) {
    this.map.setView([lat, lng], 13);
    return;
  }

  this.map = L.map('map').setView([lat, lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(this.map);

  const avatarIcon = L.icon({
    iconUrl: `https://api.dicebear.com/9.x/avataaars/svg?seed=${username}`,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -45],
  });

  L.marker([lat, lng], { icon: avatarIcon })
    .addTo(this.map)
    .bindPopup(`I am here! <br/><br/> <strong>${lat}, ${lng}</strong>`)
    .openPopup();

  console.log('Map initialized at:', lat, lng);
}

}
