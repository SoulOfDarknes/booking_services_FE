export enum BicycleStatus {
    Available = 'Available',
    Busy = 'Busy',
    Unavailable = 'Unavailable'
}

export interface Bicycle {
    id: string;
    name: string;
    type: string;
    color: string;
    wheelSize: number;
    price: number;
    description: string;
    status: BicycleStatus;
}