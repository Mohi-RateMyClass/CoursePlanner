import gspread
from google.oauth2.service_account import Credentials
import json

scopes = ["https://www.googleapis.com/auth/spreadsheets"]

creds = Credentials.from_service_account_file("src/app/API/credentials.json", scopes=scopes)
client = gspread.authorize(creds)

sheet_id = "1uP9MF0Jf2FhqxcEToxJ014O2GpBNNhk04paK_6n4n7k"
sheet = client.open_by_key(sheet_id)

values_list = sheet.sheet1.get_all_values()
json_data = json.dumps(values_list, indent= 4)

outfile_path = "/Users/parth/MohiCoursePlannerRepos/CoursePlanner/src/app/API/sheets_values.json" 

with open(outfile_path, "w") as output_file:
    output_file.write(json_data)

print(values_list)

