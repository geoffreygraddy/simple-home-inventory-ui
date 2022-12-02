import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeInventoryService {

  homeInventory = [
    {
      id: 1, 
      name: 'LG Household Refrigerator', 
      model: 'LRFDS2016S /01', 
      serial: '111KRJU3M812', 
      description: '30 cu. ft. French Door Smart Refrigerator, Door-In-Door, Dual Ice Makers with Craft Ice, PrintProof Stainless Steel'
    },
    {
      id: 2, 
      name: 'LG Front Load Washer', 
      model: 'WM3600HWA /01', 
      serial: '012TNNH01927', 
      description: '4.5 cu. ft. Ultra Large Capacity Smart wi-fi Enabled Front Load Washer with Built-In Intelligence & Steam Technology'
    },
    {
      id: 3, 
      name: 'LG Electric Dryer', 
      model: 'DLEX3700W', 
      serial: '007KWGG2Y071', 
      description: '7.4 cu. ft. Ultra Large Capacity Smart wi-fi Enabled SteamDryer™'
    },
  ];

  constructor(private http: HttpClient) { }

  getHomeInventoryList() {
    return this.homeInventory;
    // return this.http.get<{}[]>(`api/v1/home-inventory`);
  }

  getHomeInventoryItem(id: any) {
    return this.http.get<{}[]>(`api/v1/home-inventory/${id}`);
  }

  createHomeInventoryItem(recipe: any) {
    return this.http.post(`api/v1/home-inventory`, recipe);
  }

  updateHomeInventoryItem(id: any, recipe: any) {
    return this.http.post(`api/v1/home-inventory/${id}`, recipe);
  }

  deleteHomeInventoryItem(id: any) {
    return this.http.delete(`api/v1/home-inventory/${id}`);
  }
}
