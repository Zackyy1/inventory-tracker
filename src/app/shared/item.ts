export class Item {
    name: string;
    price: number;
    pricePerKg: number;


    constructor({name, price, pricePerKg}) {
        this.name = name;
        this.price = price;
        this.pricePerKg = pricePerKg;
        console.log('Successfully created new item:', this)
    }

    private getName = (): string => {
        return this.name;
    }

    private getPrice = (): number => {
        return this.price;
    }

    private getPricePerKg = (): number => {
        return this.pricePerKg;
    }

    private setName = (newName: string): void =>  {
        this.name = newName;
    }
    private setPrice = (newPrice: number): void =>  {
        this.price = newPrice;
    }
    private setPricePerKg = (newPricePerKg: number): void =>  {
        this.pricePerKg = newPricePerKg;
    }

    private addItemToList = (item: Item): void => {
        
    }

    get = (): any => {
        return ({
            name: this.getName(),
            price: this.getPrice(),
            pricePerKg: this.getPricePerKg()
        })
    }

}
