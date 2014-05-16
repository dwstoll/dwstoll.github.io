AngularJS Tutorial
=================

## Einführung 

AngularJS ist ein populäres JavaScript-Framework, welches im Jahr 2009 von Google Inc. unter der MIT-Lizenz veröffentlicht und zur kostenlosen Nutzung bereitgestellt wurde. 

Das Framework wird zur Unterstützung der Entwicklung von dynamischen Webanwendungen, besonders im Bereich der Single-page Web Applications, eingesetzt. 

Nach AngularJS wird der grundlegende Aufbau einer Webanwendung nach dem Model View Controller (MVC) Prinzip strukturiert. Für den Datenaustausch zwischen View und Controller wird zusätzlich ein Model View ViewModel Konzept (MVVM) implementiert. Google selbst nennt diese Architektur Model View Whatever (MVW).

## Quick Start

### Grundgerüst

Um eine einfache Webanwendung mit AngularJS zu entwickeln muss eine beteiligte HTML-Datei, wie im [Grundgerüst Code-Beispiel](https://github.com/dwstoll/dwstoll.github.io/blob/master/Codebeispiele/Grundgeruest.html) verdeutlicht, um zwei Ausdrücke erweitert werden. 

Zum einen muss die `angular.js`-Datei in das HTML-Dokument eingebunden werden. 
Man kann entweder die Online-Version verwenden, die Google über ihr CDN verteilt oder die Datei von [angularjs.org](angularjs.org) herunterladen und lokal einbinden. 

Zum anderen wird der Ausdruck `ng-app` in dem Bereich hinzugefügt, in dem AngularJS verwendet werden soll. 
`Ng-app` gehört bei einer reinen AngularJS-Applikation in das `<html>-Tag`. Wenn einzelne Seiten einer bestehenden Applikation erweitert werden sollen kann die Bekanntmachung auch in einem anderen Element erfolgen. Dann wandelt AngularJS nur den ausgewählten Bereich in eine AngularWebanwendung um. `angular.js` durchsucht den, in der HTML-Seite per `ng-app` definierten Bereich, nach speziellen Tags und Attributen, die zum Framework gehören.

### Zweidimensionale Datenbindung

### Dependency Injection

### Direktiven

## Nützliche Webseiten

Weitere Informationen zur Entwicklung von Webanwendungen mit Hilfe von AngularJS sind auf der [AngularJS Webseite](https://angularjs.org/) einzusehen.
Die folgenden Seiten können besonders nützlich sein:

- [Ausführliches Tutorial](https://docs.angularjs.org/tutorial)
- [API-Referenz](https://docs.angularjs.org/api)
- [Entwickler Guide](https://docs.angularjs.org/guide)
- [Anwendungen auf Basis von AngularJS](https://builtwith.angularjs.org/)
- [Blog](http://blog.angularjs.org/)
- [FAQ](https://docs.angularjs.org/misc/faq)
- [YouTube](https://www.youtube.com/user/angularjs)


Copyright (c) 2014 Daniel Stoll und Lisa Hanstein

