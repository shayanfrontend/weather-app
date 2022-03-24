// api.openweathermap.org/data/2.5/weather?q=tehran&appid=f3730fff3545da36263f076eabdd47ec&units=metric


const form = document.querySelector(".main form");
const input =document.querySelector(".main input");
const sp =document.querySelector(".main .sp");
const ull =document.querySelector(".ull");
const im = document.getElementById("img")

const apiKey = "f3730fff3545da36263f076eabdd47ec"

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;
    input.value = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch(url)
          .then(response => response.json())
          .then(data => {
              const { main, name, sys, weather } = data;
              const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
              const li = document.createElement("li");
              li.classList.add("lii");
              const markUp = `
              <h4>${name}<span class='sys'>${sys.country}</span></h2>
              <h2 class='ma'>${Math.round(main.temp)} c</h2>
              <figure>
              <img src='${icon}' alt=''>
              <figcaption class='ma'>${weather[0]["description"]}</figcaption>
              </figure>
              `
              li.innerHTML = markUp
              ull.appendChild(li)
          })
          .catch(() => {
            sp.innerText = "search for a valid city"
          })
})
