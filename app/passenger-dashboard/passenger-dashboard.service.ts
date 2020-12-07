import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from "./models/passenger.interface";

import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
    constructor(private http: Http) {}

    getPassenger(id: number) {
        return this.http.get(`${PASSENGER_API}/${id}`).map((response: any) => {
            return response.json();
        });
    }
    
    getPassengers(): Observable<any> {
        return this.http.get(PASSENGER_API).map((response: any) => {
            return response.json();
        });
    }

    updatePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http.put(`${PASSENGER_API}/${passenger.id}`, passenger).map((response: any) => {
            return response.json();
        });
    }

    removePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http.delete(`${PASSENGER_API}/${passenger.id}`).map((response: any) => {
            return response.json();
        });
    }
}
