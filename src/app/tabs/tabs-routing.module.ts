import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    //on crée ici 2 routes tabs/home et tabs/settings
    //ce sont 2 routes enfants de tabs
    children: [
      {
      path: 'home',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
      path: 'settings',
      loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
