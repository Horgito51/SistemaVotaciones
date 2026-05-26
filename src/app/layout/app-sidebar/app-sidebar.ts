import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  expandable?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-sidebar.html',
  styleUrl: './app-sidebar.css'
})
export class AppSidebar {
  protected readonly menuItems: MenuItem[] = [
    { label: 'Proceso', route: '/proceso', icon: 'M12 5.25a6.75 6.75 0 1 1-6.75 6.75h2.2A4.55 4.55 0 1 0 12 7.45V10L7.9 6.1 12 2.25v3z' },
    { label: 'Tipo Candidato', route: '/tipo-candidato', icon: 'M7.5 10.5a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zm9 0a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zM3 18.75c.24-3.1 2.12-5.05 4.5-5.05s4.26 1.95 4.5 5.05H3zm9 0c.18-2.2 1.18-3.87 2.74-4.62.56-.27 1.15-.4 1.76-.4 2.38 0 4.26 1.94 4.5 5.02h-9z' },
    { label: 'Candidato', route: '/candidato', icon: 'M12 12.25a4.25 4.25 0 1 1 0-8.5 4.25 4.25 0 0 1 0 8.5zm-7 8c.35-3.85 3.08-6.25 7-6.25s6.65 2.4 7 6.25H5z' },
    { label: 'Votantes', route: '/votantes', icon: 'M13 3h-2v9.15L7.75 8.9 6.35 10.3 12 15.95l5.65-5.65-1.4-1.4L13 12.15V3zM5 18h14v2H5v-2z', expandable: true },
    { label: 'Claves', route: '/claves', icon: 'M12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm8.25 3.25c0 .42-.04.82-.12 1.22l2.03 1.58-2 3.46-2.4-.97c-.63.5-1.32.9-2.1 1.16l-.36 2.55h-4l-.36-2.55a7.6 7.6 0 0 1-2.1-1.16l-2.4.97-2-3.46 2.03-1.58a6.4 6.4 0 0 1 0-2.44L3.44 9.2l2-3.46 2.4.97c.62-.5 1.32-.9 2.1-1.16L10.3 3h4l.36 2.55c.77.26 1.47.66 2.1 1.16l2.4-.97 2 3.46-2.03 1.58c.08.4.12.8.12 1.22z' },
    { label: 'Correos', route: '/correos', icon: 'M4 6h16v12H4V6zm8 7.1L5.8 8v8.2h12.4V8L12 13.1zm0-2.4L18.2 6.8H5.8L12 10.7z' },
    { label: 'Usuario Sistema', route: '/usuario-sistema', icon: 'M12 12.25a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-7 8c.28-3.65 3.02-6 7-6s6.72 2.35 7 6H5z' },
    { label: 'Resultados', route: '/resultados', icon: 'M6.5 10.5A3.5 3.5 0 1 1 10 7a3.5 3.5 0 0 1-3.5 3.5zM14 9.75A3.25 3.25 0 1 1 17.25 6.5 3.25 3.25 0 0 1 14 9.75zM2.75 18.5c.24-3.12 2.26-5 5-5 1.1 0 2.08.3 2.88.86A6.47 6.47 0 0 0 9.5 18.5H2.75zm8.25 0c.28-3.3 2.48-5.25 5.25-5.25s4.97 1.95 5.25 5.25H11z' },
    { label: 'Salir', route: '/salir', icon: 'M11 3h2v10h-2V3zm5.38 2.62 1.42-1.42A9 9 0 1 1 6.2 4.2l1.42 1.42a7 7 0 1 0 8.76 0z' }
  ];
}
