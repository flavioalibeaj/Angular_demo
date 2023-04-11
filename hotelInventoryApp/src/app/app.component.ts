import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hotelInventoryApp';

  @ViewChild("name", {static: true}) name!: ElementRef 

  constructor(@Optional() private loggerService: LoggerService){}

  ngOnInit(): void {
    this.loggerService?.log("AppComponent.ngOnInit()")
    this.name.nativeElement.innerText = "Onyx Hotel"
  }

  // role = "User"

  // @ViewChild("user", {read: ViewContainerRef}) vcr!: ViewContainerRef

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  //   componentRef.instance.numberOfRooms = 212
  // }
}
