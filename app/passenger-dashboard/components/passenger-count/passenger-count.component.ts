import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-count',
    template: `
        <div>
            <h3>Airline Passengers</h3>
            <div>
                Total Passengers: {{items?.length}}
            </div>
            <div>
                Total Checked In: {{checkedInCount()}}
            </div>
        </div>
    `
})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];
    checkedInCount(): number {
        if (!this.items) return;
        return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
    }
}
