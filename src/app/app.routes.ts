import { Routes } from '@angular/router';
import { CandidatosPage } from './pages/candidatos-page/candidatos-page';
import { ClavesPage } from './pages/claves-page/claves-page';
import { ResultadosPage } from './pages/resultados-page/resultados-page';
import { TipoCandidatoPage } from './pages/tipo-candidato-page/tipo-candidato-page';
import { VotantesPage } from './pages/votantes-page/votantes-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tipo-candidato' },
  { path: 'tipo-candidato', component: TipoCandidatoPage },
  { path: 'candidato', component: CandidatosPage },
  { path: 'votantes', component: VotantesPage },
  { path: 'claves', component: ClavesPage },
  { path: 'correos', component: ClavesPage },
  { path: 'resultados', component: ResultadosPage },
  { path: '**', redirectTo: 'tipo-candidato' }
];
