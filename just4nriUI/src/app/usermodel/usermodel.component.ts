import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-usermodel',
  templateUrl: './usermodel.component.html',
  styleUrls: ['./usermodel.component.css'],
  providers: [RestService]
})
export class UsermodelComponent implements OnInit {

  nriInfo: any;
  nriName = '';
  nriEmail = '';
  nriPhone: any;
  nriWhatsap: any;
  

  constructor(private restService: RestService,
    private router: Router) { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  saveNri() {
    const obj = {
    'name':this.nriName,
    'email':this.nriEmail,
    'phoneNo':this.nriPhone,
    'whatsapNo':this.nriWhatsap,
    };
    if (this.restService != null) {
      this.restService.callService('POST', 'nri', obj).subscribe(data => {
      });
    }
  }

}
