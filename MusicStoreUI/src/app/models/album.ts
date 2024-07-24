
export class Album{
    constructor(
        public albumId:number,
        public albumName:string,
        public outletID:number,
        public outletName:string,
        public discount:number,
        public priceAfterDiscount:number,
    ){}
}
