// an empty array for storing purchased items
let purchased =[]


let main = document.querySelector('main')

// getting items and setting them into the array
let items = JSON.parse(localStorage.getItem('items'))


main.innerHTML=items.map(function(item, index){
    return `
    <div>
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p>${item.price}</p>
        <button value ='${index}' data-add>Add to Cart</button>
    </div>
    `
}).join('')


function add(index){
    // adding items to the new array using the index of the item
    purchased.push(items[index])

    // save this to local storage
    localStorage.setItem('purchased', JSON.stringify(purchased))
}
main.addEventListener('click', function(){
    // checks for event
    if(event.target.hasAttribute('data-add')){
        // alert('button was pressed')
        add(event.target.value)
    }
})


// preparing seacrh
// let a = items.filter(item=>{
//     // is the input from search bar
//     return item.name == 'Nike Shoe' 
// })  // try out the join methods



