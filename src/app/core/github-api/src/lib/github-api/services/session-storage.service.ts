import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  getItem(key: string): string | null {
    return sessionStorage.getItem(key) || null;
  }

  setItem(key: string, data: string): void {
    sessionStorage.setItem(key, data);
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}
