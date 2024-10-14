 const form = document.getElementById("form");
  const list = document.getElementById("list")
  
  const values = JSON.parse(localStorage.getItem("myList")) || [];
  values.forEach(item =>{
list.innerHTML += ` <li>${item}</li>`
  })
  
  
  
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    
  const inputValue = document.getElementById("input").value;
  
  if (inputValue) {
    values.push(inputValue);
    localStorage.setItem("myList", JSON.stringify(values));
    
    list.innerHTML += ` <li>${inputValue}</li>`
  }
  values.push(inputValue)
//  console.log(values)

   e.target.reset();
  
  })