import { Component, OnInit } from '@angular/core';
import { ClientI } from '../../../models/client';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ClientService } from '../../../services/client.service'

@Component({
  selector: 'app-show-client',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './show-client.component.html',
  styleUrl: './show-client.component.css'
})
export class ShowClientComponent implements OnInit{
  public clients:ClientI[] = []
  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showClients()
  }

  showClients() {
    this.clientService.getAllClient()
      .subscribe({
        next: (data) => {
          this.clients = data
          // console.log(this.clients)
        }
      })
  }


  delete(id: number): void{
    this.router.navigateByUrl('/clients');
    this.clientService.deleteClient(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notification', detail: 'deleted client', life:5000});
        this.showClients();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/clients');

      }
    );
  }
}
