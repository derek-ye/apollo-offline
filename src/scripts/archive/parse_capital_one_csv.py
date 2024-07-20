import csv
import json
from datetime import datetime

def parse_csv_to_nivo_format(file_path):
    transactions = []

    with open(file_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        
        for row in reader:
            date = datetime.strptime(row['Transaction Date'], "%Y-%m-%d").strftime("%Y-%m-%d")
            debit = float(row['Debit']) if row['Debit'] else 0.0
            credit = float(row['Credit']) if row['Credit'] else 0.0
            
            if debit > 0:
                transactions.append({"x": date, "y": debit})  # Keep debits as positive
            # if credit > 0:
            #     transactions.append({"x": date, "y": -credit})  # Credits as positive

    # Sort transactions by date
    transactions = sorted(transactions, key=lambda x: x["x"])

    # Nivo expects an array of objects with id, color, and data
    nivo_data = [{
        "id": "transactions",
        "color": "hsl(348, 70%, 50%)",
        "data": transactions
    }]

    return nivo_data

# Example usage
file_path = 'capone.csv'
nivo_data = parse_csv_to_nivo_format(file_path)

# Print the output
print(json.dumps(nivo_data, indent=4))