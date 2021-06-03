import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apidata: any = [];
  filterList: any = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
  filterText: string = 'ALL';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getData().subscribe((res) => {
      this.apidata = res;
    })

  }

  applyfilter(filter: string) {
    this.filterText = filter;

  }
  launchData(filter: string) {
    this.apiService.getLaunch().subscribe((res) => {
      this.apidata = res;
    })
  }
  landingData(filter: string) {
    this.apiService.getLaunch().subscribe((res) => {
      this.apidata = res;
    })
  }
}
