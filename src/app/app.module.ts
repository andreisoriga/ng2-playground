import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FileUploadModule} from "ng2-file-upload";
import {WebSocketService} from './websocket.service';
import {ClientService} from "./client.service";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        FileUploadModule,
    ],
    providers: [WebSocketService, ClientService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
