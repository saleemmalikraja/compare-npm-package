import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../core/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isThemeDark: Observable<boolean>;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }


}
