//HOMEPAGE

//IMPORTING
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

	public result: String = "result"

	calc(){
		//FIELDS VALIDATION
		if( this.priceAlcohol && this.priceGas ){			
			var pAlcohol = parseFloat(this.priceAlcohol)
			var pGas = parseFloat(this.priceGas)

			var res = pAlcohol / pGas
			if( res >= 0.7){
				this.result = "You better use gas!!!"
			}else{
				this.result = "You better use alcohol"
			}
		}else{
			this.result = "Please fill in all fields correctly!"
		}
	}
}
