import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-adminmodel',
  templateUrl: './adminmodel.component.html',
  styleUrls: ['./adminmodel.component.css']
})
export class AdminmodelComponent implements OnInit {
  nriInfo: any;

  constructor(private restService: RestService,
    private router: Router) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.restService.callService('GET', 'nri').subscribe(data => {
      this.nriInfo = data;
      console.log('nriInfo - ', this.nriInfo);
      });
  }
  deleteNri(nri: any) {
    this.restService.callService('DELETE', 'nri/' + nri.id).subscribe(data => {
       this.fetchData();
       
    });
  }
}
