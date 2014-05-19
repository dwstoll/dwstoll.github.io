// Funktion ist Bestandteil eines Adressbuch-Objekts

function sucheAdressbuch(benutzer) {	
	// neues Datenbank-Objekt wird innerhalb der Funktion erzeugt
	var db = new Database(...);
	
	db.suche(benutzer);
}
