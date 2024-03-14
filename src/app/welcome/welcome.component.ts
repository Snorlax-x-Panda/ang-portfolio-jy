import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from "aos"

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  constructor(@Inject(PLATFORM_ID) private platformId:Object){}
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init()
    }
  }
}
