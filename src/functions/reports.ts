import { Product } from "../moldels/product";

export function getReport(products: Product[]) {
    return products.map(product =>{
        let status: string;

        if (product.stock < 10){
            status = "Low Stock";
        } else if (product.stock < 20) {
            status = "in Stock";
        } else {
            status = "High Stock";
        }

        return {
            name: product.name,
            category: product.category,
            stock: product.stock,
            status: status
        };
    });
};