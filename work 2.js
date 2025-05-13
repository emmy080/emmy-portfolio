let data = document.querySelector('.employ');

let idCard =['man.jpg'];
const employee =[
    {
        fullname: "Name: Lameed Ibrahim " ,
        department:"Department: Marketing",
        position:"Position: C.E.O",
        upforRetirement : "Ready To Retire: False",
        age : "Age: 30",
        salary: "Salary: &#8358; 200,000",
    },

    {
        fullname: "Name: Lameed Ibrahim " ,
        department:"Department: Marketing",
        position:"Position: C.E.O",
        upforRetirement : "Ready To Retire: False",
        age : "Age: 30",
        salary: "Salary: &#8358; 200,000",
    },

    {
        fullname: "Name: Lameed Ibrahim " ,
        department:"Department: Marketing",
        position:"Position: C.E.O",
        upforRetirement : "Ready To Retire: False",
        age : "Age: 30",
        salary: "Salary: &#8358; 200,000",
    }
]

employee.forEach(em => {
    let j =`
    <img src='${idCard}' />
    <li> ${em.fullname}<br><hr> ${em.department}<br><hr> ${em.position}<br><hr> ${em.upforRetirement}<br><hr> ${em.age}<br><hr> ${em.salary} </li>
    `;
  data.innerHTML += j;
});