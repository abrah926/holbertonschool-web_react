/// <reference path="crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an object of type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and get the row ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with an age field
const updatedRow: RowElement = { 
  firstName: 'Guillaume', 
  lastName: 'Salva', 
  age: 23 
};

// Update the row in the database
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);