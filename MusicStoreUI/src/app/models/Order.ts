export interface CartDTO {
    cartID: number;
    userID: number;
    albumName: string;
    quantity: number;
    priceAfterDiscount: number;
  }
  
  export interface OrderItemsDTO {
    userId: string;
    cartItemsList: CartDTO[];
  }