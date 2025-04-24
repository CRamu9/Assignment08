// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [121,'Zak',1112,'Zak@me.com','Marketing'],
    [122,'Jessica',1121,'Jessica@me.com','Executive'],
    [123,'Fred',1131,'Fred@me.com','Marketing'],
    [124,'Mark',1141,'Mark@me.com','Finance'],
    [125,'Sally',1151,'Sally@me.com','Executive'],
]


// GET DOM ELEMENTS
const $ = id => document.getElementById(id)
let empForm        = document.getElementById('empForm')
let empTable    = document.getElementById('empTable')
let total    = document.getElementById('totalEmp')

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

    
storage = localStorage.getItem('employees' || '')

if (storage !== null )
{alert(localStorage.getItem('employees').length)
    employees = JSON.parse(localStorage.getItem('employees'))
    
    buildGrid(employees, empTable)
}
else
{
    console.log(employees)
    // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
    buildGrid(employees, empTable)
}
     


// ADD EMPLOYEE

function addEmployee() {  

    // GET THE VALUES FROM THE TEXT BOXES
    let empID    = parseInt(document.getElementById('id').value)
    let ename    = document.getElementById('ename').value
    let ext      = parseInt(document.getElementById('ext').value)
    let email    = document.getElementById('email').value
    let dept     = document.getElementById('dept').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    var newEmp = []

    newEmp[0] = id.value
    newEmp[1] = $('ename').value
    newEmp[2] = $('ext').value
    newEmp[3] = $('email').value
    newEmp[4] = $('dept').value

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmp)
    console.log(employees)
    empCount = employees.length
    // ADD TASK TO STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
    
    console.log(employees)
   
    // BUILD THE GRID
    buildGrid(employees, empTable)
    // CLEAR THE TEXT BOX
    $('id').value = ''
    $('ename').value = ''
    $('ext').value = ''
    $('email').value = ''
    $('dept').value = ''

}

empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    
    add_emp.addEventListener('click',(e) =>{    
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmp)

    })
    
    // RESET THE FORM
    empForm.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    
});

$('add_emp').addEventListener('click', addEmployee)


// BUILD THE EMPLOYEES GRID
function buildGrid(employees, empTable) {
    
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
  
    // REBUILD THE TBODY FROM SCRATCH
    tbody = document.createElement('tbody')
    tbody.setAttribute("id", "empRows")
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    console.log(document.getElementById('empRows'))
    employees.forEach(rowData => {
        const row= tbody.insertRow();
        rowData.forEach(cellData => {
            const cell = row.insertCell();
            cellText = document.createTextNode(cellData);
            cell.appendChild(cellText)
        })
        var delete_btn  = row.insertCell(5);
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        // DELETE EMPLOYEE
        deleteButton.addEventListener('click', function() {
            empTable.deleteRow(row.rowIndex);
            employees.splice(row.rowIndex - 1, 1)
            empCount = employees.length
            if (empCount >0)
            {
            localStorage.setItem('employees', JSON.stringify(employees))
            }
            else{
                localStorage.removeItem('employees')
            }
        });
        delete_btn.appendChild(deleteButton);
        tbody.appendChild(row)
    })
    // BIND THE TBODY TO THE EMPLOYEE TABLE
   empTable.appendChild(tbody)
   
    // UPDATE EMPLOYEE COUNT
    empCount = employees.length
    total.innerHTML = `Number of Employees : ${empCount}`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))

};
