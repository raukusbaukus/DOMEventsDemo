/*window.onload = function() {
  let tabs = document.getElementsByClassName('tableau');
  let row = tabs.insertRow(3);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}*/
var table_body = document.querySelector('table');
var table_row = document.createElement('tr');
table_body.appendChild(table_row);
table_row.innerHTML = '<td>m</td><td>n</td><td>o</td><td>p</td>';
