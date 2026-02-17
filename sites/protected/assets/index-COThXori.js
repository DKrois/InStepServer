const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/3d-D_Rxwher.js","assets/floor3D-DqIwNvyl.js"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const qi="modulepreload",Vi=function(t){return"/"+t},or={},nt=function(o,n,s){let i=Promise.resolve();if(n&&n.length>0){let d=function(m){return Promise.all(m.map(v=>Promise.resolve(v).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");i=d(n.map(m=>{if(m=Vi(m),m in or)return;or[m]=!0;const v=m.endsWith(".css"),f=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${f}`))return;const h=document.createElement("link");if(h.rel=v?"stylesheet":qi,v||(h.as="script"),h.crossOrigin="",h.href=m,c&&h.setAttribute("nonce",c),document.head.appendChild(h),v)return new Promise((S,g)=>{h.addEventListener("load",S),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${m}`)))})}))}function r(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return i.then(l=>{for(const c of l||[])c.status==="rejected"&&r(c.reason);return o().catch(r)})};let Wr="en";function p(t,o){return{de:t,en:o}}const Je={file:p("Datei","File"),output:p("Ausgabe","Output"),overview:p("Übersicht","Overview"),darkMode:p("Dunkles Thema","Dark Theme"),lightMode:p("Helles Thema","Light Theme"),backToApp:p("Zurück zur Anwendung","Back to Application"),filePanelTitle:p("Datei","File"),newProject:p("Neues Projekt","New Project"),loadProject:p("Projekt laden","Load Project"),saveProject:p("Projekt speichern","Save Project"),loadFromServer:p("Vom Server laden","Load from Server"),saveToServer:p("Zum Server speichern","Save to Server"),newProjectOption:p("(Neues Projekt)","(New Project)"),newVersionOption:p("(Neue Version)","(New Version)"),introduction:p("Einleitung","Introduction"),serverProject:p("Projekt","Project"),serverVersion:p("Version","Version"),refresh:p("Aktualisieren","Refresh"),load:p("Laden","Load"),latestVersion:p("Neueste Version","Latest Version"),save:p("Speichern","Save"),search:p("Suche","Search"),searchPlaceholder:p("Projekt suchen...","Search project..."),projectDetails:p("Projektdetails","Project Details"),detailId:p("ID:","ID:"),detailName:p("Name:","Name:"),detailLatest:p("Neueste Version:","Latest Version:"),detailFloorplans:p("Grundrisse:","Floorplans:"),detailCreated:p("Erstellt:","Created:"),detailUpdated:p("Aktualisiert:","Updated:"),confirmOverwriteVersion:p('Alte Version {1} von "{0}" überschreiben?','Overwrite old version {1} of "{0}"?'),add:p("Hinzufügen","Add"),deleteAction:p("Löschen","Delete"),confirmDeleteProject:p('Projekt "{0}" (# {1}) wirklich löschen? Dies entfernt alle Versionen.','Really delete project "{0}" (# {1})? This will remove all versions.'),confirmDeleteVersion:p('Version {1} von Projekt "{0}" (# {2}) löschen?','Delete version {1} of project "{0}" (# {2})?'),infoNewProject:p("Neues Projekt wird beim Speichern erstellt.","A new project will be created on save."),infoNewVersion:p("Neue Version wird beim Speichern erstellt.","A new version will be created on save."),saveTargetVersion:p('Speichern in Version {1} von "{0}".','Save into version {1} of "{0}".'),alertSelectVersionFirst:p("Bitte zuerst eine Version auswählen.","Please select a version first."),outputPanelTitle:p("Ausgabe","Output"),exportGeoJson:p("GeoJSON exportieren","Export GeoJSON"),showLiveCode:p("Live Code anzeigen","Show Live Code"),hideCode:p("Code ausblenden","Hide Code"),overviewPanelTitle:p("Projektübersicht","Project Overview"),unnamedProject:p("Unbenanntes Projekt","Unnamed Project"),stat_project:p("Projekt","Project"),stat_floors:p("Etagen","Floors"),stat_areas:p("Flächen","Areas"),stat_points:p("Punkte","Points"),overviewBeacons:p("Beacons","Beacons"),sponsoredBy:p("Gesponsert von","Sponsored by"),sponsoredByMinew:p("Gesponsert von MINEW","Sponsored by MINEW"),supportedByPalfinger:p("Unterstützt von PALFINGER","Supported by PALFINGER"),sponsorsButtonTitle:p("Sponsoren","Sponsors"),imprint:p("Impressum","Legal Notice"),contact:p("Kontakt","Contact"),privacy:p("Datenschutz","Privacy Policy"),project:p("Projekt","Project"),projectName:p("Projektname","Project Name"),enterProjectName:p("Projektname eingeben...","Enter project name..."),edit:p("Bearbeiten","Edit"),undo:p("Rückgängig","Undo"),redo:p("Wiederherstellen","Redo"),floors:p("Etagen","Floors"),currentFloor:p("Aktuelle Etage","Current Floor"),newFloor:p("Neue Etage","New Floor"),floorplan:p("Grundriss...","Floorplan..."),prompt_newFloorName:p("Name der neuen Etage:","Name of the new floor:"),renameFloor:p("Etage umbenennen","Rename Floor"),prompt_renameFloor:p('Neuen Namen für die Etage "{0}" eingeben:','Enter new name for floor "{0}":'),defaultFloorName:p("Standard-Etage","Default Floor"),tools:p("Werkzeuge","Tools"),pan:p("Bewegen","Pan"),select:p("Auswählen","Select"),moveElement:p("Verschieben","Move Element"),merge:p("Zusammenfügen","Merge"),scissors:p("Schere","Scissors"),delete:p("Löschen","Delete"),areas:p("Flächen","Areas"),rectangle:p("Viereck","Rectangle"),square:p("Quadrat","Square"),polygon:p("Polygon","Polygon"),circle:p("Kreis","Circle"),linesAndPoints:p("Linien & Punkte","Lines & Points"),line:p("Linie","Line"),door:p("Tür","Door"),arc:p("Bogen","Arc"),point:p("Punkt","Point"),area:p("Fläche","Area"),saveAndClose:p("Änderungen übernehmen & schließen","Save & Close"),calibrateScale:p("Kalibrieren","Calibrate"),calibratePrompt:p("Kalibrierung: Wählen Sie eine bestehende Kante oder zeichnen Sie eine Referenzlinie und geben Sie die reale Länge in Metern ein.","Calibration: Select an existing edge or draw a reference line, then enter the real length in meters."),calibratePromptShort:p("Kalibrierung: Geben Sie die reale Länge in Metern ein.","Calibration: enter the real length in meters."),elementType:p("Element-Typ","Element Type"),manageTypes:p("Typen verwalten...","Manage Types..."),newAreaType:p("Neue Fläche","New Area Type"),newPointType:p("Neuer Punkt","New Point Type"),doorLabel:p("Tür","Door"),lineLabel:p("Linie","Line"),arcLabel:p("Bogen","Arc"),defaultRoomLabel:p("Beispielraum","Sample Room"),customIndicatorSuffix:p(" (Benutzerdefiniert)"," (Custom)"),alert_selectAtLeastTwo:p("Bitte mindestens zwei Elemente auswählen.","Please select at least two elements."),alert_notEnoughPoints:p("Nicht genug Punkte für eine Fläche.","Not enough points for an area."),fontSettings:p("Schrift-Einstellungen","Font Settings"),fontSize:p("Schriftgröße","Font Size"),fontColor:p("Schriftfarbe","Font Color"),fontSizeDesc:p("Bestimmt die Schriftgröße für Beschriftungen dieses Typs.","Controls the label font size for this type."),fontColorDesc:p("Legt die Textfarbe der Beschriftung fest.","Defines the text color of the label."),optgroupAreas:p("Flächen","Areas"),optgroupPointElements:p("Punkt-Elemente","Point Elements"),optgroupConnectors:p("Konnektoren","Konnektoren"),properties:p("Eigenschaften","Properties"),beacon_parameters:p("Beacon Parameter","Beacon Parameters"),label:p("Bezeichnung","Label"),enterElementLabel:p("Bezeichnung des Elements...","Enter element label..."),noElementSelected:p("Kein Element ausgewählt.","No element selected."),description:p("Beschreibung","Description"),occupancyTimes:p("Besetzungszeiten","Occupancy Times"),isEmptyArea:p("Leere Fläche (Lichthof/Stiegenhaus)","Empty Area (Courtyard/Stairwell)"),occupancyBtn:p("Besetzungszeiten...","Occupancy Times..."),openingHoursBtn:p("Öffnungszeiten...","Opening Hours..."),viewAndLayers:p("Ansicht & Layer","View & Layers"),grid:p("Raster","Grid"),layers:p("Layer","Layers"),showGrid:p("Raster anzeigen","Show Grid"),snapToGrid:p("Am Raster ausrichten","Snap to Grid"),size:p("Größe:","Size:"),metersPerCell:p("Meter/Kasten:","Meters per cell:"),layersAreas:p("Flächen","Areas"),layersPaths:p("Wege/Linien","Paths/Lines"),layersPoints:p("Punktelemente","Point Elements"),preview3D:p("3D-Vorschau","3D Preview"),dimensions:p("Maße","Dimensions"),showEdgeLengths:p("Kantenlängen anzeigen","Show edge lengths"),showCornerAngles:p("Eckenwinkel anzeigen","Show corner angles"),showLineLengths:p("Linienlängen anzeigen","Show line lengths"),showCircleRadius:p("Radius anzeigen (Kreise)","Show radius (circles)"),showBeaconRangeRing:p("Signal‑Simulation anzeigen","Show signal simulation"),analysis:p("Analyse","Analysis"),simulateSignal:p("Signal simulieren","Simulate signal"),simulationOff:p("Simulation aus","Stop simulation"),welcomeTitle:p("Willkommen beim IMD Editor!","Welcome to IMD Editor!"),welcomeText:p("Dies ist ein Werkzeug zur Digitalisierung von Indoor-Karten.","This is a tool for digitizing indoor maps."),basicsTitle:p("Grundlagen der Bedienung:","Basic Operation:"),basicsTools:p("Werkzeuge: Wählen Sie links ein Werkzeug (z.B. Fläche, Punkt), um Elemente auf der Karte zu erstellen.","Tools: Select a tool on the left (e.g., Area, Point) to create elements on the map."),basicsZoom:p("Zoomen: Benutzen Sie das Mausrad, um in die Karte hinein- und herausuzoomen.","Zooming: Use the mouse wheel to zoom in and out of the map."),basicsPan:p("Verschieben der Ansicht: Halten Sie die mittlere Maustaste gedrückt und bewegen Sie die Maus, um die Kartenansicht zu verschieben.","Panning the view: Hold down the middle mouse button and move the mouse to pan the map view."),basicsMove:p("Elemente verschieben: Wählen Sie ein Element aus und ziehen Sie es mit der Maus an eine neue Position.","Move elements: Select an element and drag it with the mouse to a new position."),basicsSave:p('Speichern: Vergessen Sie nicht, Ihr Projekt über das "Datei"-Menü zu speichern.',`Saving: Don't forget to save your project via the "File" menu.`),intro_welcomeTitle:p("Willkommen im Editor!","Welcome to the Editor!"),intro_startText:p("Starten Sie, indem Sie Ihrem Projekt oben links einen Namen geben und rechts unter „Etagen“ einen Grundriss laden.","Start by giving your project a name in the top left and load a floor plan on the right under “Floors.”"),intro_sectionTitle:p("So bedienen Sie die Karte:","Map Controls"),intro_zoom:p("Zoomen: Drehen Sie das Mausrad.","Zoom: Scroll the mouse wheel."),intro_pan:p("Verschieben: Halten Sie das Mausrad gedrückt und bewegen Sie die Maus.","Pan: Hold down the mouse wheel and move the mouse."),intro_preview3d:p("3D-Vorschau: Nutzen Sie den Button unten links, um Ihr Modell räumlich zu sehen.","3D Preview: Use the button in the bottom left to view your model in 3D."),intro_draw_title:p("Zeichnen & Bearbeiten:","Drawing & Editing:"),intro_analysis_title:p("Analyse","Analysis"),intro_finishShape:p("Form beenden: Ein Doppelklick schließt eine gezeichnete Fläche ab.","Finish shape: Double-click to close a drawn area."),intro_escape:p("Abbrechen (ESC): Drücken Sie die ESC-Taste, um ein Werkzeug wegzulegen oder die Auswahl aufzuheben.","Cancel (ESC): Press ESC to put away a tool or clear the selection."),intro_merge:p("Klicke mindestens zwei Flächen auf derselben Etage an und drücke Enter, um sie zu einer neuen Fläche zusammenzufassen.","Click at least two areas on the same floor and press Enter to merge them into a new area."),intro_calibrate:p("Kalibrierung: Wählen Sie eine bestehende Kante oder zeichnen Sie eine Referenzlinie und geben Sie die reale Länge in Metern ein.","Calibration: Select an existing edge or draw a reference line, then enter the real length in meters."),intro_shortcuts_title:p("Wichtige Tastenkürzel:","Key shortcuts:"),intro_undo_redo:p("Strg + Z / Y: Fehler rückgängig machen / wiederherstellen.","Ctrl + Z / Y: Undo / Redo actions."),intro_copy_paste:p("Strg + C / V: Elemente kopieren und einfügen.","Ctrl + C / V: Copy and paste elements."),intro_paste_active_floor:p("Einfügen platziert Kopien auf der aktiven Etage.","Pasting places copies on the active floor."),intro_select_all:p("Strg + A: Alle Elemente der aktiven Etage auswählen.","Ctrl + A: Select all elements on the active floor."),intro_delete:p("Entf: Das ausgewählte Element löschen.","Delete: Remove the selected element."),intro_shift_zoom:p("Shift (Umschalt): Gedrückt halten, um die Lupe zu aktivieren.","Shift: Hold to activate the magnifier."),intro_alt_click:p("Alt + Klick: Fügt einer bestehenden Linie einen neuen Punkt hinzu.","Alt + Click: Use Alt + Click to add a new point to an existing line."),intro_full_content:p(`<h2>Interface Einstellungen</h2>
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
</ul>`),intro_tip_title:p("Tipp","Tip"),intro_save_reminder:p("Vergessen Sie nicht, Ihr Projekt regelmäßig über das Menü „Datei“ zu speichern!","Remember to save your project regularly via the “File” menu!"),mergeHintShort:p("Klicke mindestens zwei Flächen auf derselben Etage an und drücke Enter, um sie zu einer neuen Fläche zusammenzufassen.","Click at least two areas on the same floor and press Enter to merge them into a new area."),alert_selectTwo:p("Bitte genau zwei Elemente auswählen.","Please select exactly two elements."),alert_sameFloor:p("Beide Elemente müssen auf derselben Etage liegen.","Both elements must be on the same floor."),alert_noOverlap:p("Kein Schnittbereich gefunden.","No overlap found."),manageTypesTitle:p("Element-Typen verwalten","Manage Element Types"),types:p("Typen","Types"),newType:p("+ Neuer Typ","+ New Type"),typeName:p("Typ-Name","Type Name"),exampleMarketing:p("z.B. Marketing","e.g. Marketing"),textStyle:p("Schrift-Stil","Font Style"),areaStyle:p("Flächen-Stil","Area Style"),pointStyle:p("Punkt-Stil","Point Style"),fillColor:p("Füllfarbe","Fill Color"),fillColorDesc:p("Farbe der Innenfläche des Elements (z.B. Raum).","Color of the element's inner area (e.g., room)."),fillOpacity:p("Deckkraft der Füllung","Fill Opacity"),fillOpacityDesc:p("Transparenz der Füllfarbe (0.0 = transparent, 1.0 = opak).","Transparency of the fill color (0.0 = transparent, 1.0 = opaque)."),strokeColor:p("Rahmenfarbe","Border Color"),strokeColorDesc:p("Farbe des Rahmens/der Umrandung des Elements.","Color of the element's border/outline."),currentFillColor:p("Aktuelle Füllfarbe","Current Fill Color"),currentStrokeColor:p("Aktuelle Rahmenfarbe","Current Border Color"),iconSelection:p("Icon Auswahl","Icon Selection"),iconSelectionDesc:p("Wählen Sie ein Symbol für diesen Punkt-Typ.","Select an icon for this point type."),iconColor:p("Icon-Farbe","Icon Color"),iconColorDesc:p("Farbe des Icons auf der Karte.","Color of the icon on the map."),deleteType:p("Typ löschen","Delete Type"),typeManagerPlaceholder:p("Wählen Sie links einen Typ aus oder erstellen Sie einen neuen.","Select a type on the left or create a new one."),saveChangesAndClose:p("Änderungen übernehmen & schließen","Apply Changes & Close"),typePreview:p("Vorschau","Preview"),previewAreaLabel:p("Beispielraum","Sample Room"),previewPointLabel:p("Beispielpunkt","Sample Point"),areasGroup:p("Flächen","Areas"),pointsConnectorsGroup:p("Punkte & Konnektoren","Points & Connectors"),createNewElementType:p("Neuen Element-Typ erstellen","Create New Element Type"),chooseBaseType:p("Wählen Sie den Basis-Typ aus:","Choose the base type:"),choiceArea:p("Fläche","Area"),choicePoint:p("Punkt","Point"),cancel:p("Abbrechen","Cancel"),ok:p("OK","OK"),rename:p("Umbenennen...","Rename..."),copy:p("Kopieren","Copy"),changeType:p("Typ ändern","Change Type"),ctxAddOverlapPoint:p("Punkt im Schnittbereich setzen","Place point at overlap"),toggleAccessibility:p("Barrierefreiheit umschalten","Toggle Accessibility"),accessible:p("Barrierefrei","Accessible"),roomContentsTitle:p("Rauminhalt","Contents"),roomContentsPlaceholder:p("Eintrag hinzufügen...","Add entry..."),roomContentsAdd:p("Hinzufügen","Add"),accessibleRoomsHeader:p("Barrierefreie Räume","Accessible Rooms"),openingHours:p("Öffnungszeiten","Opening Hours"),openingHoursEdit:p("Öffnungszeiten bearbeiten...","Edit Opening Hours..."),openingHoursTitle:p("Öffnungszeiten","Opening Hours"),openingHoursWeekly:p("Wochentage","Weekdays"),openingHoursExceptions:p("Ausnahmen","Exceptions"),openingHoursRanges:p("Zeitspanne","Date Range"),roomNumber:p("Flächen-/Raumnummer","Area/Room Number"),designation:p("Bezeichnung (Art)","Designation (Type)"),occupancyTitle:p("Besetzungszeiten","Staffing Times"),occupancyEdit:p("Besetzungszeiten bearbeiten...","Edit Staffing Times..."),occupancyAdd:p("Hinzufügen","Add"),occupancyNotePlaceholder:p("Notiz...","Note..."),editRoomContents:p("Rauminhalt bearbeiten...","Edit Contents..."),occupancyType:p("Art","Type"),occupancyTypeWeekday:p("Wochentag","Weekday"),occupancyTypeDate:p("Kalendertag","Calendar Date"),occupancyTypeRange:p("Zeitraum","Date Range"),occupancyTypeLabel:p("Art","Type"),occupancyWeekdayLabel:p("Wochentag","Weekday"),occupancyDateLabel:p("Kalendertag","Calendar Date"),occupancyStartLabel:p("von","from"),occupancyEndLabel:p("bis","to"),occupancyRangeStartLabel:p("Zeitraum von","Range start"),occupancyRangeEndLabel:p("Zeitraum bis","Range end"),occupancyNoteLabel:p("Notiz","Note"),beacon_activation_label:p("Aktivierungszeit","Activation Time"),activationStartDate:p("Startdatum","Start Date"),activationEndDate:p("Enddatum","End Date"),activationStartTime:p("von","from"),activationEndTime:p("bis","to"),weekdayMon:p("Mo","Mon"),weekdayTue:p("Di","Tue"),weekdayWed:p("Mi","Wed"),weekdayThu:p("Do","Thu"),weekdayFri:p("Fr","Fri"),weekdaySat:p("Sa","Sat"),weekdaySun:p("So","Sun"),fromTime:p("von","from"),toTime:p("bis","to"),addRule:p("Regel hinzufügen","Add Rule"),addException:p("Ausnahme hinzufügen","Add Exception"),noAccessibleRooms:p("Keine barrierefreien Räume","No accessible rooms"),addRange:p("Zeitraum hinzufügen","Add Date Range"),calendarToday:p("Heute","Today"),calendarClear:p("Leeren","Clear"),alert_deleteTypeConfirm:p('Möchten Sie den Typ "{0}" wirklich löschen?','Do you really want to delete the type "{0}"?'),alert_renameSelectOne:p("Bitte wählen Sie genau ein Element zum Umbenennen aus.","Please select exactly one element to rename."),prompt_renameElement:p("Neuen Namen eingeben:","Enter new name:"),alert_noActiveFloor:p("Bitte zuerst eine Etage auswählen oder erstellen.","Please select or create a floor first."),alert_floorNameExists:p("Dieser Etagenname ist bereits vergeben.","This floor name already exists."),alert_newProjectConfirm:p("Möchten Sie wirklich ein neues Projekt starten? Nicht gespeicherte Änderungen gehen verloren.","Do you really want to start a new project? Unsaved changes will be lost."),confirm_deleteElement_single:p("Möchten Sie das ausgewählte Element wirklich löschen?","Do you really want to delete the selected element?"),confirm_deleteElement_multi:p("Möchten Sie die {0} ausgewählten Elemente wirklich löschen?","Do you really want to delete the {0} selected elements?"),area_raum_label:p("Raum","Room"),area_buero_label:p("Büro","Office"),area_toiletten_label:p("Toiletten","Restrooms"),area_gang_label:p("Gang","Corridor"),area_lager_label:p("Lager","Storage"),point_eingang_label:p("Eingang","Entrance"),point_feuerloescher_label:p("Feuerlöscher","Fire Extinguisher"),point_treppe_label:p("Treppe","Stairs"),point_aufzug_label:p("Aufzug","Elevator"),point_beacon_label:p("Beacon","Beacon"),point_erstehilfe_label:p("Erste Hilfe","First Aid"),point_notausgang_label:p("Notausgang","Emergency Exit"),beacon_uuid_label:p("Beacon UUID","Beacon UUID"),beacon_serial_label:p("Gerät-ID","Device ID"),beacon_major_label:p("Beacon Major","Beacon Major"),beacon_minor_label:p("Beacon Minor","Beacon Minor"),beacon_installation_label:p("Installationsdatum","Installation Date"),beacon_range_label:p("Reichweite (m)","Range (m)"),beacon_number_label:p("Nummer","Number"),beacon_note_de_label:p("Notiz","Note"),beacon_note_en_label:p("Notiz (EN)","Note (EN)"),threeD_fullscreen_title:p("3D-Ansicht","3D View"),threeD_minimize:p("Minimieren","Minimize"),threeD_toggle_fullscreen:p("Vollbild umschalten","Toggle Fullscreen"),screenshot:p("Screenshot","Screenshot"),pdf_convert:p("Konvertiere PDF, dies kann einen Moment dauern...","Converting PDF, this may take a moment..."),image_load:p("Lade Bild...","Loading image...")};Je.properties_label_desc=p("Anzeigename des Elements, wird in der Karte gezeigt.","Display name of the element, shown on the map.");Je.beacon_serial_desc=p("Eindeutige Geräte-ID des Beacons.","Unique device ID of the beacon.");Je.beacon_number_desc=p("Interne Beacon-Nummer zur Zuordnung.","Internal beacon number for mapping.");Je.beacon_installation_desc=p("Datum der Installation.","Installation date.");Je.beacon_range_desc=p("Geplante Signalreichweite in Metern für die Heatmap.","Planned signal range in meters for the heatmap.");Je.beacon_note_de_desc=p("Freitextnotiz in Deutsch.","Free-form note in German.");function Gi(t){Wr=t}function a(t,o=Wr,...n){const s=Je[t];if(!s)return console.warn(`Missing translation key: ${t}`),t;let i=s[o]||s.en||t;return n.forEach((r,l)=>{i=i.replace(new RegExp(`\\{${l}\\}`,"g"),String(r))}),i}const Le={raum:{fill:"rgba(53, 138, 216, 0.4)",stroke:"#5e5bb1"},buero:{fill:"rgba(141, 35, 166, 0.3)",stroke:"#54176e"},toiletten:{fill:"rgba(236, 240, 241, 0.5)",stroke:"#c0392b"},gang:{fill:"rgba(246, 235, 252, 0.2)",stroke:"#bdc3c7"},lager:{fill:"rgba(255, 255, 255, 0.3)",stroke:"#7f8c8d"},default:{fill:"rgba(189, 195, 199, 0.3)",stroke:"#95a5a6"}},Q="#358ad8",un={eingang:"M12 3L4 9v12h5v-7h6v7h5V9l-8-6zm-2 14H8v-5h2v5zm4 0h-2v-5h2v5z",feuerloescher:"M9 8H15V20H9Z M10 6H14V8H10Z M15 10L19 11L15 12Z M11 4H14V6H11Z",treppe:"M6 18H18V20H6Z M10 14H18V16H10Z M14 10H18V12H14Z",aufzug:"M5 4H19V20H5Z M11.5 4H12.5V20H11.5Z M8 9L12 5L16 9Z M8 15L12 19L16 15Z",beacon:"M10.5 3 l6 4.5 -6 4.5 6 4.5 -6 4.5 V3 M17.25 9.75 c1.5 .75 1.5 .75 1.5 2.25 M17.25 14.25 c1.5 .75 1.5 .75 1.5 2.25",erstehilfe:"M10 5H14V10H19V14H14V19H10V14H5V10H10Z",notausgang:"M3 4H10V20H3Z M11 12H21V13H11Z M17 9L21 12L17 15Z",default:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"},Fn={info:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",warning:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z","meeting-point":"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",coffee:"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm-2 5h-2V5h2v3zM4 19h16v2H4z",printer:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM18 3H6v4h12V3z",restroom:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"};function Me(){const t=new Set;return e.project.features.forEach(o=>t.add(o.properties.floor)),e.project.floorplanImages&&Object.keys(e.project.floorplanImages).forEach(o=>t.add(o)),Array.from(t).sort((o,n)=>o.localeCompare(n,void 0,{numeric:!0}))}function me(){const t={},o={raum:a("area_raum_label"),buero:a("area_buero_label"),toiletten:a("area_toiletten_label"),gang:a("area_gang_label"),lager:a("area_lager_label")};for(const i in Le)o[i]&&(t[i]={label:o[i],baseType:"area",fill:Le[i].fill,stroke:Le[i].stroke,isDefault:!0});const n={eingang:a("point_eingang_label"),feuerloescher:a("point_feuerloescher_label"),treppe:a("point_treppe_label"),aufzug:a("point_aufzug_label"),beacon:a("point_beacon_label"),erstehilfe:a("point_erstehilfe_label"),notausgang:a("point_notausgang_label")};for(const i in un)n[i]&&(t[i]={label:n[i],baseType:"point",icon:un[i],iconColor:"#34495e",isDefault:!0});const s=e.project.properties.elementTypeStyles;if(s)for(const i in s)t[i]={...t[i],...s[i],isDefault:!1};return t}function ae(){const t=Me(),o=e.activeFloorId,n=document.getElementById("floor-select");if(!n)return;if(n.innerHTML="",t.length===0){const i=document.createElement("option");i.textContent=a("currentFloor"),n.appendChild(i),e.activeFloorId=null}else t.forEach(i=>{const r=document.createElement("option");r.value=i,r.textContent=i,n.appendChild(r)}),o&&t.includes(o)?n.value=o:(e.activeFloorId=t[0],n.value=t[0]);const s=document.getElementById("floor-preview");s&&e.activeFloorId&&e.cachedFloorPlanImages[e.activeFloorId]?(s.src=e.cachedFloorPlanImages[e.activeFloorId].src,s.style.display="block"):s&&(s.style.display="none")}function Ye(){const t=document.getElementById("element-type-select");if(!t)return;const o=me(),n=t.value,s=[],i=[],r=[];for(const f in o){const h=o[f];h.baseType==="area"?s.push({key:f,style:h}):h.baseType==="point"&&(["treppe","aufzug"].includes(f)?r.push({key:f,style:h}):i.push({key:f,style:h}))}const l=(f,h)=>f.style.label.localeCompare(h.style.label);s.sort(l),i.sort(l),r.sort(l);const c=document.createElement("optgroup");c.label=a("optgroupAreas");const d=document.createElement("optgroup");d.label=a("optgroupPointElements");const m=document.createElement("optgroup");m.label=a("optgroupConnectors");const v=(f,h)=>{h.forEach(({key:S,style:g})=>{const E=document.createElement("option");E.value=S;const I=g.isDefault?"":a("customIndicatorSuffix");E.textContent=g.label+I,E.dataset.type=g.baseType,f.appendChild(E)})};v(c,s),v(d,i),v(m,r),t.innerHTML="",t.appendChild(c),t.appendChild(d),r.length>0&&t.appendChild(m),n&&t.querySelector(`option[value="${n}"]`)?t.value=n:s.length>0?t.value=s[0].key:i.length>0&&(t.value=i[0].key)}function _o(t,o,n){return{x:2*n.x-.5*(t.x+o.x),y:2*n.y-.5*(t.y+o.y)}}function Rt(t,o,n,s=20){const i=[];for(let r=0;r<=s;r++){const l=r/s,c=Math.pow(1-l,2)*t.x+2*(1-l)*l*n.x+Math.pow(l,2)*o.x,d=Math.pow(1-l,2)*t.y+2*(1-l)*l*n.y+Math.pow(l,2)*o.y;i.push([c,d])}return i}function Ao(t,o,n,s){const i=o.x-t.x,r=o.y-t.y,l=s.x-n.x,c=s.y-n.y,d=i*c-r*l;if(d===0)return null;const m=((n.x-t.x)*c-(n.y-t.y)*l)/d,v=((n.x-t.x)*r-(n.y-t.y)*i)/d;return m<0||m>1||v<0||v>1?null:{x:t.x+m*i,y:t.y+m*r}}function Tt(t){const o=t.coordinates[0];let[n,s]=o[0],[i,r]=o[0];for(const[l,c]of o)l<n&&(n=l),c<s&&(s=c),l>i&&(i=l),c>r&&(r=c);return{x:n,y:s,width:i-n,height:r-s}}function he(t,o){const n=Tt(o);if(t.x<n.x||t.x>n.x+n.width||t.y<n.y||t.y>n.y+n.height)return!1;let s=!1;const i=o.coordinates[0];for(let r=0,l=i.length-1;r<i.length;l=r++){const[c,d]=i[r],[m,v]=i[l];d>t.y!=v>t.y&&t.x<(m-c)*(t.y-d)/(v-d)+c&&(s=!s)}return s}function fe(t){if(!e.isGridVisible||!e.isSnapEnabled)return t;const o=e.gridSize;return{x:Math.round(t.x/o)*o,y:Math.round(t.y/o)*o}}function ot(t){const o=10/e.scale,n=e.project.features.filter(i=>i.properties.floor===e.activeFloorId&&!i.properties.isPlaceholder);let s=null;for(const i of n)if(i.geometry.type==="Point"||i.properties.type==="connector"){const[r,l]=i.geometry.coordinates,c=Math.hypot(t.x-r,t.y-l);c<o&&(!s||c<s.d)&&(s={x:r,y:l,d:c})}else if(i.geometry.type==="LineString"){const r=i.geometry.coordinates;for(const l of r){const c=l[0],d=l[1],m=Math.hypot(t.x-c,t.y-d);m<o&&(!s||m<s.d)&&(s={x:c,y:d,d:m})}}return s?{x:s.x,y:s.y}:t}function Wi(){const t=[];if(!e.activeFloorId)return t;const o=e.metersPerPixel;if(!o||o<=0)return t.push("Maßstab nicht kalibriert. Analyse ist ungenau oder nicht möglich."),t;const n=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.properties.type==="area"&&c.geometry.type==="Polygon"&&!c.properties.isEmpty),s=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.geometry.type==="Point"&&c.properties.subType==="beacon"),i=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.properties.type==="area"&&c.geometry.type==="Polygon"&&c.properties.isEmpty);s.length<3&&t.push("Zu wenige Beacons: Mindestens 3 Beacons werden für eine Trilateration benötigt.");const l=.5/o;return n.forEach(c=>{const d=c.geometry,m=Tt(d);let v=0,f=0,h=0;for(let S=m.x;S<m.x+m.width;S+=l)for(let g=m.y;g<m.y+m.height;g+=l)if(he({x:S,y:g},d)){if(i.some(k=>he({x:S,y:g},k.geometry)))continue;v++;let I=0;for(const k of s){const[M,C]=k.geometry.coordinates,_=Math.hypot(S-M,g-C),j=typeof k.properties.beacon_range=="number"&&k.properties.beacon_range>0?k.properties.beacon_range/o:0;_<=j&&I++}I===0?f++:I<3&&h++}if(v>0){const S=f/v*100,g=h/v*100,E=c.properties.label||"Unbenannter Raum";S>2&&t.push(`Funkloch in "${E}": ${S.toFixed(1)}% der Fläche nicht abgedeckt.`),g>40&&t.push(`Eingeschränkte Trilateration in "${E}": ${g.toFixed(1)}% der Fläche haben < 3 Beacons.`)}}),t}function Wt(t,o){let n=1/0,s=-1;const i=16/e.scale,r=o.coordinates[0];for(let l=0;l<r.length-1;l++){const c={x:r[l][0],y:r[l][1]},d={x:r[l+1][0],y:r[l+1][1]},m=d.x-c.x,v=d.y-c.y;if(m===0&&v===0)continue;const f=((t.x-c.x)*m+(t.y-c.y)*v)/(m*m+v*v),h=f<0?c:f>1?d:{x:c.x+f*m,y:c.y+f*v},S=Math.sqrt((t.x-h.x)**2+(t.y-h.y)**2);S<n&&(n=S,s=l)}return n<i?{index:s,distance:n}:{index:-1,distance:1/0}}function Ki(t,o,n){const s=o.coordinates[0],i=Math.max(0,Math.min(n,s.length-2)),r={x:s[i][0],y:s[i][1]},l={x:s[i+1][0],y:s[i+1][1]},c=l.x-r.x,d=l.y-r.y;if(c===0&&d===0)return r;const m=((t.x-r.x)*c+(t.y-r.y)*d)/(c*c+d*d),v=Math.max(0,Math.min(1,m));return{x:r.x+v*c,y:r.y+v*d}}function Kr(t,o){const n=o.coordinates;let s=1/0,i=-1;const r=16/e.scale;for(let l=0;l<n.length-1;l++){const c={x:n[l][0],y:n[l][1]},d={x:n[l+1][0],y:n[l+1][1]},m=d.x-c.x,v=d.y-c.y;if(m===0&&v===0)continue;const f=((t.x-c.x)*m+(t.y-c.y)*v)/(m*m+v*v),h=f<0?c.x:f>1?d.x:c.x+f*m,S=f<0?c.y:f>1?d.y:c.y+f*v,g=Math.hypot(t.x-h,t.y-S);g<s&&(s=g,i=l)}return s<r?{index:i,distance:s}:{index:-1,distance:1/0}}function Ui(t,o,n){const s=o.coordinates,i=Math.max(0,Math.min(n,s.length-2)),r={x:s[i][0],y:s[i][1]},l={x:s[i+1][0],y:s[i+1][1]},c=l.x-r.x,d=l.y-r.y;if(c===0&&d===0)return r;const m=((t.x-r.x)*c+(t.y-r.y)*d)/(c*c+d*d),v=Math.max(0,Math.min(1,m));return{x:r.x+v*c,y:r.y+v*d}}let ee,x,rt,J,it,Y,Ft,qe;function Zi(){ee=document.getElementById("canvas"),x=ee.getContext("2d"),rt=document.getElementById("ruler-top"),J=rt.getContext("2d"),it=document.getElementById("ruler-left"),Y=it.getContext("2d"),Ft=document.createElement("canvas"),qe=Ft.getContext("2d")}function G(){if(!(!x||!ee.parentElement)){if(ee.width=ee.parentElement.clientWidth,ee.height=ee.parentElement.clientHeight,rt.width=ee.width,it.height=ee.height,Ji(),e.measureLabels=[],x.save(),x.translate(e.pan.x,e.pan.y),x.scale(e.scale,e.scale),e.activeFloorId){const t=e.cachedFloorPlanImages[e.activeFloorId];t&&x.drawImage(t,0,0),e.isGridVisible&&Yi();const o=e.project.features.filter(l=>l.properties.floor===e.activeFloorId&&e.visibleLayers[l.properties.type]),n=o.filter(l=>l.geometry.type==="Polygon"),s=o.filter(l=>l.geometry.type!=="Polygon"),i=n.filter(l=>l.properties.isEmpty),r=n.filter(l=>!l.properties.isEmpty);if(i.length>0?(Ft.width=ee.width,Ft.height=ee.height,qe.save(),qe.translate(e.pan.x,e.pan.y),qe.scale(e.scale,e.scale),r.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);gt(l,c,{ctx:qe,onlyFill:!0,noLabel:!0})}),i.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);gt(l,c,{ctx:qe,onlyFill:!0,noLabel:!0,forceComposite:"destination-out",forceColor:"#000000"})}),qe.restore(),x.save(),x.setTransform(1,0,0,1,0,0),x.drawImage(Ft,0,0),x.restore(),r.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);gt(l,c,{onlyStroke:!0})}),i.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);gt(l,c,{onlyStroke:!0})})):n.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);gt(l,c)}),s.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);switch(x.lineWidth=(c?3:2)/e.scale,l.geometry.type){case"Point":es(l,c);break;case"LineString":ts(l,c);break}}),e.currentMode==="door"){const l=s.filter(c=>c.geometry.type==="LineString");ns(n,l)}}e.tempShape&&(e.currentMode==="area"&&rs(),e.currentMode==="square"&&is(),e.currentMode==="line"&&Mn(),e.currentMode==="calibrate"&&Mn(),e.currentMode==="door"&&Mn(),e.currentMode==="polygon"&&ss(),e.currentMode==="arc"&&ls(),e.currentMode==="circle"&&as()),e.showBeaconHeatmap&&os(),x.restore(),e.isShiftPressed&&cs()}}function Ur(t){const o=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);return o?{r:parseInt(o[1]),g:parseInt(o[2]),b:parseInt(o[3]),a:o[4]!==void 0?parseFloat(o[4]):1}:null}function ue(){return e.metersPerPixel}function be(t){const o=e.activeLanguage==="de"?"de-DE":"en-US";return`${t.toLocaleString(o,{maximumFractionDigits:2})} m`}function pe(t,o,n){const s=4/e.scale,i=16/e.scale;x.font=`${12/e.scale}px sans-serif`;const r=x.measureText(n).width+s*2,l=t-r/2,c=o-i/2,d=e.activeTheme==="dark"?"rgba(20,20,25,0.85)":"rgba(255,255,255,0.85)",m=e.activeTheme==="dark"?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.15)";x.fillStyle=d,x.fillRect(l,c,r,i),x.strokeStyle=m,x.lineWidth=1/e.scale,x.strokeRect(l,c,r,i),x.fillStyle=e.activeTheme==="dark"?"#eee":"#333",x.textAlign="center",x.textBaseline="middle",x.fillText(n,t,o)}function Zr(t,o,n,s){if(n)return Q;if(s)return s;const i=t?Ur(t):null,l=(i&&i.a>.4?t:o??(e.activeTheme==="dark"?"#e6e1ef":"#333333")).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(l){const c=parseInt(l[1]),d=parseInt(l[2]),m=parseInt(l[3]),v=(.299*c+.587*d+.114*m)/255,f=.5;return e.activeTheme==="dark"?v<f?"#e6e1ef":"#333333":v>f?"#333333":"#e6e1ef"}return e.activeTheme==="dark"?"#e6e1ef":"#333333"}function Ji(){const t=getComputedStyle(document.body).getPropertyValue("--ruler-text").trim(),o=getComputedStyle(document.body).getPropertyValue("--ruler-border").trim(),n=getComputedStyle(document.body).getPropertyValue("--crosshair-color").trim()||"rgba(53, 138, 216, 0.9)";J.clearRect(0,0,rt.width,rt.height),Y.clearRect(0,0,it.width,it.height),J.font="12px sans-serif",Y.font="12px sans-serif",J.fillStyle=t,Y.fillStyle=t,J.strokeStyle=o,Y.strokeStyle=o;const{scale:s,pan:i}=e,r=s>1.5?50:s<.4?200:100;for(let d=0;d<rt.width;d+=10){const m=(d-i.x)/s;J.beginPath(),J.moveTo(d+.5,25),J.lineTo(d+.5,30),J.stroke(),Math.round(m)%r===0&&(J.beginPath(),J.moveTo(d+.5,22),J.lineTo(d+.5,30),J.stroke(),J.fillText(String(Math.round(m)),d+2,14))}for(let d=0;d<it.height;d+=10){const m=(d-i.y)/s;Y.beginPath(),Y.moveTo(25,d+.5),Y.lineTo(30,d+.5),Y.stroke(),Math.round(m)%r===0&&(Y.beginPath(),Y.moveTo(22,d+.5),Y.lineTo(30,d+.5),Y.stroke(),Y.fillText(String(Math.round(m)),2,d+12))}const{x:l,y:c}=e.mousePosScreen;J.fillStyle=n,Y.fillStyle=n,J.beginPath(),J.moveTo(l,0),J.lineTo(l-3,5),J.lineTo(l+3,5),J.closePath(),J.fill(),Y.beginPath(),Y.moveTo(0,c),Y.lineTo(5,c-3),Y.lineTo(5,c+3),Y.closePath(),Y.fill()}function Yi(){const{scale:t,pan:o,gridSize:n}=e,s=e.activeTheme==="dark"?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)",i=e.activeTheme==="dark"?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)";x.lineWidth=1/t;const r=-o.x/t,l=-o.y/t,c=(ee.width-o.x)/t,d=(ee.height-o.y)/t;let m=n;const v=40;for(;m*t<v;)m*=2;for(;m*t>v*2;)m/=2;const f=m,h=f/4;if(h*t>10){x.strokeStyle=s;const E=Math.floor(r/h)*h,I=Math.floor(l/h)*h;for(let k=E;k<c;k+=h)x.beginPath(),x.moveTo(k,l),x.lineTo(k,d),x.stroke();for(let k=I;k<d;k+=h)x.beginPath(),x.moveTo(r,k),x.lineTo(c,k),x.stroke()}x.strokeStyle=i,x.lineWidth=1.5/t;const S=Math.floor(r/f)*f,g=Math.floor(l/f)*f;for(let E=S;E<c;E+=f)x.beginPath(),x.moveTo(E,l),x.lineTo(E,d),x.stroke();for(let E=g;E<d;E+=f)x.beginPath(),x.moveTo(r,E),x.lineTo(c,E),x.stroke()}function gt(t,o,n={}){if(t.properties.isPlaceholder)return;const{subType:s,label:i}=t.properties,r=n.ctx||x,c=(e.styleOverrides||me())[s];let d=Le.default.fill,m=Le.default.stroke,f=t.properties.fontSize||c?.fontSize||14,h=t.properties.fontColor||c?.fontColor;c&&c.baseType==="area"&&(d=c.fill||d,m=c.stroke||m),t.properties.isEmpty?(d="rgba(255, 255, 255, 0.1)",m="#666666",r.setLineDash([8/e.scale,4/e.scale])):r.setLineDash([]),n.forceColor&&(d=n.forceColor),n.forceComposite&&(r.globalCompositeOperation=n.forceComposite);const S=t.geometry.coordinates[0];r.fillStyle=d,r.strokeStyle=o?Q:m,r.lineWidth=(o?3:2)/e.scale,r.beginPath(),r.moveTo(S[0][0],S[0][1]);for(let g=1;g<S.length;g++)r.lineTo(S[g][0],S[g][1]);if(r.closePath(),n.onlyStroke||r.fill(),n.onlyFill||r.stroke(),n.forceComposite&&(r.globalCompositeOperation="source-over"),r.setLineDash([]),t.properties.isEmpty&&!n.onlyFill){const g=Tt(t.geometry);r.beginPath(),r.moveTo(g.x,g.y),r.lineTo(g.x+g.width,g.y+g.height),r.moveTo(g.x+g.width,g.y),r.lineTo(g.x,g.y+g.height),r.strokeStyle="rgba(100, 100, 100, 0.5)",r.lineWidth=1/e.scale,r.stroke()}if(i&&!n.onlyFill&&!n.onlyStroke&&!n.noLabel){const g=Tt(t.geometry),E=Zr(d,m,o,h);r.fillStyle=E,r.font=`bold ${f/e.scale}px sans-serif`,r.textAlign="center",r.textBaseline="middle";const I=g.x+g.width/2,k=g.y+g.height/2;r.fillText(i,I,k);const M=Array.isArray(t.properties.contents)?t.properties.contents:[];if(M.length>0){const A=(c?.contentsFontSize||Math.max(10,Math.round(f*.8)))/e.scale,j=(c?.contentsLineSpacing||Math.round(f*.5))/e.scale;r.font=`${A}px sans-serif`,r.textAlign="center",r.textBaseline="top";let u=k+j;for(let b=0;b<M.length;b++){const B=String(M[b]);B.trim()!==""&&(r.fillText(B,I,u),u+=j)}}const C=t.properties.room_number,_=t.properties.designation;if(C||_){const A=(c?.contentsFontSize||Math.max(8,Math.round(f*.7)))/e.scale,j=(c?.contentsLineSpacing||Math.round(f*.5))/e.scale;r.font=`${A}px sans-serif`,r.textAlign="center",r.textBaseline="top";let b=M.length>0?k+j*(M.length+1):k+j;C&&(r.fillText(String(C),I,b),b+=j),_&&r.fillText(String(_),I,b)}if(t.properties.isAccessible){const A=(c?.accessibleIconSize||16)/e.scale,j=(c?.accessibleIconOffsetX||6)/e.scale,u=(c?.accessibleIconOffsetY||6)/e.scale,b=getComputedStyle(document.body).getPropertyValue("--color-primary").trim()||"#6b2bd0",B=getComputedStyle(document.body).getPropertyValue("--color-primary-text").trim()||"#ffffff",P=A+4/e.scale,L=A+4/e.scale;r.fillStyle=o?Q:b,r.beginPath();const F=3/e.scale,T=g.x+j,D=g.y+u;r.moveTo(T+F,D),r.lineTo(T+P-F,D),r.quadraticCurveTo(T+P,D,T+P,D+F),r.lineTo(T+P,D+L-F),r.quadraticCurveTo(T+P,D+L,T+P-F,D+L),r.lineTo(T+F,D+L),r.quadraticCurveTo(T,D+L,T,D+L-F),r.lineTo(T,D+F),r.quadraticCurveTo(T,D,T+F,D),r.closePath(),r.fill(),r.fillStyle=o?"#ffffff":B,r.font=`${A}px sans-serif`,r.textAlign="left",r.textBaseline="top",r.fillText("♿",T+2/e.scale,D+2/e.scale)}}if(o&&!n.onlyFill&&!n.onlyStroke){const g=5/e.scale;if((e.isAltPressed||e.currentMode==="scissors")&&e.hoveredFeatureId===t.properties.id&&e.hoveredEdgeIndex!==-1){const E=S[e.hoveredEdgeIndex],I=S[(e.hoveredEdgeIndex+1)%(S.length-1)];r.beginPath(),r.moveTo(E[0],E[1]),r.lineTo(I[0],I[1]),r.strokeStyle=Q,r.lineWidth=5/e.scale,r.lineCap="round",r.stroke()}r.fillStyle="#fff",r.strokeStyle=Q,r.lineWidth=2/e.scale,S.forEach(E=>{r.beginPath(),r.arc(E[0],E[1],g,0,2*Math.PI),r.fill(),r.stroke()})}if(e.showDimensions.area||e.showDimensions.circle||e.showDimensions.angles||e.currentMode==="calibrate"){const g=S,E=Tt(t.geometry),I=E.x+E.width/2,k=E.y+E.height/2;if(g.length>=20&&Math.abs(E.width-E.height)/Math.max(E.width,E.height)<.08&&e.showDimensions.circle){let C=0;for(let j=0;j<g.length-1;j++){const u=g[j][0]-I,b=g[j][1]-k;C+=Math.sqrt(u*u+b*b)}const _=C/(g.length-1),A=_*ue();pe(I+_,k-18/e.scale,be(A))}else if(e.showDimensions.area||e.currentMode==="calibrate")for(let C=0;C<g.length-1;C++){const _=g[C][0],A=g[C][1],j=g[C+1][0],u=g[C+1][1],b=Math.hypot(j-_,u-A),B=b*ue(),P=(_+j)/2,F=(A+u)/2-18/e.scale,T=be(B);if(pe(P,F,T),e.currentMode==="calibrate"){const D=4/e.scale,O=16/e.scale;x.font=`${12/e.scale}px sans-serif`;const V=x.measureText(T).width+D*2,R=P-V/2,X=F-O/2;e.measureLabels.push({bx:R,by:X,w:V,h:O,pxLength:b})}}if(e.showDimensions.angles){const C=g.length-1;for(let _=0;_<C;_++){const A=g[(_-1+C)%C],j=g[_],u=g[(_+1)%C],b=A[0]-j[0],B=A[1]-j[1],P=u[0]-j[0],L=u[1]-j[1],F=Math.hypot(b,B),T=Math.hypot(P,L);if(F===0||T===0)continue;const D=(b*P+B*L)/(F*T),O=Math.min(1,Math.max(-1,D)),V=Math.round(Math.acos(O)*180/Math.PI),R=b/F+P/T,X=B/F+L/T,re=Math.hypot(R,X)||1,Fe=22/e.scale,y=j[0]+R/re*Fe,w=j[1]+X/re*Fe;pe(y,w,`${V}°`)}}}}function Xi(t,o,n,s,i){const r=new Path2D(t);x.save(),x.translate(o,n),x.scale(1/e.scale,1/e.scale),x.translate(-12,-12),x.fillStyle=s?Q:i||"#34495e",x.fill(r),x.restore()}function Qi(t,o,n,s,i,r){const l=new Path2D(t);x.save(),x.translate(o,n),x.scale(1/e.scale,1/e.scale),x.translate(-12,-12),x.strokeStyle=s?Q:i,x.lineWidth=r/1,x.lineCap="round",x.lineJoin="round",x.stroke(l),x.restore()}function es(t,o){const[n,s]=t.geometry.coordinates,{subType:i,label:r}=t.properties,c=(e.styleOverrides||me())[i];let d=un.default,m="#34495e",f=t.properties.fontSize||c?.fontSize||12,h=t.properties.fontColor||c?.fontColor;if(c&&c.baseType==="point"&&(d=c.icon||d,m=c.iconColor||m),i==="beacon"){const g=typeof t.properties.beacon_range=="number"?t.properties.beacon_range:null;if(e.showBeaconRangeRing&&g&&g>0){const E=g*(e.gridSize/e.metersPerGridCell);x.beginPath(),x.arc(n,s,E,0,Math.PI*2),x.fillStyle="rgba(46, 204, 113, 0.12)",x.fill(),x.strokeStyle="rgba(46, 204, 113, 0.6)",x.lineWidth=1.5/e.scale,x.stroke()}}o&&(x.fillStyle="rgba(231, 76, 60, 0.3)",x.beginPath(),x.arc(n,s,18/e.scale,0,2*Math.PI),x.fill()),i==="beacon"?Qi(d,n,s,o,"#b955d0",2):Xi(d,n,s,o,m);const S=Zr(void 0,m,o,h);x.fillStyle=S,x.font=`${f/e.scale}px sans-serif`,x.textAlign="center",x.fillText(r,n,s-22/e.scale)}function ts(t,o){const{coordinates:n}=t.geometry;if(n.length<2)return;x.beginPath(),x.moveTo(n[0][0],n[0][1]),n.slice(1).forEach(i=>x.lineTo(i[0],i[1]));const s=t.properties.subType==="door";if(x.strokeStyle=o?Q:s?"#e67e22":t.properties.isAccessible?"#3498db":"#8e44ad",x.lineWidth=(o?5:s?4:3)/e.scale,x.lineCap="round",x.stroke(),o){const i=6/e.scale;x.fillStyle="#fff",x.strokeStyle=Q,x.lineWidth=2/e.scale;let r=[];if(t.properties.subType==="arc"&&t.properties.controlPoints){const{p0:l,p1:c,p2:d}=t.properties.controlPoints;r=[l,c,d],x.setLineDash([4/e.scale,4/e.scale]),x.beginPath(),x.moveTo(l.x,l.y),x.lineTo(c.x,c.y),x.lineTo(d.x,d.y),x.strokeStyle="#7f8c8d",x.stroke(),x.setLineDash([])}else r=n.map(l=>({x:l[0],y:l[1]}));r.forEach(l=>{x.beginPath(),x.arc(l.x,l.y,i,0,2*Math.PI),x.fill(),x.stroke()})}if(e.showDimensions.path||e.currentMode==="calibrate"){let i=0;for(let g=0;g<n.length-1;g++){const E=n[g][0],I=n[g][1],k=n[g+1][0],M=n[g+1][1];i+=Math.hypot(k-E,M-I)}const r=i*ue();let l=n[0][0],c=n[0][0],d=n[0][1],m=n[0][1];for(let g=1;g<n.length;g++)l=Math.min(l,n[g][0]),c=Math.max(c,n[g][0]),d=Math.min(d,n[g][1]),m=Math.max(m,n[g][1]);const v=(l+c)/2,h=(d+m)/2-18/e.scale,S=be(r);if(pe(v,h,S),e.currentMode==="calibrate"){const g=4/e.scale,E=16/e.scale;x.font=`${12/e.scale}px sans-serif`;const I=x.measureText(S).width+g*2,k=v-I/2,M=h-E/2;e.measureLabels.push({bx:k,by:M,w:I,h:E,pxLength:i})}}}function ns(t,o){x.save(),x.lineWidth=2/e.scale,t.forEach(n=>{const s=n.geometry.coordinates[0];for(let i=0;i<s.length-1;i++){const r=s[i],l=s[i+1],c=e.hoveredFeatureId===n.properties.id&&e.hoveredEdgeIndex===i;x.strokeStyle=c?Q:"#e67e22",x.setLineDash([6/e.scale,6/e.scale]),x.beginPath(),x.moveTo(r[0],r[1]),x.lineTo(l[0],l[1]),x.stroke(),x.setLineDash([]);const d=(r[0]+l[0])/2,m=(r[1]+l[1])/2;x.fillStyle=c?Q:"#e67e22",x.beginPath(),x.arc(d,m,3/e.scale,0,Math.PI*2),x.fill()}}),o.forEach(n=>{const s=n.geometry.coordinates;for(let i=0;i<s.length-1;i++){const r=s[i],l=s[i+1],c=e.hoveredFeatureId===n.properties.id&&e.hoveredEdgeIndex===i;x.strokeStyle=c?Q:"#3498db",x.setLineDash([6/e.scale,6/e.scale]),x.beginPath(),x.moveTo(r[0],r[1]),x.lineTo(l[0],l[1]),x.stroke(),x.setLineDash([]);const d=(r[0]+l[0])/2,m=(r[1]+l[1])/2;x.fillStyle=c?Q:"#3498db",x.beginPath(),x.arc(d,m,3/e.scale,0,Math.PI*2),x.fill()}}),x.restore()}function os(){const t=e.project.features.filter(o=>o.properties.floor===e.activeFloorId&&o.geometry.type==="Point"&&o.properties.subType==="beacon");x.save(),x.globalCompositeOperation="multiply",t.forEach(o=>{const[n,s]=o.geometry.coordinates;if(!(typeof o.properties.beacon_range=="number"&&o.properties.beacon_range>0))return;const r=o.properties.beacon_range,l=ue(),c=l>0?r/l:r*10,d=x.createRadialGradient(n,s,0,n,s,c);d.addColorStop(0,"rgba(46, 204, 113, 0.4)"),d.addColorStop(.5,"rgba(241, 196, 15, 0.25)"),d.addColorStop(1,"rgba(231, 76, 60, 0.15)"),x.fillStyle=d,x.beginPath(),x.arc(n,s,c,0,Math.PI*2),x.fill(),e.showBeaconRangeRing&&(x.save(),x.globalCompositeOperation="source-over",x.strokeStyle="rgba(46, 204, 113, 0.6)",x.lineWidth=1/e.scale,x.beginPath(),x.arc(n,s,c,0,Math.PI*2),x.stroke(),x.restore())}),x.restore()}function rs(){if(!e.tempShape?.start)return;x.strokeStyle=Q,x.lineWidth=1.5/e.scale,x.setLineDash([6/e.scale,6/e.scale]);const{start:t}=e.tempShape,o=fe(e.mousePos);x.strokeRect(t.x,t.y,o.x-t.x,o.y-t.y),x.setLineDash([]);const n=Math.abs(o.x-t.x),s=Math.abs(o.y-t.y),i=n*ue(),r=s*ue(),l=(t.x+o.x)/2,c=(t.y+o.y)/2;pe(l,t.y-18/e.scale,be(i)),pe(t.x-36/e.scale,c,be(r))}function is(){if(!e.tempShape?.start)return;x.strokeStyle=Q,x.lineWidth=1.5/e.scale,x.setLineDash([6/e.scale,6/e.scale]);const{start:t}=e.tempShape,o=fe(e.mousePos),n=Math.max(Math.abs(o.x-t.x),Math.abs(o.y-t.y)),s=o.x>=t.x?t.x:t.x-n,i=o.y>=t.y?t.y:t.y-n;x.strokeRect(s,i,n,n),x.setLineDash([]);const r=n*ue();pe(s+n/2,i-18/e.scale,be(r))}function Mn(){if(!e.tempShape?.start)return;x.strokeStyle=Q,x.lineWidth=2/e.scale,x.beginPath();const t=e.tempShape.start;x.moveTo(t.x,t.y);const o=e.tempShape.end||ot(fe(e.mousePos));x.lineTo(o.x,o.y),x.stroke();const n=o.x-t.x,s=o.y-t.y,r=Math.sqrt(n*n+s*s)*ue(),l=(t.x+o.x)/2,c=(t.y+o.y)/2;pe(l,c-18/e.scale,be(r)),x.fillStyle=e.activeTheme==="dark"?"#eee":"#333",x.font=`${12/e.scale}px sans-serif`,x.textAlign="center",x.beginPath(),x.arc(t.x,t.y,4/e.scale,0,Math.PI*2),x.fill(),x.fillText("A",t.x,t.y-10/e.scale),x.beginPath(),x.arc(o.x,o.y,4/e.scale,0,Math.PI*2),x.fill(),x.fillText((e.tempShape.end,"B"),o.x,o.y-10/e.scale)}function ss(){if(!e.tempShape?.nodes||e.tempShape.nodes.length===0)return;x.strokeStyle=Q,x.lineWidth=2/e.scale,x.beginPath();const t=e.tempShape.nodes[0];x.moveTo(t.x,t.y);for(let m=1;m<e.tempShape.nodes.length;m++)x.lineTo(e.tempShape.nodes[m].x,e.tempShape.nodes[m].y);const o=fe(e.mousePos);x.lineTo(o.x,o.y),x.stroke();const n=e.tempShape.nodes[e.tempShape.nodes.length-1],s=o.x-n.x,i=o.y-n.y,l=Math.sqrt(s*s+i*i)*ue(),c=(n.x+o.x)/2,d=(n.y+o.y)/2;pe(c,d-18/e.scale,be(l))}function ls(){if(!e.tempShape?.start)return;const t=ot(fe(e.mousePos));if(x.strokeStyle=Q,x.lineWidth=2/e.scale,x.setLineDash([6/e.scale,6/e.scale]),x.beginPath(),e.tempShape.end){const o=e.tempShape.start,n=e.tempShape.end,i=_o(o,n,t),r=Rt(o,n,i);x.moveTo(r[0][0],r[0][1]);for(let f=1;f<r.length;f++)x.lineTo(r[f][0],r[f][1]);let l=0;for(let f=0;f<r.length-1;f++){const h=r[f][0],S=r[f][1],g=r[f+1][0],E=r[f+1][1];l+=Math.hypot(g-h,E-S)}const c=l*ue(),d=Math.floor(r.length/2),m=r[d][0],v=r[d][1];pe(m,v-18/e.scale,be(c))}else{x.moveTo(e.tempShape.start.x,e.tempShape.start.y),x.lineTo(t.x,t.y);const o=t.x-e.tempShape.start.x,n=t.y-e.tempShape.start.y,i=Math.sqrt(o*o+n*n)*ue(),r=(e.tempShape.start.x+t.x)/2,l=(e.tempShape.start.y+t.y)/2;pe(r,l-18/e.scale,be(i))}x.stroke(),x.setLineDash([])}function as(){if(!e.tempShape?.start)return;const t=e.tempShape.start,o=fe(e.mousePos),n=Math.sqrt(Math.pow(o.x-t.x,2)+Math.pow(o.y-t.y,2)),s=me(),r=document.getElementById("element-type-select")?.value||"default",l=s[r];let c=l&&l.baseType==="area"&&l.fill||Le.default.fill;const d=Ur(c);if(d){const v=Math.max(d.a,.65);c=`rgba(${d.r}, ${d.g}, ${d.b}, ${v})`}x.beginPath(),x.arc(t.x,t.y,n,0,2*Math.PI),x.fillStyle=c,x.fill(),x.strokeStyle=Q,x.lineWidth=1.5/e.scale,x.setLineDash([6/e.scale,6/e.scale]),x.stroke(),x.setLineDash([]);const m=n*ue();pe(t.x+n,t.y-18/e.scale,be(m))}function cs(){if(!ee||ee.width===0||ee.height===0)return;const t=150,o=2.5,n=t/2,{x:s,y:i}=e.mousePosScreen,r=document.body.getAttribute("data-theme")||"light";x.save(),x.beginPath(),x.arc(s,i,n,0,Math.PI*2),x.strokeStyle=r==="dark"?"#333":"#a0a0a0",x.lineWidth=3,x.stroke(),x.clip(),x.globalAlpha=1,x.drawImage(ee,s-n/o,i-n/o,t/o,t/o,s-n,i-n,t,t),x.globalAlpha=1,x.restore()}function Re(){const t=document.getElementById("overview-stats-panel");if(!t)return;const o=e.project.properties.projectName||a("unnamedProject"),n=Me(),s=n.length,i=e.project.features.filter(d=>d.properties.type==="area"&&!d.properties.isPlaceholder&&!d.properties.isEmpty).length,r=e.project.features.filter(d=>d.properties.type==="point").length;let l=`<div><span>${a("stat_project")}:</span><span class="value">${o}</span></div><div><span>${a("stat_floors")}:</span><span class="value">${s}</span></div><div><span>${a("stat_areas")}:</span><span class="value">${i}</span></div><div><span>${a("stat_points")}:</span><span class="value">${r}</span></div>`;t.innerHTML=l;const c=document.getElementById("overview-floor-list");c&&(c.innerHTML="",n.forEach(d=>{const m=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder&&!u.properties.isEmpty).length,v=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point").length,f=document.createElement("div");f.className="floor-block";const h=document.createElement("div");h.className="floor-card";const S=document.createElement("img");S.className="floor-thumb",e.cachedFloorPlanImages[d]&&(S.src=e.cachedFloorPlanImages[d].src,h.classList.add("has-thumb"));const g=document.createElement("div");g.className="floor-meta";const E=document.createElement("div");E.className="name",E.textContent=d;const I=document.createElement("div");I.className="counts",I.textContent=`${a("stat_areas")}: ${m} · ${a("stat_points")}: ${v}`,g.appendChild(E),g.appendChild(I),h.appendChild(S),h.appendChild(g),h.addEventListener("click",()=>{e.activeFloorId=d,ae(),G()}),f.appendChild(h);const k=document.createElement("button");k.className="beacon-toggle";const M=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point"&&u.properties.subType==="beacon");k.textContent=`${a("overviewBeacons")} (${M.length})`;const C=document.createElement("div");C.className="beacon-section",k.addEventListener("click",()=>{C.style.display===""||C.style.display==="none"?(C.innerHTML="",M.forEach(b=>{const B=document.createElement("div");B.className="beacon-card";const P=document.createElement("div");P.className="beacon-meta";const L=document.createElement("div");L.className="name";const F=b.properties.beacon_serial||"",T=b.properties.label||a("point_beacon_label");L.textContent=F?`${T} · ${F}`:T;const D=document.createElement("div");D.className="counts";const O=b.properties.beacon_range,V=b.properties.beacon_note_de||b.properties.beacon_note_en||"",R=[];R.push(`${a("beacon_serial_label")}: ${F||"-"}`),typeof O=="number"&&R.push(`${a("beacon_range_label")}: ${O}`),V&&R.push(`${a("beacon_note_de_label")}: ${V}`),D.textContent=R.join(" · "),P.appendChild(L),P.appendChild(D),B.appendChild(P),B.addEventListener("click",()=>{e.activeFloorId=d,ae(),G()}),C.appendChild(B)}),C.style.display="block"):(C.style.display="none",C.innerHTML="")}),f.appendChild(k),f.appendChild(C);const _=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder&&!u.properties.isEmpty).sort((u,b)=>{const B=(u.properties.label||"").toLowerCase(),P=(b.properties.label||"").toLowerCase();return B.localeCompare(P)}),A=document.createElement("button");A.className="beacon-toggle",A.textContent=`${a("areas")} (${_.length})`;const j=document.createElement("div");j.className="area-section",A.addEventListener("click",()=>{if(j.style.display===""||j.style.display==="none"){const b=me();j.innerHTML="",_.forEach(P=>{const L=document.createElement("div");L.className="area-card";const F=document.createElement("div");F.className="area-meta";const T=document.createElement("div");T.className="name";const D=P.properties.label||"";T.textContent=D;const O=document.createElement("div");O.className="counts";const V=b[P.properties.subType]?.label||P.properties.subType,R=Array.isArray(P.properties.contents)?P.properties.contents.filter(re=>re.trim()!==""):[],X=R.length>0?R.join(", "):"-";O.textContent=`${a("elementType")}: ${V} · ${a("roomContentsTitle")}: ${X}`,F.appendChild(T),F.appendChild(O),L.appendChild(F),L.addEventListener("click",()=>{e.activeFloorId=d,ae(),G()}),j.appendChild(L)});const B=_.filter(P=>!!P.properties.isAccessible);if(B.length>0){const P=document.createElement("div");P.className="area-meta";const L=document.createElement("div");L.className="name",L.textContent=a("accessibleRoomsHeader"),P.appendChild(L),j.appendChild(P),B.forEach(F=>{const T=document.createElement("div");T.className="area-card";const D=document.createElement("div");D.className="area-meta";const O=document.createElement("div");O.className="name",O.textContent=F.properties.label||"";const V=document.createElement("div");V.className="counts",V.textContent="Barrierefrei",D.appendChild(O),D.appendChild(V),T.appendChild(D),T.addEventListener("click",()=>{e.activeFloorId=d,ae(),G()}),j.appendChild(T)})}j.style.display="block"}else j.style.display="none",j.innerHTML=""}),f.appendChild(A),f.appendChild(j),c.appendChild(f)}))}function ds(){if(!e.activeFloorId||!e.tempShape)return null;const t=me();let n=document.getElementById("element-type-select")?.value||"raum";const i=t[n]?.label||"Preview",r="preview_feature",l=e.activeFloorId,c=e.mousePos||{x:0,y:0},d=fe(c);if(e.currentMode==="area"&&e.tempShape.start){const m=e.tempShape.start,v=Math.min(m.x,d.x),f=Math.min(m.y,d.y),h=Math.abs(d.x-m.x),S=Math.abs(d.y-m.y);return h<1||S<1?null:{type:"Feature",geometry:{type:"Polygon",coordinates:[[[v,f],[v+h,f],[v+h,f+S],[v,f+S],[v,f]]]},properties:{id:r,floor:l,type:"area",subType:n,label:i,isPlaceholder:!0}}}if(e.currentMode==="square"&&e.tempShape.start){const m=e.tempShape.start,v=Math.abs(d.x-m.x),f=Math.abs(d.y-m.y),h=Math.max(v,f),S=Math.min(m.x,d.x),g=Math.min(m.y,d.y);return h<1?null:{type:"Feature",geometry:{type:"Polygon",coordinates:[[[S,g],[S+h,g],[S+h,g+h],[S,g+h],[S,g]]]},properties:{id:r,floor:l,type:"area",subType:n,label:i,isPlaceholder:!0}}}if(e.currentMode==="polygon"&&e.tempShape.nodes&&e.tempShape.nodes.length>=1){const m=[...e.tempShape.nodes.map(v=>[v.x,v.y]),[d.x,d.y]];return m.length<3?null:(m.push(m[0]),{type:"Feature",geometry:{type:"Polygon",coordinates:[m]},properties:{id:r,floor:l,type:"area",subType:n,label:i,isPlaceholder:!0}})}if(e.currentMode==="circle"&&e.tempShape.start){const m=e.tempShape.start,v=Math.sqrt((d.x-m.x)**2+(d.y-m.y)**2);if(v<1)return null;const f=64,h=Array.from({length:f},(S,g)=>{const E=g/f*2*Math.PI;return[m.x+v*Math.cos(E),m.y+v*Math.sin(E)]});return h.push(h[0]),{type:"Feature",geometry:{type:"Polygon",coordinates:[h]},properties:{id:r,floor:l,type:"area",subType:n,label:i,isPlaceholder:!0}}}if(e.currentMode==="line"&&e.tempShape.start){const m=e.tempShape.start;return{type:"Feature",geometry:{type:"LineString",coordinates:[[m.x,m.y],[d.x,d.y]]},properties:{id:r,floor:l,type:"path",subType:n,label:i,isPlaceholder:!0}}}if(e.currentMode==="door"&&e.tempShape.start){const m=e.tempShape.start,v=[[m.x,m.y],[d.x,d.y]],f=d.x-m.x,h=d.y-m.y,S=Math.sqrt(f*f+h*h),g=Math.round(S*e.metersPerPixel*100)/100;return{type:"Feature",geometry:{type:"LineString",coordinates:v},properties:{id:r,floor:l,type:"path",subType:"door",label:"Tür",isPlaceholder:!0,door_length_m:g,door_edge_index:e.tempShape.edgeIndex}}}if(e.currentMode==="arc"&&e.tempShape.start){const m=e.tempShape.start;if(e.tempShape.end){const v=e.tempShape.start,f=e.tempShape.end,h=_o(v,f,d);return{type:"Feature",geometry:{type:"LineString",coordinates:Rt(v,f,h)},properties:{id:r,floor:l,type:"path",subType:"arc",label:i,isPlaceholder:!0}}}else return{type:"Feature",geometry:{type:"LineString",coordinates:[[m.x,m.y],[d.x,d.y]]},properties:{id:r,floor:l,type:"path",subType:"arc",label:i,isPlaceholder:!0}}}return e.currentMode==="point"?{type:"Feature",geometry:{type:"Point",coordinates:[d.x,d.y]},properties:{id:r,floor:l,type:"point",subType:n,label:i,isPlaceholder:!0}}:null}function $(){const t=document.getElementById("live-geojson-output");if(t){const o=ds(),n=o?{...e.project,features:[...e.project.features,o]}:e.project;t.textContent=JSON.stringify(n,null,2)}}let et=null,jn=null,Ve=null,Kt=null,Ut=null,bt=null,Dn=null,Zt=null,Jt=null,At=null,_n=null,An=null;function ps(t){et=t.inputPromptModal,jn=t.inputPromptLabel,Ve=t.inputPromptInput,Kt=t.inputPromptOk,Ut=t.inputPromptCancel,bt=t.confirmModal,Dn=t.confirmMessage,Zt=t.confirmOk,Jt=t.confirmCancel,At=t.loadingModal,_n=t.loadingMessage,An=t.loadingOk}function Ce(t,o=""){return!et||!jn||!Ve||!Kt||!Ut?Promise.resolve(null):(jn.textContent=t,Ve.value=o,et.classList.remove("hidden"),Ve.focus(),new Promise(n=>{const s=()=>{et.classList.add("hidden"),Kt.removeEventListener("click",i),Ut.removeEventListener("click",r),Ve.removeEventListener("keydown",l),c&&c.removeEventListener("click",r)},i=()=>{const d=Ve.value.trim();s(),n(d||null)},r=()=>{s(),n(null)},l=d=>{d.key==="Enter"?i():d.key==="Escape"&&r()};Kt.addEventListener("click",i),Ut.addEventListener("click",r),Ve.addEventListener("keydown",l);const c=et?et.querySelector(".modal-overlay"):null;c&&c.addEventListener("click",r)}))}function Ee(t){return!bt||!Dn||!Zt||!Jt?Promise.resolve(!1):(Dn.textContent=t,bt.classList.remove("hidden"),new Promise(o=>{const n=()=>{bt.classList.add("hidden"),Zt.removeEventListener("click",s),Jt.removeEventListener("click",i),l?.removeEventListener("click",i),window.removeEventListener("keydown",r)},s=()=>{n(),o(!0)},i=()=>{n(),o(!1)},r=c=>{c.key==="Escape"&&i(),c.key==="Enter"&&s()};Zt.addEventListener("click",s),Jt.addEventListener("click",i),window.addEventListener("keydown",r);const l=bt.querySelector(".modal-overlay");l&&l.addEventListener("click",i)}))}function zo(t){!At||!_n||!An||(_n.textContent=t,At.classList.remove("hidden"),An.onclick=()=>st())}function st(){At&&At.classList.add("hidden")}const ve=Object.freeze({publicAPI:"/api",imdAPI:"/app/api",login:"/app/login",imd:"/app"}),Gt=t=>{console.error(`[UI Error Message]: ${t}`)};class us{baseUrl;backendAvailable=!0;warnedNoBackend=!1;constructor(o=window.location.origin){this.baseUrl=o,this.setupLockRelease()}base64ToFile(o,n){const s=o.split(","),i=s[0].match(/:(.*?);/)[1],r=atob(s[1]);let l=r.length;const c=new Uint8Array(l);for(;l--;)c[l]=r.charCodeAt(l);const d=i.split("/")[1]||"png",m=n.includes(".")?n:`${n}.${d}`;return new File([c],m,{type:i})}async request(o,n={}){n.credentials="include";try{const s=await fetch(`${this.baseUrl}${o}`,n);if(s.status===204)return{};const i=(s.headers.get("content-type")||"").toLowerCase();let r;if(i.includes("application/json"))r=await s.json();else{const l=await s.text(),c='Serverantwort ist keine JSON-API. Läuft das Backend unter "/app/api" und "/api"?';throw this.backendAvailable=!1,this.warnedNoBackend||(Gt(`${c}
Pfad: ${o}
Status: ${s.status}
Antwort: ${l.slice(0,200)}`),this.warnedNoBackend=!0),new Error(c)}if(!s.ok){const l=r.error||r.message||`Request failed with status ${s.status}`;throw Gt(l),new Error(l)}return r}catch(s){throw s instanceof Error||Gt("An unexpected network error occurred."),s}}isAvailable(){return this.backendAvailable}async probeBackend(){try{const o=await fetch(`${this.baseUrl}${ve.imdAPI}/random-id`,{method:"GET",credentials:"include"}),n=(o.headers.get("content-type")||"").toLowerCase();this.backendAvailable=o.ok&&n.includes("application/json")}catch{this.backendAvailable=!1}}async getProject(o,n){const s=n?`${ve.publicAPI}/${o}/${n}`:`${ve.publicAPI}/${o}`;return this.request(s)}async listProjects(){return this.request(`${ve.publicAPI}/list`)}async listVersions(o){return(await this.request(`${ve.publicAPI}/${o}/list`)).versions}async getNewId(){return(await this.request(`${ve.imdAPI}/random-id`)).id}async saveProject(o,n,s){try{const i=o??(await this.request("/app/api/random-id")).id,r=[];if(n.project.floorplanImages)for(const[m,v]of Object.entries(n.project.floorplanImages))v!==null&&v.startsWith("data:image")&&r.push(this.base64ToFile(v,m));const l=s?`/app/api/${i}/${s}`:`/app/api/${i}`,c=JSON.parse(JSON.stringify(n));c.project.floorplanImages=null,await this.request(l,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});let d=s;if(!d){const m=await this.request(`/api/${i}/list`);d=Math.max(...m.versions)}if(r.length>0){const m=new FormData;r.forEach(v=>m.append("floorplans",v)),await this.request(`/app/api/${i}/${d}/floorplans`,{method:"POST",body:m})}return{id:i,version:d}}catch(i){throw Gt(i),i}}async delete(o,n){const s=n?`${ve.imdAPI}/${o}/${n}`:`${ve.imdAPI}/${o}`;await this.request(s,{method:"DELETE"})}async releaseLock(){try{await fetch(`${this.baseUrl}${ve.imdAPI}/release-lock`,{method:"POST",credentials:"include",keepalive:!0})}catch(o){console.warn("Failed to release lock",o)}}setupLockRelease(){window.addEventListener("beforeunload",()=>{const o=`${this.baseUrl}${ve.imdAPI}/release-lock`;if(navigator.sendBeacon){const n=new Blob([],{type:"application/json"});navigator.sendBeacon(o,n)}else fetch(o,{method:"POST",credentials:"include",keepalive:!0}).catch(()=>{})})}}const ie=new us;function rr(t){e.project.properties.projectName=t.trim(),e.project.properties.sizegrid=e.gridSize,Re(),$();const o=new Blob([JSON.stringify(e.project,null,2)],{type:"application/geo+json"}),n=document.createElement("a");n.href=URL.createObjectURL(o);const s=(e.project.properties.projectName||"projekt").replace(/[^a-z0-9]/gi,"_").toLowerCase();n.download=`${s}.geojson`,n.click(),URL.revokeObjectURL(n.href)}async function Jr(t,o){e.project.properties.projectName=(e.project.properties.projectName||"").trim(),e.project.properties.sizegrid=e.gridSize,Re(),$(),zo(a("saveProject"));try{const n=await ie.saveProject(t,e,o);return e.currentServerProjectId=n.id,e.currentServerVersion=n.version,n}finally{st()}}async function ir(t,o){zo(a("loadProject"));try{const n=await ie.getProject(t,o);e.currentServerProjectId=t,e.currentServerVersion=o,No(),Ne(n),N()}finally{st()}}function ms(t){const o=new FileReader;o.onload=n=>{try{const s=JSON.parse(n.target?.result);No(),Ne(s),N()}catch(s){alert("Fehler beim Laden der Projektdatei."),console.error(s)}},o.readAsText(t)}function Ne(t){if(t.type!=="FeatureCollection"||!t.features)throw new Error("Ungültiges GeoJSON-Projektformat.");e.project=t,Yr();const o=document.getElementById("projectName");o&&(o.value=e.project.properties.projectName||""),e.cachedFloorPlanImages={},e.project.floorplanImages&&Object.entries(e.project.floorplanImages).forEach(([i,r])=>{if(r){const l=new Image;l.onload=()=>{e.cachedFloorPlanImages[i]=l,i===e.activeFloorId&&G()},l.src=r}});const n=e.project.properties.settings||{};n.language&&(e.activeLanguage=n.language,document.documentElement.lang=n.language),n.theme&&(e.activeTheme=n.theme,document.body.setAttribute("data-theme",n.theme)),typeof e.project.properties.sizegrid=="number"?e.gridSize=e.project.properties.sizegrid:typeof n.gridSize=="number"&&(e.gridSize=n.gridSize),typeof n.isGridVisible=="boolean"&&(e.isGridVisible=n.isGridVisible),typeof n.isSnapEnabled=="boolean"&&(e.isSnapEnabled=n.isSnapEnabled),typeof n.metersPerPixel=="number"&&(e.metersPerPixel=n.metersPerPixel),typeof n.metersPerGridCell=="number"&&(e.metersPerGridCell=n.metersPerGridCell),n.visibleLayers&&(e.visibleLayers={...e.visibleLayers,...n.visibleLayers}),n.showDimensions&&(e.showDimensions={...e.showDimensions,...n.showDimensions}),typeof n.showBeaconHeatmap=="boolean"&&(e.showBeaconHeatmap=n.showBeaconHeatmap),typeof n.showBeaconRangeRing=="boolean"&&(e.showBeaconRangeRing=n.showBeaconRangeRing);const s=Me();e.activeFloorId=s.includes(e.activeFloorId)?e.activeFloorId:s[0]||null,ae(),Ye(),Re(),$(),G()}async function gs(t){try{const o=await nt(()=>import("./pdf-DcE_ssc1.js"),[]);o.GlobalWorkerOptions.workerSrc=`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${o.version}/pdf.worker.mjs`;const n=await t.arrayBuffer(),s=new Uint8Array(n),r=await(await o.getDocument(s).promise).getPage(1),l=r.getViewport({scale:2}),c=document.createElement("canvas");if(!c.getContext("2d"))throw new Error("Canvas-Kontext konnte nicht erstellt werden.");return c.height=l.height,c.width=l.width,await r.render({canvas:c,viewport:l}).promise,c.toDataURL("image/png")}catch(o){throw console.error("Fehler beim Konvertieren des PDFs:",o),new Error("Das PDF konnte nicht verarbeitet werden.")}}function ys(t,o){e.project.floorplanImages||(e.project.floorplanImages={}),e.project.floorplanImages[o]=t;const n=new Image;n.onload=()=>{e.cachedFloorPlanImages[o]=n,N(),ae(),G()},n.src=t}async function hs(t){return new Promise((o,n)=>{const s=new FileReader;s.onload=()=>o(s.result),s.onerror=()=>n(new Error("Fehler beim Lesen der Bilddatei.")),s.readAsDataURL(t)})}async function fs(t){if(!e.activeFloorId){alert("Bitte zuerst eine Etage auswählen oder erstellen.");return}const o=e.activeFloorId,n=t.type;try{let s;if(zo(a(n==="application/pdf"?"pdf_convert":"image_load")),n.startsWith("image/"))s=await hs(t);else if(n==="application/pdf")s=await gs(t);else{st(),alert("Nicht unterstützter Dateityp. Bitte wählen Sie eine Bild- oder PDF-Datei.");return}ys(s,o),st()}catch(s){st();const i=s instanceof Error?s.message:"Ein unbekannter Fehler ist aufgetreten.";alert(`Der Grundriss konnte nicht geladen werden: ${i}`)}}const $e="EG";function bs(){return{type:"FeatureCollection",features:[],properties:{projectName:"Unbenanntes Projekt",sizegrid:40,elementTypeStyles:{},settings:{language:"en",theme:"light",gridSize:40,isGridVisible:!0,isSnapEnabled:!0,metersPerPixel:.025,metersPerGridCell:1,visibleLayers:{area:!0,path:!0,point:!0,connector:!0},showDimensions:{area:!1,path:!1,circle:!1,angles:!1},showBeaconHeatmap:!1,showBeaconRangeRing:!1}},floorplanImages:{[$e]:null}}}const e={project:bs(),worldSize:{width:8e3,height:6e3},pan:{x:0,y:0},scale:1,threeDPan:{x:50,y:50},threeDScale:.8,threeDIsDragging:!1,threeDStartPos:{x:0,y:0},activeFloorId:$e,activeLanguage:"en",activeTheme:"light",currentMode:"select",tempShape:null,mousePos:{x:0,y:0},mousePosScreen:{x:0,y:0},gridSize:40,isGridVisible:!0,isSnapEnabled:!0,metersPerPixel:.025,metersPerGridCell:1,selectedFeatureIds:[],cachedFloorPlanImages:{},clipboard:null,isShiftPressed:!1,isCtrlPressed:!1,isAltPressed:!1,styleOverrides:null,isMovingElement:!1,dragStartPos:{x:0,y:0},originalGeometriesOnMove:new Map,isEditingPath:!1,editedFeatureId:null,editedNodeIndex:-1,hoveredFeatureId:null,hoveredEdgeIndex:-1,panStart:{x:0,y:0},isPanning:!1,visibleLayers:{area:!0,path:!0,point:!0,connector:!0},showDimensions:{area:!1,path:!1,circle:!1,angles:!1},showBeaconHeatmap:!1,showBeaconRangeRing:!1,measureLabels:[],currentServerProjectId:null,currentServerVersion:void 0};function Yr(){e.project.floorplanImages||(e.project.floorplanImages={});const t=Object.keys(e.project.floorplanImages);t.length===0&&(e.project.floorplanImages[$e]=null),e.activeFloorId||(e.activeFloorId=t.length>0?t[0]:$e)}const Ze=[];let Ie=-1;function N(){Ie<Ze.length-1&&Ze.splice(Ie+1),Ze.push(JSON.parse(JSON.stringify(e.project))),Ie++;try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}}function sr(){Ie>0&&(Ie--,Ne(JSON.parse(JSON.stringify(Ze[Ie]))))}function lr(){Ie<Ze.length-1&&(Ie++,Ne(JSON.parse(JSON.stringify(Ze[Ie]))))}function No(){Ze.length=0,Ie=-1}function vs(){Xr(!1),document.getElementById("mode-area")?.click(),Ye()}function Xr(t=!0,o){if(t&&!confirm(a("alert_newProjectConfirm")))return;e.project.type="FeatureCollection",e.project.features=[],e.project.properties={projectName:a("unnamedProject"),elementTypeStyles:{}};const n=o&&o.trim()!==""?o.trim():$e;e.project.floorplanImages={[n]:null};const s=document.getElementById("projectName");s&&(s.value=e.project.properties.projectName),e.cachedFloorPlanImages={},e.selectedFeatureIds=[],No(),e.activeFloorId=n,Yr(),N(),ae(),Re(),$(),Ye(),G()}function ar(t,o=!0){if(!t||t.trim()===""){alert("Der Etagenname darf nicht leer sein.");return}const n=t.trim();if(Me().includes(n)){alert(a("alert_floorNameExists"));return}e.activeFloorId=n,e.selectedFeatureIds=[],e.project.floorplanImages||(e.project.floorplanImages={}),e.project.floorplanImages[e.activeFloorId]=null,o&&N(),ae(),Re(),$(),G()}function cr(t){const o=e.activeFloorId;if(!o){alert(a("alert_noActiveFloor"));return}const n=t.trim();if(!n||n===o)return;if(Me().filter(i=>i!==o).includes(n)){alert(a("alert_floorNameExists"));return}e.project.features.forEach(i=>{i.properties.floor===o&&(i.properties.floor=n)}),e.project.floorplanImages&&Object.prototype.hasOwnProperty.call(e.project.floorplanImages,o)&&(e.project.floorplanImages[n]=e.project.floorplanImages[o],delete e.project.floorplanImages[o]),Object.prototype.hasOwnProperty.call(e.cachedFloorPlanImages,o)&&(e.cachedFloorPlanImages[n]=e.cachedFloorPlanImages[o],delete e.cachedFloorPlanImages[o]),e.activeFloorId=n,N(),ae(),Re(),$(),G()}function Oe(t,o){e.project.features.push({type:"Feature",geometry:t,properties:o}),N(),Re(),$(),G()}async function Tn(){if(e.selectedFeatureIds.length===0)return;const t=e.selectedFeatureIds.length>1?a("confirm_deleteElement_multi",void 0,e.selectedFeatureIds.length):a("confirm_deleteElement_single");if(await Ee(t)){e.project.features=e.project.features.filter(s=>!e.selectedFeatureIds.includes(s.properties.id)),e.selectedFeatureIds=[];const n=document.getElementById("deleteBtn");n&&(n.disabled=!0),N(),Re(),$(),G()}}function Qr(t,o){const n=8/e.scale;for(let s=0;s<o.coordinates.length-1;s++){const i={x:o.coordinates[s][0],y:o.coordinates[s][1]},r={x:o.coordinates[s+1][0],y:o.coordinates[s+1][1]},l=r.x-i.x,c=r.y-i.y;if(l===0&&c===0)continue;const d=((t.x-i.x)*l+(t.y-i.y)*c)/(l*l+c*c),m=d<0?i:d>1?r:{x:i.x+d*l,y:i.y+d*c};if(Math.sqrt((t.x-m.x)**2+(t.y-m.y)**2)<n)return!0}return!1}function de(t){const o=e.project.features.filter(n=>n.properties.floor===e.activeFloorId&&!n.properties.isPlaceholder);for(const n of[...o].reverse()){if(n.geometry.type==="Polygon"&&he(t,n.geometry))return n;if(n.geometry.type==="Point"||n.properties.type==="connector"){const[s,i]=n.geometry.coordinates;if(Math.sqrt((t.x-s)**2+(t.y-i)**2)*e.scale<15)return n}if(n.geometry.type==="LineString"&&Qr(t,n.geometry))return n}return null}function qt(t){if(!e.activeFloorId){alert(a("alert_noActiveFloor"));return}const o=document.getElementById("element-type-select");let n=o?.value||"";const s=me();let i=s[n];if(!i){const v=t.type==="Polygon"?"area":t.type==="Point"?"point":null;if(v){const f=Object.keys(s).find(h=>s[h].baseType===v);f&&(n=f,i=s[f],o&&o.querySelector(`option[value="${f}"]`)&&(o.value=f))}if(!i)return}const r=i.baseType,l=i.label,c=e.project.features.filter(v=>v.properties.subType===n).length+1,d=`${l} ${c}`,m={id:`feat_${Date.now()}`,floor:e.activeFloorId,type:r==="area"?"area":"point",subType:n,label:d};if(r==="point"&&["treppe","aufzug"].includes(n)?m.type="connector":t.type==="LineString"&&(m.type="path"),Oe(t,m),m.type==="connector"){const v=Me(),f=e.activeFloorId,h=v.find(S=>S!==f)||null;if(h){const S=`Soll ich das Gegenstück in ${h} automatisch erstellen?`;Ee(S).then(g=>{if(g&&t.type==="Point"){const E=t.coordinates.slice(),I={id:`feat_${Date.now()}_link`,floor:h,type:"connector",subType:n,label:d,linksTo:{floor:f,connectorId:m.id}};Oe({type:"Point",coordinates:E},I)}})}}}function xs(t){if(!e.tempShape)e.tempShape={start:t};else{const{start:o}=e.tempShape,n=Math.min(o.x,t.x),s=Math.min(o.y,t.y),i=Math.abs(t.x-o.x),r=Math.abs(t.y-o.y);if(i<e.gridSize/2||r<e.gridSize/2){e.tempShape=null;return}const l=[[[n,s],[n+i,s],[n+i,s+r],[n,s+r],[n,s]]];qt({type:"Polygon",coordinates:l}),e.tempShape=null}}function Es(t){if(!e.tempShape)e.tempShape={start:t};else{const o=e.tempShape.start,n=Math.abs(t.x-o.x),s=Math.abs(t.y-o.y),i=Math.max(n,s),r=Math.min(o.x,t.x),l=Math.min(o.y,t.y);if(i<e.gridSize/2){e.tempShape=null;return}const c=[[[r,l],[r+i,l],[r+i,l+i],[r,l+i],[r,l]]];qt({type:"Polygon",coordinates:c}),e.tempShape=null}}function ws(t){if(!e.tempShape)e.tempShape={start:t};else{const o=e.tempShape.start,n=Math.sqrt((t.x-o.x)**2+(t.y-o.y)**2);if(n<2){e.tempShape=null;return}const s=64,i=Array.from({length:s},(r,l)=>{const c=l/s*2*Math.PI;return[o.x+n*Math.cos(c),o.y+n*Math.sin(c)]});i.push(i[0]),qt({type:"Polygon",coordinates:[i]}),e.tempShape=null}}function Ss(t){if(!e.tempShape)e.tempShape={start:t};else{const o=[[e.tempShape.start.x,e.tempShape.start.y],[t.x,t.y]],n={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"line",label:a("lineLabel")};Oe({type:"LineString",coordinates:o},n),e.currentMode="select",document.getElementById("mode-select")?.classList.add("active"),document.getElementById("mode-line")?.classList.remove("active"),e.tempShape=null}}function Is(t){e.tempShape?e.tempShape.nodes.push(t):e.tempShape={nodes:[t]}}function ks(t){qt({type:"Point",coordinates:[t.x,t.y]})}function Ps(t){if(!e.tempShape)e.tempShape={start:t};else if(!e.tempShape.end)e.tempShape.end=t;else{const o=e.tempShape.start,n=e.tempShape.end,i=_o(o,n,t),r=Rt(o,n,i),l={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"arc",label:a("arcLabel"),controlPoints:{p0:o,p1:i,p2:n}};Oe({type:"LineString",coordinates:r},l),e.tempShape=null}}function Bs(){if(!e.activeFloorId||!e.tempShape?.nodes||e.tempShape.nodes.length<3){e.tempShape=null;return}const t=[...e.tempShape.nodes.map(o=>[o.x,o.y]),[e.tempShape.nodes[0].x,e.tempShape.nodes[0].y]];qt({type:"Polygon",coordinates:[t]}),document.getElementById("mode-select")?.click(),e.tempShape=null}function Cs(t){let o=null;if(e.hoveredFeatureId){const h=e.project.features.find(S=>S.properties.id===e.hoveredFeatureId);h&&(h.geometry.type==="Polygon"||h.geometry.type==="LineString")&&(o=h)}if(!o){const h=de(t);h&&(h.geometry.type==="Polygon"||h.geometry.type==="LineString")&&(o=h)}if(!o){const h=e.selectedFeatureIds.find(S=>{const g=e.project.features.find(E=>E.properties.id===S);return g&&(g.geometry.type==="Polygon"||g.geometry.type==="LineString")})||null;h&&(o=e.project.features.find(S=>S.properties.id===h))}if(o||(o=e.project.features.find(h=>h.properties.floor===e.activeFloorId&&h.geometry.type==="Polygon")||e.project.features.find(h=>h.properties.floor===e.activeFloorId&&h.geometry.type==="LineString")),!o)return;let n=null,s=-1;if(o.geometry.type==="Polygon"){const h=o.geometry,S=Wt(t,h);if(S.index===-1)return;n=Ki(t,h,S.index),s=S.index}else{const h=o.geometry,S=Kr(t,h);if(S.index===-1)return;n=Ui(t,h,S.index),s=S.index}if(!e.tempShape){e.tempShape={start:n,edgeIndex:s};return}if(e.tempShape.edgeIndex!==s){e.tempShape={start:n,edgeIndex:s};return}const i=e.tempShape.start,r=n,l=[[i.x,i.y],[r.x,r.y]],c=r.x-i.x,d=r.y-i.y,m=Math.sqrt(c*c+d*d),v=Math.round(m*e.metersPerPixel*100)/100,f={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"door",label:a("doorLabel"),attachedTo:o.properties.id,door_length_m:v,door_edge_index:e.tempShape.edgeIndex};Oe({type:"LineString",coordinates:l},f),e.currentMode="select",document.getElementById("mode-select")?.classList.add("active"),document.getElementById("mode-door")?.classList.remove("active"),e.tempShape=null}function Ls(t){const n=[...t.coordinates[0]];if(n.length<4)return!1;const s=n[0],i=n[n.length-1];(Math.abs(s[0]-i[0])>1e-4||Math.abs(s[1]-i[1])>1e-4)&&n.push([s[0],s[1]]);for(let r=0;r<n.length-1;r++){const l=n[r],c=n[r+1],d=Math.abs(l[1]-c[1])<1e-4,m=Math.abs(l[0]-c[0])<1e-4;if(!d&&!m)return!1}return!0}function Ms(t){const n=g=>Math.round(g/1e-4)*1e-4,s=new Map,i=new Map,r=(g,E,I)=>{const k=Math.min(E,I),M=Math.max(E,I),C=n(g);s.has(C)||s.set(C,[]),s.get(C).push({x1:n(k),x2:n(M)})},l=(g,E,I)=>{const k=Math.min(E,I),M=Math.max(E,I),C=n(g);i.has(C)||i.set(C,[]),i.get(C).push({y1:n(k),y2:n(M)})};for(const g of t){const E=g.coordinates[0];for(let I=0;I<E.length-1;I++){const k=E[I],M=E[I+1];Math.abs(k[1]-M[1])<1e-4?r(k[1],k[0],M[0]):l(k[0],k[1],M[1])}}const c=new Map,d=(g,E,I,k)=>{const M=`${n(g)},${n(E)}`,C=`${n(I)},${n(k)}`;return M<C?`${M}|${C}`:`${C}|${M}`};s.forEach((g,E)=>{const I=Array.from(new Set(g.flatMap(k=>[k.x1,k.x2]))).sort((k,M)=>k-M);for(const k of g)for(let M=0;M<I.length-1;M++){const C=I[M],_=I[M+1];if(C>=k.x1-1e-4&&_<=k.x2+1e-4){const A=d(C,E,_,E);c.set(A,(c.get(A)||0)+1)}}}),i.forEach((g,E)=>{const I=Array.from(new Set(g.flatMap(k=>[k.y1,k.y2]))).sort((k,M)=>k-M);for(const k of g)for(let M=0;M<I.length-1;M++){const C=I[M],_=I[M+1];if(C>=k.y1-1e-4&&_<=k.y2+1e-4){const A=d(E,C,E,_);c.set(A,(c.get(A)||0)+1)}}});const m=[];if(c.forEach((g,E)=>{if(g%2===1){const[I,k]=E.split("|"),[M,C]=I.split(",").map(Number),[_,A]=k.split(",").map(Number);m.push({x1:M,y1:C,x2:_,y2:A})}}),m.length===0)return[];const v=new Map;for(const g of m){const E=`${g.x1},${g.y1}`,I=`${g.x2},${g.y2}`;v.has(E)||v.set(E,[]),v.has(I)||v.set(I,[]),v.get(E).push({x:g.x2,y:g.y2}),v.get(I).push({x:g.x1,y:g.y1})}const f=new Set(m.map(g=>d(g.x1,g.y1,g.x2,g.y2))),h=[];for(;f.size>0;){const g=Array.from(f)[0].split("|")[0],[E,I]=g.split(",").map(Number),k={x:E,y:I},M=[k];let C=k,_=null;for(;;){const j=v.get(`${C.x},${C.y}`)||[];let u=null;for(const b of j){const B=d(C.x,C.y,b.x,b.y);if(f.has(B)&&(!_||b.x!==_.x||b.y!==_.y)){u=b;break}}if(!u||(f.delete(d(C.x,C.y,u.x,u.y)),_=C,C=u,M.push(C),C.x===k.x&&C.y===k.y))break}const A=M.map(j=>[j.x,j.y]);A.length>=4&&h.push(A)}if(h.length===0)return[];const S=g=>{let E=0;for(let I=0;I<g.length-1;I++){const[k,M]=g[I],[C,_]=g[I+1];E+=k*_-C*M}return Math.abs(E)/2};return h.sort((g,E)=>S(E)-S(g)),h[0]}function Ts(t){const o=[...t].sort((r,l)=>r.x===l.x?r.y-l.y:r.x-l.x),n=(r,l,c)=>(l.x-r.x)*(c.y-r.y)-(l.y-r.y)*(c.x-r.x),s=[];for(const r of o){for(;s.length>=2&&n(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}const i=[];for(let r=o.length-1;r>=0;r--){const l=o[r];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],l)<=0;)i.pop();i.push(l)}return i.pop(),s.pop(),s.concat(i)}let yt=null;function Fs(){const t=document.getElementById("file-menu-trigger"),o=document.getElementById("output-menu-trigger"),n=document.getElementById("overview-menu-trigger"),s=document.getElementById("backstage-panel"),i=document.getElementById("backstage-close-btn"),r=document.getElementById("backstage-title"),l=document.getElementById("backstage-file-content"),c=document.getElementById("backstage-output-content"),d=document.getElementById("backstage-overview-content");if(!t||!o||!n||!s){console.error("Menü-Elemente konnten nicht gefunden werden!");return}const m=f=>{l.style.display="none",c.style.display="none",d.style.display="none",f==="file"?(l.style.display="block",r.textContent=a("filePanelTitle")):f==="output"?(c.style.display="block",r.textContent=a("outputPanelTitle")):f==="overview"&&(d.style.display="block",r.textContent=a("overviewPanelTitle")),s.classList.add("visible"),document.body.classList.add("backstage-visible"),yt=f,t.classList.remove("active"),o.classList.remove("active"),n.classList.remove("active"),document.getElementById(`${f}-menu-trigger`)?.classList.add("active")},v=()=>{s.classList.remove("visible"),document.body.classList.remove("backstage-visible"),yt=null,t.classList.remove("active"),o.classList.remove("active"),n.classList.remove("active")};t.addEventListener("click",f=>{f.stopPropagation(),yt==="file"?v():m("file")}),o.addEventListener("click",f=>{f.stopPropagation(),yt==="output"?v():m("output")}),n.addEventListener("click",f=>{f.stopPropagation(),yt==="overview"?v():m("overview")}),i.addEventListener("click",v)}function we(){const t=document.getElementById("gridInfo");if(!t)return;const o=Math.round(e.gridSize),n=e.activeLanguage==="de"?"Kasten":"cell",s=e.metersPerPixel;if(s&&s>0){const i=Math.round(s*e.gridSize*100)/100,r=(e.activeLanguage==="de","m");t.textContent=`1 ${n} ≈ ${o} px · ${i} ${r}`}else t.textContent=`1 ${n} ≈ ${o} px`}function js(t){const o=document.getElementById("toggleGridBtn"),n=document.getElementById("toggleSnapBtn"),s=document.getElementById("gridSizeInput"),i=document.getElementById("gridMinusBtn"),r=document.getElementById("gridPlusBtn"),l=document.getElementById("gridMetersInput"),c=document.getElementById("gridMetersMinusBtn"),d=document.getElementById("gridMetersPlusBtn"),m=document.getElementById("toggleAreaDimensions"),v=document.getElementById("togglePathLengths"),f=document.getElementById("toggleAreaAngles"),h=document.getElementById("toggleCircleRadius"),S=document.getElementById("toggleBeaconRing");o&&o.addEventListener("change",()=>{e.isGridVisible=o.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.isGridVisible=e.isGridVisible,g(),t()}),n&&n.addEventListener("change",()=>{e.isSnapEnabled=n.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.isSnapEnabled=e.isSnapEnabled,g(),$()}),s&&s.addEventListener("input",()=>{const E=parseInt(s.value,10);if(!isNaN(E)&&E>=5){e.gridSize=E,e.project.properties.sizegrid=e.gridSize;const I=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=I,l&&(l.value=String(I)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,g(),$(),we(),t()}}),i&&i.addEventListener("click",()=>{const E=Math.max(5,(e.gridSize||40)-5);e.gridSize=E,e.project.properties.sizegrid=e.gridSize,s&&(s.value=String(E));const I=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=I,l&&(l.value=String(I)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,g(),$(),we(),t()}),r&&r.addEventListener("click",()=>{const E=Math.min(400,(e.gridSize||40)+5);e.gridSize=E,e.project.properties.sizegrid=e.gridSize,s&&(s.value=String(E));const I=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=I,l&&(l.value=String(I)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,g(),$(),we(),t()}),l&&l.addEventListener("input",()=>{const E=parseFloat(l.value);!isNaN(E)&&E>=.1&&(e.metersPerGridCell=Math.round(E*100)/100,e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,g(),we())}),c&&c.addEventListener("click",()=>{const E=Math.max(.1,(e.metersPerGridCell||1)-.1),I=Math.round(E*100)/100;e.metersPerGridCell=I,l&&(l.value=String(I)),e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,g(),we()}),d&&d.addEventListener("click",()=>{const E=Math.min(100,(e.metersPerGridCell||1)+.1),I=Math.round(E*100)/100;e.metersPerGridCell=I,l&&(l.value=String(I)),e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,g(),we()}),document.querySelectorAll(".layer-toggle").forEach(E=>{E.addEventListener("change",I=>{const k=I.target,M=k.dataset.layer;M&&(e.visibleLayers[M]=k.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.visibleLayers={...e.project.properties.settings.visibleLayers,[M]:k.checked},g(),t())})}),m&&m.addEventListener("change",()=>{e.showDimensions.area=m.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,area:e.showDimensions.area},g(),t()}),f&&f.addEventListener("change",()=>{e.showDimensions.angles=f.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,angles:e.showDimensions.angles},g(),t()}),v&&v.addEventListener("change",()=>{e.showDimensions.path=v.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,path:e.showDimensions.path},g(),t()}),h&&h.addEventListener("change",()=>{e.showDimensions.circle=h.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,circle:e.showDimensions.circle},g(),t()}),S&&S.addEventListener("change",()=>{e.showBeaconRangeRing=S.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showBeaconRangeRing=e.showBeaconRangeRing,g(),t()}),we();function g(){try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}}}let We=null,Yt=null,zn=null;function Ds(t){We=t.contextMenu,Yt=t.ctxMenuTypeSubmenu,zn=t.ctxMenuAddOverlapPoint}function _s(t,o){if(!Yt)return;Yt.innerHTML="";const n=me(),s=t.geometry.type==="Polygon"||t.geometry.type==="Point"?n[t.properties.subType]?.baseType:null;if(s){for(const i in n)if(n[i].baseType===s){const r=document.createElement("li");r.textContent=n[i].label,r.dataset.typeKey=i,r.addEventListener("click",()=>{e.project.features.forEach(l=>{if(e.selectedFeatureIds.includes(l.properties.id)){const c=n[l.properties.subType];c&&c.baseType===s&&(l.properties.subType=i)}}),N(),G(),o()}),Yt.appendChild(r)}}}function As(t,o,n){We&&(zn&&(zn.style.display=n===2?"":"none"),We.style.display="block",We.style.left=`${t}px`,We.style.top=`${o}px`)}function ei(){We&&(We.style.display="none")}function zs(){const t=e.project.features.filter(o=>e.selectedFeatureIds.includes(o.properties.id));t.length!==0&&(e.clipboard=t.map(o=>JSON.parse(JSON.stringify(o))))}function Ns(t){if(!e.clipboard||e.clipboard.length===0)return;const o=e.gridSize||20,n=e.clipboard.map(s=>{const i=JSON.parse(JSON.stringify(s.geometry));if(i.type==="Point"){const c=i.coordinates;i.coordinates=[c[0]+o,c[1]+o]}else if(i.type==="LineString"){const c=i.coordinates;i.coordinates=c.map(([d,m])=>[d+o,m+o])}else if(i.type==="Polygon"){const c=i.coordinates;i.coordinates=c.map(d=>d.map(([m,v])=>[m+o,v+o]))}const r=`feat_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,l=`${s.properties.label}`;return{type:"Feature",geometry:i,properties:{...s.properties,id:r,label:l,floor:e.activeFloorId}}});e.project.features.push(...n),e.selectedFeatureIds=n.map(s=>s.properties.id),N(),G(),t(),$()}let vt=null,xt=null,Nn=null,Et=null,Xt=null;function $s(t){vt=t.propertiesContent,xt=t.propertiesPlaceholder,Nn=t.propertiesLabelInput,Et=t.propertiesTypeSelect,Xt=t.propertiesIsEmptyCheckbox}function se(){const t=document.getElementById("properties-panel");if(!vt||!xt||!Nn||!Et)return;if(e.selectedFeatureIds.length!==1){t&&(t.style.display="none"),vt.style.display="none",xt.style.display="block";return}t&&(t.style.display="block"),vt.style.display="block",xt.style.display="none";const o=e.selectedFeatureIds[0],n=e.project.features.find(P=>P.properties.id===o);if(!n){vt.style.display="none",xt.style.display="block";return}Nn.value=n.properties.label,Et.innerHTML="";const s=me(),i=n.geometry.type==="Polygon"||n.geometry.type==="Point"?s[n.properties.subType]?.baseType:null;if(i){for(const P in s)if(s[P].baseType===i){const L=document.createElement("option");L.value=P,L.textContent=s[P].label,Et.appendChild(L)}Et.value=n.properties.subType}const r=document.getElementById("beacon-fields"),l=document.getElementById("beacon-uuid-input"),c=document.getElementById("beacon-serial-input"),d=document.getElementById("beacon-major-input"),m=document.getElementById("beacon-minor-input"),v=document.getElementById("beacon-installation-input"),f=document.getElementById("beacon-range-input"),h=document.getElementById("beacon-note-de-input"),S=document.getElementById("beacon-note-en-input");if(r){const P=n.geometry.type==="Point"&&n.properties.subType==="beacon",L=document.querySelector("#properties-panel h2");if(L&&L.childNodes[0]){const F=P?"beacon_parameters":"properties";L.childNodes[0].textContent=a(F)+" "}if(r.style.display=P?"block":"none",P){const F=document.querySelector('label[for="beacon-serial-input"]'),T=document.querySelector('label[for="beacon-installation-input"]'),D=document.querySelector('label[for="beacon-range-input"]'),O=document.querySelector('label[for="beacon-note-de-input"]');F&&(F.textContent=a("beacon_serial_label"),F.title=a("beacon_serial_desc")),T&&(T.textContent=a("beacon_installation_label"),T.title=a("beacon_installation_desc")),D&&(D.textContent=a("beacon_range_label"),D.title=a("beacon_range_desc")),O&&(O.textContent=a("beacon_note_de_label"),O.title=a("beacon_note_de_desc")),l&&(l.value=n.properties.beacon_uuid||""),c&&(c.value=n.properties.beacon_serial||""),d&&(d.value=n.properties.beacon_major?.toString()||""),m&&(m.value=n.properties.beacon_minor?.toString()||""),v&&(v.value=n.properties.beacon_installation||""),f&&(f.value=n.properties.beacon_range!==void 0?String(n.properties.beacon_range):""),h&&(h.value=n.properties.beacon_note_de||""),S&&(S.value=n.properties.beacon_note_en||"")}}const g=document.getElementById("properties-description-input"),E=document.getElementById("properties-opening-hours-input"),I=document.getElementById("properties-room-number-input"),k=document.getElementById("properties-designation-select");if(g&&(g.value=n.properties.description||""),E){const P=n.properties.opening_hours;if(!P)E.value="";else if(typeof P=="string")E.value=P;else{const L=[],F=P.weekly||{},T=Object.keys(F).map(R=>Number(R)).sort((R,X)=>R-X),D=R=>{switch(R){case 1:return a("weekdayMon");case 2:return a("weekdayTue");case 3:return a("weekdayWed");case 4:return a("weekdayThu");case 5:return a("weekdayFri");case 6:return a("weekdaySat");case 0:return a("weekdaySun");default:return""}};T.forEach(R=>{const X=F[R].map(re=>`${re.start}–${re.end}`).join(", ");L.push(`${D(R)} ${X}`)});const O=P.exceptions,V=P.ranges;Array.isArray(O)&&O.length>0&&L.push(`${a("openingHoursExceptions")}: ${O.length}`),Array.isArray(V)&&V.length>0&&L.push(`${a("openingHoursRanges")}: ${V.length}`),E.value=L.join(" · ")}}I&&(I.value=n.properties.room_number||""),k&&(k.value=n.properties.designation||k.value);const M=document.querySelector('label[for="properties-description-input"]'),C=document.querySelector('label[for="properties-opening-hours-input"]'),_=document.querySelector('label[for="properties-room-number-input"]'),A=document.querySelector('label[for="properties-designation-select"]'),j=n.geometry.type!=="Point"||n.properties.subType!=="beacon";g&&(g.style.display=j?"":"none"),E&&(E.style.display=j?"":"none"),I&&(I.style.display=j?"":"none"),k&&(k.style.display=j?"":"none"),M&&(M.style.display=j?"":"none"),C&&(C.style.display=j?"":"none"),_&&(_.style.display=j?"":"none"),A&&(A.style.display=j?"":"none");const u=document.getElementById("open-opening-hours-modal-btn"),b=document.getElementById("open-occupancy-modal-btn"),B=n.properties.type==="area"&&n.geometry.type==="Polygon";if(u&&(u.style.display=B?"":"none"),b&&(b.style.display=B?"":"none"),Xt){Xt.checked=!!n.properties.isEmpty;const P=Xt.parentElement;P&&(P.style.display=B?"":"none")}}function mn(){const t=document.getElementById("mode-merge");if(!t)return;const o=t.querySelector("span"),i=e.project.features.filter(l=>l.properties.floor===e.activeFloorId).filter(l=>e.selectedFeatureIds.includes(l.properties.id)&&(l.geometry.type==="Polygon"||l.geometry.type==="LineString"&&l.properties.subType==="arc")).length,r=a("merge");o&&(o.textContent=i>0?`${r} (${i})`:r),i>=2?t.classList.add("merge-ready"):t.classList.remove("merge-ready")}let oe=null,lt=null,at=null,ct=null,dt=null,$n={x:0,y:0},On={x:0,y:0},$o=!1,Oo=!1;function Os(t){oe=t.canvas,lt=t.scrollbarX,at=t.scrollbarY,ct=t.thumbX,dt=t.thumbY}function gn(t){return{x:(t.x-e.pan.x)/e.scale,y:(t.y-e.pan.y)/e.scale}}function pt(){const{scale:t,worldSize:o}=e;if(!oe||!oe.parentElement)return;const n=oe.parentElement.clientWidth,s=oe.parentElement.clientHeight,i=o.width*t,r=o.height*t;if(i<n)e.pan.x=(n-i)/2;else{const c=n-i;e.pan.x=Math.min(e.pan.x,0),e.pan.x=Math.max(e.pan.x,c)}if(r<s)e.pan.y=(s-r)/2;else{const c=s-r;e.pan.y=Math.min(e.pan.y,0),e.pan.y=Math.max(e.pan.y,c)}}function yn(){const{scale:t,pan:o,worldSize:n}=e;if(!oe||!oe.parentElement||!lt||!at||!ct||!dt)return;const{clientWidth:s,clientHeight:i}=oe.parentElement,r=n.width*t,l=r>s&&s>0;if(lt.style.display=l?"block":"none",l){const m=lt.clientWidth,v=s/r*m,f=Math.max(v,20),h=Math.max(r-s,0),S=10,g=Math.max(m-f-2*S,0),E=h>0?-o.x/h*g:0;ct.style.width=`${f}px`;const I=1,k=Math.abs(o.x-(s-r))<=I,M=Math.abs(o.x-0)<=I&&r>=s,C=k?S+g:M?S:S+Math.max(0,Math.min(E,g));ct.style.left=`${C}px`}const c=n.height*t,d=c>i&&i>0;if(at.style.display=d?"block":"none",d){const m=at.clientHeight,v=i/c*m,f=Math.max(v,20),h=Math.max(c-i,0),S=10,g=Math.max(m-f-2*S,0),E=h>0?-o.y/h*g:0;dt.style.height=`${f}px`;const I=1,k=Math.abs(o.y-(i-c))<=I,M=Math.abs(o.y-0)<=I&&c>=i,C=k?S+g:M?S:S+Math.max(0,Math.min(E,g));dt.style.top=`${C}px`}}function Hs(t){t.preventDefault(),e.isPanning=!0,e.panStart={x:t.clientX,y:t.clientY},oe&&(oe.style.cursor="grabbing")}function Rs(t){if(!e.isPanning)return;const o=t.clientX-e.panStart.x,n=t.clientY-e.panStart.y;e.pan.x+=o,e.pan.y+=n,e.panStart={x:t.clientX,y:t.clientY},pt(),G(),yn()}function qs(){!e.isPanning||!oe||(e.isPanning=!1,e.currentMode==="pan"||e.currentMode==="move-element"?oe.style.cursor="grab":e.currentMode==="select"?oe.style.cursor="default":oe.style.cursor="crosshair")}function dr(t){t.stopPropagation(),t.preventDefault(),$n={x:t.clientX,y:t.clientY},On={...e.pan},t.target===ct&&($o=!0),t.target===dt&&(Oo=!0),document.addEventListener("mousemove",ti),document.addEventListener("mouseup",Vs,{once:!0})}function ti(t){if(t.preventDefault(),!(!lt||!at)){if($o){const o=t.clientX-$n.x,n=lt.clientWidth,s=oe?.parentElement?.clientWidth||0,i=e.worldSize.width*e.scale,r=ct?.clientWidth||0,l=Math.max(i-s,0),d=Math.max(n-r-2*10,1);if(n>0&&l>0){const m=o/d*l;e.pan.x=On.x-m}pt(),G(),yn()}if(Oo){const o=t.clientY-$n.y,n=at.clientHeight,s=oe?.parentElement?.clientHeight||0,i=e.worldSize.height*e.scale,r=dt?.clientHeight||0,l=Math.max(i-s,0),d=Math.max(n-r-2*10,1);if(n>0&&l>0){const m=o/d*l;e.pan.y=On.y-m}pt(),G(),yn()}}}function Vs(){$o=!1,Oo=!1,document.removeEventListener("mousemove",ti)}let Te=null;function Gs(t){Te=t.canvas}function Ws(t){if(e.selectedFeatureIds.length>0){e.isMovingElement=!0,e.dragStartPos=t,e.originalGeometriesOnMove.clear(),e.project.features.forEach(n=>{e.selectedFeatureIds.includes(n.properties.id)&&(e.originalGeometriesOnMove.set(n.properties.id,JSON.parse(JSON.stringify(n.geometry))),n.properties.controlPoints&&(n.properties.originalControlPoints=JSON.parse(JSON.stringify(n.properties.controlPoints))))});const o=new Set(e.selectedFeatureIds);e.project.features.forEach(n=>{const s=n.properties.attachedTo;s&&o.has(s)&&(e.originalGeometriesOnMove.has(n.properties.id)||(e.originalGeometriesOnMove.set(n.properties.id,JSON.parse(JSON.stringify(n.geometry))),n.properties.controlPoints&&(n.properties.originalControlPoints=JSON.parse(JSON.stringify(n.properties.controlPoints)))))}),Te&&(Te.style.cursor="move")}}function Ks(t){if(!e.isMovingElement||e.selectedFeatureIds.length===0)return;const o=t.x-e.dragStartPos.x,n=t.y-e.dragStartPos.y,s=(i,r,l)=>{if(Array.isArray(i)&&typeof i[0]=="number"&&i.length===2){i[0]+=r,i[1]+=l;return}i.forEach(c=>{Array.isArray(c[0])?s(c,r,l):(c[0]+=r,c[1]+=l)})};e.project.features.forEach(i=>{const r=e.originalGeometriesOnMove.get(i.properties.id);if(r){const c=JSON.parse(JSON.stringify(r));"coordinates"in c&&(s(c.coordinates,o,n),i.geometry=c)}const l=i.properties.originalControlPoints;l&&(i.properties.controlPoints={p0:{x:l.p0.x+o,y:l.p0.y+n},p1:{x:l.p1.x+o,y:l.p1.y+n},p2:{x:l.p2.x+o,y:l.p2.y+n}})}),G()}function Us(){e.isMovingElement&&(e.isMovingElement=!1,e.originalGeometriesOnMove.clear(),e.project.features.forEach(t=>delete t.properties.originalControlPoints),Te&&(Te.style.cursor="default"),N())}function Zs(t){if(e.selectedFeatureIds.length!==1)return!1;const o=e.project.features.find(i=>i.properties.id===e.selectedFeatureIds[0]);if(!o||o.geometry.type!=="LineString"&&o.geometry.type!=="Polygon")return!1;const n=8/e.scale;let s=[];if(o.geometry.type==="LineString"&&o.properties.subType==="arc"&&o.properties.controlPoints){const{p0:i,p1:r,p2:l}=o.properties.controlPoints;s=[i,r,l]}else{const i=o.geometry.type==="LineString"?o.geometry.coordinates:o.geometry.coordinates[0];s=(o.geometry.type==="Polygon"?i.slice(0,-1):i).map(l=>({x:l[0],y:l[1]}))}for(let i=0;i<s.length;i++)if(Math.sqrt((t.x-s[i].x)**2+(t.y-s[i].y)**2)<n)return e.isEditingPath=!0,e.editedFeatureId=o.properties.id,e.editedNodeIndex=i,Te&&(Te.style.cursor="grabbing"),!0;return!1}function Js(t){if(!e.isEditingPath||!e.editedFeatureId)return;const o=e.project.features.find(s=>s.properties.id===e.editedFeatureId);if(!o)return;const n=ot(fe(t));if(o.geometry.type==="LineString"&&o.properties.subType==="arc"&&o.properties.controlPoints){const s=o.properties.controlPoints;e.editedNodeIndex===0?s.p0=n:e.editedNodeIndex===1?s.p1=n:e.editedNodeIndex===2&&(s.p2=n),o.geometry.coordinates=Rt(s.p0,s.p2,s.p1)}else if(o.geometry.type==="LineString")o.geometry.coordinates[e.editedNodeIndex]=[n.x,n.y];else if(o.geometry.type==="Polygon"){const s=o.geometry.coordinates[0];s[e.editedNodeIndex]=[n.x,n.y],e.editedNodeIndex===0&&(s[s.length-1]=[n.x,n.y])}G()}function Ys(){!e.isEditingPath||!Te||(e.isEditingPath=!1,Te.style.cursor="default",N())}function Xs(t,o){const n=parseInt(t.slice(1,3),16),s=parseInt(t.slice(3,5),16),i=parseInt(t.slice(5,7),16);return`rgba(${n}, ${s}, ${i}, ${o})`}let Cn=null,Ge=null,Ho=null,Ro=null,Ae=null,Hn=null,qo=null,ni=null,Vo=null,Go=null,oi=null,Rn=null,Qt=null,Wo=null,Ko=null,ri=null,Uo=null,Zo=null,qn=null,Vn=null,Gn=null,en=null,Wn=null,wt=null,St=null,Kn=null,It=null,kt=null,tn=null,te=null;function Qs(t){Cn=t.typeManagerModal,Ge=t.typeManagerList,Ho=t.typeManagerDetailsContent,Ro=t.typeManagerPlaceholder,Ae=t.typeNameInput,Hn=t.typeEditorArea,qo=t.typeFillColorInput,ni=t.typeFillColorSwatch,Vo=t.typeFillOpacitySlider,Go=t.typeStrokeColorInput,oi=t.typeStrokeColorSwatch,Rn=t.typeEditorPoint,Qt=t.typeIconLibrary,Wo=t.typeIconColorInput,Ko=t.typeManagerDeleteBtn,ri=t.newTypeChoiceModal,Uo=t.typeFontColorInput,Zo=t.typeFontSizeInput,qn=t.typeTextStyleHeader,Vn=t.typeAreaStyleHeader,Gn=t.typePointStyleHeader,en=t.typePreviewContainer,Wn=t.typePreviewHeader,wt=t.typePreviewArea,St=t.typePreviewAreaRect,Kn=t.typePreviewAreaLabel,It=t.typePreviewPoint,kt=t.typePreviewPointIcon,tn=t.typePreviewPointLabel}function el(){e.styleOverrides=JSON.parse(JSON.stringify(me())),Vt(),ol(),ai(),Cn.classList.remove("hidden")}function pr(){Cn.classList.add("hidden"),te=null,e.styleOverrides=null,Ln(void 0),G()}function tl(){if(!e.styleOverrides)return;e.project.properties.elementTypeStyles||(e.project.properties.elementTypeStyles={});const t=e.project.properties.elementTypeStyles;Object.keys(e.styleOverrides).forEach(o=>{const n=e.styleOverrides[o];n.isDefault?delete t[o]:t[o]={label:n.label,baseType:n.baseType,fill:n.fill,stroke:n.stroke,icon:n.icon,iconColor:n.iconColor,fontSize:n.fontSize,fontColor:n.fontColor}}),Object.keys(t).forEach(o=>{e.styleOverrides[o]||delete t[o]}),N(),Ye(),$(),e.styleOverrides=null,G(),Cn.classList.add("hidden")}function Vt(){if(!e.styleOverrides||!Ge)return;Ge.innerHTML="";const t={},o={};for(const i in e.styleOverrides){const r=e.styleOverrides[i];r.baseType==="area"?t[i]=r:o[i]=r}const n=i=>{const r=document.createElement("li");return r.textContent=i,r.style.cssText="font-weight: bold; padding: 12px 8px 4px; color: var(--color-primary); background-color: var(--color-secondary); border-bottom: 1px solid var(--color-border);",r},s=(i,r)=>{const l=document.createElement("li");if(l.style.cssText="cursor: pointer; padding: 8px; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; gap: 8px;",r.baseType==="area"){const m=document.createElement("div");m.style.cssText=`width: 16px; height: 16px; border-radius: 4px; background-color: ${r.fill||"transparent"}; border: 1px solid ${r.stroke||"black"}; flex-shrink: 0;`,l.appendChild(m)}else if(r.baseType==="point"&&r.icon){const m="http://www.w3.org/2000/svg",v=document.createElementNS(m,"svg");v.setAttribute("viewBox","0 0 24 24"),v.style.cssText=`width: 16px; height: 16px; fill: ${r.iconColor||"black"}; flex-shrink: 0;`;const f=document.createElementNS(m,"path");f.setAttribute("d",r.icon),v.appendChild(f),l.appendChild(v)}const c=document.createElement("span"),d=r.isDefault?"":" (Cust.)";if(c.textContent=r.label+d,l.appendChild(c),l.dataset.subType=i,i===te){l.style.backgroundColor="var(--color-accent)",l.style.color="white";const m=l.querySelector("svg");m&&(m.style.fill="white")}return l.addEventListener("click",()=>{te=i,Vt(),ii(i)}),l};Object.keys(t).length>0&&(Ge.appendChild(n(a("areasGroup"))),Object.keys(t).sort((r,l)=>t[r].label.localeCompare(t[l].label)).forEach(r=>Ge.appendChild(s(r,t[r])))),Object.keys(o).length>0&&(Ge.appendChild(n(a("pointsConnectorsGroup"))),Object.keys(o).sort((r,l)=>o[r].label.localeCompare(o[l].label)).forEach(r=>Ge.appendChild(s(r,o[r]))))}function ii(t){if(!e.styleOverrides)return;Ro.classList.add("hidden"),Ho.classList.remove("hidden");const o=e.styleOverrides[t];if(Ae.value=o.label,Zo.value=(o.fontSize||(o.baseType==="area"?14:12)).toString(),Uo.value=o.fontColor||(e.activeTheme==="dark"?"#e6e1ef":"#000000"),qn&&(qn.style.display="block"),Vn&&(Vn.style.display=o.baseType==="area"?"block":"none"),Gn&&(Gn.style.display=o.baseType==="point"?"block":"none"),o.baseType==="area"){Hn.style.display="block",Rn.style.display="none";const{hex:n,alpha:s}=il(o.fill||"rgba(0,0,0,0.5)");qo.value=n,Vo.value=s.toString(),Go.value=o.stroke||"#000000"}else Hn.style.display="none",Rn.style.display="block",Wo.value=o.iconColor||"#34495e",document.querySelectorAll("#type-icon-library div").forEach(n=>{const s=n.querySelector("svg");s&&s.dataset.iconPath===o.icon?n.classList.add("active"):n.classList.remove("active")});li(),Ln(o),Ae.disabled=!!o.isDefault,Ko.style.display=o.isDefault?"none":"block"}function si(){if(!te||!e.styleOverrides)return;const t=e.styleOverrides[te];if(t.isDefault&&(t.isDefault=!1,Ae.disabled=!1,Ko.style.display="block"),Ae.value=Ae.value.trim(),!!Ae.value){t.label=Ae.value,t.fontSize=parseInt(Zo.value)||(t.baseType==="area"?14:12),t.fontColor=Uo.value,t.baseType==="area"?(t.fill=Xs(qo.value,parseFloat(Vo.value)),t.stroke=Go.value):t.iconColor=Wo.value,li(),Ln(t);try{Vt()}catch{}G()}}async function ur(t){if(!e.styleOverrides)return;ri.classList.add("hidden");const o=a("prompt_newFloorName"),n=a(t==="area"?"newAreaType":"newPointType"),s=await ci(o,n);if(!s||s.trim()==="")return;const i=`custom_${s.trim().toLowerCase().replace(/[^a-z0-9]/gi,"_")}_${Date.now()}`,r=e.activeTheme==="dark";t==="area"?e.styleOverrides[i]={label:s.trim(),baseType:"area",fill:"rgba(128, 128, 128, 0.5)",stroke:"#808080",fontSize:14,fontColor:r?"#e6e1ef":"#000000",isDefault:!1}:e.styleOverrides[i]={label:s.trim(),baseType:"point",icon:Fn.info,iconColor:"#34495e",fontSize:12,fontColor:r?"#e6e1ef":"#000000",isDefault:!1},te=i,Vt(),ii(i)}async function nl(){!te||!e.styleOverrides||e.styleOverrides[te].isDefault||!await di(a("alert_deleteTypeConfirm",e.activeLanguage,e.styleOverrides[te].label))||!te||!e.styleOverrides||(delete e.styleOverrides[te],ai(),Vt(),G())}function ol(){if(Qt){Qt.innerHTML="";for(const t in Fn){const o=Fn[t],n=document.createElement("div");n.style.cssText="padding: 4px; border: 1px solid transparent; border-radius: 4px; cursor: pointer;";const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("viewBox","0 0 24 24"),s.style.width="32px",s.style.height="32px",s.style.fill="currentColor";const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d",o),s.appendChild(i),s.dataset.iconPath=o,n.appendChild(s),n.addEventListener("click",()=>{!te||!e.styleOverrides||(e.styleOverrides[te].icon=o,document.querySelectorAll("#type-icon-library > div").forEach(r=>r.classList.remove("active")),n.classList.add("active"),si())}),Qt.appendChild(n)}}}function li(){if(!te||!e.styleOverrides)return;const t=e.styleOverrides[te];t.baseType==="area"&&(ni.style.backgroundColor=t.fill||"transparent",oi.style.backgroundColor=t.stroke||"transparent")}function rl(){return e.activeTheme==="dark"?"#e6e1ef":"#1f2933"}function Ln(t){if(!en||!wt||!It)return;if(!t){en.classList.add("hidden"),wt.style.display="none",It.style.display="none";return}en.classList.remove("hidden"),Wn&&(Wn.textContent=a("typePreview"));const o=t.fontColor||rl(),n=t.baseType==="area"?a("previewAreaLabel"):a("previewPointLabel");if(t.baseType==="area"){if(wt.style.display="block",It.style.display="none",St){const s=t.fill||Le.default.fill,i=t.stroke||Le.default.stroke;St.style.background=s,St.style.borderColor=i,St.style.color=o}Kn&&(Kn.textContent=t.label||n)}else{wt.style.display="none",It.style.display="flex";const s=t.icon||un.default,i=t.iconColor||"#34495e";if(kt){kt.innerHTML=`<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="${s}"></path></svg>`;const r=kt.querySelector("svg"),l=kt.querySelector("path");r&&(r.style.width="36px",r.style.height="36px"),l&&(te==="beacon"?(l.setAttribute("fill","none"),l.setAttribute("stroke",i),l.setAttribute("stroke-width","2"),l.setAttribute("stroke-linecap","round"),l.setAttribute("stroke-linejoin","round")):l.setAttribute("fill",i))}tn&&(tn.textContent=t.label||n,tn.style.color=o)}}function ai(){Ro.classList.remove("hidden"),Ho.classList.add("hidden"),te=null,Ln(void 0)}function il(t){const o=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(!o)return{hex:"#000000",alpha:1};const n=r=>("0"+r.toString(16)).slice(-2),s=`#${n(parseInt(o[1]))}${n(parseInt(o[2]))}${n(parseInt(o[3]))}`,i=o[4]!==void 0?parseFloat(o[4]):1;return{hex:s,alpha:i}}let ci=async()=>null,di=async()=>!1;function sl(t){ci=t.showInputPrompt,di=t.showConfirm}function ll(t){if(t.length<1)return t;const o=t[0],n=t[t.length-1];return(o[0]!==n[0]||o[1]!==n[1])&&t.push([o[0],o[1]]),t}function al(t,o){const n=t.slice(0,-1),s=o.slice(0,-1),i=s.map((c,d)=>({a:{x:c[0],y:c[1]},b:{x:s[(d+1)%s.length][0],y:s[(d+1)%s.length][1]}})),r=[];for(let c=0;c<n.length;c++){const d={x:n[c][0],y:n[c][1]},m={x:n[(c+1)%n.length][0],y:n[(c+1)%n.length][1]},v=[];i.forEach(h=>{const S=Ao(d,m,h.a,h.b);if(S){const g=m.x-d.x,E=m.y-d.y,I=g*g+E*E,k=I===0?0:((S.x-d.x)*g+(S.y-d.y)*E)/I;k>=0&&k<=1&&v.push({t:k,p:S})}}),v.sort((h,S)=>h.t-S.t);const f=[{x:d.x,y:d.y},...v.map(h=>h.p),{x:m.x,y:m.y}];for(let h=0;h<f.length-1;h++){const S=f[h],g=f[h+1],E={x:(S.x+g.x)/2,y:(S.y+g.y)/2};he(E,{coordinates:[o]})||(r.length===0&&r.push([S.x,S.y]),r.push([g.x,g.y]))}}const l=[];for(let c=0;c<r.length;c++){const d=l[l.length-1],m=r[c];(!d||d[0]!==m[0]||d[1]!==m[1])&&l.push(m)}return l}function pi(t,o){const n=t.slice(0,-1),s=o.slice(0,-1),i=[];for(let h=0;h<n.length;h++){const S={x:n[h][0],y:n[h][1]},g={x:n[(h+1)%n.length][0],y:n[(h+1)%n.length][1]};for(let E=0;E<s.length;E++){const I={x:s[E][0],y:s[E][1]},k={x:s[(E+1)%s.length][0],y:s[(E+1)%s.length][1]},M=Ao(S,g,I,k);M&&i.push(M)}}const r={coordinates:[t]},l={coordinates:[o]};if(n.forEach(h=>{he({x:h[0],y:h[1]},l)&&i.push({x:h[0],y:h[1]})}),s.forEach(h=>{he({x:h[0],y:h[1]},r)&&i.push({x:h[0],y:h[1]})}),i.length===0)return null;const c=i.reduce((h,S)=>h+S.x,0)/i.length,d=i.reduce((h,S)=>h+S.y,0)/i.length,m={x:c,y:d};if(he(m,r)&&he(m,l))return[m.x,m.y];const f=i.find(h=>he(h,r)&&he(h,l));return f?[f.x,f.y]:null}function cl(t,o){const s=[t[0]];for(let r=0;r<t.length-1;r++){const l={x:t[r][0],y:t[r][1]},c={x:t[r+1][0],y:t[r+1][1]},d=c.x-l.x,m=c.y-l.y,v=Math.sqrt(d*d+m*m);if(v<1e-6)continue;const f=d/v,h=m/v,S=[];for(let I=0;I<o.length-1;I++){const k={x:o[I][0],y:o[I][1]},M={x:o[I+1][0],y:o[I+1][1]},C=M.x-k.x,_=M.y-k.y,A=d*_-m*C,j=(k.x-l.x)*m-(k.y-l.y)*d;if(Math.abs(A)<1e-6&&Math.abs(j)<1e-6){const u=(k.x-l.x)*f+(k.y-l.y)*h,b=(M.x-l.x)*f+(M.y-l.y)*h,B=Math.max(0,Math.min(u,b)),P=Math.min(v,Math.max(u,b));P-B>1e-6&&S.push({a:B,b:P})}}if(S.length===0){s.push([c.x,c.y]);continue}S.sort((I,k)=>I.a-k.a);const g=[];for(const I of S)g.length===0||I.a>g[g.length-1].b+1e-6?g.push({a:I.a,b:I.b}):g[g.length-1].b=Math.max(g[g.length-1].b,I.b);let E=0;for(const I of g){if(I.a-E>1e-6){const k=l.x+f*E,M=l.y+h*E,C=l.x+f*I.a,_=l.y+h*I.a;(s.length===0||s[s.length-1][0]!==k||s[s.length-1][1]!==M)&&s.push([k,M]),s.push([C,_])}E=Math.max(E,I.b)}if(v-E>1e-6){const I=l.x+f*E,k=l.y+h*E,M=c.x,C=c.y;(s.length===0||s[s.length-1][0]!==I||s[s.length-1][1]!==k)&&s.push([I,k]),s.push([M,C])}}const i=[];for(let r=0;r<s.length;r++){const l=i[i.length-1],c=s[r];(!l||l[0]!==c[0]||l[1]!==c[1])&&i.push(c)}return i}function ui(t,o){for(let s=0;s<t.length-1;s++){const i={x:t[s][0],y:t[s][1]},r={x:t[s+1][0],y:t[s+1][1]};for(let l=0;l<o.length-1;l++){const c={x:o[l][0],y:o[l][1]},d={x:o[l+1][0],y:o[l+1][1]},m=Ao(i,r,c,d);if(m)return[m.x,m.y];const v=r.x-i.x,f=r.y-i.y,h=d.x-c.x,S=d.y-c.y,g=v*S-f*h,E=(c.x-i.x)*f-(c.y-i.y)*v;if(Math.abs(g)<1e-6&&Math.abs(E)<1e-6){const I=Math.sqrt(v*v+f*f);if(I<1e-6)continue;const k=v/I,M=f/I,C=(c.x-i.x)*k+(c.y-i.y)*M,_=(d.x-i.x)*k+(d.y-i.y)*M,A=Math.max(0,Math.min(C,_)),j=Math.min(I,Math.max(C,_));if(j-A>1e-6){const u=(A+j)/2,b=i.x+k*u,B=i.y+M*u;return[b,B]}}}}return null}let jt=null,xe=null,le,mr,gr,Un,Zn,mi,gi,Jn,Yn,Ke,Xn,ze,yi,hi,ye,fi,bi,yr,hr,hn,fn,bn,Qn,vn,eo,to,fr,no,vi,xi,br,oo,ro,io,xn,so=null,lo=null,ao=null,co=null,vr,xr,Er,wr,Sr,ce,He,zt,Nt,Ir,kr,Pr,Pt=null,Dt=null,tt=null,po=null,uo=null,mo=null,Bt=null,_t=null,Ct=null,Lt=null,nn=null,on=null,rn=null,sn=null,ln=null,an=null,go=null,yo=null,ho=null,Ei=null,$t=null,Mt=null,wi=null,cn=null,dn=null,pn=null,fo=null,Si=null,Ii=null,bo=null,ki=null,Pi=null,Bi=null,vo=null,Ci=null,Li=null,Mi=null,Ti=null,xo=null,Eo=null,wo=null,So,Fi,Br,Cr,Lr,Io,Mr,ko,Tr,Po,Bo,Fr,jr,Dr,Co,ji,Lo,Di,_i,En,Ai,zi,Ni,Mo,Se,Jo,Yo,Ot,Ht,To,Fo,wn,Sn,In,_r,kn,Ar,zr,Pn,Nr,$r,Bn,Xo;function dl(t,o){let n;return function(){clearTimeout(n),n=window.setTimeout(t,o)}}const ht=dl(G,50);function Qo(){const t=`mode-${e.currentMode}`,o=document.getElementById(t);e.tempShape&&e.currentMode!=="select"&&e.currentMode!=="pan"&&e.currentMode!=="move-element"?(document.querySelectorAll(".tool-btn").forEach(n=>n.classList.remove("has-temp-shape")),o&&o.classList.add("has-temp-shape")):document.querySelectorAll(".tool-btn").forEach(n=>n.classList.remove("has-temp-shape"))}function H(){G(),yn(),Qo(),we(),vl();const t=document.getElementById("floor3DView"),o=document.getElementById("floor3DContent");t&&t.style.display==="flex"&&o&&jt&&jt.render3DFloorStack(e.project,"floor3DContent")}function pl(t){t.preventDefault();const o=.1,n=e.scale,s={x:t.offsetX,y:t.offsetY},i=gn(s),r=t.deltaY<0?n*(1+o):n/(1+o);e.scale=Math.max(.1,Math.min(r,10)),e.pan.x=s.x-i.x*e.scale,e.pan.y=s.y-i.y*e.scale,pt(),H()}function ul(t){if(e.currentMode==="scissors"){const s=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.properties.type==="area"&&!c.properties.isPlaceholder&&c.geometry.type==="Polygon"&&he(t,c.geometry)),i=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.geometry.type==="LineString"&&Qr(t,c.geometry));let r,l;if(e.selectedFeatureIds.length===1){const c=e.project.features.find(d=>d.properties.id===e.selectedFeatureIds[0]);c?.geometry.type==="Polygon"?(r=c,l=s.find(d=>d.properties.id!==r?.properties.id)):c?.geometry.type==="LineString"&&(r=c,l=i.find(d=>d.properties.id!==r?.properties.id))}else{r=s[0]||i[0];const c=r&&r.geometry.type==="Polygon"?s:i;l=c&&c.length>1?c[1]:void 0}if(r&&l){if(r.geometry.type==="Polygon"&&l.geometry.type==="Polygon"){const c=r.geometry.coordinates[0],d=l.geometry.coordinates[0],m=al(c,d);if(m.length>=4){const v=pi(c,d);r.geometry.coordinates[0]=ll(m),v&&e.activeFloorId&&Oe({type:"Point",coordinates:v},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:a("previewPointLabel")}),N(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H(),$();return}}else if(r.geometry.type==="LineString"&&l.geometry.type==="LineString"){const c=r.geometry.coordinates,d=l.geometry.coordinates,m=ui(c,d),v=cl(c,d);if(v.length>=2){r.geometry.coordinates=v,m&&e.activeFloorId&&Oe({type:"Point",coordinates:m},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:a("previewPointLabel")}),N(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H(),$();return}}}else{const c=e.hoveredFeatureId||de(t)?.properties.id||null;if(c){const d=e.project.features.find(m=>m.properties.id===c);if(d&&d.geometry.type==="Polygon"&&e.hoveredEdgeIndex!==-1){const m=d.geometry.coordinates[0],v=e.hoveredEdgeIndex+1;if(m.length>4&&v>0&&v<m.length){m.splice(v,1),m[m.length-1]=m[0],N(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H(),$();return}}}}}if(e.currentMode==="select"&&e.isAltPressed&&e.hoveredEdgeIndex!==-1&&e.hoveredFeatureId){const s=e.project.features.find(i=>i.properties.id===e.hoveredFeatureId);if(s&&s.geometry.type==="Polygon"){const i=[t.x,t.y];s.geometry.coordinates[0].splice(e.hoveredEdgeIndex+1,0,i),N(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H();return}}const o=fe(t),n=e.currentMode==="line"||e.currentMode==="arc"||e.currentMode==="point"?ot(o):o;switch(e.currentMode){case"area":xs(n);break;case"square":Es(n);break;case"polygon":Is(n);break;case"circle":ws(n);break;case"line":Ss(n);break;case"arc":Ps(n);break;case"door":Cs(t);break;case"point":ks(n);break;case"calibrate":{if(e.tempShape){if(e.tempShape.start){const s=de(n);let i=ot(fe(n));if(s&&s.properties.floor===e.activeFloorId){if(s.geometry.type==="Point"){const d=s.geometry.coordinates;i={x:d[0],y:d[1]}}else if(s.geometry.type==="LineString"){const d=s.geometry;let m=null,v=1/0;for(let f=0;f<d.coordinates.length-1;f++){const h={x:d.coordinates[f][0],y:d.coordinates[f][1]},S={x:d.coordinates[f+1][0],y:d.coordinates[f+1][1]},g=S.x-h.x,E=S.y-h.y,I=g*g+E*E;if(I===0)continue;const k=((n.x-h.x)*g+(n.y-h.y)*E)/I,M=k<0?0:k>1?1:k,C=h.x+M*g,_=h.y+M*E,A=Math.hypot(n.x-C,n.y-_);A<v&&(v=A,m={x:C,y:_})}m&&(i=m)}else if(s.geometry.type==="Polygon"){const d=s.geometry.coordinates[0];let m=null,v=1/0;for(let f=0;f<d.length-1;f++){const h={x:d[f][0],y:d[f][1]},S={x:d[f+1][0],y:d[f+1][1]},g=S.x-h.x,E=S.y-h.y,I=g*g+E*E;if(I===0)continue;const k=((n.x-h.x)*g+(n.y-h.y)*E)/I,M=k<0?0:k>1?1:k,C=h.x+M*g,_=h.y+M*E,A=Math.hypot(n.x-C,n.y-_);A<v&&(v=A,m={x:C,y:_})}m&&(i=m)}}const r=i.x-e.tempShape.start.x,l=i.y-e.tempShape.start.y,c=Math.sqrt(r*r+l*l);Ce(a("calibratePrompt")).then(d=>{const m=d?parseFloat(d):NaN;if(!Number.isNaN(m)&&m>0){const v=m/c;e.metersPerPixel=v;const f=Math.round(v*e.gridSize*100)/100;e.metersPerGridCell=f;const h=document.getElementById("gridMetersInput");h&&(h.value=String(f)),we(),H()}e.tempShape=null})}}else{const s=e.measureLabels.find(l=>n.x>=l.bx&&n.x<=l.bx+l.w&&n.y>=l.by&&n.y<=l.by+l.h);if(s){const l=s.pxLength;Ce(a("calibratePrompt")).then(c=>{const d=c?parseFloat(c):NaN;if(!Number.isNaN(d)&&d>0){const m=d/l;e.metersPerPixel=m;const v=Math.round(m*e.gridSize*100)/100;e.metersPerGridCell=v;const f=document.getElementById("gridMetersInput");f&&(f.value=String(v)),we(),H()}});break}const i=de(n);let r=ot(fe(n));if(i&&i.properties.floor===e.activeFloorId){if(i.geometry.type==="Point"){const l=i.geometry.coordinates;r={x:l[0],y:l[1]}}else if(i.geometry.type==="LineString"){const l=i.geometry;let c=null,d=1/0;for(let m=0;m<l.coordinates.length-1;m++){const v={x:l.coordinates[m][0],y:l.coordinates[m][1]},f={x:l.coordinates[m+1][0],y:l.coordinates[m+1][1]},h=f.x-v.x,S=f.y-v.y,g=h*h+S*S;if(g===0)continue;const E=((n.x-v.x)*h+(n.y-v.y)*S)/g,I=E<0?0:E>1?1:E,k=v.x+I*h,M=v.y+I*S,C=Math.hypot(n.x-k,n.y-M);C<d&&(d=C,c={x:k,y:M})}c&&(r=c)}else if(i.geometry.type==="Polygon"){const l=i.geometry.coordinates[0];let c=null,d=1/0;for(let m=0;m<l.length-1;m++){const v={x:l[m][0],y:l[m][1]},f={x:l[m+1][0],y:l[m+1][1]},h=f.x-v.x,S=f.y-v.y,g=h*h+S*S;if(g===0)continue;const E=((n.x-v.x)*h+(n.y-v.y)*S)/g,I=E<0?0:E>1?1:E,k=v.x+I*h,M=v.y+I*S,C=Math.hypot(n.x-k,n.y-M);C<d&&(d=C,c={x:k,y:M})}c&&(r=c)}}e.tempShape={start:r}}break}case"select":$i(t);break;case"merge":{const s=de(t);if(s){const i=s.properties.id,r=e.selectedFeatureIds.indexOf(i);r>-1?e.selectedFeatureIds.splice(r,1):e.selectedFeatureIds.push(i),ze.disabled=e.selectedFeatureIds.length===0,se(),mn(),H()}break}}Qo()}function ml(){const t=e.selectedFeatureIds.slice(),o=e.project.features.filter(f=>t.includes(f.properties.id)&&f.properties.floor===e.activeFloorId),n=o.filter(f=>f.geometry.type==="Polygon"),s=o.filter(f=>f.geometry.type==="LineString");if(n.length<1||n.length+s.length<2){alert(a("alert_selectAtLeastTwo"));return}let i=null;if(n.length>0&&s.length===0&&n.every(f=>Ls(f.geometry))){const f=Ms(n.map(h=>h.geometry));f&&f.length>=4&&(i=f)}if(!i){const f=[];for(const g of n){const E=g.geometry.coordinates[0];for(let I=0;I<E.length-1;I++)f.push({x:E[I][0],y:E[I][1]})}for(const g of s)if(g.properties.subType==="arc"&&g.properties.controlPoints){const{p0:E,p1:I,p2:k}=g.properties.controlPoints;Rt(E,k,I,24).forEach(([C,_])=>f.push({x:C,y:_}))}else g.geometry.coordinates.forEach(([I,k])=>f.push({x:I,y:k}));if(f.length<3){alert(a("alert_notEnoughPoints"));return}const h=Ts(f);if(h.length<3){alert(a("alert_notEnoughPoints"));return}const S=h.map(g=>[g.x,g.y]);S.push([h[0].x,h[0].y]),i=S}const l=me(),c=Object.keys(l).find(f=>l[f].baseType==="area")||"raum",d=l[c]?.label||"Raum",m=e.project.features.filter(f=>f.properties.type==="area").length+1,v={type:"Feature",geometry:{type:"Polygon",coordinates:[i]},properties:{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"area",subType:c,label:`${d} ${m}`}};e.project.features.push(v),N(),H(),$()}function $i(t){const o=de(t),n=o?o.properties.id:null;if(e.isCtrlPressed){if(n){const s=e.selectedFeatureIds.indexOf(n);s>-1?e.selectedFeatureIds.splice(s,1):e.selectedFeatureIds.push(n)}}else e.selectedFeatureIds=n?[n]:[];ze.disabled=e.selectedFeatureIds.length===0,se(),mn(),H()}function Or(t){const o=Xn.querySelector(`option[data-type="${t}"]`);Xn.querySelectorAll("optgroup").forEach(n=>{let s=!1;n.querySelectorAll("option").forEach(i=>{i.dataset.type===t?(i.style.display="",s=!0):i.style.display="none"}),n.style.display=s?"":"none"}),o&&(o.selected=!0)}function _e(){ei()}function gl(t){t.preventDefault(),ei();const o=gn({x:t.offsetX,y:t.offsetY}),n=de(o);if(!n||(e.selectedFeatureIds.includes(n.properties.id)||(e.selectedFeatureIds=[n.properties.id],H(),se()),e.selectedFeatureIds.length===0))return;_s(n,()=>se());const s=n.properties.type==="area"&&n.geometry.type==="Polygon",i=document.getElementById("ctx-menu-edit-contents"),r=document.getElementById("ctx-menu-edit-opening-hours"),l=document.getElementById("ctx-menu-edit-occupancy"),c=document.getElementById("ctx-menu-toggle-accessibility");i&&(i.style.display=s?"":"none"),r&&(r.style.display=s?"":"none"),l&&(l.style.display=s?"":"none"),c&&(c.style.display=s?"":"none"),As(t.clientX,t.clientY,e.selectedFeatureIds.length)}async function yl(){if(e.selectedFeatureIds.length!==1){alert(a("alert_renameSelectOne"));return}const t=e.project.features.find(n=>n.properties.id===e.selectedFeatureIds[0]);if(!t)return;const o=await Ce(a("prompt_renameElement"),t.properties.label);o&&o.trim()!==""&&(t.properties.label=o.trim(),N(),G(),se(),$())}function Hr(){const t=[],o=e.gridSize||20,n=e.project.features.filter(s=>e.selectedFeatureIds.includes(s.properties.id));n.length!==0&&(n.forEach(s=>{const i=`feat_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,r=`${s.properties.label} - Kopie`,l=JSON.parse(JSON.stringify(s.geometry)),c=m=>{m.forEach(v=>{Array.isArray(v[0])?c(v):(v[0]+=o,v[1]+=o)})};"coordinates"in l&&c(l.coordinates);const d={type:"Feature",properties:{...s.properties,id:i,label:r},geometry:l};t.push(d)}),e.project.features.push(...t),e.selectedFeatureIds=t.map(s=>s.properties.id),N(),H(),se(),$())}function hl(){zs()}function fl(){if(!e.activeFloorId)return;if(e.selectedFeatureIds.length!==2){alert(a("alert_selectTwo"));return}const[t,o]=e.selectedFeatureIds,n=e.project.features.find(r=>r.properties.id===t),s=e.project.features.find(r=>r.properties.id===o);if(!n||!s)return;if(n.properties.floor!==e.activeFloorId||s.properties.floor!==e.activeFloorId){alert(a("alert_sameFloor"));return}let i=null;if(n.geometry.type==="Polygon"&&s.geometry.type==="Polygon"){const r=n.geometry.coordinates[0],l=s.geometry.coordinates[0];i=pi(r,l)}else n.geometry.type==="LineString"&&s.geometry.type==="LineString"&&(i=ui(n.geometry.coordinates,s.geometry.coordinates));if(!i){alert(a("alert_noOverlap"));return}Oe({type:"Point",coordinates:i},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:a("previewPointLabel")}),N(),$(),G()}function bl(){Ns(()=>se())}function Rr(){e.selectedFeatureIds.length!==0&&(e.project.features.forEach(t=>{if(e.selectedFeatureIds.includes(t.properties.id)&&t.properties.type==="area"&&t.geometry.type==="Polygon"&&!t.properties.isEmpty){const o=!!t.properties.isAccessible;t.properties.isAccessible=!o}}),N(),$(),H())}function vl(){const t=e.project.features.some(n=>e.selectedFeatureIds.includes(n.properties.id)&&n.properties.type==="area"&&n.geometry.type==="Polygon"&&!n.properties.isEmpty),o=document.getElementById("ctx-menu-toggle-accessibility");o&&(o.style.display=t?"":"none"),$t&&($t.disabled=!t)}function jo(t){Dt&&(Dt.innerHTML="",t.forEach((o,n)=>{const s=document.createElement("div");s.style.display="flex",s.style.alignItems="center",s.style.gap="0.5rem",s.style.margin="0.25rem 0";const i=document.createElement("input");i.type="text",i.value=o,i.style.flex="1",i.addEventListener("input",()=>{t[n]=i.value});const r=document.createElement("button");r.textContent="×",r.className="mini-btn",r.addEventListener("click",()=>{t.splice(n,1),jo(t)}),s.appendChild(i),s.appendChild(r),Dt.appendChild(s)}))}function xl(){if(!Pt||!Dt)return;const t=e.project.features.filter(i=>e.selectedFeatureIds.includes(i.properties.id));if(t.length!==1){ce&&He&&(He.textContent=a("alert_renameSelectOne"),ce.classList.remove("hidden"),zt?.addEventListener("click",()=>ce.classList.add("hidden")),Nt?.addEventListener("click",()=>ce.classList.add("hidden")));return}const o=t[0],n=Array.isArray(o.properties.contents)?[...o.properties.contents]:[];jo(n),Pt.classList.remove("hidden");const s=()=>{if(!tt)return;const i=tt.value.trim();i!==""&&(n.push(i),tt.value="",jo(n))};po&&(po.onclick=s),tt&&(tt.onkeydown=i=>{i.key==="Enter"&&s()}),uo&&(uo.onclick=()=>{o.properties.contents=n.filter(i=>i.trim()!==""),N(),$(),Pt?.classList.add("hidden"),H()}),mo&&(mo.onclick=()=>{Pt?.classList.add("hidden")})}function er(t){switch(t){case 1:return a("weekdayMon");case 2:return a("weekdayTue");case 3:return a("weekdayWed");case 4:return a("weekdayThu");case 5:return a("weekdayFri");case 6:return a("weekdaySat");case 0:return a("weekdaySun");default:return""}}function Do(t){_t&&(_t.innerHTML="",t.forEach((o,n)=>{const s=document.createElement("div");s.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const i=document.createElement("span");i.textContent=o.name?String(o.name):"",i.style.fontWeight="600";const r=document.createElement("span");if(typeof o.weekday=="number"){const m=er(o.weekday);r.textContent=m}else o.date?r.textContent=o.date:o.startDate&&o.endDate?r.textContent=`${o.startDate}–${o.endDate}`:r.textContent="";const l=document.createElement("span");o.start&&o.end&&(l.textContent=`${o.start}–${o.end}`);const c=document.createElement("span");c.textContent=o.note||"",c.style.flex="1";const d=document.createElement("button");d.textContent="×",d.className="mini-btn",d.addEventListener("click",()=>{t.splice(n,1),Do(t)}),o.name&&s.appendChild(i),s.appendChild(r),s.appendChild(l),s.appendChild(c),s.appendChild(d),_t.appendChild(s)}))}function qr(){if(!Bt||!_t)return;const t=e.project.features.filter(r=>e.selectedFeatureIds.includes(r.properties.id));if(t.length!==1){ce&&He&&(He.textContent=a("alert_renameSelectOne"),ce.classList.remove("hidden"),zt?.addEventListener("click",()=>ce.classList.add("hidden")),Nt?.addEventListener("click",()=>ce.classList.add("hidden")));return}const o=t[0],n=Array.isArray(o.properties.occupancy)?JSON.parse(JSON.stringify(o.properties.occupancy)):[];Do(n),Bt.classList.remove("hidden");const s=()=>{const r=Ct?.value||"date",l=r==="weekday",c=r==="date",d=r==="range";Lt&&(Lt.style.display=l?"":"none");const m=document.getElementById("occupancy-weekday-label");m&&(m.style.display=l?"":"none"),nn&&(nn.style.display=c?"":"none");const v=document.getElementById("occupancy-date-label");v&&(v.style.display=c?"":"none"),sn&&(sn.style.display=d?"":"none"),ln&&(ln.style.display=d?"":"none");const f=document.getElementById("occupancy-range-start-label");f&&(f.style.display=d?"":"none");const h=document.getElementById("occupancy-range-end-label");h&&(h.style.display=d?"":"none"),on&&(on.style.display=l||c||d?"":"none"),rn&&(rn.style.display=l||c||d?"":"none");const S=document.getElementById("occupancy-start-label");S&&(S.style.display=l||c||d?"":"none");const g=document.getElementById("occupancy-end-label");g&&(g.style.display=l||c||d?"":"none")};s(),Ct&&(Ct.onchange=s);const i=()=>{const r=Ct?.value||"date",l=on?.value||"",c=rn?.value||"",d=an?.value||"",m=o.properties.label||"";if(r==="weekday"){const v=Lt?.value?parseInt(Lt.value,10):NaN;if(isNaN(v)||!l||!c)return;n.push({name:m,weekday:v,start:l,end:c,note:d})}else if(r==="date"){const v=nn?.value||"";if(!v||!l||!c)return;n.push({name:m,date:v,start:l,end:c,note:d})}else if(r==="range"){const v=sn?.value||"",f=ln?.value||"";if(!v||!f)return;n.push({name:m,startDate:v,endDate:f,start:l||void 0,end:c||void 0,note:d})}an&&(an.value=""),Do(n)};go&&(go.onclick=i),yo&&(yo.onclick=()=>{o.properties.occupancy=n,N(),$(),Bt?.classList.add("hidden"),H()}),ho&&(ho.onclick=()=>{Bt?.classList.add("hidden")})}function Ue(t){if(cn&&(cn.innerHTML="",t.weekly&&Object.keys(t.weekly).forEach(o=>{const n=t.weekly[o];n.forEach((s,i)=>{const r=document.createElement("div");r.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const l=document.createElement("span");l.textContent=`${er(Number(o))}`;const c=document.createElement("span");c.textContent=`${s.start}–${s.end}`;const d=document.createElement("button");d.textContent="×",d.className="mini-btn",d.addEventListener("click",()=>{n.splice(i,1),n.length===0&&delete t.weekly[o],Ue(t)}),r.appendChild(l),r.appendChild(c),r.appendChild(d),cn.appendChild(r)})})),dn){dn.innerHTML="";const o=Array.isArray(t.exceptions)?t.exceptions:[];o.forEach((n,s)=>{const i=document.createElement("div");i.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const r=document.createElement("span");r.textContent=n.date;const l=document.createElement("span");n.start&&n.end&&(l.textContent=`${n.start}–${n.end}`);const c=document.createElement("button");c.textContent="×",c.className="mini-btn",c.addEventListener("click",()=>{o.splice(s,1),t.exceptions=o,Ue(t)}),i.appendChild(r),i.appendChild(l),i.appendChild(c),dn.appendChild(i)})}if(pn){pn.innerHTML="";const o=Array.isArray(t.ranges)?t.ranges:[];o.forEach((n,s)=>{const i=document.createElement("div");i.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const r=document.createElement("span");r.textContent=`${n.startDate}–${n.endDate}`;const l=document.createElement("span");n.start&&n.end&&(l.textContent=`${n.start}–${n.end}`);const c=document.createElement("button");c.textContent="×",c.className="mini-btn",c.addEventListener("click",()=>{o.splice(s,1),t.ranges=o,Ue(t)}),i.appendChild(r),i.appendChild(l),i.appendChild(c),pn.appendChild(i)})}}function El(t){const o=[];return t.weekly&&Object.keys(t.weekly).map(s=>Number(s)).sort((s,i)=>s-i).forEach(s=>{const i=er(s),r=t.weekly[s].map(l=>`${l.start}–${l.end}`).join(", ");o.push(`${i} ${r}`)}),Array.isArray(t.exceptions)&&t.exceptions.length>0&&o.push(`${a("openingHoursExceptions")}: ${t.exceptions.length}`),Array.isArray(t.ranges)&&t.ranges.length>0&&o.push(`${a("openingHoursRanges")}: ${t.ranges.length}`),o.join(" · ")}function Vr(){if(!Mt)return;const t=e.project.features.filter(i=>e.selectedFeatureIds.includes(i.properties.id));if(t.length!==1){ce&&He&&(He.textContent=a("alert_renameSelectOne"),ce.classList.remove("hidden"),zt?.addEventListener("click",()=>ce.classList.add("hidden")),Nt?.addEventListener("click",()=>ce.classList.add("hidden")));return}const o=t[0];let n={};const s=o.properties.opening_hours;s&&typeof s=="object"?n=JSON.parse(JSON.stringify(s)):n={weekly:{},exceptions:[],ranges:[]},Ue(n),Mt.classList.remove("hidden"),bo&&(bo.onclick=()=>{const i=fo?.value?parseInt(fo.value,10):NaN,r=Si?.value||"",l=Ii?.value||"";isNaN(i)||!r||!l||(n.weekly[i]||(n.weekly[i]=[]),n.weekly[i].push({start:r,end:l}),Ue(n))}),vo&&(vo.onclick=()=>{const i=ki?.value||"",r=Pi?.value||"",l=Bi?.value||"";i&&(n.exceptions=Array.isArray(n.exceptions)?n.exceptions:[],n.exceptions.push({date:i,start:r||void 0,end:l||void 0}),Ue(n))}),xo&&(xo.onclick=()=>{const i=Ci?.value||"",r=Li?.value||"",l=Mi?.value||"",c=Ti?.value||"";!i||!r||(n.ranges=Array.isArray(n.ranges)?n.ranges:[],n.ranges.push({startDate:i,endDate:r,start:l||void 0,end:c||void 0}),Ue(n))}),Eo&&(Eo.onclick=()=>{o.properties.opening_hours=n;const i=El(n);vn.value=i,N(),$(),Mt?.classList.add("hidden"),H()}),wo&&(wo.onclick=()=>{Mt?.classList.add("hidden")})}function ne(){const t=document.getElementById("overview-stats-panel");if(!t)return;const o=e.project.properties.projectName||a("unnamedProject"),n=Me(),s=n.length,i=e.project.features.filter(d=>d.properties.type==="area"&&!d.properties.isPlaceholder).length,r=e.project.features.filter(d=>d.properties.type==="point").length;let l=`<div><span>${a("stat_project")}:</span><span class="value">${o}</span></div><div><span>${a("stat_floors")}:</span><span class="value">${s}</span></div><div><span>${a("stat_areas")}:</span><span class="value">${i}</span></div><div><span>${a("stat_points")}:</span><span class="value">${r}</span></div>`;t.innerHTML=l;const c=document.getElementById("overview-floor-list");c&&(c.innerHTML="",n.forEach(d=>{const m=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder).length,v=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point").length,f=document.createElement("div");f.className="floor-block";const h=document.createElement("div");h.className="floor-card";const S=document.createElement("img");S.className="floor-thumb",e.cachedFloorPlanImages[d]&&(S.src=e.cachedFloorPlanImages[d].src,h.classList.add("has-thumb"));const g=document.createElement("div");g.className="floor-meta";const E=document.createElement("div");E.className="name",E.textContent=d;const I=document.createElement("div");I.className="counts",I.textContent=`${a("stat_areas")}: ${m} · ${a("stat_points")}: ${v}`,g.appendChild(E),g.appendChild(I),h.appendChild(S),h.appendChild(g),h.addEventListener("click",()=>{e.activeFloorId=d,ae(),G()}),f.appendChild(h);const k=document.createElement("button");k.className="beacon-toggle";const M=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point"&&u.properties.subType==="beacon");k.textContent=`${a("overviewBeacons")} (${M.length})`;const C=document.createElement("div");C.className="beacon-section",k.addEventListener("click",()=>{C.style.display===""||C.style.display==="none"?(C.innerHTML="",M.forEach(b=>{const B=document.createElement("div");B.className="beacon-card";const P=document.createElement("div");P.className="beacon-meta";const L=document.createElement("div");L.className="name";const F=b.properties.beacon_serial||"",T=b.properties.label||a("point_beacon_label");L.textContent=F?`${T} · ${F}`:T;const D=document.createElement("div");D.className="counts";const O=b.properties.beacon_range,V=b.properties.beacon_note_de||b.properties.beacon_note_en||"",R=[];R.push(`${a("beacon_serial_label")}: ${F||"-"}`),typeof O=="number"&&R.push(`${a("beacon_range_label")}: ${O}`),V&&R.push(`${a("beacon_note_de_label")}: ${V}`),D.textContent=R.join(" · "),P.appendChild(L),P.appendChild(D),B.appendChild(P),B.addEventListener("click",()=>{e.activeFloorId=d,ae(),G()}),C.appendChild(B)}),C.style.display="block"):(C.style.display="none",C.innerHTML="")}),f.appendChild(k),f.appendChild(C);const _=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder).sort((u,b)=>{const B=(u.properties.label||"").toLowerCase(),P=(b.properties.label||"").toLowerCase();return B.localeCompare(P)}),A=document.createElement("button");A.className="beacon-toggle",A.textContent=`${a("areas")} (${_.length})`;const j=document.createElement("div");j.className="area-section",A.addEventListener("click",()=>{if(j.style.display===""||j.style.display==="none"){const b=me();j.innerHTML="",_.forEach(P=>{const L=document.createElement("div");L.className="area-card";const F=document.createElement("div");F.className="area-meta";const T=document.createElement("div");T.className="name";const D=P.properties.label||"";T.textContent=D;const O=document.createElement("div");O.className="counts";const V=b[P.properties.subType]?.label||P.properties.subType,R=Array.isArray(P.properties.contents)?P.properties.contents.filter(re=>re.trim()!==""):[],X=R.length>0?R.join(", "):"-";O.textContent=`${a("elementType")}: ${V} · ${a("roomContentsTitle")}: ${X}`,F.appendChild(T),F.appendChild(O),L.appendChild(F),L.addEventListener("click",()=>{e.activeFloorId=d,ae(),G()}),j.appendChild(L)});const B=_.filter(P=>!!P.properties.isAccessible);if(B.length>0){const P=document.createElement("div");P.className="area-meta";const L=document.createElement("div");L.className="name",L.textContent=a("accessibleRoomsHeader"),P.appendChild(L),j.appendChild(P),B.forEach(F=>{const T=document.createElement("div");T.className="area-card";const D=document.createElement("div");D.className="area-meta";const O=document.createElement("div");O.className="name",O.textContent=F.properties.label||"";const V=document.createElement("div");V.className="counts",V.textContent="Barrierefrei",D.appendChild(O),D.appendChild(V),T.appendChild(D),T.addEventListener("click",()=>{e.activeFloorId=d,ae(),G()}),j.appendChild(T)})}j.style.display="block"}else j.style.display="none",j.innerHTML=""}),f.appendChild(A),f.appendChild(j),c.appendChild(f)}))}function wl(){le=document.getElementById("canvas"),mr=document.getElementById("scrollbar-x"),gr=document.getElementById("scrollbar-y"),Un=document.getElementById("thumb-x"),Zn=document.getElementById("thumb-y"),mi=document.getElementById("crosshair-h"),gi=document.getElementById("crosshair-v"),Jn=document.getElementById("coordinate-display"),Yn=document.getElementById("floor-select"),Ke=document.getElementById("projectName"),Xn=document.getElementById("element-type-select"),ze=document.getElementById("deleteBtn"),yi=document.getElementById("element-options"),hi=document.getElementById("corner-box"),ye=document.getElementById("info-modal"),fi=document.getElementById("info-modal-close-btn"),bi=ye.querySelector(".modal-overlay"),yr=document.getElementById("properties-content"),hr=document.getElementById("properties-placeholder"),hn=document.getElementById("properties-label-input"),fn=document.getElementById("properties-type-select"),bn=document.getElementById("properties-is-empty-checkbox"),Qn=document.getElementById("properties-description-input"),vn=document.getElementById("properties-opening-hours-input"),eo=document.getElementById("properties-room-number-input"),to=document.getElementById("properties-designation-select"),$s({propertiesContent:yr,propertiesPlaceholder:hr,propertiesLabelInput:hn,propertiesTypeSelect:fn,propertiesIsEmptyCheckbox:bn}),fr=document.getElementById("context-menu"),no=document.getElementById("ctx-menu-copy"),vi=document.getElementById("ctx-menu-delete"),xi=document.getElementById("ctx-menu-rename"),no=document.getElementById("ctx-menu-copy"),br=document.getElementById("ctx-menu-type-submenu"),oo=document.getElementById("ctx-floor-submenu"),ro=document.getElementById("ctx-floor-add"),io=document.getElementById("ctx-floor-rename"),xn=document.getElementById("ctx-menu-add-overlap-point"),so=document.getElementById("ctx-menu-toggle-accessibility"),lo=document.getElementById("ctx-menu-edit-contents"),vr=document.getElementById("input-prompt-modal"),xr=document.getElementById("input-prompt-label"),Er=document.getElementById("input-prompt-input"),wr=document.getElementById("input-prompt-ok"),Sr=document.getElementById("input-prompt-cancel"),ce=document.getElementById("confirm-modal"),He=document.getElementById("confirm-message"),zt=document.getElementById("confirm-ok"),Nt=document.getElementById("confirm-cancel"),Ir=document.getElementById("loading-modal"),kr=document.getElementById("loading-message"),Pr=document.getElementById("loading-ok"),Pt=document.getElementById("room-contents-modal"),Dt=document.getElementById("room-contents-list"),tt=document.getElementById("room-contents-new-item"),po=document.getElementById("room-contents-add-btn"),uo=document.getElementById("room-contents-save"),mo=document.getElementById("room-contents-cancel"),$t=document.getElementById("toggleAccessibleBtn"),ao=document.getElementById("ctx-menu-edit-occupancy"),co=document.getElementById("ctx-menu-edit-opening-hours"),Bt=document.getElementById("occupancy-modal"),_t=document.getElementById("occupancy-list"),Ct=document.getElementById("occupancy-type"),Lt=document.getElementById("occupancy-weekday"),nn=document.getElementById("occupancy-date"),on=document.getElementById("occupancy-start"),rn=document.getElementById("occupancy-end"),sn=document.getElementById("occupancy-range-start"),ln=document.getElementById("occupancy-range-end"),an=document.getElementById("occupancy-note"),go=document.getElementById("occupancy-add-btn"),yo=document.getElementById("occupancy-save"),ho=document.getElementById("occupancy-cancel"),Ei=document.getElementById("open-occupancy-modal-btn"),Mt=document.getElementById("opening-hours-modal"),wi=document.getElementById("open-opening-hours-modal-btn"),cn=document.getElementById("opening-hours-weekly-list"),dn=document.getElementById("opening-hours-exceptions-list"),pn=document.getElementById("opening-hours-ranges-list"),fo=document.getElementById("opening-hours-weekday"),Si=document.getElementById("opening-hours-start"),Ii=document.getElementById("opening-hours-end"),bo=document.getElementById("opening-hours-add-rule"),ki=document.getElementById("opening-hours-ex-date"),Pi=document.getElementById("opening-hours-ex-start"),Bi=document.getElementById("opening-hours-ex-end"),vo=document.getElementById("opening-hours-add-exception"),Ci=document.getElementById("opening-hours-range-start"),Li=document.getElementById("opening-hours-range-end"),Mi=document.getElementById("opening-hours-range-time-start"),Ti=document.getElementById("opening-hours-range-time-end"),xo=document.getElementById("opening-hours-add-range"),Eo=document.getElementById("opening-hours-save"),wo=document.getElementById("opening-hours-cancel"),So=document.getElementById("type-manager-modal"),Fi=document.getElementById("type-manager-close-btn"),Br=document.getElementById("type-manager-list"),Cr=document.getElementById("type-manager-details-content"),Lr=document.getElementById("type-manager-placeholder"),Io=document.getElementById("type-name-input"),Mr=document.getElementById("type-editor-area"),ko=document.getElementById("type-fill-color-input"),Tr=document.getElementById("type-fill-color-swatch"),Po=document.getElementById("type-fill-opacity-slider"),Bo=document.getElementById("type-stroke-color-input"),Fr=document.getElementById("type-stroke-color-swatch"),jr=document.getElementById("type-editor-point"),Dr=document.getElementById("type-icon-library"),Co=document.getElementById("type-icon-color-input"),ji=document.getElementById("type-manager-new-btn"),Lo=document.getElementById("type-manager-delete-btn"),Di=document.getElementById("type-manager-save-btn"),_i=document.getElementById("manage-types-btn"),En=document.getElementById("new-type-choice-modal"),Ai=document.getElementById("choose-type-area"),zi=document.getElementById("choose-type-point"),Ni=document.getElementById("new-type-choice-cancel"),Mo=document.getElementById("lang-trigger"),Se=document.getElementById("lang-menu"),Jo=document.getElementById("active-lang-display"),Yo=document.getElementById("theme-trigger"),Ot=document.getElementById("theme-icon"),Ht=document.getElementById("lang-icon"),To=document.getElementById("type-font-color-input"),Fo=document.getElementById("type-font-size-input"),wn=document.getElementById("type-text-style-header"),Sn=document.getElementById("type-area-style-header"),In=document.getElementById("type-point-style-header"),_r=document.getElementById("type-preview"),kn=document.getElementById("type-preview-header"),Ar=document.getElementById("type-preview-area"),zr=document.getElementById("type-preview-area-rect"),Pn=document.getElementById("type-preview-area-label"),Nr=document.getElementById("type-preview-point"),$r=document.getElementById("type-preview-point-icon"),Bn=document.getElementById("type-preview-point-label"),Os({canvas:le,scrollbarX:mr,scrollbarY:gr,thumbX:Un,thumbY:Zn}),Gs({canvas:le}),Qs({typeManagerModal:So,typeManagerList:Br,typeManagerDetailsContent:Cr,typeManagerPlaceholder:Lr,typeNameInput:Io,typeEditorArea:Mr,typeFillColorInput:ko,typeFillColorSwatch:Tr,typeFillOpacitySlider:Po,typeStrokeColorInput:Bo,typeStrokeColorSwatch:Fr,typeEditorPoint:jr,typeIconLibrary:Dr,typeIconColorInput:Co,typeManagerDeleteBtn:Lo,newTypeChoiceModal:En,typeFontColorInput:To,typeFontSizeInput:Fo,typeTextStyleHeader:wn,typeAreaStyleHeader:Sn,typePointStyleHeader:In,typePreviewContainer:_r,typePreviewHeader:kn,typePreviewArea:Ar,typePreviewAreaRect:zr,typePreviewAreaLabel:Pn,typePreviewPoint:Nr,typePreviewPointIcon:$r,typePreviewPointLabel:Bn}),sl({showInputPrompt:Ce,showConfirm:Ee}),Xo=document.getElementById("renameFloorBtn"),ps({inputPromptModal:vr,inputPromptLabel:xr,inputPromptInput:Er,inputPromptOk:wr,inputPromptCancel:Sr,confirmModal:ce,confirmMessage:He,confirmOk:zt,confirmCancel:Nt,loadingModal:Ir,loadingMessage:kr,loadingOk:Pr}),Ds({contextMenu:fr,ctxMenuTypeSubmenu:br,ctxMenuAddOverlapPoint:xn}),Il()}function Oi(){document.getElementById("backstage-close-btn").title=a("backToApp");const t=document.getElementById("backstage-panel");if(t&&t.classList.contains("visible")){const y=document.getElementById("backstage-title");if(y){const w=document.querySelector(".main-menu button.active")?.id.replace("-menu-trigger","");w==="file"?y.textContent=a("filePanelTitle"):w==="output"?y.textContent=a("outputPanelTitle"):w==="overview"&&(y.textContent=a("overviewPanelTitle"))}}{const w=document.getElementById("newProjectBtn")?.querySelector("span");w&&(w.textContent=a("newProject"))}{const w=document.getElementById("loadProjectBtn")?.querySelector("span");w&&(w.textContent=a("loadProject"))}{const w=document.getElementById("saveProjectBtn")?.querySelector("span");w&&(w.textContent=a("saveProject"))}{const w=document.getElementById("loadProjectFromServerBtn")?.querySelector("span");w&&(w.textContent=a("loadFromServer"))}{const w=document.getElementById("saveProjectToServerBtn")?.querySelector("span");w&&(w.textContent=a("saveToServer"))}{const y=document.getElementById("serverProjectLabel");y&&(y.textContent=a("serverProject"));const w=document.getElementById("serverVersionLabel");w&&(w.textContent=a("serverVersion"));const W=document.getElementById("serverProjectAddBtn"),z=W?.querySelector("span");z&&(z.textContent=a("add")),W&&W.setAttribute("title",a("add"));const q=document.getElementById("serverProjectDeleteBtn"),Z=q?.querySelector("span");Z&&(Z.textContent=a("deleteAction")),q&&q.setAttribute("title",a("deleteAction"));const K=document.getElementById("serverRefreshBtn");K&&(K.title=a("refresh"));const U=document.getElementById("serverVersionRefreshBtn");U&&(U.title=a("refresh"));const ke=document.getElementById("serverLoadBtn")?.querySelector("span");ke&&(ke.textContent=a("load"));const je=document.getElementById("serverLoadLatestBtn")?.querySelector("span");je&&(je.textContent=a("latestVersion"));const De=document.getElementById("serverSavePanelBtn")?.querySelector("span");De&&(De.textContent=a("save"));const Be=document.getElementById("serverVersionAddBtn"),ut=Be?.querySelector("span");ut&&(ut.textContent=a("add")),Be&&Be.setAttribute("title",a("add"));const Qe=document.getElementById("serverVersionDeleteBtn"),mt=Qe?.querySelector("span");mt&&(mt.textContent=a("deleteAction")),Qe&&Qe.setAttribute("title",a("deleteAction"))}{const w=document.getElementById("Einleitung")?.querySelector("span");w&&(w.textContent=a("introduction"))}{const w=document.getElementById("exportGeoJsonBtn")?.querySelector("span");w&&(w.textContent=a("exportGeoJson"))}{const y=document.querySelector('.sponsor-display p[data-i18n="sponsoredByMinew"]');y&&(y.textContent=a("sponsoredByMinew"));const w=document.querySelector('.sponsor-display p[data-i18n="supportedByPalfinger"]');w&&(w.textContent=a("supportedByPalfinger"));const W=document.querySelector('.sponsor-footer p[data-i18n="sponsoredByMinew"]');W&&(W.textContent=a("sponsoredByMinew"))}{const y=document.getElementById("imprintBtn"),w=y?.querySelector('span[data-i18n="imprint"]');w&&(w.textContent=a("imprint")),y&&y.setAttribute("title",a("imprint"))}{const y=document.getElementById("contactBtn"),w=y?.querySelector('span[data-i18n="contact"]');w&&(w.textContent=a("contact")),y&&y.setAttribute("title",a("contact"))}{const y=document.getElementById("privacyBtn"),w=y?.querySelector('span[data-i18n="privacy"]');w&&(w.textContent=a("privacy")),y&&y.setAttribute("title",a("privacy"))}{const y=document.getElementById("sponsorsBtn"),w=y?.querySelector('span[data-i18n="sponsorsButtonTitle"]');w&&(w.textContent=a("sponsorsButtonTitle")),y&&y.setAttribute("title",a("sponsorsButtonTitle"))}const o=document.getElementById("showGeoJsonBtn"),n=document.getElementById("live-geojson-output"),s=n?n.style.display==="block":!1;{const y=o?.querySelector("span");y&&(y.textContent=a(s?"hideCode":"showLiveCode"))}const i=document.querySelector(".toolbar-section:nth-child(1) h2");i?.childNodes[0]&&(i.childNodes[0].textContent=a("project")+" ");const r=document.getElementById("projectName");{const y=r?.parentElement?.querySelector("label");y&&(y.textContent=a("projectName"))}r&&(r.placeholder=a("enterProjectName"));const l=document.querySelector(".toolbar-section:nth-child(2) h2");l?.childNodes[0]&&(l.childNodes[0].textContent=a("edit")+" ");{const w=document.getElementById("undoBtn")?.querySelector("span");w&&(w.textContent=a("undo"))}{const w=document.getElementById("redoBtn")?.querySelector("span");w&&(w.textContent=a("redo"))}const c=document.querySelector(".toolbar-section:nth-child(3) h2");c?.childNodes[0]&&(c.childNodes[0].textContent=a("floors")+" ");{const w=document.getElementById("floor-select")?.parentElement?.querySelector("label");w&&(w.textContent=a("currentFloor"))}{const w=document.getElementById("addFloorBtn")?.querySelector("span");w&&(w.textContent=a("newFloor"))}{const y=Xo?.querySelector("span");y&&(y.textContent=a("rename"))}const d=document.querySelector("#floor-select + .button-group button:nth-child(3)");d&&(d.querySelector("span").textContent=a("floorplan"));const m=document.querySelector(".toolbar-section:nth-child(4) h2");m?.childNodes[0]&&(m.childNodes[0].textContent=a("tools")+" ");{const w=document.getElementById("mode-pan")?.querySelector("span");w&&(w.textContent=a("pan"))}{const w=document.getElementById("mode-select")?.querySelector("span");w&&(w.textContent=a("select"))}{const w=document.getElementById("mode-move-element")?.querySelector("span");w&&(w.textContent=a("moveElement"))}{const w=document.getElementById("mode-calibrate")?.querySelector("span");w&&(w.textContent=a("calibrateScale"))}{const y=document.getElementById("mode-merge");if(y){const w=y.querySelector("span");w&&(w.textContent=a("merge"))}}{const w=document.getElementById("deleteBtn")?.querySelector("span");w&&(w.textContent=a("delete"))}{const y=document.querySelectorAll(".tool-buttons .toolbar-separator");y[0]&&(y[0].textContent=a("areas")),y[1]&&(y[1].textContent=a("linesAndPoints"))}{const w=document.getElementById("mode-area")?.querySelector("span");w&&(w.textContent=a("rectangle"))}{const w=document.getElementById("mode-square")?.querySelector("span");w&&(w.textContent=a("square"))}{const w=document.getElementById("mode-polygon")?.querySelector("span");w&&(w.textContent=a("polygon"))}if(oo){const y=oo.parentElement;y&&y.childNodes[0]&&(y.childNodes[0].textContent=a("floors"));const w=document.getElementById("ctx-floor-add");w&&(w.textContent=a("newFloor"));const W=document.getElementById("ctx-floor-rename");W&&(W.textContent=a("renameFloor"))}{const y=document.getElementById("ctx-menu-toggle-accessibility");y&&(y.textContent=a("toggleAccessibility"))}{const y=document.getElementById("ctx-menu-edit-contents");y&&(y.textContent=a("editRoomContents"))}{const y=document.getElementById("ctx-menu-edit-occupancy");y&&(y.textContent=a("occupancyEdit"));const w=document.getElementById("ctx-menu-edit-opening-hours");w&&(w.textContent=a("openingHoursEdit"))}{const w=document.getElementById("mode-circle")?.querySelector("span");w&&(w.textContent=a("circle"))}{const w=document.getElementById("mode-line")?.querySelector("span");w&&(w.textContent=a("line"))}{const w=document.getElementById("mode-line")?.querySelector("span");w&&(w.textContent=a("line"))}{const w=document.getElementById("mode-door")?.querySelector("span");w&&(w.textContent=a("door"))}{const w=document.getElementById("mode-arc")?.querySelector("span");w&&(w.textContent=a("arc"))}{const w=document.getElementById("mode-point")?.querySelector("span");w&&(w.textContent=a("point"))}{const w=document.getElementById("mode-area")?.querySelector("span");w&&(w.textContent=a("rectangle"))}{const w=document.getElementById("mode-square")?.querySelector("span");w&&(w.textContent=a("square"))}{const w=document.getElementById("element-type-select")?.parentElement?.querySelector("label");w&&(w.textContent=a("elementType"))}{const w=document.getElementById("manage-types-btn")?.querySelector("span");w&&(w.textContent=a("manageTypes"))}{const w=document.getElementById("copyBtn")?.querySelector("span");w&&(w.textContent=a("copy"))}{const w=document.getElementById("toggleAccessibleBtn")?.querySelector("span");w&&(w.textContent=a("accessible"))}{const y=document.getElementById("simulateSignalBtn"),w=y?.querySelector("span");w&&(w.textContent=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal")),y&&(y.classList.toggle("active",e.showBeaconHeatmap),y.setAttribute("aria-pressed",e.showBeaconHeatmap?"true":"false"),y.title=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal"))}const v=document.querySelector("#properties-panel h2");v?.childNodes[0]&&(v.childNodes[0].textContent=a("properties")+" ");{const y=document.getElementById("properties-label-input")?.parentElement?.querySelector("label");y&&(y.textContent=a("label")),y&&(y.title=a("properties_label_desc"))}{const y=document.getElementById("beacon-fields-title");y&&(y.textContent=a("beacon_parameters"))}{const y=document.querySelector('label[for="beacon-uuid-input"]');y&&(y.textContent=a("beacon_uuid_label"))}{const y=document.querySelector('label[for="beacon-serial-input"]');y&&(y.textContent=a("beacon_serial_label")),y&&(y.title=a("beacon_serial_desc"))}{const y=document.querySelector('label[for="beacon-major-input"]');y&&(y.textContent=a("beacon_major_label"))}{const y=document.querySelector('label[for="beacon-minor-input"]');y&&(y.textContent=a("beacon_minor_label"))}{const y=document.querySelector('label[for="beacon-installation-input"]');y&&(y.textContent=a("beacon_installation_label")),y&&(y.title=a("beacon_installation_desc"))}{const y=document.querySelector('label[for="beacon-range-input"]');y&&(y.textContent=a("beacon_range_label")),y&&(y.title=a("beacon_range_desc"))}{const y=document.querySelector('label[for="beacon-number-input"]');y&&(y.textContent=a("beacon_number_label")),y&&(y.title=a("beacon_number_desc"))}{const y=document.querySelector('label[for="beacon-note-de-input"]');y&&(y.textContent=a("beacon_note_de_label")),y&&(y.title=a("beacon_note_de_desc"))}{const y=document.querySelector('label[for="beacon-note-en-input"]');y&&(y.textContent=a("beacon_note_en_label")),y&&(y.title=a("beacon_note_de_desc"))}const f=document.getElementById("properties-label-input");f&&(f.placeholder=a("enterElementLabel"));{const y=document.getElementById("beacon-serial-input");y&&(y.placeholder=a("beacon_serial_label"))}{const y=document.getElementById("beacon-number-input");y&&(y.placeholder=a("beacon_number_label"))}{const y=document.getElementById("beacon-installation-input");y&&(y.placeholder=a("beacon_installation_label"),y.title=a("beacon_installation_label"))}{const y=document.getElementById("beacon-range-input");y&&(y.placeholder=a("beacon_range_label"))}{const y=document.getElementById("beacon-note-de-input");y&&(y.placeholder=a("beacon_note_de_label"))}{const w=document.getElementById("properties-type-select")?.parentElement?.querySelector("label");w&&(w.textContent=a("elementType"))}{const y=document.getElementById("properties-placeholder");y&&(y.textContent=a("noElementSelected"))}const h=document.querySelector(".toolbar-section:nth-child(5) h2");h?.childNodes[0]&&(h.childNodes[0].textContent=a("viewAndLayers")+" ");const S=document.getElementById("view-grid-sep");S&&(S.textContent=a("grid"));const g=document.getElementById("view-layers-sep");g&&(g.textContent=a("layers"));const E=document.getElementById("analysis-sep");E&&(E.textContent=a("analysis"));{const w=document.getElementById("toggleGridBtn")?.parentElement?.querySelector("span");w&&(w.textContent=a("showGrid"))}{const w=document.getElementById("toggleSnapBtn")?.parentElement?.querySelector("span");w&&(w.textContent=a("snapToGrid"))}{const y=document.querySelector('label[for="gridSizeInput"]');y&&(y.textContent=a("size"))}{const w=document.getElementById("gridMetersInput")?.parentElement?.querySelector("label");w&&(w.textContent=a("metersPerCell"))}{const w=document.querySelector('.layer-toggle[data-layer="area"]')?.parentElement?.querySelector("span");w&&(w.textContent=a("layersAreas"))}{const w=document.querySelector('.layer-toggle[data-layer="path"]')?.parentElement?.querySelector("span");w&&(w.textContent=a("layersPaths"))}{const w=document.querySelector('.layer-toggle[data-layer="point"]')?.parentElement?.querySelector("span");w&&(w.textContent=a("layersPoints"))}{const y=document.getElementById("dimensions-sep");y&&(y.textContent=a("dimensions"));const W=document.getElementById("toggleAreaDimensions")?.parentElement?.querySelector("span");W&&(W.textContent=a("showEdgeLengths"));const q=document.getElementById("toggleAreaAngles")?.parentElement?.querySelector("span");q&&(q.textContent=a("showCornerAngles"));const K=document.getElementById("togglePathLengths")?.parentElement?.querySelector("span");K&&(K.textContent=a("showLineLengths"));const ge=document.getElementById("toggleCircleRadius")?.parentElement?.querySelector("span");ge&&(ge.textContent=a("showCircleRadius"));const Pe=document.getElementById("toggleBeaconRing")?.parentElement?.querySelector("span");Pe&&(Pe.textContent=a("showBeaconRangeRing"))}{const y=document.getElementById("intro-content");y&&(y.innerHTML=a("intro_full_content"))}const I=document.getElementById("show3DViewBtn");I&&(I.querySelector("span").textContent=document.getElementById("floor3DView")?.style.display==="flex"?a("backToApp"):a("preview3D"));{const y=document.querySelector("#type-manager-modal h2");y&&(y.textContent=a("manageTypesTitle"));const w=document.querySelector("#type-manager-modal h4");w&&(w.textContent=a("types"));const W=document.getElementById("type-manager-new-btn");W&&(W.textContent=a("newType"));const z=document.getElementById("type-name-input"),q=z?.parentElement?.querySelector("label");q&&(q.textContent=a("typeName")),z&&(z.placeholder=a("exampleMarketing"))}wn&&(wn.textContent=a("textStyle")),Sn&&(Sn.textContent=a("areaStyle")),In&&(In.textContent=a("pointStyle"));{const y=document.getElementById("type-font-size-input")?.parentElement?.querySelector("label");y&&(y.textContent=a("fontSize"),y.title=a("fontSizeDesc"))}{const y=document.getElementById("type-font-color-input")?.parentElement?.querySelector("label");y&&(y.textContent=a("fontColor"),y.title=a("fontColorDesc"))}const k=document.getElementById("ctx-menu-rename");k&&(k.textContent=a("rename"));const M=document.getElementById("ctx-menu-copy");M&&(M.textContent=a("copy"));const C=document.querySelector("#context-menu .has-submenu");C&&C.firstChild&&C.firstChild.textContent&&(C.firstChild.textContent=a("changeType"));const _=document.getElementById("ctx-menu-add-overlap-point");_&&(_.textContent=a("ctxAddOverlapPoint"));const A=document.getElementById("type-fill-color-input").parentElement.querySelector("label");A.textContent=a("fillColor"),A.title=a("fillColorDesc"),document.getElementById("type-fill-color-swatch").title=a("currentFillColor");const j=document.getElementById("type-fill-opacity-slider").parentElement.querySelector("label");j.textContent=a("fillOpacity"),j.title=a("fillOpacityDesc");const u=document.getElementById("type-stroke-color-input").parentElement.querySelector("label");u.textContent=a("strokeColor"),u.title=a("strokeColorDesc"),document.getElementById("type-stroke-color-swatch").title=a("currentStrokeColor");const b=document.querySelector("#type-editor-point > label");b.textContent=a("iconSelection"),b.title=a("iconSelectionDesc");const B=document.getElementById("type-icon-color-input").parentElement.querySelector("label");B.textContent=a("iconColor"),B.title=a("iconColorDesc");{const y=document.getElementById("type-manager-delete-btn");y&&(y.textContent=a("deleteType"))}{const y=document.getElementById("type-manager-placeholder");y&&(y.textContent=a("typeManagerPlaceholder"))}document.getElementById("type-manager-save-btn").textContent=a("saveChangesAndClose"),kn&&(kn.textContent=a("typePreview")),Pn&&(Pn.textContent=a("previewAreaLabel")),Bn&&(Bn.textContent=a("previewPointLabel")),document.querySelector("#new-type-choice-modal h4").textContent=a("createNewElementType"),document.querySelector("#new-type-choice-modal p").textContent=a("chooseBaseType"),document.getElementById("choose-type-area").textContent=a("choiceArea"),document.getElementById("choose-type-point").textContent=a("choicePoint"),document.getElementById("new-type-choice-cancel").textContent=a("cancel"),document.getElementById("input-prompt-ok").textContent=a("ok"),document.getElementById("input-prompt-cancel").textContent=a("cancel"),document.getElementById("confirm-ok").textContent=a("ok"),document.getElementById("confirm-cancel").textContent=a("cancel");{const y=document.getElementById("room-contents-title");y&&(y.textContent=a("roomContentsTitle"));const w=document.getElementById("room-contents-new-item");w&&(w.placeholder=a("roomContentsPlaceholder"));const W=document.getElementById("room-contents-add-btn");W&&(W.textContent=a("roomContentsAdd"));const z=document.getElementById("room-contents-save");z&&(z.textContent=a("ok"));const q=document.getElementById("room-contents-cancel");q&&(q.textContent=a("cancel"))}{const y=document.getElementById("occupancy-title");y&&(y.textContent=a("occupancyTitle"));const w=document.getElementById("occupancy-type");w&&(w.options[0].text=a("occupancyTypeWeekday"),w.options[1].text=a("occupancyTypeDate"),w.options[2].text=a("occupancyTypeRange"));const W=document.getElementById("occupancy-type-label");W&&(W.textContent=a("occupancyTypeLabel"));const z=document.getElementById("occupancy-weekday");z&&(z.options[0].text=a("weekdayMon"),z.options[1].text=a("weekdayTue"),z.options[2].text=a("weekdayWed"),z.options[3].text=a("weekdayThu"),z.options[4].text=a("weekdayFri"),z.options[5].text=a("weekdaySat"),z.options[6].text=a("weekdaySun"));const q=document.getElementById("occupancy-weekday-label");q&&(q.textContent=a("occupancyWeekdayLabel"));const Z=document.getElementById("occupancy-date-label");Z&&(Z.textContent=a("occupancyDateLabel"));const K=document.getElementById("occupancy-start-label");K&&(K.textContent=a("occupancyStartLabel"));const U=document.getElementById("occupancy-end-label");U&&(U.textContent=a("occupancyEndLabel"));const ge=document.getElementById("occupancy-range-start-label");ge&&(ge.textContent=a("occupancyRangeStartLabel"));const ke=document.getElementById("occupancy-range-end-label");ke&&(ke.textContent=a("occupancyRangeEndLabel"));const Pe=document.getElementById("occupancy-note");Pe&&(Pe.placeholder=a("occupancyNotePlaceholder"));const je=document.getElementById("occupancy-note-label");je&&(je.textContent=a("occupancyNoteLabel"));const Xe=document.getElementById("occupancy-add-btn");Xe&&(Xe.textContent=a("occupancyAdd"));const De=document.getElementById("occupancy-save");De&&(De.textContent=a("ok"));const Be=document.getElementById("occupancy-cancel");Be&&(Be.textContent=a("cancel"))}{const y=document.getElementById("opening-hours-title");y&&(y.textContent=a("openingHoursTitle"));const w=document.getElementById("opening-hours-weekly-label");w&&(w.textContent=a("openingHoursWeekly"));const W=document.getElementById("opening-hours-exceptions-label");W&&(W.textContent=a("openingHoursExceptions"));const z=document.getElementById("opening-hours-ranges-label");z&&(z.textContent=a("openingHoursRanges"));const q=document.getElementById("opening-hours-weekday-label");q&&(q.textContent=a("occupancyWeekdayLabel"));const Z=document.getElementById("opening-hours-start-label");Z&&(Z.textContent=a("occupancyStartLabel"));const K=document.getElementById("opening-hours-end-label");K&&(K.textContent=a("occupancyEndLabel"));const U=document.getElementById("opening-hours-weekday");U&&(U.options[0].text=a("weekdayMon"),U.options[1].text=a("weekdayTue"),U.options[2].text=a("weekdayWed"),U.options[3].text=a("weekdayThu"),U.options[4].text=a("weekdayFri"),U.options[5].text=a("weekdaySat"),U.options[6].text=a("weekdaySun"));const ge=document.getElementById("opening-hours-ex-date-label");ge&&(ge.textContent=a("occupancyDateLabel"));const ke=document.getElementById("opening-hours-ex-start-label");ke&&(ke.textContent=a("occupancyStartLabel"));const Pe=document.getElementById("opening-hours-ex-end-label");Pe&&(Pe.textContent=a("occupancyEndLabel"));const je=document.getElementById("opening-hours-range-start-label");je&&(je.textContent=a("occupancyRangeStartLabel"));const Xe=document.getElementById("opening-hours-range-end-label");Xe&&(Xe.textContent=a("occupancyRangeEndLabel"));const De=document.getElementById("opening-hours-range-time-start-label");De&&(De.textContent=a("occupancyStartLabel"));const Be=document.getElementById("opening-hours-range-time-end-label");Be&&(Be.textContent=a("occupancyEndLabel"));const ut=document.getElementById("opening-hours-add-rule");ut&&(ut.textContent=a("addRule"));const Qe=document.getElementById("opening-hours-add-exception");Qe&&(Qe.textContent=a("addException"));const mt=document.getElementById("opening-hours-add-range");mt&&(mt.textContent=a("addRange"));const tr=document.getElementById("opening-hours-save");tr&&(tr.textContent=a("ok"));const nr=document.getElementById("opening-hours-cancel");nr&&(nr.textContent=a("cancel"))}document.getElementById("ctx-menu-rename").textContent=a("rename"),document.getElementById("ctx-menu-copy").textContent=a("copy");{const y=document.getElementById("ctx-menu-delete");y&&(y.textContent=a("delete"))}{const y=document.querySelector(".context-menu .has-submenu");y&&y.childNodes[0]&&(y.childNodes[0].textContent=a("changeType"))}{const y=document.getElementById("file-menu-trigger");y&&(y.textContent=a("file"))}{const y=document.getElementById("output-menu-trigger");y&&(y.textContent=a("output"))}{const y=document.getElementById("overview-menu-trigger");y&&(y.textContent=a("overview"))}const P={de:"Deutsch",en:"English"},L=e.activeLanguage,F=P[L]||L.toUpperCase();if(Jo.textContent=F,Se){const y=Se.querySelector('button[data-lang="en"]'),w=Se.querySelector('button[data-lang="de"]');y&&(y.textContent="English"),w&&(w.textContent="Deutsch")}const T=e.activeTheme==="dark";Yo.title=a(T?"lightMode":"darkMode"),Ot&&(Ot.src=T?"assets/lightMode.png":"assets/darkMode.png"),Ht&&(Ht.src=T?"assets/language-dark.png":"assets/language-light.png"),document.querySelector("#element-type-select optgroup:nth-child(1)")?.setAttribute("label",a("optgroupAreas")),document.querySelector("#element-type-select optgroup:nth-child(2)")?.setAttribute("label",a("optgroupPointElements")),document.querySelector("#element-type-select optgroup:nth-child(3)")?.setAttribute("label",a("optgroupConnectors"));const D=document.querySelector('label[for="properties-description-input"]');D&&(D.textContent=a("description"));const O=document.querySelector('label[for="properties-room-number-input"]');O&&(O.textContent=a("roomNumber"));const V=document.querySelector('label[for="properties-designation-select"]');V&&(V.textContent=a("designation"));const R=document.querySelector('label[for="properties-opening-hours-input"]');R&&(R.textContent=a("openingHours"));const X=document.getElementById("open-opening-hours-modal-btn");X&&(X.textContent=a("openingHoursBtn"));const re=document.getElementById("open-occupancy-modal-btn");re&&(re.textContent=a("occupancyBtn"));const Fe=document.querySelector('label[for="properties-is-empty-checkbox"] span');Fe&&(Fe.textContent=a("isEmptyArea"))}function Hi(t){if(e.activeLanguage===t)return;const o=e.activeLanguage;Gi(t),localStorage.setItem("imd_editor_language",t),e.activeLanguage=t,document.documentElement.lang=t,Jo.textContent=t==="en"?"English":"Deutsch";const n=a("unnamedProject",o),s=a("unnamedProject",t);e.project.properties.projectName===n&&(e.project.properties.projectName=s,Ke&&(Ke.value=s),N()),Oi(),ne(),ae(),Ye(),se(),G()}function Ri(t){e.activeTheme===t&&document.body.getAttribute("data-theme")===t||(e.activeTheme=t,document.body.setAttribute("data-theme",t),localStorage.setItem("imd_editor_theme",t),Ot&&(Ot.src=t==="dark"?"assets/lightMode.png":"assets/darkMode.png"),Ht&&(Ht.src=t==="dark"?"assets/language-dark.png":"assets/language-light.png"),Oi(),H())}function Sl(){le.addEventListener("wheel",pl,{passive:!1}),le.addEventListener("contextmenu",gl),window.addEventListener("click",_e),le.addEventListener("mousedown",u=>{if(u.button===1||e.currentMode==="pan"&&u.button===0){Hs(u);return}if(u.button!==0)return;const b=gn({x:u.offsetX,y:u.offsetY});if(e.currentMode==="select"&&Zs(b))return;const B=de(b);if((e.currentMode==="select"||e.currentMode==="move-element")&&B){if(e.isCtrlPressed){$i(b);return}const P=B.properties.id;e.selectedFeatureIds.includes(P)||(e.selectedFeatureIds=[P],se(),H()),Ws(b);return}ul(b)}),window.addEventListener("mouseup",u=>{qs(),u.button===0&&(Us(),Ys(),xe&&xe.stop3DDrag())}),window.addEventListener("mousemove",u=>{const b=le.getBoundingClientRect();if(e.mousePosScreen={x:u.clientX-b.left,y:u.clientY-b.top},e.mousePos=gn(e.mousePosScreen),mi.style.top=`${e.mousePosScreen.y}px`,gi.style.left=`${e.mousePosScreen.x}px`,Jn&&(Jn.textContent=`X: ${e.mousePos.x.toFixed(2)} m | Y: ${e.mousePos.y.toFixed(2)} m`),e.isPanning){Rs(u);return}if(e.isEditingPath){Js(e.mousePos);return}if(e.isMovingElement){Ks(e.mousePos);return}if(e.threeDIsDragging&&xe){xe.do3DDrag(u);return}let B=!1;if(e.currentMode==="scissors"){let P;if(e.selectedFeatureIds.length===1){const L=e.project.features.find(F=>F.properties.id===e.selectedFeatureIds[0]);L&&L.geometry.type==="Polygon"&&(P=L)}else{const L=de(e.mousePos);L&&L.geometry.type==="Polygon"&&(P=L)}if(P){const L=Wt(e.mousePos,P.geometry);(L.index!==e.hoveredEdgeIndex||L.index!==-1&&e.hoveredFeatureId!==P.properties.id)&&(e.hoveredEdgeIndex=L.index,e.hoveredFeatureId=L.index!==-1?P.properties.id:null,B=!0)}else e.hoveredEdgeIndex!==-1&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0)}else if(e.isAltPressed&&e.currentMode==="select"&&e.selectedFeatureIds.length===1){const P=e.project.features.find(L=>L.properties.id===e.selectedFeatureIds[0]);if(P&&P.geometry.type==="Polygon"){const L=Wt(e.mousePos,P.geometry);(L.index!==e.hoveredEdgeIndex||L.index!==-1&&e.hoveredFeatureId!==P.properties.id)&&(e.hoveredEdgeIndex=L.index,e.hoveredFeatureId=L.index!==-1?P.properties.id:null,B=!0)}}else e.hoveredEdgeIndex!==-1&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0);if(e.currentMode==="door"){const P=de(e.mousePos);if(P&&P.geometry.type==="Polygon"){const L=Wt(e.mousePos,P.geometry);(L.index!==e.hoveredEdgeIndex||L.index!==-1&&e.hoveredFeatureId!==P.properties.id)&&(e.hoveredEdgeIndex=L.index,e.hoveredFeatureId=L.index!==-1?P.properties.id:null,B=!0)}else if(P&&P.geometry.type==="LineString"){const L=Kr(e.mousePos,P.geometry);(L.index!==e.hoveredEdgeIndex||L.index!==-1&&e.hoveredFeatureId!==P.properties.id)&&(e.hoveredEdgeIndex=L.index,e.hoveredFeatureId=L.index!==-1?P.properties.id:null,B=!0)}else(e.hoveredEdgeIndex!==-1||e.hoveredFeatureId)&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0)}(e.tempShape||B||e.isShiftPressed)&&(H(),$())}),le.addEventListener("dblclick",u=>{u.preventDefault(),e.currentMode==="polygon"&&Bs()}),Un.addEventListener("mousedown",dr),Zn.addEventListener("mousedown",dr),hi.addEventListener("dblclick",()=>{e.scale=1,e.pan={x:0,y:0},pt(),H()}),document.getElementById("mode-screenshot")?.addEventListener("click",()=>{const u=document.getElementById("canvas");if(!u)return;const b=document.createElement("a"),B=e.activeLanguage==="de"?"karte":"map",P=e.activeFloorId||"screenshot";b.download=`${B}-${P}.png`,b.href=u.toDataURL("image/png"),b.click()}),Mo.addEventListener("click",u=>{u.stopPropagation(),Se.style.display=Se.style.display==="block"?"none":"block"}),Se.addEventListener("click",u=>{const B=u.target.dataset.lang;B&&(Hi(B),Se.style.display="none")}),window.addEventListener("click",u=>{!Mo.contains(u.target)&&!Se.contains(u.target)&&(Se.style.display="none")}),Yo.addEventListener("click",()=>{Ri(e.activeTheme==="light"?"dark":"light")}),Ke.addEventListener("input",()=>{e.project.properties.projectName=Ke.value,N(),ne(),$()}),document.getElementById("newProjectBtn").addEventListener("click",async()=>{if(!await Ee(a("alert_newProjectConfirm")))return;const b=Me(),B=b.length>0?b[0]:$e,P=await Ce(a("prompt_newFloorName"),B);Xr(!1,P||$e)}),document.getElementById("saveProjectBtn").addEventListener("click",()=>rr(Ke.value)),document.getElementById("exportGeoJsonBtn").addEventListener("click",()=>rr(Ke.value)),document.getElementById("loadProjectFromServerBtn").addEventListener("click",async()=>{const u=document.getElementById("server-load-panel");if(u.classList.contains("hidden")){if(!ie.isAvailable()){alert('Backend nicht verfügbar. Bitte API unter "/app/api" und "/api" starten oder Proxy konfigurieren.');return}u.classList.remove("hidden"),await n()}else u.classList.add("hidden")}),document.getElementById("saveProjectToServerBtn").addEventListener("click",async()=>{const u=document.getElementById("server-load-panel");if(u.classList.contains("hidden")){if(!ie.isAvailable()){alert('Backend nicht verfügbar. Bitte API unter "/app/api" und "/api" starten oder Proxy konfigurieren.');return}u.classList.remove("hidden"),await n()}});const o=document.getElementById("serverSavePanelBtn");o&&o.addEventListener("click",async()=>{if(!ie.isAvailable()){alert("Backend nicht verfügbar. Speichern zum Server ist derzeit deaktiviert.");return}const u=document.getElementById("serverProjectSelect"),b=document.getElementById("serverVersionSelect"),B=u?.value,P=B&&B!==""?parseInt(B,10):null,L=b?.value,F=L&&L!==""?parseInt(L,10):void 0;if(P!==null&&F!==void 0){const D=u?.selectedOptions?.[0]?.textContent||`#${P}`;if(!await Ee(a("confirmOverwriteVersion",void 0,D,F)))return}const T=await Jr(P,F);await n(),u&&(u.value=String(T.id)),await(async()=>{const D=document.getElementById("serverVersionSelect");D&&(D.value=String(T.version))})()});async function n(){const u=document.getElementById("serverProjectSelect"),b=document.getElementById("serverVersionSelect"),B=document.getElementById("serverSaveHint");if(u.innerHTML="",b.innerHTML="",!ie.isAvailable()){const z=document.createElement("option");z.value="",z.textContent="Backend nicht verfügbar",z.disabled=!0,u.appendChild(z),B&&(B.textContent="Kein Backend verbunden. Bitte API starten oder Proxy konfigurieren.");return}let L=(await ie.listProjects()).slice();const F=z=>{u.innerHTML="";const q=document.createElement("option");q.value="",q.textContent=a("newProjectOption"),u.appendChild(q),z.forEach(Z=>{const K=document.createElement("option");K.value=String(Z.id),K.textContent=`${Z.name} (#${Z.id})`,u.appendChild(K)}),z.length>0?u.value=String(z[0].id):u.value=""};F(L),await w();const T=document.getElementById("serverRefreshBtn");T&&(T.onclick=async()=>{L=(await ie.listProjects()).slice(),F(L),await w(),y(),W()});const D=document.getElementById("serverVersionRefreshBtn");D&&(D.onclick=async()=>{await w(),y(),W()}),u.onchange=async()=>{await w(),y(),W()},b.onchange=()=>{y(),W()};const O=document.getElementById("serverLoadBtn");O&&(O.onclick=async()=>{const z=parseInt(u.value,10),q=b.value,Z=q?parseInt(q,10):void 0;await ir(z,Z)});const V=document.getElementById("serverLoadLatestBtn");V&&(V.onclick=async()=>{const z=parseInt(u.value,10);await ir(z)});const R=document.getElementById("serverProjectAddBtn");R&&(R.onclick=async()=>{await Ee(a("infoNewProject")),u.value="",await w(),y()});const X=document.getElementById("serverProjectDeleteBtn");X&&(X.onclick=async()=>{const z=parseInt(u.value,10);if(isNaN(z))return;const q=u.selectedOptions?.[0]?.textContent||`#${z}`;if(!await Ee(a("confirmDeleteProject",void 0,q,z)))return;await ie.delete(z),L=(await ie.listProjects()).slice(),F(L),await w(),y()});const re=document.getElementById("serverVersionAddBtn");re&&(re.onclick=()=>{Ee(a("infoNewVersion")),b.value="",y()});const Fe=document.getElementById("serverVersionDeleteBtn");Fe&&(Fe.onclick=async()=>{const z=parseInt(u.value,10);if(isNaN(z))return;const q=b.value;if(!q){await Ee(a("alertSelectVersionFirst"));return}const Z=parseInt(q,10),K=u.selectedOptions?.[0]?.textContent||`#${z}`;await Ee(a("confirmDeleteVersion",void 0,K,Z,z))&&(await ie.delete(z,Z),await w(),y())});function y(){const z=document.getElementById("serverProjectDeleteBtn"),q=document.getElementById("serverVersionDeleteBtn"),Z=document.getElementById("serverProjectAddBtn"),K=document.getElementById("serverVersionAddBtn"),U=!!u.value,ge=!!b.value;z&&(z.disabled=!U),q&&(q.disabled=!U||!ge),Z&&(Z.disabled=!1),K&&(K.disabled=!U)}async function w(){const z=parseInt(u.value,10);b.innerHTML="";const q=document.createElement("option");if(q.value="",q.textContent=a("newVersionOption"),b.appendChild(q),isNaN(z)){b.disabled=!0,W();return}else b.disabled=!1;(await ie.listVersions(z)).sort((K,U)=>U-K).forEach(K=>{const U=document.createElement("option");U.value=String(K),U.textContent=String(K),b.appendChild(U)}),y(),W()}y(),W();function W(){if(!B)return;const z=u.value,q=b.value;if(!z){B.textContent=a("infoNewProject");return}const Z=u.selectedOptions?.[0]?.textContent||`#${z}`;if(!q){B.textContent=a("infoNewVersion");return}const K=parseInt(q,10);B.textContent=a("saveTargetVersion",void 0,Z,K)}}document.getElementById("loadProjectInput").addEventListener("change",u=>{const b=u.target.files?.[0];b&&(ms(b),u.target.value="")}),document.getElementById("showGeoJsonBtn").addEventListener("click",()=>{const u=document.getElementById("live-geojson-output"),b=document.getElementById("showGeoJsonBtn"),B=u.style.display==="block";u.style.display=B?"none":"block",b.querySelector("span").textContent=a(B?"showLiveCode":"hideCode")}),document.getElementById("addFloorBtn").addEventListener("click",async()=>{const u=Me(),b=u.length===0?$e:`Etage ${u.length+1}`,B=a("prompt_newFloorName"),P=await Ce(B,b);P&&ar(P)}),Xo.addEventListener("click",async()=>{if(!e.activeFloorId){alert(a("alert_noActiveFloor"));return}const u=a("prompt_renameFloor",e.activeLanguage,e.activeFloorId),b=await Ce(u,e.activeFloorId);b&&cr(b)}),Yn.addEventListener("change",()=>{e.activeFloorId=Yn.value,e.selectedFeatureIds=[],ze.disabled=!0,H()}),document.getElementById("floorplanInput").addEventListener("change",async u=>{const b=u.target.files?.[0];if(b)try{await fs(b)}finally{u.target.value=""}}),document.getElementById("undoBtn").addEventListener("click",sr),document.getElementById("redoBtn").addEventListener("click",lr),ze.addEventListener("click",()=>{if(e.selectedFeatureIds.length>1){const u=de(e.mousePos);u&&(e.selectedFeatureIds=[u.properties.id])}Tn()});const s=document.getElementById("copyBtn");s&&s.addEventListener("click",()=>{e.selectedFeatureIds.length,Hr()}),ro&&ro.addEventListener("click",()=>{const u=a("prompt_newFloorName");Ce(u,e.activeFloorId||"").then(b=>{b&&ar(b),_e()})}),io&&io.addEventListener("click",()=>{if(!e.activeFloorId){alert(a("alert_noActiveFloor"));return}const u=a("prompt_renameFloor",e.activeLanguage,e.activeFloorId);Ce(u,e.activeFloorId).then(b=>{b&&cr(b),_e()})}),["select","pan","move-element","calibrate","merge","area","square","polygon","circle","line","arc","door","point"].forEach(u=>{const b=document.getElementById(`mode-${u}`);b&&b.addEventListener("click",()=>{if(e.currentMode===u&&!["select","pan","move-element"].includes(u)){document.getElementById("mode-select")?.click();return}switch(e.currentMode=u,e.tempShape=null,["area","polygon","circle","line","arc","door","point"].includes(u)&&(e.selectedFeatureIds=[]),Ye(),document.querySelectorAll(".tool-btn").forEach(F=>F.classList.remove("active")),b.classList.add("active"),u){case"pan":case"move-element":le.style.cursor="grab";break;case"select":le.style.cursor="default";break;case"calibrate":{le.style.cursor="crosshair";const F=new CustomEvent("imd-info",{detail:{title:a("calibrateScale"),message:a("calibratePrompt")}});document.dispatchEvent(F);break}case"merge":le.style.cursor="default",mn();{const F=new CustomEvent("imd-info",{detail:{title:a("merge"),message:a("mergeHintShort")}});document.dispatchEvent(F)}break;case"scissors":le.style.cursor="default";break;default:le.style.cursor="crosshair";break}const P=["area","square","polygon","circle"].includes(u),L=u==="point";yi.style.display=P||L?"block":"none",P&&Or("area"),L&&Or("point"),ze.disabled=e.selectedFeatureIds.length===0,se(),H()})}),document.getElementById("show3DViewBtn").addEventListener("click",async()=>{const u=document.getElementById("floor3DView"),b=document.querySelector(".canvas-wrapper"),B=document.getElementById("show3DViewBtn").querySelector("span");u.style.display==="flex"?(u.style.display="none",b.style.display="grid",B.textContent=a("preview3D")):(xe||(xe=await nt(()=>import("./3d-D_Rxwher.js"),__vite__mapDeps([0,1]))),jt||(jt=await nt(()=>import("./floor3D-DqIwNvyl.js"),[])),xe.setup3DViewControls(),u.style.display="flex",b.style.display="none",B.textContent=a("backToApp"),e.threeDPan={x:50,y:50},e.threeDScale=.8,xe.update3DFloorSelector(),jt.render3DFloorStack(e.project,"floor3DContent"),u.style.cursor="grab",u.addEventListener("mousedown",xe.start3DDrag),u.addEventListener("wheel",xe.handle3DZoom,{passive:!1}))}),js(H);const r=document.querySelector(".toolbar");r&&r.addEventListener("wheel",u=>{u.stopPropagation()},{passive:!0});function l(){const u=document.getElementById("intro-content"),b=document.getElementById("intro-logo-wrapper"),B=document.getElementById("intro-logo"),P=document.getElementById("intro-logo-row");if(b&&B&&(b.style.display="block",B.src="assets/company_logo.png",B.onerror=()=>{b.style.display="none"}),P){P.innerHTML="";const L=["assets/company_logo.png","assets/company_logo2.png","assets/company_logo3.png"];for(const F of L){const T=document.createElement("img");T.className="intro-logo-img",T.alt="Logo",T.src=F,T.onerror=()=>T.remove(),P.appendChild(T)}P.style.display="flex"}u&&(u.innerHTML=a("intro_full_content",e.activeLanguage)),ye.classList.remove("hidden")}document.getElementById("Einleitung").addEventListener("click",l);function c(u,b){const B=document.getElementById("intro-content"),P=document.getElementById("intro-logo-wrapper"),L=document.getElementById("intro-logo-row");P&&(P.style.display="none"),L&&(L.style.display="none"),B&&(B.innerHTML=`
        <h2>${a(u,e.activeLanguage)}</h2>
        ${b}
      `),ye.classList.remove("hidden")}const d=`
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
  `;document.getElementById("sponsorsBtn")?.addEventListener("click",()=>{c("sponsorsButtonTitle",m)}),fi.addEventListener("click",()=>{ye.classList.add("hidden")}),bi.addEventListener("click",()=>{ye.classList.add("hidden")}),document.addEventListener("imd-info",u=>{const b=u.detail||{},B=b.title||"Info",P=b.message||"",L=ye.querySelector("h2"),F=ye.querySelector("p"),T=ye.querySelector("h4"),D=ye.querySelector(".modal-content ul"),O=document.getElementById("intro-logo-wrapper"),V=document.getElementById("intro-logo-row"),R=document.getElementById("intro-content");L&&(L.textContent=B),F&&(F.textContent=P),T&&(T.style.display="none"),D&&(D.style.display="none"),O&&(O.style.display="none"),V&&(V.style.display="none"),R&&(R.innerHTML=""),ye.classList.remove("hidden")}),hn.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.label=hn.value,N(),ht(),$())}),Qn.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.description=Qn.value,N(),ht(),$())}),vn.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.opening_hours=vn.value,N(),ht(),$())}),eo.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.room_number=eo.value,N(),ht(),$())}),to.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.designation=to.value,N(),ht(),$())}),fn.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.subType=fn.value,N(),G(),$(),ne(),se())}),bn.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.isEmpty=bn.checked,u.properties.isEmpty&&(u.properties.isAccessible=!1),N(),G(),$(),se())});const v=document.getElementById("beacon-uuid-input"),f=document.getElementById("beacon-serial-input"),h=document.getElementById("beacon-major-input"),S=document.getElementById("beacon-minor-input"),g=document.getElementById("beacon-installation-input"),E=document.getElementById("beacon-range-input"),I=document.getElementById("beacon-note-de-input"),k=document.getElementById("beacon-note-en-input"),M=document.getElementById("beacon-activation-start-date"),C=document.getElementById("beacon-activation-end-date"),_=document.getElementById("beacon-activation-start-time"),A=document.getElementById("beacon-activation-end-time");v?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_uuid=v.value,N(),$(),ne(),H())}),f?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_serial=f.value,N(),$(),ne(),H())}),h?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);if(u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"){const b=parseInt(h.value,10);Number.isNaN(b)?delete u.properties.beacon_major:u.properties.beacon_major=b,N(),$(),ne(),H()}}),S?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);if(u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"){const b=parseInt(S.value,10);Number.isNaN(b)?delete u.properties.beacon_minor:u.properties.beacon_minor=b,N(),$(),ne(),H()}}),g?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_installation=g.value,N(),$(),ne(),H())}),E?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);if(u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"){const b=parseFloat(E.value);Number.isNaN(b)?delete u.properties.beacon_range:u.properties.beacon_range=b,N(),$(),ne(),H()}}),I?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_note_de=I.value,N(),$(),ne(),H())}),k?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_note_en=k.value,N(),$(),ne(),H())}),M?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.startDate=M.value,N(),$(),ne(),H())}),C?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.endDate=C.value,N(),$(),ne(),H())}),_?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.startTime=_.value,N(),$(),ne(),H())}),A?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.endTime=A.value,N(),$(),ne(),H())}),vi.addEventListener("click",Tn),xn&&xn.addEventListener("click",()=>{fl(),_e()}),xi.addEventListener("click",yl),no.addEventListener("click",Hr),so&&so.addEventListener("click",()=>{Rr(),_e()}),lo&&lo.addEventListener("click",()=>{xl(),_e()}),ao&&ao.addEventListener("click",()=>{qr(),_e()}),co&&co.addEventListener("click",()=>{Vr(),_e()}),$t&&$t.addEventListener("click",()=>{Rr()}),Ei?.addEventListener("click",()=>qr()),wi?.addEventListener("click",()=>Vr()),_i.addEventListener("click",el),Fi.addEventListener("click",pr),Di.addEventListener("click",tl),ji.addEventListener("click",()=>En.classList.remove("hidden")),Lo.addEventListener("click",nl),Ai.addEventListener("click",()=>ur("area")),zi.addEventListener("click",()=>ur("point")),Ni.addEventListener("click",()=>En.classList.add("hidden")),[Io,ko,Po,Bo,Co,To,Fo].forEach(u=>u.addEventListener("input",si)),window.addEventListener("keydown",u=>{if(document.activeElement?.tagName!=="INPUT"){if(u.key==="Escape"){So.classList.contains("hidden")?e.tempShape&&(e.tempShape=null,H(),Qo()):pr(),e.selectedFeatureIds=[],ze.disabled=!0,se(),mn(),H();const b=document.getElementById("mode-pan");b&&e.currentMode!=="pan"&&b.click()}if(u.key==="Shift"&&!e.isShiftPressed&&(e.isShiftPressed=!0,H()),u.key==="Control"&&!e.isCtrlPressed&&(e.isCtrlPressed=!0),u.key==="Alt"&&!e.isAltPressed&&(e.isAltPressed=!0,H()),u.key==="Delete"||u.key==="Backspace"){if(u.preventDefault(),e.editedFeatureId&&e.editedNodeIndex!==-1){const b=e.project.features.find(B=>B.properties.id===e.editedFeatureId);if(b&&b.geometry.type==="Polygon"){const B=b.geometry.coordinates[0];if(B.length>4){B.splice(e.editedNodeIndex,1),e.editedNodeIndex===0&&(B[B.length-1]=B[0]),e.editedNodeIndex=-1,N(),H();return}}}if(e.selectedFeatureIds.length>1&&!u.ctrlKey&&!u.metaKey){const b=de(e.mousePos);b&&(e.selectedFeatureIds=[b.properties.id])}Tn()}if(u.ctrlKey||u.metaKey)switch(u.key.toLowerCase()){case"z":u.preventDefault(),sr();break;case"y":u.preventDefault(),lr();break;case"a":{u.preventDefault();const b=e.project.features.filter(B=>B.properties.floor===e.activeFloorId);e.selectedFeatureIds=b.map(B=>B.properties.id),ze.disabled=e.selectedFeatureIds.length===0,se(),H();break}case"c":u.preventDefault(),hl();break;case"v":u.preventDefault(),bl();break}u.key==="Enter"&&e.currentMode==="merge"&&e.project.features.filter(P=>P.properties.floor===e.activeFloorId).filter(P=>e.selectedFeatureIds.includes(P.properties.id)&&P.geometry.type==="Polygon").length>=2&&(u.preventDefault(),ml())}}),window.addEventListener("keyup",u=>{u.key==="Shift"&&(e.isShiftPressed=!1,H()),u.key==="Control"&&(e.isCtrlPressed=!1),u.key==="Alt"&&(e.isAltPressed=!1,e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H())}),document.querySelectorAll(".toolbar-header").forEach(u=>{u.addEventListener("click",()=>{u.classList.toggle("collapsed")})})}function Gr(){wl(),Zi(),Sl(),Fs(),e.scale=.7,e.pan={x:0,y:0},pt(),H();const t=localStorage.getItem("imd_editor_theme");Ri(t||"light");const o=localStorage.getItem("imd_editor_language");Hi(o||"de"),ne(),Ye(),se()}function Il(){const t=document.getElementById("imd-date-picker"),o=document.getElementById("imd-dp-grid"),n=document.getElementById("imd-dp-month"),s=document.getElementById("imd-dp-prev"),i=document.getElementById("imd-dp-next"),r=document.getElementById("imd-dp-clear"),l=document.getElementById("imd-dp-today"),c=document.getElementById("imd-dp-target");if(!t||!o||!n||!s||!i||!r||!l||!c)return;const d=t,m=o,v=n,f=c;r.textContent=a("calendarClear"),l.textContent=a("calendarToday");let h=new Date,S=null;const g=(document.documentElement.lang||"de").toLowerCase().startsWith("de")?"de-DE":"en-US",E=new Intl.DateTimeFormat(g,{month:"long",year:"numeric"}),I=new Intl.DateTimeFormat(g,{weekday:"short"}),k=[];for(let b=0;b<7;b++){const B=new Date(2020,5,7+b);k.push(I.format(B))}function M(b){const B=b.getFullYear(),P=String(b.getMonth()+1).padStart(2,"0"),L=String(b.getDate()).padStart(2,"0");return`${B}-${P}-${L}`}function C(b){if(!b)return null;const B=b.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!B)return null;const P=Number(B[1]),L=Number(B[2])-1,F=Number(B[3]),T=new Date(P,L,F);return Number.isNaN(T.getTime())?null:T}function _(){v.textContent=E.format(h),m.innerHTML="",k.forEach(F=>{const T=document.createElement("div");T.className="imd-date-picker__dow",T.textContent=F,m.appendChild(T)});const P=(new Date(h.getFullYear(),h.getMonth(),1).getDay()+6)%7,L=new Date(h.getFullYear(),h.getMonth(),1-P);for(let F=0;F<42;F++){const T=new Date(L);T.setDate(L.getDate()+F);const D=document.createElement("div");D.className="imd-date-picker__day",T.getMonth()!==h.getMonth()&&D.classList.add("imd-date-picker__day--outside"),(T.getDay()===0||T.getDay()===6)&&D.classList.add("imd-date-picker__day--weekend");const V=new Date;T.getDate()===V.getDate()&&T.getMonth()===V.getMonth()&&T.getFullYear()===V.getFullYear()&&D.classList.add("imd-date-picker__day--today"),S&&T.getDate()===S.getDate()&&T.getMonth()===S.getMonth()&&T.getFullYear()===S.getFullYear()&&D.classList.add("imd-date-picker__day--selected"),D.textContent=String(T.getDate()),D.addEventListener("click",()=>{S=T;const R=document.getElementById(f.value);if(R){R.value=M(T);const X=new Event("input",{bubbles:!0});R.dispatchEvent(X)}j()}),m.appendChild(D)}}function A(b){S=C(b.value),h=S||new Date,f.value=b.id;const B=b.getBoundingClientRect();d.style.left=`${B.left+window.scrollX}px`,d.style.top=`${B.bottom+window.scrollY+6}px`,d.classList.add("open"),_()}function j(){d.classList.remove("open")}s.addEventListener("click",()=>{h.setMonth(h.getMonth()-1),_()}),i.addEventListener("click",()=>{h.setMonth(h.getMonth()+1),_()}),r.addEventListener("click",()=>{const b=document.getElementById(f.value);if(b){b.value="";const B=new Event("input",{bubbles:!0});b.dispatchEvent(B)}j()}),l.addEventListener("click",()=>{const b=new Date,B=document.getElementById(f.value);if(B){B.value=M(b);const P=new Event("input",{bubbles:!0});B.dispatchEvent(P)}j()}),document.addEventListener("click",b=>{const B=b.target;!d.contains(B)&&!B.closest('input[type="date"]')&&j()}),(()=>{document.querySelectorAll('input[type="date"]').forEach(b=>{b.id||(b.id=`date_${Math.random().toString(36).slice(2)}`),b.addEventListener("focus",B=>{B.preventDefault(),A(b)}),b.addEventListener("click",B=>{B.preventDefault(),A(b)})})})()}const ft=document.getElementById("simulateSignalBtn");ft?.addEventListener("click",()=>{e.showBeaconHeatmap=!e.showBeaconHeatmap;const t=ft.querySelector("span");t&&(t.textContent=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal")),ft.classList.toggle("active",e.showBeaconHeatmap),ft.setAttribute("aria-pressed",e.showBeaconHeatmap?"true":"false"),ft.title=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal"),e.showBeaconHeatmap,H()});const kl=document.getElementById("checkCoverageBtn");kl?.addEventListener("click",()=>{const t=Wi();t.length>0?alert(`Analyse-Ergebnisse:

- `+t.join(`
- `)):alert(`Keine Probleme erkannt.

Alle Räume sind abgedeckt und haben ausreichend Beacon-Signalstärke (Trilateration möglich).`)});const Pl=`<aside class="toolbar">
  <div class="toolbar-scroll-content">
  <section class="toolbar-section" id="view-layers-section">
    <h2 class="toolbar-header">Projekt <span>▼</span></h2>
    <div class="toolbar-content">
      <label for="projectName"></label>
      <input type="text" id="projectName" placeholder="" />
    </div>
  </section>

  <section class="toolbar-section">
    <h2 class="toolbar-header">Bearbeiten <span>▼</span></h2>
    <div class="toolbar-content">
      <div class="button-group">
        <button id="undoBtn" title="Rückgängig (Strg+Z)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.38 11.23 17.28 8 12.5 8z"
            ></path>
          </svg>
          <span>Rückgängig</span>
        </button>
        <button id="redoBtn" title="Wiederherstellen (Strg+Y)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.78 0-8.88 3.23-9.87 7.5l-2.37-.78C.39 10.31 5.22 6 11.5 6c2.81 0 5.37 1.09 7.28 2.86L22 6v9h-9l3.4-3.4z"
            ></path>
          </svg>
          <span>Wiederherstellen</span>
        </button>
      </div>
    </div>
  </section>

  <section class="toolbar-section">
    <h2 class="toolbar-header">Etagen <span>▼</span></h2>
    <div class="toolbar-content">
      <label for="floor-select"></label>
      <select id="floor-select"></select>
      <div class="button-group">
        <button id="addFloorBtn" title="Neue Etage hinzufügen"><span>Neue Etage</span></button>
        <button id="renameFloorBtn" title="Aktive Etage umbenennen">
          <span>Umbenennen...</span>
        </button>
        <button
          title="Grundrissbild laden"
          onclick="document.getElementById('floorplanInput').click()"
        >
          <span>Grundriss...</span>
        </button>
      </div>
      <img
        id="floor-preview"
        alt="Grundriss-Vorschau"
        style="display: none; width: 100%; margin-top: 1rem; border-radius: var(--radius-sm)"
      />
    </div>
  </section>

  <section class="toolbar-section">
    <h2 class="toolbar-header">Werkzeuge <span>▼</span></h2>
    <div class="toolbar-content">
      <div class="tool-buttons">
        <button id="mode-pan" class="tool-btn" title="Ansicht bewegen (H)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M12 2v4" />
              <path d="M12 18v4" />
              <path d="M2 12h4" />
              <path d="M18 12h4" />
              <path d="M7 7l-2-2" />
              <path d="M17 17l2 2" />
              <path d="M17 7l2-2" />
              <path d="M7 17l-2 2" />
            </g></svg
          ><span>Bewegen</span>
        </button>
        <button id="mode-select" class="tool-btn active" title="Auswählen (V)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M4 2l6.5 16 1.8-6.2 6.2-1.8L4 2z"
            />
          </svg>
          <span>Auswählen</span>
        </button>
        <button id="mode-merge" class="tool-btn" title="Zusammenfügen zu Fläche/Raum">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-width="2">
              <rect x="4" y="6" width="10" height="10" rx="2" />
              <rect x="10" y="8" width="10" height="10" rx="2" />
            </g>
            <path d="M7 12h10" stroke="currentColor" stroke-width="2" /></svg
          ><span>Zusammenfügen</span>
        </button>
        <button id="mode-move-element" class="tool-btn" title="Element verschieben">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 3v18M3 12h18" />
            <path d="M12 3l-3 3M12 3l3 3" />
            <path d="M12 21l-3-3M12 21l3-3" />
            <path d="M3 12l3-3M3 12l3 3" />
            <path d="M21 12l-3-3M21 12l-3 3" />
          </svg>
          <span>Verschieben</span>
        </button>
        <button id="deleteBtn" class="tool-btn danger" title="Löschen (Entf)" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            ></path></svg
          ><span>Löschen</span>
        </button>
        <button id="copyBtn" class="tool-btn" title="Kopieren (Strg+C)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
            ></path></svg
          ><span>Copy</span>
        </button>
        <button id="toggleAccessibleBtn" class="tool-btn" title="Barrierefrei markieren">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9.5" cy="3" r="1.3"></circle>
            <path d="M9.5 4.5v3"></path>
            <path d="M9.5 6.5h3"></path>
            <circle cx="6" cy="11" r="3.2"></circle>
            <path d="M9.5 8l2.5 3.5"></path>
          </svg>
          <span>Barrierefrei</span>
        </button>
        <button id="mode-screenshot" class="tool-btn" title="Screenshot">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="7" width="18" height="12" rx="2" fill="none" />
            <circle cx="12" cy="13" r="3.5" fill="none" />
            <path d="M8 7l1.5-2h5L16 7" fill="none" />
          </svg>
          <span>Screenshot</span>
        </button>
        <div class="toolbar-separator">Flächen</div>
        <button id="mode-area" class="tool-btn" title="Viereck zeichnen (R)">
          <svg viewBox="0 0 24 24"><path d="M3,3v18h18V3H3z M19,19H5V5h14V19z"></path></svg
          ><span>Viereck</span>
        </button>
        <button id="mode-square" class="tool-btn" title="Quadrat zeichnen">
          <svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="1" ry="1" /></svg
          ><span>Quadrat</span>
        </button>
        <button id="mode-polygon" class="tool-btn" title="Polygon zeichnen (P)">
          <svg viewBox="0 0 24 24">
            <path
              d="M12,2 L2,8 L2,16 L12,22 L22,16 L22,8 Z M4,9.6 L12,4.8 L20,9.6 L20,14.4 L12,19.2 L4,14.4 Z"
            ></path></svg
          ><span>Polygon</span>
        </button>
        <button id="mode-circle" class="tool-btn" title="Kreis zeichnen (C)">
          <svg viewBox="0 0 24 24">
            <path
              d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 S16.4,20,12,20z"
            ></path></svg
          ><span>Kreis</span>
        </button>
        <div class="toolbar-separator">Linien & Punkte</div>
        <button id="mode-line" class="tool-btn" title="Linie zeichnen (L)">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
            <line x1="3" y1="21" x2="21" y2="3"></line></svg
          ><span>Linie</span>
        </button>
        <button id="mode-arc" class="tool-btn" title="Bogen zeichnen">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
            <path d="M3,21 C10,21 14,3 21,3"></path></svg
          ><span>Bogen</span>
        </button>
        <button id="mode-door" class="tool-btn" title="Tür platzieren">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
            <rect x="5" y="4" width="14" height="16" rx="1" ry="1"></rect>
            <path d="M12 12h7"></path>
          </svg>
          <span>Tür</span>
        </button>
        <button id="mode-point" class="tool-btn" title="Punkt setzen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
            ></path></svg
          ><span>Punkt</span>
        </button>
      </div>
      <div id="element-options" style="display: none">
        <hr />
        <!-- Element Typ wählen -->
        <label for="element-type-select" class="form-label-large">Element-Typ</label>
        <select id="element-type-select" style="width: 100%"></select>

        <!-- Schrift-Einstellungen für neue Elemente -->
        <button id="manage-types-btn" class="action-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M21 19v-2H3v2h18zM3 5v2h18V5H3zm12 6c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z"
            ></path>
          </svg>
          <span>Typen verwalten...</span>
        </button>
      </div>

      <section
        id="properties-panel"
        class="toolbar-section"
        style="display: none; padding: 0; margin-top: 1rem"
      >
        <h2 class="toolbar-header">Eigenschaften <span>▼</span></h2>
        <div class="toolbar-content">
          <div id="properties-content" style="display: none">
            <label for="properties-label-input"></label>
            <input type="text" id="properties-label-input" placeholder="" />
            <label for="properties-type-select" style="margin-top: 0.75rem"></label>
            <select id="properties-type-select"></select>
            <label class="checkbox-label" style="margin-top: 0.75rem">
              <input type="checkbox" id="properties-is-empty-checkbox" />
              <span>Leere Fläche (Lichthof/Stiegenhaus)</span>
            </label>
            <div id="beacon-fields" style="margin-top: 0.75rem; display: none">
              <h4 class="form-subtitle" id="beacon-fields-title"></h4>
              <!-- Name (via Standard Label Field) ist oben -->
              
              <label for="beacon-serial-input" class="form-label-large" style="margin-top: 0.5rem"></label>
              <input type="text" id="beacon-serial-input" placeholder="" />

              <!-- Installation -->
              <label for="beacon-installation-input" class="form-label-large" style="margin-top: 0.5rem"></label>
              <input type="date" id="beacon-installation-input" placeholder="" />

              <!-- Note DE -->
              <label for="beacon-note-de-input" class="form-label-large" style="margin-top: 0.5rem"></label>
              <input type="text" id="beacon-note-de-input" placeholder="" />

              <!-- Range (Keep visible for heatmap logic, but maybe put at bottom) -->
              <label for="beacon-range-input" class="form-label-large" style="margin-top: 0.5rem"></label>
              <input type="text" inputmode="numeric" pattern="[0-9]*" id="beacon-range-input" placeholder="" />

              <!-- Aktivierungszeit -->
              <h5 id="beacon-activation-label" class="form-subtitle" style="margin-top: 0.75rem">Aktivierungszeit</h5>
              <div style="display:grid; grid-template-columns: 1fr; gap:.5rem">
                <label for="beacon-activation-start-date" id="beacon-activation-start-date-label">Startdatum</label>
                <input type="date" id="beacon-activation-start-date" />
                <label for="beacon-activation-start-time" id="beacon-activation-start-time-label">von</label>
                <input type="time" id="beacon-activation-start-time" />
                <label for="beacon-activation-end-date" id="beacon-activation-end-date-label">Enddatum</label>
                <input type="date" id="beacon-activation-end-date" />
                <label for="beacon-activation-end-time" id="beacon-activation-end-time-label">bis</label>
                <input type="time" id="beacon-activation-end-time" />
              </div>

              <!-- Hidden Technical Fields -->
              <div style="display:none">
                <label for="beacon-uuid-input"></label>
                <input type="text" id="beacon-uuid-input" placeholder="" />
                <label for="beacon-major-input"></label>
                <input type="number" id="beacon-major-input" placeholder="" />
                <label for="beacon-minor-input"></label>
                <input type="number" id="beacon-minor-input" placeholder="" />
                <label for="beacon-note-en-input"></label>
                <input type="text" id="beacon-note-en-input" placeholder="" />
              </div>
            </div>
            <label for="properties-description-input" style="margin-top: 0.75rem"></label>
            <input type="text" id="properties-description-input" placeholder="" />
            <label for="properties-opening-hours-input" style="margin-top: 0.5rem"></label>
            <div style="display:flex; gap:.5rem; align-items:center">
              <input type="text" id="properties-opening-hours-input" placeholder="" readonly />
              <button id="open-opening-hours-modal-btn" class="mini-btn">Öffnungszeiten…</button>
            </div>
            <label for="properties-room-number-input" style="margin-top: 0.5rem"></label>
            <input type="text" id="properties-room-number-input" placeholder="" />
            <label for="properties-designation-select" style="margin-top: 0.5rem"></label>
            <select id="properties-designation-select">
              <option value="corridor">Korridor</option>
              <option value="office">Office/Büro</option>
              <option value="toilette">Toilette</option>
              <option value="store">Geschäft</option>
              <option value="bibliothek">Bibliothek</option>
              <option value="storage">Storage/Lager</option>
              <option value="lehrererraum">Lehrererraum</option>
              <option value="klassenraum">Klassenraum</option>
            </select>
            <div style="display:flex; gap:.5rem; margin-top:.5rem; align-items:center">
              <button id="open-occupancy-modal-btn" class="mini-btn">Besetzungszeiten…</button>
            </div>
          </div>
          <p id="properties-placeholder">Kein Element ausgewählt.</p>
        </div>
      </section>
    </div>
  </section>

  <section class="toolbar-section" id="view-layers-controls">
    <h2 class="toolbar-header">Ansicht & Layer <span>▼</span></h2>
    <div class="toolbar-content">
      <div class="toolbar-separator" id="view-grid-sep">Raster</div>
      <label class="checkbox-label"
        ><input type="checkbox" id="toggleGridBtn" checked /> <span>Raster anzeigen</span></label
      >
      <label class="checkbox-label"
        ><input type="checkbox" id="toggleSnapBtn" checked />
        <span>Am Raster ausrichten</span></label
      >
      <div class="grid-control">
        <label for="gridSizeInput">Größe:</label>
        <div class="grid-steppers">
          <button id="gridMinusBtn" class="mini-btn" title="kleiner">−</button>
          <input type="number" id="gridSizeInput" value="40" min="5" step="5" />
          <button id="gridPlusBtn" class="mini-btn" title="größer">+</button>
        </div>
      </div>
      <div class="grid-control">
        <label id="gridMetersLabel" style="display:none"></label>
      </div>
      <div class="unit-hint" id="gridInfo">1 Kasten ≈ 40 px</div>
      <div class="button-group">
        <button id="mode-calibrate" title="Maßstab kalibrieren: Start- und Endpunkt klicken">
          <span>Kalibrieren</span>
        </button>
      </div>
      <div class="toolbar-separator" id="view-layers-sep">Layer</div>
      <label class="checkbox-label"
        ><input type="checkbox" class="layer-toggle" data-layer="area" checked />
        <span>Flächen</span></label
      >
      <label class="checkbox-label"
        ><input type="checkbox" class="layer-toggle" data-layer="path" checked />
        <span>Wege/Linien</span></label
      >
      <label class="checkbox-label"
        ><input type="checkbox" class="layer-toggle" data-layer="point" checked />
        <span>Punktelemente</span></label
      >
      <div class="toolbar-separator" id="dimensions-sep">Maße</div>
      <label class="checkbox-label"
        ><input type="checkbox" id="toggleAreaDimensions" />
        <span>Kantenlängen anzeigen</span></label
      >
      <label class="checkbox-label"
        ><input type="checkbox" id="toggleAreaAngles" />
        <span>Eckenwinkel anzeigen</span></label
      >
      <label class="checkbox-label"
        ><input type="checkbox" id="togglePathLengths" />
        <span>Linienlängen anzeigen</span></label
      >
      <label class="checkbox-label"
        ><input type="checkbox" id="toggleCircleRadius" />
        <span>Radius anzeigen (Kreise)</span></label
      >
      <label class="checkbox-label" style="margin-top:8px"
        ><input type="checkbox" id="toggleBeaconRing" />
        <span>Signal‑Simulation anzeigen</span></label
      >
    </div>
  </section>
  <section class="toolbar-section">
    <div class="toolbar-content">
      <button id="show3DViewBtn" class="action-btn" title="3D-Vorschau öffnen">
        <span>3D-Vorschau</span>
      </button>
    </div>
  </section>
  </div>
</aside>
`,Bl=`<aside id="backstage-panel" class="backstage-panel">
  <div class="backstage-header">
    <button id="backstage-close-btn" title="Zurück zur Hauptansicht">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </svg>
    </button>
    <div id="backstage-title" class="backstage-title"></div>
  </div>

  <div id="backstage-file-content" class="backstage-content">
    <ul>
      <li>
        <button id="newProjectBtn" title="Neues Projekt erstellen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"
            ></path></svg
          ><span>Neues Projekt</span>
        </button>
      </li>
      <li>
        <button
          id="loadProjectBtn"
          title="Projektdatei laden"
          onclick="document.getElementById('loadProjectInput').click()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10z"
            ></path></svg
          ><span>Projekt laden</span>
        </button>
      </li>
      <li>
        <button id="saveProjectBtn" title="Projekt speichern">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
            ></path></svg
          ><span>Projekt speichern</span>
        </button>
      </li>
      <li>
        <button id="loadProjectFromServerBtn" title="Vom Server laden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5 20h14v-2H5v2zm7-18L5 9h4v4h4V9h4l-6-7z"></path>
          </svg>
          <span>Vom Server laden</span>
        </button>
      </li>
      <div id="server-load-panel" class="server-load-panel hidden">
        <div class="server-load-row">
          <label for="serverProjectSelect" id="serverProjectLabel">Projekt</label>
          <select id="serverProjectSelect"></select>
          <button id="serverRefreshBtn" title="Aktualisieren" class="icon-only">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 6V3L8 7l4 4V8c2.76 0 5 2.24 5 5 0 1.27-.48 2.43-1.27 3.31l1.46 1.46C18.1 16.63 19 14.93 19 13c0-3.87-3.13-7-7-7zm-5.73.69L4.81 5.23C3.9 6.1 3 7.8 3 9.73c0 3.87 3.13 7 7 7v3l4-4-4-4v3c-2.76 0-5-2.24-5-5 0-1.27.48-2.43 1.27-3.31z"></path>
            </svg>
          </button>
        </div>
        <div class="server-load-row">
          <div class="server-row-actions">
            <button id="serverProjectAddBtn" title="Hinzufügen" class="btn-compact">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
              </svg>
              <span>Hinzufügen</span>
            </button>
            <button id="serverProjectDeleteBtn" title="Löschen" class="btn-compact btn-danger">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6 7h12M9 7V5h6v2M7 7l1 12h8l1-12" fill="currentColor"/>
              </svg>
              <span>Löschen</span>
            </button>
          </div>
        </div>
        <div class="server-load-row">
          <label for="serverVersionSelect" id="serverVersionLabel">Version</label>
          <select id="serverVersionSelect"></select>
          <button id="serverVersionRefreshBtn" title="Aktualisieren" class="icon-only">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 6V3L8 7l4 4V8c2.76 0 5 2.24 5 5 0 1.27-.48 2.43-1.27 3.31l1.46 1.46C18.1 16.63 19 14.93 19 13c0-3.87-3.13-7-7-7zm-5.73.69L4.81 5.23C3.9 6.1 3 7.8 3 9.73c0 3.87 3.13 7 7 7v3l4-4-4-4v3c-2.76 0-5-2.24-5-5 0-1.27.48-2.43 1.27-3.31z"></path>
            </svg>
          </button>
        </div>
        <div class="server-load-row">
          <div id="serverSaveHint" class="server-save-hint"></div>
        </div>
        <div class="server-load-row">
          <div class="server-row-actions">
            <button id="serverLoadBtn" title="Laden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5 20h14v-2H5v2zm7-18L5 9h4v4h4V9h4l-6-7z"></path>
              </svg>
              <span>Laden</span>
            </button>
            <button id="serverLoadLatestBtn" title="Neueste Version laden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 4l-4 4h3v4h2V8h3l-4-4zM6 14h12v2H6v-2z"></path>
              </svg>
              <span>Neueste Version</span>
            </button>
            <button id="serverSavePanelBtn" title="Speichern">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>
              </svg>
              <span>Speichern</span>
            </button>
          </div>
        </div>
        <div class="server-load-row">
          <div class="server-row-actions">
            <button id="serverVersionAddBtn" title="Hinzufügen" class="btn-compact">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
              </svg>
              <span>Hinzufügen</span>
            </button>
            <button id="serverVersionDeleteBtn" title="Löschen" class="btn-compact btn-danger">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6 7h12M9 7V5h6v2M7 7l1 12h8l1-12" fill="currentColor"/>
              </svg>
              <span>Löschen</span>
            </button>
          </div>
        </div>
      </div>
      <li>
        <button id="saveProjectToServerBtn" title="Zum Server speichern">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
          </svg>
          <span>Zum Server speichern</span>
        </button>
      </li>
      <li>
        <button id="Einleitung" title="Kurze Einführung anzeigen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <path d="M11 7h2v2h-2zm0 4h2v6h-2z" fill="#fff" /></svg
          ><span>Einleitung</span>
        </button>
      </li>
      <li>
        <button id="imprintBtn" title="Impressum">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M11 7h2v2h-2zm0 4h2v6h-2z" />
          </svg>
          <span data-i18n="imprint">Impressum</span>
        </button>
      </li>
      <li>
        <button id="contactBtn" title="Kontakt">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <span data-i18n="contact">Kontakt</span>
        </button>
      </li>
      <li>
        <button id="privacyBtn" title="Datenschutz">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          </svg>
          <span data-i18n="privacy">Datenschutz</span>
        </button>
      </li>
      <li>
        <button id="sponsorsBtn" title="Sponsoren">
          <span data-i18n="sponsorsButtonTitle">Sponsoren</span>
        </button>
      </li>
    </ul>
    
    <div class="sponsor-footer">
      <p data-i18n="sponsoredByMinew">Gesponsert von MINEW</p>
    </div>
  </div>

  <div id="backstage-output-content" class="backstage-content">
    <ul>
      <li>
        <button id="exportGeoJsonBtn" title="Projekt als GeoJSON exportieren">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg
          ><span>GeoJSON exportieren</span>
        </button>
      </li>
      <li>
        <button id="showGeoJsonBtn" title="Live-GeoJSON anzeigen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
            ></path></svg
          ><span>Live Code anzeigen</span>
        </button>
      </li>
    </ul>
    <div class="code-view-wrapper">
      <pre id="live-geojson-output"></pre>
    </div>
  </div>

  <div id="backstage-overview-content" class="backstage-content">
    <div id="overview-stats-panel"></div>
    <div id="overview-floor-list"></div>
  </div>
</aside>
`,Cl=`<div id="info-modal" class="modal hidden">
  <div class="modal-overlay"></div>
  <div class="modal-content">
    <button id="info-modal-close-btn" class="modal-close-btn">&times;</button>
    <h2></h2>
    <p></p>
    <div id="intro-logo-wrapper" style="display: none; text-align: center; margin-bottom: 0.5rem">
      <img
        id="intro-logo"
        alt="Logo"
        src="assets/company_logo.png"
        style="height: 64px; width: auto; filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2))"
      />
    </div>
    <div id="intro-logo-row" class="intro-logos" style="display: none"></div>
    <div id="intro-content"></div>
  </div>
</div>

<div id="type-manager-modal" class="modal hidden">
  <div class="modal-overlay"></div>
  <div class="modal-content" style="max-width: 650px">
    <button id="type-manager-close-btn" class="modal-close-btn">&times;</button>
    <h2></h2>
    <div style="display: flex; gap: 1.5rem; margin-top: 1rem; min-height: 350px">
      <div
        style="
          flex: 1;
          border-right: 1px solid var(--color-border);
          padding-right: 1.5rem;
          display: flex;
          flex-direction: column;
        "
      >
        <h4></h4>
        <ul
          id="type-manager-list"
          style="
            list-style: none;
            padding: 0;
            max-height: 300px;
            overflow-y: auto;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            flex-grow: 1;
          "
        ></ul>
        <button
          id="type-manager-new-btn"
          style="width: 100%; margin-top: 1rem; justify-content: center"
        >
          + Neuer Typ
        </button>
      </div>
      <div id="type-manager-details" style="flex: 2">
        <div id="type-manager-details-content" class="hidden">
          <label for="type-name-input"></label>
          <input type="text" id="type-name-input" style="width: 100%" placeholder="" />

          <!-- SCHRIFT-STIL GRUPPE -->
          <div id="type-editor-text-settings">
            <hr style="margin: 1.5rem 0 0.5rem 0" />
            <h5
              id="type-text-style-header"
              style="margin: 0 0 0.5rem 0; color: var(--color-primary)"
            ></h5>
            <div
              style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; align-items: center"
            >
              <div>
                <label for="type-font-size-input"></label>
                <input
                  type="number"
                  id="type-font-size-input"
                  min="8"
                  max="32"
                  step="1"
                  style="width: 100%"
                />
              </div>
              <div>
                <label for="type-font-color-input"></label>
                <input
                  type="color"
                  id="type-font-color-input"
                  style="
                    width: 100%;
                    height: 40px;
                    padding: 0;
                    border: none;
                    background: none;
                    cursor: pointer;
                  "
                />
              </div>
            </div>
          </div>

          <!-- FLÄCHEN-STIL GRUPPE -->
          <div id="type-editor-area">
            <hr style="margin: 1.5rem 0 0.5rem 0" />
            <h5
              id="type-area-style-header"
              style="margin: 0 0 0.5rem 0; color: var(--color-primary)"
            ></h5>
            <div
              style="
                display: grid;
                grid-template-columns: 1fr 50px;
                gap: 1rem;
                align-items: center;
                margin-top: 1rem;
              "
            >
              <div>
                <label for="type-fill-color-input"></label>
                <input
                  type="color"
                  id="type-fill-color-input"
                  style="
                    width: 100%;
                    height: 40px;
                    padding: 0;
                    border: none;
                    background: none;
                    cursor: pointer;
                  "
                />
              </div>
              <div
                id="type-fill-color-swatch"
                title=""
                style="
                  width: 40px;
                  height: 40px;
                  border: 1px solid var(--color-border);
                  border-radius: var(--radius-sm);
                "
              ></div>
            </div>
            <label
              for="type-fill-opacity-slider"
              style="display: block; margin-top: 0.5rem"
            ></label>
            <input
              type="range"
              id="type-fill-opacity-slider"
              min="0"
              max="1"
              step="0.05"
              style="width: 100%"
            />
            <div
              style="
                display: grid;
                grid-template-columns: 1fr 50px;
                gap: 1rem;
                align-items: center;
                margin-top: 1rem;
              "
            >
              <div>
                <label for="type-stroke-color-input"></label>
                <input
                  type="color"
                  id="type-stroke-color-input"
                  style="
                    width: 100%;
                    height: 40px;
                    padding: 0;
                    border: none;
                    background: none;
                    cursor: pointer;
                  "
                />
              </div>
              <div
                id="type-stroke-color-swatch"
                title=""
                style="
                  width: 40px;
                  height: 40px;
                  border: 1px solid var(--color-border);
                  border-radius: var(--radius-sm);
                "
              ></div>
            </div>
          </div>

          <!-- PUNKT-STIL GRUPPE -->
          <div id="type-editor-point">
            <hr style="margin: 1.5rem 0 0.5rem 0" />
            <h5
              id="type-point-style-header"
              style="margin: 0 0 0.5rem 0; color: var(--color-primary)"
            ></h5>
            <label style="display: block; margin-top: 1rem"></label>
            <div
              id="type-icon-library"
              style="
                display: grid;
                grid-template-columns: repeat(auto-fill, 40px);
                gap: 8px;
                max-height: 150px;
                overflow-y: auto;
                border: 1px solid var(--color-border);
                padding: 8px;
                border-radius: var(--radius-sm);
              "
            ></div>
            <label for="type-icon-color-input" style="display: block; margin-top: 1rem"></label>
            <input type="color" id="type-icon-color-input" style="width: 100%" />
          </div>

          <div id="type-preview" class="type-preview hidden">
            <hr style="margin: 1.5rem 0 0.5rem 0" />
            <h5
              id="type-preview-header"
              style="margin: 0 0 0.5rem 0; color: var(--color-primary)"
            ></h5>
            <div id="type-preview-area" class="type-preview__area">
              <div id="type-preview-area-rect">
                <span id="type-preview-area-label">Sample area</span>
              </div>
            </div>
            <div id="type-preview-point" class="type-preview__point">
              <div id="type-preview-point-icon"></div>
              <span id="type-preview-point-label">Sample point</span>
            </div>
          </div>

          <button id="type-manager-delete-btn" class="danger" style="margin-top: 2rem">
            Typ löschen
          </button>
        </div>
        <p id="type-manager-placeholder">
          Wählen Sie links einen Typ aus oder erstellen Sie einen neuen.
        </p>
      </div>
    </div>
    <div
      style="
        text-align: right;
        margin-top: 2rem;
        border-top: 1px solid var(--color-border);
        padding-top: 1rem;
      "
    >
      <button id="type-manager-save-btn">Änderungen übernehmen & schließen</button>
    </div>
  </div>
</div>

<div id="new-type-choice-modal" class="modal hidden">
  <div class="modal-overlay"></div>
  <div class="modal-content" style="max-width: 400px">
    <h4>Neuen Element-Typ erstellen</h4>
    <p>Wählen Sie den Basis-Typ aus:</p>
    <div style="display: flex; gap: 1rem; margin-top: 1rem">
      <button id="choose-type-area" style="flex: 1; justify-content: center">Fläche</button>
      <button id="choose-type-point" style="flex: 1; justify-content: center">Punkt</button>
    </div>
    <button
      id="new-type-choice-cancel"
      style="width: 100%; margin-top: 1rem; background-color: var(--color-secondary)"
    >
      Abbrechen
    </button>
  </div>
</div>
<div id="context-menu" class="context-menu">
  <ul>
    <li id="ctx-menu-rename">Umbenennen...</li>
    <li id="ctx-menu-copy">Kopieren</li>
    <li id="ctx-menu-delete" class="danger">Löschen</li>
    <li class="separator"></li>
    <li class="has-submenu">
      Typ ändern
      <ul id="ctx-menu-type-submenu" class="submenu"></ul>
    </li>
    <li id="ctx-menu-toggle-accessibility">Barrierefreiheit umschalten</li>
    <li id="ctx-menu-edit-contents">Rauminhalt bearbeiten...</li>
    <li id="ctx-menu-edit-opening-hours">Öffnungszeiten bearbeiten...</li>
    <li id="ctx-menu-edit-occupancy">Besetzungszeiten bearbeiten...</li>
    <li class="separator"></li>
    <li id="ctx-menu-add-overlap-point">Punkt im Schnittbereich setzen</li>
    <li class="has-submenu">
      Etage
      <ul id="ctx-floor-submenu" class="submenu">
        <li id="ctx-floor-add">Hinzufügen...</li>
        <li id="ctx-floor-rename">Umbenennen...</li>
      </ul>
    </li>
  </ul>
</div>

<div id="input-prompt-modal" class="modal hidden">
  <div class="modal-overlay"></div>
  <div class="modal-content" style="max-width: 420px">
    <h4 id="input-prompt-label"></h4>
    <input id="input-prompt-input" type="text" class="modal-input" />
    <div class="modal-actions">
      <button id="input-prompt-ok" class="btn-primary">OK</button>
      <button id="input-prompt-cancel">Abbrechen</button>
    </div>
  </div>
</div>

<div id="confirm-modal" class="modal hidden">
  <div class="modal-overlay"></div>
  <div class="modal-content" style="max-width: 420px">
    <p id="confirm-message"></p>
    <div class="modal-actions">
      <button id="confirm-ok" class="btn-primary">OK</button>
      <button id="confirm-cancel">Abbrechen</button>
    </div>
  </div>
</div>

<!-- Lade-/Status-Modal -->
<div id="loading-modal" class="modal hidden">
  <div class="modal-overlay"></div>
  <div class="modal-content" style="max-width: 420px; text-align: center">
    <div class="spinner" aria-hidden="true"></div>
    <p id="loading-message" style="margin-top: 0.75rem"></p>
    <div class="modal-actions" style="justify-content: center">
      <button id="loading-ok" class="btn-primary">OK</button>
    </div>
  </div>
</div>
<div id="room-contents-modal" class="modal hidden">
  <div class="modal-overlay"></div>
  <div class="modal-content" style="max-width: 420px">
    <h4 id="room-contents-title">Rauminhalt</h4>
    <div id="room-contents-list" style="margin: 0.5rem 0; max-height: 240px; overflow-y: auto; border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 0.5rem;">
    </div>
    <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
      <input id="room-contents-new-item" type="text" placeholder="Eintrag hinzufügen..." style="flex: 1;" />
      <button id="room-contents-add-btn" class="btn-primary">+</button>
    </div>
    <div class="modal-actions" style="margin-top: 0.75rem">
      <button id="room-contents-save" class="btn-primary">OK</button>
      <button id="room-contents-cancel">Abbrechen</button>
    </div>
  </div>
</div>
<div id="occupancy-modal" class="modal hidden">
  <div class="modal-overlay"></div>
  <div class="modal-content" style="max-width: 520px">
    <h4 id="occupancy-title">Besetzungszeiten</h4>
    <div id="occupancy-list" style="margin: 0.5rem 0; max-height: 240px; overflow-y: auto; border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 0.5rem;"></div>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem;">
      <label for="occupancy-type" id="occupancy-type-label">Art</label>
      <select id="occupancy-type">
        <option value="weekday">Wochentag</option>
        <option value="date">Kalendertag</option>
        <option value="range">Zeitraum</option>
      </select>
      <label for="occupancy-weekday" id="occupancy-weekday-label">Wochentag</label>
      <select id="occupancy-weekday">
        <option value="1">Mo</option>
        <option value="2">Di</option>
        <option value="3">Mi</option>
        <option value="4">Do</option>
        <option value="5">Fr</option>
        <option value="6">Sa</option>
        <option value="0">So</option>
      </select>
      <label for="occupancy-date" id="occupancy-date-label">Kalendertag</label>
      <input id="occupancy-date" type="date" />
      <label for="occupancy-start" id="occupancy-start-label">von</label>
      <input id="occupancy-start" type="time" />
      <label for="occupancy-end" id="occupancy-end-label">bis</label>
      <input id="occupancy-end" type="time" />
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem;">
      <label for="occupancy-range-start" id="occupancy-range-start-label">Zeitraum von</label>
      <input id="occupancy-range-start" type="date" />
      <label for="occupancy-range-end" id="occupancy-range-end-label">Zeitraum bis</label>
      <input id="occupancy-range-end" type="date" />
    </div>
    <div style="display:flex; gap:.5rem; margin-top:.5rem">
      <label for="occupancy-note" id="occupancy-note-label" style="align-self:center">Notiz</label>
      <input id="occupancy-note" type="text" placeholder="Notiz..." style="flex:1" />
      <button id="occupancy-add-btn" class="btn-primary">Hinzufügen</button>
    </div>
    <div class="modal-actions" style="margin-top: 0.75rem">
      <button id="occupancy-save" class="btn-primary">OK</button>
      <button id="occupancy-cancel">Abbrechen</button>
    </div>
  </div>
</div>

<div id="opening-hours-modal" class="modal hidden">
  <div class="modal-overlay"></div>
  <div class="modal-content" style="max-width: 560px">
    <h4 id="opening-hours-title">Öffnungszeiten</h4>
    <h5 id="opening-hours-weekly-label" style="margin-top:.5rem">Wochentage</h5>
    <div id="opening-hours-weekly-list" style="max-height: 180px; overflow:auto; border:1px solid var(--color-border); border-radius: var(--radius-sm); padding:.5rem"></div>
    <div style="display:flex; flex-direction:column; gap:.5rem; margin-top:.5rem">
      <label for="opening-hours-weekday" id="opening-hours-weekday-label">Wochentag</label>
      <select id="opening-hours-weekday">
        <option value="1">Mo</option>
        <option value="2">Di</option>
        <option value="3">Mi</option>
        <option value="4">Do</option>
        <option value="5">Fr</option>
        <option value="6">Sa</option>
        <option value="0">So</option>
      </select>
      <label for="opening-hours-start" id="opening-hours-start-label">von</label>
      <input id="opening-hours-start" type="time" />
      <label for="opening-hours-end" id="opening-hours-end-label">bis</label>
      <input id="opening-hours-end" type="time" />
    </div>
    <button id="opening-hours-add-rule" class="btn-primary" style="margin-top:.5rem">Regel hinzufügen</button>

    <h5 id="opening-hours-exceptions-label" style="margin-top:.75rem">Ausnahmen</h5>
    <div id="opening-hours-exceptions-list" style="max-height: 180px; overflow:auto; border:1px solid var(--color-border); border-radius: var(--radius-sm); padding:.5rem"></div>
    <div style="display:flex; flex-direction:column; gap:.5rem; margin-top:.5rem">
      <label for="opening-hours-ex-date" id="opening-hours-ex-date-label">Kalendertag</label>
      <input id="opening-hours-ex-date" type="date" />
      <label for="opening-hours-ex-start" id="opening-hours-ex-start-label">von</label>
      <input id="opening-hours-ex-start" type="time" />
      <label for="opening-hours-ex-end" id="opening-hours-ex-end-label">bis</label>
      <input id="opening-hours-ex-end" type="time" />
    </div>
    <button id="opening-hours-add-exception" class="btn-primary" style="margin-top:.5rem">Ausnahme hinzufügen</button>

    <h5 id="opening-hours-ranges-label" style="margin-top:.75rem">Zeitspanne</h5>
    <div id="opening-hours-ranges-list" style="max-height: 120px; overflow:auto; border:1px solid var(--color-border); border-radius: var(--radius-sm); padding:.5rem"></div>
    <div style="display:flex; flex-direction:column; gap:.5rem; margin-top:.5rem">
      <label for="opening-hours-range-start" id="opening-hours-range-start-label">Zeitraum von</label>
      <input id="opening-hours-range-start" type="date" />
      <label for="opening-hours-range-end" id="opening-hours-range-end-label">Zeitraum bis</label>
      <input id="opening-hours-range-end" type="date" />
      <label for="opening-hours-range-time-start" id="opening-hours-range-time-start-label">von</label>
      <input id="opening-hours-range-time-start" type="time" />
      <label for="opening-hours-range-time-end" id="opening-hours-range-time-end-label">bis</label>
      <input id="opening-hours-range-time-end" type="time" />
    </div>
    <button id="opening-hours-add-range" class="btn-primary" style="margin-top:.5rem">Zeitraum hinzufügen</button>
    <div class="modal-actions" style="margin-top: 0.75rem">
      <button id="opening-hours-save" class="btn-primary">OK</button>
      <button id="opening-hours-cancel">Abbrechen</button>
    </div>
  </div>
</div>
<!-- Unified Date Picker root -->
<div id="imd-date-picker" class="imd-date-picker" aria-hidden="true">
  <div class="imd-date-picker__header">
    <button type="button" id="imd-dp-prev" aria-label="Prev">‹</button>
    <div class="imd-date-picker__month" id="imd-dp-month"></div>
    <button type="button" id="imd-dp-next" aria-label="Next">›</button>
  </div>
  <div class="imd-date-picker__grid" id="imd-dp-grid">
    <!-- populated dynamically -->
  </div>
  <div class="imd-date-picker__footer">
    <button type="button" id="imd-dp-clear"></button>
    <button type="button" id="imd-dp-today" class="primary"></button>
  </div>
  <input id="imd-dp-target" type="hidden" />
</div>
`;function Ll(){const t=document.getElementById("toolbar-container"),o=document.getElementById("backstage-container"),n=document.getElementById("modals-container");t&&(t.innerHTML=Pl),o&&(o.innerHTML=Bl),n&&(n.innerHTML=Cl)}document.addEventListener("DOMContentLoaded",()=>{Ll(),setTimeout(async()=>{const o=location.pathname.match(/^\/(floor|etage)\/(.+)$/);if(o){try{await ie.probeBackend()}catch{}Gr();const s=decodeURIComponent(o[2]);e.activeFloorId=s;try{const g=(location.hash||"").match(/#proj=([^&]+)/);if(g&&g[1]){const E=decodeURIComponent(g[1]),I=decodeURIComponent(escape(atob(E))),k=JSON.parse(I);Ne(k)}}catch{}try{if(!e.project?.features?.length){const S=sessionStorage.getItem("imd_editor_project");if(S){const g=JSON.parse(S);Ne(g)}}}catch{}try{const S=localStorage.getItem("imd_editor_project");if(S){const g=JSON.parse(S);Ne(g)}}catch{}const i=document.querySelector(".app-header");i&&(i.style.display="none");const r=document.getElementById("toolbar-container");r&&(r.style.display="none");const l=document.getElementById("backstage-container");l&&(l.style.display="none");const c=document.getElementById("page-scrollbar-y");c&&(c.style.display="none");const d=document.querySelector(".canvas-wrapper");d&&(d.style.display="none");const m=document.getElementById("floor3DView");m&&(m.style.display="flex",m.style.height="100vh",m.style.width="100vw"),e.threeDPan={x:50,y:50},e.threeDScale=.8;const v=await nt(()=>import("./3d-D_Rxwher.js"),__vite__mapDeps([0,1])),f=await nt(()=>import("./floor3D-DqIwNvyl.js"),[]);v.setup3DViewControls(),v.update3DFloorSelector(),f.render3DFloorStack(e.project,"floor3DContent");const h=document.getElementById("floor3DView");h&&(h.style.cursor="grab",h.addEventListener("mousedown",v.start3DDrag),h.addEventListener("mousemove",v.do3DDrag),h.addEventListener("mouseup",v.stop3DDrag),h.addEventListener("mouseleave",v.stop3DDrag),h.addEventListener("wheel",v.handle3DZoom,{passive:!1})),window.addEventListener("storage",async S=>{if(S.key==="imd_editor_project"&&S.newValue)try{const g=JSON.parse(S.newValue);Ne(g),(await nt(()=>import("./floor3D-DqIwNvyl.js"),[])).render3DFloorStack(e.project,"floor3DContent")}catch{}})}else{Gr(),vs();try{await ie.probeBackend()}catch{}N(),console.log("IMD Editor erfolgreich initialisiert.")}const n=300*1e3;setInterval(async()=>{if(ie.isAvailable())try{await Jr(e.currentServerProjectId,e.currentServerVersion)}catch{}try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}},n)},0)});export{Me as a,me as b,Tt as c,a as g,e as s,ae as u};
