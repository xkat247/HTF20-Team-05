import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
events=[];
  constructor(private http:HttpClient) { 
    let ref=this.http.get('http://localhost:5000/api/events').toPromise().then(data=>{
      console.log(data);
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.events.push(data[key]);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
