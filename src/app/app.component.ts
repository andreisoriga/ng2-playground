import {Component} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {ClientService, Message} from "./client.service";

const URL = '/api/';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    public uploader: FileUploader = new FileUploader({url: URL});

    private messages: Message[] = [];

    public message = {
        message: ''
    };

    constructor(private clientService: ClientService) {

    }

    ngOnInit() {
        this.clientService.messages.subscribe(msg => {
            this.messages.push(msg);
        });
    }

    private onSubmit() {
        console.log(this.message.message);
        this.clientService.messages.next(this.message);
        this.message.message = '';
    }

}
