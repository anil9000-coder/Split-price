// Select the form and expense list elements
const form = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

// Handle form submission to add new expenses
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const participants = document.getElementById('participants').value;

    // Create a new list item for the expense
    const listItem = document.createElement('li');
    listItem.className = 'expense-item';
    listItem.innerHTML = `
        <span>${description} - $${amount} - [${participants}]</span>
        <button class="delete-btn">Delete</button>
    `;

    // Add the new expense to the list
    expenseList.appendChild(listItem);

    // Add event listener to the delete button
    listItem.querySelector('.delete-btn').addEventListener('click', () => {
        listItem.remove();
    });

    // Reset the form fields
    form.reset();
});
