import { products } from "../data/products";
import { sales } from "../data/sales";

export function calculateTotalSalesByCategory(): {[category: string]: number} {
    return sales.reduce((acc, sale) => {
        const product = products.find(p => p.id === sale.idProduct);
        if (product) {
            const entry = product.price * sale.quantity;
            acc[product.category] = (acc[product.category] || 0) + entry;
        }
        return acc;

    }, {} as {[category: string]: number})
}