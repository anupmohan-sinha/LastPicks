import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCardComponent } from './demo/demo-card-demo/demo-card.component';
import { DropdownDemoComponent } from './demo/dropdown-demo/dropdown-demo.component';
import { TreeDemoComponent } from './demo/tree-demo/tree-demo.component';
import { TabsDemoComponent } from './demo/tabs-demo/tabs-demo.component';
import { DemoTableComponent } from './demo/demo-table/demo-table.component';
import { DemoHeaderComponent } from './demo/demo-header/demo-header.component';
import { DemoModalComponent } from './demo/demo-modal/demo-modal.component';
import { ListgroupDemoComponent } from './demo/listgroup-demo/listgroup-demo.component';
import { DemoInputFieldsComponent } from './demo/demo-input-fields/demo-input-fields.component';
const routes: Routes = [
  { path: 'dropdown', component: DropdownDemoComponent },
  { path: 'tree', component: TreeDemoComponent },
  { path: 'card', component: DemoCardComponent },
  { path: 'tab', component: TabsDemoComponent },
  { path: 'table', component: DemoTableComponent },
  { path: 'header', component: DemoHeaderComponent },
  { path: 'modal', component: DemoModalComponent },
  { path: 'listgroup', component: ListgroupDemoComponent },
  { path: 'inputfield', component: DemoInputFieldsComponent },
  { path: '', redirectTo: 'dropdown', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
