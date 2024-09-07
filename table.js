let result = 0;
// let mul = 10;
function calculate() {
  document.querySelector(".result").innerHTML = "Table<br>";
  let num = document.getElementById("search").value;
  mul = document.getElementById("multiple").value;

  //    num = Number(num)
  console.log(typeof num);
  //   document.getElementsByClassName("result").style.display = "block"
  console.log(num);
  for (let i = 1; i <= mul; i++) {
    result = num * i;
    const rs = `${num} * ${i} = ${result}`;
    console.log(rs);
    document.querySelector(".result").innerHTML += rs;
    document.querySelector(".result").innerHTML += "<br>";
  }

  //   return result;
}

// calculate()
