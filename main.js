let submit = document.getElementById('submit');


submit.addEventListener('click', () => {
	document.getElementById('forma').style.display = 'none';
	let address = '?';
	
	 let inputi = document.getElementsByTagName('input');
	 for (var i = 0; i < inputi.length; i++) {
	  	address += inputi[i].name + '='+ inputi[i].value ;
	  	address += i==inputi.length-1 ? '' :  '&' ;
	 }
	 	// treba napraviti validaciju forme (radio => pol, checkbox => predmeti)
	console.log(address);

	const newAdress = address.substring(1);
	const array1 = newAdress.split('&');
// [ime=fdge,prezime=ege,pol=wdighei]

// [{name:ime,value:fdge},{}]
	const array2 = array1.map((stringNeki)=>{
		return {
			name: stringNeki.split('=')[0],
			//[ime,fdge]
			value: stringNeki.split('=')[1]
		}
	});
	const divBigWrapper = document.createElement('div');
	array2.map((objekat) =>  {
		const divWrapper = document.createElement('div');
		const div1 = document.createElement('div');
		const div2 = document.createElement('div');
		
		div1.innerHTML = objekat.name;
		div2.innerHTML = objekat.value;


		div1.className = 'in';
		div2.className = 'in';
		divWrapper.className = 'wrapper';

		divWrapper.appendChild(div1);
		divWrapper.appendChild(div2);

		divBigWrapper.appendChild(divWrapper);
		return null;
	});
	document.getElementsByTagName('body')[0].appendChild(divBigWrapper);
});

