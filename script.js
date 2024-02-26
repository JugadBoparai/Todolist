const todoList = [
    // {name: '',
    // dueDate: ''}
];

renderTodoList();

function renderTodoList(){
let todoListHTML = ''; 
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <div>            
            <button class="delete-button">x</button>
        </div>
        `;
        todoListHTML += html;
    })

// for (let i = 0; i < todoList.length; i++){
//     const todoObject = todoList[i];
//     // const name = todoObject.name;
//     // const dueDate = todoObject.dueDate;
//     const { name, dueDate } = todoObject;
   
//     const html = `
//     <div>${name}</div>
//     <div>${dueDate}</div>
//     <div>            
//         <button class="delete-button" onclick="
//             todoList.splice(${i}, 1); 
//             renderTodoList();
//         ">x</button>
//     </div>
//     `;
//     todoListHTML += html;
//     }

    document.querySelector('.results').innerHTML = todoListHTML;
    
    document.querySelectorAll('.delete-button')
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1); 
            renderTodoList();
        })
    })

}

document.querySelector('.add-button')
.addEventListener('click', () => {
    addTodo();
});
document.querySelectorAll('.js-input')
.forEach((element) => {
element.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodo();
        }
    });
}); 


function addTodo(){
    const inputElement = document.querySelector('.input-text');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.input-date');
    const dueDate = dateInputElement.value;
    if (name.trim() === ''){
        alert('Please enter a list..');
    } else if (dueDate.trim() === '') {
        alert('please enter a date..')
    } else {
        todoList.push({
            // name: name,
            // dueDate: dueDate
            name,
            dueDate,
        });
    }
    inputElement.value = '';
    renderTodoList();

}

