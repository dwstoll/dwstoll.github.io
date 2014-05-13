AngularJS Tutorial
=================

## Überblick 

AngularJS ist ein populäres Open Source JavaScript-Framework (Programmiersprache = JavaScript und Anwendung in JavaScript), welches im Jahr 2009 von Google Inc. unter der MIT-Lizenz veröffentlicht und zur kostenlosen Nutzung bereitgestellt wurde (aktuelle Version 1.2.16 April 2014)

Das Framework dient der Unterstüztung der Softwareentwicklung von dynamischen Webanwendungen (Clientseitige Applikationen), insbesondere sogeannte Single-page Web Applications (SPA). Damit HTML besser in dynamischen Anwendungen genutzt werden kann (denn gut in statischen Anwendungen, aber schrott in dynamischen).

In Angular werden HTML, CSS und JavaScript nicht wie bei vielen anderen Frameworks gekapselt, sondern um weitere Funktionalitäten erweitert. 

Ursprünglich sieht Angular vor, dass eine Webabpplikation nach dem Model View Controller (MVC) Prinzip implementiert ist. Im Laufe der Zeit etablierte sich auch der Ansatz des Model View View Model (MVVM).
In der AngularJS-Entwicklergemeinde ist man darüber nicht einig. Google selbt empfiehlt sich von der Architektur loszulösen und nennt das Prinzip Model View Whatever (MVW).

Insgesamt kann die Softwareentwicklung von dynamischen Webanwendungen durch den Einsatz von AngularJS stark vereinfacht werden, denn zum einen kann der Umfang des Quellcodes stark reduziert werden. Außerdem wird der Quellcode lesbarer und somit auch verständlicher. Dies fördert die arbeitsteilige Entwicklung beispielsweise auch von Entwicklern und Designern. 
Außerdem fördert AngularJS eine leichte Testbarkeit und ein einfaches Refactoring.
Ein weiterer Vorteil ist, dass HTML, CSS und JavaScript nicht, wie in vielen anderen Framworks gekapselt wird, sonder nur um Funktionalitäten erweitert wird. So wird garantiert, dass weitere Bibliotheken eingebunden werden können, und ANgularJS auch in bereits bestehende Anwendungen integriert werden kann.
Da AngularJS ein populäres Framwork ist, sind außerdem viele Dokumentationen vorhanden und außerdem ist in Fehlerfällen eine große Entwicklergemeinsschaft vorhanden.

Einziger Nachteil bei komplexeren Anwendungen kann ein Performanceverlust auftreten.
Zudem erfordert die Anwendung von AngularJS auch eine Einarbeitung.

Einfach über die AngularJS Website oder über GitHub das ganze downloaded und dann kann es schon beginnen. da angular nur den mit ng-app markierten Bereich verarbeitet, lässt es sich gut mit anderen Bibliotheken verbinden und auch in ältere Webanwendungen einbauen. 

## Quick Start

Hier dann das Grundgerüst vorstellen -> Welche Änderungen müssen im HTML-Dokument gemacht werden?

This repository includes a `boilerplate.html` as a starting point, with all the extensions included. Just [download it](https://github.com/imakewebthings/deck.js/archive/latest.zip), open `boilerplate.html`, and start editing your slides.

## Documentation

Check out the [documentation page](http://imakewebthings.github.com/deck.js/docs) for more information on the methods, events, and options available in core and all the included extensions.  A sample standard slide deck is included in the package under the `introduction` folder.  You can also [view that sample deck](http://imakewebthings.github.com/deck.js/introduction) online to play with the available style and transition themes.

## Extensions, Themes, and Related Projects

Take a look at [the wiki](https://github.com/imakewebthings/deck.js/wiki) for lists of extensions, themes, and other related goodies.  If you have a publicly available project of your own, feel free to add to the list.

## Dependencies (included in this repository)

- [jQuery](http://jquery.com)
- [Modernizr](http://modernizr.com)

## Tests & Support

Unit tests are written with [Jasmine](http://pivotal.github.com/jasmine/) and [jasmine-jquery](https://github.com/velesin/jasmine-jquery). You can [run them here](http://imakewebthings.github.com/deck.js/test).

deck.js has been tested with jQuery 1.6+ and works in IE7+, Chrome, FF, Safari, and Opera. The more capable browsers receive greater enhancements, but a basic cutaway slideshow will work for all browsers listed above. Please don't give your presentations in IE6.

For any questions or general discussion about deck.js please direct your attention to the [mailing list](http://groups.google.com/group/deckjs) (uses Google groups.)  If you would like to report a bug, please see the [issues page](https://github.com/imakewebthings/deck.js/issues).

## Printing

Core includes stripped down black and white print styles for the standard slide template that is suitable for handouts.

## Awesome Contributors

- [jbuck](https://github.com/jbuck)
- [cykod](https://github.com/cykod)
- [dougireton](https://github.com/dougireton)
- [awirick](https://github.com/awirick)
- Daniel Knittl-Frank
- [alexch](https://github.com/alexch)
- [twitwi](https://github.com/twitwi)

If you would like to contribute a patch to deck.js please do as much as you can of the following:

- Add or amend Jasmine tests.
- Add inline documentation.
- If the standard snippet of an extension changes, please change it in both the introduction deck and the snippet html in the extension folder.
- If the API changes, it would be awesome to receive a parallel pull request to the gh-pages branch which updates the public-facing documentation.

## License

Copyright (c) 2011-2014 Caleb Troughton

Licensed under the [MIT license](https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt)

## Donations

[![Gittip donate
button](http://img.shields.io/gittip/imakewebthings.png)](https://www.gittip.com/imakewebthings/ "Donate weekly to this project using Gittip")
