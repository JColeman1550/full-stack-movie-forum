var edit = document.getElementsByClassName("fa-edit");
var trash = document.getElementsByClassName("fa-trash-o");
// var rating = document.getElementsByClassName("fa-star");
 /////////////////////////////////////////////////////////////////////////////////////////////

 Array.from(edit).forEach(function (element) {
  element.addEventListener('click', function () {
    const old = this.getAttribute('data-id'); 
    const newItem = prompt('Edit:', old); 

    if (newItem && newItem !== old) {
      fetch('/messages', {
        method: 'PUT', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          old: old,
          newItem: newItem 
        })
      })
        .then(function (response) {
          if (response.ok) {
            window.location.reload();
          } else {
            console.error('Failed to edit');
          }
        })
        .catch(function (error) {
          console.error('Error:', error); 
        });
    }
  });
});

 /////////////////////////////////////////////////////////////////////////////////////////////     


// Array.from(rating).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText  
//     const rating = parseFloat(this.parentNode.parentNode.childNodes[7].innerText);
//     fetch('/rating', {
//       method: 'PUT',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'rating':rating // send to server
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });
 /////////////////////////////////////////////////////////////////////////////////////////////

 
 Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
  
     const name = this.getAttribute('data-id')
    

    // Send DELETE request to the server
    fetch('/messages', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name
      })
    })
    .then(response => {
      if (response.ok) {
        window.location.reload(); // Reload the page to reflect the deletion
      } else {
        console.error('Failed to delete the message');
      }
    })
    .catch(error => console.error('Error:', error));
  });
});
