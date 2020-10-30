import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items=[]
  constructor(private http: HttpClient) {
    let ref=this.http.get('http://localhost:5000/api/items').toPromise().then(data=>{
      console.log(data[0]['name']);
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.items.push(data[key]);
        }
      }
    });
   }

  ngOnInit(): void {
  }

}
