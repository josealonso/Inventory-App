export class Product {
    constructor (
        public sku:string, // the public keyword makes the parameter to be a class property
        public name: string,
        public imageUrl: string,
        public department: string[],
        public price: number) { }
}