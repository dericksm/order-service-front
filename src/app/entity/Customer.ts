export class Customer {
    id: string
    name: string
    email: string
    street: string
    number: Number
    district: string
    phone: string

    constructor(id: string) {
        this.id = id
    }
}