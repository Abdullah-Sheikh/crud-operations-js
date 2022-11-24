const form = document.querySelector("form");
const table = document.querySelector("table");
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const array = [];
let rowIndex;

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

table.onclick =() =>{

    let row = table.rows;
    for(let i=0 ; row.length ; i++)
    {
        row[i].addEventListener("click",activateItem);
    }
}


function activateItem()
{
    rowIndex = this.rowIndex;
    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    let city = document.querySelector("#city");


    name.value = this.cells[0].innerText;
    age.value = this.cells[1].innerText;
    city.value = this.cells[2].innerText;

    
}


const updateStudent = ()=>{

    const storage = JSON.parse(localStorage.getItem("studentList"));
    let name = document.querySelector("#name").value;
    let age  = document.querySelector("#age").value;
    let city = document.querySelector("#city").value;
    let tableRowIndex = rowIndex ;

    if(tableRowIndex--)
    {
        if(name==="")
        {
            alert("Name can not be left empty");
            document.querySelector("#name").focus();
            return;

        }
        if(age==="")
        {
            alert("Age can not left empty");
            document.querySelector("#age").focus();
            return;
        }
        if(city ==="")
        {
            alert("city can not left empty");
            document.querySelector("#city").focus();
            return;
        }

        let confirm = window.confirm("Are you sure you want to update the data?")

        if(confirm)
        {
            tableRowIndex &&
            storage.splice(tableRowIndex ,1,{
                name,
                age,
                city
            });
    
            localStorage.setItem("studentList",JSON.stringify(storage));
            console.log(storage);
            window.alert("Data has been updated");
            window.location.reload();
    
        }
        else{
            return;
        }
    }
    else{
        return;
    }

   
}


const deleteStudent = ()=>{

    let storage  = JSON.parse(localStorage.getItem("studentList"));
    let confirm = window.confirm("Are you want to delete the student Record?")
    if(confirm)
    {

        let tableRowIndex = rowIndex ;



        if(tableRowIndex-- )
        {
        tableRowIndex &&    
        storage.splice(tableRowIndex , 1);
        localStorage.setItem("studentList", JSON.stringify(storage));

        window.alert(`Record has been deleted ${tableRowIndex}`);
        window.location.reload();
        }
        else{
            return;
        }

    }
    else{
        return;
    }

}