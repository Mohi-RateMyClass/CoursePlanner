import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {

  constructor(private http: HttpClient) { }

  getFirstSlotData() {
    const spreadsheetId = environment.characters.spreadsheetId;
    const range = 'Sheet1!A1:A1'; // Assuming your data is in the first row and first column
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${environment.googleSheetsApiKey}`;
    
    return this.http.get(url);
  }
}
