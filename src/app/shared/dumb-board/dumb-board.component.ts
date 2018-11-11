import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dumb-board',
  templateUrl: './dumb-board.component.html',
  styleUrls: ['./dumb-board.component.scss']
})
export class DumbBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* To copy Text from Textbox */
  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
