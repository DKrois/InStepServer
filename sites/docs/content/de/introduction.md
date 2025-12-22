# Projektübersicht: InStep

## Einleitung
**InStep** ist ein innovatives Indoor-Navigationssystem, das entwickelt wurde, um Menschen die Orientierung in komplexen Gebäuden wie Schulen, Krankenhäusern, Flughäfen und Einkaufszentren zu erleichtern.
InStep bietet eine benutzerfreundliche Möglichkeit, zwischen Räumen und Stockwerken zu navigieren, um Stress zu reduzieren und Zeit für Besucher, Schüler und Mitarbeiter zu sparen.

## Hauptfunktionen
- **Intuitive Navigation:** Einfache A-nach-B Routenberechnung innerhalb von Gebäuden.
- **Stockwerksübergreifend:** Intelligente Wegführung über verschiedene Etagen via Treppen oder Lifte.
- **Barrierefreiheit:** Spezielle Routenoptionen für Menschen mit eingeschränkter Mobilität (Vermeidung von Treppen).
- **Notfallnavigation:** Anzeige des schnellsten Weges zum nächsten Notausgang im Gefahrenfall.
- **Live-Positionierung:** Echtzeit-Standortbestimmung im Gebäude mittels Smartphonesensoren und kleiner Funksender.
- **Point of Interest (POI) Finder:** Schnelles Finden von Toiletten, Aufzügen, Feuerlöschern oder Ladestationen.
- **Digitale Kartenverwaltung:** Einfache Digitalisierung von Papier-Grundrissen in interaktive Karten.

## Komponenten

### InStep Server (Admin-Interface)
Der Server dient als zentrale Schaltzentrale. Er verwaltet alle Gebäudedaten, regelt die Zugriffsrechte und stellt sicher, dass die Karten immer aktuell sind.  
[Mehr zur Server...](/docs/de/server/overview.md)

### IMD - Indoor Map Digitalizer
Der IMD ist ein spezialisierter Editor für Gebäudeverwalter, um architektonische Grundrisse in interaktive digitale Karten zu verwandeln. Hier werden Räume gezeichnet und Wege definiert.  
[Mehr zum IMD...](/docs/de/imd/overview.md)

### InStep Nutzer-App
Die mobile App ist der Begleiter für den Endnutzer. Sie zeigt die Karte an, sucht nach Zielen und bietet eine visuelle Schritt-für-Schritt-Anleitung, um sicher ans Ziel zu gelangen.  
[Mehr zur App...](/docs/de/app/overview.md)