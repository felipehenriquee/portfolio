import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client'
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any;

  constructor() {
    console.log(environment.api.toString())
    this.socket = io(environment.socket.toString())

   }

  listen(eventName: string){
    console.log(eventName)
    return new Observable((subscriber) => {
      
      this.socket.on(eventName, (data: any)=>{
        subscriber.next(data)
      })
    })
  }
  async emit(eventName: string, data: any){
    
    await this.socket.emit(eventName, data)
  }
}
