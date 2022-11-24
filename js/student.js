const form = document.querySelector("form");
const table = document.querySelector("table");
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const array = [];


const addStudent = () =>{

    const name = document.querySelector("#name").value ;
    const age = document.querySelector("#age").value ;
    const city = document.querySelector("#city").value;

    const formData = {
        name,
        age,
        city
    };

    array.push(formData);

    if(name ==="") {
        alert("Name can not be left empty");
        document.querySelector("#name").focus();
        return;
    }
    if(age===""){

        alert("Age can not be left empty");
        document.querySelector("#age").focus();
        return;
    }
    if(city === ""){
        alert("City can not be left empty");
        document.querySelector("#city").focus();
        return;
    }

    try {

        if(localStorage.getItem("studentList") == null)
        {
            localStorage.setItem("studentList", JSON.stringify(array));
        }
        else{
            let storage = JSON.parse(localStorage.getItem("studentList"));
            storage.push(formData);
            localStorage.setItem("studentList" , JSON.stringify(storage));
            console.log(storage)
        }

        
    } catch (error) {
        console.log(error)
        
    }
  


}


const tableHead = data =>{
    let objectsKeys;
    for ( let items of data)
    {
        objectsKeys = Object.keys(items);

    }

    let row = document.createElement("tr");
    for(let key of objectsKeys){

        let heading = document.createElement("th");
        heading.innerHTML = key;
        row.appendChild(heading);

    }
    thead.appendChild(row);
    table.appendChild(thead);

}


const tableBody = data =>{

    for(let items of data)
    {
        let objectValues = Object.values(items);
        let row = document.createElement("tr");
        for(let values of objectValues)
        {
            let cell = document.createElement("td");
            cell.innerHTML = values;
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    console.log(table);

        }
    




const getStudent = () =>{
    const storage = JSON.parse(localStorage.getItem("studentList"));
    if(storage && storage.length >= 1)
    {
        if(table.rows.length <1)
        {
            tableHead(storage);
            tableBody(storage);
        }
    }

}

