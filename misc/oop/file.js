
/*
class Car {
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    showCar(){
        return this.color + " " + this.brand + " of the " + this.model + " model";
    }
}

let car = new Car("red", "Toyota", "5th");
alert(car.showCar());
*/

/*
let page = {

    _content: "",

    setContent(content){ this.content = content; },
    getContent(){ return document.querySelector("body").innerHTML = this.content; }
}

page.setContent("<p>Hello world</p>");
page.getContent();
*/

/*
let Student = {

    _firstName: "",
    _lastName: "",
    _school: "",
    _grade: "",

    setStudent(fName, lName, sch, grd){
        this.firstName = fName;
        this.lastName = lName;
        this.school = sch;
        this.grade = grd;
    },
    getStudent(){
        let fnLine = "<p>First name - " + this.firstName + "</p>";
        let lnLine = "<p>Last name - " + this.lastName + "</p>";
        let scLine = "<p>School - " + this.school + "</p>";
        let grLine = "<p>Grade - " + this.grade + "</p>";

        let output = fnLine + lnLine + scLine + grLine;
        return document.querySelector("body").innerHTML = output;
    }
}

Student.setStudent("Ivan", "Ivanov", "1st School", "5");
Student.getStudent();
*/

/*
Create Method
add, remove employee
show all
show someone
when adding or showing add salary
*/

class Employee {
    constructor(name, salary){ this.name = name; this.salary = salary; }
    isEmployee(name){ return name == this.name; }
}

class Industry {

    constructor(){ this.name = ""; this.director = ""; this.products = []; this.employees = []; }
    
    changeName(nm){ this.name = nm; console.log("Name was changed to " + this.name); return this.name; }

    changeDirector(dr){ this.director = dr; console.log("Director was changed to " + this.director); return this.director; }

    addProduct(product){ this.products.push(product); console.log(product + "was added to products"); }
    removeProduct(product){ this.products.splice(this.products.indexOf(product), 1); console.log(product + "was removed from products"); }

    addEmployee(name, salary){ this.employees.push(new Employee(name, salary)); console.log(name + "was added to employees with the salary of " + salary); }
    removeEmployee(name){
        this.employees.forEach(emp => { 
            if(emp.isEmployee(name)){ 
                this.employees.splice(this.employees.indexOf(emp), 1);
                console.log(name + "was removed from employees");
            } 
        } )
    }
}


let industry = new Industry();


function addName(){
    let value = document.querySelector("#input-name").value;
    document.querySelector("#company-name").innerHTML = industry.changeName(value);
    document.querySelector("#input-name").value = "";
}

function addDirector(){
    let value = document.querySelector("#input-director").value;
    document.querySelector("#company-director").innerHTML = industry.changeDirector(value);
    document.querySelector("#input-director").value = "";
}

function addProduct(){
    let value = document.querySelector("#input-product").value;
    industry.addProduct(value);
    document.querySelector("#input-product").value = "";
    updateProductsList()
}

function removeProduct(el){
    industry.removeProduct(el.parentNode.querySelector("span").innerHTML);
    updateProductsList()
}

function updateProductsList(){
    document.querySelector("#company-products").innerHTML = "";
    industry.products.forEach(prd => {
        let element = "<ul><span>" + prd + "</span><button onclick='removeProduct(this)' style='margin-left: 10px;'>Remove Product</button></ul>";
        document.querySelector("#company-products").innerHTML += element;
    })
}

function addEmployee(){
    let valueN = document.querySelector("#input-employee-name").value;
    let valueS = document.querySelector("#input-employee-salary").value;
    industry.addEmployee(valueN, valueS);
    document.querySelector("#input-employee-name").value = "";
    document.querySelector("#input-employee-salary").value = "";
    updateEmployeesList()
}

function removeEmployee(el){
    industry.removeEmployee(el.parentNode.querySelector("span").innerHTML);
    updateEmployeesList()
}

function updateEmployeesList(){
    document.querySelector("#company-employees").innerHTML = "";
    industry.employees.forEach(emp => {
        let element = "<ul><span>" + emp.name + "</span> - " + emp.salary + "<button onclick='removeEmployee(this)' style='margin-left: 10px;'>Remove Employee</button></ul>";
        document.querySelector("#company-employees").innerHTML += element;
    })
}

function showEmployee(){
    let value = document.querySelector("#input-employee-name-search").value;
    industry.employees.forEach(emp => { 
        if(emp.isEmployee(value)){ 
            console.log(emp);
        } 
    } )
}

function showEmployeeAll(){
    industry.employees.forEach(emp => { console.log(emp); } )
}