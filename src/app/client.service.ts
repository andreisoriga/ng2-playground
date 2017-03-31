import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {WebSocketService} from "./websocket.service";

const URL = 'ws://localhost:8765';

export interface Message {
    message: string;
}

@Injectable()
export class ClientService {

    public messages: Subject<Message>  = new Subject<Message>();

    constructor(private wsService: WebSocketService) {

        this.messages = <Subject<Message>>this.wsService
            .connect(URL)
            .map((response: MessageEvent): Message => {
                let data = JSON.parse(response.data);
                return {
                    message: data.message
                }
            });

    }

}
