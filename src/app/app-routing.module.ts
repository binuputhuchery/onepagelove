import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { ContentComponent } from './content/content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: IntroComponent },
  { path: 'services', component: ContentComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
