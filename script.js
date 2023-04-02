fetch("products.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
         <tr>
            <td>${product.pitch}</td>
            <td>${product.name}</td>
            <td>${product.printings.rarity}</td>
            <td>${product.cost}</td>
            <td>${product.power}</td>
            <td>${product.defense}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});
