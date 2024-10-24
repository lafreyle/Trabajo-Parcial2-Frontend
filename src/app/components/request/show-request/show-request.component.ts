import { Component, OnInit } from '@angular/core';
import { LoanApplicationI } from '../../../models/request';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RequestService } from '../../../services/request.service'

@Component({
  selector: 'app-show-request',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-request.component.html',
  styleUrl: './show-request.component.css'
})
export class ShowRequestComponent implements OnInit{
  public requests:LoanApplicationI[] = []
  constructor(
    private requestService: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showRequests()
  }

  showRequests() {
    this.requestService.getAllRequest()
      .subscribe({
        next: (data) => {
          this.requests = data
          // console.log(this.requests)
        }
      })
  }


  delete(id: number): void{
    this.router.navigateByUrl('/requests');
    this.requestService.deleteRequest(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'deleted request', life:5000});
        this.showRequests();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/requests');

      }
    );
  }
}

