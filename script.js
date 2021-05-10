let addButton = document.getElementById('addButton');

addButton.addEventListener('click', function() {
    let inputField = document.getElementById('inputField').value;

    if (inputField === "") {
        alert('Input field is required.');
    }

    else {
        let li = document.createElement('li');
        li.innerText = inputField;
        document.getElementById('inputField').value = '';

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash">';
        deleteButton.setAttribute('id', 'deleteButton')

        let completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check">';
        completedButton.setAttribute('id', 'completedButton')

        li.appendChild(completedButton);
        li.appendChild(deleteButton);

        let ul = document.querySelector('ul');
        ul.appendChild(li);

        deleteButton.addEventListener('click', function() {
            ul.removeChild(li);
        })

        completedButton.addEventListener('click', function() {
            li.style.textDecoration = "line-through";
        })
    }
})


        
