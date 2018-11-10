import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-popup-overlay',
  templateUrl: './popup-overlay.component.html',
  styleUrls: ['./popup-overlay.component.css']
})
export class PopupOverlayComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
