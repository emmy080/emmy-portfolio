let car = document.querySelector(".box");
1
let portfolio = ['gle.jpg','GLE (AMG) 450 ', '&#8358; 130,000,000' ,'&#8358; 150,000,000', '-7%' ,];
    let y =`
    <img src='${portfolio[0]}' />
    <h2> ${portfolio[1]}</h2>
    <h3>${portfolio[2]}</h3>
    <h4>${portfolio[3]}</h4>
    <button>${portfolio[4]}</button>
    `;
    car.innerHTML += y ;