// number , string, object, array, function, boolean

// number
let a = 3;
let aa = 5;
// console.log(a + aa)

// string
let b = '2'
let bb = '3'

// console.log(b + bb )


// object
// const todo = {id: '1', title: 'todo 1'} 
// key: string, value =  number , string, object, array, function, boolean



// array
// const todos = [
//     {id: '1',title: 'todo 1', isDone: true },
//     {id: '2', title: 'todo 2', isDone: false}
// ]

// forEach, map, filter, reduce
// todos.forEach(todo => console.log(todo))
// const newTodos = todos.map(todo =>  ({id: todo.id, title: todo.title, isDone: true}) )

// const newTodos = todos.filter(todo => todo.isDone === false) // 

// destructuring array, object

// const todo = {id: '1', title: 'todo 1'} 
// const title = todo.title
// const {title, id} = todo

const todos = [
    {id: '1',title: 'todo 1', isDone: true },
    {id: '2', title: 'todo 2', isDone: false}
]

const [t1, t2] = todos

// console.log(t2)

// console.log(newTodos)

// function


const calculateAge = () => {
    console.log('your age is')
}
// es6 arrow function


// console.log(typeof calculateAge)

// boolean
const isDone = false // isDone = false


// callback

// const logAge = (age) => {
//     console.log(age)
// }

// const logAge = (age) => {console.log('age is '+ age)}

// const logPerson = (callback) => {
//     console.log('name: hh')
//     callback(18)
// }

// anonymous function  () => {}

// logPerson(logAge)

// todos.forEach((todo) => {console.log(todo)})

// // 

// const ForEach = (callback) => {
//     for (let i = 0; i < todos.length; i++){
//         callback(todos[i])
//     }
// }

// DOM = Document Object Modal


const container = document.querySelector('.container')

const createTodo = (title) => {
    const todoElement = document.createElement('div')
    todoElement.classList.add('item')

    // p
    const titleElement = document.createElement('p')
    titleElement.textContent = title

    const doneBtn = document.createElement('button')
    doneBtn.textContent = 'Done'
    doneBtn.addEventListener('click',(e) => {
       todoElement.classList.toggle('done') 
    })

    const delBtn = document.createElement('button')
    delBtn.textContent = 'Delete'
    delBtn.addEventListener('click',(e) => {
        todoElement.remove()
    })

    // chèn các element vào todo
    todoElement.appendChild(titleElement)
    todoElement.appendChild(doneBtn)
    todoElement.appendChild(delBtn)

    return todoElement
}

const todo1 = createTodo('todo 1')
const todo2 = createTodo('todo 2')
const todo3 = createTodo('todo 3')
container.appendChild(todo1)
container.appendChild(todo2)
container.appendChild(todo3)

// container.classList.add('bg-red')
// // container.textContent = 'updated content'

// // create element div
// const newItemBtn = document.createElement('button')
// newItemBtn.classList.add('bg-green')
// newItemBtn.textContent = 'Done'

// newItemBtn.addEventListener('click', (e) => {
//     newItemBtn.classList.toggle('disabled')
// })


// container.appendChild(newItemBtn)


// container.remove()