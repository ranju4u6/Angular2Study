import { IUser } from "./IUser";

export interface IPage{
    page:string;
    per_page:string;
    total:string;
    total_pages:string;
    data:IUser[];
}