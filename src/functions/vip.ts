import { Client } from "../moldels/client";
import { Sale } from "../moldels/sale";
import { Product } from "../moldels/product";
import { products } from "../data/products";

export function searchVipClient(clients: Client[], sales: Sale[]) {
    
    const outlayForClient: { [idClient: number]: number } = sales.reduce((acc, sale) => {
        const foundProduct = products.find(p => p.id === sale.idProduct);
        const allSales = foundProduct ? foundProduct.price * sale.quantity : 0;

        if (acc[sale.idClient]) {
            acc[sale.idClient] += allSales;
        } else {
            acc[sale.idClient] = allSales;
        }

        return acc;
    
    }, {} as { [idClient: number]: number });

    return clients
        .filter(client => outlayForClient[client.idClient] > 1000000)
        .map(client => ({ ...client, outlay: outlayForClient[client.idClient] }));
}

