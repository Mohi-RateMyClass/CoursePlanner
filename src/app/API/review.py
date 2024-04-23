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
    if(i == 3):
        values_list = worksheet.get_all_values()            
    
    


headers = values_list[0]

reviewList = {}

first = True

for values in values_list:
    
    if values[1] != "" and not first:
         
        if values[0] in reviewList:
                reviewList[values[0]] =  reviewList[values[0]] + values[1]+  "|" 
        else:
                reviewList[values[0]] = values[1] + "|"
    if first:
         reviewList[values[0]] = "Reviews"
         first = False

print(reviewList)
headers[0] = "Classes"
headers[1] = "Reviews"
formatted_data = []

json_data = []

for key, value in reviewList.items():
    if key != 'Class':
        json_data.append({"Class": key, "Reviews": value})

json_output = json.dumps(json_data, indent=4)
print(json_output)


# for row in reviewList:
#     formatted_row = {}
#     for i, value in enumerate(row):
#         formatted_row[headers[i]] = value
#     formatted_data.append(formatted_row)

outfile_path = "src/app/details/reviews.json"  

with open(outfile_path, "w") as output_file:
    json.dump(json_data, output_file, indent=4)

# print(formatted_data)