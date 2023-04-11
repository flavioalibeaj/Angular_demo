import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, AfterViewChecked, ViewChildren, QueryList, OnDestroy, SkipSelf} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked{
  hotelName: string = "Onyx Hotel"

  numberOfRooms: number = 10

  hideRooms: boolean = false

  selectedRoom!: RoomList

  room: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  title = "Room List"

  roomList: RoomList[] = []

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>

  constructor(@SkipSelf() private roomService: RoomsService){}

  ngOnInit(): void{
    this.roomList = this.roomService.getRooms()
    // this.roomService.getRooms().subscribe((data) => this.roomList(data))
  }

  ngDoCheck(){
    console.log("on changes is called")
  }

  ngAfterViewInit(): void {
    // console.log(this.headerComponent)
    this.headerComponent.title = "Room view"
    this.headerChildrenComponent.last.title = 'Last title'
  }

  ngAfterViewChecked(): void {
    
  }

  toggle = (): void => {
    this.hideRooms = !this.hideRooms
    this.title = "Changed Room List"
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 4,
      roomType: "VIP Suite",
      amenities: "AC, Free Wi-fi, Bathroom, TV, Kitchen",
      price: 1500,
      photos: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      checkInTime: new Date("11-05-2023"),
      checkOutTime: new Date("12-05-2023"),
      rating: 5
    }
    // this.roomList.push(room)
    this.roomList = [...this.roomList, room]
  }
}
