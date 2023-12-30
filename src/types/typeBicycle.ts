import { BicycleStatus } from "./enumBicycle"
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