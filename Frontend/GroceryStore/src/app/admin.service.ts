import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  addProductDetails(productRef:any)
  {
    this.http.post("http://localhost:9090/product/addProduct",productRef).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  updateProducts(productRef:any)
  {
   
    return this.http.put("http://localhost:9090/product/updateProduct", productRef,{responseType:'text'});
  }

  deleteProducts(id:any):any{
    return this.http.delete("http://localhost:9090/product/deleteProduct/"+id,{responseType:'text'});
  }

}
