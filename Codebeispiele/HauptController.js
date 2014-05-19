// Normale JavaScript-Funktion stellt Controller dar. Dieser hat immer als Übergabeparameter das Objekt $scope
// $scope ermöglicht eine Verbindung zum View 

function AdressbuchController($scope) {	
	
	// $scope.benutzer stellt das Model dar, auf welches der View durch die $scope-Variable zugreifen kann
	// $scope.benutzer ist ein Array von Objekten. 
	$scope.benutzer = [
	{"vorname": "Max", "name": "Meier"},
	{"vorname": "Florian", "name": "Wiegand"},
	{"vorname": "Kai", "name": "Lehner"},
	{"vorname": "Markus", "name": "Siebert"},
	{"vorname": "Fritz", "name": "Meier"},
	{"vorname": "Lisa", "name": "Reichert"},
	{"vorname": "Nadine", "name": "Herbold"},
	{"vorname": "Anne", "name": "Reichert"},
	{"vorname": "Alexander", "name": "Priebe"},
	{"vorname": "Andreas", "name": "Fix"},
	{"vorname": "Christian", "name": "Decker"},
	{"vorname": "Florian", "name": "Lechner"},
	{"vorname": "Leon", "name": "Saam"},
	{"vorname": "Julian", "name": "Meier"},
	{"vorname": "Julia", "name": "Siebig"},
	{"vorname": "Miriam", "name": "Franzke"},
	{"vorname": "Tanja", "name": "Marx"}
	
	];	
}
