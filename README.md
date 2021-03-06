AngularJS Tutorial
=================

## Einführung 

AngularJS ist ein populäres **JavaScript-Framework**, welches im Jahr 2009 von **Google Inc.** unter der MIT-Lizenz veröffentlicht und zur kostenlosen Nutzung bereitgestellt wurde. 

Das Framework wird zur Unterstützung der Entwicklung von **dynamischen Webanwendungen**, besonders im Bereich der Single-page Web Applications, eingesetzt. 

Ursprünglich wurde der grundlegende Aufbau einer Webanwendung in AngularJS nach dem Model View Controller (MVC) Prinzip strukturiert. 
Im Laufe der Zeit hat sich auch das Model View ViewModel (MVVM) Konzept durchgesetzt. 
In der AngularJS-Entwicklergemeinde ist man darüber nicht einig. Google selbt empfiehlt sich von der Architektur loszulösen und nennt das Prinzip **Model View Whatever** (MVW).

Durch die Verwendung des AngularJS-Frameworks kann eine Webanwendung lesbarer und übersichtlicher gestaltet werden. Ein weiterer Vorteil ist die Kompatibilität mit anderen JavaScript-Bibliotheken und eine große Entwicklergemeinschaft. Auch kann das Testen und Refactoring mit AngularJS vereinfacht werden. 

## Quick Start

### Grundgerüst

Um eine einfache Webanwendung mit AngularJS zu entwickeln muss die beteiligte HTML-Datei, wie im [Code-Beispiel](https://github.com/dwstoll/dwstoll.github.io/blob/master/Codebeispiele/Grundgeruest.html) verdeutlicht, um **zwei Ausdrücke erweitert** werden. 

Zum einen muss die `angular.js`-Datei in das `<HEAD>-Element` der HTML-Datei eingebunden werden. Dies kann direkt über den Verweis auf die Online-Version von Google per `</script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.min.js">;` durchgeführt werden. Es ist außerdem möglich, die entsprechende Datei von [angularjs.org](angularjs.org) herunterzuladen und lokal einzubinden.

Zum anderen wird der Ausdruck `ng-app` in dem Bereich hinzugefügt, in dem AngularJS verwendet werden soll. 
`ng-app` gehört bei einer reinen AngularJS-Applikation in das `<html>-Tag`. Wenn einzelne Seiten einer bestehenden Applikation erweitert werden sollen kann die Bekanntmachung auch in einem anderen Element erfolgen. Dann wandelt AngularJS nur den ausgewählten Bereich in eine AngularWebanwendung um. `Angular.js` durchsucht den, in der HTML-Seite per `ng-app` definierten Bereich, nach speziellen Tags und Attributen, die zum Framework gehören.

### Zweidimensionale Datenbindung

Im Folgenden wird das Konzept der **zweidimensionalen Datenbindung** anhand von **zwei Beispielen** erklärt. 

Im [ersten Beispiel](http://dwstoll.github.io/Codebeispiele/Daten-Bindung.html) ist ein einfaches `input`-Text-Eingabefeld dargestellt. Wenn ein Benutzer Eingaben in diesem Feld vornimmt, sollen diese Änderungen unmittelbar ohne Neuladen an einer anderen Stelle auf der Webseite angezeigt werden. 

Dieses Vorhaben lässt sich unter anderem auch mit **reinem JavaScript** umsetzen. Dies ist jedoch aufwendig, da hierfür Event-Handler programmiert werden müssen, die auf Änderungen des Eingabefeldes reagieren. Zusätzlich muss sich der Programmierer um die Aktualisierung des DOM-Baumes kümmern.

**Mit AngularJS** ist eine einfachere Umsetzung, wie im [Code-Beispiel](https://github.com/dwstoll/dwstoll.github.io/blob/master/Codebeispiele/Daten-Bindung.html) dargestellt, möglich. Hierzu muss das Eingabefeld um das AngularJS-Attribut `ng-model` und einem entsprechenden Namen erweitert werden. Die Erweiterung des `input`-Feldes sorgt dafür, dass das **Eingabefeld als Model** agiert und automatisch Änderungen an diesem überwacht werden. Eine Ausgabe des aktuellen Inhaltes des Model-Feldes an einer anderen Stelle auf der HTML-Seite erfolgt über den Model-Namen, der in **geschweiften Klammern** geschrieben wird und somit eine `AngularJS-Expression` darstellt. 

AngularJS ermöglicht eine **zweidimensionale Datenbindung**, in dem Änderungen am Model, in diesem Fall am Input-Feld, automatisch an den View, in diesem Beispiel die Expression im `h1-Tag`, weitergeleitet werden. Eine Änderung am `h1-Tag` würde auch im umgekehrten Fall zu einer Aktualisierung des Models führen. Folglich liegt ein **Kreislauf** vor.

Anhand eines **weiteren Beispiels** wird erläutert, wie die zweidimensionale Datenbindung bei komplexeren Vorhaben, bei denen unter anderem **Controller** beteiligt sind, realisiert wird. Im [Beispiel](http://dwstoll.github.io/Codebeispiele/Adressbuch.html) ist wiederum ein Eingabefeld vorhanden. Unter diesem befindet sich eine Liste mit Vor- und Nachnamen und weiteren Details zu verschiedenen Personen. Somit stellt dies eine Art Adressbuch dar. Es soll ermöglicht werden, dass ein Benutzer in das Eingabefeld einen Vor- oder Nachnamen eingeben kann und nur noch die Adressbucheinträge angezeigt werden, die auf die Eingabe zutreffen.

Zunächst wird die JavaScript-Datei [HauptController.JS](https://github.com/dwstoll/dwstoll.github.io/blob/master/Codebeispiele/HauptController.js) angelegt, in dem sich der Code für den Controller und das Model befindet. In AngularJS wird ein **Controller** durch eine **JavaScript-Funktion** definiert. Demzufolge stellt die Funktion `AdressbuchController` den Controller dar. Jeder Controller hat jeweils `$scope` als Funktionsparameter, welcher der Funktion übergeben wird. `$scope` stellt ein **Objekt** dar, welches eine **zweidimensionale Datenbindung** ermöglicht, da auf dieses Objekt neben dem Controller auch der View zugreifen kann. 

Da es im `$scope`-Objekt möglich ist, Variablen abzuspeichern, auf die sowohl der Controller als auch der View zugreifen kann,  werden die Adressbuchdaten, folglich unser **Model**, als Variable des $scope-Objekts, mittels `§scope.benutzer`, definiert. Dabei besteht `$scope.benutzer` aus einem **Array von Objekten**, wobei ein Objekt jeweils eine Person repräsentiert. 

In der [HTML-Datei](https://github.com/dwstoll/dwstoll.github.io/blob/master/Codebeispiele/Adressbuch.html), die nach der späteren Kompilierung durch den Browser dem View entspricht, muss zunächst im Head-Bereich die Datei [HauptController.JS](https://github.com/dwstoll/dwstoll.github.io/blob/master/Codebeispiele/HauptController.js) eingebunden werden.

Zusätzlich muss definiert werden, für welchen Bereich des HTML-Dokuments der erstellte Controller Anwendung finden soll. Dies erfolgt über das AngularJS-Attribut `ng-controller`, das in diesem Fall im `body-Tag` eingebunden wird. Zusätzlich wird das `input`-Eingabefeld wieder, wie im oberen Beispiel, mit dem Attribut `ng-model` und dem Wert `suche` erweitert. 

Anschließend erfolgt mittels den HTML-Tags `ul` und `li` eine Ausgabe der Adressbuchdaten. Beim `li-Tag` kommt das AngularJS-Attribut `ng-repeat` zu tragen, welches einer Schleife ähnelt. Hierbei wird jedes Objekt des im Controller definierten Arrays `$scope.benutzer`  durchlaufen und jeweils der lokalen Variable `person` zugewiesen. Da im `body-Tag` definiert wurde, dass der gesamte Body-Bereich durch den `AdressbuchController` verwaltet wird, erfolgt der **Zugriff** auf `$scope.benutzer` im gesamten Body-Bereich lediglich durch `benutzer`. Auf die einzelnen Attribute des `$scope.benutzer` Arrays, wie Vorname und Name, kann über die lokale Variable `person` mittels Punktnotation zugegriffen werden, wobei dies wiederum als **Expression** in geschweiften Klammern definiert wird. 

Mittels `ng-repeat` und den Expressions werden **alle vorhandenen Adressbuchdaten** ausgegeben. Damit eine Einschränkung durch das Eingabefeld erfolgt, muss das `ng-repeat`-Attribut lediglich um die AngularJS-`Filter`-Anweisung durch Angabe des Eingabefeldes, folglich mittels `filter:suche`, erweitert werden.

Demzufolge erfolgt bei komplexeren Beispielen eine zweidimensionale Datenbindung über das **$scope-Objekt**, das eine automatische Verbindung zwischen **Controller und View** ermöglicht. 

### Dependency Injection
Bei objektorientierter Programmierung ist es häufig anzutreffen, dass Objekte wiederum von anderen Objekten **abhängig** (dependent), daher **dependency**, sind. Dabei gibt es prinzipiell zwei Hauptmöglichkeiten zur Definition von Abhängigkeiten. 

Die **erste Möglichkeit**, die im [Code-Beispiel](https://github.com/dwstoll/dwstoll.github.io/blob/master/Codebeispiele/Adressbuch-ver1.js) minimalistisch skizziert ist, geht von der Tatsache aus, dass ein Adressbuch-Objekt vorliegt und dieses über die Funktion `sucheAdressbuch` verfügt. Da sich die Adressdaten in einer Datenbank befinden, muss auf diese über ein Datenbank-Objekt zugegriffen werden. In diesem Fall wird daher in der Funktion über den `new-Parameter` ein neues Datenbank-Objekt angelegt. Demzufolge erfolgt die Instanziierung eines neuen Objekts und der Aufbau der Abhängigkeit zu diesem Objekt **innerhalb einer Funktion**.

Der **zweite Ansatz**, der auch **Dependency Injection** genannt wird und im [Code-Beispiel](https://github.com/dwstoll/dwstoll.github.io/blob/master/Codebeispiele/Adressbuch-ver2.js) dargestellt ist, verfolgt das Ziel, dass das Datenbank-Objekt der Funktion `sucheAdressbuch` von außen als Parameter übergeben wird und demzufolge eine Instanziierung des neuen Objekts **außerhalb der Funktion** erfolgt. Dieses Verfahren kommt bei AngularJS zum Tragen, was unter anderem bereits bei der `$scope`-Variable zu sehen war. Bei der Definition eines Controllers wird die `$scope-`Variable lediglich als Parameter übergeben und es ist demzufolge keine Instanziierung innerhalb des Controllers erforderlich. Bei Objekten, die Bestandteil vom AngularJS-Framework sind, zum Beispiel `$scope`, erfolgt eine automatische Instanziierung ohne Eingreifen durch den Programmierer. Daher werden beim Aufruf von Funktionen, bei denen standardisierte AngularJS-Objekte als Übergabeparameter definiert sind, die entsprechenden Objekte nicht manuell durch den Programmierer sondern automatisch als Parameter übergeben.  

Bei **eigens definierten Objekten** hingegen kann der Programmierer zentral über sogenannte **Injector-Methoden** definieren, welche anderen Objekte in den Funktionen eines bestimmten Objekts benötigt werden und mit welchen Werten jene instanziiert werden sollen. Wenn dies erfolgt ist, müssen die Objekte beim Funktionsaufruf auch nicht manuell übergeben werden und es wird automatisch auf die Objekte, die in den Injector-Methoden erzeugt wurden, zugegriffen. 

Durch die Verfolgung des Dependency Injection Ansatzes wird eine **bessere Testbarkeit** erreicht, indem die reine Funktionalität von Funktionen, unabhängig von der Instanziierung von anderen Objekten, getestet werden kann, indem den Funktionen Testobjekte übergeben werden.  

### Direktiven

Mit Hilfe von sogenannten Direktiven wird der HTML-Sprachumfang um eine **AngularJS-spezifische Syntax erweitert**.
Eine Direktive ist eine wiederverwendbare Komponente. In ihr ist ein bestimmtes Verhalten oder eine Zustandsänderung eines DOM-Elements implementiert. Innerhalb eines HTML-Dokuments kann eine Direktive einem DOM-Element zugeordnet werden. Die angular.js-Anwendung führt dann das, in der Direktive definierte, Verhalten beziehungsweise die Änderung an diesem Element durch.

AngularJS stellt einige **vordefinierte Direktiven** mit dem Präfix `ng`, wie beispielsweise `ng-app` oder `ng-repeat`, bereits zur Verfügung. Zudem können **individuelle Direktiven** definiert werden. 
Eine Direktive wird mit dem Keyword `directive` erstellt. 

## Nützliche Webseiten

Weitere Informationen zur Entwicklung von Webanwendungen mit Hilfe von AngularJS sind auf der [AngularJS Webseite](https://angularjs.org/) einzusehen.
Die folgenden Seiten können dabei besonders nützlich sein:

- [Ausführliches Tutorial](https://docs.angularjs.org/tutorial)
- [API-Referenz](https://docs.angularjs.org/api)
- [Entwickler Guide](https://docs.angularjs.org/guide)
- [Anwendungen auf Basis von AngularJS](https://builtwith.angularjs.org/)
- [Blog](http://blog.angularjs.org/)
- [FAQ](https://docs.angularjs.org/misc/faq)
- [YouTube](https://www.youtube.com/user/angularjs)


Copyright (c) 2014 Daniel Stoll und Lisa Hanstein

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="http://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

