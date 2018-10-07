import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SharingService } from '../../core/data.service';




/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-dumb-table',
  templateUrl: './dumb-table.component.html',
  styleUrls: ['./dumb-table.component.css']
})
export class DumbTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'forks', 'stargazers_count', 'updated_at', 'created_at'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = [];
  chartData;
  githubData = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private sharingService: SharingService) {
    // Create 100 users
    //const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    let data = this.sharingService.getData();
    if (data && data.npmDatas) {
      this.chartData = data.npmDatas;
    }
    if (data && data.githubData) {
      this.dataSource = data.githubData;
      // this.dataSource.map((res) => {
      //   this.displayedColumns.push(res);
      //   this.columnsToDisplay = this.displayedColumns.slice();
      // })
    }
    console.log('chartData', this.chartData);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }
