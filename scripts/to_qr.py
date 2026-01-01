import mysql.connector
import qrcode
import os

connect = mysql.connector.connect(
  host='localhost',
  password='e2006b',
  user='root',
  port=3306,
  database='online_tcktng'
)

cursor = connect.cursor()

query = 'SELECT * FROM customers'
cursor.execute(query)
rows = cursor.fetchall()

for i, row in enumerate(rows, start=1):
  data = str(row)
  img = qrcode.make(data)

  file_path = os.path.join('public/qrs', f'customer_{i}.png')
  img.save(file_path)

cursor.close()
connect.close()