import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponentComponent } from './component/recipe-list-component.component';
import { RecipeDetailComponentComponent } from './component/recipe-detail-component.component';
import { RecipeAddComponentComponent } from './component/recipe-add-component.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './RecipeService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: RecipeListComponentComponent },
  { path: 'recipe/:id', component: RecipeDetailComponentComponent },
  { path: 'add', component: RecipeAddComponentComponent },
  { path: "**", redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponentComponent,
    RecipeDetailComponentComponent,
    RecipeAddComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
