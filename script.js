function calcular()
	{

		let valor = document.getElementById("valor").value;
		let selectDe = document.getElementById("selectDe").value;
		let selectPara = document.getElementById("selectPara").value;
		let conversao = 1024;
		let padraoConversao = 1;
		
		


		if (selectDe === 'Byte') {
			if (selectPara === 'Byte') {
				multiplicacao = padraoConversao;
			}

			if (selectPara === 'Kb') {
				multiplicacao = valor/conversao;
			}

			if (selectPara === 'Mb') {
				multiplicacao = (valor/conversao)/conversao;
			}

			if (selectPara === 'Gb') {
				multiplicacao = ((valor/conversao)/conversao)/conversao;
			}
			if (selectPara === 'Tb') {
				multiplicacao = (((valor/conversao)/conversao)/conversao)/conversao;
			}
		}

		if (selectDe === 'Kb') {
			if (selectPara === 'Byte') {
				multiplicacao = valor*conversao;
			}

			if (selectPara === 'Kb') {
				multiplicacao = padraoConversao;
			}

			if (selectPara === 'Mb') {
				multiplicacao = valor/conversao;
			}

			if (selectPara === 'Gb') {
				multiplicacao = (valor/conversao)/conversao;
			}

			if (selectPara === 'Tb') {
				multiplicacao = ((valor/conversao)/conversao)/conversao;
			}
		}

		if (selectDe === 'Mb') {
			if (selectPara === 'Byte') {
				multiplicacao = (valor*conversao)*conversao;
			}

			if (selectPara === 'Kb') {
				multiplicacao = valor*conversao;
			}

			if (selectPara === 'Mb') {
				multiplicacao = padraoConversao;
			}

			if (selectPara === 'Gb') {
				multiplicacao = valor/conversao;
			}

			if (selectPara === 'Tb') {
				multiplicacao = (valor/conversao)/conversao;
			}
		}

		if (selectDe === 'Gb') {
			if (selectPara === 'Byte') {
				multiplicacao = ((valor*conversao)*conversao)*conversao;
			}

			if (selectPara === 'Kb') {
				multiplicacao = (valor*conversao)*conversao;
			}

			if (selectPara === 'Mb') {
				multiplicacao = valor*conversao;
			}

			if (selectPara === 'Gb') {
				multiplicacao = padraoConversao;
			}

			if (selectPara === 'Tb') {
				multiplicacao = valor/conversao;
			}
		}

		if (selectDe === 'Tb') {
			if (selectPara === 'Byte') {
				multiplicacao = (((valor*conversao)*conversao)*conversao)*conversao;
			}

			if (selectPara === 'Kb') {
				multiplicacao = ((valor*conversao)*conversao)*conversao;
			}

			if (selectPara === 'Mb') {
				multiplicacao = (valor*conversao)*conversao;
			}

			if (selectPara === 'Gb') {
				multiplicacao = valor*conversao;
			}

			if (selectPara === 'Tb') {
				multiplicacao = padraoConversao;
			}
		}


		let resultado = 'Parabéns, conversão realizada: A conversão de ' + selectDe + ' para ' + selectPara + ' é: ' + (multiplicacao * valor) +' ' + selectPara;

		document.getElementById("resultado").innerHTML = resultado;
	}