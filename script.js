function calcular()
	{
		let valor = document.getElementById("valor").value;
		let selectDe = document.getElementById("selectDe").value;
		let selectPara = document.getElementById("selectPara").value;

		if (selectDe === 'Mb') {
			if (selectPara === 'Mb') {
				multiplicacao = 1;
			}

			if (selectPara === 'Kb') {
				multiplicacao = 0.001;
			}
		}

		if (selectDe === 'Kb') {
			if (selectPara === 'Mb') {
				multiplicacao = 1000;
			}

			if (selectPara === 'Kb') {
				multiplicacao = 1;
			}
		}

		let resultado = 'Parabéns, conversão realizada: A conversão de ' + selectDe + ' para ' + selectPara + ' é: ' + (multiplicacao * valor) + selectPara;

		document.getElementById("resultado").innerHTML = resultado;
	}