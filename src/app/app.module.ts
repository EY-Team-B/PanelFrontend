import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelListComponent } from './panel-list/panel-list.component';
import { CreatePanelComponent } from './create-panel/create-panel.component';
import { UdatePanelComponent } from './udate-panel/udate-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelListComponent,
    CreatePanelComponent,
    UdatePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
