function search() {
  const value = document.querySelector("#search").value;
  fetch("http://localhost:3000/categories/name/" + value.toUpperCase())
    .then((response) => response.json())
    .then((cat) => {
      const pro = cat
        .map(
          (d) =>
          `
          <div class="w-[300px] h-[450px] bg-white shadow-xl">
          <img src=${
            d.url_image
              ? d.url_image
              : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1902/pavelstasevich190200120/124934975-no-hay-icono-de-imagen-disponible-vector-plano.jpg?ver=6"
          } class="w-[300px] h-[300px]" width="300px" h-"300px"/>
          <div class="flex bg-red-300 h-[150px] flex-col justify-between">
            <div>
              ${d.name.toUpperCase()}
            </div>
            <div class="h-auto">
              $ ${d.price}
            </div>
          </div>
          </div>
          `
        )
        .join("");
      console.log(pro);
      document.querySelector("#asd").innerHTML =
        pro.length > 0
          ? pro
          : `<div class="w-screen h-screen flex justify-center items-center"><h1>No se encontraron resultados!</h1></div>`;
    });
}

function products (id) {
  fetch("http://localhost:3000/categories/" + id)
    .then((response) => response.json())
    .then((cat) => {
      const pro = cat
        .map(
          (d) =>
            `
          <div class="w-[300px] h-[450px] bg-white shadow-xl">
          <img src=${
            d.url_image
              ? d.url_image
              : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1902/pavelstasevich190200120/124934975-no-hay-icono-de-imagen-disponible-vector-plano.jpg?ver=6"
          } class="w-[300px] h-[300px]" width="300px" h-"300px"/>
          <div class="flex h-[150px] flex-col justify-between">
            <div>
              <h1>${d.name.toUpperCase()}</h1>
            </div>
            <div class="h-full ">
              <h3 class="text-orange-700">$ ${d.price}</h3>
            </div>
          </div>
          </div>
          `
        )
        .join("");
      console.log(cat);
      document.querySelector("#asd").innerHTML = pro;
    });
}

fetch("http://localhost:3000/categories")
  .then((response) => response.json())
  .then((cat) => {
    const categories = cat
      .map(
        (d) =>
          `<button class="border w-full h-32 flex items-center pl-5 text-sm lg:text-xl" onclick="products(${
            d.id
          })">${d.name.toUpperCase()}</button>`
      )
      .join("");
    document.querySelector("#app").innerHTML = categories;
  });