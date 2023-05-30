import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'sobrealiadas',
    loadChildren: () => import('./sobrealiadas/sobrealiadas.module').then(m => m.SobrealiadasPageModule)
  },
  {
    path: 'privacidad',
    loadChildren: () => import('./privacidad/privacidad.module').then(m => m.PrivacidadPageModule)
  },
  {
    path: 'organizaciones',
    loadChildren: () => import('./organizaciones/organizaciones.module').then(m => m.OrganizacionesPageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./calculadora/calculadora.module').then(m => m.CalculadoraPageModule)
  },
  {
    path: 'misderechos',
    loadChildren: () => import('./misderechos/misderechos.module').then(m => m.MisderechosPageModule)
  },
  {
    path: 'guiaentidades',
    loadChildren: () => import('./guiaentidades/guiaentidades.module').then(m => m.GuiaentidadesPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'violenciaacoso',
    loadChildren: () => import('./violenciaacoso/violenciaacoso.module').then(m => m.ViolenciaacosoPageModule)
  },
  {
    path: 'libertadsindical',
    loadChildren: () => import('./libertadsindical/libertadsindical.module').then(m => m.LibertadsindicalPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then(m => m.NoticiasPageModule)
  },
  {
    path: 'denuncias',
    loadChildren: () => import('./denuncias/denuncias.module').then(m => m.DenunciasPageModule)
  },
  {
    path: 'misderechos-trabajo',
    loadChildren: () => import('./misderechos-trabajo/misderechos-trabajo.module').then(m => m.MisderechosTrabajoPageModule)
  },
  {
    path: 'misderechos-contratacion',
    loadChildren: () => import('./misderechos-contratacion/misderechos-contratacion.module').then(m => m.MisderechosContratacionPageModule)
  },
  {
    path: 'misderechos-jornadalaboral',
    loadChildren: () => import('./misderechos-jornadalaboral/misderechos-jornadalaboral.module').then(m => m.MisderechosJornadalaboralPageModule)
  },
  {
    path: 'misderechos-seguridadsocial',
    loadChildren: () => import('./misderechos-seguridadsocial/misderechos-seguridadsocial.module').then(m => m.MisderechosSeguridadsocialPageModule)
  },
  {
    path: 'misderechos-beneficios',
    loadChildren: () => import('./misderechos-beneficios/misderechos-beneficios.module').then(m => m.MisderechosBeneficiosPageModule)
  },
  {
    path: 'misderechos-enfermedades',
    loadChildren: () => import('./misderechos-enfermedades/misderechos-enfermedades.module').then(m => m.MisderechosEnfermedadesPageModule)
  },
  {
    path: 'misderechos-licencias',
    loadChildren: () => import('./misderechos-licencias/misderechos-licencias.module').then(m => m.MisderechosLicenciasPageModule)
  },
  {
    path: 'misderechos-salarios',
    loadChildren: () => import('./misderechos-salarios/misderechos-salarios.module').then(m => m.MisderechosSalariosPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then(m => m.ResultPageModule)
  },
  {
    path: 'dialog-box',
    loadChildren: () => import('./dialog-box/dialog-box.module').then( m => m.DialogBoxPageModule)
  },
  {
    path: 'resultdia',
    loadChildren: () => import('./resultdia/resultdia.module').then( m => m.ResultdiaPageModule)
  },
  {
    path: 'resulthora',
    loadChildren: () => import('./resulthora/resulthora.module').then( m => m.ResulthoraPageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./resultados/resultados.module').then( m => m.ResultadosPageModule)
  },
  {
    path: 'empleador',
    loadChildren: () => import('./empleador/empleador.module').then( m => m.EmpleadorPageModule)
  },
  {
    path: 'encuesta',
    loadChildren: () => import('./encuesta/encuesta.module').then( m => m.EncuestaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
