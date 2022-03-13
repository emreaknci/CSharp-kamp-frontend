import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryRespondeModel extends ResponseModel{
    data:Category[]
}

