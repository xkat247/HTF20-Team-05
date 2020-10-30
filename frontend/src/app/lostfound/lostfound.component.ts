import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lostfound',
  templateUrl: './lostfound.component.html',
  styleUrls: ['./lostfound.component.css']
})
export class LostfoundComponent implements OnInit {
  founds=[];
  constructor(private http:HttpClient) {
    let ref=this.http.get('http://localhost:5000/api/lostfound').toPromise().then(data=>{
      console.log(data);
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.founds.push(data[key]);
        }
      }
    });
   }

  ngOnInit(): void {
  }

}
