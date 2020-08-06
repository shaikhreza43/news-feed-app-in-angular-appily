import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  constructor(public api: ApiService, public http: HttpClient) {}

  ngOnInit(): void {
    this.api.fetchDataFromApi();
  }
}
