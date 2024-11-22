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
        label: 'Clientes',
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
        label: 'Empleados',
        icon: 'pi pi-fw pi-user',
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
        label: 'Solicitudes',
        icon: 'pi pi-fw pi pi-file',
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
        label: 'Préstamos',
        icon: 'pi pi-fw pi-money-bill',
        routerLink: '/loan',
         items: [
          {
            label: 'Préstamo',
            icon: 'pi pi-fw pi-dollar',
            routerLink: '/loans',
          },

          {
            label: 'Tipo de Préstamo',
            icon: 'pi pi-fw pi-wallet',
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
            label: 'Préstamo Realizado',
            icon: 'pi pi-fw pi-chart-line',
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
        label: 'Pagos',
        icon: 'pi pi-fw pi pi-check',
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