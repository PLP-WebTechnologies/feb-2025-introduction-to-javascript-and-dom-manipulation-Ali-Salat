

// Add an element dynamically:
document.getElementById('addElementButton').addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a paragraph is a result dynamic content by javascript.';
    document.getElementById('container').appendChild(newElement);
});

// Change content dynamically:
document.getElementById('changeTextButton').addEventListener('click', () => {
    document.getElementById('text').textContent = 'The text has dynamically changed, Wow!!';
});


    const ulList = document.getElementById("list");

    function generateList(){
        const input = document.getElementById("arrayInput").value.trim();
        ulList.innerHTML = "";


        if (input === ""){
            alert("Please do something and enter some items");
            return;
        }

        const items = input.split(",").map(item => item.trim());
        
        items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ulList.appendChild(li);
        })


        document.getElementById("arrayInput").value = "";
    }


    function removeFirst(){
        ulList.firstChild?.remove();
    }

    function removeLast(){
        ulList.lastChild?.remove();
    }
    