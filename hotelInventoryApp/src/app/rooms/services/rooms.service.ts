import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../..//AppConfig/appConfig.service';
import { AppConfig } from '../..//AppConfig/appConfig.interface';
// import {environment} from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: 91,
      roomType: "Deluxe Room",
      amenities: "AC, Free Wi-fi, Bathroom, TV, Kitchen",
      price: 200,
      photos: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      checkInTime: new Date("08-04-2023"),
      checkOutTime: new Date("11-04-2023"),
      rating: 4
    },
    {
      roomNumber: 32,
      roomType: "Deluxe Room",
      amenities: "AC, Free Wi-fi, Bathroom, TV, Kitchen",
      price: 500,
      photos: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      checkInTime: new Date("11-06-2023"),
      checkOutTime: new Date("14-06-2023"),
      rating: 4.5
    },
    {
      roomNumber: 311,
      roomType: "Private Suite",
      amenities: "AC, Free Wi-fi, Bathroom, TV, Kitchen",
      price: 1000,
      photos: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      checkInTime: new Date("11-06-2023"),
      checkOutTime: new Date("12-06-2023"),
      rating: 5.0
    }
  ]

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log("Room's service is initialized...")
    console.log(this.config.apiUrl)
}


  getRooms(){
    return this.roomList
  }
}
