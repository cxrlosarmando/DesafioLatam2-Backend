import { clients } from "./data/clients";
import { products } from "./data/products";
import { sales } from "./data/sales";
import { bestProducts } from "./functions/bestProducts";
import { calculateTotalSalesByCategory } from "./functions/category";
import { getReport } from "./functions/reports";
import { searchVipClient } from "./functions/vip";

// mejor producto
console.log("Los mejores productos son: ", bestProducts());
console.log("Reporte de inventario: ", getReport(products));const vipClients = searchVipClient(clients, sales);

if (vipClients.length > 0) {
    // Encontrar al cliente con mayor gasto
    const bestClient = vipClients.reduce((prev, current) => 
        (prev.outlay > current.outlay) ? prev : current
    );

    console.log("El mejor cliente es: ", bestClient);
} else {
    console.log("No se encontraron clientes VIP.");
}
console.log("Mayores ventas por categoria:", calculateTotalSalesByCategory());