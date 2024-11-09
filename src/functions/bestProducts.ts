import { Product } from "../moldels/product";
import { products } from "../data/products";
import { sales } from "../data/sales";

export function bestProducts(): Product [] {
    const salesForProduct = sales.reduce((acc, sale) => {
        acc[sale.idProduct] = (acc[sale.idProduct] || 0 ) + sale.quantity;
        return acc;
    }, {} as {[key: number]: number});

    return products 
    .map(product => ({
        ...product, quantity: salesForProduct[product.id] || 0 
    }))
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 5);
}