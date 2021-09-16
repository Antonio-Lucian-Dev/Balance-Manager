/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exchange } from '../types/exchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private EXCHANGE_URL = 'http://api.exchangeratesapi.io/v1';
  private EXCHANGE_KEY = 'e7ec06fbf0e94cb6d35b0d85768f8459';

  constructor(private http: HttpClient) { }

  public getExchangeToday(): Observable<Exchange> {
    return this.http.get<Exchange>(`${this.EXCHANGE_URL}/latest?access_key=${this.EXCHANGE_KEY}`);
  }
}
