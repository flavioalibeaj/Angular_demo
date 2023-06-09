import { Component, EventEmitter, Input, OnInit, Output ,ChangeDetectionStrategy, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomList } from '../rooms';
// import {  } from '@angular/compiler';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit , OnChanges, OnDestroy{

  @Input () rooms: RoomList[] = []
  @Input () title: string = ''
  @Output() selectedRoom = new EventEmitter<RoomList>()

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes)
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }


  ngOnInit(): void {
    
  }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room)
  }

  
  ngOnDestroy(): void {
    console.log("On destroy is called")
  }
}
