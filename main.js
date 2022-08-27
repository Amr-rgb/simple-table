const data = {
  "Some Description": [
    "Lorem ipsum",
    "Curabiture sed",
    "Cras sed mi a felis",
    "Pelentesque fringil",
    "Mauris sit amet",
  ],
  "Column Content": [
    "Nullam rutru",
    "Maecenas vulputat",
    "Aenean blandit",
    "Donec dignissim",
    "Vestibulum lorem",
  ],
  "Any Amount": ["$438,556", "$422,849", "$391,448", "$304,864", "$245,995"],
  "Actual Change": ["-109,639", "-42,285", "-27,402", "-9,146", "-2,459"],
  Performance: ["-25%", "-10", "-7", "-3", "-1"],
};

const tbody = document.getElementById("tbody");

window.onload = () => {
  const frag = document.createDocumentFragment();

  Object.entries(data).map(([title, values]) => {
    let valItems = "";
    values.map((item) => {
      const td = `<td>${item}</td>`;
      valItems += td;
    });
    const tr = document.createElement("tr");
    tr.setAttribute("class", "trow");
    tr.onclick = setIsActive;
    tr.innerHTML = `<td>${title}</td> ${valItems}`;

    frag.appendChild(tr);
  });

  tbody.appendChild(frag);
};

const setIsActive = (e) => {
  const trows = document.querySelectorAll(".trow");
  trows.forEach((row) => row.classList.remove("active"));
  e.target.parentNode.classList.add("active");
};

const table = document.getElementById("table");
const rowBtn = document.getElementById("rowViewBtn");
const colBtn = document.getElementById("colViewBtn");

rowBtn.onclick = () => {
  rowBtn.classList.add("active");
  colBtn.classList.remove("active");
  table.classList.remove("colView");
  table.classList.add("rowView");
};
colBtn.onclick = () => {
  colBtn.classList.add("active");
  rowBtn.classList.remove("active");
  table.classList.remove("rowView");
  table.classList.add("colView");
};
