import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauComponent } from './tableau/tableau.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './cvMaster/cv/cv.component';
import { DetailComponent } from './cvMaster/detail/detail.component';
import { ItemComponent } from './cvMaster/item/item.component';
import { ListComponent } from './cvMaster/list/list.component';
import { EmbaucherComponent } from './cvMaster/embaucher/embaucher.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorsComponent } from './errors/errors.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ConsulterComponent } from './consulter/consulter.component';


@NgModule({
    declarations: [
        AppComponent,
        CvComponent,
        DetailComponent,
        ItemComponent,
        ListComponent,
        EmbaucherComponent,
        LoginComponent,
        NavbarComponent,
        FooterComponent,
        ErrorsComponent,
        PersonnelComponent,
        AjouterComponent,
        ConsulterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
      MatSlideToggleModule,
        BrowserModule,
        AppRoutingModule,
        TableauComponent,
        NgbModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,


    ]
})
export class AppModule { }
