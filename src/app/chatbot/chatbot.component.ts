import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styles: [`
  ::ng-deep nb-layout-column {
    justify-content: center;
    display: flex;
  }
  nb-chat {
    width: 350px;
    margin: 1rem;
  }`]
})
export class ChatbotComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let res = this.http.get("http://localhost:8080/proxym_chatbot/watson/test?message='hello'");
    res.subscribe((data)=>console.log(data));
  }

  
}
