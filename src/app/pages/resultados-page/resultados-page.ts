import { Component } from '@angular/core';

interface ResultRow {
  tipoCandidato: string;
  candidato: string;
  votos: number;
}

@Component({
  selector: 'app-resultados-page',
  templateUrl: './resultados-page.html',
  styleUrl: './resultados-page.css'
})
export class ResultadosPage {
  protected readonly results: ResultRow[] = [
    { tipoCandidato: 'Presidenta Y Vicepresidenta', candidato: 'NULO', votos: 39 },
    { tipoCandidato: 'Presidenta Y Vicepresidenta', candidato: 'Camila Jaramillo - Giuliana Salas', votos: 151 },
    { tipoCandidato: 'Presidenta Y Vicepresidenta', candidato: 'BLANCO', votos: 4 },
    { tipoCandidato: 'Director de la Comisión Académica', candidato: 'NULO', votos: 50 },
    { tipoCandidato: 'Director de la Comisión Académica', candidato: 'BLANCO', votos: 6 },
    { tipoCandidato: 'Director de la Comisión Académica', candidato: 'Daniel Sandoval', votos: 138 },
    { tipoCandidato: 'Directora de la Comisión Social-Cultural', candidato: 'Daniela García', votos: 142 },
    { tipoCandidato: 'Directora de la Comisión Social-Cultural', candidato: 'NULO', votos: 46 },
    { tipoCandidato: 'Directora de la Comisión Social-Cultural', candidato: 'BLANCO', votos: 6 },
    { tipoCandidato: 'Directora de la Comisión de Comunicación', candidato: 'BLANCO', votos: 7 },
    { tipoCandidato: 'Directora de la Comisión de Comunicación', candidato: 'Belén Taez', votos: 142 },
    { tipoCandidato: 'Directora de la Comisión de Comunicación', candidato: 'NULO', votos: 45 },
    { tipoCandidato: 'Director de la Comisión de Infraestructura y Diseño', candidato: 'BLANCO', votos: 7 },
    { tipoCandidato: 'Director de la Comisión de Infraestructura y Diseño', candidato: 'NULO', votos: 44 },
    { tipoCandidato: 'Director de la Comisión de Infraestructura y Diseño', candidato: 'Juan Sebastián Barroso', votos: 143 },
    { tipoCandidato: 'Director de la Comisión Deportiva', candidato: 'Emilio Chauvin', votos: 144 },
    { tipoCandidato: 'Director de la Comisión Deportiva', candidato: 'NULO', votos: 44 },
    { tipoCandidato: 'Director de la Comisión Deportiva', candidato: 'BLANCO', votos: 6 },
    { tipoCandidato: 'Representantes de la Carrera de Arquitectura', candidato: 'NULO', votos: 46 },
    { tipoCandidato: 'Representantes de la Carrera de Arquitectura', candidato: 'Natalie Ortiz - Jonathan Castillo', votos: 140 },
    { tipoCandidato: 'Representantes de la Carrera de Arquitectura', candidato: 'BLANCO', votos: 8 },
    { tipoCandidato: 'Representantes de la Carrera de Diseño Gráfico', candidato: 'NULO', votos: 46 }
  ];
}
