import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName: string = "Onyx Hotel"

  numberOfRooms: number = 10

  hideRooms: boolean = false

  room: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

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

  toggle = (): void => {
    this.hideRooms = !this.hideRooms
  }
}
