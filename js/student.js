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
