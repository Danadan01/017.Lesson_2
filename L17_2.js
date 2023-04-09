let bttn = document.getElementById("bttn");
let tableParent = document.getElementById("tbody");

function createTable() {
  for (let i = 1; i <= 10; i++) {
  let tableRow = document.createElement("tr");
  tableParent.appendChild(tableRow);
    
    for (let j = (i*10)-9; j <= i*10; j++) {
      let tableData = document.createElement("td");
      tableRow.appendChild(tableData);
      tableData.classList.add("table-data-style");
      let content = document.createTextNode(j);
      tableData.appendChild(content);
    }
  }
}

bttn.addEventListener("click", createTable);