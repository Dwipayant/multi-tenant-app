import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface TableHeader {
  key: string,
  label: string
}
@Component({
  selector: 'esspl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges, AfterViewInit {

  // constructor() { }
  @Input() tableHeaders: TableHeader[];
  displayedColumns: string[];
  @Input() tableData; 
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    // this.displayedColumns = this.tableHeaders.map(e => e.key);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.tableHeaders) {
      this.displayedColumns = this.tableHeaders.map(e => e.key);
    }
    if(changes.tableData) {
      this.dataSource = new MatTableDataSource((changes.tableData.currentValue as any));
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
