import { Component,  OnInit, NgZone} from '@angular/core';
import { RouterModule} from '@angular/router';
import { Pipe} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml} from '@angular/platform-browser';

import {TooltipModule} from "ngx-tooltip";
import { AppConsts } from '../app.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urls : any = [
    {title: 'youtube' , url:'http//:www.youtube.com'},
    {title: 'ynet' , url:'http//:www.ynet.co.il'},
    {title: 'facebook' , url:'http//:www.facebook.com'},
    {title: '888' , url:'http//:www.888.com'},
    {title: 'pokerstars' , url:'http//:www.pokerstars.com'},
    {title: 'pokerland' , url:'http//:www.pokerland-il.com'},
    {title: 'LOL' , url:'http//:leagueoflegends.com'},
    {title: 'linkedin' , url:'http//:www.linkedin.com'},
    {title: 'google' , url:'http//:www.google.com'},
    {title: 'pluralsight' , url:'http//:www.pluralsight.com'},
    {title: 'udemy' , url:'http//:www.udemy.com'}
  ];

  constructor(
  private router: RouterModule,
  private _sanitizer: DomSanitizer,
  public zone: NgZone
  ) { }

  enter(url){
    var element = document.getElementById(url.title + "-tooltip").style.display = "block";
    //this.zone.run(() => url.showTooltip = true);
  }

  leave(url){
    var element = document.getElementById(url.title + "-tooltip").style.display = "none";
    // url.showTooltip = false;
  }

  generateListItems(){
    var list:any = document.getElementById("url-list");

    for (let url of this.urls) {
      var li: any = document.createElement("li");
      li.setAttribute("class", "item");
      li.setAttribute("id", url.title + "-item");
      li.innerHTML = url.title;


      var tooltip: any = document.createElement("div");
      tooltip.setAttribute("class", "tooltip");
      tooltip.setAttribute("id", url.title + "-tooltip");
      tooltip.setAttribute("hidden", url.showTooltip);

      var image: any = document.createElement("img");
      image.setAttribute("class", "qr-image");
      image.src = AppConsts.QR_API + url.url;


      tooltip.appendChild(image);
      li.appendChild(tooltip);

      li.addEventListener("mouseenter",(value) => {this.enter(url)} );
      li.addEventListener("mouseleave",(value) => {this.leave(url)} );

      list.appendChild(li);
    }
  }

  generateList(){
    var container:any = document.getElementById("container");
    var title:any = document.createElement("span");
    var ul: any = document.createElement("ul");

    title.setAttribute("class", "title");
    title.innerHTML = "QR Codes List";

    ul.setAttribute("id", "url-list");

    container.appendChild(title);
    container.appendChild(ul);

    this.generateListItems();
  }

  ngOnInit() {
    this.generateList();
  }

}
