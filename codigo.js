function Init() { //Função inicial

    function Clubes(NomeClube, AnoAparecimento, Claque, Titulos){
		this.NomeClube = NomeClube;
		this.AnoAparecimento  = AnoAparecimento;
		this.Claque = Claque;
		this.Titulos = Titulos;
		this.informacoes = function() {
			document.body.innerHTML += "NomeClube: ".bold() + this.NomeClube + "<br>";
			document.body.innerHTML += "Conteúdo: ".bold() + this.AnoAparecimento + "<br>";
			document.body.innerHTML += "Claque: ".bold() + this.Claque + "<br>";
			document.body.innerHTML += "Titulos: ".bold() + this.Titulos + "<br><br>";
		}
	}
      
   
    var Benfica = new Clubes("Benfica", "1904", "NoNameBoys", "36");
	Benfica.informacoes();
	
	
	var Sporting = new Clubes("Sporting", "1906", "JuveLeo" , "18");
	Sporting.informacoes();
	
	
	var Porto = new Clubes("Porto", "1983", "Super Dragões", "27");
	Porto.informacoes();

}
