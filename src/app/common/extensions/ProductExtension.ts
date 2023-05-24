import { Product } from 'src/app/common/data/models/Product';

declare global {  
    interface Product {  
        isAvailable(): boolean;  
        isUnavailable(): boolean;
    }  
}

Product.prototype.isAvailable = function() : boolean {
    
}

export {}