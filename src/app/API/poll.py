import gspread
from google.oauth2.service_account import Credentials
import json

scopes = ["https://www.googleapis.com/auth/spreadsheets"]

creds = Credentials.from_service_account_file("src/app/API/credentials.json", scopes=scopes)
client = gspread.authorize(creds)

sheet_id = "1uP9MF0Jf2FhqxcEToxJ014O2GpBNNhk04paK_6n4n7k"
sheet = client.open_by_key(sheet_id)

i = 0 

for worksheet in sheet.worksheets():
    i  += 1
    if(i == 4):
        values_list = worksheet.get_all_values()            
    
headers = values_list[0]

formatted_data = []
for row in values_list[1:]:
    formatted_row = {}
    for i, value in enumerate(row):
        formatted_row[headers[i]] = value
    formatted_data.append(formatted_row)

outfile_path = "src/app/poll/poll.json"  
with open(outfile_path, "w") as output_file:
    json.dump(formatted_data, output_file, indent=4)

print(formatted_data)