import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';




/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-dumb-table',
  templateUrl: './dumb-table.component.html',
  styleUrls: ['./dumb-table.component.css']
})
export class DumbTableComponent implements OnChanges {
  displayedColumns: string[] = ['name', 'forks', 'stargazers_count', 'updated_at', 'created_at'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = [];
  chartData;
  @Input() gitHubData: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnChanges() {
      this.dataSource = this.gitHubData;
    }
}
