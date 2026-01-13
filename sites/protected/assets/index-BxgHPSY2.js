const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/3d-CatqN8zU.js","assets/floor3D-Bgv6vfVy.js"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Mi="modulepreload",Ti=function(t){return"/"+t},qo={},Ne=function(o,n,r){let i=Promise.resolve();if(n&&n.length>0){let d=function(g){return Promise.all(g.map(E=>Promise.resolve(E).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");i=d(n.map(g=>{if(g=Ti(g),g in qo)return;qo[g]=!0;const E=g.endsWith(".css"),f=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${f}`))return;const h=document.createElement("link");if(h.rel=E?"stylesheet":Mi,E||(h.as="script"),h.crossOrigin="",h.href=g,c&&h.setAttribute("nonce",c),document.head.appendChild(h),E)return new Promise((w,x)=>{h.addEventListener("load",w),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${g}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return i.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return o().catch(s)})};let Fr="en";function p(t,o){return{de:t,en:o}}const Ge={file:p("Datei","File"),output:p("Ausgabe","Output"),overview:p("Übersicht","Overview"),darkMode:p("Dunkles Thema","Dark Theme"),lightMode:p("Helles Thema","Light Theme"),backToApp:p("Zurück zur Anwendung","Back to Application"),filePanelTitle:p("Datei","File"),newProject:p("Neues Projekt","New Project"),loadProject:p("Projekt laden","Load Project"),saveProject:p("Projekt speichern","Save Project"),loadFromServer:p("Vom Server laden","Load from Server"),saveToServer:p("Zum Server speichern","Save to Server"),newProjectOption:p("(Neues Projekt)","(New Project)"),newVersionOption:p("(Neue Version)","(New Version)"),introduction:p("Einleitung","Introduction"),serverProject:p("Projekt","Project"),serverVersion:p("Version","Version"),refresh:p("Aktualisieren","Refresh"),load:p("Laden","Load"),latestVersion:p("Neueste Version","Latest Version"),save:p("Speichern","Save"),search:p("Suche","Search"),searchPlaceholder:p("Projekt suchen...","Search project..."),projectDetails:p("Projektdetails","Project Details"),detailId:p("ID:","ID:"),detailName:p("Name:","Name:"),detailLatest:p("Neueste Version:","Latest Version:"),detailFloorplans:p("Grundrisse:","Floorplans:"),detailCreated:p("Erstellt:","Created:"),detailUpdated:p("Aktualisiert:","Updated:"),confirmOverwriteVersion:p('Alte Version {1} von "{0}" überschreiben?','Overwrite old version {1} of "{0}"?'),add:p("Hinzufügen","Add"),deleteAction:p("Löschen","Delete"),confirmDeleteProject:p('Projekt "{0}" (# {1}) wirklich löschen? Dies entfernt alle Versionen.','Really delete project "{0}" (# {1})? This will remove all versions.'),confirmDeleteVersion:p('Version {1} von Projekt "{0}" (# {2}) löschen?','Delete version {1} of project "{0}" (# {2})?'),infoNewProject:p("Neues Projekt wird beim Speichern erstellt.","A new project will be created on save."),infoNewVersion:p("Neue Version wird beim Speichern erstellt.","A new version will be created on save."),saveTargetVersion:p('Speichern in Version {1} von "{0}".','Save into version {1} of "{0}".'),alertSelectVersionFirst:p("Bitte zuerst eine Version auswählen.","Please select a version first."),outputPanelTitle:p("Ausgabe","Output"),exportGeoJson:p("GeoJSON exportieren","Export GeoJSON"),showLiveCode:p("Live Code anzeigen","Show Live Code"),hideCode:p("Code ausblenden","Hide Code"),overviewPanelTitle:p("Projektübersicht","Project Overview"),unnamedProject:p("Unbenanntes Projekt","Unnamed Project"),stat_project:p("Projekt","Project"),stat_floors:p("Etagen","Floors"),stat_areas:p("Flächen","Areas"),stat_points:p("Punkte","Points"),overviewBeacons:p("Beacons","Beacons"),sponsoredBy:p("Gesponsert von","Sponsored by"),sponsoredByMinew:p("Gesponsert von MINEW","Sponsored by MINEW"),supportedByPalfinger:p("Unterstützt von PALFINGER","Supported by PALFINGER"),sponsorsButtonTitle:p("Sponsoren","Sponsors"),imprint:p("Impressum","Legal Notice"),contact:p("Kontakt","Contact"),privacy:p("Datenschutz","Privacy Policy"),project:p("Projekt","Project"),projectName:p("Projektname","Project Name"),enterProjectName:p("Projektname eingeben...","Enter project name..."),edit:p("Bearbeiten","Edit"),undo:p("Rückgängig","Undo"),redo:p("Wiederherstellen","Redo"),floors:p("Etagen","Floors"),currentFloor:p("Aktuelle Etage","Current Floor"),newFloor:p("Neue Etage","New Floor"),floorplan:p("Grundriss...","Floorplan..."),prompt_newFloorName:p("Name der neuen Etage:","Name of the new floor:"),renameFloor:p("Etage umbenennen","Rename Floor"),prompt_renameFloor:p('Neuen Namen für die Etage "{0}" eingeben:','Enter new name for floor "{0}":'),defaultFloorName:p("Standard-Etage","Default Floor"),tools:p("Werkzeuge","Tools"),pan:p("Bewegen","Pan"),select:p("Auswählen","Select"),moveElement:p("Verschieben","Move Element"),merge:p("Zusammenfügen","Merge"),scissors:p("Schere","Scissors"),delete:p("Löschen","Delete"),areas:p("Flächen","Areas"),rectangle:p("Viereck","Rectangle"),square:p("Quadrat","Square"),polygon:p("Polygon","Polygon"),circle:p("Kreis","Circle"),linesAndPoints:p("Linien & Punkte","Lines & Points"),line:p("Linie","Line"),arc:p("Bogen","Arc"),point:p("Punkt","Point"),calibrateScale:p("Kalibrieren","Calibrate"),calibratePrompt:p("Kalibrierung: Wählen Sie eine bestehende Kante oder zeichnen Sie eine Referenzlinie und geben Sie die reale Länge in Metern ein.","Calibration: Select an existing edge or draw a reference line, then enter the real length in meters."),calibratePromptShort:p("Kalibrierung: Geben Sie die reale Länge in Metern ein.","Calibration: enter the real length in meters."),elementType:p("Element-Typ","Element Type"),manageTypes:p("Typen verwalten...","Manage Types..."),newAreaType:p("Neue Fläche","New Area Type"),newPointType:p("Neuer Punkt","New Point Type"),lineLabel:p("Linie","Line"),arcLabel:p("Bogen","Arc"),defaultRoomLabel:p("Beispielraum","Sample Room"),customIndicatorSuffix:p(" (Benutzerdefiniert)"," (Custom)"),alert_selectAtLeastTwo:p("Bitte mindestens zwei Elemente auswählen.","Please select at least two elements."),alert_notEnoughPoints:p("Nicht genug Punkte für eine Fläche.","Not enough points for an area."),fontSettings:p("Schrift-Einstellungen","Font Settings"),fontSize:p("Schriftgröße","Font Size"),fontColor:p("Schriftfarbe","Font Color"),fontSizeDesc:p("Bestimmt die Schriftgröße für Beschriftungen dieses Typs.","Controls the label font size for this type."),fontColorDesc:p("Legt die Textfarbe der Beschriftung fest.","Defines the text color of the label."),optgroupAreas:p("Flächen","Areas"),optgroupPointElements:p("Punkt-Elemente","Point Elements"),optgroupConnectors:p("Konnektoren","Konnektoren"),properties:p("Eigenschaften","Properties"),beacon_parameters:p("Beacon Parameter","Beacon Parameters"),label:p("Bezeichnung","Label"),enterElementLabel:p("Bezeichnung des Elements...","Enter element label..."),noElementSelected:p("Kein Element ausgewählt.","No element selected."),viewAndLayers:p("Ansicht & Layer","View & Layers"),grid:p("Raster","Grid"),layers:p("Layer","Layers"),showGrid:p("Raster anzeigen","Show Grid"),snapToGrid:p("Am Raster ausrichten","Snap to Grid"),size:p("Größe:","Size:"),metersPerCell:p("Meter/Kasten:","Meters per cell:"),layersAreas:p("Flächen","Areas"),layersPaths:p("Wege/Linien","Paths/Lines"),layersPoints:p("Punktelemente","Point Elements"),preview3D:p("3D-Vorschau","3D Preview"),dimensions:p("Maße","Dimensions"),showEdgeLengths:p("Kantenlängen anzeigen","Show edge lengths"),showLineLengths:p("Linienlängen anzeigen","Show line lengths"),showCircleRadius:p("Radius anzeigen (Kreise)","Show radius (circles)"),showBeaconRangeRing:p("Signal‑Simulation anzeigen","Show signal simulation"),analysis:p("Analyse","Analysis"),simulateSignal:p("Signal simulieren","Simulate signal"),simulationOff:p("Simulation aus","Stop simulation"),welcomeTitle:p("Willkommen beim IMD Editor!","Welcome to IMD Editor!"),welcomeText:p("Dies ist ein Werkzeug zur Digitalisierung von Indoor-Karten.","This is a tool for digitizing indoor maps."),basicsTitle:p("Grundlagen der Bedienung:","Basic Operation:"),basicsTools:p("Werkzeuge: Wählen Sie links ein Werkzeug (z.B. Fläche, Punkt), um Elemente auf der Karte zu erstellen.","Tools: Select a tool on the left (e.g., Area, Point) to create elements on the map."),basicsZoom:p("Zoomen: Benutzen Sie das Mausrad, um in die Karte hinein- und herausuzoomen.","Zooming: Use the mouse wheel to zoom in and out of the map."),basicsPan:p("Verschieben der Ansicht: Halten Sie die mittlere Maustaste gedrückt und bewegen Sie die Maus, um die Kartenansicht zu verschieben.","Panning the view: Hold down the middle mouse button and move the mouse to pan the map view."),basicsMove:p("Elemente verschieben: Wählen Sie ein Element aus und ziehen Sie es mit der Maus an eine neue Position.","Move elements: Select an element and drag it with the mouse to a new position."),basicsSave:p('Speichern: Vergessen Sie nicht, Ihr Projekt über das "Datei"-Menü zu speichern.',`Saving: Don't forget to save your project via the "File" menu.`),intro_welcomeTitle:p("Willkommen im Editor!","Welcome to the Editor!"),intro_startText:p("Starten Sie, indem Sie Ihrem Projekt oben links einen Namen geben und rechts unter „Etagen“ einen Grundriss laden.","Start by giving your project a name in the top left and load a floor plan on the right under “Floors.”"),intro_sectionTitle:p("So bedienen Sie die Karte:","Map Controls"),intro_zoom:p("Zoomen: Drehen Sie das Mausrad.","Zoom: Scroll the mouse wheel."),intro_pan:p("Verschieben: Halten Sie das Mausrad gedrückt und bewegen Sie die Maus.","Pan: Hold down the mouse wheel and move the mouse."),intro_preview3d:p("3D-Vorschau: Nutzen Sie den Button unten links, um Ihr Modell räumlich zu sehen.","3D Preview: Use the button in the bottom left to view your model in 3D."),intro_draw_title:p("Zeichnen & Bearbeiten:","Drawing & Editing:"),intro_analysis_title:p("Analyse","Analysis"),intro_finishShape:p("Form beenden: Ein Doppelklick schließt eine gezeichnete Fläche ab.","Finish shape: Double-click to close a drawn area."),intro_escape:p("Abbrechen (ESC): Drücken Sie die ESC-Taste, um ein Werkzeug wegzulegen oder die Auswahl aufzuheben.","Cancel (ESC): Press ESC to put away a tool or clear the selection."),intro_merge:p("Klicke mindestens zwei Flächen auf derselben Etage an und drücke Enter, um sie zu einer neuen Fläche zusammenzufassen.","Click at least two areas on the same floor and press Enter to merge them into a new area."),intro_calibrate:p("Kalibrierung: Wählen Sie eine bestehende Kante oder zeichnen Sie eine Referenzlinie und geben Sie die reale Länge in Metern ein.","Calibration: Select an existing edge or draw a reference line, then enter the real length in meters."),intro_shortcuts_title:p("Wichtige Tastenkürzel:","Key shortcuts:"),intro_undo_redo:p("Strg + Z / Y: Fehler rückgängig machen / wiederherstellen.","Ctrl + Z / Y: Undo / Redo actions."),intro_copy_paste:p("Strg + C / V: Elemente kopieren und einfügen.","Ctrl + C / V: Copy and paste elements."),intro_paste_active_floor:p("Einfügen platziert Kopien auf der aktiven Etage.","Pasting places copies on the active floor."),intro_select_all:p("Strg + A: Alle Elemente der aktiven Etage auswählen.","Ctrl + A: Select all elements on the active floor."),intro_delete:p("Entf: Das ausgewählte Element löschen.","Delete: Remove the selected element."),intro_shift_zoom:p("Shift (Umschalt): Gedrückt halten, um die Lupe zu aktivieren.","Shift: Hold to activate the magnifier."),intro_alt_click:p("Alt + Klick: Fügt einer bestehenden Linie einen neuen Punkt hinzu.","Alt + Click: Use Alt + Click to add a new point to an existing line."),intro_full_content:p(`<h2>Interface Einstellungen</h2>
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
</ul>`),intro_tip_title:p("Tipp","Tip"),intro_save_reminder:p("Vergessen Sie nicht, Ihr Projekt regelmäßig über das Menü „Datei“ zu speichern!","Remember to save your project regularly via the “File” menu!"),mergeHintShort:p("Klicke mindestens zwei Flächen auf derselben Etage an und drücke Enter, um sie zu einer neuen Fläche zusammenzufassen.","Click at least two areas on the same floor and press Enter to merge them into a new area."),alert_selectTwo:p("Bitte genau zwei Elemente auswählen.","Please select exactly two elements."),alert_sameFloor:p("Beide Elemente müssen auf derselben Etage liegen.","Both elements must be on the same floor."),alert_noOverlap:p("Kein Schnittbereich gefunden.","No overlap found."),manageTypesTitle:p("Element-Typen verwalten","Manage Element Types"),types:p("Typen","Types"),newType:p("+ Neuer Typ","+ New Type"),typeName:p("Typ-Name","Type Name"),exampleMarketing:p("z.B. Marketing","e.g. Marketing"),textStyle:p("Schrift-Stil","Font Style"),areaStyle:p("Flächen-Stil","Area Style"),pointStyle:p("Punkt-Stil","Point Style"),fillColor:p("Füllfarbe","Fill Color"),fillColorDesc:p("Farbe der Innenfläche des Elements (z.B. Raum).","Color of the element's inner area (e.g., room)."),fillOpacity:p("Deckkraft der Füllung","Fill Opacity"),fillOpacityDesc:p("Transparenz der Füllfarbe (0.0 = transparent, 1.0 = opak).","Transparency of the fill color (0.0 = transparent, 1.0 = opaque)."),strokeColor:p("Rahmenfarbe","Border Color"),strokeColorDesc:p("Farbe des Rahmens/der Umrandung des Elements.","Color of the element's border/outline."),currentFillColor:p("Aktuelle Füllfarbe","Current Fill Color"),currentStrokeColor:p("Aktuelle Rahmenfarbe","Current Border Color"),iconSelection:p("Icon Auswahl","Icon Selection"),iconSelectionDesc:p("Wählen Sie ein Symbol für diesen Punkt-Typ.","Select an icon for this point type."),iconColor:p("Icon-Farbe","Icon Color"),iconColorDesc:p("Farbe des Icons auf der Karte.","Color of the icon on the map."),deleteType:p("Typ löschen","Delete Type"),typeManagerPlaceholder:p("Wählen Sie links einen Typ aus oder erstellen Sie einen neuen.","Select a type on the left or create a new one."),saveChangesAndClose:p("Änderungen übernehmen & schließen","Apply Changes & Close"),typePreview:p("Vorschau","Preview"),previewAreaLabel:p("Beispielraum","Sample Room"),previewPointLabel:p("Beispielpunkt","Sample Point"),areasGroup:p("Flächen","Areas"),pointsConnectorsGroup:p("Punkte & Konnektoren","Points & Connectors"),createNewElementType:p("Neuen Element-Typ erstellen","Create New Element Type"),chooseBaseType:p("Wählen Sie den Basis-Typ aus:","Choose the base type:"),choiceArea:p("Fläche","Area"),choicePoint:p("Punkt","Point"),cancel:p("Abbrechen","Cancel"),ok:p("OK","OK"),rename:p("Umbenennen...","Rename..."),copy:p("Kopieren","Copy"),changeType:p("Typ ändern","Change Type"),ctxAddOverlapPoint:p("Punkt im Schnittbereich setzen","Place point at overlap"),toggleAccessibility:p("Barrierefreiheit umschalten","Toggle Accessibility"),accessible:p("Barrierefrei","Accessible"),roomContentsTitle:p("Rauminhalt","Contents"),roomContentsPlaceholder:p("Eintrag hinzufügen...","Add entry..."),roomContentsAdd:p("Hinzufügen","Add"),accessibleRoomsHeader:p("Barrierefreie Räume","Accessible Rooms"),openingHours:p("Öffnungszeiten","Opening Hours"),openingHoursEdit:p("Öffnungszeiten bearbeiten...","Edit Opening Hours..."),openingHoursTitle:p("Öffnungszeiten","Opening Hours"),openingHoursWeekly:p("Wochentage","Weekdays"),openingHoursExceptions:p("Ausnahmen","Exceptions"),openingHoursRanges:p("Zeitspanne","Date Range"),roomNumber:p("Flächen-/Raumnummer","Area/Room Number"),designation:p("Bezeichnung (Art)","Designation (Type)"),occupancyTitle:p("Besetzungszeiten","Staffing Times"),occupancyEdit:p("Besetzungszeiten bearbeiten...","Edit Staffing Times..."),occupancyAdd:p("Hinzufügen","Add"),occupancyNotePlaceholder:p("Notiz...","Note..."),editRoomContents:p("Rauminhalt bearbeiten...","Edit Contents..."),occupancyType:p("Art","Type"),occupancyTypeWeekday:p("Wochentag","Weekday"),occupancyTypeDate:p("Kalendertag","Calendar Date"),occupancyTypeRange:p("Zeitraum","Date Range"),occupancyTypeLabel:p("Art","Type"),occupancyWeekdayLabel:p("Wochentag","Weekday"),occupancyDateLabel:p("Kalendertag","Calendar Date"),occupancyStartLabel:p("von","from"),occupancyEndLabel:p("bis","to"),occupancyRangeStartLabel:p("Zeitraum von","Range start"),occupancyRangeEndLabel:p("Zeitraum bis","Range end"),occupancyNoteLabel:p("Notiz","Note"),beacon_activation_label:p("Aktivierungszeit","Activation Time"),activationStartDate:p("Startdatum","Start Date"),activationEndDate:p("Enddatum","End Date"),activationStartTime:p("von","from"),activationEndTime:p("bis","to"),weekdayMon:p("Mo","Mon"),weekdayTue:p("Di","Tue"),weekdayWed:p("Mi","Wed"),weekdayThu:p("Do","Thu"),weekdayFri:p("Fr","Fri"),weekdaySat:p("Sa","Sat"),weekdaySun:p("So","Sun"),fromTime:p("von","from"),toTime:p("bis","to"),addRule:p("Regel hinzufügen","Add Rule"),addException:p("Ausnahme hinzufügen","Add Exception"),noAccessibleRooms:p("Keine barrierefreien Räume","No accessible rooms"),addRange:p("Zeitraum hinzufügen","Add Date Range"),calendarToday:p("Heute","Today"),calendarClear:p("Leeren","Clear"),alert_deleteTypeConfirm:p('Möchten Sie den Typ "{0}" wirklich löschen?','Do you really want to delete the type "{0}"?'),alert_renameSelectOne:p("Bitte wählen Sie genau ein Element zum Umbenennen aus.","Please select exactly one element to rename."),prompt_renameElement:p("Neuen Namen eingeben:","Enter new name:"),alert_noActiveFloor:p("Bitte zuerst eine Etage auswählen oder erstellen.","Please select or create a floor first."),alert_floorNameExists:p("Dieser Etagenname ist bereits vergeben.","This floor name already exists."),alert_newProjectConfirm:p("Möchten Sie wirklich ein neues Projekt starten? Nicht gespeicherte Änderungen gehen verloren.","Do you really want to start a new project? Unsaved changes will be lost."),confirm_deleteElement_single:p("Möchten Sie das ausgewählte Element wirklich löschen?","Do you really want to delete the selected element?"),confirm_deleteElement_multi:p("Möchten Sie die {0} ausgewählten Elemente wirklich löschen?","Do you really want to delete the {0} selected elements?"),area_raum_label:p("Raum","Room"),area_buero_label:p("Büro","Office"),area_toiletten_label:p("Toiletten","Restrooms"),area_gang_label:p("Gang","Corridor"),area_lager_label:p("Lager","Storage"),point_eingang_label:p("Eingang","Entrance"),point_feuerloescher_label:p("Feuerlöscher","Fire Extinguisher"),point_treppe_label:p("Treppe","Stairs"),point_aufzug_label:p("Aufzug","Elevator"),point_beacon_label:p("Beacon","Beacon"),point_erstehilfe_label:p("Erste Hilfe","First Aid"),point_notausgang_label:p("Notausgang","Emergency Exit"),beacon_uuid_label:p("Beacon UUID","Beacon UUID"),beacon_serial_label:p("Gerät-ID","Device ID"),beacon_major_label:p("Beacon Major","Beacon Major"),beacon_minor_label:p("Beacon Minor","Beacon Minor"),beacon_installation_label:p("Installationsdatum","Installation Date"),beacon_range_label:p("Reichweite (m)","Range (m)"),beacon_number_label:p("Nummer","Number"),beacon_note_de_label:p("Notiz","Note"),beacon_note_en_label:p("Notiz (EN)","Note (EN)"),threeD_fullscreen_title:p("3D-Ansicht","3D View"),threeD_minimize:p("Minimieren","Minimize"),threeD_toggle_fullscreen:p("Vollbild umschalten","Toggle Fullscreen"),screenshot:p("Screenshot","Screenshot"),pdf_convert:p("Konvertiere PDF, dies kann einen Moment dauern...","Converting PDF, this may take a moment..."),image_load:p("Lade Bild...","Loading image...")};Ge.properties_label_desc=p("Anzeigename des Elements, wird in der Karte gezeigt.","Display name of the element, shown on the map.");Ge.beacon_serial_desc=p("Eindeutige Geräte-ID des Beacons.","Unique device ID of the beacon.");Ge.beacon_number_desc=p("Interne Beacon-Nummer zur Zuordnung.","Internal beacon number for mapping.");Ge.beacon_installation_desc=p("Datum der Installation.","Installation date.");Ge.beacon_range_desc=p("Geplante Signalreichweite in Metern für die Heatmap.","Planned signal range in meters for the heatmap.");Ge.beacon_note_de_desc=p("Freitextnotiz in Deutsch.","Free-form note in German.");function Fi(t){Fr=t}function a(t,o=Fr,...n){const r=Ge[t];if(!r)return console.warn(`Missing translation key: ${t}`),t;let i=r[o]||r.en||t;return n.forEach((s,l)=>{i=i.replace(new RegExp(`\\{${l}\\}`,"g"),String(s))}),i}const Pe={raum:{fill:"rgba(53, 138, 216, 0.4)",stroke:"#5e5bb1"},buero:{fill:"rgba(141, 35, 166, 0.3)",stroke:"#54176e"},toiletten:{fill:"rgba(236, 240, 241, 0.5)",stroke:"#c0392b"},gang:{fill:"rgba(246, 235, 252, 0.2)",stroke:"#bdc3c7"},lager:{fill:"rgba(255, 255, 255, 0.3)",stroke:"#7f8c8d"},default:{fill:"rgba(189, 195, 199, 0.3)",stroke:"#95a5a6"}},de="#358ad8",Xt={eingang:"M12 3L4 9v12h5v-7h6v7h5V9l-8-6zm-2 14H8v-5h2v5zm4 0h-2v-5h2v5z",feuerloescher:"M9 8H15V20H9Z M10 6H14V8H10Z M15 10L19 11L15 12Z M11 4H14V6H11Z",treppe:"M6 18H18V20H6Z M10 14H18V16H10Z M14 10H18V12H14Z",aufzug:"M5 4H19V20H5Z M11.5 4H12.5V20H11.5Z M8 9L12 5L16 9Z M8 15L12 19L16 15Z",beacon:"M10.5 3 l6 4.5 -6 4.5 6 4.5 -6 4.5 V3 M17.25 9.75 c1.5 .75 1.5 .75 1.5 2.25 M17.25 14.25 c1.5 .75 1.5 .75 1.5 2.25",erstehilfe:"M10 5H14V10H19V14H14V19H10V14H5V10H10Z",notausgang:"M3 4H10V20H3Z M11 12H21V13H11Z M17 9L21 12L17 15Z",default:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"},bn={info:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",warning:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z","meeting-point":"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",coffee:"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm-2 5h-2V5h2v3zM4 19h16v2H4z",printer:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM18 3H6v4h12V3z",restroom:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"};function Be(){const t=new Set;return e.project.features.forEach(o=>t.add(o.properties.floor)),e.project.floorplanImages&&Object.keys(e.project.floorplanImages).forEach(o=>t.add(o)),Array.from(t).sort((o,n)=>o.localeCompare(n,void 0,{numeric:!0}))}function ue(){const t={},o={raum:a("area_raum_label"),buero:a("area_buero_label"),toiletten:a("area_toiletten_label"),gang:a("area_gang_label"),lager:a("area_lager_label")};for(const i in Pe)o[i]&&(t[i]={label:o[i],baseType:"area",fill:Pe[i].fill,stroke:Pe[i].stroke,isDefault:!0});const n={eingang:a("point_eingang_label"),feuerloescher:a("point_feuerloescher_label"),treppe:a("point_treppe_label"),aufzug:a("point_aufzug_label"),beacon:a("point_beacon_label"),erstehilfe:a("point_erstehilfe_label"),notausgang:a("point_notausgang_label")};for(const i in Xt)n[i]&&(t[i]={label:n[i],baseType:"point",icon:Xt[i],iconColor:"#34495e",isDefault:!0});const r=e.project.properties.elementTypeStyles;if(r)for(const i in r)t[i]={...t[i],...r[i],isDefault:!1};return t}function ae(){const t=Be(),o=e.activeFloorId,n=document.getElementById("floor-select");if(!n)return;if(n.innerHTML="",t.length===0){const i=document.createElement("option");i.textContent=a("currentFloor"),n.appendChild(i),e.activeFloorId=null}else t.forEach(i=>{const s=document.createElement("option");s.value=i,s.textContent=i,n.appendChild(s)}),o&&t.includes(o)?n.value=o:(e.activeFloorId=t[0],n.value=t[0]);const r=document.getElementById("floor-preview");r&&e.activeFloorId&&e.cachedFloorPlanImages[e.activeFloorId]?(r.src=e.cachedFloorPlanImages[e.activeFloorId].src,r.style.display="block"):r&&(r.style.display="none")}function We(){const t=document.getElementById("element-type-select");if(!t)return;const o=ue(),n=t.value,r=[],i=[],s=[];for(const f in o){const h=o[f];h.baseType==="area"?r.push({key:f,style:h}):h.baseType==="point"&&(["treppe","aufzug"].includes(f)?s.push({key:f,style:h}):i.push({key:f,style:h}))}const l=(f,h)=>f.style.label.localeCompare(h.style.label);r.sort(l),i.sort(l),s.sort(l);const c=document.createElement("optgroup");c.label=a("optgroupAreas");const d=document.createElement("optgroup");d.label=a("optgroupPointElements");const g=document.createElement("optgroup");g.label=a("optgroupConnectors");const E=(f,h)=>{h.forEach(({key:w,style:x})=>{const S=document.createElement("option");S.value=w;const k=x.isDefault?"":a("customIndicatorSuffix");S.textContent=x.label+k,S.dataset.type=x.baseType,f.appendChild(S)})};E(c,r),E(d,i),E(g,s),t.innerHTML="",t.appendChild(c),t.appendChild(d),s.length>0&&t.appendChild(g),n&&t.querySelector(`option[value="${n}"]`)?t.value=n:r.length>0?t.value=r[0].key:i.length>0&&(t.value=i[0].key)}function wo(t,o,n){return{x:2*n.x-.5*(t.x+o.x),y:2*n.y-.5*(t.y+o.y)}}function Tt(t,o,n,r=20){const i=[];for(let s=0;s<=r;s++){const l=s/r,c=Math.pow(1-l,2)*t.x+2*(1-l)*l*n.x+Math.pow(l,2)*o.x,d=Math.pow(1-l,2)*t.y+2*(1-l)*l*n.y+Math.pow(l,2)*o.y;i.push([c,d])}return i}function So(t,o,n,r){const i=o.x-t.x,s=o.y-t.y,l=r.x-n.x,c=r.y-n.y,d=i*c-s*l;if(d===0)return null;const g=((n.x-t.x)*c-(n.y-t.y)*l)/d,E=((n.x-t.x)*s-(n.y-t.y)*i)/d;return g<0||g>1||E<0||E>1?null:{x:t.x+g*i,y:t.y+g*s}}function Qt(t){const o=t.coordinates[0];let[n,r]=o[0],[i,s]=o[0];for(const[l,c]of o)l<n&&(n=l),c<r&&(r=c),l>i&&(i=l),c>s&&(s=c);return{x:n,y:r,width:i-n,height:s-r}}function Ee(t,o){const n=Qt(o);if(t.x<n.x||t.x>n.x+n.width||t.y<n.y||t.y>n.y+n.height)return!1;let r=!1;const i=o.coordinates[0];for(let s=0,l=i.length-1;s<i.length;l=s++){const[c,d]=i[s],[g,E]=i[l];d>t.y!=E>t.y&&t.x<(g-c)*(t.y-d)/(E-d)+c&&(r=!r)}return r}function ge(t){if(!e.isGridVisible||!e.isSnapEnabled)return t;const o=e.gridSize;return{x:Math.round(t.x/o)*o,y:Math.round(t.y/o)*o}}function Ye(t){const o=10/e.scale,n=e.project.features.filter(i=>i.properties.floor===e.activeFloorId&&!i.properties.isPlaceholder);let r=null;for(const i of n)if(i.geometry.type==="Point"||i.properties.type==="connector"){const[s,l]=i.geometry.coordinates,c=Math.hypot(t.x-s,t.y-l);c<o&&(!r||c<r.d)&&(r={x:s,y:l,d:c})}else if(i.geometry.type==="LineString"){const s=i.geometry.coordinates;for(const l of s){const c=l[0],d=l[1],g=Math.hypot(t.x-c,t.y-d);g<o&&(!r||g<r.d)&&(r={x:c,y:d,d:g})}}return r?{x:r.x,y:r.y}:t}function ji(){const t=[];if(!e.activeFloorId)return t;const o=e.metersPerPixel;if(!o||o<=0)return t.push("Maßstab nicht kalibriert. Analyse ist ungenau oder nicht möglich."),t;const n=e.project.features.filter(l=>l.properties.floor===e.activeFloorId&&l.properties.type==="area"&&l.geometry.type==="Polygon"),r=e.project.features.filter(l=>l.properties.floor===e.activeFloorId&&l.geometry.type==="Point"&&l.properties.subType==="beacon");r.length<3&&t.push("Zu wenige Beacons: Mindestens 3 Beacons werden für eine Trilateration benötigt.");const s=.5/o;return n.forEach(l=>{const c=l.geometry,d=Qt(c);let g=0,E=0,f=0;for(let h=d.x;h<d.x+d.width;h+=s)for(let w=d.y;w<d.y+d.height;w+=s)if(Ee({x:h,y:w},c)){g++;let x=0;for(const S of r){const[k,I]=S.geometry.coordinates,M=Math.hypot(h-k,w-I),j=typeof S.properties.beacon_range=="number"&&S.properties.beacon_range>0?S.properties.beacon_range/o:0;M<=j&&x++}x===0?E++:x<3&&f++}if(g>0){const h=E/g*100,w=f/g*100,x=l.properties.label||"Unbenannter Raum";h>2&&t.push(`Funkloch in "${x}": ${h.toFixed(1)}% der Fläche nicht abgedeckt.`),w>40&&t.push(`Eingeschränkte Trilateration in "${x}": ${w.toFixed(1)}% der Fläche haben < 3 Beacons.`)}}),t}function Go(t,o){let n=1/0,r=-1;const i=16/e.scale,s=o.coordinates[0];for(let l=0;l<s.length-1;l++){const c={x:s[l][0],y:s[l][1]},d={x:s[l+1][0],y:s[l+1][1]},g=d.x-c.x,E=d.y-c.y;if(g===0&&E===0)continue;const f=((t.x-c.x)*g+(t.y-c.y)*E)/(g*g+E*E),h=f<0?c:f>1?d:{x:c.x+f*g,y:c.y+f*E},w=Math.sqrt((t.x-h.x)**2+(t.y-h.y)**2);w<n&&(n=w,r=l)}return n<i?{index:r,distance:n}:{index:-1,distance:1/0}}let re,y,Je,U,Xe,Z;function _i(){re=document.getElementById("canvas"),y=re.getContext("2d"),Je=document.getElementById("ruler-top"),U=Je.getContext("2d"),Xe=document.getElementById("ruler-left"),Z=Xe.getContext("2d")}function V(){if(!(!y||!re.parentElement)){if(re.width=re.parentElement.clientWidth,re.height=re.parentElement.clientHeight,Je.width=re.width,Xe.height=re.height,Di(),e.measureLabels=[],y.save(),y.translate(e.pan.x,e.pan.y),y.scale(e.scale,e.scale),e.activeFloorId){const t=e.cachedFloorPlanImages[e.activeFloorId];t&&y.drawImage(t,0,0),e.isGridVisible&&Ai(),e.project.features.filter(n=>n.properties.floor===e.activeFloorId&&e.visibleLayers[n.properties.type]).forEach(n=>{const r=e.selectedFeatureIds.includes(n.properties.id);switch(y.lineWidth=(r?3:2)/e.scale,n.geometry.type){case"Polygon":zi(n,r);break;case"Point":Oi(n,r);break;case"LineString":Hi(n,r);break}})}e.tempShape&&(e.currentMode==="area"&&Vi(),e.currentMode==="square"&&qi(),e.currentMode==="line"&&Wo(),e.currentMode==="calibrate"&&Wo(),e.currentMode==="polygon"&&Gi(),e.currentMode==="arc"&&Wi(),e.currentMode==="circle"&&Ki()),e.showBeaconHeatmap&&Ri(),y.restore(),e.isShiftPressed&&Ui()}}function jr(t){const o=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);return o?{r:parseInt(o[1]),g:parseInt(o[2]),b:parseInt(o[3]),a:o[4]!==void 0?parseFloat(o[4]):1}:null}function pe(){return e.metersPerPixel}function ye(t){const o=e.activeLanguage==="de"?"de-DE":"en-US";return`${t.toLocaleString(o,{maximumFractionDigits:2})} m`}function he(t,o,n){const r=4/e.scale,i=16/e.scale;y.font=`${12/e.scale}px sans-serif`;const s=y.measureText(n).width+r*2,l=t-s/2,c=o-i/2,d=e.activeTheme==="dark"?"rgba(20,20,25,0.85)":"rgba(255,255,255,0.85)",g=e.activeTheme==="dark"?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.15)";y.fillStyle=d,y.fillRect(l,c,s,i),y.strokeStyle=g,y.lineWidth=1/e.scale,y.strokeRect(l,c,s,i),y.fillStyle=e.activeTheme==="dark"?"#eee":"#333",y.textAlign="center",y.textBaseline="middle",y.fillText(n,t,o)}function _r(t,o,n,r){if(n)return de;if(r)return r;const i=t?jr(t):null,l=(i&&i.a>.4?t:o??(e.activeTheme==="dark"?"#e6e1ef":"#333333")).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(l){const c=parseInt(l[1]),d=parseInt(l[2]),g=parseInt(l[3]),E=(.299*c+.587*d+.114*g)/255,f=.5;return e.activeTheme==="dark"?E<f?"#e6e1ef":"#333333":E>f?"#333333":"#e6e1ef"}return e.activeTheme==="dark"?"#e6e1ef":"#333333"}function Di(){const t=getComputedStyle(document.body).getPropertyValue("--ruler-text").trim(),o=getComputedStyle(document.body).getPropertyValue("--ruler-border").trim(),n=getComputedStyle(document.body).getPropertyValue("--crosshair-color").trim()||"rgba(53, 138, 216, 0.9)";U.clearRect(0,0,Je.width,Je.height),Z.clearRect(0,0,Xe.width,Xe.height),U.font="12px sans-serif",Z.font="12px sans-serif",U.fillStyle=t,Z.fillStyle=t,U.strokeStyle=o,Z.strokeStyle=o;const{scale:r,pan:i}=e,s=r>1.5?50:r<.4?200:100;for(let d=0;d<Je.width;d+=10){const g=(d-i.x)/r;U.beginPath(),U.moveTo(d+.5,25),U.lineTo(d+.5,30),U.stroke(),Math.round(g)%s===0&&(U.beginPath(),U.moveTo(d+.5,22),U.lineTo(d+.5,30),U.stroke(),U.fillText(String(Math.round(g)),d+2,14))}for(let d=0;d<Xe.height;d+=10){const g=(d-i.y)/r;Z.beginPath(),Z.moveTo(25,d+.5),Z.lineTo(30,d+.5),Z.stroke(),Math.round(g)%s===0&&(Z.beginPath(),Z.moveTo(22,d+.5),Z.lineTo(30,d+.5),Z.stroke(),Z.fillText(String(Math.round(g)),2,d+12))}const{x:l,y:c}=e.mousePosScreen;U.fillStyle=n,Z.fillStyle=n,U.beginPath(),U.moveTo(l,0),U.lineTo(l-3,5),U.lineTo(l+3,5),U.closePath(),U.fill(),Z.beginPath(),Z.moveTo(0,c),Z.lineTo(5,c-3),Z.lineTo(5,c+3),Z.closePath(),Z.fill()}function Ai(){const{scale:t,pan:o,gridSize:n}=e,r=e.activeTheme==="dark"?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)",i=e.activeTheme==="dark"?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)";y.lineWidth=1/t;const s=-o.x/t,l=-o.y/t,c=(re.width-o.x)/t,d=(re.height-o.y)/t;let g=n;const E=40;for(;g*t<E;)g*=2;for(;g*t>E*2;)g/=2;const f=g,h=f/4;if(h*t>10){y.strokeStyle=r;const S=Math.floor(s/h)*h,k=Math.floor(l/h)*h;for(let I=S;I<c;I+=h)y.beginPath(),y.moveTo(I,l),y.lineTo(I,d),y.stroke();for(let I=k;I<d;I+=h)y.beginPath(),y.moveTo(s,I),y.lineTo(c,I),y.stroke()}y.strokeStyle=i,y.lineWidth=1.5/t;const w=Math.floor(s/f)*f,x=Math.floor(l/f)*f;for(let S=w;S<c;S+=f)y.beginPath(),y.moveTo(S,l),y.lineTo(S,d),y.stroke();for(let S=x;S<d;S+=f)y.beginPath(),y.moveTo(s,S),y.lineTo(c,S),y.stroke()}function zi(t,o){if(t.properties.isPlaceholder)return;const{subType:n,label:r}=t.properties,s=(e.styleOverrides||ue())[n];let l=Pe.default.fill,c=Pe.default.stroke,g=t.properties.fontSize||s?.fontSize||14,E=t.properties.fontColor||s?.fontColor;s&&s.baseType==="area"&&(l=s.fill||l,c=s.stroke||c);const f=t.geometry.coordinates[0];y.fillStyle=l,y.strokeStyle=o?de:c,y.lineWidth=(o?3:2)/e.scale,y.beginPath(),y.moveTo(f[0][0],f[0][1]);for(let h=1;h<f.length;h++)y.lineTo(f[h][0],f[h][1]);if(y.closePath(),y.fill(),y.stroke(),r){const h=Qt(t.geometry),w=_r(l,c,o,E);y.fillStyle=w,y.font=`bold ${g/e.scale}px sans-serif`,y.textAlign="center",y.textBaseline="middle";const x=h.x+h.width/2,S=h.y+h.height/2;y.fillText(r,x,S);const k=Array.isArray(t.properties.contents)?t.properties.contents:[];if(k.length>0){const L=(s?.contentsFontSize||Math.max(10,Math.round(g*.8)))/e.scale,j=(s?.contentsLineSpacing||Math.round(g*.5))/e.scale;y.font=`${L}px sans-serif`,y.textAlign="center",y.textBaseline="top";let A=S+j;for(let D=0;D<k.length;D++){const u=String(k[D]);u.trim()!==""&&(y.fillText(u,x,A),A+=j)}}const I=t.properties.room_number,M=t.properties.designation;if(I||M){const L=(s?.contentsFontSize||Math.max(8,Math.round(g*.7)))/e.scale,j=(s?.contentsLineSpacing||Math.round(g*.5))/e.scale;y.font=`${L}px sans-serif`,y.textAlign="center",y.textBaseline="top";let D=k.length>0?S+j*(k.length+1):S+j;I&&(y.fillText(String(I),x,D),D+=j),M&&y.fillText(String(M),x,D)}if(t.properties.isAccessible){const L=(s?.accessibleIconSize||16)/e.scale,j=(s?.accessibleIconOffsetX||6)/e.scale,A=(s?.accessibleIconOffsetY||6)/e.scale,D=getComputedStyle(document.body).getPropertyValue("--color-primary").trim()||"#6b2bd0",u=getComputedStyle(document.body).getPropertyValue("--color-primary-text").trim()||"#ffffff",b=L+4/e.scale,P=L+4/e.scale;y.fillStyle=o?de:D,y.beginPath();const C=3/e.scale,B=h.x+j,T=h.y+A;y.moveTo(B+C,T),y.lineTo(B+b-C,T),y.quadraticCurveTo(B+b,T,B+b,T+C),y.lineTo(B+b,T+P-C),y.quadraticCurveTo(B+b,T+P,B+b-C,T+P),y.lineTo(B+C,T+P),y.quadraticCurveTo(B,T+P,B,T+P-C),y.lineTo(B,T+C),y.quadraticCurveTo(B,T,B+C,T),y.closePath(),y.fill(),y.fillStyle=o?"#ffffff":u,y.font=`${L}px sans-serif`,y.textAlign="left",y.textBaseline="top",y.fillText("♿",B+2/e.scale,T+2/e.scale)}}if(o){const h=5/e.scale;if((e.isAltPressed||e.currentMode==="scissors")&&e.hoveredFeatureId===t.properties.id&&e.hoveredEdgeIndex!==-1){const w=f[e.hoveredEdgeIndex],x=f[(e.hoveredEdgeIndex+1)%(f.length-1)];y.beginPath(),y.moveTo(w[0],w[1]),y.lineTo(x[0],x[1]),y.strokeStyle="#3498db",y.lineWidth=4/e.scale,y.stroke()}y.fillStyle="#fff",y.strokeStyle=de,y.lineWidth=1.5/e.scale;for(let w=0;w<f.length-1;w++){const x=f[w];y.beginPath(),y.arc(x[0],x[1],h,0,2*Math.PI),y.fill(),y.stroke()}}if(e.showDimensions.area||e.showDimensions.circle||e.currentMode==="calibrate"){const h=f,w=Qt(t.geometry),x=w.x+w.width/2,S=w.y+w.height/2;if(h.length>=20&&Math.abs(w.width-w.height)/Math.max(w.width,w.height)<.08&&e.showDimensions.circle){let I=0;for(let j=0;j<h.length-1;j++){const A=h[j][0]-x,D=h[j][1]-S;I+=Math.sqrt(A*A+D*D)}const M=I/(h.length-1),L=M*pe();he(x+M,S-18/e.scale,ye(L))}else if(e.showDimensions.area||e.currentMode==="calibrate")for(let I=0;I<h.length-1;I++){const M=h[I][0],L=h[I][1],j=h[I+1][0],A=h[I+1][1],D=Math.hypot(j-M,A-L),u=D*pe(),b=(M+j)/2,C=(L+A)/2-18/e.scale,B=ye(u);if(he(b,C,B),e.currentMode==="calibrate"){const T=4/e.scale,F=16/e.scale;y.font=`${12/e.scale}px sans-serif`;const m=y.measureText(B).width+T*2,v=b-m/2,_=C-F/2;e.measureLabels.push({bx:v,by:_,w:m,h:F,pxLength:D})}}}}function Ni(t,o,n,r,i){const s=new Path2D(t);y.save(),y.translate(o,n),y.scale(1/e.scale,1/e.scale),y.translate(-12,-12),y.fillStyle=r?de:i||"#34495e",y.fill(s),y.restore()}function $i(t,o,n,r,i,s){const l=new Path2D(t);y.save(),y.translate(o,n),y.scale(1/e.scale,1/e.scale),y.translate(-12,-12),y.strokeStyle=r?de:i,y.lineWidth=s/1,y.lineCap="round",y.lineJoin="round",y.stroke(l),y.restore()}function Oi(t,o){const[n,r]=t.geometry.coordinates,{subType:i,label:s}=t.properties,c=(e.styleOverrides||ue())[i];let d=Xt.default,g="#34495e",f=t.properties.fontSize||c?.fontSize||12,h=t.properties.fontColor||c?.fontColor;if(c&&c.baseType==="point"&&(d=c.icon||d,g=c.iconColor||g),i==="beacon"){const x=typeof t.properties.beacon_range=="number"?t.properties.beacon_range:null;if(e.showBeaconRangeRing&&x&&x>0){const S=x*(e.gridSize/e.metersPerGridCell);y.beginPath(),y.arc(n,r,S,0,Math.PI*2),y.fillStyle="rgba(46, 204, 113, 0.12)",y.fill(),y.strokeStyle="rgba(46, 204, 113, 0.6)",y.lineWidth=1.5/e.scale,y.stroke()}}o&&(y.fillStyle="rgba(231, 76, 60, 0.3)",y.beginPath(),y.arc(n,r,18/e.scale,0,2*Math.PI),y.fill()),i==="beacon"?$i(d,n,r,o,"#b955d0",2):Ni(d,n,r,o,g);const w=_r(void 0,g,o,h);y.fillStyle=w,y.font=`${f/e.scale}px sans-serif`,y.textAlign="center",y.fillText(s,n,r-22/e.scale)}function Hi(t,o){const{coordinates:n}=t.geometry;if(!(n.length<2)){if(y.beginPath(),y.moveTo(n[0][0],n[0][1]),n.slice(1).forEach(r=>y.lineTo(r[0],r[1])),y.strokeStyle=o?de:t.properties.isAccessible?"#3498db":"#8e44ad",y.lineWidth=(o?5:3)/e.scale,y.lineCap="round",y.stroke(),o){const r=6/e.scale;y.fillStyle="#fff",y.strokeStyle=de,y.lineWidth=2/e.scale;let i=[];if(t.properties.subType==="arc"&&t.properties.controlPoints){const{p0:s,p1:l,p2:c}=t.properties.controlPoints;i=[s,l,c],y.setLineDash([4/e.scale,4/e.scale]),y.beginPath(),y.moveTo(s.x,s.y),y.lineTo(l.x,l.y),y.lineTo(c.x,c.y),y.strokeStyle="#7f8c8d",y.stroke(),y.setLineDash([])}else i=n.map(s=>({x:s[0],y:s[1]}));i.forEach(s=>{y.beginPath(),y.arc(s.x,s.y,r,0,2*Math.PI),y.fill(),y.stroke()})}if(e.showDimensions.path||e.currentMode==="calibrate"){let r=0;for(let w=0;w<n.length-1;w++){const x=n[w][0],S=n[w][1],k=n[w+1][0],I=n[w+1][1];r+=Math.hypot(k-x,I-S)}const i=r*pe();let s=n[0][0],l=n[0][0],c=n[0][1],d=n[0][1];for(let w=1;w<n.length;w++)s=Math.min(s,n[w][0]),l=Math.max(l,n[w][0]),c=Math.min(c,n[w][1]),d=Math.max(d,n[w][1]);const g=(s+l)/2,f=(c+d)/2-18/e.scale,h=ye(i);if(he(g,f,h),e.currentMode==="calibrate"){const w=4/e.scale,x=16/e.scale;y.font=`${12/e.scale}px sans-serif`;const S=y.measureText(h).width+w*2,k=g-S/2,I=f-x/2;e.measureLabels.push({bx:k,by:I,w:S,h:x,pxLength:r})}}}}function Ri(){const t=e.project.features.filter(o=>o.properties.floor===e.activeFloorId&&o.geometry.type==="Point"&&o.properties.subType==="beacon");y.save(),y.globalCompositeOperation="multiply",t.forEach(o=>{const[n,r]=o.geometry.coordinates;if(!(typeof o.properties.beacon_range=="number"&&o.properties.beacon_range>0))return;const s=o.properties.beacon_range,l=pe(),c=l>0?s/l:s*10,d=y.createRadialGradient(n,r,0,n,r,c);d.addColorStop(0,"rgba(46, 204, 113, 0.4)"),d.addColorStop(.5,"rgba(241, 196, 15, 0.25)"),d.addColorStop(1,"rgba(231, 76, 60, 0.15)"),y.fillStyle=d,y.beginPath(),y.arc(n,r,c,0,Math.PI*2),y.fill(),e.showBeaconRangeRing&&(y.save(),y.globalCompositeOperation="source-over",y.strokeStyle="rgba(46, 204, 113, 0.6)",y.lineWidth=1/e.scale,y.beginPath(),y.arc(n,r,c,0,Math.PI*2),y.stroke(),y.restore())}),y.restore()}function Vi(){if(!e.tempShape?.start)return;y.strokeStyle=de,y.lineWidth=1.5/e.scale,y.setLineDash([6/e.scale,6/e.scale]);const{start:t}=e.tempShape,o=ge(e.mousePos);y.strokeRect(t.x,t.y,o.x-t.x,o.y-t.y),y.setLineDash([]);const n=Math.abs(o.x-t.x),r=Math.abs(o.y-t.y),i=n*pe(),s=r*pe(),l=(t.x+o.x)/2,c=(t.y+o.y)/2;he(l,t.y-18/e.scale,ye(i)),he(t.x-36/e.scale,c,ye(s))}function qi(){if(!e.tempShape?.start)return;y.strokeStyle=de,y.lineWidth=1.5/e.scale,y.setLineDash([6/e.scale,6/e.scale]);const{start:t}=e.tempShape,o=ge(e.mousePos),n=Math.max(Math.abs(o.x-t.x),Math.abs(o.y-t.y)),r=o.x>=t.x?t.x:t.x-n,i=o.y>=t.y?t.y:t.y-n;y.strokeRect(r,i,n,n),y.setLineDash([]);const s=n*pe();he(r+n/2,i-18/e.scale,ye(s))}function Wo(){if(!e.tempShape?.start)return;y.strokeStyle=de,y.lineWidth=2/e.scale,y.beginPath();const t=e.tempShape.start;y.moveTo(t.x,t.y);const o=e.tempShape.end||Ye(ge(e.mousePos));y.lineTo(o.x,o.y),y.stroke();const n=o.x-t.x,r=o.y-t.y,s=Math.sqrt(n*n+r*r)*pe(),l=(t.x+o.x)/2,c=(t.y+o.y)/2;he(l,c-18/e.scale,ye(s)),y.fillStyle=e.activeTheme==="dark"?"#eee":"#333",y.font=`${12/e.scale}px sans-serif`,y.textAlign="center",y.beginPath(),y.arc(t.x,t.y,4/e.scale,0,Math.PI*2),y.fill(),y.fillText("A",t.x,t.y-10/e.scale),y.beginPath(),y.arc(o.x,o.y,4/e.scale,0,Math.PI*2),y.fill(),y.fillText((e.tempShape.end,"B"),o.x,o.y-10/e.scale)}function Gi(){if(!e.tempShape?.nodes||e.tempShape.nodes.length===0)return;y.strokeStyle=de,y.lineWidth=2/e.scale,y.beginPath();const t=e.tempShape.nodes[0];y.moveTo(t.x,t.y);for(let g=1;g<e.tempShape.nodes.length;g++)y.lineTo(e.tempShape.nodes[g].x,e.tempShape.nodes[g].y);const o=ge(e.mousePos);y.lineTo(o.x,o.y),y.stroke();const n=e.tempShape.nodes[e.tempShape.nodes.length-1],r=o.x-n.x,i=o.y-n.y,l=Math.sqrt(r*r+i*i)*pe(),c=(n.x+o.x)/2,d=(n.y+o.y)/2;he(c,d-18/e.scale,ye(l))}function Wi(){if(!e.tempShape?.start)return;const t=Ye(ge(e.mousePos));if(y.strokeStyle=de,y.lineWidth=2/e.scale,y.setLineDash([6/e.scale,6/e.scale]),y.beginPath(),e.tempShape.end){const o=e.tempShape.start,n=e.tempShape.end,i=wo(o,n,t),s=Tt(o,n,i);y.moveTo(s[0][0],s[0][1]);for(let f=1;f<s.length;f++)y.lineTo(s[f][0],s[f][1]);let l=0;for(let f=0;f<s.length-1;f++){const h=s[f][0],w=s[f][1],x=s[f+1][0],S=s[f+1][1];l+=Math.hypot(x-h,S-w)}const c=l*pe(),d=Math.floor(s.length/2),g=s[d][0],E=s[d][1];he(g,E-18/e.scale,ye(c))}else{y.moveTo(e.tempShape.start.x,e.tempShape.start.y),y.lineTo(t.x,t.y);const o=t.x-e.tempShape.start.x,n=t.y-e.tempShape.start.y,i=Math.sqrt(o*o+n*n)*pe(),s=(e.tempShape.start.x+t.x)/2,l=(e.tempShape.start.y+t.y)/2;he(s,l-18/e.scale,ye(i))}y.stroke(),y.setLineDash([])}function Ki(){if(!e.tempShape?.start)return;const t=e.tempShape.start,o=ge(e.mousePos),n=Math.sqrt(Math.pow(o.x-t.x,2)+Math.pow(o.y-t.y,2)),r=ue(),s=document.getElementById("element-type-select")?.value||"default",l=r[s];let c=l&&l.baseType==="area"&&l.fill||Pe.default.fill;const d=jr(c);if(d){const E=Math.max(d.a,.65);c=`rgba(${d.r}, ${d.g}, ${d.b}, ${E})`}y.beginPath(),y.arc(t.x,t.y,n,0,2*Math.PI),y.fillStyle=c,y.fill(),y.strokeStyle=de,y.lineWidth=1.5/e.scale,y.setLineDash([6/e.scale,6/e.scale]),y.stroke(),y.setLineDash([]);const g=n*pe();he(t.x+n,t.y-18/e.scale,ye(g))}function Ui(){if(!re||re.width===0||re.height===0)return;const t=150,o=2.5,n=t/2,{x:r,y:i}=e.mousePosScreen,s=document.body.getAttribute("data-theme")||"light";y.save(),y.beginPath(),y.arc(r,i,n,0,Math.PI*2),y.strokeStyle=s==="dark"?"#333":"#a0a0a0",y.lineWidth=3,y.stroke(),y.clip(),y.globalAlpha=1,y.drawImage(re,r-n/o,i-n/o,t/o,t/o,r-n,i-n,t,t),y.globalAlpha=1,y.restore()}function _e(){const t=document.getElementById("overview-stats-panel");if(!t)return;const o=e.project.properties.projectName||a("unnamedProject"),n=Be(),r=n.length,i=e.project.features.filter(d=>d.properties.type==="area"&&!d.properties.isPlaceholder).length,s=e.project.features.filter(d=>d.properties.type==="point").length;let l=`<div><span>${a("stat_project")}:</span><span class="value">${o}</span></div><div><span>${a("stat_floors")}:</span><span class="value">${r}</span></div><div><span>${a("stat_areas")}:</span><span class="value">${i}</span></div><div><span>${a("stat_points")}:</span><span class="value">${s}</span></div>`;t.innerHTML=l;const c=document.getElementById("overview-floor-list");c&&(c.innerHTML="",n.forEach(d=>{const g=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder).length,E=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point").length,f=document.createElement("div");f.className="floor-block";const h=document.createElement("div");h.className="floor-card";const w=document.createElement("img");w.className="floor-thumb",e.cachedFloorPlanImages[d]&&(w.src=e.cachedFloorPlanImages[d].src,h.classList.add("has-thumb"));const x=document.createElement("div");x.className="floor-meta";const S=document.createElement("div");S.className="name",S.textContent=d;const k=document.createElement("div");k.className="counts",k.textContent=`${a("stat_areas")}: ${g} · ${a("stat_points")}: ${E}`,x.appendChild(S),x.appendChild(k),h.appendChild(w),h.appendChild(x),h.addEventListener("click",()=>{e.activeFloorId=d,ae(),V()}),f.appendChild(h);const I=document.createElement("button");I.className="beacon-toggle";const M=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point"&&u.properties.subType==="beacon");I.textContent=`${a("overviewBeacons")} (${M.length})`;const L=document.createElement("div");L.className="beacon-section",I.addEventListener("click",()=>{L.style.display===""||L.style.display==="none"?(L.innerHTML="",M.forEach(b=>{const P=document.createElement("div");P.className="beacon-card";const C=document.createElement("div");C.className="beacon-meta";const B=document.createElement("div");B.className="name";const T=b.properties.beacon_serial||"",F=b.properties.label||a("point_beacon_label");B.textContent=T?`${F} · ${T}`:F;const m=document.createElement("div");m.className="counts";const v=b.properties.beacon_range,_=b.properties.beacon_note_de||b.properties.beacon_note_en||"",z=[];z.push(`${a("beacon_serial_label")}: ${T||"-"}`),typeof v=="number"&&z.push(`${a("beacon_range_label")}: ${v}`),_&&z.push(`${a("beacon_note_de_label")}: ${_}`),m.textContent=z.join(" · "),C.appendChild(B),C.appendChild(m),P.appendChild(C),P.addEventListener("click",()=>{e.activeFloorId=d,ae(),V()}),L.appendChild(P)}),L.style.display="block"):(L.style.display="none",L.innerHTML="")}),f.appendChild(I),f.appendChild(L);const j=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder),A=document.createElement("button");A.className="beacon-toggle",A.textContent=`${a("areas")} (${j.length})`;const D=document.createElement("div");D.className="area-section",A.addEventListener("click",()=>{if(D.style.display===""||D.style.display==="none"){const b=ue();D.innerHTML="",j.forEach(C=>{const B=document.createElement("div");B.className="area-card";const T=document.createElement("div");T.className="area-meta";const F=document.createElement("div");F.className="name";const m=C.properties.label||"";F.textContent=m;const v=document.createElement("div");v.className="counts";const _=b[C.properties.subType]?.label||C.properties.subType,z=Array.isArray(C.properties.contents)?C.properties.contents.filter(Y=>Y.trim()!==""):[],R=z.length>0?z.join(", "):"-";v.textContent=`${a("elementType")}: ${_} · ${a("roomContentsTitle")}: ${R}`,T.appendChild(F),T.appendChild(v),B.appendChild(T),B.addEventListener("click",()=>{e.activeFloorId=d,ae(),V()}),D.appendChild(B)});const P=j.filter(C=>!!C.properties.isAccessible);if(P.length>0){const C=document.createElement("div");C.className="area-meta";const B=document.createElement("div");B.className="name",B.textContent=a("accessibleRoomsHeader"),C.appendChild(B),D.appendChild(C),P.forEach(T=>{const F=document.createElement("div");F.className="area-card";const m=document.createElement("div");m.className="area-meta";const v=document.createElement("div");v.className="name",v.textContent=T.properties.label||"";const _=document.createElement("div");_.className="counts",_.textContent="Barrierefrei",m.appendChild(v),m.appendChild(_),F.appendChild(m),F.addEventListener("click",()=>{e.activeFloorId=d,ae(),V()}),D.appendChild(F)})}D.style.display="block"}else D.style.display="none",D.innerHTML=""}),f.appendChild(A),f.appendChild(D),c.appendChild(f)}))}function Zi(){if(!e.activeFloorId||!e.tempShape)return null;const t=ue();let n=document.getElementById("element-type-select")?.value||"raum";const i=t[n]?.label||"Preview",s="preview_feature",l=e.activeFloorId,c=e.mousePos||{x:0,y:0},d=ge(c);if(e.currentMode==="area"&&e.tempShape.start){const g=e.tempShape.start,E=Math.min(g.x,d.x),f=Math.min(g.y,d.y),h=Math.abs(d.x-g.x),w=Math.abs(d.y-g.y);return h<1||w<1?null:{type:"Feature",geometry:{type:"Polygon",coordinates:[[[E,f],[E+h,f],[E+h,f+w],[E,f+w],[E,f]]]},properties:{id:s,floor:l,type:"area",subType:n,label:i,isPlaceholder:!0}}}if(e.currentMode==="square"&&e.tempShape.start){const g=e.tempShape.start,E=Math.abs(d.x-g.x),f=Math.abs(d.y-g.y),h=Math.max(E,f),w=Math.min(g.x,d.x),x=Math.min(g.y,d.y);return h<1?null:{type:"Feature",geometry:{type:"Polygon",coordinates:[[[w,x],[w+h,x],[w+h,x+h],[w,x+h],[w,x]]]},properties:{id:s,floor:l,type:"area",subType:n,label:i,isPlaceholder:!0}}}if(e.currentMode==="polygon"&&e.tempShape.nodes&&e.tempShape.nodes.length>=1){const g=[...e.tempShape.nodes.map(E=>[E.x,E.y]),[d.x,d.y]];return g.length<3?null:(g.push(g[0]),{type:"Feature",geometry:{type:"Polygon",coordinates:[g]},properties:{id:s,floor:l,type:"area",subType:n,label:i,isPlaceholder:!0}})}if(e.currentMode==="circle"&&e.tempShape.start){const g=e.tempShape.start,E=Math.sqrt((d.x-g.x)**2+(d.y-g.y)**2);if(E<1)return null;const f=64,h=Array.from({length:f},(w,x)=>{const S=x/f*2*Math.PI;return[g.x+E*Math.cos(S),g.y+E*Math.sin(S)]});return h.push(h[0]),{type:"Feature",geometry:{type:"Polygon",coordinates:[h]},properties:{id:s,floor:l,type:"area",subType:n,label:i,isPlaceholder:!0}}}if(e.currentMode==="line"&&e.tempShape.start){const g=e.tempShape.start;return{type:"Feature",geometry:{type:"LineString",coordinates:[[g.x,g.y],[d.x,d.y]]},properties:{id:s,floor:l,type:"path",subType:n,label:i,isPlaceholder:!0}}}if(e.currentMode==="arc"&&e.tempShape.start){const g=e.tempShape.start;if(e.tempShape.end){const E=e.tempShape.start,f=e.tempShape.end,h=wo(E,f,d);return{type:"Feature",geometry:{type:"LineString",coordinates:Tt(E,f,h)},properties:{id:s,floor:l,type:"path",subType:"arc",label:i,isPlaceholder:!0}}}else return{type:"Feature",geometry:{type:"LineString",coordinates:[[g.x,g.y],[d.x,d.y]]},properties:{id:s,floor:l,type:"path",subType:"arc",label:i,isPlaceholder:!0}}}return e.currentMode==="point"?{type:"Feature",geometry:{type:"Point",coordinates:[d.x,d.y]},properties:{id:s,floor:l,type:"point",subType:n,label:i,isPlaceholder:!0}}:null}function O(){const t=document.getElementById("live-geojson-output");if(t){const o=Zi(),n=o?{...e.project,features:[...e.project.features,o]}:e.project;t.textContent=JSON.stringify(n,null,2)}}let Ue=null,vn=null,Ae=null,Dt=null,At=null,ct=null,xn=null,zt=null,Nt=null,kt=null,En=null,wn=null;function Yi(t){Ue=t.inputPromptModal,vn=t.inputPromptLabel,Ae=t.inputPromptInput,Dt=t.inputPromptOk,At=t.inputPromptCancel,ct=t.confirmModal,xn=t.confirmMessage,zt=t.confirmOk,Nt=t.confirmCancel,kt=t.loadingModal,En=t.loadingMessage,wn=t.loadingOk}function ke(t,o=""){return!Ue||!vn||!Ae||!Dt||!At?Promise.resolve(null):(vn.textContent=t,Ae.value=o,Ue.classList.remove("hidden"),Ae.focus(),new Promise(n=>{const r=()=>{Ue.classList.add("hidden"),Dt.removeEventListener("click",i),At.removeEventListener("click",s),Ae.removeEventListener("keydown",l),c&&c.removeEventListener("click",s)},i=()=>{const d=Ae.value.trim();r(),n(d||null)},s=()=>{r(),n(null)},l=d=>{d.key==="Enter"?i():d.key==="Escape"&&s()};Dt.addEventListener("click",i),At.addEventListener("click",s),Ae.addEventListener("keydown",l);const c=Ue?Ue.querySelector(".modal-overlay"):null;c&&c.addEventListener("click",s)}))}function ve(t){return!ct||!xn||!zt||!Nt?Promise.resolve(!1):(xn.textContent=t,ct.classList.remove("hidden"),new Promise(o=>{const n=()=>{ct.classList.add("hidden"),zt.removeEventListener("click",r),Nt.removeEventListener("click",i),l?.removeEventListener("click",i),window.removeEventListener("keydown",s)},r=()=>{n(),o(!0)},i=()=>{n(),o(!1)},s=c=>{c.key==="Escape"&&i(),c.key==="Enter"&&r()};zt.addEventListener("click",r),Nt.addEventListener("click",i),window.addEventListener("keydown",s);const l=ct.querySelector(".modal-overlay");l&&l.addEventListener("click",i)}))}function Io(t){!kt||!En||!wn||(En.textContent=t,kt.classList.remove("hidden"),wn.onclick=()=>Qe())}function Qe(){kt&&kt.classList.add("hidden")}const fe=Object.freeze({publicAPI:"/api",imdAPI:"/app/api",login:"/app/login",imd:"/app"}),_t=t=>{console.error(`[UI Error Message]: ${t}`)};class Ji{baseUrl;backendAvailable=!0;warnedNoBackend=!1;constructor(o=window.location.origin){this.baseUrl=o,this.setupLockRelease()}base64ToFile(o,n){const r=o.split(","),i=r[0].match(/:(.*?);/)[1],s=atob(r[1]);let l=s.length;const c=new Uint8Array(l);for(;l--;)c[l]=s.charCodeAt(l);const d=i.split("/")[1]||"png",g=n.includes(".")?n:`${n}.${d}`;return new File([c],g,{type:i})}async request(o,n={}){n.credentials="include",console.log(`Requesting: ${o}`,n);try{const r=await fetch(`${this.baseUrl}${o}`,n);if(r.status===204)return{};const i=(r.headers.get("content-type")||"").toLowerCase();let s;if(i.includes("application/json"))s=await r.json();else{const l=await r.text(),c='Serverantwort ist keine JSON-API. Läuft das Backend unter "/app/api" und "/api"?';throw this.backendAvailable=!1,this.warnedNoBackend||(_t(`${c}
Pfad: ${o}
Status: ${r.status}
Antwort: ${l.slice(0,200)}`),this.warnedNoBackend=!0),new Error(c)}if(!r.ok){const l=s.error||s.message||`Request failed with status ${r.status}`;throw _t(l),new Error(l)}return s}catch(r){throw r instanceof Error||_t("An unexpected network error occurred."),r}}isAvailable(){return this.backendAvailable}async probeBackend(){try{const o=await fetch(`${this.baseUrl}${fe.imdAPI}/random-id`,{method:"GET",credentials:"include"}),n=(o.headers.get("content-type")||"").toLowerCase();this.backendAvailable=o.ok&&n.includes("application/json")}catch{this.backendAvailable=!1}}async getProject(o,n){const r=n?`${fe.publicAPI}/${o}/${n}`:`${fe.publicAPI}/${o}`;return this.request(r)}async listProjects(){return this.request(`${fe.publicAPI}/list`)}async listVersions(o){return(await this.request(`${fe.publicAPI}/${o}/list`)).versions}async getNewId(){return(await this.request(`${fe.imdAPI}/random-id`)).id}async saveProject(o,n,r){try{const i=o??(await this.request("/app/api/random-id")).id,s=[];if(n.project.floorplanImages)for(const[d,g]of Object.entries(n.project.floorplanImages))g!==null&&g.startsWith("data:image")&&s.push(this.base64ToFile(g,d));const l=r?`/app/api/${i}/${r}`:`/app/api/${i}`;await this.request(l,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});let c=r;if(!c){const d=await this.request(`/api/${i}/list`);c=Math.max(...d.versions)}if(s.length>0){const d=new FormData;s.forEach(g=>d.append("floorplans",g)),await this.request(`/app/api/${i}/${c}/floorplans`,{method:"POST",body:d})}return{id:i,version:c}}catch(i){throw _t(i),i}}async delete(o,n){const r=n?`${fe.imdAPI}/${o}/${n}`:`${fe.imdAPI}/${o}`;await this.request(r,{method:"DELETE"})}async releaseLock(){try{await fetch(`${this.baseUrl}${fe.imdAPI}/release-lock`,{method:"POST",credentials:"include",keepalive:!0})}catch(o){console.warn("Failed to release lock",o)}}setupLockRelease(){window.addEventListener("beforeunload",()=>{const o=`${this.baseUrl}${fe.imdAPI}/release-lock`;if(navigator.sendBeacon){const n=new Blob([],{type:"application/json"});navigator.sendBeacon(o,n)}else fetch(o,{method:"POST",credentials:"include",keepalive:!0}).catch(()=>{})})}}const se=new Ji;function Sn(t){e.project.properties.projectName=t.trim(),_e(),O();const o=new Blob([JSON.stringify(e.project,null,2)],{type:"application/geo+json"}),n=document.createElement("a");n.href=URL.createObjectURL(o);const r=(e.project.properties.projectName||"projekt").replace(/[^a-z0-9]/gi,"_").toLowerCase();n.download=`${r}.geojson`,n.click(),URL.revokeObjectURL(n.href)}async function Dr(t,o){e.project.properties.projectName=(e.project.properties.projectName||"").trim(),_e(),O(),Io(a("saveProject"));try{const n=await se.saveProject(t,e,o);return e.currentServerProjectId=n.id,e.currentServerVersion=n.version,n}finally{Qe()}}async function In(t,o){Io(a("loadProject"));try{const n=await se.getProject(t,o);e.currentServerProjectId=t,e.currentServerVersion=o,ko(),Ve(n),N()}finally{Qe()}}function Ar(t){const o=new FileReader;o.onload=n=>{try{const r=JSON.parse(n.target?.result);ko(),Ve(r),N()}catch(r){alert("Fehler beim Laden der Projektdatei."),console.error(r)}},o.readAsText(t)}function Ve(t){if(t.type!=="FeatureCollection"||!t.features)throw new Error("Ungültiges GeoJSON-Projektformat.");e.project=t,Nr();const o=document.getElementById("projectName");o&&(o.value=e.project.properties.projectName||""),e.cachedFloorPlanImages={},e.project.floorplanImages&&Object.entries(e.project.floorplanImages).forEach(([i,s])=>{if(s){const l=new Image;l.onload=()=>{e.cachedFloorPlanImages[i]=l,i===e.activeFloorId&&V()},l.src=s}});const n=e.project.properties.settings||{};n.language&&(e.activeLanguage=n.language,document.documentElement.lang=n.language),n.theme&&(e.activeTheme=n.theme,document.body.setAttribute("data-theme",n.theme)),typeof n.gridSize=="number"&&(e.gridSize=n.gridSize),typeof n.isGridVisible=="boolean"&&(e.isGridVisible=n.isGridVisible),typeof n.isSnapEnabled=="boolean"&&(e.isSnapEnabled=n.isSnapEnabled),typeof n.metersPerPixel=="number"&&(e.metersPerPixel=n.metersPerPixel),typeof n.metersPerGridCell=="number"&&(e.metersPerGridCell=n.metersPerGridCell),n.visibleLayers&&(e.visibleLayers={...e.visibleLayers,...n.visibleLayers}),n.showDimensions&&(e.showDimensions={...e.showDimensions,...n.showDimensions}),typeof n.showBeaconHeatmap=="boolean"&&(e.showBeaconHeatmap=n.showBeaconHeatmap),typeof n.showBeaconRangeRing=="boolean"&&(e.showBeaconRangeRing=n.showBeaconRangeRing);const r=Be();e.activeFloorId=r.includes(e.activeFloorId)?e.activeFloorId:r[0]||null,ae(),We(),_e(),O(),V()}async function Xi(t){try{const o=await Ne(()=>import("./pdf-DcE_ssc1.js"),[]);o.GlobalWorkerOptions.workerSrc=`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${o.version}/pdf.worker.mjs`;const n=await t.arrayBuffer(),r=new Uint8Array(n),s=await(await o.getDocument(r).promise).getPage(1),l=s.getViewport({scale:2}),c=document.createElement("canvas");if(!c.getContext("2d"))throw new Error("Canvas-Kontext konnte nicht erstellt werden.");return c.height=l.height,c.width=l.width,await s.render({canvas:c,viewport:l}).promise,c.toDataURL("image/png")}catch(o){throw console.error("Fehler beim Konvertieren des PDFs:",o),new Error("Das PDF konnte nicht verarbeitet werden.")}}function Qi(t,o){e.project.floorplanImages||(e.project.floorplanImages={}),e.project.floorplanImages[o]=t;const n=new Image;n.onload=()=>{e.cachedFloorPlanImages[o]=n,N(),ae(),V()},n.src=t}async function es(t){return new Promise((o,n)=>{const r=new FileReader;r.onload=()=>o(r.result),r.onerror=()=>n(new Error("Fehler beim Lesen der Bilddatei.")),r.readAsDataURL(t)})}async function zr(t){if(!e.activeFloorId){alert("Bitte zuerst eine Etage auswählen oder erstellen.");return}const o=e.activeFloorId,n=t.type;try{let r;if(Io(a(n==="application/pdf"?"pdf_convert":"image_load")),n.startsWith("image/"))r=await es(t);else if(n==="application/pdf")r=await Xi(t);else{Qe(),alert("Nicht unterstützter Dateityp. Bitte wählen Sie eine Bild- oder PDF-Datei.");return}Qi(r,o),Qe()}catch(r){Qe();const i=r instanceof Error?r.message:"Ein unbekannter Fehler ist aufgetreten.";alert(`Der Grundriss konnte nicht geladen werden: ${i}`)}}const ts=Object.freeze(Object.defineProperty({__proto__:null,loadFloorplan:zr,loadProject:Ar,loadProjectFromServer:In,loadProjectState:Ve,saveProject:Sn,saveProjectToServer:Dr},Symbol.toStringTag,{value:"Module"})),Fe="EG";function ns(){return{type:"FeatureCollection",features:[],properties:{projectName:"Unbenanntes Projekt",elementTypeStyles:{},settings:{language:"en",theme:"light",gridSize:40,isGridVisible:!0,isSnapEnabled:!0,metersPerPixel:.025,metersPerGridCell:1,visibleLayers:{area:!0,path:!0,point:!0,connector:!0},showDimensions:{area:!1,path:!1,circle:!1},showBeaconHeatmap:!1,showBeaconRangeRing:!1}},floorplanImages:{[Fe]:null}}}const e={project:ns(),worldSize:{width:8e3,height:6e3},pan:{x:0,y:0},scale:1,threeDPan:{x:50,y:50},threeDScale:.8,threeDIsDragging:!1,threeDStartPos:{x:0,y:0},activeFloorId:Fe,activeLanguage:"en",activeTheme:"light",currentMode:"select",tempShape:null,mousePos:{x:0,y:0},mousePosScreen:{x:0,y:0},gridSize:40,isGridVisible:!0,isSnapEnabled:!0,metersPerPixel:.025,metersPerGridCell:1,selectedFeatureIds:[],cachedFloorPlanImages:{},clipboard:null,isShiftPressed:!1,isCtrlPressed:!1,isAltPressed:!1,styleOverrides:null,isMovingElement:!1,dragStartPos:{x:0,y:0},originalGeometriesOnMove:new Map,isEditingPath:!1,editedFeatureId:null,editedNodeIndex:-1,hoveredFeatureId:null,hoveredEdgeIndex:-1,panStart:{x:0,y:0},isPanning:!1,visibleLayers:{area:!0,path:!0,point:!0,connector:!0},showDimensions:{area:!1,path:!1,circle:!1},showBeaconHeatmap:!1,showBeaconRangeRing:!1,measureLabels:[],currentServerProjectId:null,currentServerVersion:void 0};function Nr(){e.project.floorplanImages||(e.project.floorplanImages={});const t=Object.keys(e.project.floorplanImages);t.length===0&&(e.project.floorplanImages[Fe]=null),e.activeFloorId||(e.activeFloorId=t.length>0?t[0]:Fe)}const Re=[];let Ie=-1;function N(){Ie<Re.length-1&&Re.splice(Ie+1),Re.push(JSON.parse(JSON.stringify(e.project))),Ie++;try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}}function Ko(){Ie>0&&(Ie--,Ve(JSON.parse(JSON.stringify(Re[Ie]))))}function Uo(){Ie<Re.length-1&&(Ie++,Ve(JSON.parse(JSON.stringify(Re[Ie]))))}function ko(){Re.length=0,Ie=-1}function os(){$r(!1),document.getElementById("mode-area")?.click(),We()}function $r(t=!0,o){if(t&&!confirm(a("alert_newProjectConfirm")))return;e.project.type="FeatureCollection",e.project.features=[],e.project.properties={projectName:a("unnamedProject"),elementTypeStyles:{}};const n=o&&o.trim()!==""?o.trim():Fe;e.project.floorplanImages={[n]:null};const r=document.getElementById("projectName");r&&(r.value=e.project.properties.projectName),e.cachedFloorPlanImages={},e.selectedFeatureIds=[],ko(),e.activeFloorId=n,Nr(),N(),ae(),_e(),O(),We(),V()}function Zo(t,o=!0){if(!t||t.trim()===""){alert("Der Etagenname darf nicht leer sein.");return}const n=t.trim();if(Be().includes(n)){alert(a("alert_floorNameExists"));return}e.activeFloorId=n,e.selectedFeatureIds=[],e.project.floorplanImages||(e.project.floorplanImages={}),e.project.floorplanImages[e.activeFloorId]=null,o&&N(),ae(),_e(),O(),V()}function Yo(t){const o=e.activeFloorId;if(!o){alert(a("alert_noActiveFloor"));return}const n=t.trim();if(!n||n===o)return;if(Be().filter(i=>i!==o).includes(n)){alert(a("alert_floorNameExists"));return}e.project.features.forEach(i=>{i.properties.floor===o&&(i.properties.floor=n)}),e.project.floorplanImages&&Object.prototype.hasOwnProperty.call(e.project.floorplanImages,o)&&(e.project.floorplanImages[n]=e.project.floorplanImages[o],delete e.project.floorplanImages[o]),Object.prototype.hasOwnProperty.call(e.cachedFloorPlanImages,o)&&(e.cachedFloorPlanImages[n]=e.cachedFloorPlanImages[o],delete e.cachedFloorPlanImages[o]),e.activeFloorId=n,N(),ae(),_e(),O(),V()}function qe(t,o){e.project.features.push({type:"Feature",geometry:t,properties:o}),N(),_e(),O(),V()}async function fn(){if(e.selectedFeatureIds.length===0)return;const t=e.selectedFeatureIds.length>1?a("confirm_deleteElement_multi",void 0,e.selectedFeatureIds.length):a("confirm_deleteElement_single");if(await ve(t)){e.project.features=e.project.features.filter(r=>!e.selectedFeatureIds.includes(r.properties.id)),e.selectedFeatureIds=[];const n=document.getElementById("deleteBtn");n&&(n.disabled=!0),N(),_e(),O(),V()}}function Or(t,o){const n=8/e.scale;for(let r=0;r<o.coordinates.length-1;r++){const i={x:o.coordinates[r][0],y:o.coordinates[r][1]},s={x:o.coordinates[r+1][0],y:o.coordinates[r+1][1]},l=s.x-i.x,c=s.y-i.y;if(l===0&&c===0)continue;const d=((t.x-i.x)*l+(t.y-i.y)*c)/(l*l+c*c),g=d<0?i:d>1?s:{x:i.x+d*l,y:i.y+d*c};if(Math.sqrt((t.x-g.x)**2+(t.y-g.y)**2)<n)return!0}return!1}function Se(t){const o=e.project.features.filter(n=>n.properties.floor===e.activeFloorId&&!n.properties.isPlaceholder);for(const n of[...o].reverse()){if(n.geometry.type==="Polygon"&&Ee(t,n.geometry))return n;if(n.geometry.type==="Point"||n.properties.type==="connector"){const[r,i]=n.geometry.coordinates;if(Math.sqrt((t.x-r)**2+(t.y-i)**2)*e.scale<15)return n}if(n.geometry.type==="LineString"&&Or(t,n.geometry))return n}return null}function Ft(t){if(!e.activeFloorId){alert(a("alert_noActiveFloor"));return}const o=document.getElementById("element-type-select");let n=o?.value||"";const r=ue();let i=r[n];if(!i){const E=t.type==="Polygon"?"area":t.type==="Point"?"point":null;if(E){const f=Object.keys(r).find(h=>r[h].baseType===E);f&&(n=f,i=r[f],o&&o.querySelector(`option[value="${f}"]`)&&(o.value=f))}if(!i)return}const s=i.baseType,l=i.label,c=e.project.features.filter(E=>E.properties.subType===n).length+1,d=`${l} ${c}`,g={id:`feat_${Date.now()}`,floor:e.activeFloorId,type:s==="area"?"area":"point",subType:n,label:d};if(s==="point"&&["treppe","aufzug"].includes(n)?g.type="connector":t.type==="LineString"&&(g.type="path"),qe(t,g),g.type==="connector"){const E=Be(),f=e.activeFloorId,h=E.find(w=>w!==f)||null;if(h){const w=`Soll ich das Gegenstück in ${h} automatisch erstellen?`;ve(w).then(x=>{if(x&&t.type==="Point"){const S=t.coordinates.slice(),k={id:`feat_${Date.now()}_link`,floor:h,type:"connector",subType:n,label:d,linksTo:{floor:f,connectorId:g.id}};qe({type:"Point",coordinates:S},k)}})}}}function rs(t){if(!e.tempShape)e.tempShape={start:t};else{const{start:o}=e.tempShape,n=Math.min(o.x,t.x),r=Math.min(o.y,t.y),i=Math.abs(t.x-o.x),s=Math.abs(t.y-o.y);if(i<e.gridSize/2||s<e.gridSize/2){e.tempShape=null;return}const l=[[[n,r],[n+i,r],[n+i,r+s],[n,r+s],[n,r]]];Ft({type:"Polygon",coordinates:l}),e.tempShape=null}}function is(t){if(!e.tempShape)e.tempShape={start:t};else{const o=e.tempShape.start,n=Math.abs(t.x-o.x),r=Math.abs(t.y-o.y),i=Math.max(n,r),s=Math.min(o.x,t.x),l=Math.min(o.y,t.y);if(i<e.gridSize/2){e.tempShape=null;return}const c=[[[s,l],[s+i,l],[s+i,l+i],[s,l+i],[s,l]]];Ft({type:"Polygon",coordinates:c}),e.tempShape=null}}function ss(t){if(!e.tempShape)e.tempShape={start:t};else{const o=e.tempShape.start,n=Math.sqrt((t.x-o.x)**2+(t.y-o.y)**2);if(n<2){e.tempShape=null;return}const r=64,i=Array.from({length:r},(s,l)=>{const c=l/r*2*Math.PI;return[o.x+n*Math.cos(c),o.y+n*Math.sin(c)]});i.push(i[0]),Ft({type:"Polygon",coordinates:[i]}),e.tempShape=null}}function ls(t){if(!e.tempShape)e.tempShape={start:t};else{const o=[[e.tempShape.start.x,e.tempShape.start.y],[t.x,t.y]],n={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"line",label:a("lineLabel")};qe({type:"LineString",coordinates:o},n),e.currentMode="select",document.getElementById("mode-select")?.classList.add("active"),document.getElementById("mode-line")?.classList.remove("active"),e.tempShape=null}}function as(t){e.tempShape?e.tempShape.nodes.push(t):e.tempShape={nodes:[t]}}function cs(t){Ft({type:"Point",coordinates:[t.x,t.y]})}function ds(t){if(!e.tempShape)e.tempShape={start:t};else if(!e.tempShape.end)e.tempShape.end=t;else{const o=e.tempShape.start,n=e.tempShape.end,i=wo(o,n,t),s=Tt(o,n,i),l={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"arc",label:a("arcLabel"),controlPoints:{p0:o,p1:i,p2:n}};qe({type:"LineString",coordinates:s},l),e.tempShape=null}}function ps(){if(!e.activeFloorId||!e.tempShape?.nodes||e.tempShape.nodes.length<3){e.tempShape=null;return}const t=[...e.tempShape.nodes.map(o=>[o.x,o.y]),[e.tempShape.nodes[0].x,e.tempShape.nodes[0].y]];Ft({type:"Polygon",coordinates:[t]}),document.getElementById("mode-select")?.click(),e.tempShape=null}function us(t){const n=[...t.coordinates[0]];if(n.length<4)return!1;const r=n[0],i=n[n.length-1];(Math.abs(r[0]-i[0])>1e-4||Math.abs(r[1]-i[1])>1e-4)&&n.push([r[0],r[1]]);for(let s=0;s<n.length-1;s++){const l=n[s],c=n[s+1],d=Math.abs(l[1]-c[1])<1e-4,g=Math.abs(l[0]-c[0])<1e-4;if(!d&&!g)return!1}return!0}function ms(t){const n=x=>Math.round(x/1e-4)*1e-4,r=new Map,i=new Map,s=(x,S,k)=>{const I=Math.min(S,k),M=Math.max(S,k),L=n(x);r.has(L)||r.set(L,[]),r.get(L).push({x1:n(I),x2:n(M)})},l=(x,S,k)=>{const I=Math.min(S,k),M=Math.max(S,k),L=n(x);i.has(L)||i.set(L,[]),i.get(L).push({y1:n(I),y2:n(M)})};for(const x of t){const S=x.coordinates[0];for(let k=0;k<S.length-1;k++){const I=S[k],M=S[k+1];Math.abs(I[1]-M[1])<1e-4?s(I[1],I[0],M[0]):l(I[0],I[1],M[1])}}const c=new Map,d=(x,S,k,I)=>{const M=`${n(x)},${n(S)}`,L=`${n(k)},${n(I)}`;return M<L?`${M}|${L}`:`${L}|${M}`};r.forEach((x,S)=>{const k=Array.from(new Set(x.flatMap(I=>[I.x1,I.x2]))).sort((I,M)=>I-M);for(const I of x)for(let M=0;M<k.length-1;M++){const L=k[M],j=k[M+1];if(L>=I.x1-1e-4&&j<=I.x2+1e-4){const A=d(L,S,j,S);c.set(A,(c.get(A)||0)+1)}}}),i.forEach((x,S)=>{const k=Array.from(new Set(x.flatMap(I=>[I.y1,I.y2]))).sort((I,M)=>I-M);for(const I of x)for(let M=0;M<k.length-1;M++){const L=k[M],j=k[M+1];if(L>=I.y1-1e-4&&j<=I.y2+1e-4){const A=d(S,L,S,j);c.set(A,(c.get(A)||0)+1)}}});const g=[];if(c.forEach((x,S)=>{if(x%2===1){const[k,I]=S.split("|"),[M,L]=k.split(",").map(Number),[j,A]=I.split(",").map(Number);g.push({x1:M,y1:L,x2:j,y2:A})}}),g.length===0)return[];const E=new Map;for(const x of g){const S=`${x.x1},${x.y1}`,k=`${x.x2},${x.y2}`;E.has(S)||E.set(S,[]),E.has(k)||E.set(k,[]),E.get(S).push({x:x.x2,y:x.y2}),E.get(k).push({x:x.x1,y:x.y1})}const f=new Set(g.map(x=>d(x.x1,x.y1,x.x2,x.y2))),h=[];for(;f.size>0;){const x=Array.from(f)[0].split("|")[0],[S,k]=x.split(",").map(Number),I={x:S,y:k},M=[I];let L=I,j=null;for(;;){const D=E.get(`${L.x},${L.y}`)||[];let u=null;for(const b of D){const P=d(L.x,L.y,b.x,b.y);if(f.has(P)&&(!j||b.x!==j.x||b.y!==j.y)){u=b;break}}if(!u||(f.delete(d(L.x,L.y,u.x,u.y)),j=L,L=u,M.push(L),L.x===I.x&&L.y===I.y))break}const A=M.map(D=>[D.x,D.y]);A.length>=4&&h.push(A)}if(h.length===0)return[];const w=x=>{let S=0;for(let k=0;k<x.length-1;k++){const[I,M]=x[k],[L,j]=x[k+1];S+=I*j-L*M}return Math.abs(S)/2};return h.sort((x,S)=>w(S)-w(x)),h[0]}function gs(t){const o=[...t].sort((s,l)=>s.x===l.x?s.y-l.y:s.x-l.x),n=(s,l,c)=>(l.x-s.x)*(c.y-s.y)-(l.y-s.y)*(c.x-s.x),r=[];for(const s of o){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],s)<=0;)r.pop();r.push(s)}const i=[];for(let s=o.length-1;s>=0;s--){const l=o[s];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],l)<=0;)i.pop();i.push(l)}return i.pop(),r.pop(),r.concat(i)}let st=null;function ys(){const t=document.getElementById("file-menu-trigger"),o=document.getElementById("output-menu-trigger"),n=document.getElementById("overview-menu-trigger"),r=document.getElementById("backstage-panel"),i=document.getElementById("backstage-close-btn"),s=document.getElementById("backstage-title"),l=document.getElementById("backstage-file-content"),c=document.getElementById("backstage-output-content"),d=document.getElementById("backstage-overview-content");if(!t||!o||!n||!r){console.error("Menü-Elemente konnten nicht gefunden werden!");return}const g=f=>{l.style.display="none",c.style.display="none",d.style.display="none",f==="file"?(l.style.display="block",s.textContent=a("filePanelTitle")):f==="output"?(c.style.display="block",s.textContent=a("outputPanelTitle")):f==="overview"&&(d.style.display="block",s.textContent=a("overviewPanelTitle")),r.classList.add("visible"),document.body.classList.add("backstage-visible"),st=f,t.classList.remove("active"),o.classList.remove("active"),n.classList.remove("active"),document.getElementById(`${f}-menu-trigger`)?.classList.add("active")},E=()=>{r.classList.remove("visible"),document.body.classList.remove("backstage-visible"),st=null,t.classList.remove("active"),o.classList.remove("active"),n.classList.remove("active")};t.addEventListener("click",f=>{f.stopPropagation(),st==="file"?E():g("file")}),o.addEventListener("click",f=>{f.stopPropagation(),st==="output"?E():g("output")}),n.addEventListener("click",f=>{f.stopPropagation(),st==="overview"?E():g("overview")}),i.addEventListener("click",E)}function xe(){const t=document.getElementById("gridInfo");if(!t)return;const o=Math.round(e.gridSize),n=e.activeLanguage==="de"?"Kasten":"cell",r=e.metersPerPixel;if(r&&r>0){const i=Math.round(r*e.gridSize*100)/100,s=(e.activeLanguage==="de","m");t.textContent=`1 ${n} ≈ ${o} px · ${i} ${s}`}else t.textContent=`1 ${n} ≈ ${o} px`}function hs(t){const o=document.getElementById("toggleGridBtn"),n=document.getElementById("toggleSnapBtn"),r=document.getElementById("gridSizeInput"),i=document.getElementById("gridMinusBtn"),s=document.getElementById("gridPlusBtn"),l=document.getElementById("gridMetersInput"),c=document.getElementById("gridMetersMinusBtn"),d=document.getElementById("gridMetersPlusBtn"),g=document.getElementById("toggleAreaDimensions"),E=document.getElementById("togglePathLengths"),f=document.getElementById("toggleCircleRadius"),h=document.getElementById("toggleBeaconRing");o&&o.addEventListener("change",()=>{e.isGridVisible=o.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.isGridVisible=e.isGridVisible,w(),t()}),n&&n.addEventListener("change",()=>{e.isSnapEnabled=n.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.isSnapEnabled=e.isSnapEnabled,w()}),r&&r.addEventListener("input",()=>{const x=parseInt(r.value,10);if(!isNaN(x)&&x>=5){e.gridSize=x;const S=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=S,l&&(l.value=String(S)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,w(),xe(),t()}}),i&&i.addEventListener("click",()=>{const x=Math.max(5,(e.gridSize||40)-5);e.gridSize=x,r&&(r.value=String(x));const S=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=S,l&&(l.value=String(S)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,w(),xe(),t()}),s&&s.addEventListener("click",()=>{const x=Math.min(400,(e.gridSize||40)+5);e.gridSize=x,r&&(r.value=String(x));const S=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=S,l&&(l.value=String(S)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,w(),xe(),t()}),l&&l.addEventListener("input",()=>{const x=parseFloat(l.value);!isNaN(x)&&x>=.1&&(e.metersPerGridCell=Math.round(x*100)/100,e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,w(),xe())}),c&&c.addEventListener("click",()=>{const x=Math.max(.1,(e.metersPerGridCell||1)-.1),S=Math.round(x*100)/100;e.metersPerGridCell=S,l&&(l.value=String(S)),e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,w(),xe()}),d&&d.addEventListener("click",()=>{const x=Math.min(100,(e.metersPerGridCell||1)+.1),S=Math.round(x*100)/100;e.metersPerGridCell=S,l&&(l.value=String(S)),e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,w(),xe()}),document.querySelectorAll(".layer-toggle").forEach(x=>{x.addEventListener("change",S=>{const k=S.target,I=k.dataset.layer;I&&(e.visibleLayers[I]=k.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.visibleLayers={...e.project.properties.settings.visibleLayers,[I]:k.checked},w(),t())})}),g&&g.addEventListener("change",()=>{e.showDimensions.area=g.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,area:e.showDimensions.area},w(),t()}),E&&E.addEventListener("change",()=>{e.showDimensions.path=E.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,path:e.showDimensions.path},w(),t()}),f&&f.addEventListener("change",()=>{e.showDimensions.circle=f.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,circle:e.showDimensions.circle},w(),t()}),h&&h.addEventListener("change",()=>{e.showBeaconRangeRing=h.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showBeaconRangeRing=e.showBeaconRangeRing,w(),t()}),xe();function w(){try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}}}let $e=null,$t=null,kn=null;function fs(t){$e=t.contextMenu,$t=t.ctxMenuTypeSubmenu,kn=t.ctxMenuAddOverlapPoint}function bs(t,o){if(!$t)return;$t.innerHTML="";const n=ue(),r=t.geometry.type==="Polygon"||t.geometry.type==="Point"?n[t.properties.subType]?.baseType:null;if(r){for(const i in n)if(n[i].baseType===r){const s=document.createElement("li");s.textContent=n[i].label,s.dataset.typeKey=i,s.addEventListener("click",()=>{e.project.features.forEach(l=>{if(e.selectedFeatureIds.includes(l.properties.id)){const c=n[l.properties.subType];c&&c.baseType===r&&(l.properties.subType=i)}}),N(),V(),o()}),$t.appendChild(s)}}}function vs(t,o,n){$e&&(kn&&(kn.style.display=n===2?"":"none"),$e.style.display="block",$e.style.left=`${t}px`,$e.style.top=`${o}px`)}function Hr(){$e&&($e.style.display="none")}function xs(){const t=e.project.features.filter(o=>e.selectedFeatureIds.includes(o.properties.id));t.length!==0&&(e.clipboard=t.map(o=>JSON.parse(JSON.stringify(o))))}function Es(t){if(!e.clipboard||e.clipboard.length===0)return;const o=e.gridSize||20,n=e.clipboard.map(r=>{const i=JSON.parse(JSON.stringify(r.geometry));if(i.type==="Point"){const c=i.coordinates;i.coordinates=[c[0]+o,c[1]+o]}else if(i.type==="LineString"){const c=i.coordinates;i.coordinates=c.map(([d,g])=>[d+o,g+o])}else if(i.type==="Polygon"){const c=i.coordinates;i.coordinates=c.map(d=>d.map(([g,E])=>[g+o,E+o]))}const s=`feat_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,l=`${r.properties.label}`;return{type:"Feature",geometry:i,properties:{...r.properties,id:s,label:l,floor:e.activeFloorId}}});e.project.features.push(...n),e.selectedFeatureIds=n.map(r=>r.properties.id),N(),V(),t(),O()}let dt=null,pt=null,Pn=null,ut=null;function ws(t){dt=t.propertiesContent,pt=t.propertiesPlaceholder,Pn=t.propertiesLabelInput,ut=t.propertiesTypeSelect}function le(){const t=document.getElementById("properties-panel");if(!dt||!pt||!Pn||!ut)return;if(e.selectedFeatureIds.length!==1){t&&(t.style.display="none"),dt.style.display="none",pt.style.display="block";return}t&&(t.style.display="block"),dt.style.display="block",pt.style.display="none";const o=e.selectedFeatureIds[0],n=e.project.features.find(B=>B.properties.id===o);if(!n){dt.style.display="none",pt.style.display="block";return}if(!(n.geometry.type==="Point"&&n.properties.subType==="beacon")){t&&(t.style.display="none");return}Pn.value=n.properties.label,ut.innerHTML="";const i=ue(),s=n.geometry.type==="Polygon"||n.geometry.type==="Point"?i[n.properties.subType]?.baseType:null;if(s){for(const B in i)if(i[B].baseType===s){const T=document.createElement("option");T.value=B,T.textContent=i[B].label,ut.appendChild(T)}ut.value=n.properties.subType}const l=document.getElementById("beacon-fields"),c=document.getElementById("beacon-uuid-input"),d=document.getElementById("beacon-serial-input"),g=document.getElementById("beacon-major-input"),E=document.getElementById("beacon-minor-input"),f=document.getElementById("beacon-installation-input"),h=document.getElementById("beacon-range-input"),w=document.getElementById("beacon-note-de-input"),x=document.getElementById("beacon-note-en-input");if(l){const B=n.geometry.type==="Point"&&n.properties.subType==="beacon",T=document.querySelector("#properties-panel h2");if(T&&T.childNodes[0]){const F=B?"beacon_parameters":"properties";T.childNodes[0].textContent=a(F)+" "}if(l.style.display=B?"block":"none",B){const F=document.querySelector('label[for="beacon-serial-input"]'),m=document.querySelector('label[for="beacon-installation-input"]'),v=document.querySelector('label[for="beacon-range-input"]'),_=document.querySelector('label[for="beacon-note-de-input"]');F&&(F.textContent=a("beacon_serial_label"),F.title=a("beacon_serial_desc")),m&&(m.textContent=a("beacon_installation_label"),m.title=a("beacon_installation_desc")),v&&(v.textContent=a("beacon_range_label"),v.title=a("beacon_range_desc")),_&&(_.textContent=a("beacon_note_de_label"),_.title=a("beacon_note_de_desc")),c&&(c.value=n.properties.beacon_uuid||""),d&&(d.value=n.properties.beacon_serial||""),g&&(g.value=n.properties.beacon_major?.toString()||""),E&&(E.value=n.properties.beacon_minor?.toString()||""),f&&(f.value=n.properties.beacon_installation||""),h&&(h.value=n.properties.beacon_range!==void 0?String(n.properties.beacon_range):""),w&&(w.value=n.properties.beacon_note_de||""),x&&(x.value=n.properties.beacon_note_en||"")}}const S=document.getElementById("properties-description-input"),k=document.getElementById("properties-opening-hours-input"),I=document.getElementById("properties-room-number-input"),M=document.getElementById("properties-designation-select");if(S&&(S.value=n.properties.description||""),k){const B=n.properties.opening_hours;if(!B)k.value="";else if(typeof B=="string")k.value=B;else{const T=[],F=B.weekly||{},m=Object.keys(F).map(R=>Number(R)).sort((R,Y)=>R-Y),v=R=>{switch(R){case 1:return a("weekdayMon");case 2:return a("weekdayTue");case 3:return a("weekdayWed");case 4:return a("weekdayThu");case 5:return a("weekdayFri");case 6:return a("weekdaySat");case 0:return a("weekdaySun");default:return""}};m.forEach(R=>{const Y=F[R].map(X=>`${X.start}–${X.end}`).join(", ");T.push(`${v(R)} ${Y}`)});const _=B.exceptions,z=B.ranges;Array.isArray(_)&&_.length>0&&T.push(`${a("openingHoursExceptions")}: ${_.length}`),Array.isArray(z)&&z.length>0&&T.push(`${a("openingHoursRanges")}: ${z.length}`),k.value=T.join(" · ")}}I&&(I.value=n.properties.room_number||""),M&&(M.value=n.properties.designation||M.value);const L=document.querySelector('label[for="properties-description-input"]'),j=document.querySelector('label[for="properties-opening-hours-input"]'),A=document.querySelector('label[for="properties-room-number-input"]'),D=document.querySelector('label[for="properties-designation-select"]'),u=n.geometry.type!=="Point"||n.properties.subType!=="beacon";S&&(S.style.display=u?"":"none"),k&&(k.style.display=u?"":"none"),I&&(I.style.display=u?"":"none"),M&&(M.style.display=u?"":"none"),L&&(L.style.display=u?"":"none"),j&&(j.style.display=u?"":"none"),A&&(A.style.display=u?"":"none"),D&&(D.style.display=u?"":"none");const b=document.getElementById("open-opening-hours-modal-btn"),P=document.getElementById("open-occupancy-modal-btn"),C=n.properties.type==="area"&&n.geometry.type==="Polygon";b&&(b.style.display=C?"":"none"),P&&(P.style.display=C?"":"none")}function en(){const t=document.getElementById("mode-merge");if(!t)return;const o=t.querySelector("span"),i=e.project.features.filter(l=>l.properties.floor===e.activeFloorId).filter(l=>e.selectedFeatureIds.includes(l.properties.id)&&(l.geometry.type==="Polygon"||l.geometry.type==="LineString"&&l.properties.subType==="arc")).length,s=a("merge");o&&(o.textContent=i>0?`${s} (${i})`:s),i>=2?t.classList.add("merge-ready"):t.classList.remove("merge-ready")}let oe=null,et=null,tt=null,nt=null,ot=null,Bn={x:0,y:0},Cn={x:0,y:0},Po=!1,Bo=!1;function Ss(t){oe=t.canvas,et=t.scrollbarX,tt=t.scrollbarY,nt=t.thumbX,ot=t.thumbY}function tn(t){return{x:(t.x-e.pan.x)/e.scale,y:(t.y-e.pan.y)/e.scale}}function rt(){const{scale:t,worldSize:o}=e;if(!oe||!oe.parentElement)return;const n=oe.parentElement.clientWidth,r=oe.parentElement.clientHeight,i=o.width*t,s=o.height*t;if(i<n)e.pan.x=(n-i)/2;else{const c=n-i;e.pan.x=Math.min(e.pan.x,0),e.pan.x=Math.max(e.pan.x,c)}if(s<r)e.pan.y=(r-s)/2;else{const c=r-s;e.pan.y=Math.min(e.pan.y,0),e.pan.y=Math.max(e.pan.y,c)}}function nn(){const{scale:t,pan:o,worldSize:n}=e;if(!oe||!oe.parentElement||!et||!tt||!nt||!ot)return;const{clientWidth:r,clientHeight:i}=oe.parentElement,s=n.width*t,l=s>r&&r>0;if(et.style.display=l?"block":"none",l){const g=et.clientWidth,E=r/s*g,f=Math.max(E,20),h=Math.max(s-r,0),w=10,x=Math.max(g-f-2*w,0),S=h>0?-o.x/h*x:0;nt.style.width=`${f}px`;const k=1,I=Math.abs(o.x-(r-s))<=k,M=Math.abs(o.x-0)<=k&&s>=r,L=I?w+x:M?w:w+Math.max(0,Math.min(S,x));nt.style.left=`${L}px`}const c=n.height*t,d=c>i&&i>0;if(tt.style.display=d?"block":"none",d){const g=tt.clientHeight,E=i/c*g,f=Math.max(E,20),h=Math.max(c-i,0),w=10,x=Math.max(g-f-2*w,0),S=h>0?-o.y/h*x:0;ot.style.height=`${f}px`;const k=1,I=Math.abs(o.y-(i-c))<=k,M=Math.abs(o.y-0)<=k&&c>=i,L=I?w+x:M?w:w+Math.max(0,Math.min(S,x));ot.style.top=`${L}px`}}function Is(t){t.preventDefault(),e.isPanning=!0,e.panStart={x:t.clientX,y:t.clientY},oe&&(oe.style.cursor="grabbing")}function ks(t){if(!e.isPanning)return;const o=t.clientX-e.panStart.x,n=t.clientY-e.panStart.y;e.pan.x+=o,e.pan.y+=n,e.panStart={x:t.clientX,y:t.clientY},rt(),V(),nn()}function Ps(){!e.isPanning||!oe||(e.isPanning=!1,e.currentMode==="pan"||e.currentMode==="move-element"?oe.style.cursor="grab":e.currentMode==="select"?oe.style.cursor="default":oe.style.cursor="crosshair")}function Jo(t){t.stopPropagation(),t.preventDefault(),Bn={x:t.clientX,y:t.clientY},Cn={...e.pan},t.target===nt&&(Po=!0),t.target===ot&&(Bo=!0),document.addEventListener("mousemove",Rr),document.addEventListener("mouseup",Bs,{once:!0})}function Rr(t){if(t.preventDefault(),!(!et||!tt)){if(Po){const o=t.clientX-Bn.x,n=et.clientWidth,r=oe?.parentElement?.clientWidth||0,i=e.worldSize.width*e.scale,s=nt?.clientWidth||0,l=Math.max(i-r,0),d=Math.max(n-s-2*10,1);if(n>0&&l>0){const g=o/d*l;e.pan.x=Cn.x-g}rt(),V(),nn()}if(Bo){const o=t.clientY-Bn.y,n=tt.clientHeight,r=oe?.parentElement?.clientHeight||0,i=e.worldSize.height*e.scale,s=ot?.clientHeight||0,l=Math.max(i-r,0),d=Math.max(n-s-2*10,1);if(n>0&&l>0){const g=o/d*l;e.pan.y=Cn.y-g}rt(),V(),nn()}}}function Bs(){Po=!1,Bo=!1,document.removeEventListener("mousemove",Rr)}let Ce=null;function Cs(t){Ce=t.canvas}function Ls(t){e.selectedFeatureIds.length>0&&(e.isMovingElement=!0,e.dragStartPos=t,e.originalGeometriesOnMove.clear(),e.project.features.forEach(o=>{e.selectedFeatureIds.includes(o.properties.id)&&(e.originalGeometriesOnMove.set(o.properties.id,JSON.parse(JSON.stringify(o.geometry))),o.properties.controlPoints&&(o.properties.originalControlPoints=JSON.parse(JSON.stringify(o.properties.controlPoints))))}),Ce&&(Ce.style.cursor="move"))}function Ms(t){if(!e.isMovingElement||e.selectedFeatureIds.length===0)return;const o=t.x-e.dragStartPos.x,n=t.y-e.dragStartPos.y,r=(i,s,l)=>{if(Array.isArray(i)&&typeof i[0]=="number"&&i.length===2){i[0]+=s,i[1]+=l;return}i.forEach(c=>{Array.isArray(c[0])?r(c,s,l):(c[0]+=s,c[1]+=l)})};e.project.features.forEach(i=>{if(e.selectedFeatureIds.includes(i.properties.id)){const s=e.originalGeometriesOnMove.get(i.properties.id);if(s){const c=JSON.parse(JSON.stringify(s));"coordinates"in c&&(r(c.coordinates,o,n),i.geometry=c)}const l=i.properties.originalControlPoints;l&&(i.properties.controlPoints={p0:{x:l.p0.x+o,y:l.p0.y+n},p1:{x:l.p1.x+o,y:l.p1.y+n},p2:{x:l.p2.x+o,y:l.p2.y+n}})}}),V()}function Ts(){e.isMovingElement&&(e.isMovingElement=!1,e.originalGeometriesOnMove.clear(),e.project.features.forEach(t=>delete t.properties.originalControlPoints),Ce&&(Ce.style.cursor="default"),N())}function Fs(t){if(e.selectedFeatureIds.length!==1)return!1;const o=e.project.features.find(i=>i.properties.id===e.selectedFeatureIds[0]);if(!o||o.geometry.type!=="LineString"&&o.geometry.type!=="Polygon")return!1;const n=8/e.scale;let r=[];if(o.geometry.type==="LineString"&&o.properties.subType==="arc"&&o.properties.controlPoints){const{p0:i,p1:s,p2:l}=o.properties.controlPoints;r=[i,s,l]}else{const i=o.geometry.type==="LineString"?o.geometry.coordinates:o.geometry.coordinates[0];r=(o.geometry.type==="Polygon"?i.slice(0,-1):i).map(l=>({x:l[0],y:l[1]}))}for(let i=0;i<r.length;i++)if(Math.sqrt((t.x-r[i].x)**2+(t.y-r[i].y)**2)<n)return e.isEditingPath=!0,e.editedFeatureId=o.properties.id,e.editedNodeIndex=i,Ce&&(Ce.style.cursor="grabbing"),!0;return!1}function js(t){if(!e.isEditingPath||!e.editedFeatureId)return;const o=e.project.features.find(r=>r.properties.id===e.editedFeatureId);if(!o)return;const n=Ye(ge(t));if(o.geometry.type==="LineString"&&o.properties.subType==="arc"&&o.properties.controlPoints){const r=o.properties.controlPoints;e.editedNodeIndex===0?r.p0=n:e.editedNodeIndex===1?r.p1=n:e.editedNodeIndex===2&&(r.p2=n),o.geometry.coordinates=Tt(r.p0,r.p2,r.p1)}else if(o.geometry.type==="LineString")o.geometry.coordinates[e.editedNodeIndex]=[n.x,n.y];else if(o.geometry.type==="Polygon"){const r=o.geometry.coordinates[0];r[e.editedNodeIndex]=[n.x,n.y],e.editedNodeIndex===0&&(r[r.length-1]=[n.x,n.y])}V()}function _s(){!e.isEditingPath||!Ce||(e.isEditingPath=!1,Ce.style.cursor="default",N())}function Ds(t,o){const n=parseInt(t.slice(1,3),16),r=parseInt(t.slice(3,5),16),i=parseInt(t.slice(5,7),16);return`rgba(${n}, ${r}, ${i}, ${o})`}let yn=null,ze=null,Co=null,Lo=null,Me=null,Ln=null,Mo=null,Vr=null,To=null,Fo=null,qr=null,Mn=null,Ot=null,jo=null,_o=null,Gr=null,Do=null,Ao=null,Tn=null,Fn=null,jn=null,Ht=null,_n=null,mt=null,gt=null,Dn=null,yt=null,ht=null,Rt=null,ee=null;function As(t){yn=t.typeManagerModal,ze=t.typeManagerList,Co=t.typeManagerDetailsContent,Lo=t.typeManagerPlaceholder,Me=t.typeNameInput,Ln=t.typeEditorArea,Mo=t.typeFillColorInput,Vr=t.typeFillColorSwatch,To=t.typeFillOpacitySlider,Fo=t.typeStrokeColorInput,qr=t.typeStrokeColorSwatch,Mn=t.typeEditorPoint,Ot=t.typeIconLibrary,jo=t.typeIconColorInput,_o=t.typeManagerDeleteBtn,Gr=t.newTypeChoiceModal,Do=t.typeFontColorInput,Ao=t.typeFontSizeInput,Tn=t.typeTextStyleHeader,Fn=t.typeAreaStyleHeader,jn=t.typePointStyleHeader,Ht=t.typePreviewContainer,_n=t.typePreviewHeader,mt=t.typePreviewArea,gt=t.typePreviewAreaRect,Dn=t.typePreviewAreaLabel,yt=t.typePreviewPoint,ht=t.typePreviewPointIcon,Rt=t.typePreviewPointLabel}function zs(){e.styleOverrides=JSON.parse(JSON.stringify(ue())),jt(),Os(),Zr(),yn.classList.remove("hidden")}function Xo(){yn.classList.add("hidden"),ee=null,e.styleOverrides=null,hn(void 0),V()}function Ns(){if(!e.styleOverrides)return;e.project.properties.elementTypeStyles||(e.project.properties.elementTypeStyles={});const t=e.project.properties.elementTypeStyles;Object.keys(e.styleOverrides).forEach(o=>{const n=e.styleOverrides[o];n.isDefault?delete t[o]:t[o]={label:n.label,baseType:n.baseType,fill:n.fill,stroke:n.stroke,icon:n.icon,iconColor:n.iconColor,fontSize:n.fontSize,fontColor:n.fontColor}}),Object.keys(t).forEach(o=>{e.styleOverrides[o]||delete t[o]}),N(),We(),O(),e.styleOverrides=null,V(),yn.classList.add("hidden")}function jt(){if(!e.styleOverrides||!ze)return;ze.innerHTML="";const t={},o={};for(const i in e.styleOverrides){const s=e.styleOverrides[i];s.baseType==="area"?t[i]=s:o[i]=s}const n=i=>{const s=document.createElement("li");return s.textContent=i,s.style.cssText="font-weight: bold; padding: 12px 8px 4px; color: var(--color-primary); background-color: var(--color-secondary); border-bottom: 1px solid var(--color-border);",s},r=(i,s)=>{const l=document.createElement("li");if(l.style.cssText="cursor: pointer; padding: 8px; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; gap: 8px;",s.baseType==="area"){const g=document.createElement("div");g.style.cssText=`width: 16px; height: 16px; border-radius: 4px; background-color: ${s.fill||"transparent"}; border: 1px solid ${s.stroke||"black"}; flex-shrink: 0;`,l.appendChild(g)}else if(s.baseType==="point"&&s.icon){const g="http://www.w3.org/2000/svg",E=document.createElementNS(g,"svg");E.setAttribute("viewBox","0 0 24 24"),E.style.cssText=`width: 16px; height: 16px; fill: ${s.iconColor||"black"}; flex-shrink: 0;`;const f=document.createElementNS(g,"path");f.setAttribute("d",s.icon),E.appendChild(f),l.appendChild(E)}const c=document.createElement("span"),d=s.isDefault?"":" (Cust.)";if(c.textContent=s.label+d,l.appendChild(c),l.dataset.subType=i,i===ee){l.style.backgroundColor="var(--color-accent)",l.style.color="white";const g=l.querySelector("svg");g&&(g.style.fill="white")}return l.addEventListener("click",()=>{ee=i,jt(),Wr(i)}),l};Object.keys(t).length>0&&(ze.appendChild(n(a("areasGroup"))),Object.keys(t).sort((s,l)=>t[s].label.localeCompare(t[l].label)).forEach(s=>ze.appendChild(r(s,t[s])))),Object.keys(o).length>0&&(ze.appendChild(n(a("pointsConnectorsGroup"))),Object.keys(o).sort((s,l)=>o[s].label.localeCompare(o[l].label)).forEach(s=>ze.appendChild(r(s,o[s]))))}function Wr(t){if(!e.styleOverrides)return;Lo.classList.add("hidden"),Co.classList.remove("hidden");const o=e.styleOverrides[t];if(Me.value=o.label,Ao.value=(o.fontSize||(o.baseType==="area"?14:12)).toString(),Do.value=o.fontColor||(e.activeTheme==="dark"?"#e6e1ef":"#000000"),Tn&&(Tn.style.display="block"),Fn&&(Fn.style.display=o.baseType==="area"?"block":"none"),jn&&(jn.style.display=o.baseType==="point"?"block":"none"),o.baseType==="area"){Ln.style.display="block",Mn.style.display="none";const{hex:n,alpha:r}=Rs(o.fill||"rgba(0,0,0,0.5)");Mo.value=n,To.value=r.toString(),Fo.value=o.stroke||"#000000"}else Ln.style.display="none",Mn.style.display="block",jo.value=o.iconColor||"#34495e",document.querySelectorAll("#type-icon-library div").forEach(n=>{const r=n.querySelector("svg");r&&r.dataset.iconPath===o.icon?n.classList.add("active"):n.classList.remove("active")});Ur(),hn(o),Me.disabled=!!o.isDefault,_o.style.display=o.isDefault?"none":"block"}function Kr(){if(!ee||!e.styleOverrides)return;const t=e.styleOverrides[ee];if(t.isDefault&&(t.isDefault=!1,Me.disabled=!1,_o.style.display="block"),Me.value=Me.value.trim(),!!Me.value){t.label=Me.value,t.fontSize=parseInt(Ao.value)||(t.baseType==="area"?14:12),t.fontColor=Do.value,t.baseType==="area"?(t.fill=Ds(Mo.value,parseFloat(To.value)),t.stroke=Fo.value):t.iconColor=jo.value,Ur(),hn(t);try{jt()}catch{}V()}}async function Qo(t){if(!e.styleOverrides)return;Gr.classList.add("hidden");const o=a("prompt_newFloorName"),n=a(t==="area"?"newAreaType":"newPointType"),r=await Yr(o,n);if(!r||r.trim()==="")return;const i=`custom_${r.trim().toLowerCase().replace(/[^a-z0-9]/gi,"_")}_${Date.now()}`,s=e.activeTheme==="dark";t==="area"?e.styleOverrides[i]={label:r.trim(),baseType:"area",fill:"rgba(128, 128, 128, 0.5)",stroke:"#808080",fontSize:14,fontColor:s?"#e6e1ef":"#000000",isDefault:!1}:e.styleOverrides[i]={label:r.trim(),baseType:"point",icon:bn.info,iconColor:"#34495e",fontSize:12,fontColor:s?"#e6e1ef":"#000000",isDefault:!1},ee=i,jt(),Wr(i)}async function $s(){!ee||!e.styleOverrides||e.styleOverrides[ee].isDefault||!await Jr(a("alert_deleteTypeConfirm",e.activeLanguage,e.styleOverrides[ee].label))||!ee||!e.styleOverrides||(delete e.styleOverrides[ee],Zr(),jt(),V())}function Os(){if(Ot){Ot.innerHTML="";for(const t in bn){const o=bn[t],n=document.createElement("div");n.style.cssText="padding: 4px; border: 1px solid transparent; border-radius: 4px; cursor: pointer;";const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("viewBox","0 0 24 24"),r.style.width="32px",r.style.height="32px",r.style.fill="currentColor";const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d",o),r.appendChild(i),r.dataset.iconPath=o,n.appendChild(r),n.addEventListener("click",()=>{!ee||!e.styleOverrides||(e.styleOverrides[ee].icon=o,document.querySelectorAll("#type-icon-library > div").forEach(s=>s.classList.remove("active")),n.classList.add("active"),Kr())}),Ot.appendChild(n)}}}function Ur(){if(!ee||!e.styleOverrides)return;const t=e.styleOverrides[ee];t.baseType==="area"&&(Vr.style.backgroundColor=t.fill||"transparent",qr.style.backgroundColor=t.stroke||"transparent")}function Hs(){return e.activeTheme==="dark"?"#e6e1ef":"#1f2933"}function hn(t){if(!Ht||!mt||!yt)return;if(!t){Ht.classList.add("hidden"),mt.style.display="none",yt.style.display="none";return}Ht.classList.remove("hidden"),_n&&(_n.textContent=a("typePreview"));const o=t.fontColor||Hs(),n=t.baseType==="area"?a("previewAreaLabel"):a("previewPointLabel");if(t.baseType==="area"){if(mt.style.display="block",yt.style.display="none",gt){const r=t.fill||Pe.default.fill,i=t.stroke||Pe.default.stroke;gt.style.background=r,gt.style.borderColor=i,gt.style.color=o}Dn&&(Dn.textContent=t.label||n)}else{mt.style.display="none",yt.style.display="flex";const r=t.icon||Xt.default,i=t.iconColor||"#34495e";if(ht){ht.innerHTML=`<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="${r}"></path></svg>`;const s=ht.querySelector("svg"),l=ht.querySelector("path");s&&(s.style.width="36px",s.style.height="36px"),l&&(ee==="beacon"?(l.setAttribute("fill","none"),l.setAttribute("stroke",i),l.setAttribute("stroke-width","2"),l.setAttribute("stroke-linecap","round"),l.setAttribute("stroke-linejoin","round")):l.setAttribute("fill",i))}Rt&&(Rt.textContent=t.label||n,Rt.style.color=o)}}function Zr(){Lo.classList.remove("hidden"),Co.classList.add("hidden"),ee=null,hn(void 0)}function Rs(t){const o=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(!o)return{hex:"#000000",alpha:1};const n=s=>("0"+s.toString(16)).slice(-2),r=`#${n(parseInt(o[1]))}${n(parseInt(o[2]))}${n(parseInt(o[3]))}`,i=o[4]!==void 0?parseFloat(o[4]):1;return{hex:r,alpha:i}}let Yr=async()=>null,Jr=async()=>!1;function Vs(t){Yr=t.showInputPrompt,Jr=t.showConfirm}function qs(t){if(t.length<1)return t;const o=t[0],n=t[t.length-1];return(o[0]!==n[0]||o[1]!==n[1])&&t.push([o[0],o[1]]),t}function Gs(t,o){const n=t.slice(0,-1),r=o.slice(0,-1),i=r.map((c,d)=>({a:{x:c[0],y:c[1]},b:{x:r[(d+1)%r.length][0],y:r[(d+1)%r.length][1]}})),s=[];for(let c=0;c<n.length;c++){const d={x:n[c][0],y:n[c][1]},g={x:n[(c+1)%n.length][0],y:n[(c+1)%n.length][1]},E=[];i.forEach(h=>{const w=So(d,g,h.a,h.b);if(w){const x=g.x-d.x,S=g.y-d.y,k=x*x+S*S,I=k===0?0:((w.x-d.x)*x+(w.y-d.y)*S)/k;I>=0&&I<=1&&E.push({t:I,p:w})}}),E.sort((h,w)=>h.t-w.t);const f=[{x:d.x,y:d.y},...E.map(h=>h.p),{x:g.x,y:g.y}];for(let h=0;h<f.length-1;h++){const w=f[h],x=f[h+1],S={x:(w.x+x.x)/2,y:(w.y+x.y)/2};Ee(S,{coordinates:[o]})||(s.length===0&&s.push([w.x,w.y]),s.push([x.x,x.y]))}}const l=[];for(let c=0;c<s.length;c++){const d=l[l.length-1],g=s[c];(!d||d[0]!==g[0]||d[1]!==g[1])&&l.push(g)}return l}function Xr(t,o){const n=t.slice(0,-1),r=o.slice(0,-1),i=[];for(let h=0;h<n.length;h++){const w={x:n[h][0],y:n[h][1]},x={x:n[(h+1)%n.length][0],y:n[(h+1)%n.length][1]};for(let S=0;S<r.length;S++){const k={x:r[S][0],y:r[S][1]},I={x:r[(S+1)%r.length][0],y:r[(S+1)%r.length][1]},M=So(w,x,k,I);M&&i.push(M)}}const s={coordinates:[t]},l={coordinates:[o]};if(n.forEach(h=>{Ee({x:h[0],y:h[1]},l)&&i.push({x:h[0],y:h[1]})}),r.forEach(h=>{Ee({x:h[0],y:h[1]},s)&&i.push({x:h[0],y:h[1]})}),i.length===0)return null;const c=i.reduce((h,w)=>h+w.x,0)/i.length,d=i.reduce((h,w)=>h+w.y,0)/i.length,g={x:c,y:d};if(Ee(g,s)&&Ee(g,l))return[g.x,g.y];const f=i.find(h=>Ee(h,s)&&Ee(h,l));return f?[f.x,f.y]:null}function Ws(t,o){const r=[t[0]];for(let s=0;s<t.length-1;s++){const l={x:t[s][0],y:t[s][1]},c={x:t[s+1][0],y:t[s+1][1]},d=c.x-l.x,g=c.y-l.y,E=Math.sqrt(d*d+g*g);if(E<1e-6)continue;const f=d/E,h=g/E,w=[];for(let k=0;k<o.length-1;k++){const I={x:o[k][0],y:o[k][1]},M={x:o[k+1][0],y:o[k+1][1]},L=M.x-I.x,j=M.y-I.y,A=d*j-g*L,D=(I.x-l.x)*g-(I.y-l.y)*d;if(Math.abs(A)<1e-6&&Math.abs(D)<1e-6){const u=(I.x-l.x)*f+(I.y-l.y)*h,b=(M.x-l.x)*f+(M.y-l.y)*h,P=Math.max(0,Math.min(u,b)),C=Math.min(E,Math.max(u,b));C-P>1e-6&&w.push({a:P,b:C})}}if(w.length===0){r.push([c.x,c.y]);continue}w.sort((k,I)=>k.a-I.a);const x=[];for(const k of w)x.length===0||k.a>x[x.length-1].b+1e-6?x.push({a:k.a,b:k.b}):x[x.length-1].b=Math.max(x[x.length-1].b,k.b);let S=0;for(const k of x){if(k.a-S>1e-6){const I=l.x+f*S,M=l.y+h*S,L=l.x+f*k.a,j=l.y+h*k.a;(r.length===0||r[r.length-1][0]!==I||r[r.length-1][1]!==M)&&r.push([I,M]),r.push([L,j])}S=Math.max(S,k.b)}if(E-S>1e-6){const k=l.x+f*S,I=l.y+h*S,M=c.x,L=c.y;(r.length===0||r[r.length-1][0]!==k||r[r.length-1][1]!==I)&&r.push([k,I]),r.push([M,L])}}const i=[];for(let s=0;s<r.length;s++){const l=i[i.length-1],c=r[s];(!l||l[0]!==c[0]||l[1]!==c[1])&&i.push(c)}return i}function Qr(t,o){for(let r=0;r<t.length-1;r++){const i={x:t[r][0],y:t[r][1]},s={x:t[r+1][0],y:t[r+1][1]};for(let l=0;l<o.length-1;l++){const c={x:o[l][0],y:o[l][1]},d={x:o[l+1][0],y:o[l+1][1]},g=So(i,s,c,d);if(g)return[g.x,g.y];const E=s.x-i.x,f=s.y-i.y,h=d.x-c.x,w=d.y-c.y,x=E*w-f*h,S=(c.x-i.x)*f-(c.y-i.y)*E;if(Math.abs(x)<1e-6&&Math.abs(S)<1e-6){const k=Math.sqrt(E*E+f*f);if(k<1e-6)continue;const I=E/k,M=f/k,L=(c.x-i.x)*I+(c.y-i.y)*M,j=(d.x-i.x)*I+(d.y-i.y)*M,A=Math.max(0,Math.min(L,j)),D=Math.min(k,Math.max(L,j));if(D-A>1e-6){const u=(A+D)/2,b=i.x+I*u,P=i.y+M*u;return[b,P]}}}}return null}let wt=null,be=null,ie,er,tr,An,zn,ei,ti,Nn,Oe,$n,Te,ni,oi,me,ri,ii,nr,or,on,rn,On,sn,Hn,Rn,rr,Vn,si,li,ir,qn,Gn,Wn,ln,Kn=null,Un=null,Zn=null,Yn=null,sr,lr,ar,cr,dr,ce,je,Pt,Bt,pr,ur,mr,ft=null,St=null,Ze=null,Jn=null,Xn=null,Qn=null,bt=null,It=null,vt=null,xt=null,Vt=null,qt=null,Gt=null,Wt=null,Kt=null,Ut=null,eo=null,to=null,no=null,ai=null,Ct=null,Et=null,ci=null,Zt=null,Yt=null,Jt=null,oo=null,di=null,pi=null,ro=null,ui=null,mi=null,gi=null,io=null,yi=null,hi=null,fi=null,bi=null,so=null,lo=null,ao=null,co,vi,gr,yr,hr,po,fr,uo,br,mo,go,vr,xr,Er,yo,xi,ho,Ei,wi,an,Si,Ii,ki,fo,we,zo,No,Lt,Mt,bo,vo,cn,dn,pn,wr,un,Sr,Ir,mn,kr,Pr,gn,$o;function Ks(t,o){let n;return function(){clearTimeout(n),n=window.setTimeout(t,o)}}const lt=Ks(V,50);function Oo(){const t=`mode-${e.currentMode}`,o=document.getElementById(t);e.tempShape&&e.currentMode!=="select"&&e.currentMode!=="pan"&&e.currentMode!=="move-element"?(document.querySelectorAll(".tool-btn").forEach(n=>n.classList.remove("has-temp-shape")),o&&o.classList.add("has-temp-shape")):document.querySelectorAll(".tool-btn").forEach(n=>n.classList.remove("has-temp-shape"))}function $(){V(),nn(),Oo(),xe(),nl();const t=document.getElementById("floor3DView"),o=document.getElementById("floor3DContent");t&&t.style.display==="flex"&&o&&wt&&wt.render3DFloorStack(e.project,"floor3DContent")}function Us(t){t.preventDefault();const o=.1,n=e.scale,r={x:t.offsetX,y:t.offsetY},i=tn(r),s=t.deltaY<0?n*(1+o):n/(1+o);e.scale=Math.max(.1,Math.min(s,10)),e.pan.x=r.x-i.x*e.scale,e.pan.y=r.y-i.y*e.scale,rt(),$()}function Zs(t){if(e.currentMode==="scissors"){const r=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.properties.type==="area"&&!c.properties.isPlaceholder&&c.geometry.type==="Polygon"&&Ee(t,c.geometry)),i=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.geometry.type==="LineString"&&Or(t,c.geometry));let s,l;if(e.selectedFeatureIds.length===1){const c=e.project.features.find(d=>d.properties.id===e.selectedFeatureIds[0]);c?.geometry.type==="Polygon"?(s=c,l=r.find(d=>d.properties.id!==s?.properties.id)):c?.geometry.type==="LineString"&&(s=c,l=i.find(d=>d.properties.id!==s?.properties.id))}else{s=r[0]||i[0];const c=s&&s.geometry.type==="Polygon"?r:i;l=c&&c.length>1?c[1]:void 0}if(s&&l){if(s.geometry.type==="Polygon"&&l.geometry.type==="Polygon"){const c=s.geometry.coordinates[0],d=l.geometry.coordinates[0],g=Gs(c,d);if(g.length>=4){const E=Xr(c,d);s.geometry.coordinates[0]=qs(g),E&&e.activeFloorId&&qe({type:"Point",coordinates:E},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:a("previewPointLabel")}),N(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,$(),O();return}}else if(s.geometry.type==="LineString"&&l.geometry.type==="LineString"){const c=s.geometry.coordinates,d=l.geometry.coordinates,g=Qr(c,d),E=Ws(c,d);if(E.length>=2){s.geometry.coordinates=E,g&&e.activeFloorId&&qe({type:"Point",coordinates:g},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:a("previewPointLabel")}),N(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,$(),O();return}}}else{const c=e.hoveredFeatureId||Se(t)?.properties.id||null;if(c){const d=e.project.features.find(g=>g.properties.id===c);if(d&&d.geometry.type==="Polygon"&&e.hoveredEdgeIndex!==-1){const g=d.geometry.coordinates[0],E=e.hoveredEdgeIndex+1;if(g.length>4&&E>0&&E<g.length){g.splice(E,1),g[g.length-1]=g[0],N(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,$(),O();return}}}}}if(e.currentMode==="select"&&e.isAltPressed&&e.hoveredEdgeIndex!==-1&&e.hoveredFeatureId){const r=e.project.features.find(i=>i.properties.id===e.hoveredFeatureId);if(r&&r.geometry.type==="Polygon"){const i=[t.x,t.y];r.geometry.coordinates[0].splice(e.hoveredEdgeIndex+1,0,i),N(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,$();return}}const o=ge(t),n=e.currentMode==="line"||e.currentMode==="arc"||e.currentMode==="point"?Ye(o):o;switch(e.currentMode){case"area":rs(n);break;case"square":is(n);break;case"polygon":as(n);break;case"circle":ss(n);break;case"line":ls(n);break;case"arc":ds(n);break;case"point":cs(n);break;case"calibrate":{if(e.tempShape){if(e.tempShape.start){const r=Se(n);let i=Ye(ge(n));if(r&&r.properties.floor===e.activeFloorId){if(r.geometry.type==="Point"){const d=r.geometry.coordinates;i={x:d[0],y:d[1]}}else if(r.geometry.type==="LineString"){const d=r.geometry;let g=null,E=1/0;for(let f=0;f<d.coordinates.length-1;f++){const h={x:d.coordinates[f][0],y:d.coordinates[f][1]},w={x:d.coordinates[f+1][0],y:d.coordinates[f+1][1]},x=w.x-h.x,S=w.y-h.y,k=x*x+S*S;if(k===0)continue;const I=((n.x-h.x)*x+(n.y-h.y)*S)/k,M=I<0?0:I>1?1:I,L=h.x+M*x,j=h.y+M*S,A=Math.hypot(n.x-L,n.y-j);A<E&&(E=A,g={x:L,y:j})}g&&(i=g)}else if(r.geometry.type==="Polygon"){const d=r.geometry.coordinates[0];let g=null,E=1/0;for(let f=0;f<d.length-1;f++){const h={x:d[f][0],y:d[f][1]},w={x:d[f+1][0],y:d[f+1][1]},x=w.x-h.x,S=w.y-h.y,k=x*x+S*S;if(k===0)continue;const I=((n.x-h.x)*x+(n.y-h.y)*S)/k,M=I<0?0:I>1?1:I,L=h.x+M*x,j=h.y+M*S,A=Math.hypot(n.x-L,n.y-j);A<E&&(E=A,g={x:L,y:j})}g&&(i=g)}}const s=i.x-e.tempShape.start.x,l=i.y-e.tempShape.start.y,c=Math.sqrt(s*s+l*l);ke(a("calibratePrompt")).then(d=>{const g=d?parseFloat(d):NaN;if(!Number.isNaN(g)&&g>0){const E=g/c;e.metersPerPixel=E;const f=Math.round(E*e.gridSize*100)/100;e.metersPerGridCell=f;const h=document.getElementById("gridMetersInput");h&&(h.value=String(f)),xe(),$()}e.tempShape=null})}}else{const r=e.measureLabels.find(l=>n.x>=l.bx&&n.x<=l.bx+l.w&&n.y>=l.by&&n.y<=l.by+l.h);if(r){const l=r.pxLength;ke(a("calibratePrompt")).then(c=>{const d=c?parseFloat(c):NaN;if(!Number.isNaN(d)&&d>0){const g=d/l;e.metersPerPixel=g;const E=Math.round(g*e.gridSize*100)/100;e.metersPerGridCell=E;const f=document.getElementById("gridMetersInput");f&&(f.value=String(E)),xe(),$()}});break}const i=Se(n);let s=Ye(ge(n));if(i&&i.properties.floor===e.activeFloorId){if(i.geometry.type==="Point"){const l=i.geometry.coordinates;s={x:l[0],y:l[1]}}else if(i.geometry.type==="LineString"){const l=i.geometry;let c=null,d=1/0;for(let g=0;g<l.coordinates.length-1;g++){const E={x:l.coordinates[g][0],y:l.coordinates[g][1]},f={x:l.coordinates[g+1][0],y:l.coordinates[g+1][1]},h=f.x-E.x,w=f.y-E.y,x=h*h+w*w;if(x===0)continue;const S=((n.x-E.x)*h+(n.y-E.y)*w)/x,k=S<0?0:S>1?1:S,I=E.x+k*h,M=E.y+k*w,L=Math.hypot(n.x-I,n.y-M);L<d&&(d=L,c={x:I,y:M})}c&&(s=c)}else if(i.geometry.type==="Polygon"){const l=i.geometry.coordinates[0];let c=null,d=1/0;for(let g=0;g<l.length-1;g++){const E={x:l[g][0],y:l[g][1]},f={x:l[g+1][0],y:l[g+1][1]},h=f.x-E.x,w=f.y-E.y,x=h*h+w*w;if(x===0)continue;const S=((n.x-E.x)*h+(n.y-E.y)*w)/x,k=S<0?0:S>1?1:S,I=E.x+k*h,M=E.y+k*w,L=Math.hypot(n.x-I,n.y-M);L<d&&(d=L,c={x:I,y:M})}c&&(s=c)}}e.tempShape={start:s}}break}case"select":Pi(t);break;case"merge":{const r=Se(t);if(r){const i=r.properties.id,s=e.selectedFeatureIds.indexOf(i);s>-1?e.selectedFeatureIds.splice(s,1):e.selectedFeatureIds.push(i),Te.disabled=e.selectedFeatureIds.length===0,le(),en(),$()}break}}Oo()}function Ys(){const t=e.selectedFeatureIds.slice(),o=e.project.features.filter(f=>t.includes(f.properties.id)&&f.properties.floor===e.activeFloorId),n=o.filter(f=>f.geometry.type==="Polygon"),r=o.filter(f=>f.geometry.type==="LineString");if(n.length<1||n.length+r.length<2){alert(a("alert_selectAtLeastTwo"));return}let i=null;if(n.length>0&&r.length===0&&n.every(f=>us(f.geometry))){const f=ms(n.map(h=>h.geometry));f&&f.length>=4&&(i=f)}if(!i){const f=[];for(const x of n){const S=x.geometry.coordinates[0];for(let k=0;k<S.length-1;k++)f.push({x:S[k][0],y:S[k][1]})}for(const x of r)if(x.properties.subType==="arc"&&x.properties.controlPoints){const{p0:S,p1:k,p2:I}=x.properties.controlPoints;Tt(S,I,k,24).forEach(([L,j])=>f.push({x:L,y:j}))}else x.geometry.coordinates.forEach(([k,I])=>f.push({x:k,y:I}));if(f.length<3){alert(a("alert_notEnoughPoints"));return}const h=gs(f);if(h.length<3){alert(a("alert_notEnoughPoints"));return}const w=h.map(x=>[x.x,x.y]);w.push([h[0].x,h[0].y]),i=w}const l=ue(),c=Object.keys(l).find(f=>l[f].baseType==="area")||"raum",d=l[c]?.label||"Raum",g=e.project.features.filter(f=>f.properties.type==="area").length+1,E={type:"Feature",geometry:{type:"Polygon",coordinates:[i]},properties:{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"area",subType:c,label:`${d} ${g}`}};e.project.features.push(E),N(),$(),O()}function Pi(t){const o=Se(t),n=o?o.properties.id:null;if(e.isCtrlPressed){if(n){const r=e.selectedFeatureIds.indexOf(n);r>-1?e.selectedFeatureIds.splice(r,1):e.selectedFeatureIds.push(n)}}else e.selectedFeatureIds=n?[n]:[];Te.disabled=e.selectedFeatureIds.length===0,le(),en(),$()}function Br(t){const o=$n.querySelector(`option[data-type="${t}"]`);$n.querySelectorAll("optgroup").forEach(n=>{let r=!1;n.querySelectorAll("option").forEach(i=>{i.dataset.type===t?(i.style.display="",r=!0):i.style.display="none"}),n.style.display=r?"":"none"}),o&&(o.selected=!0)}function Le(){Hr()}function Js(t){t.preventDefault(),Hr();const o=tn({x:t.offsetX,y:t.offsetY}),n=Se(o);if(!n||(e.selectedFeatureIds.includes(n.properties.id)||(e.selectedFeatureIds=[n.properties.id],$(),le()),e.selectedFeatureIds.length===0))return;bs(n,()=>le());const r=n.properties.type==="area"&&n.geometry.type==="Polygon",i=document.getElementById("ctx-menu-edit-contents"),s=document.getElementById("ctx-menu-edit-opening-hours"),l=document.getElementById("ctx-menu-edit-occupancy"),c=document.getElementById("ctx-menu-toggle-accessibility");i&&(i.style.display=r?"":"none"),s&&(s.style.display=r?"":"none"),l&&(l.style.display=r?"":"none"),c&&(c.style.display=r?"":"none"),vs(t.clientX,t.clientY,e.selectedFeatureIds.length)}async function Xs(){if(e.selectedFeatureIds.length!==1){alert(a("alert_renameSelectOne"));return}const t=e.project.features.find(n=>n.properties.id===e.selectedFeatureIds[0]);if(!t)return;const o=await ke(a("prompt_renameElement"),t.properties.label);o&&o.trim()!==""&&(t.properties.label=o.trim(),N(),V(),le(),O())}function Cr(){const t=[],o=e.gridSize||20,n=e.project.features.filter(r=>e.selectedFeatureIds.includes(r.properties.id));n.length!==0&&(n.forEach(r=>{const i=`feat_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,s=`${r.properties.label} - Kopie`,l=JSON.parse(JSON.stringify(r.geometry)),c=g=>{g.forEach(E=>{Array.isArray(E[0])?c(E):(E[0]+=o,E[1]+=o)})};"coordinates"in l&&c(l.coordinates);const d={type:"Feature",properties:{...r.properties,id:i,label:s},geometry:l};t.push(d)}),e.project.features.push(...t),e.selectedFeatureIds=t.map(r=>r.properties.id),N(),$(),le(),O())}function Qs(){xs()}function el(){if(!e.activeFloorId)return;if(e.selectedFeatureIds.length!==2){alert(a("alert_selectTwo"));return}const[t,o]=e.selectedFeatureIds,n=e.project.features.find(s=>s.properties.id===t),r=e.project.features.find(s=>s.properties.id===o);if(!n||!r)return;if(n.properties.floor!==e.activeFloorId||r.properties.floor!==e.activeFloorId){alert(a("alert_sameFloor"));return}let i=null;if(n.geometry.type==="Polygon"&&r.geometry.type==="Polygon"){const s=n.geometry.coordinates[0],l=r.geometry.coordinates[0];i=Xr(s,l)}else n.geometry.type==="LineString"&&r.geometry.type==="LineString"&&(i=Qr(n.geometry.coordinates,r.geometry.coordinates));if(!i){alert(a("alert_noOverlap"));return}qe({type:"Point",coordinates:i},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:a("previewPointLabel")}),N(),O(),V()}function tl(){Es(()=>le())}function Lr(){e.selectedFeatureIds.length!==0&&(e.project.features.forEach(t=>{if(e.selectedFeatureIds.includes(t.properties.id)&&t.properties.type==="area"&&t.geometry.type==="Polygon"){const o=!!t.properties.isAccessible;t.properties.isAccessible=!o}}),N(),O(),$())}function nl(){const t=e.project.features.some(n=>e.selectedFeatureIds.includes(n.properties.id)&&n.properties.type==="area"&&n.geometry.type==="Polygon"),o=document.getElementById("ctx-menu-toggle-accessibility");o&&(o.style.display=t?"":"none"),Ct&&(Ct.disabled=!t)}function xo(t){St&&(St.innerHTML="",t.forEach((o,n)=>{const r=document.createElement("div");r.style.display="flex",r.style.alignItems="center",r.style.gap="0.5rem",r.style.margin="0.25rem 0";const i=document.createElement("input");i.type="text",i.value=o,i.style.flex="1",i.addEventListener("input",()=>{t[n]=i.value});const s=document.createElement("button");s.textContent="×",s.className="mini-btn",s.addEventListener("click",()=>{t.splice(n,1),xo(t)}),r.appendChild(i),r.appendChild(s),St.appendChild(r)}))}function ol(){if(!ft||!St)return;const t=e.project.features.filter(i=>e.selectedFeatureIds.includes(i.properties.id));if(t.length!==1){ce&&je&&(je.textContent=a("alert_renameSelectOne"),ce.classList.remove("hidden"),Pt?.addEventListener("click",()=>ce.classList.add("hidden")),Bt?.addEventListener("click",()=>ce.classList.add("hidden")));return}const o=t[0],n=Array.isArray(o.properties.contents)?[...o.properties.contents]:[];xo(n),ft.classList.remove("hidden");const r=()=>{if(!Ze)return;const i=Ze.value.trim();i!==""&&(n.push(i),Ze.value="",xo(n))};Jn&&(Jn.onclick=r),Ze&&(Ze.onkeydown=i=>{i.key==="Enter"&&r()}),Xn&&(Xn.onclick=()=>{o.properties.contents=n.filter(i=>i.trim()!==""),N(),O(),ft?.classList.add("hidden"),$()}),Qn&&(Qn.onclick=()=>{ft?.classList.add("hidden")})}function Ho(t){switch(t){case 1:return a("weekdayMon");case 2:return a("weekdayTue");case 3:return a("weekdayWed");case 4:return a("weekdayThu");case 5:return a("weekdayFri");case 6:return a("weekdaySat");case 0:return a("weekdaySun");default:return""}}function Eo(t){It&&(It.innerHTML="",t.forEach((o,n)=>{const r=document.createElement("div");r.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const i=document.createElement("span");i.textContent=o.name?String(o.name):"",i.style.fontWeight="600";const s=document.createElement("span");if(typeof o.weekday=="number"){const g=Ho(o.weekday);s.textContent=g}else o.date?s.textContent=o.date:o.startDate&&o.endDate?s.textContent=`${o.startDate}–${o.endDate}`:s.textContent="";const l=document.createElement("span");o.start&&o.end&&(l.textContent=`${o.start}–${o.end}`);const c=document.createElement("span");c.textContent=o.note||"",c.style.flex="1";const d=document.createElement("button");d.textContent="×",d.className="mini-btn",d.addEventListener("click",()=>{t.splice(n,1),Eo(t)}),o.name&&r.appendChild(i),r.appendChild(s),r.appendChild(l),r.appendChild(c),r.appendChild(d),It.appendChild(r)}))}function Mr(){if(!bt||!It)return;const t=e.project.features.filter(s=>e.selectedFeatureIds.includes(s.properties.id));if(t.length!==1){ce&&je&&(je.textContent=a("alert_renameSelectOne"),ce.classList.remove("hidden"),Pt?.addEventListener("click",()=>ce.classList.add("hidden")),Bt?.addEventListener("click",()=>ce.classList.add("hidden")));return}const o=t[0],n=Array.isArray(o.properties.occupancy)?JSON.parse(JSON.stringify(o.properties.occupancy)):[];Eo(n),bt.classList.remove("hidden");const r=()=>{const s=vt?.value||"date",l=s==="weekday",c=s==="date",d=s==="range";xt&&(xt.style.display=l?"":"none");const g=document.getElementById("occupancy-weekday-label");g&&(g.style.display=l?"":"none"),Vt&&(Vt.style.display=c?"":"none");const E=document.getElementById("occupancy-date-label");E&&(E.style.display=c?"":"none"),Wt&&(Wt.style.display=d?"":"none"),Kt&&(Kt.style.display=d?"":"none");const f=document.getElementById("occupancy-range-start-label");f&&(f.style.display=d?"":"none");const h=document.getElementById("occupancy-range-end-label");h&&(h.style.display=d?"":"none"),qt&&(qt.style.display=l||c||d?"":"none"),Gt&&(Gt.style.display=l||c||d?"":"none");const w=document.getElementById("occupancy-start-label");w&&(w.style.display=l||c||d?"":"none");const x=document.getElementById("occupancy-end-label");x&&(x.style.display=l||c||d?"":"none")};r(),vt&&(vt.onchange=r);const i=()=>{const s=vt?.value||"date",l=qt?.value||"",c=Gt?.value||"",d=Ut?.value||"",g=o.properties.label||"";if(s==="weekday"){const E=xt?.value?parseInt(xt.value,10):NaN;if(isNaN(E)||!l||!c)return;n.push({name:g,weekday:E,start:l,end:c,note:d})}else if(s==="date"){const E=Vt?.value||"";if(!E||!l||!c)return;n.push({name:g,date:E,start:l,end:c,note:d})}else if(s==="range"){const E=Wt?.value||"",f=Kt?.value||"";if(!E||!f)return;n.push({name:g,startDate:E,endDate:f,start:l||void 0,end:c||void 0,note:d})}Ut&&(Ut.value=""),Eo(n)};eo&&(eo.onclick=i),to&&(to.onclick=()=>{o.properties.occupancy=n,N(),O(),bt?.classList.add("hidden"),$()}),no&&(no.onclick=()=>{bt?.classList.add("hidden")})}function He(t){if(Zt&&(Zt.innerHTML="",t.weekly&&Object.keys(t.weekly).forEach(o=>{const n=t.weekly[o];n.forEach((r,i)=>{const s=document.createElement("div");s.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const l=document.createElement("span");l.textContent=`${Ho(Number(o))}`;const c=document.createElement("span");c.textContent=`${r.start}–${r.end}`;const d=document.createElement("button");d.textContent="×",d.className="mini-btn",d.addEventListener("click",()=>{n.splice(i,1),n.length===0&&delete t.weekly[o],He(t)}),s.appendChild(l),s.appendChild(c),s.appendChild(d),Zt.appendChild(s)})})),Yt){Yt.innerHTML="";const o=Array.isArray(t.exceptions)?t.exceptions:[];o.forEach((n,r)=>{const i=document.createElement("div");i.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const s=document.createElement("span");s.textContent=n.date;const l=document.createElement("span");n.start&&n.end&&(l.textContent=`${n.start}–${n.end}`);const c=document.createElement("button");c.textContent="×",c.className="mini-btn",c.addEventListener("click",()=>{o.splice(r,1),t.exceptions=o,He(t)}),i.appendChild(s),i.appendChild(l),i.appendChild(c),Yt.appendChild(i)})}if(Jt){Jt.innerHTML="";const o=Array.isArray(t.ranges)?t.ranges:[];o.forEach((n,r)=>{const i=document.createElement("div");i.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const s=document.createElement("span");s.textContent=`${n.startDate}–${n.endDate}`;const l=document.createElement("span");n.start&&n.end&&(l.textContent=`${n.start}–${n.end}`);const c=document.createElement("button");c.textContent="×",c.className="mini-btn",c.addEventListener("click",()=>{o.splice(r,1),t.ranges=o,He(t)}),i.appendChild(s),i.appendChild(l),i.appendChild(c),Jt.appendChild(i)})}}function rl(t){const o=[];return t.weekly&&Object.keys(t.weekly).map(r=>Number(r)).sort((r,i)=>r-i).forEach(r=>{const i=Ho(r),s=t.weekly[r].map(l=>`${l.start}–${l.end}`).join(", ");o.push(`${i} ${s}`)}),Array.isArray(t.exceptions)&&t.exceptions.length>0&&o.push(`${a("openingHoursExceptions")}: ${t.exceptions.length}`),Array.isArray(t.ranges)&&t.ranges.length>0&&o.push(`${a("openingHoursRanges")}: ${t.ranges.length}`),o.join(" · ")}function Tr(){if(!Et)return;const t=e.project.features.filter(i=>e.selectedFeatureIds.includes(i.properties.id));if(t.length!==1){ce&&je&&(je.textContent=a("alert_renameSelectOne"),ce.classList.remove("hidden"),Pt?.addEventListener("click",()=>ce.classList.add("hidden")),Bt?.addEventListener("click",()=>ce.classList.add("hidden")));return}const o=t[0];let n={};const r=o.properties.opening_hours;r&&typeof r=="object"?n=JSON.parse(JSON.stringify(r)):n={weekly:{},exceptions:[],ranges:[]},He(n),Et.classList.remove("hidden"),ro&&(ro.onclick=()=>{const i=oo?.value?parseInt(oo.value,10):NaN,s=di?.value||"",l=pi?.value||"";isNaN(i)||!s||!l||(n.weekly[i]||(n.weekly[i]=[]),n.weekly[i].push({start:s,end:l}),He(n))}),io&&(io.onclick=()=>{const i=ui?.value||"",s=mi?.value||"",l=gi?.value||"";i&&(n.exceptions=Array.isArray(n.exceptions)?n.exceptions:[],n.exceptions.push({date:i,start:s||void 0,end:l||void 0}),He(n))}),so&&(so.onclick=()=>{const i=yi?.value||"",s=hi?.value||"",l=fi?.value||"",c=bi?.value||"";!i||!s||(n.ranges=Array.isArray(n.ranges)?n.ranges:[],n.ranges.push({startDate:i,endDate:s,start:l||void 0,end:c||void 0}),He(n))}),lo&&(lo.onclick=()=>{o.properties.opening_hours=n;const i=rl(n);sn.value=i,N(),O(),Et?.classList.add("hidden"),$()}),ao&&(ao.onclick=()=>{Et?.classList.add("hidden")})}function ne(){const t=document.getElementById("overview-stats-panel");if(!t)return;const o=e.project.properties.projectName||a("unnamedProject"),n=Be(),r=n.length,i=e.project.features.filter(d=>d.properties.type==="area"&&!d.properties.isPlaceholder).length,s=e.project.features.filter(d=>d.properties.type==="point").length;let l=`<div><span>${a("stat_project")}:</span><span class="value">${o}</span></div><div><span>${a("stat_floors")}:</span><span class="value">${r}</span></div><div><span>${a("stat_areas")}:</span><span class="value">${i}</span></div><div><span>${a("stat_points")}:</span><span class="value">${s}</span></div>`;t.innerHTML=l;const c=document.getElementById("overview-floor-list");c&&(c.innerHTML="",n.forEach(d=>{const g=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder).length,E=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point").length,f=document.createElement("div");f.className="floor-block";const h=document.createElement("div");h.className="floor-card";const w=document.createElement("img");w.className="floor-thumb",e.cachedFloorPlanImages[d]&&(w.src=e.cachedFloorPlanImages[d].src,h.classList.add("has-thumb"));const x=document.createElement("div");x.className="floor-meta";const S=document.createElement("div");S.className="name",S.textContent=d;const k=document.createElement("div");k.className="counts",k.textContent=`${a("stat_areas")}: ${g} · ${a("stat_points")}: ${E}`,x.appendChild(S),x.appendChild(k),h.appendChild(w),h.appendChild(x),h.addEventListener("click",()=>{e.activeFloorId=d,ae(),V()}),f.appendChild(h);const I=document.createElement("button");I.className="beacon-toggle";const M=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point"&&u.properties.subType==="beacon");I.textContent=`${a("overviewBeacons")} (${M.length})`;const L=document.createElement("div");L.className="beacon-section",I.addEventListener("click",()=>{L.style.display===""||L.style.display==="none"?(L.innerHTML="",M.forEach(b=>{const P=document.createElement("div");P.className="beacon-card";const C=document.createElement("div");C.className="beacon-meta";const B=document.createElement("div");B.className="name";const T=b.properties.beacon_serial||"",F=b.properties.label||a("point_beacon_label");B.textContent=T?`${F} · ${T}`:F;const m=document.createElement("div");m.className="counts";const v=b.properties.beacon_range,_=b.properties.beacon_note_de||b.properties.beacon_note_en||"",z=[];z.push(`${a("beacon_serial_label")}: ${T||"-"}`),typeof v=="number"&&z.push(`${a("beacon_range_label")}: ${v}`),_&&z.push(`${a("beacon_note_de_label")}: ${_}`),m.textContent=z.join(" · "),C.appendChild(B),C.appendChild(m),P.appendChild(C),P.addEventListener("click",()=>{e.activeFloorId=d,ae(),V()}),L.appendChild(P)}),L.style.display="block"):(L.style.display="none",L.innerHTML="")}),f.appendChild(I),f.appendChild(L);const j=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder),A=document.createElement("button");A.className="beacon-toggle",A.textContent=`${a("areas")} (${j.length})`;const D=document.createElement("div");D.className="area-section",A.addEventListener("click",()=>{if(D.style.display===""||D.style.display==="none"){const b=ue();D.innerHTML="",j.forEach(C=>{const B=document.createElement("div");B.className="area-card";const T=document.createElement("div");T.className="area-meta";const F=document.createElement("div");F.className="name";const m=C.properties.label||"";F.textContent=m;const v=document.createElement("div");v.className="counts";const _=b[C.properties.subType]?.label||C.properties.subType,z=Array.isArray(C.properties.contents)?C.properties.contents.filter(Y=>Y.trim()!==""):[],R=z.length>0?z.join(", "):"-";v.textContent=`${a("elementType")}: ${_} · ${a("roomContentsTitle")}: ${R}`,T.appendChild(F),T.appendChild(v),B.appendChild(T),B.addEventListener("click",()=>{e.activeFloorId=d,ae(),V()}),D.appendChild(B)});const P=j.filter(C=>!!C.properties.isAccessible);if(P.length>0){const C=document.createElement("div");C.className="area-meta";const B=document.createElement("div");B.className="name",B.textContent=a("accessibleRoomsHeader"),C.appendChild(B),D.appendChild(C),P.forEach(T=>{const F=document.createElement("div");F.className="area-card";const m=document.createElement("div");m.className="area-meta";const v=document.createElement("div");v.className="name",v.textContent=T.properties.label||"";const _=document.createElement("div");_.className="counts",_.textContent="Barrierefrei",m.appendChild(v),m.appendChild(_),F.appendChild(m),F.addEventListener("click",()=>{e.activeFloorId=d,ae(),V()}),D.appendChild(F)})}D.style.display="block"}else D.style.display="none",D.innerHTML=""}),f.appendChild(A),f.appendChild(D),c.appendChild(f)}))}function il(){ie=document.getElementById("canvas"),er=document.getElementById("scrollbar-x"),tr=document.getElementById("scrollbar-y"),An=document.getElementById("thumb-x"),zn=document.getElementById("thumb-y"),ei=document.getElementById("crosshair-h"),ti=document.getElementById("crosshair-v"),Nn=document.getElementById("floor-select"),Oe=document.getElementById("projectName"),$n=document.getElementById("element-type-select"),Te=document.getElementById("deleteBtn"),ni=document.getElementById("element-options"),oi=document.getElementById("corner-box"),me=document.getElementById("info-modal"),ri=document.getElementById("info-modal-close-btn"),ii=me.querySelector(".modal-overlay"),nr=document.getElementById("properties-content"),or=document.getElementById("properties-placeholder"),on=document.getElementById("properties-label-input"),rn=document.getElementById("properties-type-select"),On=document.getElementById("properties-description-input"),sn=document.getElementById("properties-opening-hours-input"),Hn=document.getElementById("properties-room-number-input"),Rn=document.getElementById("properties-designation-select"),ws({propertiesContent:nr,propertiesPlaceholder:or,propertiesLabelInput:on,propertiesTypeSelect:rn}),rr=document.getElementById("context-menu"),Vn=document.getElementById("ctx-menu-copy"),si=document.getElementById("ctx-menu-delete"),li=document.getElementById("ctx-menu-rename"),Vn=document.getElementById("ctx-menu-copy"),ir=document.getElementById("ctx-menu-type-submenu"),qn=document.getElementById("ctx-floor-submenu"),Gn=document.getElementById("ctx-floor-add"),Wn=document.getElementById("ctx-floor-rename"),ln=document.getElementById("ctx-menu-add-overlap-point"),Kn=document.getElementById("ctx-menu-toggle-accessibility"),Un=document.getElementById("ctx-menu-edit-contents"),sr=document.getElementById("input-prompt-modal"),lr=document.getElementById("input-prompt-label"),ar=document.getElementById("input-prompt-input"),cr=document.getElementById("input-prompt-ok"),dr=document.getElementById("input-prompt-cancel"),ce=document.getElementById("confirm-modal"),je=document.getElementById("confirm-message"),Pt=document.getElementById("confirm-ok"),Bt=document.getElementById("confirm-cancel"),pr=document.getElementById("loading-modal"),ur=document.getElementById("loading-message"),mr=document.getElementById("loading-ok"),ft=document.getElementById("room-contents-modal"),St=document.getElementById("room-contents-list"),Ze=document.getElementById("room-contents-new-item"),Jn=document.getElementById("room-contents-add-btn"),Xn=document.getElementById("room-contents-save"),Qn=document.getElementById("room-contents-cancel"),Ct=document.getElementById("toggleAccessibleBtn"),Zn=document.getElementById("ctx-menu-edit-occupancy"),Yn=document.getElementById("ctx-menu-edit-opening-hours"),bt=document.getElementById("occupancy-modal"),It=document.getElementById("occupancy-list"),vt=document.getElementById("occupancy-type"),xt=document.getElementById("occupancy-weekday"),Vt=document.getElementById("occupancy-date"),qt=document.getElementById("occupancy-start"),Gt=document.getElementById("occupancy-end"),Wt=document.getElementById("occupancy-range-start"),Kt=document.getElementById("occupancy-range-end"),Ut=document.getElementById("occupancy-note"),eo=document.getElementById("occupancy-add-btn"),to=document.getElementById("occupancy-save"),no=document.getElementById("occupancy-cancel"),ai=document.getElementById("open-occupancy-modal-btn"),Et=document.getElementById("opening-hours-modal"),ci=document.getElementById("open-opening-hours-modal-btn"),Zt=document.getElementById("opening-hours-weekly-list"),Yt=document.getElementById("opening-hours-exceptions-list"),Jt=document.getElementById("opening-hours-ranges-list"),oo=document.getElementById("opening-hours-weekday"),di=document.getElementById("opening-hours-start"),pi=document.getElementById("opening-hours-end"),ro=document.getElementById("opening-hours-add-rule"),ui=document.getElementById("opening-hours-ex-date"),mi=document.getElementById("opening-hours-ex-start"),gi=document.getElementById("opening-hours-ex-end"),io=document.getElementById("opening-hours-add-exception"),yi=document.getElementById("opening-hours-range-start"),hi=document.getElementById("opening-hours-range-end"),fi=document.getElementById("opening-hours-range-time-start"),bi=document.getElementById("opening-hours-range-time-end"),so=document.getElementById("opening-hours-add-range"),lo=document.getElementById("opening-hours-save"),ao=document.getElementById("opening-hours-cancel"),co=document.getElementById("type-manager-modal"),vi=document.getElementById("type-manager-close-btn"),gr=document.getElementById("type-manager-list"),yr=document.getElementById("type-manager-details-content"),hr=document.getElementById("type-manager-placeholder"),po=document.getElementById("type-name-input"),fr=document.getElementById("type-editor-area"),uo=document.getElementById("type-fill-color-input"),br=document.getElementById("type-fill-color-swatch"),mo=document.getElementById("type-fill-opacity-slider"),go=document.getElementById("type-stroke-color-input"),vr=document.getElementById("type-stroke-color-swatch"),xr=document.getElementById("type-editor-point"),Er=document.getElementById("type-icon-library"),yo=document.getElementById("type-icon-color-input"),xi=document.getElementById("type-manager-new-btn"),ho=document.getElementById("type-manager-delete-btn"),Ei=document.getElementById("type-manager-save-btn"),wi=document.getElementById("manage-types-btn"),an=document.getElementById("new-type-choice-modal"),Si=document.getElementById("choose-type-area"),Ii=document.getElementById("choose-type-point"),ki=document.getElementById("new-type-choice-cancel"),fo=document.getElementById("lang-trigger"),we=document.getElementById("lang-menu"),zo=document.getElementById("active-lang-display"),No=document.getElementById("theme-trigger"),Lt=document.getElementById("theme-icon"),Mt=document.getElementById("lang-icon"),bo=document.getElementById("type-font-color-input"),vo=document.getElementById("type-font-size-input"),cn=document.getElementById("type-text-style-header"),dn=document.getElementById("type-area-style-header"),pn=document.getElementById("type-point-style-header"),wr=document.getElementById("type-preview"),un=document.getElementById("type-preview-header"),Sr=document.getElementById("type-preview-area"),Ir=document.getElementById("type-preview-area-rect"),mn=document.getElementById("type-preview-area-label"),kr=document.getElementById("type-preview-point"),Pr=document.getElementById("type-preview-point-icon"),gn=document.getElementById("type-preview-point-label"),Ss({canvas:ie,scrollbarX:er,scrollbarY:tr,thumbX:An,thumbY:zn}),Cs({canvas:ie}),As({typeManagerModal:co,typeManagerList:gr,typeManagerDetailsContent:yr,typeManagerPlaceholder:hr,typeNameInput:po,typeEditorArea:fr,typeFillColorInput:uo,typeFillColorSwatch:br,typeFillOpacitySlider:mo,typeStrokeColorInput:go,typeStrokeColorSwatch:vr,typeEditorPoint:xr,typeIconLibrary:Er,typeIconColorInput:yo,typeManagerDeleteBtn:ho,newTypeChoiceModal:an,typeFontColorInput:bo,typeFontSizeInput:vo,typeTextStyleHeader:cn,typeAreaStyleHeader:dn,typePointStyleHeader:pn,typePreviewContainer:wr,typePreviewHeader:un,typePreviewArea:Sr,typePreviewAreaRect:Ir,typePreviewAreaLabel:mn,typePreviewPoint:kr,typePreviewPointIcon:Pr,typePreviewPointLabel:gn}),Vs({showInputPrompt:ke,showConfirm:ve}),$o=document.getElementById("renameFloorBtn"),Yi({inputPromptModal:sr,inputPromptLabel:lr,inputPromptInput:ar,inputPromptOk:cr,inputPromptCancel:dr,confirmModal:ce,confirmMessage:je,confirmOk:Pt,confirmCancel:Bt,loadingModal:pr,loadingMessage:ur,loadingOk:mr}),fs({contextMenu:rr,ctxMenuTypeSubmenu:ir,ctxMenuAddOverlapPoint:ln}),al()}function Bi(){document.getElementById("backstage-close-btn").title=a("backToApp");const t=document.getElementById("backstage-panel");if(t&&t.classList.contains("visible")){const m=document.getElementById("backstage-title");if(m){const v=document.querySelector(".main-menu button.active")?.id.replace("-menu-trigger","");v==="file"?m.textContent=a("filePanelTitle"):v==="output"?m.textContent=a("outputPanelTitle"):v==="overview"&&(m.textContent=a("overviewPanelTitle"))}}{const v=document.getElementById("newProjectBtn")?.querySelector("span");v&&(v.textContent=a("newProject"))}{const v=document.getElementById("loadProjectBtn")?.querySelector("span");v&&(v.textContent=a("loadProject"))}{const v=document.getElementById("saveProjectBtn")?.querySelector("span");v&&(v.textContent=a("saveProject"))}{const v=document.getElementById("loadProjectFromServerBtn")?.querySelector("span");v&&(v.textContent=a("loadFromServer"))}{const v=document.getElementById("saveProjectToServerBtn")?.querySelector("span");v&&(v.textContent=a("saveToServer"))}{const m=document.getElementById("serverProjectLabel");m&&(m.textContent=a("serverProject"));const v=document.getElementById("serverVersionLabel");v&&(v.textContent=a("serverVersion"));const _=document.getElementById("serverProjectAddBtn"),z=_?.querySelector("span");z&&(z.textContent=a("add")),_&&_.setAttribute("title",a("add"));const R=document.getElementById("serverProjectDeleteBtn"),Y=R?.querySelector("span");Y&&(Y.textContent=a("deleteAction")),R&&R.setAttribute("title",a("deleteAction"));const X=document.getElementById("serverRefreshBtn");X&&(X.title=a("refresh"));const G=document.getElementById("serverVersionRefreshBtn");G&&(G.title=a("refresh"));const te=document.getElementById("serverLoadBtn")?.querySelector("span");te&&(te.textContent=a("load"));const q=document.getElementById("serverLoadLatestBtn")?.querySelector("span");q&&(q.textContent=a("latestVersion"));const W=document.getElementById("serverSavePanelBtn")?.querySelector("span");W&&(W.textContent=a("save"));const J=document.getElementById("serverVersionAddBtn"),De=J?.querySelector("span");De&&(De.textContent=a("add")),J&&J.setAttribute("title",a("add"));const Ke=document.getElementById("serverVersionDeleteBtn"),it=Ke?.querySelector("span");it&&(it.textContent=a("deleteAction")),Ke&&Ke.setAttribute("title",a("deleteAction"))}{const v=document.getElementById("Einleitung")?.querySelector("span");v&&(v.textContent=a("introduction"))}{const v=document.getElementById("exportGeoJsonBtn")?.querySelector("span");v&&(v.textContent=a("exportGeoJson"))}{const m=document.querySelector('.sponsor-display p[data-i18n="sponsoredByMinew"]');m&&(m.textContent=a("sponsoredByMinew"));const v=document.querySelector('.sponsor-display p[data-i18n="supportedByPalfinger"]');v&&(v.textContent=a("supportedByPalfinger"));const _=document.querySelector('.sponsor-footer p[data-i18n="sponsoredByMinew"]');_&&(_.textContent=a("sponsoredByMinew"))}{const m=document.getElementById("imprintBtn"),v=m?.querySelector('span[data-i18n="imprint"]');v&&(v.textContent=a("imprint")),m&&m.setAttribute("title",a("imprint"))}{const m=document.getElementById("contactBtn"),v=m?.querySelector('span[data-i18n="contact"]');v&&(v.textContent=a("contact")),m&&m.setAttribute("title",a("contact"))}{const m=document.getElementById("privacyBtn"),v=m?.querySelector('span[data-i18n="privacy"]');v&&(v.textContent=a("privacy")),m&&m.setAttribute("title",a("privacy"))}{const m=document.getElementById("sponsorsBtn"),v=m?.querySelector('span[data-i18n="sponsorsButtonTitle"]');v&&(v.textContent=a("sponsorsButtonTitle")),m&&m.setAttribute("title",a("sponsorsButtonTitle"))}const o=document.getElementById("showGeoJsonBtn"),n=document.getElementById("live-geojson-output"),r=n?n.style.display==="block":!1;{const m=o?.querySelector("span");m&&(m.textContent=a(r?"hideCode":"showLiveCode"))}const i=document.querySelector(".toolbar-section:nth-child(1) h2");i?.childNodes[0]&&(i.childNodes[0].textContent=a("project")+" ");const s=document.getElementById("projectName");{const m=s?.parentElement?.querySelector("label");m&&(m.textContent=a("projectName"))}s&&(s.placeholder=a("enterProjectName"));const l=document.querySelector(".toolbar-section:nth-child(2) h2");l?.childNodes[0]&&(l.childNodes[0].textContent=a("edit")+" ");{const v=document.getElementById("undoBtn")?.querySelector("span");v&&(v.textContent=a("undo"))}{const v=document.getElementById("redoBtn")?.querySelector("span");v&&(v.textContent=a("redo"))}const c=document.querySelector(".toolbar-section:nth-child(3) h2");c?.childNodes[0]&&(c.childNodes[0].textContent=a("floors")+" ");{const v=document.getElementById("floor-select")?.parentElement?.querySelector("label");v&&(v.textContent=a("currentFloor"))}{const v=document.getElementById("addFloorBtn")?.querySelector("span");v&&(v.textContent=a("newFloor"))}{const m=$o?.querySelector("span");m&&(m.textContent=a("rename"))}const d=document.querySelector("#floor-select + .button-group button:nth-child(3)");d&&(d.querySelector("span").textContent=a("floorplan"));const g=document.querySelector(".toolbar-section:nth-child(4) h2");g?.childNodes[0]&&(g.childNodes[0].textContent=a("tools")+" ");{const v=document.getElementById("mode-pan")?.querySelector("span");v&&(v.textContent=a("pan"))}{const v=document.getElementById("mode-select")?.querySelector("span");v&&(v.textContent=a("select"))}{const v=document.getElementById("mode-move-element")?.querySelector("span");v&&(v.textContent=a("moveElement"))}{const v=document.getElementById("mode-calibrate")?.querySelector("span");v&&(v.textContent=a("calibrateScale"))}{const m=document.getElementById("mode-merge");if(m){const v=m.querySelector("span");v&&(v.textContent=a("merge"))}}{const v=document.getElementById("deleteBtn")?.querySelector("span");v&&(v.textContent=a("delete"))}{const m=document.querySelectorAll(".tool-buttons .toolbar-separator");m[0]&&(m[0].textContent=a("areas")),m[1]&&(m[1].textContent=a("linesAndPoints"))}{const v=document.getElementById("mode-area")?.querySelector("span");v&&(v.textContent=a("rectangle"))}{const v=document.getElementById("mode-square")?.querySelector("span");v&&(v.textContent=a("square"))}{const v=document.getElementById("mode-polygon")?.querySelector("span");v&&(v.textContent=a("polygon"))}if(qn){const m=qn.parentElement;m&&m.childNodes[0]&&(m.childNodes[0].textContent=a("floors"));const v=document.getElementById("ctx-floor-add");v&&(v.textContent=a("newFloor"));const _=document.getElementById("ctx-floor-rename");_&&(_.textContent=a("renameFloor"))}{const m=document.getElementById("ctx-menu-toggle-accessibility");m&&(m.textContent=a("toggleAccessibility"))}{const m=document.getElementById("ctx-menu-edit-contents");m&&(m.textContent=a("editRoomContents"))}{const m=document.getElementById("ctx-menu-edit-occupancy");m&&(m.textContent=a("occupancyEdit"));const v=document.getElementById("ctx-menu-edit-opening-hours");v&&(v.textContent=a("openingHoursEdit"))}{const v=document.getElementById("mode-circle")?.querySelector("span");v&&(v.textContent=a("circle"))}{const v=document.getElementById("mode-line")?.querySelector("span");v&&(v.textContent=a("line"))}{const v=document.getElementById("mode-arc")?.querySelector("span");v&&(v.textContent=a("arc"))}{const v=document.getElementById("mode-point")?.querySelector("span");v&&(v.textContent=a("point"))}{const v=document.getElementById("mode-area")?.querySelector("span");v&&(v.textContent=a("rectangle"))}{const v=document.getElementById("mode-square")?.querySelector("span");v&&(v.textContent=a("square"))}{const v=document.getElementById("element-type-select")?.parentElement?.querySelector("label");v&&(v.textContent=a("elementType"))}{const v=document.getElementById("manage-types-btn")?.querySelector("span");v&&(v.textContent=a("manageTypes"))}{const v=document.getElementById("copyBtn")?.querySelector("span");v&&(v.textContent=a("copy"))}{const v=document.getElementById("toggleAccessibleBtn")?.querySelector("span");v&&(v.textContent=a("accessible"))}{const m=document.getElementById("simulateSignalBtn"),v=m?.querySelector("span");v&&(v.textContent=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal")),m&&(m.classList.toggle("active",e.showBeaconHeatmap),m.setAttribute("aria-pressed",e.showBeaconHeatmap?"true":"false"),m.title=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal"))}const E=document.querySelector("#properties-panel h2");E?.childNodes[0]&&(E.childNodes[0].textContent=a("properties")+" ");{const m=document.getElementById("properties-label-input")?.parentElement?.querySelector("label");m&&(m.textContent=a("label")),m&&(m.title=a("properties_label_desc"))}{const m=document.getElementById("beacon-fields-title");m&&(m.textContent=a("beacon_parameters"))}{const m=document.querySelector('label[for="beacon-uuid-input"]');m&&(m.textContent=a("beacon_uuid_label"))}{const m=document.querySelector('label[for="beacon-serial-input"]');m&&(m.textContent=a("beacon_serial_label")),m&&(m.title=a("beacon_serial_desc"))}{const m=document.querySelector('label[for="beacon-major-input"]');m&&(m.textContent=a("beacon_major_label"))}{const m=document.querySelector('label[for="beacon-minor-input"]');m&&(m.textContent=a("beacon_minor_label"))}{const m=document.querySelector('label[for="beacon-installation-input"]');m&&(m.textContent=a("beacon_installation_label")),m&&(m.title=a("beacon_installation_desc"))}{const m=document.querySelector('label[for="beacon-range-input"]');m&&(m.textContent=a("beacon_range_label")),m&&(m.title=a("beacon_range_desc"))}{const m=document.querySelector('label[for="beacon-number-input"]');m&&(m.textContent=a("beacon_number_label")),m&&(m.title=a("beacon_number_desc"))}{const m=document.querySelector('label[for="beacon-note-de-input"]');m&&(m.textContent=a("beacon_note_de_label")),m&&(m.title=a("beacon_note_de_desc"))}{const m=document.querySelector('label[for="beacon-note-en-input"]');m&&(m.textContent=a("beacon_note_en_label")),m&&(m.title=a("beacon_note_de_desc"))}const f=document.getElementById("properties-label-input");f&&(f.placeholder=a("enterElementLabel"));{const m=document.getElementById("beacon-serial-input");m&&(m.placeholder=a("beacon_serial_label"))}{const m=document.getElementById("beacon-number-input");m&&(m.placeholder=a("beacon_number_label"))}{const m=document.getElementById("beacon-installation-input");m&&(m.placeholder=a("beacon_installation_label"),m.title=a("beacon_installation_label"))}{const m=document.getElementById("beacon-range-input");m&&(m.placeholder=a("beacon_range_label"))}{const m=document.getElementById("beacon-note-de-input");m&&(m.placeholder=a("beacon_note_de_label"))}{const v=document.getElementById("properties-type-select")?.parentElement?.querySelector("label");v&&(v.textContent=a("elementType"))}{const m=document.getElementById("properties-placeholder");m&&(m.textContent=a("noElementSelected"))}const h=document.querySelector(".toolbar-section:nth-child(5) h2");h?.childNodes[0]&&(h.childNodes[0].textContent=a("viewAndLayers")+" ");const w=document.getElementById("view-grid-sep");w&&(w.textContent=a("grid"));const x=document.getElementById("view-layers-sep");x&&(x.textContent=a("layers"));const S=document.getElementById("analysis-sep");S&&(S.textContent=a("analysis"));{const v=document.getElementById("toggleGridBtn")?.parentElement?.querySelector("span");v&&(v.textContent=a("showGrid"))}{const v=document.getElementById("toggleSnapBtn")?.parentElement?.querySelector("span");v&&(v.textContent=a("snapToGrid"))}{const m=document.querySelector('label[for="gridSizeInput"]');m&&(m.textContent=a("size"))}{const v=document.getElementById("gridMetersInput")?.parentElement?.querySelector("label");v&&(v.textContent=a("metersPerCell"))}{const v=document.querySelector('.layer-toggle[data-layer="area"]')?.parentElement?.querySelector("span");v&&(v.textContent=a("layersAreas"))}{const v=document.querySelector('.layer-toggle[data-layer="path"]')?.parentElement?.querySelector("span");v&&(v.textContent=a("layersPaths"))}{const v=document.querySelector('.layer-toggle[data-layer="point"]')?.parentElement?.querySelector("span");v&&(v.textContent=a("layersPoints"))}{const m=document.getElementById("dimensions-sep");m&&(m.textContent=a("dimensions"));const _=document.getElementById("toggleAreaDimensions")?.parentElement?.querySelector("span");_&&(_.textContent=a("showEdgeLengths"));const R=document.getElementById("togglePathLengths")?.parentElement?.querySelector("span");R&&(R.textContent=a("showLineLengths"));const X=document.getElementById("toggleCircleRadius")?.parentElement?.querySelector("span");X&&(X.textContent=a("showCircleRadius"));const Q=document.getElementById("toggleBeaconRing")?.parentElement?.querySelector("span");Q&&(Q.textContent=a("showBeaconRangeRing"))}{const m=document.getElementById("intro-content");m&&(m.innerHTML=a("intro_full_content"))}const k=document.getElementById("show3DViewBtn");k&&(k.querySelector("span").textContent=document.getElementById("floor3DView")?.style.display==="flex"?a("backToApp"):a("preview3D"));{const m=document.querySelector("#type-manager-modal h2");m&&(m.textContent=a("manageTypesTitle"));const v=document.querySelector("#type-manager-modal h4");v&&(v.textContent=a("types"));const _=document.getElementById("type-manager-new-btn");_&&(_.textContent=a("newType"));const z=document.getElementById("type-name-input"),R=z?.parentElement?.querySelector("label");R&&(R.textContent=a("typeName")),z&&(z.placeholder=a("exampleMarketing"))}cn&&(cn.textContent=a("textStyle")),dn&&(dn.textContent=a("areaStyle")),pn&&(pn.textContent=a("pointStyle"));{const m=document.getElementById("type-font-size-input")?.parentElement?.querySelector("label");m&&(m.textContent=a("fontSize"),m.title=a("fontSizeDesc"))}{const m=document.getElementById("type-font-color-input")?.parentElement?.querySelector("label");m&&(m.textContent=a("fontColor"),m.title=a("fontColorDesc"))}const I=document.getElementById("ctx-menu-rename");I&&(I.textContent=a("rename"));const M=document.getElementById("ctx-menu-copy");M&&(M.textContent=a("copy"));const L=document.querySelector("#context-menu .has-submenu");L&&L.firstChild&&L.firstChild.textContent&&(L.firstChild.textContent=a("changeType"));const j=document.getElementById("ctx-menu-add-overlap-point");j&&(j.textContent=a("ctxAddOverlapPoint"));const A=document.getElementById("type-fill-color-input").parentElement.querySelector("label");A.textContent=a("fillColor"),A.title=a("fillColorDesc"),document.getElementById("type-fill-color-swatch").title=a("currentFillColor");const D=document.getElementById("type-fill-opacity-slider").parentElement.querySelector("label");D.textContent=a("fillOpacity"),D.title=a("fillOpacityDesc");const u=document.getElementById("type-stroke-color-input").parentElement.querySelector("label");u.textContent=a("strokeColor"),u.title=a("strokeColorDesc"),document.getElementById("type-stroke-color-swatch").title=a("currentStrokeColor");const b=document.querySelector("#type-editor-point > label");b.textContent=a("iconSelection"),b.title=a("iconSelectionDesc");const P=document.getElementById("type-icon-color-input").parentElement.querySelector("label");P.textContent=a("iconColor"),P.title=a("iconColorDesc");{const m=document.getElementById("type-manager-delete-btn");m&&(m.textContent=a("deleteType"))}{const m=document.getElementById("type-manager-placeholder");m&&(m.textContent=a("typeManagerPlaceholder"))}document.getElementById("type-manager-save-btn").textContent=a("saveChangesAndClose"),un&&(un.textContent=a("typePreview")),mn&&(mn.textContent=a("previewAreaLabel")),gn&&(gn.textContent=a("previewPointLabel")),document.querySelector("#new-type-choice-modal h4").textContent=a("createNewElementType"),document.querySelector("#new-type-choice-modal p").textContent=a("chooseBaseType"),document.getElementById("choose-type-area").textContent=a("choiceArea"),document.getElementById("choose-type-point").textContent=a("choicePoint"),document.getElementById("new-type-choice-cancel").textContent=a("cancel"),document.getElementById("input-prompt-ok").textContent=a("ok"),document.getElementById("input-prompt-cancel").textContent=a("cancel"),document.getElementById("confirm-ok").textContent=a("ok"),document.getElementById("confirm-cancel").textContent=a("cancel");{const m=document.getElementById("room-contents-title");m&&(m.textContent=a("roomContentsTitle"));const v=document.getElementById("room-contents-new-item");v&&(v.placeholder=a("roomContentsPlaceholder"));const _=document.getElementById("room-contents-add-btn");_&&(_.textContent=a("roomContentsAdd"));const z=document.getElementById("room-contents-save");z&&(z.textContent=a("ok"));const R=document.getElementById("room-contents-cancel");R&&(R.textContent=a("cancel"))}{const m=document.getElementById("occupancy-title");m&&(m.textContent=a("occupancyTitle"));const v=document.getElementById("occupancy-type");v&&(v.options[0].text=a("occupancyTypeWeekday"),v.options[1].text=a("occupancyTypeDate"),v.options[2].text=a("occupancyTypeRange"));const _=document.getElementById("occupancy-type-label");_&&(_.textContent=a("occupancyTypeLabel"));const z=document.getElementById("occupancy-weekday");z&&(z.options[0].text=a("weekdayMon"),z.options[1].text=a("weekdayTue"),z.options[2].text=a("weekdayWed"),z.options[3].text=a("weekdayThu"),z.options[4].text=a("weekdayFri"),z.options[5].text=a("weekdaySat"),z.options[6].text=a("weekdaySun"));const R=document.getElementById("occupancy-weekday-label");R&&(R.textContent=a("occupancyWeekdayLabel"));const Y=document.getElementById("occupancy-date-label");Y&&(Y.textContent=a("occupancyDateLabel"));const X=document.getElementById("occupancy-start-label");X&&(X.textContent=a("occupancyStartLabel"));const G=document.getElementById("occupancy-end-label");G&&(G.textContent=a("occupancyEndLabel"));const Q=document.getElementById("occupancy-range-start-label");Q&&(Q.textContent=a("occupancyRangeStartLabel"));const te=document.getElementById("occupancy-range-end-label");te&&(te.textContent=a("occupancyRangeEndLabel"));const H=document.getElementById("occupancy-note");H&&(H.placeholder=a("occupancyNotePlaceholder"));const q=document.getElementById("occupancy-note-label");q&&(q.textContent=a("occupancyNoteLabel"));const K=document.getElementById("occupancy-add-btn");K&&(K.textContent=a("occupancyAdd"));const W=document.getElementById("occupancy-save");W&&(W.textContent=a("ok"));const J=document.getElementById("occupancy-cancel");J&&(J.textContent=a("cancel"))}{const m=document.getElementById("opening-hours-title");m&&(m.textContent=a("openingHoursTitle"));const v=document.getElementById("opening-hours-weekly-label");v&&(v.textContent=a("openingHoursWeekly"));const _=document.getElementById("opening-hours-exceptions-label");_&&(_.textContent=a("openingHoursExceptions"));const z=document.getElementById("opening-hours-ranges-label");z&&(z.textContent=a("openingHoursRanges"));const R=document.getElementById("opening-hours-weekday-label");R&&(R.textContent=a("occupancyWeekdayLabel"));const Y=document.getElementById("opening-hours-start-label");Y&&(Y.textContent=a("occupancyStartLabel"));const X=document.getElementById("opening-hours-end-label");X&&(X.textContent=a("occupancyEndLabel"));const G=document.getElementById("opening-hours-weekday");G&&(G.options[0].text=a("weekdayMon"),G.options[1].text=a("weekdayTue"),G.options[2].text=a("weekdayWed"),G.options[3].text=a("weekdayThu"),G.options[4].text=a("weekdayFri"),G.options[5].text=a("weekdaySat"),G.options[6].text=a("weekdaySun"));const Q=document.getElementById("opening-hours-ex-date-label");Q&&(Q.textContent=a("occupancyDateLabel"));const te=document.getElementById("opening-hours-ex-start-label");te&&(te.textContent=a("occupancyStartLabel"));const H=document.getElementById("opening-hours-ex-end-label");H&&(H.textContent=a("occupancyEndLabel"));const q=document.getElementById("opening-hours-range-start-label");q&&(q.textContent=a("occupancyRangeStartLabel"));const K=document.getElementById("opening-hours-range-end-label");K&&(K.textContent=a("occupancyRangeEndLabel"));const W=document.getElementById("opening-hours-range-time-start-label");W&&(W.textContent=a("occupancyStartLabel"));const J=document.getElementById("opening-hours-range-time-end-label");J&&(J.textContent=a("occupancyEndLabel"));const De=document.getElementById("opening-hours-add-rule");De&&(De.textContent=a("addRule"));const Ke=document.getElementById("opening-hours-add-exception");Ke&&(Ke.textContent=a("addException"));const it=document.getElementById("opening-hours-add-range");it&&(it.textContent=a("addRange"));const Ro=document.getElementById("opening-hours-save");Ro&&(Ro.textContent=a("ok"));const Vo=document.getElementById("opening-hours-cancel");Vo&&(Vo.textContent=a("cancel"))}document.getElementById("ctx-menu-rename").textContent=a("rename"),document.getElementById("ctx-menu-copy").textContent=a("copy");{const m=document.getElementById("ctx-menu-delete");m&&(m.textContent=a("delete"))}{const m=document.querySelector(".context-menu .has-submenu");m&&m.childNodes[0]&&(m.childNodes[0].textContent=a("changeType"))}{const m=document.getElementById("file-menu-trigger");m&&(m.textContent=a("file"))}{const m=document.getElementById("output-menu-trigger");m&&(m.textContent=a("output"))}{const m=document.getElementById("overview-menu-trigger");m&&(m.textContent=a("overview"))}const C={de:"Deutsch",en:"English"},B=e.activeLanguage,T=C[B]||B.toUpperCase();if(zo.textContent=T,we){const m=we.querySelector('button[data-lang="en"]'),v=we.querySelector('button[data-lang="de"]');m&&(m.textContent="English"),v&&(v.textContent="Deutsch")}const F=e.activeTheme==="dark";No.title=a(F?"lightMode":"darkMode"),Lt&&(Lt.src=F?"assets/lightMode.png":"assets/darkMode.png"),Mt&&(Mt.src=F?"assets/language-dark.png":"assets/language-light.png"),document.querySelector("#element-type-select optgroup:nth-child(1)")?.setAttribute("label",a("optgroupAreas")),document.querySelector("#element-type-select optgroup:nth-child(2)")?.setAttribute("label",a("optgroupPointElements")),document.querySelector("#element-type-select optgroup:nth-child(3)")?.setAttribute("label",a("optgroupConnectors"))}function Ci(t){if(e.activeLanguage===t)return;const o=e.activeLanguage;Fi(t),localStorage.setItem("imd_editor_language",t),e.activeLanguage=t,document.documentElement.lang=t,zo.textContent=t==="en"?"English":"Deutsch";const n=a("unnamedProject",o),r=a("unnamedProject",t);e.project.properties.projectName===n&&(e.project.properties.projectName=r,Oe&&(Oe.value=r),N()),Bi(),ne(),ae(),We(),le(),V()}function Li(t){e.activeTheme===t&&document.body.getAttribute("data-theme")===t||(e.activeTheme=t,document.body.setAttribute("data-theme",t),localStorage.setItem("imd_editor_theme",t),Lt&&(Lt.src=t==="dark"?"assets/lightMode.png":"assets/darkMode.png"),Mt&&(Mt.src=t==="dark"?"assets/language-dark.png":"assets/language-light.png"),Bi(),$())}function sl(){ie.addEventListener("wheel",Us,{passive:!1}),ie.addEventListener("contextmenu",Js),window.addEventListener("click",Le),ie.addEventListener("mousedown",u=>{if(u.button===1||e.currentMode==="pan"&&u.button===0){Is(u);return}if(u.button!==0)return;const b=tn({x:u.offsetX,y:u.offsetY});if(e.currentMode==="select"&&Fs(b))return;const P=Se(b);if((e.currentMode==="select"||e.currentMode==="move-element")&&P){if(e.isCtrlPressed){Pi(b);return}const C=P.properties.id;e.selectedFeatureIds.includes(C)||(e.selectedFeatureIds=[C],le(),$()),Ls(b);return}Zs(b)}),window.addEventListener("mouseup",u=>{Ps(),u.button===0&&(Ts(),_s(),be&&be.stop3DDrag())}),window.addEventListener("mousemove",u=>{const b=ie.getBoundingClientRect();if(e.mousePosScreen={x:u.clientX-b.left,y:u.clientY-b.top},e.mousePos=tn(e.mousePosScreen),ei.style.top=`${e.mousePosScreen.y}px`,ti.style.left=`${e.mousePosScreen.x}px`,e.isPanning){ks(u);return}if(e.isEditingPath){js(e.mousePos);return}if(e.isMovingElement){Ms(e.mousePos);return}if(e.threeDIsDragging&&be){be.do3DDrag(u);return}let P=!1;if(e.currentMode==="scissors"){let C;if(e.selectedFeatureIds.length===1){const B=e.project.features.find(T=>T.properties.id===e.selectedFeatureIds[0]);B&&B.geometry.type==="Polygon"&&(C=B)}else{const B=Se(e.mousePos);B&&B.geometry.type==="Polygon"&&(C=B)}if(C){const B=Go(e.mousePos,C.geometry);(B.index!==e.hoveredEdgeIndex||B.index!==-1&&e.hoveredFeatureId!==C.properties.id)&&(e.hoveredEdgeIndex=B.index,e.hoveredFeatureId=B.index!==-1?C.properties.id:null,P=!0)}else e.hoveredEdgeIndex!==-1&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,P=!0)}else if(e.isAltPressed&&e.currentMode==="select"&&e.selectedFeatureIds.length===1){const C=e.project.features.find(B=>B.properties.id===e.selectedFeatureIds[0]);if(C&&C.geometry.type==="Polygon"){const B=Go(e.mousePos,C.geometry);(B.index!==e.hoveredEdgeIndex||B.index!==-1&&e.hoveredFeatureId!==C.properties.id)&&(e.hoveredEdgeIndex=B.index,e.hoveredFeatureId=B.index!==-1?C.properties.id:null,P=!0)}}else e.hoveredEdgeIndex!==-1&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,P=!0);(e.tempShape||P||e.isShiftPressed)&&($(),O())}),ie.addEventListener("dblclick",u=>{u.preventDefault(),e.currentMode==="polygon"&&ps()}),An.addEventListener("mousedown",Jo),zn.addEventListener("mousedown",Jo),oi.addEventListener("dblclick",()=>{e.scale=1,e.pan={x:0,y:0},rt(),$()}),document.getElementById("mode-screenshot")?.addEventListener("click",()=>{const u=document.getElementById("canvas");if(!u)return;const b=document.createElement("a"),P=e.activeLanguage==="de"?"karte":"map",C=e.activeFloorId||"screenshot";b.download=`${P}-${C}.png`,b.href=u.toDataURL("image/png"),b.click()}),fo.addEventListener("click",u=>{u.stopPropagation(),we.style.display=we.style.display==="block"?"none":"block"}),we.addEventListener("click",u=>{const P=u.target.dataset.lang;P&&(Ci(P),we.style.display="none")}),window.addEventListener("click",u=>{!fo.contains(u.target)&&!we.contains(u.target)&&(we.style.display="none")}),No.addEventListener("click",()=>{Li(e.activeTheme==="light"?"dark":"light")}),Oe.addEventListener("input",()=>{e.project.properties.projectName=Oe.value,N(),ne(),O()}),document.getElementById("newProjectBtn").addEventListener("click",async()=>{if(!await ve(a("alert_newProjectConfirm")))return;const b=Be(),P=b.length>0?b[0]:Fe,C=await ke(a("prompt_newFloorName"),P);$r(!1,C||Fe)}),document.getElementById("saveProjectBtn").addEventListener("click",()=>Sn(Oe.value)),document.getElementById("exportGeoJsonBtn").addEventListener("click",()=>Sn(Oe.value)),document.getElementById("loadProjectFromServerBtn").addEventListener("click",async()=>{const u=document.getElementById("server-load-panel");if(u.classList.contains("hidden")){if(!se.isAvailable()){alert('Backend nicht verfügbar. Bitte API unter "/app/api" und "/api" starten oder Proxy konfigurieren.');return}u.classList.remove("hidden"),await n()}else u.classList.add("hidden")}),document.getElementById("saveProjectToServerBtn").addEventListener("click",async()=>{const u=document.getElementById("server-load-panel");if(u.classList.contains("hidden")){if(!se.isAvailable()){alert('Backend nicht verfügbar. Bitte API unter "/app/api" und "/api" starten oder Proxy konfigurieren.');return}u.classList.remove("hidden"),await n()}});const o=document.getElementById("serverSavePanelBtn");o&&o.addEventListener("click",async()=>{if(!se.isAvailable()){alert("Backend nicht verfügbar. Speichern zum Server ist derzeit deaktiviert.");return}const u=document.getElementById("serverProjectSelect"),b=document.getElementById("serverVersionSelect"),P=u?.value,C=P&&P!==""?parseInt(P,10):null,B=b?.value,T=B&&B!==""?parseInt(B,10):void 0;if(C!==null&&T!==void 0){const m=u?.selectedOptions?.[0]?.textContent||`#${C}`;if(!await ve(a("confirmOverwriteVersion",void 0,m,T)))return}const F=await Dr(C,T);await n(),u&&(u.value=String(F.id)),await(async()=>{const m=document.getElementById("serverVersionSelect");m&&(m.value=String(F.version))})()});async function n(){const u=document.getElementById("serverProjectSelect"),b=document.getElementById("serverVersionSelect"),P=document.getElementById("serverSaveHint");if(u.innerHTML="",b.innerHTML="",!se.isAvailable()){const H=document.createElement("option");H.value="",H.textContent="Backend nicht verfügbar",H.disabled=!0,u.appendChild(H),P&&(P.textContent="Kein Backend verbunden. Bitte API starten oder Proxy konfigurieren.");return}let B=(await se.listProjects()).slice();const T=H=>{u.innerHTML="";const q=document.createElement("option");q.value="",q.textContent=a("newProjectOption"),u.appendChild(q),H.forEach(K=>{const W=document.createElement("option");W.value=String(K.id),W.textContent=`${K.name} (#${K.id})`,u.appendChild(W)}),H.length>0?u.value=String(H[0].id):u.value=""};T(B),await Q();const F=document.getElementById("serverRefreshBtn");F&&(F.onclick=async()=>{B=(await se.listProjects()).slice(),T(B),await Q(),G(),te()});const m=document.getElementById("serverVersionRefreshBtn");m&&(m.onclick=async()=>{await Q(),G(),te()}),u.onchange=async()=>{await Q(),G(),te()},b.onchange=()=>{G(),te()};const v=document.getElementById("serverLoadBtn");v&&(v.onclick=async()=>{const H=parseInt(u.value,10),q=b.value,K=q?parseInt(q,10):void 0;await In(H,K)});const _=document.getElementById("serverLoadLatestBtn");_&&(_.onclick=async()=>{const H=parseInt(u.value,10);await In(H)});const z=document.getElementById("serverProjectAddBtn");z&&(z.onclick=async()=>{await ve(a("infoNewProject")),u.value="",await Q(),G()});const R=document.getElementById("serverProjectDeleteBtn");R&&(R.onclick=async()=>{const H=parseInt(u.value,10);if(isNaN(H))return;const q=u.selectedOptions?.[0]?.textContent||`#${H}`;if(!await ve(a("confirmDeleteProject",void 0,q,H)))return;await se.delete(H),B=(await se.listProjects()).slice(),T(B),await Q(),G()});const Y=document.getElementById("serverVersionAddBtn");Y&&(Y.onclick=()=>{ve(a("infoNewVersion")),b.value="",G()});const X=document.getElementById("serverVersionDeleteBtn");X&&(X.onclick=async()=>{const H=parseInt(u.value,10);if(isNaN(H))return;const q=b.value;if(!q){await ve(a("alertSelectVersionFirst"));return}const K=parseInt(q,10),W=u.selectedOptions?.[0]?.textContent||`#${H}`;await ve(a("confirmDeleteVersion",void 0,W,K,H))&&(await se.delete(H,K),await Q(),G())});function G(){const H=document.getElementById("serverProjectDeleteBtn"),q=document.getElementById("serverVersionDeleteBtn"),K=document.getElementById("serverProjectAddBtn"),W=document.getElementById("serverVersionAddBtn"),J=!!u.value,De=!!b.value;H&&(H.disabled=!J),q&&(q.disabled=!J||!De),K&&(K.disabled=!1),W&&(W.disabled=!J)}async function Q(){const H=parseInt(u.value,10);b.innerHTML="";const q=document.createElement("option");if(q.value="",q.textContent=a("newVersionOption"),b.appendChild(q),isNaN(H)){b.disabled=!0,te();return}else b.disabled=!1;(await se.listVersions(H)).sort((W,J)=>J-W).forEach(W=>{const J=document.createElement("option");J.value=String(W),J.textContent=String(W),b.appendChild(J)}),G(),te()}G(),te();function te(){if(!P)return;const H=u.value,q=b.value;if(!H){P.textContent=a("infoNewProject");return}const K=u.selectedOptions?.[0]?.textContent||`#${H}`;if(!q){P.textContent=a("infoNewVersion");return}const W=parseInt(q,10);P.textContent=a("saveTargetVersion",void 0,K,W)}}document.getElementById("loadProjectInput").addEventListener("change",u=>{const b=u.target.files?.[0];b&&(Ar(b),u.target.value="")}),document.getElementById("showGeoJsonBtn").addEventListener("click",()=>{const u=document.getElementById("live-geojson-output"),b=document.getElementById("showGeoJsonBtn"),P=u.style.display==="block";u.style.display=P?"none":"block",b.querySelector("span").textContent=a(P?"showLiveCode":"hideCode")}),document.getElementById("addFloorBtn").addEventListener("click",async()=>{const u=Be(),b=u.length===0?Fe:`Etage ${u.length+1}`,P=a("prompt_newFloorName"),C=await ke(P,b);C&&Zo(C)}),$o.addEventListener("click",async()=>{if(!e.activeFloorId){alert(a("alert_noActiveFloor"));return}const u=a("prompt_renameFloor",e.activeLanguage,e.activeFloorId),b=await ke(u,e.activeFloorId);b&&Yo(b)}),Nn.addEventListener("change",()=>{e.activeFloorId=Nn.value,e.selectedFeatureIds=[],Te.disabled=!0,$()}),document.getElementById("floorplanInput").addEventListener("change",async u=>{const b=u.target.files?.[0];if(b)try{await zr(b)}finally{u.target.value=""}}),document.getElementById("undoBtn").addEventListener("click",Ko),document.getElementById("redoBtn").addEventListener("click",Uo),Te.addEventListener("click",()=>{if(e.selectedFeatureIds.length>1){const u=Se(e.mousePos);u&&(e.selectedFeatureIds=[u.properties.id])}fn()});const r=document.getElementById("copyBtn");r&&r.addEventListener("click",()=>{e.selectedFeatureIds.length,Cr()}),Gn&&Gn.addEventListener("click",()=>{const u=a("prompt_newFloorName");ke(u,e.activeFloorId||"").then(b=>{b&&Zo(b),Le()})}),Wn&&Wn.addEventListener("click",()=>{if(!e.activeFloorId){alert(a("alert_noActiveFloor"));return}const u=a("prompt_renameFloor",e.activeLanguage,e.activeFloorId);ke(u,e.activeFloorId).then(b=>{b&&Yo(b),Le()})}),["select","pan","move-element","calibrate","merge","area","square","polygon","circle","line","arc","point"].forEach(u=>{const b=document.getElementById(`mode-${u}`);b&&b.addEventListener("click",()=>{if(e.currentMode===u&&!["select","pan","move-element"].includes(u)){document.getElementById("mode-select")?.click();return}switch(e.currentMode=u,e.tempShape=null,["area","polygon","circle","line","arc","point"].includes(u)&&(e.selectedFeatureIds=[]),We(),document.querySelectorAll(".tool-btn").forEach(T=>T.classList.remove("active")),b.classList.add("active"),u){case"pan":case"move-element":ie.style.cursor="grab";break;case"select":ie.style.cursor="default";break;case"calibrate":{ie.style.cursor="crosshair";const T=new CustomEvent("imd-info",{detail:{title:a("calibrateScale"),message:a("calibratePrompt")}});document.dispatchEvent(T);break}case"merge":ie.style.cursor="default",en();{const T=new CustomEvent("imd-info",{detail:{title:a("merge"),message:a("mergeHintShort")}});document.dispatchEvent(T)}break;case"scissors":ie.style.cursor="default";break;default:ie.style.cursor="crosshair";break}const C=["area","square","polygon","circle"].includes(u),B=u==="point";ni.style.display=C||B?"block":"none",C&&Br("area"),B&&Br("point"),Te.disabled=e.selectedFeatureIds.length===0,le(),$()})}),document.getElementById("show3DViewBtn").addEventListener("click",async()=>{const u=document.getElementById("floor3DView"),b=document.querySelector(".canvas-wrapper"),P=document.getElementById("show3DViewBtn").querySelector("span");u.style.display==="flex"?(u.style.display="none",b.style.display="grid",P.textContent=a("preview3D")):(be||(be=await Ne(()=>import("./3d-CatqN8zU.js"),__vite__mapDeps([0,1]))),wt||(wt=await Ne(()=>import("./floor3D-Bgv6vfVy.js"),[])),be.setup3DViewControls(),u.style.display="flex",b.style.display="none",P.textContent=a("backToApp"),e.threeDPan={x:50,y:50},e.threeDScale=.8,be.update3DFloorSelector(),wt.render3DFloorStack(e.project,"floor3DContent"),u.style.cursor="grab",u.addEventListener("mousedown",be.start3DDrag),u.addEventListener("wheel",be.handle3DZoom,{passive:!1}))}),hs($);const s=document.querySelector(".toolbar");s&&s.addEventListener("wheel",u=>{u.stopPropagation()},{passive:!0});function l(){const u=document.getElementById("intro-content"),b=document.getElementById("intro-logo-wrapper"),P=document.getElementById("intro-logo"),C=document.getElementById("intro-logo-row");if(b&&P&&(b.style.display="block",P.src="assets/company_logo.png",P.onerror=()=>{b.style.display="none"}),C){C.innerHTML="";const B=["assets/company_logo.png","assets/company_logo2.png","assets/company_logo3.png"];for(const T of B){const F=document.createElement("img");F.className="intro-logo-img",F.alt="Logo",F.src=T,F.onerror=()=>F.remove(),C.appendChild(F)}C.style.display="flex"}u&&(u.innerHTML=a("intro_full_content")),me.classList.remove("hidden")}document.getElementById("Einleitung").addEventListener("click",l);function c(u,b){const P=document.getElementById("intro-content"),C=document.getElementById("intro-logo-wrapper"),B=document.getElementById("intro-logo-row");C&&(C.style.display="none"),B&&(B.style.display="none"),P&&(P.innerHTML=`
        <h2>${a(u)}</h2>
        ${b}
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
  `;document.getElementById("imprintBtn")?.addEventListener("click",()=>{c("imprint",d)}),document.getElementById("contactBtn")?.addEventListener("click",()=>{c("contact",d)}),document.getElementById("privacyBtn")?.addEventListener("click",()=>{c("privacy","<p>Datenschutzbestimmungen...</p>")});const g=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 1.5rem; padding: 1rem 0;">
      <a href="https://www.minew.com/" target="_blank" rel="noopener noreferrer" style="display: block;">
        <img src="assets/minew.png" alt="Minew" style="height: 100px; width: auto; max-width: 100%; object-fit: contain;">
      </a>
      <a href="https://www.palfinger.com/de-at" target="_blank" rel="noopener noreferrer" style="display: block;">
        <img src="assets/palfinger.png" alt="Palfinger" style="height: 60px; width: auto; max-width: 100%; object-fit: contain;">
      </a>
    </div>
  `;document.getElementById("sponsorsBtn")?.addEventListener("click",()=>{c("sponsorsButtonTitle",g)}),ri.addEventListener("click",()=>{me.classList.add("hidden")}),ii.addEventListener("click",()=>{me.classList.add("hidden")}),document.addEventListener("imd-info",u=>{const b=u.detail||{},P=b.title||"Info",C=b.message||"",B=me.querySelector("h2"),T=me.querySelector("p"),F=me.querySelector("h4"),m=me.querySelector(".modal-content ul"),v=document.getElementById("intro-logo-wrapper"),_=document.getElementById("intro-logo-row"),z=document.getElementById("intro-content");B&&(B.textContent=P),T&&(T.textContent=C),F&&(F.style.display="none"),m&&(m.style.display="none"),v&&(v.style.display="none"),_&&(_.style.display="none"),z&&(z.innerHTML=""),me.classList.remove("hidden")}),on.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.label=on.value,N(),lt(),O())}),On.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.description=On.value,N(),lt(),O())}),sn.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.opening_hours=sn.value,N(),lt(),O())}),Hn.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.room_number=Hn.value,N(),lt(),O())}),Rn.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.designation=Rn.value,N(),lt(),O())}),rn.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.subType=rn.value,N(),V(),O(),ne(),le())});const E=document.getElementById("beacon-uuid-input"),f=document.getElementById("beacon-serial-input"),h=document.getElementById("beacon-major-input"),w=document.getElementById("beacon-minor-input"),x=document.getElementById("beacon-installation-input"),S=document.getElementById("beacon-range-input"),k=document.getElementById("beacon-note-de-input"),I=document.getElementById("beacon-note-en-input"),M=document.getElementById("beacon-activation-start-date"),L=document.getElementById("beacon-activation-end-date"),j=document.getElementById("beacon-activation-start-time"),A=document.getElementById("beacon-activation-end-time");E?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_uuid=E.value,N(),O(),ne(),$())}),f?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_serial=f.value,N(),O(),ne(),$())}),h?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);if(u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"){const b=parseInt(h.value,10);Number.isNaN(b)?delete u.properties.beacon_major:u.properties.beacon_major=b,N(),O(),ne(),$()}}),w?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);if(u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"){const b=parseInt(w.value,10);Number.isNaN(b)?delete u.properties.beacon_minor:u.properties.beacon_minor=b,N(),O(),ne(),$()}}),x?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_installation=x.value,N(),O(),ne(),$())}),S?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);if(u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"){const b=parseFloat(S.value);Number.isNaN(b)?delete u.properties.beacon_range:u.properties.beacon_range=b,N(),O(),ne(),$()}}),k?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_note_de=k.value,N(),O(),ne(),$())}),I?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_note_en=I.value,N(),O(),ne(),$())}),M?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.startDate=M.value,N(),O(),ne(),$())}),L?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.endDate=L.value,N(),O(),ne(),$())}),j?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.startTime=j.value,N(),O(),ne(),$())}),A?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.endTime=A.value,N(),O(),ne(),$())}),si.addEventListener("click",fn),ln&&ln.addEventListener("click",()=>{el(),Le()}),li.addEventListener("click",Xs),Vn.addEventListener("click",Cr),Kn&&Kn.addEventListener("click",()=>{Lr(),Le()}),Un&&Un.addEventListener("click",()=>{ol(),Le()}),Zn&&Zn.addEventListener("click",()=>{Mr(),Le()}),Yn&&Yn.addEventListener("click",()=>{Tr(),Le()}),Ct&&Ct.addEventListener("click",()=>{Lr()}),ai?.addEventListener("click",()=>Mr()),ci?.addEventListener("click",()=>Tr()),wi.addEventListener("click",zs),vi.addEventListener("click",Xo),Ei.addEventListener("click",Ns),xi.addEventListener("click",()=>an.classList.remove("hidden")),ho.addEventListener("click",$s),Si.addEventListener("click",()=>Qo("area")),Ii.addEventListener("click",()=>Qo("point")),ki.addEventListener("click",()=>an.classList.add("hidden")),[po,uo,mo,go,yo,bo,vo].forEach(u=>u.addEventListener("input",Kr)),window.addEventListener("keydown",u=>{if(document.activeElement?.tagName!=="INPUT"){if(u.key==="Escape"){co.classList.contains("hidden")?e.tempShape&&(e.tempShape=null,$(),Oo()):Xo(),e.selectedFeatureIds=[],Te.disabled=!0,le(),en(),$();const b=document.getElementById("mode-pan");b&&e.currentMode!=="pan"&&b.click()}if(u.key==="Shift"&&!e.isShiftPressed&&(e.isShiftPressed=!0,$()),u.key==="Control"&&!e.isCtrlPressed&&(e.isCtrlPressed=!0),u.key==="Alt"&&!e.isAltPressed&&(e.isAltPressed=!0,$()),u.key==="Delete"||u.key==="Backspace"){if(u.preventDefault(),e.editedFeatureId&&e.editedNodeIndex!==-1){const b=e.project.features.find(P=>P.properties.id===e.editedFeatureId);if(b&&b.geometry.type==="Polygon"){const P=b.geometry.coordinates[0];if(P.length>4){P.splice(e.editedNodeIndex,1),e.editedNodeIndex===0&&(P[P.length-1]=P[0]),e.editedNodeIndex=-1,N(),$();return}}}if(e.selectedFeatureIds.length>1&&!u.ctrlKey&&!u.metaKey){const b=Se(e.mousePos);b&&(e.selectedFeatureIds=[b.properties.id])}fn()}if(u.ctrlKey||u.metaKey)switch(u.key.toLowerCase()){case"z":u.preventDefault(),Ko();break;case"y":u.preventDefault(),Uo();break;case"a":{u.preventDefault();const b=e.project.features.filter(P=>P.properties.floor===e.activeFloorId);e.selectedFeatureIds=b.map(P=>P.properties.id),Te.disabled=e.selectedFeatureIds.length===0,le(),$();break}case"c":u.preventDefault(),Qs();break;case"v":u.preventDefault(),tl();break}u.key==="Enter"&&e.currentMode==="merge"&&e.project.features.filter(C=>C.properties.floor===e.activeFloorId).filter(C=>e.selectedFeatureIds.includes(C.properties.id)&&C.geometry.type==="Polygon").length>=2&&(u.preventDefault(),Ys())}}),window.addEventListener("keyup",u=>{u.key==="Shift"&&(e.isShiftPressed=!1,$()),u.key==="Control"&&(e.isCtrlPressed=!1),u.key==="Alt"&&(e.isAltPressed=!1,e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,$())}),document.querySelectorAll(".toolbar-header").forEach(u=>{u.addEventListener("click",()=>{u.classList.toggle("collapsed")})})}function ll(){il(),_i(),sl(),ys(),e.scale=.7,e.pan={x:0,y:0},rt(),$();const t=localStorage.getItem("imd_editor_theme");Li(t||"light"),Ci("en"),ne(),We(),le()}function al(){const t=document.getElementById("imd-date-picker"),o=document.getElementById("imd-dp-grid"),n=document.getElementById("imd-dp-month"),r=document.getElementById("imd-dp-prev"),i=document.getElementById("imd-dp-next"),s=document.getElementById("imd-dp-clear"),l=document.getElementById("imd-dp-today"),c=document.getElementById("imd-dp-target");if(!t||!o||!n||!r||!i||!s||!l||!c)return;const d=t,g=o,E=n,f=c;s.textContent=a("calendarClear"),l.textContent=a("calendarToday");let h=new Date,w=null;const x=(document.documentElement.lang||"de").toLowerCase().startsWith("de")?"de-DE":"en-US",S=new Intl.DateTimeFormat(x,{month:"long",year:"numeric"}),k=new Intl.DateTimeFormat(x,{weekday:"short"}),I=[];for(let b=0;b<7;b++){const P=new Date(2020,5,7+b);I.push(k.format(P))}function M(b){const P=b.getFullYear(),C=String(b.getMonth()+1).padStart(2,"0"),B=String(b.getDate()).padStart(2,"0");return`${P}-${C}-${B}`}function L(b){if(!b)return null;const P=b.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!P)return null;const C=Number(P[1]),B=Number(P[2])-1,T=Number(P[3]),F=new Date(C,B,T);return Number.isNaN(F.getTime())?null:F}function j(){E.textContent=S.format(h),g.innerHTML="",I.forEach(T=>{const F=document.createElement("div");F.className="imd-date-picker__dow",F.textContent=T,g.appendChild(F)});const C=(new Date(h.getFullYear(),h.getMonth(),1).getDay()+6)%7,B=new Date(h.getFullYear(),h.getMonth(),1-C);for(let T=0;T<42;T++){const F=new Date(B);F.setDate(B.getDate()+T);const m=document.createElement("div");m.className="imd-date-picker__day",F.getMonth()!==h.getMonth()&&m.classList.add("imd-date-picker__day--outside"),(F.getDay()===0||F.getDay()===6)&&m.classList.add("imd-date-picker__day--weekend");const _=new Date;F.getDate()===_.getDate()&&F.getMonth()===_.getMonth()&&F.getFullYear()===_.getFullYear()&&m.classList.add("imd-date-picker__day--today"),w&&F.getDate()===w.getDate()&&F.getMonth()===w.getMonth()&&F.getFullYear()===w.getFullYear()&&m.classList.add("imd-date-picker__day--selected"),m.textContent=String(F.getDate()),m.addEventListener("click",()=>{w=F;const z=document.getElementById(f.value);if(z){z.value=M(F);const R=new Event("input",{bubbles:!0});z.dispatchEvent(R)}D()}),g.appendChild(m)}}function A(b){w=L(b.value),h=w||new Date,f.value=b.id;const P=b.getBoundingClientRect();d.style.left=`${P.left+window.scrollX}px`,d.style.top=`${P.bottom+window.scrollY+6}px`,d.classList.add("open"),j()}function D(){d.classList.remove("open")}r.addEventListener("click",()=>{h.setMonth(h.getMonth()-1),j()}),i.addEventListener("click",()=>{h.setMonth(h.getMonth()+1),j()}),s.addEventListener("click",()=>{const b=document.getElementById(f.value);if(b){b.value="";const P=new Event("input",{bubbles:!0});b.dispatchEvent(P)}D()}),l.addEventListener("click",()=>{const b=new Date,P=document.getElementById(f.value);if(P){P.value=M(b);const C=new Event("input",{bubbles:!0});P.dispatchEvent(C)}D()}),document.addEventListener("click",b=>{const P=b.target;!d.contains(P)&&!P.closest('input[type="date"]')&&D()}),(()=>{document.querySelectorAll('input[type="date"]').forEach(b=>{b.id||(b.id=`date_${Math.random().toString(36).slice(2)}`),b.addEventListener("focus",P=>{P.preventDefault(),A(b)}),b.addEventListener("click",P=>{P.preventDefault(),A(b)})})})()}const at=document.getElementById("simulateSignalBtn");at?.addEventListener("click",()=>{e.showBeaconHeatmap=!e.showBeaconHeatmap;const t=at.querySelector("span");t&&(t.textContent=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal")),at.classList.toggle("active",e.showBeaconHeatmap),at.setAttribute("aria-pressed",e.showBeaconHeatmap?"true":"false"),at.title=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal"),e.showBeaconHeatmap,$()});const cl=document.getElementById("checkCoverageBtn");cl?.addEventListener("click",()=>{const t=ji();t.length>0?alert(`Analyse-Ergebnisse:

- `+t.join(`
- `)):alert(`Keine Probleme erkannt.

Alle Räume sind abgedeckt und haben ausreichend Beacon-Signalstärke (Trilateration möglich).`)});const dl=`<aside class="toolbar">\r
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
        <button id="manage-types-btn" style="width: 100%; margin-top: 8px; justify-content: center">\r
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
      <button id="show3DViewBtn" title="3D-Vorschau öffnen"><span>3D-Vorschau</span></button>\r
      <label class="checkbox-label" style="margin-top:8px"\r
        ><input type="checkbox" id="toggleBeaconRing" />\r
        <span>Signal‑Simulation anzeigen</span></label\r
      >\r
    </div>\r
  </section>\r
</aside>\r
`,pl=`<aside id="backstage-panel" class="backstage-panel">\r
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
`,ul=`<div id="info-modal" class="modal hidden">\r
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
`;function ml(){const t=document.getElementById("toolbar-container"),o=document.getElementById("backstage-container"),n=document.getElementById("modals-container");t&&(t.innerHTML=dl),o&&(o.innerHTML=pl),n&&(n.innerHTML=ul)}document.addEventListener("DOMContentLoaded",()=>{ml(),setTimeout(async()=>{ll(),os();try{await se.probeBackend()}catch{}N(),console.log("IMD Editor erfolgreich initialisiert.");const o=location.pathname.match(/^\/(floor|etage)\/(.+)$/);if(o){const r=decodeURIComponent(o[2]);e.activeFloorId=r;try{const w=localStorage.getItem("imd_editor_project");if(w){const x=JSON.parse(w);Ve(x)}}catch{}const i=document.querySelector(".app-header");i&&(i.style.display="none");const s=document.getElementById("toolbar-container");s&&(s.style.display="none");const l=document.getElementById("backstage-container");l&&(l.style.display="none");const c=document.getElementById("page-scrollbar-y");c&&(c.style.display="none");const d=document.querySelector(".canvas-wrapper");d&&(d.style.display="none");const g=document.getElementById("floor3DView");g&&(g.style.display="flex",g.style.height="100vh",g.style.width="100vw"),e.threeDPan={x:50,y:50},e.threeDScale=.8;const E=await Ne(()=>import("./3d-CatqN8zU.js"),__vite__mapDeps([0,1])),f=await Ne(()=>import("./floor3D-Bgv6vfVy.js"),[]);E.setup3DViewControls(),E.update3DFloorSelector(),f.render3DFloorStack(e.project,"floor3DContent");const h=document.getElementById("floor3DView");h&&(h.style.cursor="grab",h.addEventListener("mousedown",E.start3DDrag),h.addEventListener("mousemove",E.do3DDrag),h.addEventListener("mouseup",E.stop3DDrag),h.addEventListener("mouseleave",E.stop3DDrag),h.addEventListener("wheel",E.handle3DZoom,{passive:!1})),window.addEventListener("storage",async w=>{if(w.key==="imd_editor_project"&&w.newValue)try{const x=JSON.parse(w.newValue);Ve(x),(await Ne(()=>import("./floor3D-Bgv6vfVy.js"),[])).render3DFloorStack(e.project,"floor3DContent")}catch{}})}const n=300*1e3;setInterval(async()=>{if(se.isAvailable())try{await(await Ne(async()=>{const{saveProjectToServer:r}=await Promise.resolve().then(()=>ts);return{saveProjectToServer:r}},void 0)).saveProjectToServer(e.currentServerProjectId,e.currentServerVersion)}catch{}try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}},n)},0)});export{Be as a,ue as b,Qt as c,a as g,e as s,ae as u};
