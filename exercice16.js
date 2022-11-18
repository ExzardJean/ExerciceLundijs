let alfabe="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let text=">3A >0A <1U <10K >1A <9J <0S <16U";
          //">3A >0A <1U <10K >1A <9J <0S <16U"
		text=text.split(' ');
		let resultat=[];

		for (let i in text){
			if(text[i][0]===">"){
				if (text [i].length===4){
					resultat.push(alfabe[alfabe.indexOf(text[i][3])+parseInt(text[i].slice(1,3))]);
				}else{
					resultat.push(alfabe[alfabe.indexOf(text[i][2])+parseInt(text[i][1])]);
				}
			}else{
				if (text [i].length===4){
					resultat.push(alfabe[alfabe.indexOf(text[i][3])-parseInt(text[i].slice(1,3))]);
				}else{
					resultat.push(alfabe[alfabe.indexOf(text[i][2])-parseInt(text[i][1])]);	
				}


			}
			
		}
		console.log(resultat.join(''));