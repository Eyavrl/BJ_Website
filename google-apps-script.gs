/**
 * Paste this into Apps Script for:
 * https://docs.google.com/spreadsheets/d/12D7ZtbJofAto61Uolu7bmzCfSjNZtqQYnyhl6ILfeTg
 *
 * 1. Open the sheet → Extensions → Apps Script
 * 2. Replace the editor contents with this file
 * 3. Deploy → New deployment → Type: Web app
 *    Execute as: Me
 *    Who has access: Anyone
 * 4. Copy the Web app URL into WEB_APP_URL in bjairconservices.html
 *
 * Sheet columns: Timestamp | First Name | Last Name | Phone | Email | Service |
 * Unit Type | Preferred Date | Preferred Time | Address | Notes
 */
const SHEET_ID = '12D7ZtbJofAto61Uolu7bmzCfSjNZtqQYnyhl6ILfeTg';

function doPost(e) {
  const p = (e && e.parameter) ? e.parameter : {};
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  sheet.appendRow([
    new Date(),
    p.firstName || '',
    p.lastName || '',
    p.phone || '',
    p.email || '',
    p.service || '',
    p.unitType || '',
    p.preferredDate || '',
    p.preferredTime || '',
    p.address || '',
    p.notes || ''
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: 'B&J quote/booking endpoint' }))
    .setMimeType(ContentService.MimeType.JSON);
}
