function displayOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const ordersTableBody = document.querySelector('#ordersTable tbody');

    // Clear the existing rows in the table body
    ordersTableBody.innerHTML = '';

    // Iterate over the orders array and create a new row for each order
    for (const order of orders) {
      const row = document.createElement('tr');

      const orderIdCell = document.createElement('td');
      orderIdCell.textContent = order.id;
      row.appendChild(orderIdCell);

      const customerNameCell = document.createElement('td');
      customerNameCell.textContent = order.time;
      row.appendChild(customerNameCell);

      const totalPriceCell = document.createElement('td');
      totalPriceCell.textContent = order.totalPrice;
      row.appendChild(totalPriceCell);

      ordersTableBody.appendChild(row);
    }
  }

  // Call the displayOrders function when the page loads
  window.onload = displayOrders;