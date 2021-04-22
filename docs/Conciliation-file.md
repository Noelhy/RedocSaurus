---
title: Conciliation File
---

The Conciliation file is a CSV file separated by commas that is made up by the total of all the successful transactions registered by the Gestopago in a certain day.
The purpose is check and confirm for the implementer the number of successful transactions in a certain day.
The file of conciliation can be sent by mail or SFTP `Secured File Transfer Protocol` that the implementer will provide to Gestopago. The file is created between 2:00 AM and 10:00 AM without a specific time of creation.

### File name
The file name will be structured according to the following nomenclature:  

:::note Nomenclature
```
“GTP” + “_” + ID_DISTRIBUITOR + ”_” + YYYYMMDD + ”.csv”  
```
Example
```jsx tittle="Example"
        GTP_XXXX_20170911.csv
```
:::
Take into account that the date of conciliation is a day before the date of creation and deposit of the file.

### Structure file
The structure is a CSV file **separated by commas** which uses the symbol “\n” for break-lines.
The structure is always composed by header,title, body (in case of successful transactions) and footer.

### HEADER
The first row of the file uses three columns in the following way:

| Row 1  |      Column 1    |   HDR          | string| Fixed text: HDR|
| -----: | :---------------:|:--------------:|------:|:--------------:| 
| Row 1  |Column 2          |id distribuitor |integer| id distribuitor|
| Row 1  |Column 3          | date           |string |Date format: **YYYYMMDD**|

#### Example header: 
HDR,0000,20200819

| HDR |  0000    |   20200819 |
| ---:|:--------:| ----------:| 


### TITLE
The second line of the file, has the title of transactions. It is made up of the following columns.

| Row 2  |      Column 1    |   #            | string| Fixed value|
| -----: | :---------------:|:--------------:|------:|-----------:| 
| Row 2  |Column 2          |servicio        |string| Fixed value|
| Row 2  |Column 3          |producto        |string| Fixed value|
| Row 2  |Column 4          |sucursal        |string| Fixed value|
| Row 2  |Column 5          |dispositivo     |string| Fixed value|
| Row 2  |Column 6          |fecha           |string| Fixed value|
| Row 2  |Column 7          |hora            |string| Fixed value|
| Row 2  |Column 8          |referencia      |string| Fixed value|
| Row 2  |Column 9          |concepto        |string| Fixed value|
| Row 2  |Column 10         |monto           |string| Fixed value|
| Row 2  |Column 11         |idTransaccion   |string| Fixed value|
| Row 2  |Column 12         |noAutorizacion  |string| Fixed value|
| Row 2  |Column 13         |upc             |string| Fixed value|


#### Example title:
| # | servicio| producto| sucursal|dispositivo|fecha|hora|referencia|concepto|monto|idTransaccion|noAutorizacion|upc|
|--:| :------:| -------:|--------:|----------:|----:|---:|---------:|-------:|----:|------------:|-------------:|--:| 

### BODY
From **third row and forward** of the file will be the successful transactions until footer
It is composed of the following columns:

| Row n  |      Column 1    |   #            | integer| Fixed value|
| -----: | :---------------:|:--------------:|:-----: |:----------:| 
| Row n  |Column 2          |servicio        |string  | Fixed value|
| Row n  |Column 3          |producto        |string  | Fixed value|
| Row n  |Column 4          |sucursal        |string  | Fixed value|
| Row n  |Column 5          |dispositivo     |string  | Fixed value|
| Row n  |Column 6          |fecha           |integer | Format date: **YYYYMMDD**|
| Row n  |Column 7          |hora            |integer | Format time: HIS     |
| Row n  |Column 8          |referencia      |string  | Fixed value|
| Row n  |Column 9          |concepto        |string  | Fixed value|
| Row n  |Column 10         |monto           |dooble  | Fixed value|
| Row n  |Column 11         |idTransaccion   |integer | Fixed value|
| Row n  |Column 12         |noAutorizacion  |string  | Fixed value|
| Row n  |Column 13         |upc             |string  | Just if is provided by the implementer|


#### Example body:
1,TELMEX,Factura Telmex,StoreX,GPSXXXX-TPV,20200819,1111111111,Telmex/Telmex,100.25,000005,000004,123

| 1 | TELMEX| Factura Telmex| StoreX|GPSXXXX-TPV|20200819|101021|1111111111|Telmex/Telmex|100.25|000005|000004|123|
|--:| :------:| -------:|--------:|----------:|----:|---:|---------:|-------:|----:|------------:|-------------:|--:| 



### FOOTER
The last row is the footer of the file using three columns in the following way.

| Last row  |      Column 1    |   TRL            | string| Fixed value: TRL|
| --------: | :---------------:|:----------------:|------: |:--------------:| 
| Last row  |Column 2          |Total transactions|string  | Number of successful transactions.           |
| Last row  |Column 3          |Total amount      |string  |  Total amount of the successful transactions.|

#### Example footer:

TRL,033369,1265500.0

## EXAMPLE FILE

| HDR |  0000      |   20200819 |
| ---:|:--------:  |-----------:| 

| # | servicio| producto| sucursal|dispositivo|fecha|hora|referencia|concepto|monto|idTransaccion|noAutorizacion|upc|
|--:| :------:| -------:|--------:|----------:|----:|---:|---------:|:------:|----:|------------:|-------------:|--:| 
| 1 | TELMEX| Factura Telmex| StoreX|GPSXXXX-TPV|20200819|101021|1111111111|Telmex/Telmex|100.25|000005|000004|123|
| 2 | TELMEX| Factura Telmex| StoreX|GPSXXXX-TPV|20200819|101022|1111111111|Telmex/Telmex|200.25|000006|000005|567|
| 3 | TELMEX| Factura Telmex| StoreX|GPSXXXX-TPV|20200819|101023|1111111111|Telmex/Telmex|300.25|000007|000006|890|

| TRL |  033369    |   1265500.0 |
| ---:|:--------:  |------------:| 