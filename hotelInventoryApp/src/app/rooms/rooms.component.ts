import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName: string = "Onyx Hotel"
  numberOfRooms: number = 10
  hideRooms: boolean = false
  toggle = (): void => {
    this.hideRooms = !this.hideRooms
  }
}
