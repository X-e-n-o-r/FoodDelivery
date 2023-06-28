export interface RestaurantData {
    image: string;
    name: string;
    time_of_delivery: number;
    stars: number;
    products: string;
    price: number;
    kitchen: string;
}

export interface DishData {
    id: string,
    name: string,
    description: string,
    price: number,
    image: string
}