import { Component } from '@angular/core';

interface VoterRow {
  cedula: string;
  nombres: string;
  asociacion: string;
  email: string;
}

@Component({
  selector: 'app-votantes-page',
  templateUrl: './votantes-page.html',
  styleUrl: './votantes-page.css'
})
export class VotantesPage {
  protected readonly voters: VoterRow[] = [
    { cedula: '0105485536', nombres: 'IVAN PATRICIO ABAD VIDAL', asociacion: 'FADA', email: 'IABAD804@PUCE.EDU.EC' },
    { cedula: '0150319713', nombres: 'EMILLY JHOZMERY CABASCANGO YUNGA', asociacion: 'FADA', email: 'EJCABASCANGO@PUCE.EDU.EC' },
    { cedula: '0202136537', nombres: 'MATEO NICOLAS BELTRAN AVILES', asociacion: 'FADA', email: 'MNBELTRANA@PUCE.EDU.EC' },
    { cedula: '0202167227', nombres: 'SONIA MAGALY MANOBANDA CHIMBO', asociacion: 'FADA', email: 'SMMANOBANDA@PUCE.EDU.EC' },
    { cedula: '0401909544', nombres: 'NICOLAS PAUL NARVAEZ TAPIA', asociacion: 'FADA', email: 'NPNARVAEZ@PUCE.EDU.EC' },
    { cedula: '0401954409', nombres: 'AMELIE DOMINIQUE BORJA ONOFRE', asociacion: 'FADA', email: 'ADBORJAO@PUCE.EDU.EC' },
    { cedula: '0402065353', nombres: 'ELMER SAMUEL CHILES PANTOJA', asociacion: 'FADA', email: 'ESCHILES@PUCE.EDU.EC' },
    { cedula: '0402133706', nombres: 'ALEJANDRO DAVID CADENA SALCEDO', asociacion: 'FADA', email: 'ADCADENAS@PUCE.EDU.EC' },
    { cedula: '0450134952', nombres: 'CRISTOPHER FABRICIO GUERRA POZO', asociacion: 'FADA', email: 'CFGUERRAPO@PUCE.EDU.EC' },
    { cedula: '0502927114', nombres: 'KEVIN ALEJANDRO MOLINA ORDONEZ', asociacion: 'FADA', email: 'KAMOLINA@PUCE.EDU.EC' },
    { cedula: '0503139578', nombres: 'JESSY LISBETH PAEZ JIMENEZ', asociacion: 'FADA', email: 'JLPAEZ@PUCE.EDU.EC' },
    { cedula: '0503230542', nombres: 'LENIN EFRAIN QUILACHAMIN GALARZA', asociacion: 'FADA', email: 'LEQUILACHAMIN@PUCE.EDU.EC' },
    { cedula: '0503286254', nombres: 'EMILY PASTORA PULLOQUINGA LAGLA', asociacion: 'FADA', email: 'EPPULLOQUINGA@PUCE.EDU.EC' },
    { cedula: '0503587412', nombres: 'MARIO ALEJANDRO CHIAF CADEI', asociacion: 'FADA', email: 'MACHIAF@PUCE.EDU.EC' },
    { cedula: '0503787020', nombres: 'NEYLA JANINE CANDO PEREZ', asociacion: 'FADA', email: 'NJCANDO@PUCE.EDU.EC' },
    { cedula: '0503840019', nombres: 'JENIFFER NATALY REMACHE ANDRADE', asociacion: 'FADA', email: 'JNREMACHE@PUCE.EDU.EC' },
    { cedula: '0504108499', nombres: 'CRISTIAN EDUARDO PROANO ANDI', asociacion: 'FADA', email: 'CEPROANOA@PUCE.EDU.EC' },
    { cedula: '0504125493', nombres: 'EMILY SARAHI GARZON BENAVIDES', asociacion: 'FADA', email: 'ESGARZONB@PUCE.EDU.EC' }
  ];
}
