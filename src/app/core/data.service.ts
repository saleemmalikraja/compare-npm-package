import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharingService {
    private subject = new BehaviorSubject<any>('');
    setData(data: any) {
        this.subject.next(data);
    }

    getData(): Observable<any> {
        return this.subject.asObservable();
    }
}
