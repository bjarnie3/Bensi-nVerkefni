// java script kóðinn
let init = () => {
  getData();
}
let getData = (type="bensin") => {
  console.log("success");
  $('#petrol-table').html(' ');
  $.get(`https://apis.is/petrol`, (data) => {
    data.results.map((results) => {
      console.log("success 1");
      if(type == "bensin"){
      $('#petrol-table').append(`
        <tr><td>${results.company}</td>
        <td>${results.name}</td>
        <td>${results.bensin95}</td>`)
      }
      else{
        $('#petrol-table').append(`
          <tr><td>${results.company}</td>
          <td>${results.name}</td>
          <td>${results.diesel}</td></tr>`)
      }
    });
  });
}
let btn_is = document.getElementById("btn_is");
let btn_gas = document.getElementById("btn_gas");

localStorage.setItem("type", "bensin");

btn_gas.onclick = function () {
  if(localStorage.getItem("type") === "bensin"){
    getData("diesel");
    localStorage.setItem('type', 'diesel');
    $("#company").text("Fyrirtæki");
    $("#name").text("Staðsetning");
    $("#Bensin95").text("Dísel");
    $("#btn_gas").text("Bensín");
  }
  else {
    getData();
    localStorage.setItem('type', 'bensin');
    $("#company").text("Fyrirtæki");
    $("#name").text("Staðsetning");
    $("#Bensin95").text("Bensín");
    $("#btn_gas").text("Dísel");
  }
}
init();
