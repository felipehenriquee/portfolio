import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IndividualComponent } from './pages/individual/individual.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipe/filter.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SobreComponent } from './pages/sobre/sobre.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TesteComponent } from './pages/teste/teste.component';
import { RodapeComponent } from './pages/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndividualComponent,
    FilterPipe,
    SearchPipe,
    SobreComponent,
    SkillsComponent,
    PortfolioComponent,
    TesteComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
