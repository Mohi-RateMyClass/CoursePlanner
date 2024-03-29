import gspread
from google.oauth2.service_account import Credentials
import json

scopes = ["https://www.googleapis.com/auth/spreadsheets"]

creds = Credentials.from_service_account_file("src/app/API/credentials.json", scopes=scopes)
client = gspread.authorize(creds)

sheet_id = "1SMTSYEdl4xNOWgSseF1IjCJ2mFuhkcQKpZC7Gk9LpM8"
sheet = client.open_by_key(sheet_id)

all_sheets_data = {}

for worksheet in sheet.worksheets():
    values_list = worksheet.get_all_values()

    headers = values_list[0]
    formatted_data = []

    for row in values_list[1:]:
        formatted_row = {}
        for i, value in enumerate(row):
            formatted_row[headers[i]] = value
        formatted_data.append(formatted_row)

    all_sheets_data[worksheet.title] = formatted_data

outfile_path = "src/app/courepathway/coursepathways.json"
with open(outfile_path, "w") as output_file:
    json.dump(all_sheets_data, output_file, indent=4)

print(all_sheets_data)
