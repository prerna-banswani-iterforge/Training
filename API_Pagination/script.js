const URL = "https://jsonplaceholder.typicode.com/todos/";

let data = [];
const rowsPP = 50;
let currentPg = 1;

const tableBody = document.querySelector("#dataTable tbody");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

async function fetchData() {
  try {
    const response = await fetch(URL);
    data = await response.json(); 
    displayTable();

  } 
  catch (error) {
    console.error("Error:", error);
  }
}


function displayTable() {
  tableBody.innerHTML = "";

  let start = (currentPg - 1) * rowsPP;
  let end = start + rowsPP;

  let pageData = data.slice(start, end);

  pageData.forEach(item => {
    let row = `<tr>
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.completed ? "Completed": "Not Completed"}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

nextBtn.addEventListener("click", () => {
  if (currentPg * rowsPP < data.length) {
    currentPg++;
    displayTable();
    updateButtons();
  }
});


prevBtn.addEventListener("click", () => {
  if (currentPg > 1) {
    currentPg--;
    displayTable();
    updateButtons();
  }
});

function updateButtons() {
  prevBtn.disabled = currentPg == 1;
  nextBtn.disabled = currentPg * rowsPP >= data.length;
}

fetchData();