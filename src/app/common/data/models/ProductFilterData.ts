import { ProductFilterStatusEnum } from "../../enums/ProductFilterStatusEnum";

export interface ProductFilterData{
    selectedStatus: ProductFilterStatusEnum | undefined;
    searchValue: string;
}