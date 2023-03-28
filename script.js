fetch("card.json")
	.then(function(response){
	   return response.json();
	})
	.then(function(products){
	   let placeholder = document.querySelector("#data-output");
	   let out = "";
	   for(let product of products){
	      out += `
	         <tr>
	            <td> <img src='${product.image}'> </td>
	            <td>${card.name}</td>
	            <td>${card.pitch}</td>
	            <td>${card.set_id}</td>
	            <td>${card.unique_id}</td>
	         </tr>
	      `;
	   }
	 
	   placeholder.innerHTML = out;
	});