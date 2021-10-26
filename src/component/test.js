const cart = {};

function AddtoCart(productid, description, quantity, price) {
  if (cart[productid]) {
    cart[productid].qty += quantity;
  } else {
    cart[productid] = {
      id: productid,
      desc: description,
      qty: quantity,
      price: price
    };
  }
  
  viewCart(cart);
}

function viewCart() {
  let tbody = document.getElementById('cartsBody');
  tbody.innerHTML = '';
  Object.values(cart).forEach(content => {
    tbody.innerHTML += `<td>${ content.id }</td>
                      <td>${ content.desc }</td>
                      <td>${ content.qty }</td>
                      <td>${ content.price }</td>
                      <td>${ content.qty * content.price }</td>`;

  });
}
<script>

<input type="button" value="Laptop" onclick="AddtoCart('132','Macbook Pro', 1, 100000)" />
<input type="button" value="Phone" onclick="AddtoCart('456','Iphone 5S', 2, 20000)" />
<input type="button" value="Camera" onclick="AddtoCart('789','Nikon 3D00', 1, 40000)" />

<table border="1|1" id="cartsTable">
  <thead>
    <tr>
      <th>Product ID</th>
      <th>Product Description</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody id="cartsBody">
  </tbody>
</table>
</script>