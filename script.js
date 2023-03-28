fetch("card.json")
	.then(function(response){
	   return response.json();
	})
	.then(function(card){
	   let placeholder = document.querySelector("#data-output");
	   let out = "";
	   for(let card of cards){
	      out += `
	         <tr>
	            
	            <td>${card.name}</td>
	            <td>${card.pitch}</td>
	            <td>${card.set_id}</td>
	            <td>${card.unique_id}</td>
	         </tr>
	      `;
	   }
	 
	   placeholder.innerHTML = out;
	});