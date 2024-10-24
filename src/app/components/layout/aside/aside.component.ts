import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  items: MenuItem[]=[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Client',
        icon: 'pi pi-fw pi-users',
        routerLink: '/clients',
        // items: [
        //   {
        //     label: 'Crud Cliente'
        //   },
        //   {
        //     label: 'HTML 2'
        //   }
        // ]
      },
      {
        label: 'Employee',
        icon: 'pi pi-fw pi-qrcode',
        routerLink: '/employees',
        // items: [
        //   {
        //     label: 'Crud Cliente'
        //   },
        //   {
        //     label: 'HTML 2'
        //   }
        // ]
      },
      {
        label: 'Request',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink: '/requests',
        // items: [
        //   {
        //     label: 'Crud Cliente'
        //   },
        //   {
        //     label: 'HTML 2'
        //   }
        // ]
      },

      {
        label: 'Loans',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/loan',
         items: [
          {
            label: 'Loans',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: '/loans',
          },

          {
            label: 'LoanType',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: '/loantype'
            // items: [
            //   {
            //     label: 'Crud Cliente'
            //   },
            //   {
            //     label: 'HTML 2'
            //   }
            // ]
          },

          {
            label: 'LoanIssued',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: '/loanis'
            // items: [
            //   {
            //     label: 'Crud Cliente'
            //   },
            //   {
            //     label: 'HTML 2'
            //   }
            // ]
          }
        
        ]
      },

      {
        label: 'Payment',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/payments',
        // items: [
        //   {
        //     label: 'Crud Cliente'
        //   },
        //   {
        //     label: 'HTML 2'
        //   }
        // ]
      }
    ];
  }
}