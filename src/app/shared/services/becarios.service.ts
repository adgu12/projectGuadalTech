import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Becario } from '../components/list-becarios/becario'

@Injectable({
    providedIn: 'root',
})
export class BecariosService {

    private url: string = 'https://guadaltech-fullstack.herokuapp.com/api/becarios/';

    constructor(
        private http: HttpClient
    ) { }

    public getBecarios(): Observable<Becario[]> {
        return this.http.get<Becario[]>(this.url);
    }

    public deleteBecarios(id: string): Observable<any> {
        const url = `${this.url}${id}`;
        return this.http.delete(url);
    }
}
