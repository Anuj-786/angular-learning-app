import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutCopmonentComponent } from './about-copmonent/about-copmonent.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'about', component:  AboutCopmonentComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routngComponents = [AboutCopmonentComponent, ContactComponent]
