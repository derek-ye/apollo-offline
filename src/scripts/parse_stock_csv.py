import csv
import json
from datetime import datetime

def parse_csv_to_nivo_format(file_path):
    with open(file_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        nivo_data = []

        # Initialize a dictionary to store the data for each line (e.g., Open, High, Low, Close)
        data_dict = {
            "Open": {"id": "Open", "color": "hsl(348, 70%, 50%)", "data": []},
            "High": {"id": "High", "color": "hsl(144, 70%, 50%)", "data": []},
            "Low": {"id": "Low", "color": "hsl(248, 70%, 50%)", "data": []},
            "Close": {"id": "Close", "color": "hsl(44, 70%, 50%)", "data": []}
        }

        for row in reader:
            date = datetime.strptime(row['Date'], "%m/%d/%Y").strftime("%Y-%m-%d")
            data_dict["Open"]["data"].append({"x": date, "y": float(row["Open"])})
            data_dict["High"]["data"].append({"x": date, "y": float(row["High"])})
            data_dict["Low"]["data"].append({"x": date, "y": float(row["Low"])})
            data_dict["Close"]["data"].append({"x": date, "y": float(row["Close"])})

        # Append each series to the nivo_data list
        for key in data_dict:
            nivo_data.append(data_dict[key])

        return nivo_data

# Example usage
file_path = 'aapl-year.csv'
nivo_data = parse_csv_to_nivo_format(file_path)

# Print the output
print(json.dumps(nivo_data, indent=4))