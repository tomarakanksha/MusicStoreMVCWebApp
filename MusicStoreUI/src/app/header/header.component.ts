import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userType: string | null = null;

  constructor() {}

  ngOnInit() {
      this.getUserType();
  }

  getUserType() {
    this.userType = sessionStorage.getItem('userType');
  }
}
