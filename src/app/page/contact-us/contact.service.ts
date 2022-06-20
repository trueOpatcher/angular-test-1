import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs";


@Injectable({ providedIn: 'root'})

export class ContactService {

    constructor(private http: HttpClient) {

    }

    sendMessage(info: any) {

        let formData = new FormData();

        formData.append('name', info.name);
        formData.append('companyName', info.companyName);
        formData.append('number', info.number);
        formData.append('email', info.email);
        formData.append('descs', info.desc);


       return this.http.post('https://message-endpoint/contact/send', formData).pipe(take(1));
    }
}