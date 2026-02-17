const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/3d-Co_xE0gz.js","assets/floor3D-DixRsG1v.js"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Ri="modulepreload",qi=function(t){return"/"+t},or={},tt=function(o,n,s){let r=Promise.resolve();if(n&&n.length>0){let d=function(m){return Promise.all(m.map(b=>Promise.resolve(b).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=d(n.map(m=>{if(m=qi(m),m in or)return;or[m]=!0;const b=m.endsWith(".css"),h=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${h}`))return;const v=document.createElement("link");if(v.rel=b?"stylesheet":Ri,b||(v.as="script"),v.crossOrigin="",v.href=m,c&&v.setAttribute("nonce",c),document.head.appendChild(v),b)return new Promise((S,g)=>{v.addEventListener("load",S),v.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${m}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return r.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return o().catch(i)})};let Wr="en";function p(t,o){return{de:t,en:o}}const Ue={file:p("Datei","File"),output:p("Ausgabe","Output"),overview:p("Übersicht","Overview"),darkMode:p("Dunkles Thema","Dark Theme"),lightMode:p("Helles Thema","Light Theme"),backToApp:p("Zurück zur Anwendung","Back to Application"),filePanelTitle:p("Datei","File"),newProject:p("Neues Projekt","New Project"),loadProject:p("Projekt laden","Load Project"),saveProject:p("Projekt speichern","Save Project"),loadFromServer:p("Vom Server laden","Load from Server"),saveToServer:p("Zum Server speichern","Save to Server"),newProjectOption:p("(Neues Projekt)","(New Project)"),newVersionOption:p("(Neue Version)","(New Version)"),introduction:p("Einleitung","Introduction"),serverProject:p("Projekt","Project"),serverVersion:p("Version","Version"),refresh:p("Aktualisieren","Refresh"),load:p("Laden","Load"),latestVersion:p("Neueste Version","Latest Version"),save:p("Speichern","Save"),search:p("Suche","Search"),searchPlaceholder:p("Projekt suchen...","Search project..."),projectDetails:p("Projektdetails","Project Details"),detailId:p("ID:","ID:"),detailName:p("Name:","Name:"),detailLatest:p("Neueste Version:","Latest Version:"),detailFloorplans:p("Grundrisse:","Floorplans:"),detailCreated:p("Erstellt:","Created:"),detailUpdated:p("Aktualisiert:","Updated:"),confirmOverwriteVersion:p('Alte Version {1} von "{0}" überschreiben?','Overwrite old version {1} of "{0}"?'),add:p("Hinzufügen","Add"),deleteAction:p("Löschen","Delete"),confirmDeleteProject:p('Projekt "{0}" (# {1}) wirklich löschen? Dies entfernt alle Versionen.','Really delete project "{0}" (# {1})? This will remove all versions.'),confirmDeleteVersion:p('Version {1} von Projekt "{0}" (# {2}) löschen?','Delete version {1} of project "{0}" (# {2})?'),infoNewProject:p("Neues Projekt wird beim Speichern erstellt.","A new project will be created on save."),infoNewVersion:p("Neue Version wird beim Speichern erstellt.","A new version will be created on save."),saveTargetVersion:p('Speichern in Version {1} von "{0}".','Save into version {1} of "{0}".'),alertSelectVersionFirst:p("Bitte zuerst eine Version auswählen.","Please select a version first."),outputPanelTitle:p("Ausgabe","Output"),exportGeoJson:p("GeoJSON exportieren","Export GeoJSON"),showLiveCode:p("Live Code anzeigen","Show Live Code"),hideCode:p("Code ausblenden","Hide Code"),overviewPanelTitle:p("Projektübersicht","Project Overview"),unnamedProject:p("Unbenanntes Projekt","Unnamed Project"),stat_project:p("Projekt","Project"),stat_floors:p("Etagen","Floors"),stat_areas:p("Flächen","Areas"),stat_points:p("Punkte","Points"),overviewBeacons:p("Beacons","Beacons"),sponsoredBy:p("Gesponsert von","Sponsored by"),sponsoredByMinew:p("Gesponsert von MINEW","Sponsored by MINEW"),supportedByPalfinger:p("Unterstützt von PALFINGER","Supported by PALFINGER"),sponsorsButtonTitle:p("Sponsoren","Sponsors"),imprint:p("Impressum","Legal Notice"),contact:p("Kontakt","Contact"),privacy:p("Datenschutz","Privacy Policy"),project:p("Projekt","Project"),projectName:p("Projektname","Project Name"),enterProjectName:p("Projektname eingeben...","Enter project name..."),edit:p("Bearbeiten","Edit"),undo:p("Rückgängig","Undo"),redo:p("Wiederherstellen","Redo"),floors:p("Etagen","Floors"),currentFloor:p("Aktuelle Etage","Current Floor"),newFloor:p("Neue Etage","New Floor"),floorplan:p("Grundriss...","Floorplan..."),prompt_newFloorName:p("Name der neuen Etage:","Name of the new floor:"),renameFloor:p("Etage umbenennen","Rename Floor"),prompt_renameFloor:p('Neuen Namen für die Etage "{0}" eingeben:','Enter new name for floor "{0}":'),defaultFloorName:p("Standard-Etage","Default Floor"),tools:p("Werkzeuge","Tools"),pan:p("Bewegen","Pan"),select:p("Auswählen","Select"),moveElement:p("Verschieben","Move Element"),merge:p("Zusammenfügen","Merge"),scissors:p("Schere","Scissors"),delete:p("Löschen","Delete"),areas:p("Flächen","Areas"),rectangle:p("Viereck","Rectangle"),square:p("Quadrat","Square"),polygon:p("Polygon","Polygon"),circle:p("Kreis","Circle"),linesAndPoints:p("Linien & Punkte","Lines & Points"),line:p("Linie","Line"),door:p("Tür","Door"),arc:p("Bogen","Arc"),point:p("Punkt","Point"),area:p("Fläche","Area"),saveAndClose:p("Änderungen übernehmen & schließen","Save & Close"),calibrateScale:p("Kalibrieren","Calibrate"),calibratePrompt:p("Kalibrierung: Wählen Sie eine bestehende Kante oder zeichnen Sie eine Referenzlinie und geben Sie die reale Länge in Metern ein.","Calibration: Select an existing edge or draw a reference line, then enter the real length in meters."),calibratePromptShort:p("Kalibrierung: Geben Sie die reale Länge in Metern ein.","Calibration: enter the real length in meters."),elementType:p("Element-Typ","Element Type"),manageTypes:p("Typen verwalten...","Manage Types..."),newAreaType:p("Neue Fläche","New Area Type"),newPointType:p("Neuer Punkt","New Point Type"),doorLabel:p("Tür","Door"),lineLabel:p("Linie","Line"),arcLabel:p("Bogen","Arc"),defaultRoomLabel:p("Beispielraum","Sample Room"),customIndicatorSuffix:p(" (Benutzerdefiniert)"," (Custom)"),alert_selectAtLeastTwo:p("Bitte mindestens zwei Elemente auswählen.","Please select at least two elements."),alert_notEnoughPoints:p("Nicht genug Punkte für eine Fläche.","Not enough points for an area."),fontSettings:p("Schrift-Einstellungen","Font Settings"),fontSize:p("Schriftgröße","Font Size"),fontColor:p("Schriftfarbe","Font Color"),fontSizeDesc:p("Bestimmt die Schriftgröße für Beschriftungen dieses Typs.","Controls the label font size for this type."),fontColorDesc:p("Legt die Textfarbe der Beschriftung fest.","Defines the text color of the label."),optgroupAreas:p("Flächen","Areas"),optgroupPointElements:p("Punkt-Elemente","Point Elements"),optgroupConnectors:p("Konnektoren","Konnektoren"),properties:p("Eigenschaften","Properties"),beacon_parameters:p("Beacon Parameter","Beacon Parameters"),label:p("Bezeichnung","Label"),enterElementLabel:p("Bezeichnung des Elements...","Enter element label..."),noElementSelected:p("Kein Element ausgewählt.","No element selected."),description:p("Beschreibung","Description"),occupancyTimes:p("Besetzungszeiten","Occupancy Times"),isEmptyArea:p("Leere Fläche (Lichthof/Stiegenhaus)","Empty Area (Courtyard/Stairwell)"),occupancyBtn:p("Besetzungszeiten...","Occupancy Times..."),openingHoursBtn:p("Öffnungszeiten...","Opening Hours..."),viewAndLayers:p("Ansicht & Layer","View & Layers"),grid:p("Raster","Grid"),layers:p("Layer","Layers"),showGrid:p("Raster anzeigen","Show Grid"),snapToGrid:p("Am Raster ausrichten","Snap to Grid"),size:p("Größe:","Size:"),metersPerCell:p("Meter/Kasten:","Meters per cell:"),layersAreas:p("Flächen","Areas"),layersPaths:p("Wege/Linien","Paths/Lines"),layersPoints:p("Punktelemente","Point Elements"),preview3D:p("3D-Vorschau","3D Preview"),dimensions:p("Maße","Dimensions"),showEdgeLengths:p("Kantenlängen anzeigen","Show edge lengths"),showLineLengths:p("Linienlängen anzeigen","Show line lengths"),showCircleRadius:p("Radius anzeigen (Kreise)","Show radius (circles)"),showBeaconRangeRing:p("Signal‑Simulation anzeigen","Show signal simulation"),analysis:p("Analyse","Analysis"),simulateSignal:p("Signal simulieren","Simulate signal"),simulationOff:p("Simulation aus","Stop simulation"),welcomeTitle:p("Willkommen beim IMD Editor!","Welcome to IMD Editor!"),welcomeText:p("Dies ist ein Werkzeug zur Digitalisierung von Indoor-Karten.","This is a tool for digitizing indoor maps."),basicsTitle:p("Grundlagen der Bedienung:","Basic Operation:"),basicsTools:p("Werkzeuge: Wählen Sie links ein Werkzeug (z.B. Fläche, Punkt), um Elemente auf der Karte zu erstellen.","Tools: Select a tool on the left (e.g., Area, Point) to create elements on the map."),basicsZoom:p("Zoomen: Benutzen Sie das Mausrad, um in die Karte hinein- und herausuzoomen.","Zooming: Use the mouse wheel to zoom in and out of the map."),basicsPan:p("Verschieben der Ansicht: Halten Sie die mittlere Maustaste gedrückt und bewegen Sie die Maus, um die Kartenansicht zu verschieben.","Panning the view: Hold down the middle mouse button and move the mouse to pan the map view."),basicsMove:p("Elemente verschieben: Wählen Sie ein Element aus und ziehen Sie es mit der Maus an eine neue Position.","Move elements: Select an element and drag it with the mouse to a new position."),basicsSave:p('Speichern: Vergessen Sie nicht, Ihr Projekt über das "Datei"-Menü zu speichern.',`Saving: Don't forget to save your project via the "File" menu.`),intro_welcomeTitle:p("Willkommen im Editor!","Welcome to the Editor!"),intro_startText:p("Starten Sie, indem Sie Ihrem Projekt oben links einen Namen geben und rechts unter „Etagen“ einen Grundriss laden.","Start by giving your project a name in the top left and load a floor plan on the right under “Floors.”"),intro_sectionTitle:p("So bedienen Sie die Karte:","Map Controls"),intro_zoom:p("Zoomen: Drehen Sie das Mausrad.","Zoom: Scroll the mouse wheel."),intro_pan:p("Verschieben: Halten Sie das Mausrad gedrückt und bewegen Sie die Maus.","Pan: Hold down the mouse wheel and move the mouse."),intro_preview3d:p("3D-Vorschau: Nutzen Sie den Button unten links, um Ihr Modell räumlich zu sehen.","3D Preview: Use the button in the bottom left to view your model in 3D."),intro_draw_title:p("Zeichnen & Bearbeiten:","Drawing & Editing:"),intro_analysis_title:p("Analyse","Analysis"),intro_finishShape:p("Form beenden: Ein Doppelklick schließt eine gezeichnete Fläche ab.","Finish shape: Double-click to close a drawn area."),intro_escape:p("Abbrechen (ESC): Drücken Sie die ESC-Taste, um ein Werkzeug wegzulegen oder die Auswahl aufzuheben.","Cancel (ESC): Press ESC to put away a tool or clear the selection."),intro_merge:p("Klicke mindestens zwei Flächen auf derselben Etage an und drücke Enter, um sie zu einer neuen Fläche zusammenzufassen.","Click at least two areas on the same floor and press Enter to merge them into a new area."),intro_calibrate:p("Kalibrierung: Wählen Sie eine bestehende Kante oder zeichnen Sie eine Referenzlinie und geben Sie die reale Länge in Metern ein.","Calibration: Select an existing edge or draw a reference line, then enter the real length in meters."),intro_shortcuts_title:p("Wichtige Tastenkürzel:","Key shortcuts:"),intro_undo_redo:p("Strg + Z / Y: Fehler rückgängig machen / wiederherstellen.","Ctrl + Z / Y: Undo / Redo actions."),intro_copy_paste:p("Strg + C / V: Elemente kopieren und einfügen.","Ctrl + C / V: Copy and paste elements."),intro_paste_active_floor:p("Einfügen platziert Kopien auf der aktiven Etage.","Pasting places copies on the active floor."),intro_select_all:p("Strg + A: Alle Elemente der aktiven Etage auswählen.","Ctrl + A: Select all elements on the active floor."),intro_delete:p("Entf: Das ausgewählte Element löschen.","Delete: Remove the selected element."),intro_shift_zoom:p("Shift (Umschalt): Gedrückt halten, um die Lupe zu aktivieren.","Shift: Hold to activate the magnifier."),intro_alt_click:p("Alt + Klick: Fügt einer bestehenden Linie einen neuen Punkt hinzu.","Alt + Click: Use Alt + Click to add a new point to an existing line."),intro_full_content:p(`<h2>Interface Einstellungen</h2>
<p>Befindet sich in der oberen rechten Ecke der Navigationsleiste:</p>
<ul>
<li><strong>Sprache (DE/EN)</strong>: Wechseln Sie zwischen Deutsch und Englisch für die gesamte Oberfläche.</li>
<li><strong>Farbmodus (Theme)</strong>: Wechseln Sie zwischen hellem Modus (Standard) und dunklem Modus für bessere Sichtbarkeit bei schlechten Lichtverhältnissen.</li>
</ul>

<h3>Datei (Menü)</h3>
<p>Befindet sich in der oberen Navigationsleiste und verwaltet Funktionen auf Projektebene.</p>
<ul>
<li><strong>Neues Projekt</strong>: Erstellt ein neues, leeres Projekt. <em>Warnung: Nicht gespeicherte Änderungen gehen verloren.</em></li>
<li><strong>Projekt laden</strong>: Öffnet einen lokalen Dateidialog, um eine bestehende .geojson oder .json Projektdatei zu laden.</li>
<li><strong>Projekt speichern</strong>: Lädt das aktuelle Projekt als .json Datei auf Ihren Computer herunter.</li>
<li><strong>Vom Server laden</strong>: Öffnet einen Dialog, um Projekte zu durchsuchen und zu laden, die auf dem verbundenen Backend-Server gespeichert sind.</li>
<li><strong>Zum Server speichern</strong>: Speichert den aktuellen Projektstatus direkt auf dem Server.</li>
<li><strong>Einleitung</strong>: Öffnet ein Hilfe-/Einführungsfenster mit grundlegenden Tipps zur Bedienung.</li>
<li><strong>Sponsoren</strong>: Zeigt Informationen über die Projektsponsoren (z.B. MINEW).</li>
</ul>

<h3>Ausgabe (Menü)</h3>
<ul>
<li><strong>GeoJSON exportieren</strong>: Lädt <em>nur</em> die GeoJSON-Datenstruktur Ihrer Karte herunter, nützlich für die Verwendung der Karte in anderen Anwendungen.</li>
<li><strong>Live-Code anzeigen</strong>: Öffnet ein Seitenfenster, das den Echtzeit-GeoJSON-Code Ihrer aktuellen Karte anzeigt. Ideal zum Debuggen oder Kopieren von Snippets.</li>
</ul>

<h3>Übersicht (Menü)</h3>
<ul>
<li><strong>Projektstatistiken</strong>: Zeigt Statistiken über Ihr Projekt an (z.B. Anzahl der Räume, Punkte, Gesamtfläche).</li>
<li><strong>Etagenliste</strong>: Zeigt eine schnelle Liste aller im Projekt definierten Etagen.</li>
</ul>

<h3>Projekt</h3>
<ul>
<li><strong>Projektname</strong>: Ein Texteingabefeld, um Ihrem Projekt einen Namen zu geben. Dieser Name wird beim Speichern von Dateien verwendet.</li>
</ul>

<h3>Bearbeiten</h3>
<ul>
<li><strong>Rückgängig</strong>: Macht Ihre letzte Aktion (Erstellen, Verschieben, Löschen usw.) rückgängig.</li>
<li><strong>Wiederherstellen</strong>: Stellt die Aktion wieder her, die Sie gerade rückgängig gemacht haben.</li>
</ul>

<h3>Etagen</h3>
<ul>
<li><strong>Etagenauswahl</strong>: Ein Dropdown-Menü zum Wechseln zwischen verschiedenen Etagen/Ebenen Ihres Gebäudes.</li>
<li><strong>Neue Etage</strong>: Fügt dem Projekt eine neue, leere Etage hinzu.</li>
<li><strong>Etage umbenennen</strong>: Ermöglicht es Ihnen, den Namen der aktuell aktiven Etage zu ändern.</li>
<li><strong>Grundriss...</strong>: Ermöglicht das Hochladen eines Hintergrundbildes (.jpg, .png) oder PDFs zum Nachzeichnen. Dies ist die Basis für Ihre Digitalisierung.</li>
</ul>

<h3>Werkzeuge</h3>
<ul>
<li><strong>Bewegen (Hand-Symbol)</strong>: Bewegt die Ansicht der Leinwand, ohne etwas auszuwählen oder zu bearbeiten.</li>
<li><strong>Auswählen (Cursor-Symbol)</strong>: Das Standardwerkzeug. Klicken zum Auswählen von Elementen, Ziehen zum Auswählen mehrerer.</li>
<li><strong>Zusammenfügen</strong>: Kombiniert mehrere ausgewählte Flächen oder Linien zu einer komplexen Form. <em>Trick: Wählen Sie zwei überlappende Polygone aus und klicken Sie auf Zusammenfügen, um einen einzelnen Raum zu erstellen.</em></li>
<li><strong>Element verschieben</strong>: Spezielles Werkzeug, um ein ganzes Element (Geometrie + Eigenschaften) einfach zu verschieben.</li>
<li><strong>Löschen</strong>: Entfernt das/die aktuell ausgewählte(n) Element(e).</li>
<li><strong>Kopieren</strong>: Erstellt ein Duplikat des/der ausgewählten Elements/Elemente.</li>
<li><strong>Barrierefreiheit umschalten</strong>: Markiert den ausgewählten Raum/Bereich als "Barrierefrei" (z.B. rollstuhlgerecht).</li>
<li><strong>Screenshot</strong>: Macht einen Schnappschuss der aktuellen Ansicht und lädt ihn als Bild herunter.</li>
</ul>

<h3>Flächen (Zeichnen)</h3>
<ul>
<li><strong>Rechteck</strong>: Zeichnet eine rechteckige Fläche. Klicken und ziehen zum Definieren.</li>
<li><strong>Quadrat</strong>: Zeichnet ein perfektes Quadrat.</li>
<li><strong>Polygon</strong>: Zeichnet eine benutzerdefinierte Form. Klicken, um Punkte hinzuzufügen, klicken Sie erneut auf den ersten Punkt, um die Form zu schließen.</li>
<li><strong>Kreis</strong>: Zeichnet eine kreisförmige Fläche. Klicken Sie auf die Mitte, ziehen Sie, um den Radius festzulegen.</li>
</ul>

<h3>Linien und Punkte</h3>
<ul>
<li><strong>Linie</strong>: Zeichnet einen einfachen Pfad oder eine Wand. Klicken Sie von Punkt zu Punkt.</li>
<li><strong>Bogen</strong>: Zeichnet eine gebogene Linie mit 3 Punkten (Start, Mitte/Kurve, Ende).</li>
<li><strong>Punkt</strong>: Platziert einen spezifischen Punkt von Interesse (POI).</li>
</ul>

<h3>Elementtypen & Eigenschaften</h3>
<p>Wenn Sie ein Element auswählen, können Sie dessen Typ und Eigenschaften definieren.</p>
<ul>
<li><strong>Elementtyp-Auswahl</strong>: Wählen Sie, was das Element darstellt.
<ul>
<li><strong>Flächen</strong>: Raum, Büro, Toilette, Gang, Laden, Bibliothek, Lager, Klassenzimmer.</li>
<li><strong>Punkte</strong>: Eingang, Feuerlöscher, Treppe, Aufzug, Beacon, Erste Hilfe, Notausgang.</li>
</ul>
</li>
<li><strong>Typen verwalten</strong>: Öffnet den <strong>Typ-Manager</strong>, in dem Sie benutzerdefinierte Typen mit spezifischen Farben, Symbolen und Beschriftungen erstellen können.</li>
<li><strong>Eigenschaften-Panel</strong>:
<ul>
<li><strong>Bezeichnung</strong>: Name des Raums/Objekts.</li>
<li><strong>Raumnummer</strong>: Spezifische Nummer.</li>
<li><strong>Beschreibung</strong>: Zusätzliche Textinformationen.</li>
<li><strong>Öffnungszeiten</strong>: Definieren Sie, wann dieser Bereich geöffnet ist.</li>
<li><strong>Belegung</strong>: Definieren Sie typische Belegungs-/Nutzungszeiten.</li>
</ul>
</li>
</ul>

<h3>Beacons</h3>
<p>Spezielle Eigenschaften erscheinen, wenn ein <strong>Punkt</strong> vom Typ <strong>Beacon</strong> ausgewählt ist:</p>
<ul>
<li><strong>Seriennummer</strong>: Die Seriennummer des physischen Beacons.</li>
<li><strong>Installationsdatum</strong>: Wann er installiert wurde.</li>
<li><strong>Reichweite</strong>: Die effektive Reichweite des Beacons (in Metern).</li>
<li><strong>Aktivierungszeit</strong>: Start- und Enddatum/-zeit, wann der Beacon aktiv ist.</li>
<li><strong>Notizen</strong>: Technische oder allgemeine Notizen (unterstützt Deutsch/Englisch).</li>
<li><strong>Signal‑Simulation</strong>: Der grüne Reichweitenring kann separat mit „Signal‑Simulation anzeigen“ an/aus geschaltet werden.</li>
</ul>

<h3>Ansicht & Layer</h3>
<ul>
<li><strong>Raster</strong>:
<ul>
<li><strong>Raster anzeigen</strong>: Schaltet das Hintergrundraster ein/aus.</li>
<li><strong>Am Raster ausrichten</strong>: Schaltet das magnetische Einrasten an Rasterlinien ein (erleichtert die Ausrichtung).</li>
<li><strong>Rastergröße</strong>: Passen Sie die Größe der Rasterzellen an (Standard ist ca. 40px).</li>
<li><strong>Kalibrieren</strong>: Klicken Sie auf zwei Punkte auf der Karte und geben Sie die reale Entfernung (in Metern) ein, um den Maßstab festzulegen.</li>
</ul>
</li>
<li><strong>Layer</strong>:
<ul>
<li><strong>Flächen</strong>: Sichtbarkeit von Räumen/Polygonen umschalten.</li>
<li><strong>Wege</strong>: Sichtbarkeit von Linien/Wänden umschalten.</li>
<li><strong>Punkte</strong>: Sichtbarkeit von Symbolen/POIs umschalten.</li>
</ul>
</li>
<li><strong>Maße</strong>:
<ul>
<li><strong>Kantenlängen</strong>: Länge von Wänden anzeigen.</li>
<li><strong>Linienlängen</strong>: Länge von Linien anzeigen.</li>
<li><strong>Kreisradius</strong>: Radius von Kreisen anzeigen.</li>
</ul>
</li>
<li><strong>3D-Vorschau</strong>: Öffnet eine 3D-Ansicht Ihres Grundrisses. Wände werden basierend auf Ihren 2D-Formen extrudiert.</li>
<li><strong>Vollbild</strong>: (In der 3D-Ansicht) Die Ansicht nimmt das gesamte Fenster ein, um eine bessere Immersion zu ermöglichen.</li>
</ul>

<h3>Tastenkürzel & Tricks</h3>
<ul>
<li><strong>Strg + Z</strong>: Letzte Aktion rückgängig machen.</li>
<li><strong>Strg + Y</strong>: Letzte Aktion wiederherstellen.</li>
<li><strong>Strg + C</strong>: Ausgewählte(s) Element(e) kopieren.</li>
<li><strong>Strg + V</strong>: Kopierte(s) Element(e) einfügen (wird leicht versetzt vom Original eingefügt).</li>
<li><strong>Strg + A</strong>: Alle Elemente auf der aktuellen Etage auswählen.</li>
<li><strong>Entf</strong>: Das aktuell ausgewählte Element löschen.</li>
<li><strong>Esc</strong>: Aktuelle Aktion abbrechen oder Auswahl aufheben.</li>
<li><strong>Alt + Klick (auf Linie)</strong>: Fügt einer bestehenden Linie oder Polygonkante einen neuen Punkt/Knoten hinzu.</li>
<li><strong>Shift (Halten)</strong>: Aktiviert das <strong>Lupe</strong>-Werkzeug für präzises Arbeiten.</li>
<li><strong>Doppelklick (Eckbox)</strong>: Doppelklicken Sie auf das kleine Feld in der unteren rechten Ecke (wo sich die Bildlaufleisten treffen), um die Ansicht zurückzusetzen und die Karte an den Bildschirm anzupassen.</li>
</ul>`,`<h2>Interface Settings</h2>
<p>Located in the top-right corner of the navigation bar:</p>
<ul>
<li><strong>Language (DE/EN)</strong>: Toggle between German and English for the entire interface.</li>
<li><strong>Color Mode (Theme)</strong>: Switch between Light Mode (default) and Dark Mode for better visibility in low-light environments.</li>
</ul>

<h3>File (Menu)</h3>
<p>Located in the top navigation bar, this menu handles project-level operations.</p>
<ul>
<li><strong>New Project</strong>: Creates a fresh, empty project. <em>Warning: Unsaved changes will be lost.</em></li>
<li><strong>Load Project</strong>: Opens a local file dialog to load an existing .geojson or .json project file.</li>
<li><strong>Save Project</strong>: Downloads the current project as a .json file to your computer.</li>
<li><strong>Load from Server</strong>: Opens a dialog to browse and load projects stored on the connected backend server.</li>
<li><strong>Save to Server</strong>: Saves the current project state directly to the server.</li>
<li><strong>Introduction</strong>: Opens a help/introductory modal with basic usage tips.</li>
<li><strong>Sponsors</strong>: Displays information about project sponsors (e.g., MINEW).</li>
</ul>

<h3>Output (Menu)</h3>
<ul>
<li><strong>Export GeoJSON</strong>: Downloads <em>only</em> the GeoJSON data structure of your map, useful for using the map in other applications.</li>
<li><strong>Show Live Code</strong>: Opens a side panel displaying the real-time GeoJSON code of your current map. Great for debugging or copying snippets.</li>
</ul>

<h3>Overview (Menu)</h3>
<ul>
<li><strong>Project Stats</strong>: Displays statistics about your project (e.g., number of rooms, points, total area).</li>
<li><strong>Floor List</strong>: Shows a quick list of all floors defined in the project.</li>
</ul>

<h3>Project</h3>
<ul>
<li><strong>Project Name</strong>: A text input field to name your project. This name is used when saving files.</li>
</ul>

<h3>Edit</h3>
<ul>
<li><strong>Undo</strong>: Reverts your last action (creation, move, delete, etc.).</li>
<li><strong>Redo</strong>: Restores the action you just undid.</li>
</ul>

<h3>Floors</h3>
<ul>
<li><strong>Floor Selector</strong>: A dropdown menu to switch between different floors/levels of your building.</li>
<li><strong>New Floor</strong>: Adds a new, empty floor to the project.</li>
<li><strong>Rename Floor</strong>: Allows you to change the name of the currently active floor.</li>
<li><strong>Floorplan...</strong>: Allows you to upload a background image (.jpg, .png) or PDF to trace over. This is the base for your digitization.</li>
</ul>

<h3>Tools</h3>
<ul>
<li><strong>Pan (Hand Icon)</strong>: Moves the canvas view without selecting or editing anything.</li>
<li><strong>Select (Cursor Icon)</strong>: The default tool. Click to select elements, drag to select multiple.</li>
<li><strong>Merge</strong>: Combines multiple selected areas or lines into one complex shape. <em>Trick: Select two overlapping polygons and click Merge to create a single room.</em></li>
<li><strong>Move Element</strong>: Specialized tool to move an entire element (geometry + properties) easily.</li>
<li><strong>Delete</strong>: Removes the currently selected element(s).</li>
<li><strong>Copy</strong>: Creates a duplicate of the selected element(s).</li>
<li><strong>Toggle Accessible</strong>: Marks the selected room/area as "Accessible" (e.g., wheelchair friendly).</li>
<li><strong>Screenshot</strong>: Takes a snapshot of the current canvas view and downloads it as an image.</li>
</ul>

<h3>Areas (Drawing)</h3>
<ul>
<li><strong>Rectangle</strong>: Draws a rectangular area. Click and drag to define.</li>
<li><strong>Square</strong>: Draws a perfect square.</li>
<li><strong>Polygon</strong>: Draws a custom shape. Click to add points, click the first point again to close the shape.</li>
<li><strong>Circle</strong>: Draws a circular area. Click center, drag to set radius.</li>
</ul>

<h3>Lines and Points</h3>
<ul>
<li><strong>Line</strong>: Draws a simple path or wall. Click point-to-point.</li>
<li><strong>Arc</strong>: Draws a curved line using 3 points (Start, Middle/Curve, End).</li>
<li><strong>Point</strong>: Places a specific Point of Interest (POI).</li>
</ul>

<h3>Element Types & Properties</h3>
<p>When you select an element, you can define its type and properties.</p>
<ul>
<li><strong>Element Type Selector</strong>: Choose what the element represents.
<ul>
<li><strong>Areas</strong>: Room (Raum), Office (Büro), Toilet, Corridor (Gang), Store, Library, Storage, Classroom.</li>
<li><strong>Points</strong>: Entrance, Extinguisher, Stairs, Elevator, Beacon, First Aid, Emergency Exit.</li>
</ul>
</li>
<li><strong>Manage Types</strong>: Opens the <strong>Type Manager</strong> where you can create custom types with specific colors, icons, and labels.</li>
<li><strong>Properties Panel</strong>:
<ul>
<li><strong>Label</strong>: Name of the room/object.</li>
<li><strong>Room Number</strong>: Specific number.</li>
<li><strong>Description</strong>: Additional text info.</li>
<li><strong>Opening Hours</strong>: Define when this area is open.</li>
<li><strong>Occupancy</strong>: Define typical occupancy/usage times.</li>
</ul>
</li>
</ul>

<h3>Beacons</h3>
<p>Special properties appear when a <strong>Point</strong> of type <strong>Beacon</strong> is selected:</p>
<ul>
<li><strong>Serial</strong>: The serial number of the physical beacon.</li>
<li><strong>Installation Date</strong>: When it was installed.</li>
<li><strong>Range</strong>: The effective range of the beacon (in meters).</li>
<li><strong>Activation Time</strong>: Start and End dates/times for when the beacon is active.</li>
<li><strong>Notes</strong>: Technical or general notes (supports German/English).</li>
<li><strong>Signal Simulation</strong>: The green range ring can be toggled via “Show signal simulation”.</li>
</ul>

<h3>View & Layers</h3>
<ul>
<li><strong>Grid</strong>:
<ul>
<li><strong>Show Grid</strong>: Toggles the background grid.</li>
<li><strong>Snap to Grid</strong>: Toggles magnetic snapping to grid lines (makes alignment easier).</li>
<li><strong>Grid Size</strong>: Adjust the size of grid cells (default is roughly 40px).</li>
<li><strong>Calibrate</strong>: Click two points on the map and enter the real-world distance (in meters) to set the scale.</li>
</ul>
</li>
<li><strong>Layers</strong>:
<ul>
<li><strong>Areas</strong>: Toggle visibility of rooms/polygons.</li>
<li><strong>Paths</strong>: Toggle visibility of lines/walls.</li>
<li><strong>Points</strong>: Toggle visibility of icons/POIs.</li>
</ul>
</li>
<li><strong>Dimensions</strong>:
<ul>
<li><strong>Area Edges</strong>: Show lengths of walls.</li>
<li><strong>Path Lengths</strong>: Show length of lines.</li>
<li><strong>Circle Radius</strong>: Show radius of circles.</li>
</ul>
</li>
<li><strong>3D Preview</strong>: Opens a 3D view of your floorplan. Walls are extruded based on your 2D shapes.</li>
<li><strong>Fullscreen</strong>: (In 3D View) The view takes up the entire window for better immersion.</li>
</ul>

<h3>Keyboard Shortcuts & Tricks</h3>
<ul>
<li><strong>Ctrl + Z</strong>: Undo last action.</li>
<li><strong>Ctrl + Y</strong>: Redo last action.</li>
<li><strong>Ctrl + C</strong>: Copy selected element(s).</li>
<li><strong>Ctrl + V</strong>: Paste copied element(s) (pastes slightly offset from original).</li>
<li><strong>Ctrl + A</strong>: Select All elements on the current floor.</li>
<li><strong>Delete / Entf</strong>: Delete the currently selected element(s).</li>
<li><strong>Esc</strong>: Cancel current action or deselect all.</li>
<li><strong>Alt + Click (on line)</strong>: Adds a new point/node to an existing line or polygon edge.</li>
<li><strong>Shift (Hold)</strong>: Activates the <strong>Magnifier (Lupe)</strong> tool for precision work.</li>
<li><strong>Double Click (Corner Box)</strong>: Double-click the small box in the bottom-right corner (where scrollbars meet) to reset the view and fit the map to the screen.</li>
</ul>`),intro_tip_title:p("Tipp","Tip"),intro_save_reminder:p("Vergessen Sie nicht, Ihr Projekt regelmäßig über das Menü „Datei“ zu speichern!","Remember to save your project regularly via the “File” menu!"),mergeHintShort:p("Klicke mindestens zwei Flächen auf derselben Etage an und drücke Enter, um sie zu einer neuen Fläche zusammenzufassen.","Click at least two areas on the same floor and press Enter to merge them into a new area."),alert_selectTwo:p("Bitte genau zwei Elemente auswählen.","Please select exactly two elements."),alert_sameFloor:p("Beide Elemente müssen auf derselben Etage liegen.","Both elements must be on the same floor."),alert_noOverlap:p("Kein Schnittbereich gefunden.","No overlap found."),manageTypesTitle:p("Element-Typen verwalten","Manage Element Types"),types:p("Typen","Types"),newType:p("+ Neuer Typ","+ New Type"),typeName:p("Typ-Name","Type Name"),exampleMarketing:p("z.B. Marketing","e.g. Marketing"),textStyle:p("Schrift-Stil","Font Style"),areaStyle:p("Flächen-Stil","Area Style"),pointStyle:p("Punkt-Stil","Point Style"),fillColor:p("Füllfarbe","Fill Color"),fillColorDesc:p("Farbe der Innenfläche des Elements (z.B. Raum).","Color of the element's inner area (e.g., room)."),fillOpacity:p("Deckkraft der Füllung","Fill Opacity"),fillOpacityDesc:p("Transparenz der Füllfarbe (0.0 = transparent, 1.0 = opak).","Transparency of the fill color (0.0 = transparent, 1.0 = opaque)."),strokeColor:p("Rahmenfarbe","Border Color"),strokeColorDesc:p("Farbe des Rahmens/der Umrandung des Elements.","Color of the element's border/outline."),currentFillColor:p("Aktuelle Füllfarbe","Current Fill Color"),currentStrokeColor:p("Aktuelle Rahmenfarbe","Current Border Color"),iconSelection:p("Icon Auswahl","Icon Selection"),iconSelectionDesc:p("Wählen Sie ein Symbol für diesen Punkt-Typ.","Select an icon for this point type."),iconColor:p("Icon-Farbe","Icon Color"),iconColorDesc:p("Farbe des Icons auf der Karte.","Color of the icon on the map."),deleteType:p("Typ löschen","Delete Type"),typeManagerPlaceholder:p("Wählen Sie links einen Typ aus oder erstellen Sie einen neuen.","Select a type on the left or create a new one."),saveChangesAndClose:p("Änderungen übernehmen & schließen","Apply Changes & Close"),typePreview:p("Vorschau","Preview"),previewAreaLabel:p("Beispielraum","Sample Room"),previewPointLabel:p("Beispielpunkt","Sample Point"),areasGroup:p("Flächen","Areas"),pointsConnectorsGroup:p("Punkte & Konnektoren","Points & Connectors"),createNewElementType:p("Neuen Element-Typ erstellen","Create New Element Type"),chooseBaseType:p("Wählen Sie den Basis-Typ aus:","Choose the base type:"),choiceArea:p("Fläche","Area"),choicePoint:p("Punkt","Point"),cancel:p("Abbrechen","Cancel"),ok:p("OK","OK"),rename:p("Umbenennen...","Rename..."),copy:p("Kopieren","Copy"),changeType:p("Typ ändern","Change Type"),ctxAddOverlapPoint:p("Punkt im Schnittbereich setzen","Place point at overlap"),toggleAccessibility:p("Barrierefreiheit umschalten","Toggle Accessibility"),accessible:p("Barrierefrei","Accessible"),roomContentsTitle:p("Rauminhalt","Contents"),roomContentsPlaceholder:p("Eintrag hinzufügen...","Add entry..."),roomContentsAdd:p("Hinzufügen","Add"),accessibleRoomsHeader:p("Barrierefreie Räume","Accessible Rooms"),openingHours:p("Öffnungszeiten","Opening Hours"),openingHoursEdit:p("Öffnungszeiten bearbeiten...","Edit Opening Hours..."),openingHoursTitle:p("Öffnungszeiten","Opening Hours"),openingHoursWeekly:p("Wochentage","Weekdays"),openingHoursExceptions:p("Ausnahmen","Exceptions"),openingHoursRanges:p("Zeitspanne","Date Range"),roomNumber:p("Flächen-/Raumnummer","Area/Room Number"),designation:p("Bezeichnung (Art)","Designation (Type)"),occupancyTitle:p("Besetzungszeiten","Staffing Times"),occupancyEdit:p("Besetzungszeiten bearbeiten...","Edit Staffing Times..."),occupancyAdd:p("Hinzufügen","Add"),occupancyNotePlaceholder:p("Notiz...","Note..."),editRoomContents:p("Rauminhalt bearbeiten...","Edit Contents..."),occupancyType:p("Art","Type"),occupancyTypeWeekday:p("Wochentag","Weekday"),occupancyTypeDate:p("Kalendertag","Calendar Date"),occupancyTypeRange:p("Zeitraum","Date Range"),occupancyTypeLabel:p("Art","Type"),occupancyWeekdayLabel:p("Wochentag","Weekday"),occupancyDateLabel:p("Kalendertag","Calendar Date"),occupancyStartLabel:p("von","from"),occupancyEndLabel:p("bis","to"),occupancyRangeStartLabel:p("Zeitraum von","Range start"),occupancyRangeEndLabel:p("Zeitraum bis","Range end"),occupancyNoteLabel:p("Notiz","Note"),beacon_activation_label:p("Aktivierungszeit","Activation Time"),activationStartDate:p("Startdatum","Start Date"),activationEndDate:p("Enddatum","End Date"),activationStartTime:p("von","from"),activationEndTime:p("bis","to"),weekdayMon:p("Mo","Mon"),weekdayTue:p("Di","Tue"),weekdayWed:p("Mi","Wed"),weekdayThu:p("Do","Thu"),weekdayFri:p("Fr","Fri"),weekdaySat:p("Sa","Sat"),weekdaySun:p("So","Sun"),fromTime:p("von","from"),toTime:p("bis","to"),addRule:p("Regel hinzufügen","Add Rule"),addException:p("Ausnahme hinzufügen","Add Exception"),noAccessibleRooms:p("Keine barrierefreien Räume","No accessible rooms"),addRange:p("Zeitraum hinzufügen","Add Date Range"),calendarToday:p("Heute","Today"),calendarClear:p("Leeren","Clear"),alert_deleteTypeConfirm:p('Möchten Sie den Typ "{0}" wirklich löschen?','Do you really want to delete the type "{0}"?'),alert_renameSelectOne:p("Bitte wählen Sie genau ein Element zum Umbenennen aus.","Please select exactly one element to rename."),prompt_renameElement:p("Neuen Namen eingeben:","Enter new name:"),alert_noActiveFloor:p("Bitte zuerst eine Etage auswählen oder erstellen.","Please select or create a floor first."),alert_floorNameExists:p("Dieser Etagenname ist bereits vergeben.","This floor name already exists."),alert_newProjectConfirm:p("Möchten Sie wirklich ein neues Projekt starten? Nicht gespeicherte Änderungen gehen verloren.","Do you really want to start a new project? Unsaved changes will be lost."),confirm_deleteElement_single:p("Möchten Sie das ausgewählte Element wirklich löschen?","Do you really want to delete the selected element?"),confirm_deleteElement_multi:p("Möchten Sie die {0} ausgewählten Elemente wirklich löschen?","Do you really want to delete the {0} selected elements?"),area_raum_label:p("Raum","Room"),area_buero_label:p("Büro","Office"),area_toiletten_label:p("Toiletten","Restrooms"),area_gang_label:p("Gang","Corridor"),area_lager_label:p("Lager","Storage"),point_eingang_label:p("Eingang","Entrance"),point_feuerloescher_label:p("Feuerlöscher","Fire Extinguisher"),point_treppe_label:p("Treppe","Stairs"),point_aufzug_label:p("Aufzug","Elevator"),point_beacon_label:p("Beacon","Beacon"),point_erstehilfe_label:p("Erste Hilfe","First Aid"),point_notausgang_label:p("Notausgang","Emergency Exit"),beacon_uuid_label:p("Beacon UUID","Beacon UUID"),beacon_serial_label:p("Gerät-ID","Device ID"),beacon_major_label:p("Beacon Major","Beacon Major"),beacon_minor_label:p("Beacon Minor","Beacon Minor"),beacon_installation_label:p("Installationsdatum","Installation Date"),beacon_range_label:p("Reichweite (m)","Range (m)"),beacon_number_label:p("Nummer","Number"),beacon_note_de_label:p("Notiz","Note"),beacon_note_en_label:p("Notiz (EN)","Note (EN)"),threeD_fullscreen_title:p("3D-Ansicht","3D View"),threeD_minimize:p("Minimieren","Minimize"),threeD_toggle_fullscreen:p("Vollbild umschalten","Toggle Fullscreen"),screenshot:p("Screenshot","Screenshot"),pdf_convert:p("Konvertiere PDF, dies kann einen Moment dauern...","Converting PDF, this may take a moment..."),image_load:p("Lade Bild...","Loading image...")};Ue.properties_label_desc=p("Anzeigename des Elements, wird in der Karte gezeigt.","Display name of the element, shown on the map.");Ue.beacon_serial_desc=p("Eindeutige Geräte-ID des Beacons.","Unique device ID of the beacon.");Ue.beacon_number_desc=p("Interne Beacon-Nummer zur Zuordnung.","Internal beacon number for mapping.");Ue.beacon_installation_desc=p("Datum der Installation.","Installation date.");Ue.beacon_range_desc=p("Geplante Signalreichweite in Metern für die Heatmap.","Planned signal range in meters for the heatmap.");Ue.beacon_note_de_desc=p("Freitextnotiz in Deutsch.","Free-form note in German.");function Vi(t){Wr=t}function a(t,o=Wr,...n){const s=Ue[t];if(!s)return console.warn(`Missing translation key: ${t}`),t;let r=s[o]||s.en||t;return n.forEach((i,l)=>{r=r.replace(new RegExp(`\\{${l}\\}`,"g"),String(i))}),r}const Be={raum:{fill:"rgba(53, 138, 216, 0.4)",stroke:"#5e5bb1"},buero:{fill:"rgba(141, 35, 166, 0.3)",stroke:"#54176e"},toiletten:{fill:"rgba(236, 240, 241, 0.5)",stroke:"#c0392b"},gang:{fill:"rgba(246, 235, 252, 0.2)",stroke:"#bdc3c7"},lager:{fill:"rgba(255, 255, 255, 0.3)",stroke:"#7f8c8d"},default:{fill:"rgba(189, 195, 199, 0.3)",stroke:"#95a5a6"}},te="#358ad8",un={eingang:"M12 3L4 9v12h5v-7h6v7h5V9l-8-6zm-2 14H8v-5h2v5zm4 0h-2v-5h2v5z",feuerloescher:"M9 8H15V20H9Z M10 6H14V8H10Z M15 10L19 11L15 12Z M11 4H14V6H11Z",treppe:"M6 18H18V20H6Z M10 14H18V16H10Z M14 10H18V12H14Z",aufzug:"M5 4H19V20H5Z M11.5 4H12.5V20H11.5Z M8 9L12 5L16 9Z M8 15L12 19L16 15Z",beacon:"M10.5 3 l6 4.5 -6 4.5 6 4.5 -6 4.5 V3 M17.25 9.75 c1.5 .75 1.5 .75 1.5 2.25 M17.25 14.25 c1.5 .75 1.5 .75 1.5 2.25",erstehilfe:"M10 5H14V10H19V14H14V19H10V14H5V10H10Z",notausgang:"M3 4H10V20H3Z M11 12H21V13H11Z M17 9L21 12L17 15Z",default:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"},Fn={info:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",warning:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z","meeting-point":"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",coffee:"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm-2 5h-2V5h2v3zM4 19h16v2H4z",printer:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM18 3H6v4h12V3z",restroom:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"};function Ce(){const t=new Set;return e.project.features.forEach(o=>t.add(o.properties.floor)),e.project.floorplanImages&&Object.keys(e.project.floorplanImages).forEach(o=>t.add(o)),Array.from(t).sort((o,n)=>o.localeCompare(n,void 0,{numeric:!0}))}function pe(){const t={},o={raum:a("area_raum_label"),buero:a("area_buero_label"),toiletten:a("area_toiletten_label"),gang:a("area_gang_label"),lager:a("area_lager_label")};for(const r in Be)o[r]&&(t[r]={label:o[r],baseType:"area",fill:Be[r].fill,stroke:Be[r].stroke,isDefault:!0});const n={eingang:a("point_eingang_label"),feuerloescher:a("point_feuerloescher_label"),treppe:a("point_treppe_label"),aufzug:a("point_aufzug_label"),beacon:a("point_beacon_label"),erstehilfe:a("point_erstehilfe_label"),notausgang:a("point_notausgang_label")};for(const r in un)n[r]&&(t[r]={label:n[r],baseType:"point",icon:un[r],iconColor:"#34495e",isDefault:!0});const s=e.project.properties.elementTypeStyles;if(s)for(const r in s)t[r]={...t[r],...s[r],isDefault:!1};return t}function le(){const t=Ce(),o=e.activeFloorId,n=document.getElementById("floor-select");if(!n)return;if(n.innerHTML="",t.length===0){const r=document.createElement("option");r.textContent=a("currentFloor"),n.appendChild(r),e.activeFloorId=null}else t.forEach(r=>{const i=document.createElement("option");i.value=r,i.textContent=r,n.appendChild(i)}),o&&t.includes(o)?n.value=o:(e.activeFloorId=t[0],n.value=t[0]);const s=document.getElementById("floor-preview");s&&e.activeFloorId&&e.cachedFloorPlanImages[e.activeFloorId]?(s.src=e.cachedFloorPlanImages[e.activeFloorId].src,s.style.display="block"):s&&(s.style.display="none")}function Ze(){const t=document.getElementById("element-type-select");if(!t)return;const o=pe(),n=t.value,s=[],r=[],i=[];for(const h in o){const v=o[h];v.baseType==="area"?s.push({key:h,style:v}):v.baseType==="point"&&(["treppe","aufzug"].includes(h)?i.push({key:h,style:v}):r.push({key:h,style:v}))}const l=(h,v)=>h.style.label.localeCompare(v.style.label);s.sort(l),r.sort(l),i.sort(l);const c=document.createElement("optgroup");c.label=a("optgroupAreas");const d=document.createElement("optgroup");d.label=a("optgroupPointElements");const m=document.createElement("optgroup");m.label=a("optgroupConnectors");const b=(h,v)=>{v.forEach(({key:S,style:g})=>{const E=document.createElement("option");E.value=S;const I=g.isDefault?"":a("customIndicatorSuffix");E.textContent=g.label+I,E.dataset.type=g.baseType,h.appendChild(E)})};b(c,s),b(d,r),b(m,i),t.innerHTML="",t.appendChild(c),t.appendChild(d),i.length>0&&t.appendChild(m),n&&t.querySelector(`option[value="${n}"]`)?t.value=n:s.length>0?t.value=s[0].key:r.length>0&&(t.value=r[0].key)}function Do(t,o,n){return{x:2*n.x-.5*(t.x+o.x),y:2*n.y-.5*(t.y+o.y)}}function Rt(t,o,n,s=20){const r=[];for(let i=0;i<=s;i++){const l=i/s,c=Math.pow(1-l,2)*t.x+2*(1-l)*l*n.x+Math.pow(l,2)*o.x,d=Math.pow(1-l,2)*t.y+2*(1-l)*l*n.y+Math.pow(l,2)*o.y;r.push([c,d])}return r}function Ao(t,o,n,s){const r=o.x-t.x,i=o.y-t.y,l=s.x-n.x,c=s.y-n.y,d=r*c-i*l;if(d===0)return null;const m=((n.x-t.x)*c-(n.y-t.y)*l)/d,b=((n.x-t.x)*i-(n.y-t.y)*r)/d;return m<0||m>1||b<0||b>1?null:{x:t.x+m*r,y:t.y+m*i}}function Tt(t){const o=t.coordinates[0];let[n,s]=o[0],[r,i]=o[0];for(const[l,c]of o)l<n&&(n=l),c<s&&(s=c),l>r&&(r=l),c>i&&(i=c);return{x:n,y:s,width:r-n,height:i-s}}function ge(t,o){const n=Tt(o);if(t.x<n.x||t.x>n.x+n.width||t.y<n.y||t.y>n.y+n.height)return!1;let s=!1;const r=o.coordinates[0];for(let i=0,l=r.length-1;i<r.length;l=i++){const[c,d]=r[i],[m,b]=r[l];d>t.y!=b>t.y&&t.x<(m-c)*(t.y-d)/(b-d)+c&&(s=!s)}return s}function he(t){if(!e.isGridVisible||!e.isSnapEnabled)return t;const o=e.gridSize;return{x:Math.round(t.x/o)*o,y:Math.round(t.y/o)*o}}function nt(t){const o=10/e.scale,n=e.project.features.filter(r=>r.properties.floor===e.activeFloorId&&!r.properties.isPlaceholder);let s=null;for(const r of n)if(r.geometry.type==="Point"||r.properties.type==="connector"){const[i,l]=r.geometry.coordinates,c=Math.hypot(t.x-i,t.y-l);c<o&&(!s||c<s.d)&&(s={x:i,y:l,d:c})}else if(r.geometry.type==="LineString"){const i=r.geometry.coordinates;for(const l of i){const c=l[0],d=l[1],m=Math.hypot(t.x-c,t.y-d);m<o&&(!s||m<s.d)&&(s={x:c,y:d,d:m})}}return s?{x:s.x,y:s.y}:t}function Gi(){const t=[];if(!e.activeFloorId)return t;const o=e.metersPerPixel;if(!o||o<=0)return t.push("Maßstab nicht kalibriert. Analyse ist ungenau oder nicht möglich."),t;const n=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.properties.type==="area"&&c.geometry.type==="Polygon"&&!c.properties.isEmpty),s=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.geometry.type==="Point"&&c.properties.subType==="beacon"),r=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.properties.type==="area"&&c.geometry.type==="Polygon"&&c.properties.isEmpty);s.length<3&&t.push("Zu wenige Beacons: Mindestens 3 Beacons werden für eine Trilateration benötigt.");const l=.5/o;return n.forEach(c=>{const d=c.geometry,m=Tt(d);let b=0,h=0,v=0;for(let S=m.x;S<m.x+m.width;S+=l)for(let g=m.y;g<m.y+m.height;g+=l)if(ge({x:S,y:g},d)){if(r.some(k=>ge({x:S,y:g},k.geometry)))continue;b++;let I=0;for(const k of s){const[M,C]=k.geometry.coordinates,D=Math.hypot(S-M,g-C),j=typeof k.properties.beacon_range=="number"&&k.properties.beacon_range>0?k.properties.beacon_range/o:0;D<=j&&I++}I===0?h++:I<3&&v++}if(b>0){const S=h/b*100,g=v/b*100,E=c.properties.label||"Unbenannter Raum";S>2&&t.push(`Funkloch in "${E}": ${S.toFixed(1)}% der Fläche nicht abgedeckt.`),g>40&&t.push(`Eingeschränkte Trilateration in "${E}": ${g.toFixed(1)}% der Fläche haben < 3 Beacons.`)}}),t}function Wt(t,o){let n=1/0,s=-1;const r=16/e.scale,i=o.coordinates[0];for(let l=0;l<i.length-1;l++){const c={x:i[l][0],y:i[l][1]},d={x:i[l+1][0],y:i[l+1][1]},m=d.x-c.x,b=d.y-c.y;if(m===0&&b===0)continue;const h=((t.x-c.x)*m+(t.y-c.y)*b)/(m*m+b*b),v=h<0?c:h>1?d:{x:c.x+h*m,y:c.y+h*b},S=Math.sqrt((t.x-v.x)**2+(t.y-v.y)**2);S<n&&(n=S,s=l)}return n<r?{index:s,distance:n}:{index:-1,distance:1/0}}function Wi(t,o,n){const s=o.coordinates[0],r=Math.max(0,Math.min(n,s.length-2)),i={x:s[r][0],y:s[r][1]},l={x:s[r+1][0],y:s[r+1][1]},c=l.x-i.x,d=l.y-i.y;if(c===0&&d===0)return i;const m=((t.x-i.x)*c+(t.y-i.y)*d)/(c*c+d*d),b=Math.max(0,Math.min(1,m));return{x:i.x+b*c,y:i.y+b*d}}let Q,x,ot,J,rt,Y,Ft,He;function Ki(){Q=document.getElementById("canvas"),x=Q.getContext("2d"),ot=document.getElementById("ruler-top"),J=ot.getContext("2d"),rt=document.getElementById("ruler-left"),Y=rt.getContext("2d"),Ft=document.createElement("canvas"),He=Ft.getContext("2d")}function G(){if(!(!x||!Q.parentElement)){if(Q.width=Q.parentElement.clientWidth,Q.height=Q.parentElement.clientHeight,ot.width=Q.width,rt.height=Q.height,Ui(),e.measureLabels=[],x.save(),x.translate(e.pan.x,e.pan.y),x.scale(e.scale,e.scale),e.activeFloorId){const t=e.cachedFloorPlanImages[e.activeFloorId];t&&x.drawImage(t,0,0),e.isGridVisible&&Zi();const o=e.project.features.filter(l=>l.properties.floor===e.activeFloorId&&e.visibleLayers[l.properties.type]),n=o.filter(l=>l.geometry.type==="Polygon"),s=o.filter(l=>l.geometry.type!=="Polygon"),r=n.filter(l=>l.properties.isEmpty),i=n.filter(l=>!l.properties.isEmpty);r.length>0?(Ft.width=Q.width,Ft.height=Q.height,He.save(),He.translate(e.pan.x,e.pan.y),He.scale(e.scale,e.scale),i.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);gt(l,c,{ctx:He,onlyFill:!0,noLabel:!0})}),r.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);gt(l,c,{ctx:He,onlyFill:!0,noLabel:!0,forceComposite:"destination-out",forceColor:"#000000"})}),He.restore(),x.save(),x.setTransform(1,0,0,1,0,0),x.drawImage(Ft,0,0),x.restore(),i.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);gt(l,c,{onlyStroke:!0})}),r.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);gt(l,c,{onlyStroke:!0})})):n.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);gt(l,c)}),s.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);switch(x.lineWidth=(c?3:2)/e.scale,l.geometry.type){case"Point":Xi(l,c);break;case"LineString":Qi(l,c);break}}),e.currentMode==="door"&&es(n)}e.tempShape&&(e.currentMode==="area"&&ns(),e.currentMode==="square"&&os(),e.currentMode==="line"&&Mn(),e.currentMode==="calibrate"&&Mn(),e.currentMode==="door"&&Mn(),e.currentMode==="polygon"&&rs(),e.currentMode==="arc"&&is(),e.currentMode==="circle"&&ss()),e.showBeaconHeatmap&&ts(),x.restore(),e.isShiftPressed&&ls()}}function Kr(t){const o=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);return o?{r:parseInt(o[1]),g:parseInt(o[2]),b:parseInt(o[3]),a:o[4]!==void 0?parseFloat(o[4]):1}:null}function de(){return e.metersPerPixel}function fe(t){const o=e.activeLanguage==="de"?"de-DE":"en-US";return`${t.toLocaleString(o,{maximumFractionDigits:2})} m`}function be(t,o,n){const s=4/e.scale,r=16/e.scale;x.font=`${12/e.scale}px sans-serif`;const i=x.measureText(n).width+s*2,l=t-i/2,c=o-r/2,d=e.activeTheme==="dark"?"rgba(20,20,25,0.85)":"rgba(255,255,255,0.85)",m=e.activeTheme==="dark"?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.15)";x.fillStyle=d,x.fillRect(l,c,i,r),x.strokeStyle=m,x.lineWidth=1/e.scale,x.strokeRect(l,c,i,r),x.fillStyle=e.activeTheme==="dark"?"#eee":"#333",x.textAlign="center",x.textBaseline="middle",x.fillText(n,t,o)}function Ur(t,o,n,s){if(n)return te;if(s)return s;const r=t?Kr(t):null,l=(r&&r.a>.4?t:o??(e.activeTheme==="dark"?"#e6e1ef":"#333333")).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(l){const c=parseInt(l[1]),d=parseInt(l[2]),m=parseInt(l[3]),b=(.299*c+.587*d+.114*m)/255,h=.5;return e.activeTheme==="dark"?b<h?"#e6e1ef":"#333333":b>h?"#333333":"#e6e1ef"}return e.activeTheme==="dark"?"#e6e1ef":"#333333"}function Ui(){const t=getComputedStyle(document.body).getPropertyValue("--ruler-text").trim(),o=getComputedStyle(document.body).getPropertyValue("--ruler-border").trim(),n=getComputedStyle(document.body).getPropertyValue("--crosshair-color").trim()||"rgba(53, 138, 216, 0.9)";J.clearRect(0,0,ot.width,ot.height),Y.clearRect(0,0,rt.width,rt.height),J.font="12px sans-serif",Y.font="12px sans-serif",J.fillStyle=t,Y.fillStyle=t,J.strokeStyle=o,Y.strokeStyle=o;const{scale:s,pan:r}=e,i=s>1.5?50:s<.4?200:100;for(let d=0;d<ot.width;d+=10){const m=(d-r.x)/s;J.beginPath(),J.moveTo(d+.5,25),J.lineTo(d+.5,30),J.stroke(),Math.round(m)%i===0&&(J.beginPath(),J.moveTo(d+.5,22),J.lineTo(d+.5,30),J.stroke(),J.fillText(String(Math.round(m)),d+2,14))}for(let d=0;d<rt.height;d+=10){const m=(d-r.y)/s;Y.beginPath(),Y.moveTo(25,d+.5),Y.lineTo(30,d+.5),Y.stroke(),Math.round(m)%i===0&&(Y.beginPath(),Y.moveTo(22,d+.5),Y.lineTo(30,d+.5),Y.stroke(),Y.fillText(String(Math.round(m)),2,d+12))}const{x:l,y:c}=e.mousePosScreen;J.fillStyle=n,Y.fillStyle=n,J.beginPath(),J.moveTo(l,0),J.lineTo(l-3,5),J.lineTo(l+3,5),J.closePath(),J.fill(),Y.beginPath(),Y.moveTo(0,c),Y.lineTo(5,c-3),Y.lineTo(5,c+3),Y.closePath(),Y.fill()}function Zi(){const{scale:t,pan:o,gridSize:n}=e,s=e.activeTheme==="dark"?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)",r=e.activeTheme==="dark"?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)";x.lineWidth=1/t;const i=-o.x/t,l=-o.y/t,c=(Q.width-o.x)/t,d=(Q.height-o.y)/t;let m=n;const b=40;for(;m*t<b;)m*=2;for(;m*t>b*2;)m/=2;const h=m,v=h/4;if(v*t>10){x.strokeStyle=s;const E=Math.floor(i/v)*v,I=Math.floor(l/v)*v;for(let k=E;k<c;k+=v)x.beginPath(),x.moveTo(k,l),x.lineTo(k,d),x.stroke();for(let k=I;k<d;k+=v)x.beginPath(),x.moveTo(i,k),x.lineTo(c,k),x.stroke()}x.strokeStyle=r,x.lineWidth=1.5/t;const S=Math.floor(i/h)*h,g=Math.floor(l/h)*h;for(let E=S;E<c;E+=h)x.beginPath(),x.moveTo(E,l),x.lineTo(E,d),x.stroke();for(let E=g;E<d;E+=h)x.beginPath(),x.moveTo(i,E),x.lineTo(c,E),x.stroke()}function gt(t,o,n={}){if(t.properties.isPlaceholder)return;const{subType:s,label:r}=t.properties,i=n.ctx||x,c=(e.styleOverrides||pe())[s];let d=Be.default.fill,m=Be.default.stroke,h=t.properties.fontSize||c?.fontSize||14,v=t.properties.fontColor||c?.fontColor;c&&c.baseType==="area"&&(d=c.fill||d,m=c.stroke||m),t.properties.isEmpty?(d="rgba(255, 255, 255, 0.1)",m="#666666",i.setLineDash([8/e.scale,4/e.scale])):i.setLineDash([]),n.forceColor&&(d=n.forceColor),n.forceComposite&&(i.globalCompositeOperation=n.forceComposite);const S=t.geometry.coordinates[0];i.fillStyle=d,i.strokeStyle=o?te:m,i.lineWidth=(o?3:2)/e.scale,i.beginPath(),i.moveTo(S[0][0],S[0][1]);for(let g=1;g<S.length;g++)i.lineTo(S[g][0],S[g][1]);if(i.closePath(),n.onlyStroke||i.fill(),n.onlyFill||i.stroke(),n.forceComposite&&(i.globalCompositeOperation="source-over"),i.setLineDash([]),t.properties.isEmpty&&!n.onlyFill){const g=Tt(t.geometry);i.beginPath(),i.moveTo(g.x,g.y),i.lineTo(g.x+g.width,g.y+g.height),i.moveTo(g.x+g.width,g.y),i.lineTo(g.x,g.y+g.height),i.strokeStyle="rgba(100, 100, 100, 0.5)",i.lineWidth=1/e.scale,i.stroke()}if(r&&!n.onlyFill&&!n.onlyStroke&&!n.noLabel){const g=Tt(t.geometry),E=Ur(d,m,o,v);i.fillStyle=E,i.font=`bold ${h/e.scale}px sans-serif`,i.textAlign="center",i.textBaseline="middle";const I=g.x+g.width/2,k=g.y+g.height/2;i.fillText(r,I,k);const M=Array.isArray(t.properties.contents)?t.properties.contents:[];if(M.length>0){const A=(c?.contentsFontSize||Math.max(10,Math.round(h*.8)))/e.scale,j=(c?.contentsLineSpacing||Math.round(h*.5))/e.scale;i.font=`${A}px sans-serif`,i.textAlign="center",i.textBaseline="top";let u=k+j;for(let f=0;f<M.length;f++){const B=String(M[f]);B.trim()!==""&&(i.fillText(B,I,u),u+=j)}}const C=t.properties.room_number,D=t.properties.designation;if(C||D){const A=(c?.contentsFontSize||Math.max(8,Math.round(h*.7)))/e.scale,j=(c?.contentsLineSpacing||Math.round(h*.5))/e.scale;i.font=`${A}px sans-serif`,i.textAlign="center",i.textBaseline="top";let f=M.length>0?k+j*(M.length+1):k+j;C&&(i.fillText(String(C),I,f),f+=j),D&&i.fillText(String(D),I,f)}if(t.properties.isAccessible){const A=(c?.accessibleIconSize||16)/e.scale,j=(c?.accessibleIconOffsetX||6)/e.scale,u=(c?.accessibleIconOffsetY||6)/e.scale,f=getComputedStyle(document.body).getPropertyValue("--color-primary").trim()||"#6b2bd0",B=getComputedStyle(document.body).getPropertyValue("--color-primary-text").trim()||"#ffffff",P=A+4/e.scale,L=A+4/e.scale;i.fillStyle=o?te:f,i.beginPath();const F=3/e.scale,T=g.x+j,_=g.y+u;i.moveTo(T+F,_),i.lineTo(T+P-F,_),i.quadraticCurveTo(T+P,_,T+P,_+F),i.lineTo(T+P,_+L-F),i.quadraticCurveTo(T+P,_+L,T+P-F,_+L),i.lineTo(T+F,_+L),i.quadraticCurveTo(T,_+L,T,_+L-F),i.lineTo(T,_+F),i.quadraticCurveTo(T,_,T+F,_),i.closePath(),i.fill(),i.fillStyle=o?"#ffffff":B,i.font=`${A}px sans-serif`,i.textAlign="left",i.textBaseline="top",i.fillText("♿",T+2/e.scale,_+2/e.scale)}}if(o&&!n.onlyFill&&!n.onlyStroke){const g=5/e.scale;if((e.isAltPressed||e.currentMode==="scissors")&&e.hoveredFeatureId===t.properties.id&&e.hoveredEdgeIndex!==-1){const E=S[e.hoveredEdgeIndex],I=S[(e.hoveredEdgeIndex+1)%(S.length-1)];i.beginPath(),i.moveTo(E[0],E[1]),i.lineTo(I[0],I[1]),i.strokeStyle=te,i.lineWidth=5/e.scale,i.lineCap="round",i.stroke()}i.fillStyle="#fff",i.strokeStyle=te,i.lineWidth=2/e.scale,S.forEach(E=>{i.beginPath(),i.arc(E[0],E[1],g,0,2*Math.PI),i.fill(),i.stroke()})}if(e.showDimensions.area||e.showDimensions.circle||e.currentMode==="calibrate"){const g=S,E=Tt(t.geometry),I=E.x+E.width/2,k=E.y+E.height/2;if(g.length>=20&&Math.abs(E.width-E.height)/Math.max(E.width,E.height)<.08&&e.showDimensions.circle){let C=0;for(let j=0;j<g.length-1;j++){const u=g[j][0]-I,f=g[j][1]-k;C+=Math.sqrt(u*u+f*f)}const D=C/(g.length-1),A=D*de();be(I+D,k-18/e.scale,fe(A))}else if(e.showDimensions.area||e.currentMode==="calibrate")for(let C=0;C<g.length-1;C++){const D=g[C][0],A=g[C][1],j=g[C+1][0],u=g[C+1][1],f=Math.hypot(j-D,u-A),B=f*de(),P=(D+j)/2,F=(A+u)/2-18/e.scale,T=fe(B);if(be(P,F,T),e.currentMode==="calibrate"){const _=4/e.scale,H=16/e.scale;x.font=`${12/e.scale}px sans-serif`;const V=x.measureText(T).width+_*2,q=P-V/2,X=F-H/2;e.measureLabels.push({bx:q,by:X,w:V,h:H,pxLength:f})}}}}function Ji(t,o,n,s,r){const i=new Path2D(t);x.save(),x.translate(o,n),x.scale(1/e.scale,1/e.scale),x.translate(-12,-12),x.fillStyle=s?te:r||"#34495e",x.fill(i),x.restore()}function Yi(t,o,n,s,r,i){const l=new Path2D(t);x.save(),x.translate(o,n),x.scale(1/e.scale,1/e.scale),x.translate(-12,-12),x.strokeStyle=s?te:r,x.lineWidth=i/1,x.lineCap="round",x.lineJoin="round",x.stroke(l),x.restore()}function Xi(t,o){const[n,s]=t.geometry.coordinates,{subType:r,label:i}=t.properties,c=(e.styleOverrides||pe())[r];let d=un.default,m="#34495e",h=t.properties.fontSize||c?.fontSize||12,v=t.properties.fontColor||c?.fontColor;if(c&&c.baseType==="point"&&(d=c.icon||d,m=c.iconColor||m),r==="beacon"){const g=typeof t.properties.beacon_range=="number"?t.properties.beacon_range:null;if(e.showBeaconRangeRing&&g&&g>0){const E=g*(e.gridSize/e.metersPerGridCell);x.beginPath(),x.arc(n,s,E,0,Math.PI*2),x.fillStyle="rgba(46, 204, 113, 0.12)",x.fill(),x.strokeStyle="rgba(46, 204, 113, 0.6)",x.lineWidth=1.5/e.scale,x.stroke()}}o&&(x.fillStyle="rgba(231, 76, 60, 0.3)",x.beginPath(),x.arc(n,s,18/e.scale,0,2*Math.PI),x.fill()),r==="beacon"?Yi(d,n,s,o,"#b955d0",2):Ji(d,n,s,o,m);const S=Ur(void 0,m,o,v);x.fillStyle=S,x.font=`${h/e.scale}px sans-serif`,x.textAlign="center",x.fillText(i,n,s-22/e.scale)}function Qi(t,o){const{coordinates:n}=t.geometry;if(n.length<2)return;x.beginPath(),x.moveTo(n[0][0],n[0][1]),n.slice(1).forEach(r=>x.lineTo(r[0],r[1]));const s=t.properties.subType==="door";if(x.strokeStyle=o?te:s?"#e67e22":t.properties.isAccessible?"#3498db":"#8e44ad",x.lineWidth=(o?5:s?4:3)/e.scale,x.lineCap="round",x.stroke(),o){const r=6/e.scale;x.fillStyle="#fff",x.strokeStyle=te,x.lineWidth=2/e.scale;let i=[];if(t.properties.subType==="arc"&&t.properties.controlPoints){const{p0:l,p1:c,p2:d}=t.properties.controlPoints;i=[l,c,d],x.setLineDash([4/e.scale,4/e.scale]),x.beginPath(),x.moveTo(l.x,l.y),x.lineTo(c.x,c.y),x.lineTo(d.x,d.y),x.strokeStyle="#7f8c8d",x.stroke(),x.setLineDash([])}else i=n.map(l=>({x:l[0],y:l[1]}));i.forEach(l=>{x.beginPath(),x.arc(l.x,l.y,r,0,2*Math.PI),x.fill(),x.stroke()})}if(e.showDimensions.path||e.currentMode==="calibrate"){let r=0;for(let g=0;g<n.length-1;g++){const E=n[g][0],I=n[g][1],k=n[g+1][0],M=n[g+1][1];r+=Math.hypot(k-E,M-I)}const i=r*de();let l=n[0][0],c=n[0][0],d=n[0][1],m=n[0][1];for(let g=1;g<n.length;g++)l=Math.min(l,n[g][0]),c=Math.max(c,n[g][0]),d=Math.min(d,n[g][1]),m=Math.max(m,n[g][1]);const b=(l+c)/2,v=(d+m)/2-18/e.scale,S=fe(i);if(be(b,v,S),e.currentMode==="calibrate"){const g=4/e.scale,E=16/e.scale;x.font=`${12/e.scale}px sans-serif`;const I=x.measureText(S).width+g*2,k=b-I/2,M=v-E/2;e.measureLabels.push({bx:k,by:M,w:I,h:E,pxLength:r})}}}function es(t){x.save(),x.lineWidth=2/e.scale,t.forEach(o=>{const n=o.geometry.coordinates[0];for(let s=0;s<n.length-1;s++){const r=n[s],i=n[s+1],l=e.hoveredFeatureId===o.properties.id&&e.hoveredEdgeIndex===s;x.strokeStyle=l?te:"#e67e22",x.setLineDash([6/e.scale,6/e.scale]),x.beginPath(),x.moveTo(r[0],r[1]),x.lineTo(i[0],i[1]),x.stroke(),x.setLineDash([]);const c=(r[0]+i[0])/2,d=(r[1]+i[1])/2;x.fillStyle=l?te:"#e67e22",x.beginPath(),x.arc(c,d,3/e.scale,0,Math.PI*2),x.fill()}}),x.restore()}function ts(){const t=e.project.features.filter(o=>o.properties.floor===e.activeFloorId&&o.geometry.type==="Point"&&o.properties.subType==="beacon");x.save(),x.globalCompositeOperation="multiply",t.forEach(o=>{const[n,s]=o.geometry.coordinates;if(!(typeof o.properties.beacon_range=="number"&&o.properties.beacon_range>0))return;const i=o.properties.beacon_range,l=de(),c=l>0?i/l:i*10,d=x.createRadialGradient(n,s,0,n,s,c);d.addColorStop(0,"rgba(46, 204, 113, 0.4)"),d.addColorStop(.5,"rgba(241, 196, 15, 0.25)"),d.addColorStop(1,"rgba(231, 76, 60, 0.15)"),x.fillStyle=d,x.beginPath(),x.arc(n,s,c,0,Math.PI*2),x.fill(),e.showBeaconRangeRing&&(x.save(),x.globalCompositeOperation="source-over",x.strokeStyle="rgba(46, 204, 113, 0.6)",x.lineWidth=1/e.scale,x.beginPath(),x.arc(n,s,c,0,Math.PI*2),x.stroke(),x.restore())}),x.restore()}function ns(){if(!e.tempShape?.start)return;x.strokeStyle=te,x.lineWidth=1.5/e.scale,x.setLineDash([6/e.scale,6/e.scale]);const{start:t}=e.tempShape,o=he(e.mousePos);x.strokeRect(t.x,t.y,o.x-t.x,o.y-t.y),x.setLineDash([]);const n=Math.abs(o.x-t.x),s=Math.abs(o.y-t.y),r=n*de(),i=s*de(),l=(t.x+o.x)/2,c=(t.y+o.y)/2;be(l,t.y-18/e.scale,fe(r)),be(t.x-36/e.scale,c,fe(i))}function os(){if(!e.tempShape?.start)return;x.strokeStyle=te,x.lineWidth=1.5/e.scale,x.setLineDash([6/e.scale,6/e.scale]);const{start:t}=e.tempShape,o=he(e.mousePos),n=Math.max(Math.abs(o.x-t.x),Math.abs(o.y-t.y)),s=o.x>=t.x?t.x:t.x-n,r=o.y>=t.y?t.y:t.y-n;x.strokeRect(s,r,n,n),x.setLineDash([]);const i=n*de();be(s+n/2,r-18/e.scale,fe(i))}function Mn(){if(!e.tempShape?.start)return;x.strokeStyle=te,x.lineWidth=2/e.scale,x.beginPath();const t=e.tempShape.start;x.moveTo(t.x,t.y);const o=e.tempShape.end||nt(he(e.mousePos));x.lineTo(o.x,o.y),x.stroke();const n=o.x-t.x,s=o.y-t.y,i=Math.sqrt(n*n+s*s)*de(),l=(t.x+o.x)/2,c=(t.y+o.y)/2;be(l,c-18/e.scale,fe(i)),x.fillStyle=e.activeTheme==="dark"?"#eee":"#333",x.font=`${12/e.scale}px sans-serif`,x.textAlign="center",x.beginPath(),x.arc(t.x,t.y,4/e.scale,0,Math.PI*2),x.fill(),x.fillText("A",t.x,t.y-10/e.scale),x.beginPath(),x.arc(o.x,o.y,4/e.scale,0,Math.PI*2),x.fill(),x.fillText((e.tempShape.end,"B"),o.x,o.y-10/e.scale)}function rs(){if(!e.tempShape?.nodes||e.tempShape.nodes.length===0)return;x.strokeStyle=te,x.lineWidth=2/e.scale,x.beginPath();const t=e.tempShape.nodes[0];x.moveTo(t.x,t.y);for(let m=1;m<e.tempShape.nodes.length;m++)x.lineTo(e.tempShape.nodes[m].x,e.tempShape.nodes[m].y);const o=he(e.mousePos);x.lineTo(o.x,o.y),x.stroke();const n=e.tempShape.nodes[e.tempShape.nodes.length-1],s=o.x-n.x,r=o.y-n.y,l=Math.sqrt(s*s+r*r)*de(),c=(n.x+o.x)/2,d=(n.y+o.y)/2;be(c,d-18/e.scale,fe(l))}function is(){if(!e.tempShape?.start)return;const t=nt(he(e.mousePos));if(x.strokeStyle=te,x.lineWidth=2/e.scale,x.setLineDash([6/e.scale,6/e.scale]),x.beginPath(),e.tempShape.end){const o=e.tempShape.start,n=e.tempShape.end,r=Do(o,n,t),i=Rt(o,n,r);x.moveTo(i[0][0],i[0][1]);for(let h=1;h<i.length;h++)x.lineTo(i[h][0],i[h][1]);let l=0;for(let h=0;h<i.length-1;h++){const v=i[h][0],S=i[h][1],g=i[h+1][0],E=i[h+1][1];l+=Math.hypot(g-v,E-S)}const c=l*de(),d=Math.floor(i.length/2),m=i[d][0],b=i[d][1];be(m,b-18/e.scale,fe(c))}else{x.moveTo(e.tempShape.start.x,e.tempShape.start.y),x.lineTo(t.x,t.y);const o=t.x-e.tempShape.start.x,n=t.y-e.tempShape.start.y,r=Math.sqrt(o*o+n*n)*de(),i=(e.tempShape.start.x+t.x)/2,l=(e.tempShape.start.y+t.y)/2;be(i,l-18/e.scale,fe(r))}x.stroke(),x.setLineDash([])}function ss(){if(!e.tempShape?.start)return;const t=e.tempShape.start,o=he(e.mousePos),n=Math.sqrt(Math.pow(o.x-t.x,2)+Math.pow(o.y-t.y,2)),s=pe(),i=document.getElementById("element-type-select")?.value||"default",l=s[i];let c=l&&l.baseType==="area"&&l.fill||Be.default.fill;const d=Kr(c);if(d){const b=Math.max(d.a,.65);c=`rgba(${d.r}, ${d.g}, ${d.b}, ${b})`}x.beginPath(),x.arc(t.x,t.y,n,0,2*Math.PI),x.fillStyle=c,x.fill(),x.strokeStyle=te,x.lineWidth=1.5/e.scale,x.setLineDash([6/e.scale,6/e.scale]),x.stroke(),x.setLineDash([]);const m=n*de();be(t.x+n,t.y-18/e.scale,fe(m))}function ls(){if(!Q||Q.width===0||Q.height===0)return;const t=150,o=2.5,n=t/2,{x:s,y:r}=e.mousePosScreen,i=document.body.getAttribute("data-theme")||"light";x.save(),x.beginPath(),x.arc(s,r,n,0,Math.PI*2),x.strokeStyle=i==="dark"?"#333":"#a0a0a0",x.lineWidth=3,x.stroke(),x.clip(),x.globalAlpha=1,x.drawImage(Q,s-n/o,r-n/o,t/o,t/o,s-n,r-n,t,t),x.globalAlpha=1,x.restore()}function Oe(){const t=document.getElementById("overview-stats-panel");if(!t)return;const o=e.project.properties.projectName||a("unnamedProject"),n=Ce(),s=n.length,r=e.project.features.filter(d=>d.properties.type==="area"&&!d.properties.isPlaceholder&&!d.properties.isEmpty).length,i=e.project.features.filter(d=>d.properties.type==="point").length;let l=`<div><span>${a("stat_project")}:</span><span class="value">${o}</span></div><div><span>${a("stat_floors")}:</span><span class="value">${s}</span></div><div><span>${a("stat_areas")}:</span><span class="value">${r}</span></div><div><span>${a("stat_points")}:</span><span class="value">${i}</span></div>`;t.innerHTML=l;const c=document.getElementById("overview-floor-list");c&&(c.innerHTML="",n.forEach(d=>{const m=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder&&!u.properties.isEmpty).length,b=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point").length,h=document.createElement("div");h.className="floor-block";const v=document.createElement("div");v.className="floor-card";const S=document.createElement("img");S.className="floor-thumb",e.cachedFloorPlanImages[d]&&(S.src=e.cachedFloorPlanImages[d].src,v.classList.add("has-thumb"));const g=document.createElement("div");g.className="floor-meta";const E=document.createElement("div");E.className="name",E.textContent=d;const I=document.createElement("div");I.className="counts",I.textContent=`${a("stat_areas")}: ${m} · ${a("stat_points")}: ${b}`,g.appendChild(E),g.appendChild(I),v.appendChild(S),v.appendChild(g),v.addEventListener("click",()=>{e.activeFloorId=d,le(),G()}),h.appendChild(v);const k=document.createElement("button");k.className="beacon-toggle";const M=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point"&&u.properties.subType==="beacon");k.textContent=`${a("overviewBeacons")} (${M.length})`;const C=document.createElement("div");C.className="beacon-section",k.addEventListener("click",()=>{C.style.display===""||C.style.display==="none"?(C.innerHTML="",M.forEach(f=>{const B=document.createElement("div");B.className="beacon-card";const P=document.createElement("div");P.className="beacon-meta";const L=document.createElement("div");L.className="name";const F=f.properties.beacon_serial||"",T=f.properties.label||a("point_beacon_label");L.textContent=F?`${T} · ${F}`:T;const _=document.createElement("div");_.className="counts";const H=f.properties.beacon_range,V=f.properties.beacon_note_de||f.properties.beacon_note_en||"",q=[];q.push(`${a("beacon_serial_label")}: ${F||"-"}`),typeof H=="number"&&q.push(`${a("beacon_range_label")}: ${H}`),V&&q.push(`${a("beacon_note_de_label")}: ${V}`),_.textContent=q.join(" · "),P.appendChild(L),P.appendChild(_),B.appendChild(P),B.addEventListener("click",()=>{e.activeFloorId=d,le(),G()}),C.appendChild(B)}),C.style.display="block"):(C.style.display="none",C.innerHTML="")}),h.appendChild(k),h.appendChild(C);const D=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder&&!u.properties.isEmpty).sort((u,f)=>{const B=(u.properties.label||"").toLowerCase(),P=(f.properties.label||"").toLowerCase();return B.localeCompare(P)}),A=document.createElement("button");A.className="beacon-toggle",A.textContent=`${a("areas")} (${D.length})`;const j=document.createElement("div");j.className="area-section",A.addEventListener("click",()=>{if(j.style.display===""||j.style.display==="none"){const f=pe();j.innerHTML="",D.forEach(P=>{const L=document.createElement("div");L.className="area-card";const F=document.createElement("div");F.className="area-meta";const T=document.createElement("div");T.className="name";const _=P.properties.label||"";T.textContent=_;const H=document.createElement("div");H.className="counts";const V=f[P.properties.subType]?.label||P.properties.subType,q=Array.isArray(P.properties.contents)?P.properties.contents.filter(ce=>ce.trim()!==""):[],X=q.length>0?q.join(", "):"-";H.textContent=`${a("elementType")}: ${V} · ${a("roomContentsTitle")}: ${X}`,F.appendChild(T),F.appendChild(H),L.appendChild(F),L.addEventListener("click",()=>{e.activeFloorId=d,le(),G()}),j.appendChild(L)});const B=D.filter(P=>!!P.properties.isAccessible);if(B.length>0){const P=document.createElement("div");P.className="area-meta";const L=document.createElement("div");L.className="name",L.textContent=a("accessibleRoomsHeader"),P.appendChild(L),j.appendChild(P),B.forEach(F=>{const T=document.createElement("div");T.className="area-card";const _=document.createElement("div");_.className="area-meta";const H=document.createElement("div");H.className="name",H.textContent=F.properties.label||"";const V=document.createElement("div");V.className="counts",V.textContent="Barrierefrei",_.appendChild(H),_.appendChild(V),T.appendChild(_),T.addEventListener("click",()=>{e.activeFloorId=d,le(),G()}),j.appendChild(T)})}j.style.display="block"}else j.style.display="none",j.innerHTML=""}),h.appendChild(A),h.appendChild(j),c.appendChild(h)}))}function as(){if(!e.activeFloorId||!e.tempShape)return null;const t=pe();let n=document.getElementById("element-type-select")?.value||"raum";const r=t[n]?.label||"Preview",i="preview_feature",l=e.activeFloorId,c=e.mousePos||{x:0,y:0},d=he(c);if(e.currentMode==="area"&&e.tempShape.start){const m=e.tempShape.start,b=Math.min(m.x,d.x),h=Math.min(m.y,d.y),v=Math.abs(d.x-m.x),S=Math.abs(d.y-m.y);return v<1||S<1?null:{type:"Feature",geometry:{type:"Polygon",coordinates:[[[b,h],[b+v,h],[b+v,h+S],[b,h+S],[b,h]]]},properties:{id:i,floor:l,type:"area",subType:n,label:r,isPlaceholder:!0}}}if(e.currentMode==="square"&&e.tempShape.start){const m=e.tempShape.start,b=Math.abs(d.x-m.x),h=Math.abs(d.y-m.y),v=Math.max(b,h),S=Math.min(m.x,d.x),g=Math.min(m.y,d.y);return v<1?null:{type:"Feature",geometry:{type:"Polygon",coordinates:[[[S,g],[S+v,g],[S+v,g+v],[S,g+v],[S,g]]]},properties:{id:i,floor:l,type:"area",subType:n,label:r,isPlaceholder:!0}}}if(e.currentMode==="polygon"&&e.tempShape.nodes&&e.tempShape.nodes.length>=1){const m=[...e.tempShape.nodes.map(b=>[b.x,b.y]),[d.x,d.y]];return m.length<3?null:(m.push(m[0]),{type:"Feature",geometry:{type:"Polygon",coordinates:[m]},properties:{id:i,floor:l,type:"area",subType:n,label:r,isPlaceholder:!0}})}if(e.currentMode==="circle"&&e.tempShape.start){const m=e.tempShape.start,b=Math.sqrt((d.x-m.x)**2+(d.y-m.y)**2);if(b<1)return null;const h=64,v=Array.from({length:h},(S,g)=>{const E=g/h*2*Math.PI;return[m.x+b*Math.cos(E),m.y+b*Math.sin(E)]});return v.push(v[0]),{type:"Feature",geometry:{type:"Polygon",coordinates:[v]},properties:{id:i,floor:l,type:"area",subType:n,label:r,isPlaceholder:!0}}}if(e.currentMode==="line"&&e.tempShape.start){const m=e.tempShape.start;return{type:"Feature",geometry:{type:"LineString",coordinates:[[m.x,m.y],[d.x,d.y]]},properties:{id:i,floor:l,type:"path",subType:n,label:r,isPlaceholder:!0}}}if(e.currentMode==="door"&&e.tempShape.start){const m=e.tempShape.start,b=[[m.x,m.y],[d.x,d.y]],h=d.x-m.x,v=d.y-m.y,S=Math.sqrt(h*h+v*v),g=Math.round(S*e.metersPerPixel*100)/100;return{type:"Feature",geometry:{type:"LineString",coordinates:b},properties:{id:i,floor:l,type:"path",subType:"door",label:"Tür",isPlaceholder:!0,door_length_m:g,door_edge_index:e.tempShape.edgeIndex}}}if(e.currentMode==="arc"&&e.tempShape.start){const m=e.tempShape.start;if(e.tempShape.end){const b=e.tempShape.start,h=e.tempShape.end,v=Do(b,h,d);return{type:"Feature",geometry:{type:"LineString",coordinates:Rt(b,h,v)},properties:{id:i,floor:l,type:"path",subType:"arc",label:r,isPlaceholder:!0}}}else return{type:"Feature",geometry:{type:"LineString",coordinates:[[m.x,m.y],[d.x,d.y]]},properties:{id:i,floor:l,type:"path",subType:"arc",label:r,isPlaceholder:!0}}}return e.currentMode==="point"?{type:"Feature",geometry:{type:"Point",coordinates:[d.x,d.y]},properties:{id:i,floor:l,type:"point",subType:n,label:r,isPlaceholder:!0}}:null}function $(){const t=document.getElementById("live-geojson-output");if(t){const o=as(),n=o?{...e.project,features:[...e.project.features,o]}:e.project;t.textContent=JSON.stringify(n,null,2)}}let Qe=null,jn=null,Re=null,Kt=null,Ut=null,bt=null,_n=null,Zt=null,Jt=null,At=null,Dn=null,An=null;function cs(t){Qe=t.inputPromptModal,jn=t.inputPromptLabel,Re=t.inputPromptInput,Kt=t.inputPromptOk,Ut=t.inputPromptCancel,bt=t.confirmModal,_n=t.confirmMessage,Zt=t.confirmOk,Jt=t.confirmCancel,At=t.loadingModal,Dn=t.loadingMessage,An=t.loadingOk}function Pe(t,o=""){return!Qe||!jn||!Re||!Kt||!Ut?Promise.resolve(null):(jn.textContent=t,Re.value=o,Qe.classList.remove("hidden"),Re.focus(),new Promise(n=>{const s=()=>{Qe.classList.add("hidden"),Kt.removeEventListener("click",r),Ut.removeEventListener("click",i),Re.removeEventListener("keydown",l),c&&c.removeEventListener("click",i)},r=()=>{const d=Re.value.trim();s(),n(d||null)},i=()=>{s(),n(null)},l=d=>{d.key==="Enter"?r():d.key==="Escape"&&i()};Kt.addEventListener("click",r),Ut.addEventListener("click",i),Re.addEventListener("keydown",l);const c=Qe?Qe.querySelector(".modal-overlay"):null;c&&c.addEventListener("click",i)}))}function Ee(t){return!bt||!_n||!Zt||!Jt?Promise.resolve(!1):(_n.textContent=t,bt.classList.remove("hidden"),new Promise(o=>{const n=()=>{bt.classList.add("hidden"),Zt.removeEventListener("click",s),Jt.removeEventListener("click",r),l?.removeEventListener("click",r),window.removeEventListener("keydown",i)},s=()=>{n(),o(!0)},r=()=>{n(),o(!1)},i=c=>{c.key==="Escape"&&r(),c.key==="Enter"&&s()};Zt.addEventListener("click",s),Jt.addEventListener("click",r),window.addEventListener("keydown",i);const l=bt.querySelector(".modal-overlay");l&&l.addEventListener("click",r)}))}function zo(t){!At||!Dn||!An||(Dn.textContent=t,At.classList.remove("hidden"),An.onclick=()=>it())}function it(){At&&At.classList.add("hidden")}const ve=Object.freeze({publicAPI:"/api",imdAPI:"/app/api",login:"/app/login",imd:"/app"}),Gt=t=>{console.error(`[UI Error Message]: ${t}`)};class ds{baseUrl;backendAvailable=!0;warnedNoBackend=!1;constructor(o=window.location.origin){this.baseUrl=o,this.setupLockRelease()}base64ToFile(o,n){const s=o.split(","),r=s[0].match(/:(.*?);/)[1],i=atob(s[1]);let l=i.length;const c=new Uint8Array(l);for(;l--;)c[l]=i.charCodeAt(l);const d=r.split("/")[1]||"png",m=n.includes(".")?n:`${n}.${d}`;return new File([c],m,{type:r})}async request(o,n={}){n.credentials="include";try{const s=await fetch(`${this.baseUrl}${o}`,n);if(s.status===204)return{};const r=(s.headers.get("content-type")||"").toLowerCase();let i;if(r.includes("application/json"))i=await s.json();else{const l=await s.text(),c='Serverantwort ist keine JSON-API. Läuft das Backend unter "/app/api" und "/api"?';throw this.backendAvailable=!1,this.warnedNoBackend||(Gt(`${c}
Pfad: ${o}
Status: ${s.status}
Antwort: ${l.slice(0,200)}`),this.warnedNoBackend=!0),new Error(c)}if(!s.ok){const l=i.error||i.message||`Request failed with status ${s.status}`;throw Gt(l),new Error(l)}return i}catch(s){throw s instanceof Error||Gt("An unexpected network error occurred."),s}}isAvailable(){return this.backendAvailable}async probeBackend(){try{const o=await fetch(`${this.baseUrl}${ve.imdAPI}/random-id`,{method:"GET",credentials:"include"}),n=(o.headers.get("content-type")||"").toLowerCase();this.backendAvailable=o.ok&&n.includes("application/json")}catch{this.backendAvailable=!1}}async getProject(o,n){const s=n?`${ve.publicAPI}/${o}/${n}`:`${ve.publicAPI}/${o}`;return this.request(s)}async listProjects(){return this.request(`${ve.publicAPI}/list`)}async listVersions(o){return(await this.request(`${ve.publicAPI}/${o}/list`)).versions}async getNewId(){return(await this.request(`${ve.imdAPI}/random-id`)).id}async saveProject(o,n,s){try{const r=o??(await this.request("/app/api/random-id")).id,i=[];if(n.project.floorplanImages)for(const[m,b]of Object.entries(n.project.floorplanImages))b!==null&&b.startsWith("data:image")&&i.push(this.base64ToFile(b,m));const l=s?`/app/api/${r}/${s}`:`/app/api/${r}`,c=JSON.parse(JSON.stringify(n));c.project.floorplanImages=null,await this.request(l,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});let d=s;if(!d){const m=await this.request(`/api/${r}/list`);d=Math.max(...m.versions)}if(i.length>0){const m=new FormData;i.forEach(b=>m.append("floorplans",b)),await this.request(`/app/api/${r}/${d}/floorplans`,{method:"POST",body:m})}return{id:r,version:d}}catch(r){throw Gt(r),r}}async delete(o,n){const s=n?`${ve.imdAPI}/${o}/${n}`:`${ve.imdAPI}/${o}`;await this.request(s,{method:"DELETE"})}async releaseLock(){try{await fetch(`${this.baseUrl}${ve.imdAPI}/release-lock`,{method:"POST",credentials:"include",keepalive:!0})}catch(o){console.warn("Failed to release lock",o)}}setupLockRelease(){window.addEventListener("beforeunload",()=>{const o=`${this.baseUrl}${ve.imdAPI}/release-lock`;if(navigator.sendBeacon){const n=new Blob([],{type:"application/json"});navigator.sendBeacon(o,n)}else fetch(o,{method:"POST",credentials:"include",keepalive:!0}).catch(()=>{})})}}const re=new ds;function rr(t){e.project.properties.projectName=t.trim(),e.project.properties.sizegrid=e.gridSize,Oe(),$();const o=new Blob([JSON.stringify(e.project,null,2)],{type:"application/geo+json"}),n=document.createElement("a");n.href=URL.createObjectURL(o);const s=(e.project.properties.projectName||"projekt").replace(/[^a-z0-9]/gi,"_").toLowerCase();n.download=`${s}.geojson`,n.click(),URL.revokeObjectURL(n.href)}async function Zr(t,o){e.project.properties.projectName=(e.project.properties.projectName||"").trim(),e.project.properties.sizegrid=e.gridSize,Oe(),$(),zo(a("saveProject"));try{const n=await re.saveProject(t,e,o);return e.currentServerProjectId=n.id,e.currentServerVersion=n.version,n}finally{it()}}async function ir(t,o){zo(a("loadProject"));try{const n=await re.getProject(t,o);e.currentServerProjectId=t,e.currentServerVersion=o,No(),Ae(n),N()}finally{it()}}function ps(t){const o=new FileReader;o.onload=n=>{try{const s=JSON.parse(n.target?.result);No(),Ae(s),N()}catch(s){alert("Fehler beim Laden der Projektdatei."),console.error(s)}},o.readAsText(t)}function Ae(t){if(t.type!=="FeatureCollection"||!t.features)throw new Error("Ungültiges GeoJSON-Projektformat.");e.project=t,Jr();const o=document.getElementById("projectName");o&&(o.value=e.project.properties.projectName||""),e.cachedFloorPlanImages={},e.project.floorplanImages&&Object.entries(e.project.floorplanImages).forEach(([r,i])=>{if(i){const l=new Image;l.onload=()=>{e.cachedFloorPlanImages[r]=l,r===e.activeFloorId&&G()},l.src=i}});const n=e.project.properties.settings||{};n.language&&(e.activeLanguage=n.language,document.documentElement.lang=n.language),n.theme&&(e.activeTheme=n.theme,document.body.setAttribute("data-theme",n.theme)),typeof e.project.properties.sizegrid=="number"?e.gridSize=e.project.properties.sizegrid:typeof n.gridSize=="number"&&(e.gridSize=n.gridSize),typeof n.isGridVisible=="boolean"&&(e.isGridVisible=n.isGridVisible),typeof n.isSnapEnabled=="boolean"&&(e.isSnapEnabled=n.isSnapEnabled),typeof n.metersPerPixel=="number"&&(e.metersPerPixel=n.metersPerPixel),typeof n.metersPerGridCell=="number"&&(e.metersPerGridCell=n.metersPerGridCell),n.visibleLayers&&(e.visibleLayers={...e.visibleLayers,...n.visibleLayers}),n.showDimensions&&(e.showDimensions={...e.showDimensions,...n.showDimensions}),typeof n.showBeaconHeatmap=="boolean"&&(e.showBeaconHeatmap=n.showBeaconHeatmap),typeof n.showBeaconRangeRing=="boolean"&&(e.showBeaconRangeRing=n.showBeaconRangeRing);const s=Ce();e.activeFloorId=s.includes(e.activeFloorId)?e.activeFloorId:s[0]||null,le(),Ze(),Oe(),$(),G()}async function us(t){try{const o=await tt(()=>import("./pdf-DcE_ssc1.js"),[]);o.GlobalWorkerOptions.workerSrc=`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${o.version}/pdf.worker.mjs`;const n=await t.arrayBuffer(),s=new Uint8Array(n),i=await(await o.getDocument(s).promise).getPage(1),l=i.getViewport({scale:2}),c=document.createElement("canvas");if(!c.getContext("2d"))throw new Error("Canvas-Kontext konnte nicht erstellt werden.");return c.height=l.height,c.width=l.width,await i.render({canvas:c,viewport:l}).promise,c.toDataURL("image/png")}catch(o){throw console.error("Fehler beim Konvertieren des PDFs:",o),new Error("Das PDF konnte nicht verarbeitet werden.")}}function ms(t,o){e.project.floorplanImages||(e.project.floorplanImages={}),e.project.floorplanImages[o]=t;const n=new Image;n.onload=()=>{e.cachedFloorPlanImages[o]=n,N(),le(),G()},n.src=t}async function gs(t){return new Promise((o,n)=>{const s=new FileReader;s.onload=()=>o(s.result),s.onerror=()=>n(new Error("Fehler beim Lesen der Bilddatei.")),s.readAsDataURL(t)})}async function ys(t){if(!e.activeFloorId){alert("Bitte zuerst eine Etage auswählen oder erstellen.");return}const o=e.activeFloorId,n=t.type;try{let s;if(zo(a(n==="application/pdf"?"pdf_convert":"image_load")),n.startsWith("image/"))s=await gs(t);else if(n==="application/pdf")s=await us(t);else{it(),alert("Nicht unterstützter Dateityp. Bitte wählen Sie eine Bild- oder PDF-Datei.");return}ms(s,o),it()}catch(s){it();const r=s instanceof Error?s.message:"Ein unbekannter Fehler ist aufgetreten.";alert(`Der Grundriss konnte nicht geladen werden: ${r}`)}}const ze="EG";function hs(){return{type:"FeatureCollection",features:[],properties:{projectName:"Unbenanntes Projekt",sizegrid:40,elementTypeStyles:{},settings:{language:"en",theme:"light",gridSize:40,isGridVisible:!0,isSnapEnabled:!0,metersPerPixel:.025,metersPerGridCell:1,visibleLayers:{area:!0,path:!0,point:!0,connector:!0},showDimensions:{area:!1,path:!1,circle:!1},showBeaconHeatmap:!1,showBeaconRangeRing:!1}},floorplanImages:{[ze]:null}}}const e={project:hs(),worldSize:{width:8e3,height:6e3},pan:{x:0,y:0},scale:1,threeDPan:{x:50,y:50},threeDScale:.8,threeDIsDragging:!1,threeDStartPos:{x:0,y:0},activeFloorId:ze,activeLanguage:"en",activeTheme:"light",currentMode:"select",tempShape:null,mousePos:{x:0,y:0},mousePosScreen:{x:0,y:0},gridSize:40,isGridVisible:!0,isSnapEnabled:!0,metersPerPixel:.025,metersPerGridCell:1,selectedFeatureIds:[],cachedFloorPlanImages:{},clipboard:null,isShiftPressed:!1,isCtrlPressed:!1,isAltPressed:!1,styleOverrides:null,isMovingElement:!1,dragStartPos:{x:0,y:0},originalGeometriesOnMove:new Map,isEditingPath:!1,editedFeatureId:null,editedNodeIndex:-1,hoveredFeatureId:null,hoveredEdgeIndex:-1,panStart:{x:0,y:0},isPanning:!1,visibleLayers:{area:!0,path:!0,point:!0,connector:!0},showDimensions:{area:!1,path:!1,circle:!1},showBeaconHeatmap:!1,showBeaconRangeRing:!1,measureLabels:[],currentServerProjectId:null,currentServerVersion:void 0};function Jr(){e.project.floorplanImages||(e.project.floorplanImages={});const t=Object.keys(e.project.floorplanImages);t.length===0&&(e.project.floorplanImages[ze]=null),e.activeFloorId||(e.activeFloorId=t.length>0?t[0]:ze)}const Ke=[];let Ie=-1;function N(){Ie<Ke.length-1&&Ke.splice(Ie+1),Ke.push(JSON.parse(JSON.stringify(e.project))),Ie++;try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}}function sr(){Ie>0&&(Ie--,Ae(JSON.parse(JSON.stringify(Ke[Ie]))))}function lr(){Ie<Ke.length-1&&(Ie++,Ae(JSON.parse(JSON.stringify(Ke[Ie]))))}function No(){Ke.length=0,Ie=-1}function fs(){Yr(!1),document.getElementById("mode-area")?.click(),Ze()}function Yr(t=!0,o){if(t&&!confirm(a("alert_newProjectConfirm")))return;e.project.type="FeatureCollection",e.project.features=[],e.project.properties={projectName:a("unnamedProject"),elementTypeStyles:{}};const n=o&&o.trim()!==""?o.trim():ze;e.project.floorplanImages={[n]:null};const s=document.getElementById("projectName");s&&(s.value=e.project.properties.projectName),e.cachedFloorPlanImages={},e.selectedFeatureIds=[],No(),e.activeFloorId=n,Jr(),N(),le(),Oe(),$(),Ze(),G()}function ar(t,o=!0){if(!t||t.trim()===""){alert("Der Etagenname darf nicht leer sein.");return}const n=t.trim();if(Ce().includes(n)){alert(a("alert_floorNameExists"));return}e.activeFloorId=n,e.selectedFeatureIds=[],e.project.floorplanImages||(e.project.floorplanImages={}),e.project.floorplanImages[e.activeFloorId]=null,o&&N(),le(),Oe(),$(),G()}function cr(t){const o=e.activeFloorId;if(!o){alert(a("alert_noActiveFloor"));return}const n=t.trim();if(!n||n===o)return;if(Ce().filter(r=>r!==o).includes(n)){alert(a("alert_floorNameExists"));return}e.project.features.forEach(r=>{r.properties.floor===o&&(r.properties.floor=n)}),e.project.floorplanImages&&Object.prototype.hasOwnProperty.call(e.project.floorplanImages,o)&&(e.project.floorplanImages[n]=e.project.floorplanImages[o],delete e.project.floorplanImages[o]),Object.prototype.hasOwnProperty.call(e.cachedFloorPlanImages,o)&&(e.cachedFloorPlanImages[n]=e.cachedFloorPlanImages[o],delete e.cachedFloorPlanImages[o]),e.activeFloorId=n,N(),le(),Oe(),$(),G()}function Ne(t,o){e.project.features.push({type:"Feature",geometry:t,properties:o}),N(),Oe(),$(),G()}async function Tn(){if(e.selectedFeatureIds.length===0)return;const t=e.selectedFeatureIds.length>1?a("confirm_deleteElement_multi",void 0,e.selectedFeatureIds.length):a("confirm_deleteElement_single");if(await Ee(t)){e.project.features=e.project.features.filter(s=>!e.selectedFeatureIds.includes(s.properties.id)),e.selectedFeatureIds=[];const n=document.getElementById("deleteBtn");n&&(n.disabled=!0),N(),Oe(),$(),G()}}function Xr(t,o){const n=8/e.scale;for(let s=0;s<o.coordinates.length-1;s++){const r={x:o.coordinates[s][0],y:o.coordinates[s][1]},i={x:o.coordinates[s+1][0],y:o.coordinates[s+1][1]},l=i.x-r.x,c=i.y-r.y;if(l===0&&c===0)continue;const d=((t.x-r.x)*l+(t.y-r.y)*c)/(l*l+c*c),m=d<0?r:d>1?i:{x:r.x+d*l,y:r.y+d*c};if(Math.sqrt((t.x-m.x)**2+(t.y-m.y)**2)<n)return!0}return!1}function ye(t){const o=e.project.features.filter(n=>n.properties.floor===e.activeFloorId&&!n.properties.isPlaceholder);for(const n of[...o].reverse()){if(n.geometry.type==="Polygon"&&ge(t,n.geometry))return n;if(n.geometry.type==="Point"||n.properties.type==="connector"){const[s,r]=n.geometry.coordinates;if(Math.sqrt((t.x-s)**2+(t.y-r)**2)*e.scale<15)return n}if(n.geometry.type==="LineString"&&Xr(t,n.geometry))return n}return null}function qt(t){if(!e.activeFloorId){alert(a("alert_noActiveFloor"));return}const o=document.getElementById("element-type-select");let n=o?.value||"";const s=pe();let r=s[n];if(!r){const b=t.type==="Polygon"?"area":t.type==="Point"?"point":null;if(b){const h=Object.keys(s).find(v=>s[v].baseType===b);h&&(n=h,r=s[h],o&&o.querySelector(`option[value="${h}"]`)&&(o.value=h))}if(!r)return}const i=r.baseType,l=r.label,c=e.project.features.filter(b=>b.properties.subType===n).length+1,d=`${l} ${c}`,m={id:`feat_${Date.now()}`,floor:e.activeFloorId,type:i==="area"?"area":"point",subType:n,label:d};if(i==="point"&&["treppe","aufzug"].includes(n)?m.type="connector":t.type==="LineString"&&(m.type="path"),Ne(t,m),m.type==="connector"){const b=Ce(),h=e.activeFloorId,v=b.find(S=>S!==h)||null;if(v){const S=`Soll ich das Gegenstück in ${v} automatisch erstellen?`;Ee(S).then(g=>{if(g&&t.type==="Point"){const E=t.coordinates.slice(),I={id:`feat_${Date.now()}_link`,floor:v,type:"connector",subType:n,label:d,linksTo:{floor:h,connectorId:m.id}};Ne({type:"Point",coordinates:E},I)}})}}}function bs(t){if(!e.tempShape)e.tempShape={start:t};else{const{start:o}=e.tempShape,n=Math.min(o.x,t.x),s=Math.min(o.y,t.y),r=Math.abs(t.x-o.x),i=Math.abs(t.y-o.y);if(r<e.gridSize/2||i<e.gridSize/2){e.tempShape=null;return}const l=[[[n,s],[n+r,s],[n+r,s+i],[n,s+i],[n,s]]];qt({type:"Polygon",coordinates:l}),e.tempShape=null}}function vs(t){if(!e.tempShape)e.tempShape={start:t};else{const o=e.tempShape.start,n=Math.abs(t.x-o.x),s=Math.abs(t.y-o.y),r=Math.max(n,s),i=Math.min(o.x,t.x),l=Math.min(o.y,t.y);if(r<e.gridSize/2){e.tempShape=null;return}const c=[[[i,l],[i+r,l],[i+r,l+r],[i,l+r],[i,l]]];qt({type:"Polygon",coordinates:c}),e.tempShape=null}}function xs(t){if(!e.tempShape)e.tempShape={start:t};else{const o=e.tempShape.start,n=Math.sqrt((t.x-o.x)**2+(t.y-o.y)**2);if(n<2){e.tempShape=null;return}const s=64,r=Array.from({length:s},(i,l)=>{const c=l/s*2*Math.PI;return[o.x+n*Math.cos(c),o.y+n*Math.sin(c)]});r.push(r[0]),qt({type:"Polygon",coordinates:[r]}),e.tempShape=null}}function Es(t){if(!e.tempShape)e.tempShape={start:t};else{const o=[[e.tempShape.start.x,e.tempShape.start.y],[t.x,t.y]],n={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"line",label:a("lineLabel")};Ne({type:"LineString",coordinates:o},n),e.currentMode="select",document.getElementById("mode-select")?.classList.add("active"),document.getElementById("mode-line")?.classList.remove("active"),e.tempShape=null}}function ws(t){e.tempShape?e.tempShape.nodes.push(t):e.tempShape={nodes:[t]}}function Ss(t){qt({type:"Point",coordinates:[t.x,t.y]})}function Is(t){if(!e.tempShape)e.tempShape={start:t};else if(!e.tempShape.end)e.tempShape.end=t;else{const o=e.tempShape.start,n=e.tempShape.end,r=Do(o,n,t),i=Rt(o,n,r),l={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"arc",label:a("arcLabel"),controlPoints:{p0:o,p1:r,p2:n}};Ne({type:"LineString",coordinates:i},l),e.tempShape=null}}function ks(){if(!e.activeFloorId||!e.tempShape?.nodes||e.tempShape.nodes.length<3){e.tempShape=null;return}const t=[...e.tempShape.nodes.map(o=>[o.x,o.y]),[e.tempShape.nodes[0].x,e.tempShape.nodes[0].y]];qt({type:"Polygon",coordinates:[t]}),document.getElementById("mode-select")?.click(),e.tempShape=null}function Ps(t){const o=e.selectedFeatureIds.find(g=>{const E=e.project.features.find(I=>I.properties.id===g);return E&&E.geometry.type==="Polygon"&&E.properties.type==="area"})||null;let n=o?e.project.features.find(g=>g.properties.id===o):null;if(n||(n=e.project.features.find(g=>g.properties.floor===e.activeFloorId&&g.properties.type==="area"&&g.geometry.type==="Polygon")),!n)return;const s=n.geometry,r=Wt(t,s);if(r.index===-1)return;const i=Wi(t,s,r.index);if(!e.tempShape){e.tempShape={start:i,edgeIndex:r.index};return}if(e.tempShape.edgeIndex!==r.index){e.tempShape={start:i,edgeIndex:r.index};return}const l=e.tempShape.start,c=i,d=[[l.x,l.y],[c.x,c.y]],m=c.x-l.x,b=c.y-l.y,h=Math.sqrt(m*m+b*b),v=Math.round(h*e.metersPerPixel*100)/100,S={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"door",label:a("doorLabel"),attachedTo:n.properties.id,door_length_m:v,door_edge_index:e.tempShape.edgeIndex};Ne({type:"LineString",coordinates:d},S),e.currentMode="select",document.getElementById("mode-select")?.classList.add("active"),document.getElementById("mode-door")?.classList.remove("active"),e.tempShape=null}function Bs(t){const n=[...t.coordinates[0]];if(n.length<4)return!1;const s=n[0],r=n[n.length-1];(Math.abs(s[0]-r[0])>1e-4||Math.abs(s[1]-r[1])>1e-4)&&n.push([s[0],s[1]]);for(let i=0;i<n.length-1;i++){const l=n[i],c=n[i+1],d=Math.abs(l[1]-c[1])<1e-4,m=Math.abs(l[0]-c[0])<1e-4;if(!d&&!m)return!1}return!0}function Cs(t){const n=g=>Math.round(g/1e-4)*1e-4,s=new Map,r=new Map,i=(g,E,I)=>{const k=Math.min(E,I),M=Math.max(E,I),C=n(g);s.has(C)||s.set(C,[]),s.get(C).push({x1:n(k),x2:n(M)})},l=(g,E,I)=>{const k=Math.min(E,I),M=Math.max(E,I),C=n(g);r.has(C)||r.set(C,[]),r.get(C).push({y1:n(k),y2:n(M)})};for(const g of t){const E=g.coordinates[0];for(let I=0;I<E.length-1;I++){const k=E[I],M=E[I+1];Math.abs(k[1]-M[1])<1e-4?i(k[1],k[0],M[0]):l(k[0],k[1],M[1])}}const c=new Map,d=(g,E,I,k)=>{const M=`${n(g)},${n(E)}`,C=`${n(I)},${n(k)}`;return M<C?`${M}|${C}`:`${C}|${M}`};s.forEach((g,E)=>{const I=Array.from(new Set(g.flatMap(k=>[k.x1,k.x2]))).sort((k,M)=>k-M);for(const k of g)for(let M=0;M<I.length-1;M++){const C=I[M],D=I[M+1];if(C>=k.x1-1e-4&&D<=k.x2+1e-4){const A=d(C,E,D,E);c.set(A,(c.get(A)||0)+1)}}}),r.forEach((g,E)=>{const I=Array.from(new Set(g.flatMap(k=>[k.y1,k.y2]))).sort((k,M)=>k-M);for(const k of g)for(let M=0;M<I.length-1;M++){const C=I[M],D=I[M+1];if(C>=k.y1-1e-4&&D<=k.y2+1e-4){const A=d(E,C,E,D);c.set(A,(c.get(A)||0)+1)}}});const m=[];if(c.forEach((g,E)=>{if(g%2===1){const[I,k]=E.split("|"),[M,C]=I.split(",").map(Number),[D,A]=k.split(",").map(Number);m.push({x1:M,y1:C,x2:D,y2:A})}}),m.length===0)return[];const b=new Map;for(const g of m){const E=`${g.x1},${g.y1}`,I=`${g.x2},${g.y2}`;b.has(E)||b.set(E,[]),b.has(I)||b.set(I,[]),b.get(E).push({x:g.x2,y:g.y2}),b.get(I).push({x:g.x1,y:g.y1})}const h=new Set(m.map(g=>d(g.x1,g.y1,g.x2,g.y2))),v=[];for(;h.size>0;){const g=Array.from(h)[0].split("|")[0],[E,I]=g.split(",").map(Number),k={x:E,y:I},M=[k];let C=k,D=null;for(;;){const j=b.get(`${C.x},${C.y}`)||[];let u=null;for(const f of j){const B=d(C.x,C.y,f.x,f.y);if(h.has(B)&&(!D||f.x!==D.x||f.y!==D.y)){u=f;break}}if(!u||(h.delete(d(C.x,C.y,u.x,u.y)),D=C,C=u,M.push(C),C.x===k.x&&C.y===k.y))break}const A=M.map(j=>[j.x,j.y]);A.length>=4&&v.push(A)}if(v.length===0)return[];const S=g=>{let E=0;for(let I=0;I<g.length-1;I++){const[k,M]=g[I],[C,D]=g[I+1];E+=k*D-C*M}return Math.abs(E)/2};return v.sort((g,E)=>S(E)-S(g)),v[0]}function Ls(t){const o=[...t].sort((i,l)=>i.x===l.x?i.y-l.y:i.x-l.x),n=(i,l,c)=>(l.x-i.x)*(c.y-i.y)-(l.y-i.y)*(c.x-i.x),s=[];for(const i of o){for(;s.length>=2&&n(s[s.length-2],s[s.length-1],i)<=0;)s.pop();s.push(i)}const r=[];for(let i=o.length-1;i>=0;i--){const l=o[i];for(;r.length>=2&&n(r[r.length-2],r[r.length-1],l)<=0;)r.pop();r.push(l)}return r.pop(),s.pop(),s.concat(r)}let yt=null;function Ms(){const t=document.getElementById("file-menu-trigger"),o=document.getElementById("output-menu-trigger"),n=document.getElementById("overview-menu-trigger"),s=document.getElementById("backstage-panel"),r=document.getElementById("backstage-close-btn"),i=document.getElementById("backstage-title"),l=document.getElementById("backstage-file-content"),c=document.getElementById("backstage-output-content"),d=document.getElementById("backstage-overview-content");if(!t||!o||!n||!s){console.error("Menü-Elemente konnten nicht gefunden werden!");return}const m=h=>{l.style.display="none",c.style.display="none",d.style.display="none",h==="file"?(l.style.display="block",i.textContent=a("filePanelTitle")):h==="output"?(c.style.display="block",i.textContent=a("outputPanelTitle")):h==="overview"&&(d.style.display="block",i.textContent=a("overviewPanelTitle")),s.classList.add("visible"),document.body.classList.add("backstage-visible"),yt=h,t.classList.remove("active"),o.classList.remove("active"),n.classList.remove("active"),document.getElementById(`${h}-menu-trigger`)?.classList.add("active")},b=()=>{s.classList.remove("visible"),document.body.classList.remove("backstage-visible"),yt=null,t.classList.remove("active"),o.classList.remove("active"),n.classList.remove("active")};t.addEventListener("click",h=>{h.stopPropagation(),yt==="file"?b():m("file")}),o.addEventListener("click",h=>{h.stopPropagation(),yt==="output"?b():m("output")}),n.addEventListener("click",h=>{h.stopPropagation(),yt==="overview"?b():m("overview")}),r.addEventListener("click",b)}function we(){const t=document.getElementById("gridInfo");if(!t)return;const o=Math.round(e.gridSize),n=e.activeLanguage==="de"?"Kasten":"cell",s=e.metersPerPixel;if(s&&s>0){const r=Math.round(s*e.gridSize*100)/100,i=(e.activeLanguage==="de","m");t.textContent=`1 ${n} ≈ ${o} px · ${r} ${i}`}else t.textContent=`1 ${n} ≈ ${o} px`}function Ts(t){const o=document.getElementById("toggleGridBtn"),n=document.getElementById("toggleSnapBtn"),s=document.getElementById("gridSizeInput"),r=document.getElementById("gridMinusBtn"),i=document.getElementById("gridPlusBtn"),l=document.getElementById("gridMetersInput"),c=document.getElementById("gridMetersMinusBtn"),d=document.getElementById("gridMetersPlusBtn"),m=document.getElementById("toggleAreaDimensions"),b=document.getElementById("togglePathLengths"),h=document.getElementById("toggleCircleRadius"),v=document.getElementById("toggleBeaconRing");o&&o.addEventListener("change",()=>{e.isGridVisible=o.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.isGridVisible=e.isGridVisible,S(),t()}),n&&n.addEventListener("change",()=>{e.isSnapEnabled=n.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.isSnapEnabled=e.isSnapEnabled,S(),$()}),s&&s.addEventListener("input",()=>{const g=parseInt(s.value,10);if(!isNaN(g)&&g>=5){e.gridSize=g,e.project.properties.sizegrid=e.gridSize;const E=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=E,l&&(l.value=String(E)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,S(),$(),we(),t()}}),r&&r.addEventListener("click",()=>{const g=Math.max(5,(e.gridSize||40)-5);e.gridSize=g,e.project.properties.sizegrid=e.gridSize,s&&(s.value=String(g));const E=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=E,l&&(l.value=String(E)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,S(),$(),we(),t()}),i&&i.addEventListener("click",()=>{const g=Math.min(400,(e.gridSize||40)+5);e.gridSize=g,e.project.properties.sizegrid=e.gridSize,s&&(s.value=String(g));const E=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=E,l&&(l.value=String(E)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,S(),$(),we(),t()}),l&&l.addEventListener("input",()=>{const g=parseFloat(l.value);!isNaN(g)&&g>=.1&&(e.metersPerGridCell=Math.round(g*100)/100,e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,S(),we())}),c&&c.addEventListener("click",()=>{const g=Math.max(.1,(e.metersPerGridCell||1)-.1),E=Math.round(g*100)/100;e.metersPerGridCell=E,l&&(l.value=String(E)),e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,S(),we()}),d&&d.addEventListener("click",()=>{const g=Math.min(100,(e.metersPerGridCell||1)+.1),E=Math.round(g*100)/100;e.metersPerGridCell=E,l&&(l.value=String(E)),e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,S(),we()}),document.querySelectorAll(".layer-toggle").forEach(g=>{g.addEventListener("change",E=>{const I=E.target,k=I.dataset.layer;k&&(e.visibleLayers[k]=I.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.visibleLayers={...e.project.properties.settings.visibleLayers,[k]:I.checked},S(),t())})}),m&&m.addEventListener("change",()=>{e.showDimensions.area=m.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,area:e.showDimensions.area},S(),t()}),b&&b.addEventListener("change",()=>{e.showDimensions.path=b.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,path:e.showDimensions.path},S(),t()}),h&&h.addEventListener("change",()=>{e.showDimensions.circle=h.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,circle:e.showDimensions.circle},S(),t()}),v&&v.addEventListener("change",()=>{e.showBeaconRangeRing=v.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showBeaconRangeRing=e.showBeaconRangeRing,S(),t()}),we();function S(){try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}}}let Ve=null,Yt=null,zn=null;function Fs(t){Ve=t.contextMenu,Yt=t.ctxMenuTypeSubmenu,zn=t.ctxMenuAddOverlapPoint}function js(t,o){if(!Yt)return;Yt.innerHTML="";const n=pe(),s=t.geometry.type==="Polygon"||t.geometry.type==="Point"?n[t.properties.subType]?.baseType:null;if(s){for(const r in n)if(n[r].baseType===s){const i=document.createElement("li");i.textContent=n[r].label,i.dataset.typeKey=r,i.addEventListener("click",()=>{e.project.features.forEach(l=>{if(e.selectedFeatureIds.includes(l.properties.id)){const c=n[l.properties.subType];c&&c.baseType===s&&(l.properties.subType=r)}}),N(),G(),o()}),Yt.appendChild(i)}}}function _s(t,o,n){Ve&&(zn&&(zn.style.display=n===2?"":"none"),Ve.style.display="block",Ve.style.left=`${t}px`,Ve.style.top=`${o}px`)}function Qr(){Ve&&(Ve.style.display="none")}function Ds(){const t=e.project.features.filter(o=>e.selectedFeatureIds.includes(o.properties.id));t.length!==0&&(e.clipboard=t.map(o=>JSON.parse(JSON.stringify(o))))}function As(t){if(!e.clipboard||e.clipboard.length===0)return;const o=e.gridSize||20,n=e.clipboard.map(s=>{const r=JSON.parse(JSON.stringify(s.geometry));if(r.type==="Point"){const c=r.coordinates;r.coordinates=[c[0]+o,c[1]+o]}else if(r.type==="LineString"){const c=r.coordinates;r.coordinates=c.map(([d,m])=>[d+o,m+o])}else if(r.type==="Polygon"){const c=r.coordinates;r.coordinates=c.map(d=>d.map(([m,b])=>[m+o,b+o]))}const i=`feat_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,l=`${s.properties.label}`;return{type:"Feature",geometry:r,properties:{...s.properties,id:i,label:l,floor:e.activeFloorId}}});e.project.features.push(...n),e.selectedFeatureIds=n.map(s=>s.properties.id),N(),G(),t(),$()}let vt=null,xt=null,Nn=null,Et=null,Xt=null;function zs(t){vt=t.propertiesContent,xt=t.propertiesPlaceholder,Nn=t.propertiesLabelInput,Et=t.propertiesTypeSelect,Xt=t.propertiesIsEmptyCheckbox}function ie(){const t=document.getElementById("properties-panel");if(!vt||!xt||!Nn||!Et)return;if(e.selectedFeatureIds.length!==1){t&&(t.style.display="none"),vt.style.display="none",xt.style.display="block";return}t&&(t.style.display="block"),vt.style.display="block",xt.style.display="none";const o=e.selectedFeatureIds[0],n=e.project.features.find(P=>P.properties.id===o);if(!n){vt.style.display="none",xt.style.display="block";return}Nn.value=n.properties.label,Et.innerHTML="";const s=pe(),r=n.geometry.type==="Polygon"||n.geometry.type==="Point"?s[n.properties.subType]?.baseType:null;if(r){for(const P in s)if(s[P].baseType===r){const L=document.createElement("option");L.value=P,L.textContent=s[P].label,Et.appendChild(L)}Et.value=n.properties.subType}const i=document.getElementById("beacon-fields"),l=document.getElementById("beacon-uuid-input"),c=document.getElementById("beacon-serial-input"),d=document.getElementById("beacon-major-input"),m=document.getElementById("beacon-minor-input"),b=document.getElementById("beacon-installation-input"),h=document.getElementById("beacon-range-input"),v=document.getElementById("beacon-note-de-input"),S=document.getElementById("beacon-note-en-input");if(i){const P=n.geometry.type==="Point"&&n.properties.subType==="beacon",L=document.querySelector("#properties-panel h2");if(L&&L.childNodes[0]){const F=P?"beacon_parameters":"properties";L.childNodes[0].textContent=a(F)+" "}if(i.style.display=P?"block":"none",P){const F=document.querySelector('label[for="beacon-serial-input"]'),T=document.querySelector('label[for="beacon-installation-input"]'),_=document.querySelector('label[for="beacon-range-input"]'),H=document.querySelector('label[for="beacon-note-de-input"]');F&&(F.textContent=a("beacon_serial_label"),F.title=a("beacon_serial_desc")),T&&(T.textContent=a("beacon_installation_label"),T.title=a("beacon_installation_desc")),_&&(_.textContent=a("beacon_range_label"),_.title=a("beacon_range_desc")),H&&(H.textContent=a("beacon_note_de_label"),H.title=a("beacon_note_de_desc")),l&&(l.value=n.properties.beacon_uuid||""),c&&(c.value=n.properties.beacon_serial||""),d&&(d.value=n.properties.beacon_major?.toString()||""),m&&(m.value=n.properties.beacon_minor?.toString()||""),b&&(b.value=n.properties.beacon_installation||""),h&&(h.value=n.properties.beacon_range!==void 0?String(n.properties.beacon_range):""),v&&(v.value=n.properties.beacon_note_de||""),S&&(S.value=n.properties.beacon_note_en||"")}}const g=document.getElementById("properties-description-input"),E=document.getElementById("properties-opening-hours-input"),I=document.getElementById("properties-room-number-input"),k=document.getElementById("properties-designation-select");if(g&&(g.value=n.properties.description||""),E){const P=n.properties.opening_hours;if(!P)E.value="";else if(typeof P=="string")E.value=P;else{const L=[],F=P.weekly||{},T=Object.keys(F).map(q=>Number(q)).sort((q,X)=>q-X),_=q=>{switch(q){case 1:return a("weekdayMon");case 2:return a("weekdayTue");case 3:return a("weekdayWed");case 4:return a("weekdayThu");case 5:return a("weekdayFri");case 6:return a("weekdaySat");case 0:return a("weekdaySun");default:return""}};T.forEach(q=>{const X=F[q].map(ce=>`${ce.start}–${ce.end}`).join(", ");L.push(`${_(q)} ${X}`)});const H=P.exceptions,V=P.ranges;Array.isArray(H)&&H.length>0&&L.push(`${a("openingHoursExceptions")}: ${H.length}`),Array.isArray(V)&&V.length>0&&L.push(`${a("openingHoursRanges")}: ${V.length}`),E.value=L.join(" · ")}}I&&(I.value=n.properties.room_number||""),k&&(k.value=n.properties.designation||k.value);const M=document.querySelector('label[for="properties-description-input"]'),C=document.querySelector('label[for="properties-opening-hours-input"]'),D=document.querySelector('label[for="properties-room-number-input"]'),A=document.querySelector('label[for="properties-designation-select"]'),j=n.geometry.type!=="Point"||n.properties.subType!=="beacon";g&&(g.style.display=j?"":"none"),E&&(E.style.display=j?"":"none"),I&&(I.style.display=j?"":"none"),k&&(k.style.display=j?"":"none"),M&&(M.style.display=j?"":"none"),C&&(C.style.display=j?"":"none"),D&&(D.style.display=j?"":"none"),A&&(A.style.display=j?"":"none");const u=document.getElementById("open-opening-hours-modal-btn"),f=document.getElementById("open-occupancy-modal-btn"),B=n.properties.type==="area"&&n.geometry.type==="Polygon";if(u&&(u.style.display=B?"":"none"),f&&(f.style.display=B?"":"none"),Xt){Xt.checked=!!n.properties.isEmpty;const P=Xt.parentElement;P&&(P.style.display=B?"":"none")}}function mn(){const t=document.getElementById("mode-merge");if(!t)return;const o=t.querySelector("span"),r=e.project.features.filter(l=>l.properties.floor===e.activeFloorId).filter(l=>e.selectedFeatureIds.includes(l.properties.id)&&(l.geometry.type==="Polygon"||l.geometry.type==="LineString"&&l.properties.subType==="arc")).length,i=a("merge");o&&(o.textContent=r>0?`${i} (${r})`:i),r>=2?t.classList.add("merge-ready"):t.classList.remove("merge-ready")}let oe=null,st=null,lt=null,at=null,ct=null,$n={x:0,y:0},On={x:0,y:0},$o=!1,Oo=!1;function Ns(t){oe=t.canvas,st=t.scrollbarX,lt=t.scrollbarY,at=t.thumbX,ct=t.thumbY}function gn(t){return{x:(t.x-e.pan.x)/e.scale,y:(t.y-e.pan.y)/e.scale}}function dt(){const{scale:t,worldSize:o}=e;if(!oe||!oe.parentElement)return;const n=oe.parentElement.clientWidth,s=oe.parentElement.clientHeight,r=o.width*t,i=o.height*t;if(r<n)e.pan.x=(n-r)/2;else{const c=n-r;e.pan.x=Math.min(e.pan.x,0),e.pan.x=Math.max(e.pan.x,c)}if(i<s)e.pan.y=(s-i)/2;else{const c=s-i;e.pan.y=Math.min(e.pan.y,0),e.pan.y=Math.max(e.pan.y,c)}}function yn(){const{scale:t,pan:o,worldSize:n}=e;if(!oe||!oe.parentElement||!st||!lt||!at||!ct)return;const{clientWidth:s,clientHeight:r}=oe.parentElement,i=n.width*t,l=i>s&&s>0;if(st.style.display=l?"block":"none",l){const m=st.clientWidth,b=s/i*m,h=Math.max(b,20),v=Math.max(i-s,0),S=10,g=Math.max(m-h-2*S,0),E=v>0?-o.x/v*g:0;at.style.width=`${h}px`;const I=1,k=Math.abs(o.x-(s-i))<=I,M=Math.abs(o.x-0)<=I&&i>=s,C=k?S+g:M?S:S+Math.max(0,Math.min(E,g));at.style.left=`${C}px`}const c=n.height*t,d=c>r&&r>0;if(lt.style.display=d?"block":"none",d){const m=lt.clientHeight,b=r/c*m,h=Math.max(b,20),v=Math.max(c-r,0),S=10,g=Math.max(m-h-2*S,0),E=v>0?-o.y/v*g:0;ct.style.height=`${h}px`;const I=1,k=Math.abs(o.y-(r-c))<=I,M=Math.abs(o.y-0)<=I&&c>=r,C=k?S+g:M?S:S+Math.max(0,Math.min(E,g));ct.style.top=`${C}px`}}function $s(t){t.preventDefault(),e.isPanning=!0,e.panStart={x:t.clientX,y:t.clientY},oe&&(oe.style.cursor="grabbing")}function Os(t){if(!e.isPanning)return;const o=t.clientX-e.panStart.x,n=t.clientY-e.panStart.y;e.pan.x+=o,e.pan.y+=n,e.panStart={x:t.clientX,y:t.clientY},dt(),G(),yn()}function Hs(){!e.isPanning||!oe||(e.isPanning=!1,e.currentMode==="pan"||e.currentMode==="move-element"?oe.style.cursor="grab":e.currentMode==="select"?oe.style.cursor="default":oe.style.cursor="crosshair")}function dr(t){t.stopPropagation(),t.preventDefault(),$n={x:t.clientX,y:t.clientY},On={...e.pan},t.target===at&&($o=!0),t.target===ct&&(Oo=!0),document.addEventListener("mousemove",ei),document.addEventListener("mouseup",Rs,{once:!0})}function ei(t){if(t.preventDefault(),!(!st||!lt)){if($o){const o=t.clientX-$n.x,n=st.clientWidth,s=oe?.parentElement?.clientWidth||0,r=e.worldSize.width*e.scale,i=at?.clientWidth||0,l=Math.max(r-s,0),d=Math.max(n-i-2*10,1);if(n>0&&l>0){const m=o/d*l;e.pan.x=On.x-m}dt(),G(),yn()}if(Oo){const o=t.clientY-$n.y,n=lt.clientHeight,s=oe?.parentElement?.clientHeight||0,r=e.worldSize.height*e.scale,i=ct?.clientHeight||0,l=Math.max(r-s,0),d=Math.max(n-i-2*10,1);if(n>0&&l>0){const m=o/d*l;e.pan.y=On.y-m}dt(),G(),yn()}}}function Rs(){$o=!1,Oo=!1,document.removeEventListener("mousemove",ei)}let Le=null;function qs(t){Le=t.canvas}function Vs(t){if(e.selectedFeatureIds.length>0){e.isMovingElement=!0,e.dragStartPos=t,e.originalGeometriesOnMove.clear(),e.project.features.forEach(n=>{e.selectedFeatureIds.includes(n.properties.id)&&(e.originalGeometriesOnMove.set(n.properties.id,JSON.parse(JSON.stringify(n.geometry))),n.properties.controlPoints&&(n.properties.originalControlPoints=JSON.parse(JSON.stringify(n.properties.controlPoints))))});const o=new Set(e.selectedFeatureIds);e.project.features.forEach(n=>{const s=n.properties.attachedTo;s&&o.has(s)&&(e.originalGeometriesOnMove.has(n.properties.id)||(e.originalGeometriesOnMove.set(n.properties.id,JSON.parse(JSON.stringify(n.geometry))),n.properties.controlPoints&&(n.properties.originalControlPoints=JSON.parse(JSON.stringify(n.properties.controlPoints)))))}),Le&&(Le.style.cursor="move")}}function Gs(t){if(!e.isMovingElement||e.selectedFeatureIds.length===0)return;const o=t.x-e.dragStartPos.x,n=t.y-e.dragStartPos.y,s=(r,i,l)=>{if(Array.isArray(r)&&typeof r[0]=="number"&&r.length===2){r[0]+=i,r[1]+=l;return}r.forEach(c=>{Array.isArray(c[0])?s(c,i,l):(c[0]+=i,c[1]+=l)})};e.project.features.forEach(r=>{const i=e.originalGeometriesOnMove.get(r.properties.id);if(i){const c=JSON.parse(JSON.stringify(i));"coordinates"in c&&(s(c.coordinates,o,n),r.geometry=c)}const l=r.properties.originalControlPoints;l&&(r.properties.controlPoints={p0:{x:l.p0.x+o,y:l.p0.y+n},p1:{x:l.p1.x+o,y:l.p1.y+n},p2:{x:l.p2.x+o,y:l.p2.y+n}})}),G()}function Ws(){e.isMovingElement&&(e.isMovingElement=!1,e.originalGeometriesOnMove.clear(),e.project.features.forEach(t=>delete t.properties.originalControlPoints),Le&&(Le.style.cursor="default"),N())}function Ks(t){if(e.selectedFeatureIds.length!==1)return!1;const o=e.project.features.find(r=>r.properties.id===e.selectedFeatureIds[0]);if(!o||o.geometry.type!=="LineString"&&o.geometry.type!=="Polygon")return!1;const n=8/e.scale;let s=[];if(o.geometry.type==="LineString"&&o.properties.subType==="arc"&&o.properties.controlPoints){const{p0:r,p1:i,p2:l}=o.properties.controlPoints;s=[r,i,l]}else{const r=o.geometry.type==="LineString"?o.geometry.coordinates:o.geometry.coordinates[0];s=(o.geometry.type==="Polygon"?r.slice(0,-1):r).map(l=>({x:l[0],y:l[1]}))}for(let r=0;r<s.length;r++)if(Math.sqrt((t.x-s[r].x)**2+(t.y-s[r].y)**2)<n)return e.isEditingPath=!0,e.editedFeatureId=o.properties.id,e.editedNodeIndex=r,Le&&(Le.style.cursor="grabbing"),!0;return!1}function Us(t){if(!e.isEditingPath||!e.editedFeatureId)return;const o=e.project.features.find(s=>s.properties.id===e.editedFeatureId);if(!o)return;const n=nt(he(t));if(o.geometry.type==="LineString"&&o.properties.subType==="arc"&&o.properties.controlPoints){const s=o.properties.controlPoints;e.editedNodeIndex===0?s.p0=n:e.editedNodeIndex===1?s.p1=n:e.editedNodeIndex===2&&(s.p2=n),o.geometry.coordinates=Rt(s.p0,s.p2,s.p1)}else if(o.geometry.type==="LineString")o.geometry.coordinates[e.editedNodeIndex]=[n.x,n.y];else if(o.geometry.type==="Polygon"){const s=o.geometry.coordinates[0];s[e.editedNodeIndex]=[n.x,n.y],e.editedNodeIndex===0&&(s[s.length-1]=[n.x,n.y])}G()}function Zs(){!e.isEditingPath||!Le||(e.isEditingPath=!1,Le.style.cursor="default",N())}function Js(t,o){const n=parseInt(t.slice(1,3),16),s=parseInt(t.slice(3,5),16),r=parseInt(t.slice(5,7),16);return`rgba(${n}, ${s}, ${r}, ${o})`}let Cn=null,qe=null,Ho=null,Ro=null,_e=null,Hn=null,qo=null,ti=null,Vo=null,Go=null,ni=null,Rn=null,Qt=null,Wo=null,Ko=null,oi=null,Uo=null,Zo=null,qn=null,Vn=null,Gn=null,en=null,Wn=null,wt=null,St=null,Kn=null,It=null,kt=null,tn=null,ee=null;function Ys(t){Cn=t.typeManagerModal,qe=t.typeManagerList,Ho=t.typeManagerDetailsContent,Ro=t.typeManagerPlaceholder,_e=t.typeNameInput,Hn=t.typeEditorArea,qo=t.typeFillColorInput,ti=t.typeFillColorSwatch,Vo=t.typeFillOpacitySlider,Go=t.typeStrokeColorInput,ni=t.typeStrokeColorSwatch,Rn=t.typeEditorPoint,Qt=t.typeIconLibrary,Wo=t.typeIconColorInput,Ko=t.typeManagerDeleteBtn,oi=t.newTypeChoiceModal,Uo=t.typeFontColorInput,Zo=t.typeFontSizeInput,qn=t.typeTextStyleHeader,Vn=t.typeAreaStyleHeader,Gn=t.typePointStyleHeader,en=t.typePreviewContainer,Wn=t.typePreviewHeader,wt=t.typePreviewArea,St=t.typePreviewAreaRect,Kn=t.typePreviewAreaLabel,It=t.typePreviewPoint,kt=t.typePreviewPointIcon,tn=t.typePreviewPointLabel}function Xs(){e.styleOverrides=JSON.parse(JSON.stringify(pe())),Vt(),tl(),li(),Cn.classList.remove("hidden")}function pr(){Cn.classList.add("hidden"),ee=null,e.styleOverrides=null,Ln(void 0),G()}function Qs(){if(!e.styleOverrides)return;e.project.properties.elementTypeStyles||(e.project.properties.elementTypeStyles={});const t=e.project.properties.elementTypeStyles;Object.keys(e.styleOverrides).forEach(o=>{const n=e.styleOverrides[o];n.isDefault?delete t[o]:t[o]={label:n.label,baseType:n.baseType,fill:n.fill,stroke:n.stroke,icon:n.icon,iconColor:n.iconColor,fontSize:n.fontSize,fontColor:n.fontColor}}),Object.keys(t).forEach(o=>{e.styleOverrides[o]||delete t[o]}),N(),Ze(),$(),e.styleOverrides=null,G(),Cn.classList.add("hidden")}function Vt(){if(!e.styleOverrides||!qe)return;qe.innerHTML="";const t={},o={};for(const r in e.styleOverrides){const i=e.styleOverrides[r];i.baseType==="area"?t[r]=i:o[r]=i}const n=r=>{const i=document.createElement("li");return i.textContent=r,i.style.cssText="font-weight: bold; padding: 12px 8px 4px; color: var(--color-primary); background-color: var(--color-secondary); border-bottom: 1px solid var(--color-border);",i},s=(r,i)=>{const l=document.createElement("li");if(l.style.cssText="cursor: pointer; padding: 8px; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; gap: 8px;",i.baseType==="area"){const m=document.createElement("div");m.style.cssText=`width: 16px; height: 16px; border-radius: 4px; background-color: ${i.fill||"transparent"}; border: 1px solid ${i.stroke||"black"}; flex-shrink: 0;`,l.appendChild(m)}else if(i.baseType==="point"&&i.icon){const m="http://www.w3.org/2000/svg",b=document.createElementNS(m,"svg");b.setAttribute("viewBox","0 0 24 24"),b.style.cssText=`width: 16px; height: 16px; fill: ${i.iconColor||"black"}; flex-shrink: 0;`;const h=document.createElementNS(m,"path");h.setAttribute("d",i.icon),b.appendChild(h),l.appendChild(b)}const c=document.createElement("span"),d=i.isDefault?"":" (Cust.)";if(c.textContent=i.label+d,l.appendChild(c),l.dataset.subType=r,r===ee){l.style.backgroundColor="var(--color-accent)",l.style.color="white";const m=l.querySelector("svg");m&&(m.style.fill="white")}return l.addEventListener("click",()=>{ee=r,Vt(),ri(r)}),l};Object.keys(t).length>0&&(qe.appendChild(n(a("areasGroup"))),Object.keys(t).sort((i,l)=>t[i].label.localeCompare(t[l].label)).forEach(i=>qe.appendChild(s(i,t[i])))),Object.keys(o).length>0&&(qe.appendChild(n(a("pointsConnectorsGroup"))),Object.keys(o).sort((i,l)=>o[i].label.localeCompare(o[l].label)).forEach(i=>qe.appendChild(s(i,o[i]))))}function ri(t){if(!e.styleOverrides)return;Ro.classList.add("hidden"),Ho.classList.remove("hidden");const o=e.styleOverrides[t];if(_e.value=o.label,Zo.value=(o.fontSize||(o.baseType==="area"?14:12)).toString(),Uo.value=o.fontColor||(e.activeTheme==="dark"?"#e6e1ef":"#000000"),qn&&(qn.style.display="block"),Vn&&(Vn.style.display=o.baseType==="area"?"block":"none"),Gn&&(Gn.style.display=o.baseType==="point"?"block":"none"),o.baseType==="area"){Hn.style.display="block",Rn.style.display="none";const{hex:n,alpha:s}=ol(o.fill||"rgba(0,0,0,0.5)");qo.value=n,Vo.value=s.toString(),Go.value=o.stroke||"#000000"}else Hn.style.display="none",Rn.style.display="block",Wo.value=o.iconColor||"#34495e",document.querySelectorAll("#type-icon-library div").forEach(n=>{const s=n.querySelector("svg");s&&s.dataset.iconPath===o.icon?n.classList.add("active"):n.classList.remove("active")});si(),Ln(o),_e.disabled=!!o.isDefault,Ko.style.display=o.isDefault?"none":"block"}function ii(){if(!ee||!e.styleOverrides)return;const t=e.styleOverrides[ee];if(t.isDefault&&(t.isDefault=!1,_e.disabled=!1,Ko.style.display="block"),_e.value=_e.value.trim(),!!_e.value){t.label=_e.value,t.fontSize=parseInt(Zo.value)||(t.baseType==="area"?14:12),t.fontColor=Uo.value,t.baseType==="area"?(t.fill=Js(qo.value,parseFloat(Vo.value)),t.stroke=Go.value):t.iconColor=Wo.value,si(),Ln(t);try{Vt()}catch{}G()}}async function ur(t){if(!e.styleOverrides)return;oi.classList.add("hidden");const o=a("prompt_newFloorName"),n=a(t==="area"?"newAreaType":"newPointType"),s=await ai(o,n);if(!s||s.trim()==="")return;const r=`custom_${s.trim().toLowerCase().replace(/[^a-z0-9]/gi,"_")}_${Date.now()}`,i=e.activeTheme==="dark";t==="area"?e.styleOverrides[r]={label:s.trim(),baseType:"area",fill:"rgba(128, 128, 128, 0.5)",stroke:"#808080",fontSize:14,fontColor:i?"#e6e1ef":"#000000",isDefault:!1}:e.styleOverrides[r]={label:s.trim(),baseType:"point",icon:Fn.info,iconColor:"#34495e",fontSize:12,fontColor:i?"#e6e1ef":"#000000",isDefault:!1},ee=r,Vt(),ri(r)}async function el(){!ee||!e.styleOverrides||e.styleOverrides[ee].isDefault||!await ci(a("alert_deleteTypeConfirm",e.activeLanguage,e.styleOverrides[ee].label))||!ee||!e.styleOverrides||(delete e.styleOverrides[ee],li(),Vt(),G())}function tl(){if(Qt){Qt.innerHTML="";for(const t in Fn){const o=Fn[t],n=document.createElement("div");n.style.cssText="padding: 4px; border: 1px solid transparent; border-radius: 4px; cursor: pointer;";const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("viewBox","0 0 24 24"),s.style.width="32px",s.style.height="32px",s.style.fill="currentColor";const r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d",o),s.appendChild(r),s.dataset.iconPath=o,n.appendChild(s),n.addEventListener("click",()=>{!ee||!e.styleOverrides||(e.styleOverrides[ee].icon=o,document.querySelectorAll("#type-icon-library > div").forEach(i=>i.classList.remove("active")),n.classList.add("active"),ii())}),Qt.appendChild(n)}}}function si(){if(!ee||!e.styleOverrides)return;const t=e.styleOverrides[ee];t.baseType==="area"&&(ti.style.backgroundColor=t.fill||"transparent",ni.style.backgroundColor=t.stroke||"transparent")}function nl(){return e.activeTheme==="dark"?"#e6e1ef":"#1f2933"}function Ln(t){if(!en||!wt||!It)return;if(!t){en.classList.add("hidden"),wt.style.display="none",It.style.display="none";return}en.classList.remove("hidden"),Wn&&(Wn.textContent=a("typePreview"));const o=t.fontColor||nl(),n=t.baseType==="area"?a("previewAreaLabel"):a("previewPointLabel");if(t.baseType==="area"){if(wt.style.display="block",It.style.display="none",St){const s=t.fill||Be.default.fill,r=t.stroke||Be.default.stroke;St.style.background=s,St.style.borderColor=r,St.style.color=o}Kn&&(Kn.textContent=t.label||n)}else{wt.style.display="none",It.style.display="flex";const s=t.icon||un.default,r=t.iconColor||"#34495e";if(kt){kt.innerHTML=`<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="${s}"></path></svg>`;const i=kt.querySelector("svg"),l=kt.querySelector("path");i&&(i.style.width="36px",i.style.height="36px"),l&&(ee==="beacon"?(l.setAttribute("fill","none"),l.setAttribute("stroke",r),l.setAttribute("stroke-width","2"),l.setAttribute("stroke-linecap","round"),l.setAttribute("stroke-linejoin","round")):l.setAttribute("fill",r))}tn&&(tn.textContent=t.label||n,tn.style.color=o)}}function li(){Ro.classList.remove("hidden"),Ho.classList.add("hidden"),ee=null,Ln(void 0)}function ol(t){const o=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(!o)return{hex:"#000000",alpha:1};const n=i=>("0"+i.toString(16)).slice(-2),s=`#${n(parseInt(o[1]))}${n(parseInt(o[2]))}${n(parseInt(o[3]))}`,r=o[4]!==void 0?parseFloat(o[4]):1;return{hex:s,alpha:r}}let ai=async()=>null,ci=async()=>!1;function rl(t){ai=t.showInputPrompt,ci=t.showConfirm}function il(t){if(t.length<1)return t;const o=t[0],n=t[t.length-1];return(o[0]!==n[0]||o[1]!==n[1])&&t.push([o[0],o[1]]),t}function sl(t,o){const n=t.slice(0,-1),s=o.slice(0,-1),r=s.map((c,d)=>({a:{x:c[0],y:c[1]},b:{x:s[(d+1)%s.length][0],y:s[(d+1)%s.length][1]}})),i=[];for(let c=0;c<n.length;c++){const d={x:n[c][0],y:n[c][1]},m={x:n[(c+1)%n.length][0],y:n[(c+1)%n.length][1]},b=[];r.forEach(v=>{const S=Ao(d,m,v.a,v.b);if(S){const g=m.x-d.x,E=m.y-d.y,I=g*g+E*E,k=I===0?0:((S.x-d.x)*g+(S.y-d.y)*E)/I;k>=0&&k<=1&&b.push({t:k,p:S})}}),b.sort((v,S)=>v.t-S.t);const h=[{x:d.x,y:d.y},...b.map(v=>v.p),{x:m.x,y:m.y}];for(let v=0;v<h.length-1;v++){const S=h[v],g=h[v+1],E={x:(S.x+g.x)/2,y:(S.y+g.y)/2};ge(E,{coordinates:[o]})||(i.length===0&&i.push([S.x,S.y]),i.push([g.x,g.y]))}}const l=[];for(let c=0;c<i.length;c++){const d=l[l.length-1],m=i[c];(!d||d[0]!==m[0]||d[1]!==m[1])&&l.push(m)}return l}function di(t,o){const n=t.slice(0,-1),s=o.slice(0,-1),r=[];for(let v=0;v<n.length;v++){const S={x:n[v][0],y:n[v][1]},g={x:n[(v+1)%n.length][0],y:n[(v+1)%n.length][1]};for(let E=0;E<s.length;E++){const I={x:s[E][0],y:s[E][1]},k={x:s[(E+1)%s.length][0],y:s[(E+1)%s.length][1]},M=Ao(S,g,I,k);M&&r.push(M)}}const i={coordinates:[t]},l={coordinates:[o]};if(n.forEach(v=>{ge({x:v[0],y:v[1]},l)&&r.push({x:v[0],y:v[1]})}),s.forEach(v=>{ge({x:v[0],y:v[1]},i)&&r.push({x:v[0],y:v[1]})}),r.length===0)return null;const c=r.reduce((v,S)=>v+S.x,0)/r.length,d=r.reduce((v,S)=>v+S.y,0)/r.length,m={x:c,y:d};if(ge(m,i)&&ge(m,l))return[m.x,m.y];const h=r.find(v=>ge(v,i)&&ge(v,l));return h?[h.x,h.y]:null}function ll(t,o){const s=[t[0]];for(let i=0;i<t.length-1;i++){const l={x:t[i][0],y:t[i][1]},c={x:t[i+1][0],y:t[i+1][1]},d=c.x-l.x,m=c.y-l.y,b=Math.sqrt(d*d+m*m);if(b<1e-6)continue;const h=d/b,v=m/b,S=[];for(let I=0;I<o.length-1;I++){const k={x:o[I][0],y:o[I][1]},M={x:o[I+1][0],y:o[I+1][1]},C=M.x-k.x,D=M.y-k.y,A=d*D-m*C,j=(k.x-l.x)*m-(k.y-l.y)*d;if(Math.abs(A)<1e-6&&Math.abs(j)<1e-6){const u=(k.x-l.x)*h+(k.y-l.y)*v,f=(M.x-l.x)*h+(M.y-l.y)*v,B=Math.max(0,Math.min(u,f)),P=Math.min(b,Math.max(u,f));P-B>1e-6&&S.push({a:B,b:P})}}if(S.length===0){s.push([c.x,c.y]);continue}S.sort((I,k)=>I.a-k.a);const g=[];for(const I of S)g.length===0||I.a>g[g.length-1].b+1e-6?g.push({a:I.a,b:I.b}):g[g.length-1].b=Math.max(g[g.length-1].b,I.b);let E=0;for(const I of g){if(I.a-E>1e-6){const k=l.x+h*E,M=l.y+v*E,C=l.x+h*I.a,D=l.y+v*I.a;(s.length===0||s[s.length-1][0]!==k||s[s.length-1][1]!==M)&&s.push([k,M]),s.push([C,D])}E=Math.max(E,I.b)}if(b-E>1e-6){const I=l.x+h*E,k=l.y+v*E,M=c.x,C=c.y;(s.length===0||s[s.length-1][0]!==I||s[s.length-1][1]!==k)&&s.push([I,k]),s.push([M,C])}}const r=[];for(let i=0;i<s.length;i++){const l=r[r.length-1],c=s[i];(!l||l[0]!==c[0]||l[1]!==c[1])&&r.push(c)}return r}function pi(t,o){for(let s=0;s<t.length-1;s++){const r={x:t[s][0],y:t[s][1]},i={x:t[s+1][0],y:t[s+1][1]};for(let l=0;l<o.length-1;l++){const c={x:o[l][0],y:o[l][1]},d={x:o[l+1][0],y:o[l+1][1]},m=Ao(r,i,c,d);if(m)return[m.x,m.y];const b=i.x-r.x,h=i.y-r.y,v=d.x-c.x,S=d.y-c.y,g=b*S-h*v,E=(c.x-r.x)*h-(c.y-r.y)*b;if(Math.abs(g)<1e-6&&Math.abs(E)<1e-6){const I=Math.sqrt(b*b+h*h);if(I<1e-6)continue;const k=b/I,M=h/I,C=(c.x-r.x)*k+(c.y-r.y)*M,D=(d.x-r.x)*k+(d.y-r.y)*M,A=Math.max(0,Math.min(C,D)),j=Math.min(I,Math.max(C,D));if(j-A>1e-6){const u=(A+j)/2,f=r.x+k*u,B=r.y+M*u;return[f,B]}}}}return null}let jt=null,xe=null,se,mr,gr,Un,Zn,ui,mi,Jn,Yn,Ge,Xn,De,gi,yi,me,hi,fi,yr,hr,hn,fn,bn,Qn,vn,eo,to,fr,no,bi,vi,br,oo,ro,io,xn,so=null,lo=null,ao=null,co=null,vr,xr,Er,wr,Sr,ae,$e,zt,Nt,Ir,kr,Pr,Pt=null,_t=null,et=null,po=null,uo=null,mo=null,Bt=null,Dt=null,Ct=null,Lt=null,nn=null,on=null,rn=null,sn=null,ln=null,an=null,go=null,yo=null,ho=null,xi=null,$t=null,Mt=null,Ei=null,cn=null,dn=null,pn=null,fo=null,wi=null,Si=null,bo=null,Ii=null,ki=null,Pi=null,vo=null,Bi=null,Ci=null,Li=null,Mi=null,xo=null,Eo=null,wo=null,So,Ti,Br,Cr,Lr,Io,Mr,ko,Tr,Po,Bo,Fr,jr,_r,Co,Fi,Lo,ji,_i,En,Di,Ai,zi,Mo,Se,Jo,Yo,Ot,Ht,To,Fo,wn,Sn,In,Dr,kn,Ar,zr,Pn,Nr,$r,Bn,Xo;function al(t,o){let n;return function(){clearTimeout(n),n=window.setTimeout(t,o)}}const ht=al(G,50);function Qo(){const t=`mode-${e.currentMode}`,o=document.getElementById(t);e.tempShape&&e.currentMode!=="select"&&e.currentMode!=="pan"&&e.currentMode!=="move-element"?(document.querySelectorAll(".tool-btn").forEach(n=>n.classList.remove("has-temp-shape")),o&&o.classList.add("has-temp-shape")):document.querySelectorAll(".tool-btn").forEach(n=>n.classList.remove("has-temp-shape"))}function O(){G(),yn(),Qo(),we(),fl();const t=document.getElementById("floor3DView"),o=document.getElementById("floor3DContent");t&&t.style.display==="flex"&&o&&jt&&jt.render3DFloorStack(e.project,"floor3DContent")}function cl(t){t.preventDefault();const o=.1,n=e.scale,s={x:t.offsetX,y:t.offsetY},r=gn(s),i=t.deltaY<0?n*(1+o):n/(1+o);e.scale=Math.max(.1,Math.min(i,10)),e.pan.x=s.x-r.x*e.scale,e.pan.y=s.y-r.y*e.scale,dt(),O()}function dl(t){if(e.currentMode==="scissors"){const s=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.properties.type==="area"&&!c.properties.isPlaceholder&&c.geometry.type==="Polygon"&&ge(t,c.geometry)),r=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.geometry.type==="LineString"&&Xr(t,c.geometry));let i,l;if(e.selectedFeatureIds.length===1){const c=e.project.features.find(d=>d.properties.id===e.selectedFeatureIds[0]);c?.geometry.type==="Polygon"?(i=c,l=s.find(d=>d.properties.id!==i?.properties.id)):c?.geometry.type==="LineString"&&(i=c,l=r.find(d=>d.properties.id!==i?.properties.id))}else{i=s[0]||r[0];const c=i&&i.geometry.type==="Polygon"?s:r;l=c&&c.length>1?c[1]:void 0}if(i&&l){if(i.geometry.type==="Polygon"&&l.geometry.type==="Polygon"){const c=i.geometry.coordinates[0],d=l.geometry.coordinates[0],m=sl(c,d);if(m.length>=4){const b=di(c,d);i.geometry.coordinates[0]=il(m),b&&e.activeFloorId&&Ne({type:"Point",coordinates:b},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:a("previewPointLabel")}),N(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,O(),$();return}}else if(i.geometry.type==="LineString"&&l.geometry.type==="LineString"){const c=i.geometry.coordinates,d=l.geometry.coordinates,m=pi(c,d),b=ll(c,d);if(b.length>=2){i.geometry.coordinates=b,m&&e.activeFloorId&&Ne({type:"Point",coordinates:m},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:a("previewPointLabel")}),N(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,O(),$();return}}}else{const c=e.hoveredFeatureId||ye(t)?.properties.id||null;if(c){const d=e.project.features.find(m=>m.properties.id===c);if(d&&d.geometry.type==="Polygon"&&e.hoveredEdgeIndex!==-1){const m=d.geometry.coordinates[0],b=e.hoveredEdgeIndex+1;if(m.length>4&&b>0&&b<m.length){m.splice(b,1),m[m.length-1]=m[0],N(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,O(),$();return}}}}}if(e.currentMode==="select"&&e.isAltPressed&&e.hoveredEdgeIndex!==-1&&e.hoveredFeatureId){const s=e.project.features.find(r=>r.properties.id===e.hoveredFeatureId);if(s&&s.geometry.type==="Polygon"){const r=[t.x,t.y];s.geometry.coordinates[0].splice(e.hoveredEdgeIndex+1,0,r),N(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,O();return}}const o=he(t),n=e.currentMode==="line"||e.currentMode==="arc"||e.currentMode==="point"?nt(o):o;switch(e.currentMode){case"area":bs(n);break;case"square":vs(n);break;case"polygon":ws(n);break;case"circle":xs(n);break;case"line":Es(n);break;case"arc":Is(n);break;case"door":Ps(t);break;case"point":Ss(n);break;case"calibrate":{if(e.tempShape){if(e.tempShape.start){const s=ye(n);let r=nt(he(n));if(s&&s.properties.floor===e.activeFloorId){if(s.geometry.type==="Point"){const d=s.geometry.coordinates;r={x:d[0],y:d[1]}}else if(s.geometry.type==="LineString"){const d=s.geometry;let m=null,b=1/0;for(let h=0;h<d.coordinates.length-1;h++){const v={x:d.coordinates[h][0],y:d.coordinates[h][1]},S={x:d.coordinates[h+1][0],y:d.coordinates[h+1][1]},g=S.x-v.x,E=S.y-v.y,I=g*g+E*E;if(I===0)continue;const k=((n.x-v.x)*g+(n.y-v.y)*E)/I,M=k<0?0:k>1?1:k,C=v.x+M*g,D=v.y+M*E,A=Math.hypot(n.x-C,n.y-D);A<b&&(b=A,m={x:C,y:D})}m&&(r=m)}else if(s.geometry.type==="Polygon"){const d=s.geometry.coordinates[0];let m=null,b=1/0;for(let h=0;h<d.length-1;h++){const v={x:d[h][0],y:d[h][1]},S={x:d[h+1][0],y:d[h+1][1]},g=S.x-v.x,E=S.y-v.y,I=g*g+E*E;if(I===0)continue;const k=((n.x-v.x)*g+(n.y-v.y)*E)/I,M=k<0?0:k>1?1:k,C=v.x+M*g,D=v.y+M*E,A=Math.hypot(n.x-C,n.y-D);A<b&&(b=A,m={x:C,y:D})}m&&(r=m)}}const i=r.x-e.tempShape.start.x,l=r.y-e.tempShape.start.y,c=Math.sqrt(i*i+l*l);Pe(a("calibratePrompt")).then(d=>{const m=d?parseFloat(d):NaN;if(!Number.isNaN(m)&&m>0){const b=m/c;e.metersPerPixel=b;const h=Math.round(b*e.gridSize*100)/100;e.metersPerGridCell=h;const v=document.getElementById("gridMetersInput");v&&(v.value=String(h)),we(),O()}e.tempShape=null})}}else{const s=e.measureLabels.find(l=>n.x>=l.bx&&n.x<=l.bx+l.w&&n.y>=l.by&&n.y<=l.by+l.h);if(s){const l=s.pxLength;Pe(a("calibratePrompt")).then(c=>{const d=c?parseFloat(c):NaN;if(!Number.isNaN(d)&&d>0){const m=d/l;e.metersPerPixel=m;const b=Math.round(m*e.gridSize*100)/100;e.metersPerGridCell=b;const h=document.getElementById("gridMetersInput");h&&(h.value=String(b)),we(),O()}});break}const r=ye(n);let i=nt(he(n));if(r&&r.properties.floor===e.activeFloorId){if(r.geometry.type==="Point"){const l=r.geometry.coordinates;i={x:l[0],y:l[1]}}else if(r.geometry.type==="LineString"){const l=r.geometry;let c=null,d=1/0;for(let m=0;m<l.coordinates.length-1;m++){const b={x:l.coordinates[m][0],y:l.coordinates[m][1]},h={x:l.coordinates[m+1][0],y:l.coordinates[m+1][1]},v=h.x-b.x,S=h.y-b.y,g=v*v+S*S;if(g===0)continue;const E=((n.x-b.x)*v+(n.y-b.y)*S)/g,I=E<0?0:E>1?1:E,k=b.x+I*v,M=b.y+I*S,C=Math.hypot(n.x-k,n.y-M);C<d&&(d=C,c={x:k,y:M})}c&&(i=c)}else if(r.geometry.type==="Polygon"){const l=r.geometry.coordinates[0];let c=null,d=1/0;for(let m=0;m<l.length-1;m++){const b={x:l[m][0],y:l[m][1]},h={x:l[m+1][0],y:l[m+1][1]},v=h.x-b.x,S=h.y-b.y,g=v*v+S*S;if(g===0)continue;const E=((n.x-b.x)*v+(n.y-b.y)*S)/g,I=E<0?0:E>1?1:E,k=b.x+I*v,M=b.y+I*S,C=Math.hypot(n.x-k,n.y-M);C<d&&(d=C,c={x:k,y:M})}c&&(i=c)}}e.tempShape={start:i}}break}case"select":Ni(t);break;case"merge":{const s=ye(t);if(s){const r=s.properties.id,i=e.selectedFeatureIds.indexOf(r);i>-1?e.selectedFeatureIds.splice(i,1):e.selectedFeatureIds.push(r),De.disabled=e.selectedFeatureIds.length===0,ie(),mn(),O()}break}}Qo()}function pl(){const t=e.selectedFeatureIds.slice(),o=e.project.features.filter(h=>t.includes(h.properties.id)&&h.properties.floor===e.activeFloorId),n=o.filter(h=>h.geometry.type==="Polygon"),s=o.filter(h=>h.geometry.type==="LineString");if(n.length<1||n.length+s.length<2){alert(a("alert_selectAtLeastTwo"));return}let r=null;if(n.length>0&&s.length===0&&n.every(h=>Bs(h.geometry))){const h=Cs(n.map(v=>v.geometry));h&&h.length>=4&&(r=h)}if(!r){const h=[];for(const g of n){const E=g.geometry.coordinates[0];for(let I=0;I<E.length-1;I++)h.push({x:E[I][0],y:E[I][1]})}for(const g of s)if(g.properties.subType==="arc"&&g.properties.controlPoints){const{p0:E,p1:I,p2:k}=g.properties.controlPoints;Rt(E,k,I,24).forEach(([C,D])=>h.push({x:C,y:D}))}else g.geometry.coordinates.forEach(([I,k])=>h.push({x:I,y:k}));if(h.length<3){alert(a("alert_notEnoughPoints"));return}const v=Ls(h);if(v.length<3){alert(a("alert_notEnoughPoints"));return}const S=v.map(g=>[g.x,g.y]);S.push([v[0].x,v[0].y]),r=S}const l=pe(),c=Object.keys(l).find(h=>l[h].baseType==="area")||"raum",d=l[c]?.label||"Raum",m=e.project.features.filter(h=>h.properties.type==="area").length+1,b={type:"Feature",geometry:{type:"Polygon",coordinates:[r]},properties:{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"area",subType:c,label:`${d} ${m}`}};e.project.features.push(b),N(),O(),$()}function Ni(t){const o=ye(t),n=o?o.properties.id:null;if(e.isCtrlPressed){if(n){const s=e.selectedFeatureIds.indexOf(n);s>-1?e.selectedFeatureIds.splice(s,1):e.selectedFeatureIds.push(n)}}else e.selectedFeatureIds=n?[n]:[];De.disabled=e.selectedFeatureIds.length===0,ie(),mn(),O()}function Or(t){const o=Xn.querySelector(`option[data-type="${t}"]`);Xn.querySelectorAll("optgroup").forEach(n=>{let s=!1;n.querySelectorAll("option").forEach(r=>{r.dataset.type===t?(r.style.display="",s=!0):r.style.display="none"}),n.style.display=s?"":"none"}),o&&(o.selected=!0)}function je(){Qr()}function ul(t){t.preventDefault(),Qr();const o=gn({x:t.offsetX,y:t.offsetY}),n=ye(o);if(!n||(e.selectedFeatureIds.includes(n.properties.id)||(e.selectedFeatureIds=[n.properties.id],O(),ie()),e.selectedFeatureIds.length===0))return;js(n,()=>ie());const s=n.properties.type==="area"&&n.geometry.type==="Polygon",r=document.getElementById("ctx-menu-edit-contents"),i=document.getElementById("ctx-menu-edit-opening-hours"),l=document.getElementById("ctx-menu-edit-occupancy"),c=document.getElementById("ctx-menu-toggle-accessibility");r&&(r.style.display=s?"":"none"),i&&(i.style.display=s?"":"none"),l&&(l.style.display=s?"":"none"),c&&(c.style.display=s?"":"none"),_s(t.clientX,t.clientY,e.selectedFeatureIds.length)}async function ml(){if(e.selectedFeatureIds.length!==1){alert(a("alert_renameSelectOne"));return}const t=e.project.features.find(n=>n.properties.id===e.selectedFeatureIds[0]);if(!t)return;const o=await Pe(a("prompt_renameElement"),t.properties.label);o&&o.trim()!==""&&(t.properties.label=o.trim(),N(),G(),ie(),$())}function Hr(){const t=[],o=e.gridSize||20,n=e.project.features.filter(s=>e.selectedFeatureIds.includes(s.properties.id));n.length!==0&&(n.forEach(s=>{const r=`feat_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,i=`${s.properties.label} - Kopie`,l=JSON.parse(JSON.stringify(s.geometry)),c=m=>{m.forEach(b=>{Array.isArray(b[0])?c(b):(b[0]+=o,b[1]+=o)})};"coordinates"in l&&c(l.coordinates);const d={type:"Feature",properties:{...s.properties,id:r,label:i},geometry:l};t.push(d)}),e.project.features.push(...t),e.selectedFeatureIds=t.map(s=>s.properties.id),N(),O(),ie(),$())}function gl(){Ds()}function yl(){if(!e.activeFloorId)return;if(e.selectedFeatureIds.length!==2){alert(a("alert_selectTwo"));return}const[t,o]=e.selectedFeatureIds,n=e.project.features.find(i=>i.properties.id===t),s=e.project.features.find(i=>i.properties.id===o);if(!n||!s)return;if(n.properties.floor!==e.activeFloorId||s.properties.floor!==e.activeFloorId){alert(a("alert_sameFloor"));return}let r=null;if(n.geometry.type==="Polygon"&&s.geometry.type==="Polygon"){const i=n.geometry.coordinates[0],l=s.geometry.coordinates[0];r=di(i,l)}else n.geometry.type==="LineString"&&s.geometry.type==="LineString"&&(r=pi(n.geometry.coordinates,s.geometry.coordinates));if(!r){alert(a("alert_noOverlap"));return}Ne({type:"Point",coordinates:r},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:a("previewPointLabel")}),N(),$(),G()}function hl(){As(()=>ie())}function Rr(){e.selectedFeatureIds.length!==0&&(e.project.features.forEach(t=>{if(e.selectedFeatureIds.includes(t.properties.id)&&t.properties.type==="area"&&t.geometry.type==="Polygon"&&!t.properties.isEmpty){const o=!!t.properties.isAccessible;t.properties.isAccessible=!o}}),N(),$(),O())}function fl(){const t=e.project.features.some(n=>e.selectedFeatureIds.includes(n.properties.id)&&n.properties.type==="area"&&n.geometry.type==="Polygon"&&!n.properties.isEmpty),o=document.getElementById("ctx-menu-toggle-accessibility");o&&(o.style.display=t?"":"none"),$t&&($t.disabled=!t)}function jo(t){_t&&(_t.innerHTML="",t.forEach((o,n)=>{const s=document.createElement("div");s.style.display="flex",s.style.alignItems="center",s.style.gap="0.5rem",s.style.margin="0.25rem 0";const r=document.createElement("input");r.type="text",r.value=o,r.style.flex="1",r.addEventListener("input",()=>{t[n]=r.value});const i=document.createElement("button");i.textContent="×",i.className="mini-btn",i.addEventListener("click",()=>{t.splice(n,1),jo(t)}),s.appendChild(r),s.appendChild(i),_t.appendChild(s)}))}function bl(){if(!Pt||!_t)return;const t=e.project.features.filter(r=>e.selectedFeatureIds.includes(r.properties.id));if(t.length!==1){ae&&$e&&($e.textContent=a("alert_renameSelectOne"),ae.classList.remove("hidden"),zt?.addEventListener("click",()=>ae.classList.add("hidden")),Nt?.addEventListener("click",()=>ae.classList.add("hidden")));return}const o=t[0],n=Array.isArray(o.properties.contents)?[...o.properties.contents]:[];jo(n),Pt.classList.remove("hidden");const s=()=>{if(!et)return;const r=et.value.trim();r!==""&&(n.push(r),et.value="",jo(n))};po&&(po.onclick=s),et&&(et.onkeydown=r=>{r.key==="Enter"&&s()}),uo&&(uo.onclick=()=>{o.properties.contents=n.filter(r=>r.trim()!==""),N(),$(),Pt?.classList.add("hidden"),O()}),mo&&(mo.onclick=()=>{Pt?.classList.add("hidden")})}function er(t){switch(t){case 1:return a("weekdayMon");case 2:return a("weekdayTue");case 3:return a("weekdayWed");case 4:return a("weekdayThu");case 5:return a("weekdayFri");case 6:return a("weekdaySat");case 0:return a("weekdaySun");default:return""}}function _o(t){Dt&&(Dt.innerHTML="",t.forEach((o,n)=>{const s=document.createElement("div");s.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const r=document.createElement("span");r.textContent=o.name?String(o.name):"",r.style.fontWeight="600";const i=document.createElement("span");if(typeof o.weekday=="number"){const m=er(o.weekday);i.textContent=m}else o.date?i.textContent=o.date:o.startDate&&o.endDate?i.textContent=`${o.startDate}–${o.endDate}`:i.textContent="";const l=document.createElement("span");o.start&&o.end&&(l.textContent=`${o.start}–${o.end}`);const c=document.createElement("span");c.textContent=o.note||"",c.style.flex="1";const d=document.createElement("button");d.textContent="×",d.className="mini-btn",d.addEventListener("click",()=>{t.splice(n,1),_o(t)}),o.name&&s.appendChild(r),s.appendChild(i),s.appendChild(l),s.appendChild(c),s.appendChild(d),Dt.appendChild(s)}))}function qr(){if(!Bt||!Dt)return;const t=e.project.features.filter(i=>e.selectedFeatureIds.includes(i.properties.id));if(t.length!==1){ae&&$e&&($e.textContent=a("alert_renameSelectOne"),ae.classList.remove("hidden"),zt?.addEventListener("click",()=>ae.classList.add("hidden")),Nt?.addEventListener("click",()=>ae.classList.add("hidden")));return}const o=t[0],n=Array.isArray(o.properties.occupancy)?JSON.parse(JSON.stringify(o.properties.occupancy)):[];_o(n),Bt.classList.remove("hidden");const s=()=>{const i=Ct?.value||"date",l=i==="weekday",c=i==="date",d=i==="range";Lt&&(Lt.style.display=l?"":"none");const m=document.getElementById("occupancy-weekday-label");m&&(m.style.display=l?"":"none"),nn&&(nn.style.display=c?"":"none");const b=document.getElementById("occupancy-date-label");b&&(b.style.display=c?"":"none"),sn&&(sn.style.display=d?"":"none"),ln&&(ln.style.display=d?"":"none");const h=document.getElementById("occupancy-range-start-label");h&&(h.style.display=d?"":"none");const v=document.getElementById("occupancy-range-end-label");v&&(v.style.display=d?"":"none"),on&&(on.style.display=l||c||d?"":"none"),rn&&(rn.style.display=l||c||d?"":"none");const S=document.getElementById("occupancy-start-label");S&&(S.style.display=l||c||d?"":"none");const g=document.getElementById("occupancy-end-label");g&&(g.style.display=l||c||d?"":"none")};s(),Ct&&(Ct.onchange=s);const r=()=>{const i=Ct?.value||"date",l=on?.value||"",c=rn?.value||"",d=an?.value||"",m=o.properties.label||"";if(i==="weekday"){const b=Lt?.value?parseInt(Lt.value,10):NaN;if(isNaN(b)||!l||!c)return;n.push({name:m,weekday:b,start:l,end:c,note:d})}else if(i==="date"){const b=nn?.value||"";if(!b||!l||!c)return;n.push({name:m,date:b,start:l,end:c,note:d})}else if(i==="range"){const b=sn?.value||"",h=ln?.value||"";if(!b||!h)return;n.push({name:m,startDate:b,endDate:h,start:l||void 0,end:c||void 0,note:d})}an&&(an.value=""),_o(n)};go&&(go.onclick=r),yo&&(yo.onclick=()=>{o.properties.occupancy=n,N(),$(),Bt?.classList.add("hidden"),O()}),ho&&(ho.onclick=()=>{Bt?.classList.add("hidden")})}function We(t){if(cn&&(cn.innerHTML="",t.weekly&&Object.keys(t.weekly).forEach(o=>{const n=t.weekly[o];n.forEach((s,r)=>{const i=document.createElement("div");i.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const l=document.createElement("span");l.textContent=`${er(Number(o))}`;const c=document.createElement("span");c.textContent=`${s.start}–${s.end}`;const d=document.createElement("button");d.textContent="×",d.className="mini-btn",d.addEventListener("click",()=>{n.splice(r,1),n.length===0&&delete t.weekly[o],We(t)}),i.appendChild(l),i.appendChild(c),i.appendChild(d),cn.appendChild(i)})})),dn){dn.innerHTML="";const o=Array.isArray(t.exceptions)?t.exceptions:[];o.forEach((n,s)=>{const r=document.createElement("div");r.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const i=document.createElement("span");i.textContent=n.date;const l=document.createElement("span");n.start&&n.end&&(l.textContent=`${n.start}–${n.end}`);const c=document.createElement("button");c.textContent="×",c.className="mini-btn",c.addEventListener("click",()=>{o.splice(s,1),t.exceptions=o,We(t)}),r.appendChild(i),r.appendChild(l),r.appendChild(c),dn.appendChild(r)})}if(pn){pn.innerHTML="";const o=Array.isArray(t.ranges)?t.ranges:[];o.forEach((n,s)=>{const r=document.createElement("div");r.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const i=document.createElement("span");i.textContent=`${n.startDate}–${n.endDate}`;const l=document.createElement("span");n.start&&n.end&&(l.textContent=`${n.start}–${n.end}`);const c=document.createElement("button");c.textContent="×",c.className="mini-btn",c.addEventListener("click",()=>{o.splice(s,1),t.ranges=o,We(t)}),r.appendChild(i),r.appendChild(l),r.appendChild(c),pn.appendChild(r)})}}function vl(t){const o=[];return t.weekly&&Object.keys(t.weekly).map(s=>Number(s)).sort((s,r)=>s-r).forEach(s=>{const r=er(s),i=t.weekly[s].map(l=>`${l.start}–${l.end}`).join(", ");o.push(`${r} ${i}`)}),Array.isArray(t.exceptions)&&t.exceptions.length>0&&o.push(`${a("openingHoursExceptions")}: ${t.exceptions.length}`),Array.isArray(t.ranges)&&t.ranges.length>0&&o.push(`${a("openingHoursRanges")}: ${t.ranges.length}`),o.join(" · ")}function Vr(){if(!Mt)return;const t=e.project.features.filter(r=>e.selectedFeatureIds.includes(r.properties.id));if(t.length!==1){ae&&$e&&($e.textContent=a("alert_renameSelectOne"),ae.classList.remove("hidden"),zt?.addEventListener("click",()=>ae.classList.add("hidden")),Nt?.addEventListener("click",()=>ae.classList.add("hidden")));return}const o=t[0];let n={};const s=o.properties.opening_hours;s&&typeof s=="object"?n=JSON.parse(JSON.stringify(s)):n={weekly:{},exceptions:[],ranges:[]},We(n),Mt.classList.remove("hidden"),bo&&(bo.onclick=()=>{const r=fo?.value?parseInt(fo.value,10):NaN,i=wi?.value||"",l=Si?.value||"";isNaN(r)||!i||!l||(n.weekly[r]||(n.weekly[r]=[]),n.weekly[r].push({start:i,end:l}),We(n))}),vo&&(vo.onclick=()=>{const r=Ii?.value||"",i=ki?.value||"",l=Pi?.value||"";r&&(n.exceptions=Array.isArray(n.exceptions)?n.exceptions:[],n.exceptions.push({date:r,start:i||void 0,end:l||void 0}),We(n))}),xo&&(xo.onclick=()=>{const r=Bi?.value||"",i=Ci?.value||"",l=Li?.value||"",c=Mi?.value||"";!r||!i||(n.ranges=Array.isArray(n.ranges)?n.ranges:[],n.ranges.push({startDate:r,endDate:i,start:l||void 0,end:c||void 0}),We(n))}),Eo&&(Eo.onclick=()=>{o.properties.opening_hours=n;const r=vl(n);vn.value=r,N(),$(),Mt?.classList.add("hidden"),O()}),wo&&(wo.onclick=()=>{Mt?.classList.add("hidden")})}function ne(){const t=document.getElementById("overview-stats-panel");if(!t)return;const o=e.project.properties.projectName||a("unnamedProject"),n=Ce(),s=n.length,r=e.project.features.filter(d=>d.properties.type==="area"&&!d.properties.isPlaceholder).length,i=e.project.features.filter(d=>d.properties.type==="point").length;let l=`<div><span>${a("stat_project")}:</span><span class="value">${o}</span></div><div><span>${a("stat_floors")}:</span><span class="value">${s}</span></div><div><span>${a("stat_areas")}:</span><span class="value">${r}</span></div><div><span>${a("stat_points")}:</span><span class="value">${i}</span></div>`;t.innerHTML=l;const c=document.getElementById("overview-floor-list");c&&(c.innerHTML="",n.forEach(d=>{const m=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder).length,b=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point").length,h=document.createElement("div");h.className="floor-block";const v=document.createElement("div");v.className="floor-card";const S=document.createElement("img");S.className="floor-thumb",e.cachedFloorPlanImages[d]&&(S.src=e.cachedFloorPlanImages[d].src,v.classList.add("has-thumb"));const g=document.createElement("div");g.className="floor-meta";const E=document.createElement("div");E.className="name",E.textContent=d;const I=document.createElement("div");I.className="counts",I.textContent=`${a("stat_areas")}: ${m} · ${a("stat_points")}: ${b}`,g.appendChild(E),g.appendChild(I),v.appendChild(S),v.appendChild(g),v.addEventListener("click",()=>{e.activeFloorId=d,le(),G()}),h.appendChild(v);const k=document.createElement("button");k.className="beacon-toggle";const M=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point"&&u.properties.subType==="beacon");k.textContent=`${a("overviewBeacons")} (${M.length})`;const C=document.createElement("div");C.className="beacon-section",k.addEventListener("click",()=>{C.style.display===""||C.style.display==="none"?(C.innerHTML="",M.forEach(f=>{const B=document.createElement("div");B.className="beacon-card";const P=document.createElement("div");P.className="beacon-meta";const L=document.createElement("div");L.className="name";const F=f.properties.beacon_serial||"",T=f.properties.label||a("point_beacon_label");L.textContent=F?`${T} · ${F}`:T;const _=document.createElement("div");_.className="counts";const H=f.properties.beacon_range,V=f.properties.beacon_note_de||f.properties.beacon_note_en||"",q=[];q.push(`${a("beacon_serial_label")}: ${F||"-"}`),typeof H=="number"&&q.push(`${a("beacon_range_label")}: ${H}`),V&&q.push(`${a("beacon_note_de_label")}: ${V}`),_.textContent=q.join(" · "),P.appendChild(L),P.appendChild(_),B.appendChild(P),B.addEventListener("click",()=>{e.activeFloorId=d,le(),G()}),C.appendChild(B)}),C.style.display="block"):(C.style.display="none",C.innerHTML="")}),h.appendChild(k),h.appendChild(C);const D=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder).sort((u,f)=>{const B=(u.properties.label||"").toLowerCase(),P=(f.properties.label||"").toLowerCase();return B.localeCompare(P)}),A=document.createElement("button");A.className="beacon-toggle",A.textContent=`${a("areas")} (${D.length})`;const j=document.createElement("div");j.className="area-section",A.addEventListener("click",()=>{if(j.style.display===""||j.style.display==="none"){const f=pe();j.innerHTML="",D.forEach(P=>{const L=document.createElement("div");L.className="area-card";const F=document.createElement("div");F.className="area-meta";const T=document.createElement("div");T.className="name";const _=P.properties.label||"";T.textContent=_;const H=document.createElement("div");H.className="counts";const V=f[P.properties.subType]?.label||P.properties.subType,q=Array.isArray(P.properties.contents)?P.properties.contents.filter(ce=>ce.trim()!==""):[],X=q.length>0?q.join(", "):"-";H.textContent=`${a("elementType")}: ${V} · ${a("roomContentsTitle")}: ${X}`,F.appendChild(T),F.appendChild(H),L.appendChild(F),L.addEventListener("click",()=>{e.activeFloorId=d,le(),G()}),j.appendChild(L)});const B=D.filter(P=>!!P.properties.isAccessible);if(B.length>0){const P=document.createElement("div");P.className="area-meta";const L=document.createElement("div");L.className="name",L.textContent=a("accessibleRoomsHeader"),P.appendChild(L),j.appendChild(P),B.forEach(F=>{const T=document.createElement("div");T.className="area-card";const _=document.createElement("div");_.className="area-meta";const H=document.createElement("div");H.className="name",H.textContent=F.properties.label||"";const V=document.createElement("div");V.className="counts",V.textContent="Barrierefrei",_.appendChild(H),_.appendChild(V),T.appendChild(_),T.addEventListener("click",()=>{e.activeFloorId=d,le(),G()}),j.appendChild(T)})}j.style.display="block"}else j.style.display="none",j.innerHTML=""}),h.appendChild(A),h.appendChild(j),c.appendChild(h)}))}function xl(){se=document.getElementById("canvas"),mr=document.getElementById("scrollbar-x"),gr=document.getElementById("scrollbar-y"),Un=document.getElementById("thumb-x"),Zn=document.getElementById("thumb-y"),ui=document.getElementById("crosshair-h"),mi=document.getElementById("crosshair-v"),Jn=document.getElementById("coordinate-display"),Yn=document.getElementById("floor-select"),Ge=document.getElementById("projectName"),Xn=document.getElementById("element-type-select"),De=document.getElementById("deleteBtn"),gi=document.getElementById("element-options"),yi=document.getElementById("corner-box"),me=document.getElementById("info-modal"),hi=document.getElementById("info-modal-close-btn"),fi=me.querySelector(".modal-overlay"),yr=document.getElementById("properties-content"),hr=document.getElementById("properties-placeholder"),hn=document.getElementById("properties-label-input"),fn=document.getElementById("properties-type-select"),bn=document.getElementById("properties-is-empty-checkbox"),Qn=document.getElementById("properties-description-input"),vn=document.getElementById("properties-opening-hours-input"),eo=document.getElementById("properties-room-number-input"),to=document.getElementById("properties-designation-select"),zs({propertiesContent:yr,propertiesPlaceholder:hr,propertiesLabelInput:hn,propertiesTypeSelect:fn,propertiesIsEmptyCheckbox:bn}),fr=document.getElementById("context-menu"),no=document.getElementById("ctx-menu-copy"),bi=document.getElementById("ctx-menu-delete"),vi=document.getElementById("ctx-menu-rename"),no=document.getElementById("ctx-menu-copy"),br=document.getElementById("ctx-menu-type-submenu"),oo=document.getElementById("ctx-floor-submenu"),ro=document.getElementById("ctx-floor-add"),io=document.getElementById("ctx-floor-rename"),xn=document.getElementById("ctx-menu-add-overlap-point"),so=document.getElementById("ctx-menu-toggle-accessibility"),lo=document.getElementById("ctx-menu-edit-contents"),vr=document.getElementById("input-prompt-modal"),xr=document.getElementById("input-prompt-label"),Er=document.getElementById("input-prompt-input"),wr=document.getElementById("input-prompt-ok"),Sr=document.getElementById("input-prompt-cancel"),ae=document.getElementById("confirm-modal"),$e=document.getElementById("confirm-message"),zt=document.getElementById("confirm-ok"),Nt=document.getElementById("confirm-cancel"),Ir=document.getElementById("loading-modal"),kr=document.getElementById("loading-message"),Pr=document.getElementById("loading-ok"),Pt=document.getElementById("room-contents-modal"),_t=document.getElementById("room-contents-list"),et=document.getElementById("room-contents-new-item"),po=document.getElementById("room-contents-add-btn"),uo=document.getElementById("room-contents-save"),mo=document.getElementById("room-contents-cancel"),$t=document.getElementById("toggleAccessibleBtn"),ao=document.getElementById("ctx-menu-edit-occupancy"),co=document.getElementById("ctx-menu-edit-opening-hours"),Bt=document.getElementById("occupancy-modal"),Dt=document.getElementById("occupancy-list"),Ct=document.getElementById("occupancy-type"),Lt=document.getElementById("occupancy-weekday"),nn=document.getElementById("occupancy-date"),on=document.getElementById("occupancy-start"),rn=document.getElementById("occupancy-end"),sn=document.getElementById("occupancy-range-start"),ln=document.getElementById("occupancy-range-end"),an=document.getElementById("occupancy-note"),go=document.getElementById("occupancy-add-btn"),yo=document.getElementById("occupancy-save"),ho=document.getElementById("occupancy-cancel"),xi=document.getElementById("open-occupancy-modal-btn"),Mt=document.getElementById("opening-hours-modal"),Ei=document.getElementById("open-opening-hours-modal-btn"),cn=document.getElementById("opening-hours-weekly-list"),dn=document.getElementById("opening-hours-exceptions-list"),pn=document.getElementById("opening-hours-ranges-list"),fo=document.getElementById("opening-hours-weekday"),wi=document.getElementById("opening-hours-start"),Si=document.getElementById("opening-hours-end"),bo=document.getElementById("opening-hours-add-rule"),Ii=document.getElementById("opening-hours-ex-date"),ki=document.getElementById("opening-hours-ex-start"),Pi=document.getElementById("opening-hours-ex-end"),vo=document.getElementById("opening-hours-add-exception"),Bi=document.getElementById("opening-hours-range-start"),Ci=document.getElementById("opening-hours-range-end"),Li=document.getElementById("opening-hours-range-time-start"),Mi=document.getElementById("opening-hours-range-time-end"),xo=document.getElementById("opening-hours-add-range"),Eo=document.getElementById("opening-hours-save"),wo=document.getElementById("opening-hours-cancel"),So=document.getElementById("type-manager-modal"),Ti=document.getElementById("type-manager-close-btn"),Br=document.getElementById("type-manager-list"),Cr=document.getElementById("type-manager-details-content"),Lr=document.getElementById("type-manager-placeholder"),Io=document.getElementById("type-name-input"),Mr=document.getElementById("type-editor-area"),ko=document.getElementById("type-fill-color-input"),Tr=document.getElementById("type-fill-color-swatch"),Po=document.getElementById("type-fill-opacity-slider"),Bo=document.getElementById("type-stroke-color-input"),Fr=document.getElementById("type-stroke-color-swatch"),jr=document.getElementById("type-editor-point"),_r=document.getElementById("type-icon-library"),Co=document.getElementById("type-icon-color-input"),Fi=document.getElementById("type-manager-new-btn"),Lo=document.getElementById("type-manager-delete-btn"),ji=document.getElementById("type-manager-save-btn"),_i=document.getElementById("manage-types-btn"),En=document.getElementById("new-type-choice-modal"),Di=document.getElementById("choose-type-area"),Ai=document.getElementById("choose-type-point"),zi=document.getElementById("new-type-choice-cancel"),Mo=document.getElementById("lang-trigger"),Se=document.getElementById("lang-menu"),Jo=document.getElementById("active-lang-display"),Yo=document.getElementById("theme-trigger"),Ot=document.getElementById("theme-icon"),Ht=document.getElementById("lang-icon"),To=document.getElementById("type-font-color-input"),Fo=document.getElementById("type-font-size-input"),wn=document.getElementById("type-text-style-header"),Sn=document.getElementById("type-area-style-header"),In=document.getElementById("type-point-style-header"),Dr=document.getElementById("type-preview"),kn=document.getElementById("type-preview-header"),Ar=document.getElementById("type-preview-area"),zr=document.getElementById("type-preview-area-rect"),Pn=document.getElementById("type-preview-area-label"),Nr=document.getElementById("type-preview-point"),$r=document.getElementById("type-preview-point-icon"),Bn=document.getElementById("type-preview-point-label"),Ns({canvas:se,scrollbarX:mr,scrollbarY:gr,thumbX:Un,thumbY:Zn}),qs({canvas:se}),Ys({typeManagerModal:So,typeManagerList:Br,typeManagerDetailsContent:Cr,typeManagerPlaceholder:Lr,typeNameInput:Io,typeEditorArea:Mr,typeFillColorInput:ko,typeFillColorSwatch:Tr,typeFillOpacitySlider:Po,typeStrokeColorInput:Bo,typeStrokeColorSwatch:Fr,typeEditorPoint:jr,typeIconLibrary:_r,typeIconColorInput:Co,typeManagerDeleteBtn:Lo,newTypeChoiceModal:En,typeFontColorInput:To,typeFontSizeInput:Fo,typeTextStyleHeader:wn,typeAreaStyleHeader:Sn,typePointStyleHeader:In,typePreviewContainer:Dr,typePreviewHeader:kn,typePreviewArea:Ar,typePreviewAreaRect:zr,typePreviewAreaLabel:Pn,typePreviewPoint:Nr,typePreviewPointIcon:$r,typePreviewPointLabel:Bn}),rl({showInputPrompt:Pe,showConfirm:Ee}),Xo=document.getElementById("renameFloorBtn"),cs({inputPromptModal:vr,inputPromptLabel:xr,inputPromptInput:Er,inputPromptOk:wr,inputPromptCancel:Sr,confirmModal:ae,confirmMessage:$e,confirmOk:zt,confirmCancel:Nt,loadingModal:Ir,loadingMessage:kr,loadingOk:Pr}),Fs({contextMenu:fr,ctxMenuTypeSubmenu:br,ctxMenuAddOverlapPoint:xn}),wl()}function $i(){document.getElementById("backstage-close-btn").title=a("backToApp");const t=document.getElementById("backstage-panel");if(t&&t.classList.contains("visible")){const y=document.getElementById("backstage-title");if(y){const w=document.querySelector(".main-menu button.active")?.id.replace("-menu-trigger","");w==="file"?y.textContent=a("filePanelTitle"):w==="output"?y.textContent=a("outputPanelTitle"):w==="overview"&&(y.textContent=a("overviewPanelTitle"))}}{const w=document.getElementById("newProjectBtn")?.querySelector("span");w&&(w.textContent=a("newProject"))}{const w=document.getElementById("loadProjectBtn")?.querySelector("span");w&&(w.textContent=a("loadProject"))}{const w=document.getElementById("saveProjectBtn")?.querySelector("span");w&&(w.textContent=a("saveProject"))}{const w=document.getElementById("loadProjectFromServerBtn")?.querySelector("span");w&&(w.textContent=a("loadFromServer"))}{const w=document.getElementById("saveProjectToServerBtn")?.querySelector("span");w&&(w.textContent=a("saveToServer"))}{const y=document.getElementById("serverProjectLabel");y&&(y.textContent=a("serverProject"));const w=document.getElementById("serverVersionLabel");w&&(w.textContent=a("serverVersion"));const W=document.getElementById("serverProjectAddBtn"),z=W?.querySelector("span");z&&(z.textContent=a("add")),W&&W.setAttribute("title",a("add"));const R=document.getElementById("serverProjectDeleteBtn"),Z=R?.querySelector("span");Z&&(Z.textContent=a("deleteAction")),R&&R.setAttribute("title",a("deleteAction"));const K=document.getElementById("serverRefreshBtn");K&&(K.title=a("refresh"));const U=document.getElementById("serverVersionRefreshBtn");U&&(U.title=a("refresh"));const Me=document.getElementById("serverLoadBtn")?.querySelector("span");Me&&(Me.textContent=a("load"));const Te=document.getElementById("serverLoadLatestBtn")?.querySelector("span");Te&&(Te.textContent=a("latestVersion"));const Fe=document.getElementById("serverSavePanelBtn")?.querySelector("span");Fe&&(Fe.textContent=a("save"));const ke=document.getElementById("serverVersionAddBtn"),ut=ke?.querySelector("span");ut&&(ut.textContent=a("add")),ke&&ke.setAttribute("title",a("add"));const Xe=document.getElementById("serverVersionDeleteBtn"),mt=Xe?.querySelector("span");mt&&(mt.textContent=a("deleteAction")),Xe&&Xe.setAttribute("title",a("deleteAction"))}{const w=document.getElementById("Einleitung")?.querySelector("span");w&&(w.textContent=a("introduction"))}{const w=document.getElementById("exportGeoJsonBtn")?.querySelector("span");w&&(w.textContent=a("exportGeoJson"))}{const y=document.querySelector('.sponsor-display p[data-i18n="sponsoredByMinew"]');y&&(y.textContent=a("sponsoredByMinew"));const w=document.querySelector('.sponsor-display p[data-i18n="supportedByPalfinger"]');w&&(w.textContent=a("supportedByPalfinger"));const W=document.querySelector('.sponsor-footer p[data-i18n="sponsoredByMinew"]');W&&(W.textContent=a("sponsoredByMinew"))}{const y=document.getElementById("imprintBtn"),w=y?.querySelector('span[data-i18n="imprint"]');w&&(w.textContent=a("imprint")),y&&y.setAttribute("title",a("imprint"))}{const y=document.getElementById("contactBtn"),w=y?.querySelector('span[data-i18n="contact"]');w&&(w.textContent=a("contact")),y&&y.setAttribute("title",a("contact"))}{const y=document.getElementById("privacyBtn"),w=y?.querySelector('span[data-i18n="privacy"]');w&&(w.textContent=a("privacy")),y&&y.setAttribute("title",a("privacy"))}{const y=document.getElementById("sponsorsBtn"),w=y?.querySelector('span[data-i18n="sponsorsButtonTitle"]');w&&(w.textContent=a("sponsorsButtonTitle")),y&&y.setAttribute("title",a("sponsorsButtonTitle"))}const o=document.getElementById("showGeoJsonBtn"),n=document.getElementById("live-geojson-output"),s=n?n.style.display==="block":!1;{const y=o?.querySelector("span");y&&(y.textContent=a(s?"hideCode":"showLiveCode"))}const r=document.querySelector(".toolbar-section:nth-child(1) h2");r?.childNodes[0]&&(r.childNodes[0].textContent=a("project")+" ");const i=document.getElementById("projectName");{const y=i?.parentElement?.querySelector("label");y&&(y.textContent=a("projectName"))}i&&(i.placeholder=a("enterProjectName"));const l=document.querySelector(".toolbar-section:nth-child(2) h2");l?.childNodes[0]&&(l.childNodes[0].textContent=a("edit")+" ");{const w=document.getElementById("undoBtn")?.querySelector("span");w&&(w.textContent=a("undo"))}{const w=document.getElementById("redoBtn")?.querySelector("span");w&&(w.textContent=a("redo"))}const c=document.querySelector(".toolbar-section:nth-child(3) h2");c?.childNodes[0]&&(c.childNodes[0].textContent=a("floors")+" ");{const w=document.getElementById("floor-select")?.parentElement?.querySelector("label");w&&(w.textContent=a("currentFloor"))}{const w=document.getElementById("addFloorBtn")?.querySelector("span");w&&(w.textContent=a("newFloor"))}{const y=Xo?.querySelector("span");y&&(y.textContent=a("rename"))}const d=document.querySelector("#floor-select + .button-group button:nth-child(3)");d&&(d.querySelector("span").textContent=a("floorplan"));const m=document.querySelector(".toolbar-section:nth-child(4) h2");m?.childNodes[0]&&(m.childNodes[0].textContent=a("tools")+" ");{const w=document.getElementById("mode-pan")?.querySelector("span");w&&(w.textContent=a("pan"))}{const w=document.getElementById("mode-select")?.querySelector("span");w&&(w.textContent=a("select"))}{const w=document.getElementById("mode-move-element")?.querySelector("span");w&&(w.textContent=a("moveElement"))}{const w=document.getElementById("mode-calibrate")?.querySelector("span");w&&(w.textContent=a("calibrateScale"))}{const y=document.getElementById("mode-merge");if(y){const w=y.querySelector("span");w&&(w.textContent=a("merge"))}}{const w=document.getElementById("deleteBtn")?.querySelector("span");w&&(w.textContent=a("delete"))}{const y=document.querySelectorAll(".tool-buttons .toolbar-separator");y[0]&&(y[0].textContent=a("areas")),y[1]&&(y[1].textContent=a("linesAndPoints"))}{const w=document.getElementById("mode-area")?.querySelector("span");w&&(w.textContent=a("rectangle"))}{const w=document.getElementById("mode-square")?.querySelector("span");w&&(w.textContent=a("square"))}{const w=document.getElementById("mode-polygon")?.querySelector("span");w&&(w.textContent=a("polygon"))}if(oo){const y=oo.parentElement;y&&y.childNodes[0]&&(y.childNodes[0].textContent=a("floors"));const w=document.getElementById("ctx-floor-add");w&&(w.textContent=a("newFloor"));const W=document.getElementById("ctx-floor-rename");W&&(W.textContent=a("renameFloor"))}{const y=document.getElementById("ctx-menu-toggle-accessibility");y&&(y.textContent=a("toggleAccessibility"))}{const y=document.getElementById("ctx-menu-edit-contents");y&&(y.textContent=a("editRoomContents"))}{const y=document.getElementById("ctx-menu-edit-occupancy");y&&(y.textContent=a("occupancyEdit"));const w=document.getElementById("ctx-menu-edit-opening-hours");w&&(w.textContent=a("openingHoursEdit"))}{const w=document.getElementById("mode-circle")?.querySelector("span");w&&(w.textContent=a("circle"))}{const w=document.getElementById("mode-line")?.querySelector("span");w&&(w.textContent=a("line"))}{const w=document.getElementById("mode-line")?.querySelector("span");w&&(w.textContent=a("line"))}{const w=document.getElementById("mode-door")?.querySelector("span");w&&(w.textContent=a("door"))}{const w=document.getElementById("mode-arc")?.querySelector("span");w&&(w.textContent=a("arc"))}{const w=document.getElementById("mode-point")?.querySelector("span");w&&(w.textContent=a("point"))}{const w=document.getElementById("mode-area")?.querySelector("span");w&&(w.textContent=a("rectangle"))}{const w=document.getElementById("mode-square")?.querySelector("span");w&&(w.textContent=a("square"))}{const w=document.getElementById("element-type-select")?.parentElement?.querySelector("label");w&&(w.textContent=a("elementType"))}{const w=document.getElementById("manage-types-btn")?.querySelector("span");w&&(w.textContent=a("manageTypes"))}{const w=document.getElementById("copyBtn")?.querySelector("span");w&&(w.textContent=a("copy"))}{const w=document.getElementById("toggleAccessibleBtn")?.querySelector("span");w&&(w.textContent=a("accessible"))}{const y=document.getElementById("simulateSignalBtn"),w=y?.querySelector("span");w&&(w.textContent=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal")),y&&(y.classList.toggle("active",e.showBeaconHeatmap),y.setAttribute("aria-pressed",e.showBeaconHeatmap?"true":"false"),y.title=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal"))}const b=document.querySelector("#properties-panel h2");b?.childNodes[0]&&(b.childNodes[0].textContent=a("properties")+" ");{const y=document.getElementById("properties-label-input")?.parentElement?.querySelector("label");y&&(y.textContent=a("label")),y&&(y.title=a("properties_label_desc"))}{const y=document.getElementById("beacon-fields-title");y&&(y.textContent=a("beacon_parameters"))}{const y=document.querySelector('label[for="beacon-uuid-input"]');y&&(y.textContent=a("beacon_uuid_label"))}{const y=document.querySelector('label[for="beacon-serial-input"]');y&&(y.textContent=a("beacon_serial_label")),y&&(y.title=a("beacon_serial_desc"))}{const y=document.querySelector('label[for="beacon-major-input"]');y&&(y.textContent=a("beacon_major_label"))}{const y=document.querySelector('label[for="beacon-minor-input"]');y&&(y.textContent=a("beacon_minor_label"))}{const y=document.querySelector('label[for="beacon-installation-input"]');y&&(y.textContent=a("beacon_installation_label")),y&&(y.title=a("beacon_installation_desc"))}{const y=document.querySelector('label[for="beacon-range-input"]');y&&(y.textContent=a("beacon_range_label")),y&&(y.title=a("beacon_range_desc"))}{const y=document.querySelector('label[for="beacon-number-input"]');y&&(y.textContent=a("beacon_number_label")),y&&(y.title=a("beacon_number_desc"))}{const y=document.querySelector('label[for="beacon-note-de-input"]');y&&(y.textContent=a("beacon_note_de_label")),y&&(y.title=a("beacon_note_de_desc"))}{const y=document.querySelector('label[for="beacon-note-en-input"]');y&&(y.textContent=a("beacon_note_en_label")),y&&(y.title=a("beacon_note_de_desc"))}const h=document.getElementById("properties-label-input");h&&(h.placeholder=a("enterElementLabel"));{const y=document.getElementById("beacon-serial-input");y&&(y.placeholder=a("beacon_serial_label"))}{const y=document.getElementById("beacon-number-input");y&&(y.placeholder=a("beacon_number_label"))}{const y=document.getElementById("beacon-installation-input");y&&(y.placeholder=a("beacon_installation_label"),y.title=a("beacon_installation_label"))}{const y=document.getElementById("beacon-range-input");y&&(y.placeholder=a("beacon_range_label"))}{const y=document.getElementById("beacon-note-de-input");y&&(y.placeholder=a("beacon_note_de_label"))}{const w=document.getElementById("properties-type-select")?.parentElement?.querySelector("label");w&&(w.textContent=a("elementType"))}{const y=document.getElementById("properties-placeholder");y&&(y.textContent=a("noElementSelected"))}const v=document.querySelector(".toolbar-section:nth-child(5) h2");v?.childNodes[0]&&(v.childNodes[0].textContent=a("viewAndLayers")+" ");const S=document.getElementById("view-grid-sep");S&&(S.textContent=a("grid"));const g=document.getElementById("view-layers-sep");g&&(g.textContent=a("layers"));const E=document.getElementById("analysis-sep");E&&(E.textContent=a("analysis"));{const w=document.getElementById("toggleGridBtn")?.parentElement?.querySelector("span");w&&(w.textContent=a("showGrid"))}{const w=document.getElementById("toggleSnapBtn")?.parentElement?.querySelector("span");w&&(w.textContent=a("snapToGrid"))}{const y=document.querySelector('label[for="gridSizeInput"]');y&&(y.textContent=a("size"))}{const w=document.getElementById("gridMetersInput")?.parentElement?.querySelector("label");w&&(w.textContent=a("metersPerCell"))}{const w=document.querySelector('.layer-toggle[data-layer="area"]')?.parentElement?.querySelector("span");w&&(w.textContent=a("layersAreas"))}{const w=document.querySelector('.layer-toggle[data-layer="path"]')?.parentElement?.querySelector("span");w&&(w.textContent=a("layersPaths"))}{const w=document.querySelector('.layer-toggle[data-layer="point"]')?.parentElement?.querySelector("span");w&&(w.textContent=a("layersPoints"))}{const y=document.getElementById("dimensions-sep");y&&(y.textContent=a("dimensions"));const W=document.getElementById("toggleAreaDimensions")?.parentElement?.querySelector("span");W&&(W.textContent=a("showEdgeLengths"));const R=document.getElementById("togglePathLengths")?.parentElement?.querySelector("span");R&&(R.textContent=a("showLineLengths"));const K=document.getElementById("toggleCircleRadius")?.parentElement?.querySelector("span");K&&(K.textContent=a("showCircleRadius"));const ue=document.getElementById("toggleBeaconRing")?.parentElement?.querySelector("span");ue&&(ue.textContent=a("showBeaconRangeRing"))}{const y=document.getElementById("intro-content");y&&(y.innerHTML=a("intro_full_content"))}const I=document.getElementById("show3DViewBtn");I&&(I.querySelector("span").textContent=document.getElementById("floor3DView")?.style.display==="flex"?a("backToApp"):a("preview3D"));{const y=document.querySelector("#type-manager-modal h2");y&&(y.textContent=a("manageTypesTitle"));const w=document.querySelector("#type-manager-modal h4");w&&(w.textContent=a("types"));const W=document.getElementById("type-manager-new-btn");W&&(W.textContent=a("newType"));const z=document.getElementById("type-name-input"),R=z?.parentElement?.querySelector("label");R&&(R.textContent=a("typeName")),z&&(z.placeholder=a("exampleMarketing"))}wn&&(wn.textContent=a("textStyle")),Sn&&(Sn.textContent=a("areaStyle")),In&&(In.textContent=a("pointStyle"));{const y=document.getElementById("type-font-size-input")?.parentElement?.querySelector("label");y&&(y.textContent=a("fontSize"),y.title=a("fontSizeDesc"))}{const y=document.getElementById("type-font-color-input")?.parentElement?.querySelector("label");y&&(y.textContent=a("fontColor"),y.title=a("fontColorDesc"))}const k=document.getElementById("ctx-menu-rename");k&&(k.textContent=a("rename"));const M=document.getElementById("ctx-menu-copy");M&&(M.textContent=a("copy"));const C=document.querySelector("#context-menu .has-submenu");C&&C.firstChild&&C.firstChild.textContent&&(C.firstChild.textContent=a("changeType"));const D=document.getElementById("ctx-menu-add-overlap-point");D&&(D.textContent=a("ctxAddOverlapPoint"));const A=document.getElementById("type-fill-color-input").parentElement.querySelector("label");A.textContent=a("fillColor"),A.title=a("fillColorDesc"),document.getElementById("type-fill-color-swatch").title=a("currentFillColor");const j=document.getElementById("type-fill-opacity-slider").parentElement.querySelector("label");j.textContent=a("fillOpacity"),j.title=a("fillOpacityDesc");const u=document.getElementById("type-stroke-color-input").parentElement.querySelector("label");u.textContent=a("strokeColor"),u.title=a("strokeColorDesc"),document.getElementById("type-stroke-color-swatch").title=a("currentStrokeColor");const f=document.querySelector("#type-editor-point > label");f.textContent=a("iconSelection"),f.title=a("iconSelectionDesc");const B=document.getElementById("type-icon-color-input").parentElement.querySelector("label");B.textContent=a("iconColor"),B.title=a("iconColorDesc");{const y=document.getElementById("type-manager-delete-btn");y&&(y.textContent=a("deleteType"))}{const y=document.getElementById("type-manager-placeholder");y&&(y.textContent=a("typeManagerPlaceholder"))}document.getElementById("type-manager-save-btn").textContent=a("saveChangesAndClose"),kn&&(kn.textContent=a("typePreview")),Pn&&(Pn.textContent=a("previewAreaLabel")),Bn&&(Bn.textContent=a("previewPointLabel")),document.querySelector("#new-type-choice-modal h4").textContent=a("createNewElementType"),document.querySelector("#new-type-choice-modal p").textContent=a("chooseBaseType"),document.getElementById("choose-type-area").textContent=a("choiceArea"),document.getElementById("choose-type-point").textContent=a("choicePoint"),document.getElementById("new-type-choice-cancel").textContent=a("cancel"),document.getElementById("input-prompt-ok").textContent=a("ok"),document.getElementById("input-prompt-cancel").textContent=a("cancel"),document.getElementById("confirm-ok").textContent=a("ok"),document.getElementById("confirm-cancel").textContent=a("cancel");{const y=document.getElementById("room-contents-title");y&&(y.textContent=a("roomContentsTitle"));const w=document.getElementById("room-contents-new-item");w&&(w.placeholder=a("roomContentsPlaceholder"));const W=document.getElementById("room-contents-add-btn");W&&(W.textContent=a("roomContentsAdd"));const z=document.getElementById("room-contents-save");z&&(z.textContent=a("ok"));const R=document.getElementById("room-contents-cancel");R&&(R.textContent=a("cancel"))}{const y=document.getElementById("occupancy-title");y&&(y.textContent=a("occupancyTitle"));const w=document.getElementById("occupancy-type");w&&(w.options[0].text=a("occupancyTypeWeekday"),w.options[1].text=a("occupancyTypeDate"),w.options[2].text=a("occupancyTypeRange"));const W=document.getElementById("occupancy-type-label");W&&(W.textContent=a("occupancyTypeLabel"));const z=document.getElementById("occupancy-weekday");z&&(z.options[0].text=a("weekdayMon"),z.options[1].text=a("weekdayTue"),z.options[2].text=a("weekdayWed"),z.options[3].text=a("weekdayThu"),z.options[4].text=a("weekdayFri"),z.options[5].text=a("weekdaySat"),z.options[6].text=a("weekdaySun"));const R=document.getElementById("occupancy-weekday-label");R&&(R.textContent=a("occupancyWeekdayLabel"));const Z=document.getElementById("occupancy-date-label");Z&&(Z.textContent=a("occupancyDateLabel"));const K=document.getElementById("occupancy-start-label");K&&(K.textContent=a("occupancyStartLabel"));const U=document.getElementById("occupancy-end-label");U&&(U.textContent=a("occupancyEndLabel"));const ue=document.getElementById("occupancy-range-start-label");ue&&(ue.textContent=a("occupancyRangeStartLabel"));const Me=document.getElementById("occupancy-range-end-label");Me&&(Me.textContent=a("occupancyRangeEndLabel"));const Je=document.getElementById("occupancy-note");Je&&(Je.placeholder=a("occupancyNotePlaceholder"));const Te=document.getElementById("occupancy-note-label");Te&&(Te.textContent=a("occupancyNoteLabel"));const Ye=document.getElementById("occupancy-add-btn");Ye&&(Ye.textContent=a("occupancyAdd"));const Fe=document.getElementById("occupancy-save");Fe&&(Fe.textContent=a("ok"));const ke=document.getElementById("occupancy-cancel");ke&&(ke.textContent=a("cancel"))}{const y=document.getElementById("opening-hours-title");y&&(y.textContent=a("openingHoursTitle"));const w=document.getElementById("opening-hours-weekly-label");w&&(w.textContent=a("openingHoursWeekly"));const W=document.getElementById("opening-hours-exceptions-label");W&&(W.textContent=a("openingHoursExceptions"));const z=document.getElementById("opening-hours-ranges-label");z&&(z.textContent=a("openingHoursRanges"));const R=document.getElementById("opening-hours-weekday-label");R&&(R.textContent=a("occupancyWeekdayLabel"));const Z=document.getElementById("opening-hours-start-label");Z&&(Z.textContent=a("occupancyStartLabel"));const K=document.getElementById("opening-hours-end-label");K&&(K.textContent=a("occupancyEndLabel"));const U=document.getElementById("opening-hours-weekday");U&&(U.options[0].text=a("weekdayMon"),U.options[1].text=a("weekdayTue"),U.options[2].text=a("weekdayWed"),U.options[3].text=a("weekdayThu"),U.options[4].text=a("weekdayFri"),U.options[5].text=a("weekdaySat"),U.options[6].text=a("weekdaySun"));const ue=document.getElementById("opening-hours-ex-date-label");ue&&(ue.textContent=a("occupancyDateLabel"));const Me=document.getElementById("opening-hours-ex-start-label");Me&&(Me.textContent=a("occupancyStartLabel"));const Je=document.getElementById("opening-hours-ex-end-label");Je&&(Je.textContent=a("occupancyEndLabel"));const Te=document.getElementById("opening-hours-range-start-label");Te&&(Te.textContent=a("occupancyRangeStartLabel"));const Ye=document.getElementById("opening-hours-range-end-label");Ye&&(Ye.textContent=a("occupancyRangeEndLabel"));const Fe=document.getElementById("opening-hours-range-time-start-label");Fe&&(Fe.textContent=a("occupancyStartLabel"));const ke=document.getElementById("opening-hours-range-time-end-label");ke&&(ke.textContent=a("occupancyEndLabel"));const ut=document.getElementById("opening-hours-add-rule");ut&&(ut.textContent=a("addRule"));const Xe=document.getElementById("opening-hours-add-exception");Xe&&(Xe.textContent=a("addException"));const mt=document.getElementById("opening-hours-add-range");mt&&(mt.textContent=a("addRange"));const tr=document.getElementById("opening-hours-save");tr&&(tr.textContent=a("ok"));const nr=document.getElementById("opening-hours-cancel");nr&&(nr.textContent=a("cancel"))}document.getElementById("ctx-menu-rename").textContent=a("rename"),document.getElementById("ctx-menu-copy").textContent=a("copy");{const y=document.getElementById("ctx-menu-delete");y&&(y.textContent=a("delete"))}{const y=document.querySelector(".context-menu .has-submenu");y&&y.childNodes[0]&&(y.childNodes[0].textContent=a("changeType"))}{const y=document.getElementById("file-menu-trigger");y&&(y.textContent=a("file"))}{const y=document.getElementById("output-menu-trigger");y&&(y.textContent=a("output"))}{const y=document.getElementById("overview-menu-trigger");y&&(y.textContent=a("overview"))}const P={de:"Deutsch",en:"English"},L=e.activeLanguage,F=P[L]||L.toUpperCase();if(Jo.textContent=F,Se){const y=Se.querySelector('button[data-lang="en"]'),w=Se.querySelector('button[data-lang="de"]');y&&(y.textContent="English"),w&&(w.textContent="Deutsch")}const T=e.activeTheme==="dark";Yo.title=a(T?"lightMode":"darkMode"),Ot&&(Ot.src=T?"assets/lightMode.png":"assets/darkMode.png"),Ht&&(Ht.src=T?"assets/language-dark.png":"assets/language-light.png"),document.querySelector("#element-type-select optgroup:nth-child(1)")?.setAttribute("label",a("optgroupAreas")),document.querySelector("#element-type-select optgroup:nth-child(2)")?.setAttribute("label",a("optgroupPointElements")),document.querySelector("#element-type-select optgroup:nth-child(3)")?.setAttribute("label",a("optgroupConnectors"));const _=document.querySelector('label[for="properties-description-input"]');_&&(_.textContent=a("description"));const H=document.querySelector('label[for="properties-room-number-input"]');H&&(H.textContent=a("roomNumber"));const V=document.querySelector('label[for="properties-designation-select"]');V&&(V.textContent=a("designation"));const q=document.querySelector('label[for="properties-opening-hours-input"]');q&&(q.textContent=a("openingHours"));const X=document.getElementById("open-opening-hours-modal-btn");X&&(X.textContent=a("openingHoursBtn"));const ce=document.getElementById("open-occupancy-modal-btn");ce&&(ce.textContent=a("occupancyBtn"));const pt=document.querySelector('label[for="properties-is-empty-checkbox"] span');pt&&(pt.textContent=a("isEmptyArea"))}function Oi(t){if(e.activeLanguage===t)return;const o=e.activeLanguage;Vi(t),localStorage.setItem("imd_editor_language",t),e.activeLanguage=t,document.documentElement.lang=t,Jo.textContent=t==="en"?"English":"Deutsch";const n=a("unnamedProject",o),s=a("unnamedProject",t);e.project.properties.projectName===n&&(e.project.properties.projectName=s,Ge&&(Ge.value=s),N()),$i(),ne(),le(),Ze(),ie(),G()}function Hi(t){e.activeTheme===t&&document.body.getAttribute("data-theme")===t||(e.activeTheme=t,document.body.setAttribute("data-theme",t),localStorage.setItem("imd_editor_theme",t),Ot&&(Ot.src=t==="dark"?"assets/lightMode.png":"assets/darkMode.png"),Ht&&(Ht.src=t==="dark"?"assets/language-dark.png":"assets/language-light.png"),$i(),O())}function El(){se.addEventListener("wheel",cl,{passive:!1}),se.addEventListener("contextmenu",ul),window.addEventListener("click",je),se.addEventListener("mousedown",u=>{if(u.button===1||e.currentMode==="pan"&&u.button===0){$s(u);return}if(u.button!==0)return;const f=gn({x:u.offsetX,y:u.offsetY});if(e.currentMode==="select"&&Ks(f))return;const B=ye(f);if((e.currentMode==="select"||e.currentMode==="move-element")&&B){if(e.isCtrlPressed){Ni(f);return}const P=B.properties.id;e.selectedFeatureIds.includes(P)||(e.selectedFeatureIds=[P],ie(),O()),Vs(f);return}dl(f)}),window.addEventListener("mouseup",u=>{Hs(),u.button===0&&(Ws(),Zs(),xe&&xe.stop3DDrag())}),window.addEventListener("mousemove",u=>{const f=se.getBoundingClientRect();if(e.mousePosScreen={x:u.clientX-f.left,y:u.clientY-f.top},e.mousePos=gn(e.mousePosScreen),ui.style.top=`${e.mousePosScreen.y}px`,mi.style.left=`${e.mousePosScreen.x}px`,Jn&&(Jn.textContent=`X: ${e.mousePos.x.toFixed(2)} m | Y: ${e.mousePos.y.toFixed(2)} m`),e.isPanning){Os(u);return}if(e.isEditingPath){Us(e.mousePos);return}if(e.isMovingElement){Gs(e.mousePos);return}if(e.threeDIsDragging&&xe){xe.do3DDrag(u);return}let B=!1;if(e.currentMode==="scissors"){let P;if(e.selectedFeatureIds.length===1){const L=e.project.features.find(F=>F.properties.id===e.selectedFeatureIds[0]);L&&L.geometry.type==="Polygon"&&(P=L)}else{const L=ye(e.mousePos);L&&L.geometry.type==="Polygon"&&(P=L)}if(P){const L=Wt(e.mousePos,P.geometry);(L.index!==e.hoveredEdgeIndex||L.index!==-1&&e.hoveredFeatureId!==P.properties.id)&&(e.hoveredEdgeIndex=L.index,e.hoveredFeatureId=L.index!==-1?P.properties.id:null,B=!0)}else e.hoveredEdgeIndex!==-1&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0)}else if(e.isAltPressed&&e.currentMode==="select"&&e.selectedFeatureIds.length===1){const P=e.project.features.find(L=>L.properties.id===e.selectedFeatureIds[0]);if(P&&P.geometry.type==="Polygon"){const L=Wt(e.mousePos,P.geometry);(L.index!==e.hoveredEdgeIndex||L.index!==-1&&e.hoveredFeatureId!==P.properties.id)&&(e.hoveredEdgeIndex=L.index,e.hoveredFeatureId=L.index!==-1?P.properties.id:null,B=!0)}}else e.hoveredEdgeIndex!==-1&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0);if(e.currentMode==="door"){const P=ye(e.mousePos);if(P&&P.geometry.type==="Polygon"){const L=Wt(e.mousePos,P.geometry);(L.index!==e.hoveredEdgeIndex||L.index!==-1&&e.hoveredFeatureId!==P.properties.id)&&(e.hoveredEdgeIndex=L.index,e.hoveredFeatureId=L.index!==-1?P.properties.id:null,B=!0)}else e.hoveredEdgeIndex!==-1&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0)}(e.tempShape||B||e.isShiftPressed)&&(O(),$())}),se.addEventListener("dblclick",u=>{u.preventDefault(),e.currentMode==="polygon"&&ks()}),Un.addEventListener("mousedown",dr),Zn.addEventListener("mousedown",dr),yi.addEventListener("dblclick",()=>{e.scale=1,e.pan={x:0,y:0},dt(),O()}),document.getElementById("mode-screenshot")?.addEventListener("click",()=>{const u=document.getElementById("canvas");if(!u)return;const f=document.createElement("a"),B=e.activeLanguage==="de"?"karte":"map",P=e.activeFloorId||"screenshot";f.download=`${B}-${P}.png`,f.href=u.toDataURL("image/png"),f.click()}),Mo.addEventListener("click",u=>{u.stopPropagation(),Se.style.display=Se.style.display==="block"?"none":"block"}),Se.addEventListener("click",u=>{const B=u.target.dataset.lang;B&&(Oi(B),Se.style.display="none")}),window.addEventListener("click",u=>{!Mo.contains(u.target)&&!Se.contains(u.target)&&(Se.style.display="none")}),Yo.addEventListener("click",()=>{Hi(e.activeTheme==="light"?"dark":"light")}),Ge.addEventListener("input",()=>{e.project.properties.projectName=Ge.value,N(),ne(),$()}),document.getElementById("newProjectBtn").addEventListener("click",async()=>{if(!await Ee(a("alert_newProjectConfirm")))return;const f=Ce(),B=f.length>0?f[0]:ze,P=await Pe(a("prompt_newFloorName"),B);Yr(!1,P||ze)}),document.getElementById("saveProjectBtn").addEventListener("click",()=>rr(Ge.value)),document.getElementById("exportGeoJsonBtn").addEventListener("click",()=>rr(Ge.value)),document.getElementById("loadProjectFromServerBtn").addEventListener("click",async()=>{const u=document.getElementById("server-load-panel");if(u.classList.contains("hidden")){if(!re.isAvailable()){alert('Backend nicht verfügbar. Bitte API unter "/app/api" und "/api" starten oder Proxy konfigurieren.');return}u.classList.remove("hidden"),await n()}else u.classList.add("hidden")}),document.getElementById("saveProjectToServerBtn").addEventListener("click",async()=>{const u=document.getElementById("server-load-panel");if(u.classList.contains("hidden")){if(!re.isAvailable()){alert('Backend nicht verfügbar. Bitte API unter "/app/api" und "/api" starten oder Proxy konfigurieren.');return}u.classList.remove("hidden"),await n()}});const o=document.getElementById("serverSavePanelBtn");o&&o.addEventListener("click",async()=>{if(!re.isAvailable()){alert("Backend nicht verfügbar. Speichern zum Server ist derzeit deaktiviert.");return}const u=document.getElementById("serverProjectSelect"),f=document.getElementById("serverVersionSelect"),B=u?.value,P=B&&B!==""?parseInt(B,10):null,L=f?.value,F=L&&L!==""?parseInt(L,10):void 0;if(P!==null&&F!==void 0){const _=u?.selectedOptions?.[0]?.textContent||`#${P}`;if(!await Ee(a("confirmOverwriteVersion",void 0,_,F)))return}const T=await Zr(P,F);await n(),u&&(u.value=String(T.id)),await(async()=>{const _=document.getElementById("serverVersionSelect");_&&(_.value=String(T.version))})()});async function n(){const u=document.getElementById("serverProjectSelect"),f=document.getElementById("serverVersionSelect"),B=document.getElementById("serverSaveHint");if(u.innerHTML="",f.innerHTML="",!re.isAvailable()){const z=document.createElement("option");z.value="",z.textContent="Backend nicht verfügbar",z.disabled=!0,u.appendChild(z),B&&(B.textContent="Kein Backend verbunden. Bitte API starten oder Proxy konfigurieren.");return}let L=(await re.listProjects()).slice();const F=z=>{u.innerHTML="";const R=document.createElement("option");R.value="",R.textContent=a("newProjectOption"),u.appendChild(R),z.forEach(Z=>{const K=document.createElement("option");K.value=String(Z.id),K.textContent=`${Z.name} (#${Z.id})`,u.appendChild(K)}),z.length>0?u.value=String(z[0].id):u.value=""};F(L),await w();const T=document.getElementById("serverRefreshBtn");T&&(T.onclick=async()=>{L=(await re.listProjects()).slice(),F(L),await w(),y(),W()});const _=document.getElementById("serverVersionRefreshBtn");_&&(_.onclick=async()=>{await w(),y(),W()}),u.onchange=async()=>{await w(),y(),W()},f.onchange=()=>{y(),W()};const H=document.getElementById("serverLoadBtn");H&&(H.onclick=async()=>{const z=parseInt(u.value,10),R=f.value,Z=R?parseInt(R,10):void 0;await ir(z,Z)});const V=document.getElementById("serverLoadLatestBtn");V&&(V.onclick=async()=>{const z=parseInt(u.value,10);await ir(z)});const q=document.getElementById("serverProjectAddBtn");q&&(q.onclick=async()=>{await Ee(a("infoNewProject")),u.value="",await w(),y()});const X=document.getElementById("serverProjectDeleteBtn");X&&(X.onclick=async()=>{const z=parseInt(u.value,10);if(isNaN(z))return;const R=u.selectedOptions?.[0]?.textContent||`#${z}`;if(!await Ee(a("confirmDeleteProject",void 0,R,z)))return;await re.delete(z),L=(await re.listProjects()).slice(),F(L),await w(),y()});const ce=document.getElementById("serverVersionAddBtn");ce&&(ce.onclick=()=>{Ee(a("infoNewVersion")),f.value="",y()});const pt=document.getElementById("serverVersionDeleteBtn");pt&&(pt.onclick=async()=>{const z=parseInt(u.value,10);if(isNaN(z))return;const R=f.value;if(!R){await Ee(a("alertSelectVersionFirst"));return}const Z=parseInt(R,10),K=u.selectedOptions?.[0]?.textContent||`#${z}`;await Ee(a("confirmDeleteVersion",void 0,K,Z,z))&&(await re.delete(z,Z),await w(),y())});function y(){const z=document.getElementById("serverProjectDeleteBtn"),R=document.getElementById("serverVersionDeleteBtn"),Z=document.getElementById("serverProjectAddBtn"),K=document.getElementById("serverVersionAddBtn"),U=!!u.value,ue=!!f.value;z&&(z.disabled=!U),R&&(R.disabled=!U||!ue),Z&&(Z.disabled=!1),K&&(K.disabled=!U)}async function w(){const z=parseInt(u.value,10);f.innerHTML="";const R=document.createElement("option");if(R.value="",R.textContent=a("newVersionOption"),f.appendChild(R),isNaN(z)){f.disabled=!0,W();return}else f.disabled=!1;(await re.listVersions(z)).sort((K,U)=>U-K).forEach(K=>{const U=document.createElement("option");U.value=String(K),U.textContent=String(K),f.appendChild(U)}),y(),W()}y(),W();function W(){if(!B)return;const z=u.value,R=f.value;if(!z){B.textContent=a("infoNewProject");return}const Z=u.selectedOptions?.[0]?.textContent||`#${z}`;if(!R){B.textContent=a("infoNewVersion");return}const K=parseInt(R,10);B.textContent=a("saveTargetVersion",void 0,Z,K)}}document.getElementById("loadProjectInput").addEventListener("change",u=>{const f=u.target.files?.[0];f&&(ps(f),u.target.value="")}),document.getElementById("showGeoJsonBtn").addEventListener("click",()=>{const u=document.getElementById("live-geojson-output"),f=document.getElementById("showGeoJsonBtn"),B=u.style.display==="block";u.style.display=B?"none":"block",f.querySelector("span").textContent=a(B?"showLiveCode":"hideCode")}),document.getElementById("addFloorBtn").addEventListener("click",async()=>{const u=Ce(),f=u.length===0?ze:`Etage ${u.length+1}`,B=a("prompt_newFloorName"),P=await Pe(B,f);P&&ar(P)}),Xo.addEventListener("click",async()=>{if(!e.activeFloorId){alert(a("alert_noActiveFloor"));return}const u=a("prompt_renameFloor",e.activeLanguage,e.activeFloorId),f=await Pe(u,e.activeFloorId);f&&cr(f)}),Yn.addEventListener("change",()=>{e.activeFloorId=Yn.value,e.selectedFeatureIds=[],De.disabled=!0,O()}),document.getElementById("floorplanInput").addEventListener("change",async u=>{const f=u.target.files?.[0];if(f)try{await ys(f)}finally{u.target.value=""}}),document.getElementById("undoBtn").addEventListener("click",sr),document.getElementById("redoBtn").addEventListener("click",lr),De.addEventListener("click",()=>{if(e.selectedFeatureIds.length>1){const u=ye(e.mousePos);u&&(e.selectedFeatureIds=[u.properties.id])}Tn()});const s=document.getElementById("copyBtn");s&&s.addEventListener("click",()=>{e.selectedFeatureIds.length,Hr()}),ro&&ro.addEventListener("click",()=>{const u=a("prompt_newFloorName");Pe(u,e.activeFloorId||"").then(f=>{f&&ar(f),je()})}),io&&io.addEventListener("click",()=>{if(!e.activeFloorId){alert(a("alert_noActiveFloor"));return}const u=a("prompt_renameFloor",e.activeLanguage,e.activeFloorId);Pe(u,e.activeFloorId).then(f=>{f&&cr(f),je()})}),["select","pan","move-element","calibrate","merge","area","square","polygon","circle","line","arc","door","point"].forEach(u=>{const f=document.getElementById(`mode-${u}`);f&&f.addEventListener("click",()=>{if(e.currentMode===u&&!["select","pan","move-element"].includes(u)){document.getElementById("mode-select")?.click();return}switch(e.currentMode=u,e.tempShape=null,["area","polygon","circle","line","arc","door","point"].includes(u)&&(e.selectedFeatureIds=[]),Ze(),document.querySelectorAll(".tool-btn").forEach(F=>F.classList.remove("active")),f.classList.add("active"),u){case"pan":case"move-element":se.style.cursor="grab";break;case"select":se.style.cursor="default";break;case"calibrate":{se.style.cursor="crosshair";const F=new CustomEvent("imd-info",{detail:{title:a("calibrateScale"),message:a("calibratePrompt")}});document.dispatchEvent(F);break}case"merge":se.style.cursor="default",mn();{const F=new CustomEvent("imd-info",{detail:{title:a("merge"),message:a("mergeHintShort")}});document.dispatchEvent(F)}break;case"scissors":se.style.cursor="default";break;default:se.style.cursor="crosshair";break}const P=["area","square","polygon","circle"].includes(u),L=u==="point";gi.style.display=P||L?"block":"none",P&&Or("area"),L&&Or("point"),De.disabled=e.selectedFeatureIds.length===0,ie(),O()})}),document.getElementById("show3DViewBtn").addEventListener("click",async()=>{const u=document.getElementById("floor3DView"),f=document.querySelector(".canvas-wrapper"),B=document.getElementById("show3DViewBtn").querySelector("span");u.style.display==="flex"?(u.style.display="none",f.style.display="grid",B.textContent=a("preview3D")):(xe||(xe=await tt(()=>import("./3d-Co_xE0gz.js"),__vite__mapDeps([0,1]))),jt||(jt=await tt(()=>import("./floor3D-DixRsG1v.js"),[])),xe.setup3DViewControls(),u.style.display="flex",f.style.display="none",B.textContent=a("backToApp"),e.threeDPan={x:50,y:50},e.threeDScale=.8,xe.update3DFloorSelector(),jt.render3DFloorStack(e.project,"floor3DContent"),u.style.cursor="grab",u.addEventListener("mousedown",xe.start3DDrag),u.addEventListener("wheel",xe.handle3DZoom,{passive:!1}))}),Ts(O);const i=document.querySelector(".toolbar");i&&i.addEventListener("wheel",u=>{u.stopPropagation()},{passive:!0});function l(){const u=document.getElementById("intro-content"),f=document.getElementById("intro-logo-wrapper"),B=document.getElementById("intro-logo"),P=document.getElementById("intro-logo-row");if(f&&B&&(f.style.display="block",B.src="assets/company_logo.png",B.onerror=()=>{f.style.display="none"}),P){P.innerHTML="";const L=["assets/company_logo.png","assets/company_logo2.png","assets/company_logo3.png"];for(const F of L){const T=document.createElement("img");T.className="intro-logo-img",T.alt="Logo",T.src=F,T.onerror=()=>T.remove(),P.appendChild(T)}P.style.display="flex"}u&&(u.innerHTML=a("intro_full_content",e.activeLanguage)),me.classList.remove("hidden")}document.getElementById("Einleitung").addEventListener("click",l);function c(u,f){const B=document.getElementById("intro-content"),P=document.getElementById("intro-logo-wrapper"),L=document.getElementById("intro-logo-row");P&&(P.style.display="none"),L&&(L.style.display="none"),B&&(B.innerHTML=`
        <h2>${a(u,e.activeLanguage)}</h2>
        ${f}
      `),me.classList.remove("hidden")}const d=`
    <div style="font-size: 0.95rem; line-height: 1.5">
      <div>Ivon Dimova<br/>David Krois</div>
      <div style="margin-top: 0.25rem">5020 Salzburg</div>
      <div>Itzlinger Hauptstrasse 30 | Austria</div>
      <div>HTBLuVA Salzburg</div>
      <div>Elektronik und technische Informatik, 5AHEL</div>
      <div style="margin-top: 0.5rem">
        E-Mail:<br/>
        <a href="mailto:ivon.dimova06@htl-salzburg.ac.at">ivon.dimova06@htl-salzburg.ac.at</a><br/>
        <a href="mailto:david.krois07@htl-salzburg.ac.at">david.krois07@htl-salzburg.ac.at</a><br/>
        <a href="mailto:instep.navigation@gmail.com">instep.navigation@gmail.com</a>
      </div>
    </div>
  `;document.getElementById("imprintBtn")?.addEventListener("click",()=>{c("imprint",d)}),document.getElementById("contactBtn")?.addEventListener("click",()=>{c("contact",d)}),document.getElementById("privacyBtn")?.addEventListener("click",()=>{c("privacy","<p>Datenschutzbestimmungen...</p>")});const m=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 1.5rem; padding: 1rem 0;">
      <a href="https://www.minew.com/" target="_blank" rel="noopener noreferrer" style="display: block;">
        <img src="assets/minew.png" alt="Minew" style="height: 100px; width: auto; max-width: 100%; object-fit: contain;">
      </a>
      <a href="https://www.palfinger.com/de-at" target="_blank" rel="noopener noreferrer" style="display: block;">
        <img src="assets/palfinger.png" alt="Palfinger" style="height: 60px; width: auto; max-width: 100%; object-fit: contain;">
      </a>
    </div>
  `;document.getElementById("sponsorsBtn")?.addEventListener("click",()=>{c("sponsorsButtonTitle",m)}),hi.addEventListener("click",()=>{me.classList.add("hidden")}),fi.addEventListener("click",()=>{me.classList.add("hidden")}),document.addEventListener("imd-info",u=>{const f=u.detail||{},B=f.title||"Info",P=f.message||"",L=me.querySelector("h2"),F=me.querySelector("p"),T=me.querySelector("h4"),_=me.querySelector(".modal-content ul"),H=document.getElementById("intro-logo-wrapper"),V=document.getElementById("intro-logo-row"),q=document.getElementById("intro-content");L&&(L.textContent=B),F&&(F.textContent=P),T&&(T.style.display="none"),_&&(_.style.display="none"),H&&(H.style.display="none"),V&&(V.style.display="none"),q&&(q.innerHTML=""),me.classList.remove("hidden")}),hn.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.label=hn.value,N(),ht(),$())}),Qn.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.description=Qn.value,N(),ht(),$())}),vn.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.opening_hours=vn.value,N(),ht(),$())}),eo.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.room_number=eo.value,N(),ht(),$())}),to.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.designation=to.value,N(),ht(),$())}),fn.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.subType=fn.value,N(),G(),$(),ne(),ie())}),bn.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.isEmpty=bn.checked,u.properties.isEmpty&&(u.properties.isAccessible=!1),N(),G(),$(),ie())});const b=document.getElementById("beacon-uuid-input"),h=document.getElementById("beacon-serial-input"),v=document.getElementById("beacon-major-input"),S=document.getElementById("beacon-minor-input"),g=document.getElementById("beacon-installation-input"),E=document.getElementById("beacon-range-input"),I=document.getElementById("beacon-note-de-input"),k=document.getElementById("beacon-note-en-input"),M=document.getElementById("beacon-activation-start-date"),C=document.getElementById("beacon-activation-end-date"),D=document.getElementById("beacon-activation-start-time"),A=document.getElementById("beacon-activation-end-time");b?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_uuid=b.value,N(),$(),ne(),O())}),h?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_serial=h.value,N(),$(),ne(),O())}),v?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);if(u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"){const f=parseInt(v.value,10);Number.isNaN(f)?delete u.properties.beacon_major:u.properties.beacon_major=f,N(),$(),ne(),O()}}),S?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);if(u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"){const f=parseInt(S.value,10);Number.isNaN(f)?delete u.properties.beacon_minor:u.properties.beacon_minor=f,N(),$(),ne(),O()}}),g?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_installation=g.value,N(),$(),ne(),O())}),E?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);if(u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"){const f=parseFloat(E.value);Number.isNaN(f)?delete u.properties.beacon_range:u.properties.beacon_range=f,N(),$(),ne(),O()}}),I?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_note_de=I.value,N(),$(),ne(),O())}),k?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_note_en=k.value,N(),$(),ne(),O())}),M?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.startDate=M.value,N(),$(),ne(),O())}),C?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.endDate=C.value,N(),$(),ne(),O())}),D?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.startTime=D.value,N(),$(),ne(),O())}),A?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(f=>f.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.endTime=A.value,N(),$(),ne(),O())}),bi.addEventListener("click",Tn),xn&&xn.addEventListener("click",()=>{yl(),je()}),vi.addEventListener("click",ml),no.addEventListener("click",Hr),so&&so.addEventListener("click",()=>{Rr(),je()}),lo&&lo.addEventListener("click",()=>{bl(),je()}),ao&&ao.addEventListener("click",()=>{qr(),je()}),co&&co.addEventListener("click",()=>{Vr(),je()}),$t&&$t.addEventListener("click",()=>{Rr()}),xi?.addEventListener("click",()=>qr()),Ei?.addEventListener("click",()=>Vr()),_i.addEventListener("click",Xs),Ti.addEventListener("click",pr),ji.addEventListener("click",Qs),Fi.addEventListener("click",()=>En.classList.remove("hidden")),Lo.addEventListener("click",el),Di.addEventListener("click",()=>ur("area")),Ai.addEventListener("click",()=>ur("point")),zi.addEventListener("click",()=>En.classList.add("hidden")),[Io,ko,Po,Bo,Co,To,Fo].forEach(u=>u.addEventListener("input",ii)),window.addEventListener("keydown",u=>{if(document.activeElement?.tagName!=="INPUT"){if(u.key==="Escape"){So.classList.contains("hidden")?e.tempShape&&(e.tempShape=null,O(),Qo()):pr(),e.selectedFeatureIds=[],De.disabled=!0,ie(),mn(),O();const f=document.getElementById("mode-pan");f&&e.currentMode!=="pan"&&f.click()}if(u.key==="Shift"&&!e.isShiftPressed&&(e.isShiftPressed=!0,O()),u.key==="Control"&&!e.isCtrlPressed&&(e.isCtrlPressed=!0),u.key==="Alt"&&!e.isAltPressed&&(e.isAltPressed=!0,O()),u.key==="Delete"||u.key==="Backspace"){if(u.preventDefault(),e.editedFeatureId&&e.editedNodeIndex!==-1){const f=e.project.features.find(B=>B.properties.id===e.editedFeatureId);if(f&&f.geometry.type==="Polygon"){const B=f.geometry.coordinates[0];if(B.length>4){B.splice(e.editedNodeIndex,1),e.editedNodeIndex===0&&(B[B.length-1]=B[0]),e.editedNodeIndex=-1,N(),O();return}}}if(e.selectedFeatureIds.length>1&&!u.ctrlKey&&!u.metaKey){const f=ye(e.mousePos);f&&(e.selectedFeatureIds=[f.properties.id])}Tn()}if(u.ctrlKey||u.metaKey)switch(u.key.toLowerCase()){case"z":u.preventDefault(),sr();break;case"y":u.preventDefault(),lr();break;case"a":{u.preventDefault();const f=e.project.features.filter(B=>B.properties.floor===e.activeFloorId);e.selectedFeatureIds=f.map(B=>B.properties.id),De.disabled=e.selectedFeatureIds.length===0,ie(),O();break}case"c":u.preventDefault(),gl();break;case"v":u.preventDefault(),hl();break}u.key==="Enter"&&e.currentMode==="merge"&&e.project.features.filter(P=>P.properties.floor===e.activeFloorId).filter(P=>e.selectedFeatureIds.includes(P.properties.id)&&P.geometry.type==="Polygon").length>=2&&(u.preventDefault(),pl())}}),window.addEventListener("keyup",u=>{u.key==="Shift"&&(e.isShiftPressed=!1,O()),u.key==="Control"&&(e.isCtrlPressed=!1),u.key==="Alt"&&(e.isAltPressed=!1,e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,O())}),document.querySelectorAll(".toolbar-header").forEach(u=>{u.addEventListener("click",()=>{u.classList.toggle("collapsed")})})}function Gr(){xl(),Ki(),El(),Ms(),e.scale=.7,e.pan={x:0,y:0},dt(),O();const t=localStorage.getItem("imd_editor_theme");Hi(t||"light");const o=localStorage.getItem("imd_editor_language");Oi(o||"de"),ne(),Ze(),ie()}function wl(){const t=document.getElementById("imd-date-picker"),o=document.getElementById("imd-dp-grid"),n=document.getElementById("imd-dp-month"),s=document.getElementById("imd-dp-prev"),r=document.getElementById("imd-dp-next"),i=document.getElementById("imd-dp-clear"),l=document.getElementById("imd-dp-today"),c=document.getElementById("imd-dp-target");if(!t||!o||!n||!s||!r||!i||!l||!c)return;const d=t,m=o,b=n,h=c;i.textContent=a("calendarClear"),l.textContent=a("calendarToday");let v=new Date,S=null;const g=(document.documentElement.lang||"de").toLowerCase().startsWith("de")?"de-DE":"en-US",E=new Intl.DateTimeFormat(g,{month:"long",year:"numeric"}),I=new Intl.DateTimeFormat(g,{weekday:"short"}),k=[];for(let f=0;f<7;f++){const B=new Date(2020,5,7+f);k.push(I.format(B))}function M(f){const B=f.getFullYear(),P=String(f.getMonth()+1).padStart(2,"0"),L=String(f.getDate()).padStart(2,"0");return`${B}-${P}-${L}`}function C(f){if(!f)return null;const B=f.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!B)return null;const P=Number(B[1]),L=Number(B[2])-1,F=Number(B[3]),T=new Date(P,L,F);return Number.isNaN(T.getTime())?null:T}function D(){b.textContent=E.format(v),m.innerHTML="",k.forEach(F=>{const T=document.createElement("div");T.className="imd-date-picker__dow",T.textContent=F,m.appendChild(T)});const P=(new Date(v.getFullYear(),v.getMonth(),1).getDay()+6)%7,L=new Date(v.getFullYear(),v.getMonth(),1-P);for(let F=0;F<42;F++){const T=new Date(L);T.setDate(L.getDate()+F);const _=document.createElement("div");_.className="imd-date-picker__day",T.getMonth()!==v.getMonth()&&_.classList.add("imd-date-picker__day--outside"),(T.getDay()===0||T.getDay()===6)&&_.classList.add("imd-date-picker__day--weekend");const V=new Date;T.getDate()===V.getDate()&&T.getMonth()===V.getMonth()&&T.getFullYear()===V.getFullYear()&&_.classList.add("imd-date-picker__day--today"),S&&T.getDate()===S.getDate()&&T.getMonth()===S.getMonth()&&T.getFullYear()===S.getFullYear()&&_.classList.add("imd-date-picker__day--selected"),_.textContent=String(T.getDate()),_.addEventListener("click",()=>{S=T;const q=document.getElementById(h.value);if(q){q.value=M(T);const X=new Event("input",{bubbles:!0});q.dispatchEvent(X)}j()}),m.appendChild(_)}}function A(f){S=C(f.value),v=S||new Date,h.value=f.id;const B=f.getBoundingClientRect();d.style.left=`${B.left+window.scrollX}px`,d.style.top=`${B.bottom+window.scrollY+6}px`,d.classList.add("open"),D()}function j(){d.classList.remove("open")}s.addEventListener("click",()=>{v.setMonth(v.getMonth()-1),D()}),r.addEventListener("click",()=>{v.setMonth(v.getMonth()+1),D()}),i.addEventListener("click",()=>{const f=document.getElementById(h.value);if(f){f.value="";const B=new Event("input",{bubbles:!0});f.dispatchEvent(B)}j()}),l.addEventListener("click",()=>{const f=new Date,B=document.getElementById(h.value);if(B){B.value=M(f);const P=new Event("input",{bubbles:!0});B.dispatchEvent(P)}j()}),document.addEventListener("click",f=>{const B=f.target;!d.contains(B)&&!B.closest('input[type="date"]')&&j()}),(()=>{document.querySelectorAll('input[type="date"]').forEach(f=>{f.id||(f.id=`date_${Math.random().toString(36).slice(2)}`),f.addEventListener("focus",B=>{B.preventDefault(),A(f)}),f.addEventListener("click",B=>{B.preventDefault(),A(f)})})})()}const ft=document.getElementById("simulateSignalBtn");ft?.addEventListener("click",()=>{e.showBeaconHeatmap=!e.showBeaconHeatmap;const t=ft.querySelector("span");t&&(t.textContent=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal")),ft.classList.toggle("active",e.showBeaconHeatmap),ft.setAttribute("aria-pressed",e.showBeaconHeatmap?"true":"false"),ft.title=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal"),e.showBeaconHeatmap,O()});const Sl=document.getElementById("checkCoverageBtn");Sl?.addEventListener("click",()=>{const t=Gi();t.length>0?alert(`Analyse-Ergebnisse:

- `+t.join(`
- `)):alert(`Keine Probleme erkannt.

Alle Räume sind abgedeckt und haben ausreichend Beacon-Signalstärke (Trilateration möglich).`)});const Il=`<aside class="toolbar">\r
  <div class="toolbar-scroll-content">\r
  <section class="toolbar-section" id="view-layers-section">\r
    <h2 class="toolbar-header">Projekt <span>▼</span></h2>\r
    <div class="toolbar-content">\r
      <label for="projectName"></label>\r
      <input type="text" id="projectName" placeholder="" />\r
    </div>\r
  </section>\r
\r
  <section class="toolbar-section">\r
    <h2 class="toolbar-header">Bearbeiten <span>▼</span></h2>\r
    <div class="toolbar-content">\r
      <div class="button-group">\r
        <button id="undoBtn" title="Rückgängig (Strg+Z)">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path\r
              d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.38 11.23 17.28 8 12.5 8z"\r
            ></path>\r
          </svg>\r
          <span>Rückgängig</span>\r
        </button>\r
        <button id="redoBtn" title="Wiederherstellen (Strg+Y)">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path\r
              d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.78 0-8.88 3.23-9.87 7.5l-2.37-.78C.39 10.31 5.22 6 11.5 6c2.81 0 5.37 1.09 7.28 2.86L22 6v9h-9l3.4-3.4z"\r
            ></path>\r
          </svg>\r
          <span>Wiederherstellen</span>\r
        </button>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="toolbar-section">\r
    <h2 class="toolbar-header">Etagen <span>▼</span></h2>\r
    <div class="toolbar-content">\r
      <label for="floor-select"></label>\r
      <select id="floor-select"></select>\r
      <div class="button-group">\r
        <button id="addFloorBtn" title="Neue Etage hinzufügen"><span>Neue Etage</span></button>\r
        <button id="renameFloorBtn" title="Aktive Etage umbenennen">\r
          <span>Umbenennen...</span>\r
        </button>\r
        <button\r
          title="Grundrissbild laden"\r
          onclick="document.getElementById('floorplanInput').click()"\r
        >\r
          <span>Grundriss...</span>\r
        </button>\r
      </div>\r
      <img\r
        id="floor-preview"\r
        alt="Grundriss-Vorschau"\r
        style="display: none; width: 100%; margin-top: 1rem; border-radius: var(--radius-sm)"\r
      />\r
    </div>\r
  </section>\r
\r
  <section class="toolbar-section">\r
    <h2 class="toolbar-header">Werkzeuge <span>▼</span></h2>\r
    <div class="toolbar-content">\r
      <div class="tool-buttons">\r
        <button id="mode-pan" class="tool-btn" title="Ansicht bewegen (H)">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">\r
              <path d="M12 2v4" />\r
              <path d="M12 18v4" />\r
              <path d="M2 12h4" />\r
              <path d="M18 12h4" />\r
              <path d="M7 7l-2-2" />\r
              <path d="M17 17l2 2" />\r
              <path d="M17 7l2-2" />\r
              <path d="M7 17l-2 2" />\r
            </g></svg\r
          ><span>Bewegen</span>\r
        </button>\r
        <button id="mode-select" class="tool-btn active" title="Auswählen (V)">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path\r
              fill="currentColor"\r
              d="M4 2l6.5 16 1.8-6.2 6.2-1.8L4 2z"\r
            />\r
          </svg>\r
          <span>Auswählen</span>\r
        </button>\r
        <button id="mode-merge" class="tool-btn" title="Zusammenfügen zu Fläche/Raum">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <g fill="none" stroke="currentColor" stroke-width="2">\r
              <rect x="4" y="6" width="10" height="10" rx="2" />\r
              <rect x="10" y="8" width="10" height="10" rx="2" />\r
            </g>\r
            <path d="M7 12h10" stroke="currentColor" stroke-width="2" /></svg\r
          ><span>Zusammenfügen</span>\r
        </button>\r
        <button id="mode-move-element" class="tool-btn" title="Element verschieben">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M12 3v18M3 12h18" />\r
            <path d="M12 3l-3 3M12 3l3 3" />\r
            <path d="M12 21l-3-3M12 21l3-3" />\r
            <path d="M3 12l3-3M3 12l3 3" />\r
            <path d="M21 12l-3-3M21 12l-3 3" />\r
          </svg>\r
          <span>Verschieben</span>\r
        </button>\r
        <button id="deleteBtn" class="tool-btn danger" title="Löschen (Entf)" disabled>\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path\r
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"\r
            ></path></svg\r
          ><span>Löschen</span>\r
        </button>\r
        <button id="copyBtn" class="tool-btn" title="Kopieren (Strg+C)">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path\r
              d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"\r
            ></path></svg\r
          ><span>Copy</span>\r
        </button>\r
        <button id="toggleAccessibleBtn" class="tool-btn" title="Barrierefrei markieren">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\r
            <circle cx="9.5" cy="3" r="1.3"></circle>\r
            <path d="M9.5 4.5v3"></path>\r
            <path d="M9.5 6.5h3"></path>\r
            <circle cx="6" cy="11" r="3.2"></circle>\r
            <path d="M9.5 8l2.5 3.5"></path>\r
          </svg>\r
          <span>Barrierefrei</span>\r
        </button>\r
        <button id="mode-screenshot" class="tool-btn" title="Screenshot">\r
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">\r
            <rect x="3" y="7" width="18" height="12" rx="2" fill="none" />\r
            <circle cx="12" cy="13" r="3.5" fill="none" />\r
            <path d="M8 7l1.5-2h5L16 7" fill="none" />\r
          </svg>\r
          <span>Screenshot</span>\r
        </button>\r
        <div class="toolbar-separator">Flächen</div>\r
        <button id="mode-area" class="tool-btn" title="Viereck zeichnen (R)">\r
          <svg viewBox="0 0 24 24"><path d="M3,3v18h18V3H3z M19,19H5V5h14V19z"></path></svg\r
          ><span>Viereck</span>\r
        </button>\r
        <button id="mode-square" class="tool-btn" title="Quadrat zeichnen">\r
          <svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="1" ry="1" /></svg\r
          ><span>Quadrat</span>\r
        </button>\r
        <button id="mode-polygon" class="tool-btn" title="Polygon zeichnen (P)">\r
          <svg viewBox="0 0 24 24">\r
            <path\r
              d="M12,2 L2,8 L2,16 L12,22 L22,16 L22,8 Z M4,9.6 L12,4.8 L20,9.6 L20,14.4 L12,19.2 L4,14.4 Z"\r
            ></path></svg\r
          ><span>Polygon</span>\r
        </button>\r
        <button id="mode-circle" class="tool-btn" title="Kreis zeichnen (C)">\r
          <svg viewBox="0 0 24 24">\r
            <path\r
              d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 S16.4,20,12,20z"\r
            ></path></svg\r
          ><span>Kreis</span>\r
        </button>\r
        <div class="toolbar-separator">Linien & Punkte</div>\r
        <button id="mode-line" class="tool-btn" title="Linie zeichnen (L)">\r
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">\r
            <line x1="3" y1="21" x2="21" y2="3"></line></svg\r
          ><span>Linie</span>\r
        </button>\r
        <button id="mode-arc" class="tool-btn" title="Bogen zeichnen">\r
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">\r
            <path d="M3,21 C10,21 14,3 21,3"></path></svg\r
          ><span>Bogen</span>\r
        </button>\r
        <button id="mode-door" class="tool-btn" title="Tür platzieren">\r
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">\r
            <rect x="5" y="4" width="14" height="16" rx="1" ry="1"></rect>\r
            <path d="M12 12h7"></path>\r
          </svg>\r
          <span>Tür</span>\r
        </button>\r
        <button id="mode-point" class="tool-btn" title="Punkt setzen">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path\r
              d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"\r
            ></path></svg\r
          ><span>Punkt</span>\r
        </button>\r
      </div>\r
      <div id="element-options" style="display: none">\r
        <hr />\r
        <!-- Element Typ wählen -->\r
        <label for="element-type-select" class="form-label-large">Element-Typ</label>\r
        <select id="element-type-select" style="width: 100%"></select>\r
\r
        <!-- Schrift-Einstellungen für neue Elemente -->\r
        <button id="manage-types-btn" class="action-btn">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\r
            <path\r
              d="M21 19v-2H3v2h18zM3 5v2h18V5H3zm12 6c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z"\r
            ></path>\r
          </svg>\r
          <span>Typen verwalten...</span>\r
        </button>\r
      </div>\r
\r
      <section\r
        id="properties-panel"\r
        class="toolbar-section"\r
        style="display: none; padding: 0; margin-top: 1rem"\r
      >\r
        <h2 class="toolbar-header">Eigenschaften <span>▼</span></h2>\r
        <div class="toolbar-content">\r
          <div id="properties-content" style="display: none">\r
            <label for="properties-label-input"></label>\r
            <input type="text" id="properties-label-input" placeholder="" />\r
            <label for="properties-type-select" style="margin-top: 0.75rem"></label>\r
            <select id="properties-type-select"></select>\r
            <label class="checkbox-label" style="margin-top: 0.75rem">\r
              <input type="checkbox" id="properties-is-empty-checkbox" />\r
              <span>Leere Fläche (Lichthof/Stiegenhaus)</span>\r
            </label>\r
            <div id="beacon-fields" style="margin-top: 0.75rem; display: none">\r
              <h4 class="form-subtitle" id="beacon-fields-title"></h4>\r
              <!-- Name (via Standard Label Field) ist oben -->\r
              \r
              <label for="beacon-serial-input" class="form-label-large" style="margin-top: 0.5rem"></label>\r
              <input type="text" id="beacon-serial-input" placeholder="" />\r
\r
              <!-- Installation -->\r
              <label for="beacon-installation-input" class="form-label-large" style="margin-top: 0.5rem"></label>\r
              <input type="date" id="beacon-installation-input" placeholder="" />\r
\r
              <!-- Note DE -->\r
              <label for="beacon-note-de-input" class="form-label-large" style="margin-top: 0.5rem"></label>\r
              <input type="text" id="beacon-note-de-input" placeholder="" />\r
\r
              <!-- Range (Keep visible for heatmap logic, but maybe put at bottom) -->\r
              <label for="beacon-range-input" class="form-label-large" style="margin-top: 0.5rem"></label>\r
              <input type="text" inputmode="numeric" pattern="[0-9]*" id="beacon-range-input" placeholder="" />\r
\r
              <!-- Aktivierungszeit -->\r
              <h5 id="beacon-activation-label" class="form-subtitle" style="margin-top: 0.75rem">Aktivierungszeit</h5>\r
              <div style="display:grid; grid-template-columns: 1fr; gap:.5rem">\r
                <label for="beacon-activation-start-date" id="beacon-activation-start-date-label">Startdatum</label>\r
                <input type="date" id="beacon-activation-start-date" />\r
                <label for="beacon-activation-start-time" id="beacon-activation-start-time-label">von</label>\r
                <input type="time" id="beacon-activation-start-time" />\r
                <label for="beacon-activation-end-date" id="beacon-activation-end-date-label">Enddatum</label>\r
                <input type="date" id="beacon-activation-end-date" />\r
                <label for="beacon-activation-end-time" id="beacon-activation-end-time-label">bis</label>\r
                <input type="time" id="beacon-activation-end-time" />\r
              </div>\r
\r
              <!-- Hidden Technical Fields -->\r
              <div style="display:none">\r
                <label for="beacon-uuid-input"></label>\r
                <input type="text" id="beacon-uuid-input" placeholder="" />\r
                <label for="beacon-major-input"></label>\r
                <input type="number" id="beacon-major-input" placeholder="" />\r
                <label for="beacon-minor-input"></label>\r
                <input type="number" id="beacon-minor-input" placeholder="" />\r
                <label for="beacon-note-en-input"></label>\r
                <input type="text" id="beacon-note-en-input" placeholder="" />\r
              </div>\r
            </div>\r
            <label for="properties-description-input" style="margin-top: 0.75rem"></label>\r
            <input type="text" id="properties-description-input" placeholder="" />\r
            <label for="properties-opening-hours-input" style="margin-top: 0.5rem"></label>\r
            <div style="display:flex; gap:.5rem; align-items:center">\r
              <input type="text" id="properties-opening-hours-input" placeholder="" readonly />\r
              <button id="open-opening-hours-modal-btn" class="mini-btn">Öffnungszeiten…</button>\r
            </div>\r
            <label for="properties-room-number-input" style="margin-top: 0.5rem"></label>\r
            <input type="text" id="properties-room-number-input" placeholder="" />\r
            <label for="properties-designation-select" style="margin-top: 0.5rem"></label>\r
            <select id="properties-designation-select">\r
              <option value="corridor">Korridor</option>\r
              <option value="office">Office/Büro</option>\r
              <option value="toilette">Toilette</option>\r
              <option value="store">Geschäft</option>\r
              <option value="bibliothek">Bibliothek</option>\r
              <option value="storage">Storage/Lager</option>\r
              <option value="lehrererraum">Lehrererraum</option>\r
              <option value="klassenraum">Klassenraum</option>\r
            </select>\r
            <div style="display:flex; gap:.5rem; margin-top:.5rem; align-items:center">\r
              <button id="open-occupancy-modal-btn" class="mini-btn">Besetzungszeiten…</button>\r
            </div>\r
          </div>\r
          <p id="properties-placeholder">Kein Element ausgewählt.</p>\r
        </div>\r
      </section>\r
    </div>\r
  </section>\r
\r
  <section class="toolbar-section" id="view-layers-controls">\r
    <h2 class="toolbar-header">Ansicht & Layer <span>▼</span></h2>\r
    <div class="toolbar-content">\r
      <div class="toolbar-separator" id="view-grid-sep">Raster</div>\r
      <label class="checkbox-label"\r
        ><input type="checkbox" id="toggleGridBtn" checked /> <span>Raster anzeigen</span></label\r
      >\r
      <label class="checkbox-label"\r
        ><input type="checkbox" id="toggleSnapBtn" checked />\r
        <span>Am Raster ausrichten</span></label\r
      >\r
      <div class="grid-control">\r
        <label for="gridSizeInput">Größe:</label>\r
        <div class="grid-steppers">\r
          <button id="gridMinusBtn" class="mini-btn" title="kleiner">−</button>\r
          <input type="number" id="gridSizeInput" value="40" min="5" step="5" />\r
          <button id="gridPlusBtn" class="mini-btn" title="größer">+</button>\r
        </div>\r
      </div>\r
      <div class="grid-control">\r
        <label id="gridMetersLabel" style="display:none"></label>\r
      </div>\r
      <div class="unit-hint" id="gridInfo">1 Kasten ≈ 40 px</div>\r
      <div class="button-group">\r
        <button id="mode-calibrate" title="Maßstab kalibrieren: Start- und Endpunkt klicken">\r
          <span>Kalibrieren</span>\r
        </button>\r
      </div>\r
      <div class="toolbar-separator" id="view-layers-sep">Layer</div>\r
      <label class="checkbox-label"\r
        ><input type="checkbox" class="layer-toggle" data-layer="area" checked />\r
        <span>Flächen</span></label\r
      >\r
      <label class="checkbox-label"\r
        ><input type="checkbox" class="layer-toggle" data-layer="path" checked />\r
        <span>Wege/Linien</span></label\r
      >\r
      <label class="checkbox-label"\r
        ><input type="checkbox" class="layer-toggle" data-layer="point" checked />\r
        <span>Punktelemente</span></label\r
      >\r
      <div class="toolbar-separator" id="dimensions-sep">Maße</div>\r
      <label class="checkbox-label"\r
        ><input type="checkbox" id="toggleAreaDimensions" />\r
        <span>Kantenlängen anzeigen</span></label\r
      >\r
      <label class="checkbox-label"\r
        ><input type="checkbox" id="togglePathLengths" />\r
        <span>Linienlängen anzeigen</span></label\r
      >\r
      <label class="checkbox-label"\r
        ><input type="checkbox" id="toggleCircleRadius" />\r
        <span>Radius anzeigen (Kreise)</span></label\r
      >\r
      <label class="checkbox-label" style="margin-top:8px"\r
        ><input type="checkbox" id="toggleBeaconRing" />\r
        <span>Signal‑Simulation anzeigen</span></label\r
      >\r
    </div>\r
  </section>\r
  <section class="toolbar-section">\r
    <div class="toolbar-content">\r
      <button id="show3DViewBtn" class="action-btn" title="3D-Vorschau öffnen">\r
        <span>3D-Vorschau</span>\r
      </button>\r
    </div>\r
  </section>\r
  </div>\r
</aside>\r
`,kl=`<aside id="backstage-panel" class="backstage-panel">\r
  <div class="backstage-header">\r
    <button id="backstage-close-btn" title="Zurück zur Hauptansicht">\r
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\r
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>\r
      </svg>\r
    </button>\r
    <div id="backstage-title" class="backstage-title"></div>\r
  </div>\r
\r
  <div id="backstage-file-content" class="backstage-content">\r
    <ul>\r
      <li>\r
        <button id="newProjectBtn" title="Neues Projekt erstellen">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path\r
              d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"\r
            ></path></svg\r
          ><span>Neues Projekt</span>\r
        </button>\r
      </li>\r
      <li>\r
        <button\r
          id="loadProjectBtn"\r
          title="Projektdatei laden"\r
          onclick="document.getElementById('loadProjectInput').click()"\r
        >\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path\r
              d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10z"\r
            ></path></svg\r
          ><span>Projekt laden</span>\r
        </button>\r
      </li>\r
      <li>\r
        <button id="saveProjectBtn" title="Projekt speichern">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path\r
              d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"\r
            ></path></svg\r
          ><span>Projekt speichern</span>\r
        </button>\r
      </li>\r
      <li>\r
        <button id="loadProjectFromServerBtn" title="Vom Server laden">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path d="M5 20h14v-2H5v2zm7-18L5 9h4v4h4V9h4l-6-7z"></path>\r
          </svg>\r
          <span>Vom Server laden</span>\r
        </button>\r
      </li>\r
      <div id="server-load-panel" class="server-load-panel hidden">\r
        <div class="server-load-row">\r
          <label for="serverProjectSelect" id="serverProjectLabel">Projekt</label>\r
          <select id="serverProjectSelect"></select>\r
          <button id="serverRefreshBtn" title="Aktualisieren" class="icon-only">\r
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
              <path d="M12 6V3L8 7l4 4V8c2.76 0 5 2.24 5 5 0 1.27-.48 2.43-1.27 3.31l1.46 1.46C18.1 16.63 19 14.93 19 13c0-3.87-3.13-7-7-7zm-5.73.69L4.81 5.23C3.9 6.1 3 7.8 3 9.73c0 3.87 3.13 7 7 7v3l4-4-4-4v3c-2.76 0-5-2.24-5-5 0-1.27.48-2.43 1.27-3.31z"></path>\r
            </svg>\r
          </button>\r
        </div>\r
        <div class="server-load-row">\r
          <div class="server-row-actions">\r
            <button id="serverProjectAddBtn" title="Hinzufügen" class="btn-compact">\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
                <path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>\r
              </svg>\r
              <span>Hinzufügen</span>\r
            </button>\r
            <button id="serverProjectDeleteBtn" title="Löschen" class="btn-compact btn-danger">\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
                <path d="M6 7h12M9 7V5h6v2M7 7l1 12h8l1-12" fill="currentColor"/>\r
              </svg>\r
              <span>Löschen</span>\r
            </button>\r
          </div>\r
        </div>\r
        <div class="server-load-row">\r
          <label for="serverVersionSelect" id="serverVersionLabel">Version</label>\r
          <select id="serverVersionSelect"></select>\r
          <button id="serverVersionRefreshBtn" title="Aktualisieren" class="icon-only">\r
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
              <path d="M12 6V3L8 7l4 4V8c2.76 0 5 2.24 5 5 0 1.27-.48 2.43-1.27 3.31l1.46 1.46C18.1 16.63 19 14.93 19 13c0-3.87-3.13-7-7-7zm-5.73.69L4.81 5.23C3.9 6.1 3 7.8 3 9.73c0 3.87 3.13 7 7 7v3l4-4-4-4v3c-2.76 0-5-2.24-5-5 0-1.27.48-2.43 1.27-3.31z"></path>\r
            </svg>\r
          </button>\r
        </div>\r
        <div class="server-load-row">\r
          <div id="serverSaveHint" class="server-save-hint"></div>\r
        </div>\r
        <div class="server-load-row">\r
          <div class="server-row-actions">\r
            <button id="serverLoadBtn" title="Laden">\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
                <path d="M5 20h14v-2H5v2zm7-18L5 9h4v4h4V9h4l-6-7z"></path>\r
              </svg>\r
              <span>Laden</span>\r
            </button>\r
            <button id="serverLoadLatestBtn" title="Neueste Version laden">\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
                <path d="M12 4l-4 4h3v4h2V8h3l-4-4zM6 14h12v2H6v-2z"></path>\r
              </svg>\r
              <span>Neueste Version</span>\r
            </button>\r
            <button id="serverSavePanelBtn" title="Speichern">\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
                <path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>\r
              </svg>\r
              <span>Speichern</span>\r
            </button>\r
          </div>\r
        </div>\r
        <div class="server-load-row">\r
          <div class="server-row-actions">\r
            <button id="serverVersionAddBtn" title="Hinzufügen" class="btn-compact">\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
                <path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>\r
              </svg>\r
              <span>Hinzufügen</span>\r
            </button>\r
            <button id="serverVersionDeleteBtn" title="Löschen" class="btn-compact btn-danger">\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
                <path d="M6 7h12M9 7V5h6v2M7 7l1 12h8l1-12" fill="currentColor"/>\r
              </svg>\r
              <span>Löschen</span>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
      <li>\r
        <button id="saveProjectToServerBtn" title="Zum Server speichern">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>\r
          </svg>\r
          <span>Zum Server speichern</span>\r
        </button>\r
      </li>\r
      <li>\r
        <button id="Einleitung" title="Kurze Einführung anzeigen">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <circle cx="12" cy="12" r="10" fill="currentColor" />\r
            <path d="M11 7h2v2h-2zm0 4h2v6h-2z" fill="#fff" /></svg\r
          ><span>Einleitung</span>\r
        </button>\r
      </li>\r
      <li>\r
        <button id="imprintBtn" title="Impressum">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path d="M11 7h2v2h-2zm0 4h2v6h-2z" />\r
          </svg>\r
          <span data-i18n="imprint">Impressum</span>\r
        </button>\r
      </li>\r
      <li>\r
        <button id="contactBtn" title="Kontakt">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />\r
          </svg>\r
          <span data-i18n="contact">Kontakt</span>\r
        </button>\r
      </li>\r
      <li>\r
        <button id="privacyBtn" title="Datenschutz">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />\r
          </svg>\r
          <span data-i18n="privacy">Datenschutz</span>\r
        </button>\r
      </li>\r
      <li>\r
        <button id="sponsorsBtn" title="Sponsoren">\r
          <span data-i18n="sponsorsButtonTitle">Sponsoren</span>\r
        </button>\r
      </li>\r
    </ul>\r
    \r
    <div class="sponsor-footer">\r
      <p data-i18n="sponsoredByMinew">Gesponsert von MINEW</p>\r
    </div>\r
  </div>\r
\r
  <div id="backstage-output-content" class="backstage-content">\r
    <ul>\r
      <li>\r
        <button id="exportGeoJsonBtn" title="Projekt als GeoJSON exportieren">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\r
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg\r
          ><span>GeoJSON exportieren</span>\r
        </button>\r
      </li>\r
      <li>\r
        <button id="showGeoJsonBtn" title="Live-GeoJSON anzeigen">\r
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\r
            <path\r
              d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"\r
            ></path></svg\r
          ><span>Live Code anzeigen</span>\r
        </button>\r
      </li>\r
    </ul>\r
    <div class="code-view-wrapper">\r
      <pre id="live-geojson-output"></pre>\r
    </div>\r
  </div>\r
\r
  <div id="backstage-overview-content" class="backstage-content">\r
    <div id="overview-stats-panel"></div>\r
    <div id="overview-floor-list"></div>\r
  </div>\r
</aside>\r
`,Pl=`<div id="info-modal" class="modal hidden">\r
  <div class="modal-overlay"></div>\r
  <div class="modal-content">\r
    <button id="info-modal-close-btn" class="modal-close-btn">&times;</button>\r
    <h2></h2>\r
    <p></p>\r
    <div id="intro-logo-wrapper" style="display: none; text-align: center; margin-bottom: 0.5rem">\r
      <img\r
        id="intro-logo"\r
        alt="Logo"\r
        src="assets/company_logo.png"\r
        style="height: 64px; width: auto; filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2))"\r
      />\r
    </div>\r
    <div id="intro-logo-row" class="intro-logos" style="display: none"></div>\r
    <div id="intro-content"></div>\r
  </div>\r
</div>\r
\r
<div id="type-manager-modal" class="modal hidden">\r
  <div class="modal-overlay"></div>\r
  <div class="modal-content" style="max-width: 650px">\r
    <button id="type-manager-close-btn" class="modal-close-btn">&times;</button>\r
    <h2></h2>\r
    <div style="display: flex; gap: 1.5rem; margin-top: 1rem; min-height: 350px">\r
      <div\r
        style="\r
          flex: 1;\r
          border-right: 1px solid var(--color-border);\r
          padding-right: 1.5rem;\r
          display: flex;\r
          flex-direction: column;\r
        "\r
      >\r
        <h4></h4>\r
        <ul\r
          id="type-manager-list"\r
          style="\r
            list-style: none;\r
            padding: 0;\r
            max-height: 300px;\r
            overflow-y: auto;\r
            border: 1px solid var(--color-border);\r
            border-radius: var(--radius-sm);\r
            flex-grow: 1;\r
          "\r
        ></ul>\r
        <button\r
          id="type-manager-new-btn"\r
          style="width: 100%; margin-top: 1rem; justify-content: center"\r
        >\r
          + Neuer Typ\r
        </button>\r
      </div>\r
      <div id="type-manager-details" style="flex: 2">\r
        <div id="type-manager-details-content" class="hidden">\r
          <label for="type-name-input"></label>\r
          <input type="text" id="type-name-input" style="width: 100%" placeholder="" />\r
\r
          <!-- SCHRIFT-STIL GRUPPE -->\r
          <div id="type-editor-text-settings">\r
            <hr style="margin: 1.5rem 0 0.5rem 0" />\r
            <h5\r
              id="type-text-style-header"\r
              style="margin: 0 0 0.5rem 0; color: var(--color-primary)"\r
            ></h5>\r
            <div\r
              style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; align-items: center"\r
            >\r
              <div>\r
                <label for="type-font-size-input"></label>\r
                <input\r
                  type="number"\r
                  id="type-font-size-input"\r
                  min="8"\r
                  max="32"\r
                  step="1"\r
                  style="width: 100%"\r
                />\r
              </div>\r
              <div>\r
                <label for="type-font-color-input"></label>\r
                <input\r
                  type="color"\r
                  id="type-font-color-input"\r
                  style="\r
                    width: 100%;\r
                    height: 40px;\r
                    padding: 0;\r
                    border: none;\r
                    background: none;\r
                    cursor: pointer;\r
                  "\r
                />\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- FLÄCHEN-STIL GRUPPE -->\r
          <div id="type-editor-area">\r
            <hr style="margin: 1.5rem 0 0.5rem 0" />\r
            <h5\r
              id="type-area-style-header"\r
              style="margin: 0 0 0.5rem 0; color: var(--color-primary)"\r
            ></h5>\r
            <div\r
              style="\r
                display: grid;\r
                grid-template-columns: 1fr 50px;\r
                gap: 1rem;\r
                align-items: center;\r
                margin-top: 1rem;\r
              "\r
            >\r
              <div>\r
                <label for="type-fill-color-input"></label>\r
                <input\r
                  type="color"\r
                  id="type-fill-color-input"\r
                  style="\r
                    width: 100%;\r
                    height: 40px;\r
                    padding: 0;\r
                    border: none;\r
                    background: none;\r
                    cursor: pointer;\r
                  "\r
                />\r
              </div>\r
              <div\r
                id="type-fill-color-swatch"\r
                title=""\r
                style="\r
                  width: 40px;\r
                  height: 40px;\r
                  border: 1px solid var(--color-border);\r
                  border-radius: var(--radius-sm);\r
                "\r
              ></div>\r
            </div>\r
            <label\r
              for="type-fill-opacity-slider"\r
              style="display: block; margin-top: 0.5rem"\r
            ></label>\r
            <input\r
              type="range"\r
              id="type-fill-opacity-slider"\r
              min="0"\r
              max="1"\r
              step="0.05"\r
              style="width: 100%"\r
            />\r
            <div\r
              style="\r
                display: grid;\r
                grid-template-columns: 1fr 50px;\r
                gap: 1rem;\r
                align-items: center;\r
                margin-top: 1rem;\r
              "\r
            >\r
              <div>\r
                <label for="type-stroke-color-input"></label>\r
                <input\r
                  type="color"\r
                  id="type-stroke-color-input"\r
                  style="\r
                    width: 100%;\r
                    height: 40px;\r
                    padding: 0;\r
                    border: none;\r
                    background: none;\r
                    cursor: pointer;\r
                  "\r
                />\r
              </div>\r
              <div\r
                id="type-stroke-color-swatch"\r
                title=""\r
                style="\r
                  width: 40px;\r
                  height: 40px;\r
                  border: 1px solid var(--color-border);\r
                  border-radius: var(--radius-sm);\r
                "\r
              ></div>\r
            </div>\r
          </div>\r
\r
          <!-- PUNKT-STIL GRUPPE -->\r
          <div id="type-editor-point">\r
            <hr style="margin: 1.5rem 0 0.5rem 0" />\r
            <h5\r
              id="type-point-style-header"\r
              style="margin: 0 0 0.5rem 0; color: var(--color-primary)"\r
            ></h5>\r
            <label style="display: block; margin-top: 1rem"></label>\r
            <div\r
              id="type-icon-library"\r
              style="\r
                display: grid;\r
                grid-template-columns: repeat(auto-fill, 40px);\r
                gap: 8px;\r
                max-height: 150px;\r
                overflow-y: auto;\r
                border: 1px solid var(--color-border);\r
                padding: 8px;\r
                border-radius: var(--radius-sm);\r
              "\r
            ></div>\r
            <label for="type-icon-color-input" style="display: block; margin-top: 1rem"></label>\r
            <input type="color" id="type-icon-color-input" style="width: 100%" />\r
          </div>\r
\r
          <div id="type-preview" class="type-preview hidden">\r
            <hr style="margin: 1.5rem 0 0.5rem 0" />\r
            <h5\r
              id="type-preview-header"\r
              style="margin: 0 0 0.5rem 0; color: var(--color-primary)"\r
            ></h5>\r
            <div id="type-preview-area" class="type-preview__area">\r
              <div id="type-preview-area-rect">\r
                <span id="type-preview-area-label">Sample area</span>\r
              </div>\r
            </div>\r
            <div id="type-preview-point" class="type-preview__point">\r
              <div id="type-preview-point-icon"></div>\r
              <span id="type-preview-point-label">Sample point</span>\r
            </div>\r
          </div>\r
\r
          <button id="type-manager-delete-btn" class="danger" style="margin-top: 2rem">\r
            Typ löschen\r
          </button>\r
        </div>\r
        <p id="type-manager-placeholder">\r
          Wählen Sie links einen Typ aus oder erstellen Sie einen neuen.\r
        </p>\r
      </div>\r
    </div>\r
    <div\r
      style="\r
        text-align: right;\r
        margin-top: 2rem;\r
        border-top: 1px solid var(--color-border);\r
        padding-top: 1rem;\r
      "\r
    >\r
      <button id="type-manager-save-btn">Änderungen übernehmen & schließen</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<div id="new-type-choice-modal" class="modal hidden">\r
  <div class="modal-overlay"></div>\r
  <div class="modal-content" style="max-width: 400px">\r
    <h4>Neuen Element-Typ erstellen</h4>\r
    <p>Wählen Sie den Basis-Typ aus:</p>\r
    <div style="display: flex; gap: 1rem; margin-top: 1rem">\r
      <button id="choose-type-area" style="flex: 1; justify-content: center">Fläche</button>\r
      <button id="choose-type-point" style="flex: 1; justify-content: center">Punkt</button>\r
    </div>\r
    <button\r
      id="new-type-choice-cancel"\r
      style="width: 100%; margin-top: 1rem; background-color: var(--color-secondary)"\r
    >\r
      Abbrechen\r
    </button>\r
  </div>\r
</div>\r
<div id="context-menu" class="context-menu">\r
  <ul>\r
    <li id="ctx-menu-rename">Umbenennen...</li>\r
    <li id="ctx-menu-copy">Kopieren</li>\r
    <li id="ctx-menu-delete" class="danger">Löschen</li>\r
    <li class="separator"></li>\r
    <li class="has-submenu">\r
      Typ ändern\r
      <ul id="ctx-menu-type-submenu" class="submenu"></ul>\r
    </li>\r
    <li id="ctx-menu-toggle-accessibility">Barrierefreiheit umschalten</li>\r
    <li id="ctx-menu-edit-contents">Rauminhalt bearbeiten...</li>\r
    <li id="ctx-menu-edit-opening-hours">Öffnungszeiten bearbeiten...</li>\r
    <li id="ctx-menu-edit-occupancy">Besetzungszeiten bearbeiten...</li>\r
    <li class="separator"></li>\r
    <li id="ctx-menu-add-overlap-point">Punkt im Schnittbereich setzen</li>\r
    <li class="has-submenu">\r
      Etage\r
      <ul id="ctx-floor-submenu" class="submenu">\r
        <li id="ctx-floor-add">Hinzufügen...</li>\r
        <li id="ctx-floor-rename">Umbenennen...</li>\r
      </ul>\r
    </li>\r
  </ul>\r
</div>\r
\r
<div id="input-prompt-modal" class="modal hidden">\r
  <div class="modal-overlay"></div>\r
  <div class="modal-content" style="max-width: 420px">\r
    <h4 id="input-prompt-label"></h4>\r
    <input id="input-prompt-input" type="text" class="modal-input" />\r
    <div class="modal-actions">\r
      <button id="input-prompt-ok" class="btn-primary">OK</button>\r
      <button id="input-prompt-cancel">Abbrechen</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<div id="confirm-modal" class="modal hidden">\r
  <div class="modal-overlay"></div>\r
  <div class="modal-content" style="max-width: 420px">\r
    <p id="confirm-message"></p>\r
    <div class="modal-actions">\r
      <button id="confirm-ok" class="btn-primary">OK</button>\r
      <button id="confirm-cancel">Abbrechen</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Lade-/Status-Modal -->\r
<div id="loading-modal" class="modal hidden">\r
  <div class="modal-overlay"></div>\r
  <div class="modal-content" style="max-width: 420px; text-align: center">\r
    <div class="spinner" aria-hidden="true"></div>\r
    <p id="loading-message" style="margin-top: 0.75rem"></p>\r
    <div class="modal-actions" style="justify-content: center">\r
      <button id="loading-ok" class="btn-primary">OK</button>\r
    </div>\r
  </div>\r
</div>\r
<div id="room-contents-modal" class="modal hidden">\r
  <div class="modal-overlay"></div>\r
  <div class="modal-content" style="max-width: 420px">\r
    <h4 id="room-contents-title">Rauminhalt</h4>\r
    <div id="room-contents-list" style="margin: 0.5rem 0; max-height: 240px; overflow-y: auto; border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 0.5rem;">\r
    </div>\r
    <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">\r
      <input id="room-contents-new-item" type="text" placeholder="Eintrag hinzufügen..." style="flex: 1;" />\r
      <button id="room-contents-add-btn" class="btn-primary">+</button>\r
    </div>\r
    <div class="modal-actions" style="margin-top: 0.75rem">\r
      <button id="room-contents-save" class="btn-primary">OK</button>\r
      <button id="room-contents-cancel">Abbrechen</button>\r
    </div>\r
  </div>\r
</div>\r
<div id="occupancy-modal" class="modal hidden">\r
  <div class="modal-overlay"></div>\r
  <div class="modal-content" style="max-width: 520px">\r
    <h4 id="occupancy-title">Besetzungszeiten</h4>\r
    <div id="occupancy-list" style="margin: 0.5rem 0; max-height: 240px; overflow-y: auto; border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 0.5rem;"></div>\r
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem;">\r
      <label for="occupancy-type" id="occupancy-type-label">Art</label>\r
      <select id="occupancy-type">\r
        <option value="weekday">Wochentag</option>\r
        <option value="date">Kalendertag</option>\r
        <option value="range">Zeitraum</option>\r
      </select>\r
      <label for="occupancy-weekday" id="occupancy-weekday-label">Wochentag</label>\r
      <select id="occupancy-weekday">\r
        <option value="1">Mo</option>\r
        <option value="2">Di</option>\r
        <option value="3">Mi</option>\r
        <option value="4">Do</option>\r
        <option value="5">Fr</option>\r
        <option value="6">Sa</option>\r
        <option value="0">So</option>\r
      </select>\r
      <label for="occupancy-date" id="occupancy-date-label">Kalendertag</label>\r
      <input id="occupancy-date" type="date" />\r
      <label for="occupancy-start" id="occupancy-start-label">von</label>\r
      <input id="occupancy-start" type="time" />\r
      <label for="occupancy-end" id="occupancy-end-label">bis</label>\r
      <input id="occupancy-end" type="time" />\r
    </div>\r
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem;">\r
      <label for="occupancy-range-start" id="occupancy-range-start-label">Zeitraum von</label>\r
      <input id="occupancy-range-start" type="date" />\r
      <label for="occupancy-range-end" id="occupancy-range-end-label">Zeitraum bis</label>\r
      <input id="occupancy-range-end" type="date" />\r
    </div>\r
    <div style="display:flex; gap:.5rem; margin-top:.5rem">\r
      <label for="occupancy-note" id="occupancy-note-label" style="align-self:center">Notiz</label>\r
      <input id="occupancy-note" type="text" placeholder="Notiz..." style="flex:1" />\r
      <button id="occupancy-add-btn" class="btn-primary">Hinzufügen</button>\r
    </div>\r
    <div class="modal-actions" style="margin-top: 0.75rem">\r
      <button id="occupancy-save" class="btn-primary">OK</button>\r
      <button id="occupancy-cancel">Abbrechen</button>\r
    </div>\r
  </div>\r
</div>\r
\r
<div id="opening-hours-modal" class="modal hidden">\r
  <div class="modal-overlay"></div>\r
  <div class="modal-content" style="max-width: 560px">\r
    <h4 id="opening-hours-title">Öffnungszeiten</h4>\r
    <h5 id="opening-hours-weekly-label" style="margin-top:.5rem">Wochentage</h5>\r
    <div id="opening-hours-weekly-list" style="max-height: 180px; overflow:auto; border:1px solid var(--color-border); border-radius: var(--radius-sm); padding:.5rem"></div>\r
    <div style="display:flex; flex-direction:column; gap:.5rem; margin-top:.5rem">\r
      <label for="opening-hours-weekday" id="opening-hours-weekday-label">Wochentag</label>\r
      <select id="opening-hours-weekday">\r
        <option value="1">Mo</option>\r
        <option value="2">Di</option>\r
        <option value="3">Mi</option>\r
        <option value="4">Do</option>\r
        <option value="5">Fr</option>\r
        <option value="6">Sa</option>\r
        <option value="0">So</option>\r
      </select>\r
      <label for="opening-hours-start" id="opening-hours-start-label">von</label>\r
      <input id="opening-hours-start" type="time" />\r
      <label for="opening-hours-end" id="opening-hours-end-label">bis</label>\r
      <input id="opening-hours-end" type="time" />\r
    </div>\r
    <button id="opening-hours-add-rule" class="btn-primary" style="margin-top:.5rem">Regel hinzufügen</button>\r
\r
    <h5 id="opening-hours-exceptions-label" style="margin-top:.75rem">Ausnahmen</h5>\r
    <div id="opening-hours-exceptions-list" style="max-height: 180px; overflow:auto; border:1px solid var(--color-border); border-radius: var(--radius-sm); padding:.5rem"></div>\r
    <div style="display:flex; flex-direction:column; gap:.5rem; margin-top:.5rem">\r
      <label for="opening-hours-ex-date" id="opening-hours-ex-date-label">Kalendertag</label>\r
      <input id="opening-hours-ex-date" type="date" />\r
      <label for="opening-hours-ex-start" id="opening-hours-ex-start-label">von</label>\r
      <input id="opening-hours-ex-start" type="time" />\r
      <label for="opening-hours-ex-end" id="opening-hours-ex-end-label">bis</label>\r
      <input id="opening-hours-ex-end" type="time" />\r
    </div>\r
    <button id="opening-hours-add-exception" class="btn-primary" style="margin-top:.5rem">Ausnahme hinzufügen</button>\r
\r
    <h5 id="opening-hours-ranges-label" style="margin-top:.75rem">Zeitspanne</h5>\r
    <div id="opening-hours-ranges-list" style="max-height: 120px; overflow:auto; border:1px solid var(--color-border); border-radius: var(--radius-sm); padding:.5rem"></div>\r
    <div style="display:flex; flex-direction:column; gap:.5rem; margin-top:.5rem">\r
      <label for="opening-hours-range-start" id="opening-hours-range-start-label">Zeitraum von</label>\r
      <input id="opening-hours-range-start" type="date" />\r
      <label for="opening-hours-range-end" id="opening-hours-range-end-label">Zeitraum bis</label>\r
      <input id="opening-hours-range-end" type="date" />\r
      <label for="opening-hours-range-time-start" id="opening-hours-range-time-start-label">von</label>\r
      <input id="opening-hours-range-time-start" type="time" />\r
      <label for="opening-hours-range-time-end" id="opening-hours-range-time-end-label">bis</label>\r
      <input id="opening-hours-range-time-end" type="time" />\r
    </div>\r
    <button id="opening-hours-add-range" class="btn-primary" style="margin-top:.5rem">Zeitraum hinzufügen</button>\r
    <div class="modal-actions" style="margin-top: 0.75rem">\r
      <button id="opening-hours-save" class="btn-primary">OK</button>\r
      <button id="opening-hours-cancel">Abbrechen</button>\r
    </div>\r
  </div>\r
</div>\r
<!-- Unified Date Picker root -->\r
<div id="imd-date-picker" class="imd-date-picker" aria-hidden="true">\r
  <div class="imd-date-picker__header">\r
    <button type="button" id="imd-dp-prev" aria-label="Prev">‹</button>\r
    <div class="imd-date-picker__month" id="imd-dp-month"></div>\r
    <button type="button" id="imd-dp-next" aria-label="Next">›</button>\r
  </div>\r
  <div class="imd-date-picker__grid" id="imd-dp-grid">\r
    <!-- populated dynamically -->\r
  </div>\r
  <div class="imd-date-picker__footer">\r
    <button type="button" id="imd-dp-clear"></button>\r
    <button type="button" id="imd-dp-today" class="primary"></button>\r
  </div>\r
  <input id="imd-dp-target" type="hidden" />\r
</div>\r
`;function Bl(){const t=document.getElementById("toolbar-container"),o=document.getElementById("backstage-container"),n=document.getElementById("modals-container");t&&(t.innerHTML=Il),o&&(o.innerHTML=kl),n&&(n.innerHTML=Pl)}document.addEventListener("DOMContentLoaded",()=>{Bl(),setTimeout(async()=>{const o=location.pathname.match(/^\/(floor|etage)\/(.+)$/);if(o){try{await re.probeBackend()}catch{}Gr();const s=decodeURIComponent(o[2]);e.activeFloorId=s;try{const g=(location.hash||"").match(/#proj=([^&]+)/);if(g&&g[1]){const E=decodeURIComponent(g[1]),I=decodeURIComponent(escape(atob(E))),k=JSON.parse(I);Ae(k)}}catch{}try{if(!e.project?.features?.length){const S=sessionStorage.getItem("imd_editor_project");if(S){const g=JSON.parse(S);Ae(g)}}}catch{}try{const S=localStorage.getItem("imd_editor_project");if(S){const g=JSON.parse(S);Ae(g)}}catch{}const r=document.querySelector(".app-header");r&&(r.style.display="none");const i=document.getElementById("toolbar-container");i&&(i.style.display="none");const l=document.getElementById("backstage-container");l&&(l.style.display="none");const c=document.getElementById("page-scrollbar-y");c&&(c.style.display="none");const d=document.querySelector(".canvas-wrapper");d&&(d.style.display="none");const m=document.getElementById("floor3DView");m&&(m.style.display="flex",m.style.height="100vh",m.style.width="100vw"),e.threeDPan={x:50,y:50},e.threeDScale=.8;const b=await tt(()=>import("./3d-Co_xE0gz.js"),__vite__mapDeps([0,1])),h=await tt(()=>import("./floor3D-DixRsG1v.js"),[]);b.setup3DViewControls(),b.update3DFloorSelector(),h.render3DFloorStack(e.project,"floor3DContent");const v=document.getElementById("floor3DView");v&&(v.style.cursor="grab",v.addEventListener("mousedown",b.start3DDrag),v.addEventListener("mousemove",b.do3DDrag),v.addEventListener("mouseup",b.stop3DDrag),v.addEventListener("mouseleave",b.stop3DDrag),v.addEventListener("wheel",b.handle3DZoom,{passive:!1})),window.addEventListener("storage",async S=>{if(S.key==="imd_editor_project"&&S.newValue)try{const g=JSON.parse(S.newValue);Ae(g),(await tt(()=>import("./floor3D-DixRsG1v.js"),[])).render3DFloorStack(e.project,"floor3DContent")}catch{}})}else{Gr(),fs();try{await re.probeBackend()}catch{}N(),console.log("IMD Editor erfolgreich initialisiert.")}const n=300*1e3;setInterval(async()=>{if(re.isAvailable())try{await Zr(e.currentServerProjectId,e.currentServerVersion)}catch{}try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}},n)},0)});export{Ce as a,pe as b,Tt as c,a as g,e as s,le as u};
