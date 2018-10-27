import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class SharingService {
    private subject = new Subject<any>();
    setData(data: any) {
        this.subject.next(data);
    }

    getData(): Observable<any> {
        return this.subject.asObservable();
    }
}
