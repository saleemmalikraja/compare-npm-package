import { Component, OnInit } from "@angular/core";
import { AppService } from '../services/app.service';

@Component({
  selector: "app-npm",
  templateUrl: "./npm.component.html",
  styleUrls: ["./npm.component.scss"],
  providers:[AppService] 
})
export class NpmComponent implements OnInit {

  constructor(private appService: AppService){}

  ngOnInit() {
   
  }


  filterNews(source) { 
   
  }

  getnewsSources() {
    
  } 
}
