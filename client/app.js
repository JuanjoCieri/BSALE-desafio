// const HTMLResponse = document.querySelector("#app");
// const HTMLResponse2 = document.querySelector("#asd");

// function click (id) {
//     fetch("http://localhost:3000/categories/" + id)
//   .then((response) => response.json())
//   .then((cat) => {
//     const pro = cat.map((d) => `<li>${d.name}</li>`)
//     console.log(pro)
//     document.querySelector("#asd").innerHTML = `<ul>${pro}</ul>`
//   });
// }

function clickc(id) {
  const idd = console.log(id);
  fetch("http://localhost:3000/categories/" + id)
    .then((response) => response.json())
    .then((cat) => {
      const pro = cat.map(
        (d) =>
          `
          <div class="w-[300px] h-[450px] bg-white">
          <img src=${
            d.url_image
          } class="w-[300px] h-[300px]" width="300px"/>
          <div class="flex flex-col">${d.name.toUpperCase()} $ ${d.price}</div>
          </div>
          `
      ).join("");
      console.log(pro);
      document.querySelector("#asd").innerHTML = pro;
    });
}

// document.getElementById("click").onclick = click;

// function get (id) {
//   const d = console.log(id)
//   HTMLResponse.innerHTML = d
// }

// const id = 1

// HTMLResponse.innerHTML = console.log(id)

// function add (id) {
//   const d = console.log(id)
//   HTMLResponse.innerHTML = d
// }

fetch("http://localhost:3000/categories")
  .then((response) => response.json())
  .then((cat) => {
    const categories = cat.map(
      (d) =>
        `<button onclick="clickc(${d.id})">${d.name.toUpperCase()}</button>`
    );
    console.log(categories);
    // HTMLResponse.innerHTML = `<div class="flex flex-col gap-5">${categories}</div>`
    document.querySelector("#app").innerHTML = categories;
  });
