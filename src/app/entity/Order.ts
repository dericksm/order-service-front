import { User } from './User'
import { Customer } from './Customer'

export enum EquipType {
    A = "Microondas",
    B = "Geladeira",
    C = "Máquina de lavar",
    D = "Televisão",
    E = "Celular",
    F = "Monitor",
    G = "Forno elétrico"
}

export enum Status { 
    DONE = "Finalizada",
    IN_PROGRESS  = "Em progresso"
}

export class Order {
    id: string
    type: string
    user: User
    brand: string
    problem: string
    preview: string
    customer: Customer
    status: Status
    price: Number

    constructor(id: string) {
        this.id = id
    }
}