const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/3d-BmlCx_QG.js","assets/floor3D-DrR2gta5.js"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const ei="modulepreload",ti=function(t){return"/"+t},ar={},lt=function(o,n,r){let i=Promise.resolve();if(n&&n.length>0){let d=function(m){return Promise.all(m.map(b=>Promise.resolve(b).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");i=d(n.map(m=>{if(m=ti(m),m in ar)return;ar[m]=!0;const b=m.endsWith(".css"),y=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${y}`))return;const f=document.createElement("link");if(f.rel=b?"stylesheet":ei,b||(f.as="script"),f.crossOrigin="",f.href=m,c&&f.setAttribute("nonce",c),document.head.appendChild(f),b)return new Promise((I,h)=>{f.addEventListener("load",I),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${m}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return i.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return o().catch(s)})};let Zr="en";function u(t,o){return{de:t,en:o}}const ot={file:u("Datei","File"),output:u("Ausgabe","Output"),overview:u("Übersicht","Overview"),darkMode:u("Dunkles Thema","Dark Theme"),lightMode:u("Helles Thema","Light Theme"),backToApp:u("Zurück zur Anwendung","Back to Application"),filePanelTitle:u("Datei","File"),newProject:u("Neues Projekt","New Project"),loadProject:u("Projekt laden","Load Project"),saveProject:u("Projekt speichern","Save Project"),loadFromServer:u("Vom Server laden","Load from Server"),saveToServer:u("Zum Server speichern","Save to Server"),newProjectOption:u("(Neues Projekt)","(New Project)"),newVersionOption:u("(Neue Version)","(New Version)"),introduction:u("Einleitung","Introduction"),serverProject:u("Projekt","Project"),serverVersion:u("Version","Version"),refresh:u("Aktualisieren","Refresh"),load:u("Laden","Load"),latestVersion:u("Neueste Version","Latest Version"),save:u("Speichern","Save"),search:u("Suche","Search"),searchPlaceholder:u("Projekt suchen...","Search project..."),projectDetails:u("Projektdetails","Project Details"),detailId:u("ID:","ID:"),detailName:u("Name:","Name:"),detailLatest:u("Neueste Version:","Latest Version:"),detailFloorplans:u("Grundrisse:","Floorplans:"),detailCreated:u("Erstellt:","Created:"),detailUpdated:u("Aktualisiert:","Updated:"),confirmOverwriteVersion:u('Alte Version {1} von "{0}" überschreiben?','Overwrite old version {1} of "{0}"?'),add:u("Hinzufügen","Add"),deleteAction:u("Löschen","Delete"),confirmDeleteProject:u('Projekt "{0}" (# {1}) wirklich löschen? Dies entfernt alle Versionen.','Really delete project "{0}" (# {1})? This will remove all versions.'),confirmDeleteVersion:u('Version {1} von Projekt "{0}" (# {2}) löschen?','Delete version {1} of project "{0}" (# {2})?'),infoNewProject:u("Neues Projekt wird beim Speichern erstellt.","A new project will be created on save."),infoNewVersion:u("Neue Version wird beim Speichern erstellt.","A new version will be created on save."),saveTargetVersion:u('Speichern in Version {1} von "{0}".','Save into version {1} of "{0}".'),alertSelectVersionFirst:u("Bitte zuerst eine Version auswählen.","Please select a version first."),outputPanelTitle:u("Ausgabe","Output"),exportGeoJson:u("GeoJSON exportieren","Export GeoJSON"),showLiveCode:u("Live Code anzeigen","Show Live Code"),hideCode:u("Code ausblenden","Hide Code"),overviewPanelTitle:u("Projektübersicht","Project Overview"),unnamedProject:u("Unbenanntes Projekt","Unnamed Project"),stat_project:u("Projekt","Project"),stat_floors:u("Etagen","Floors"),stat_areas:u("Flächen","Areas"),stat_points:u("Punkte","Points"),overviewBeacons:u("Beacons","Beacons"),sponsoredBy:u("Gesponsert von","Sponsored by"),sponsoredByMinew:u("Gesponsert von MINEW","Sponsored by MINEW"),supportedByPalfinger:u("Unterstützt von PALFINGER","Supported by PALFINGER"),sponsorsButtonTitle:u("Sponsoren","Sponsors"),imprint:u("Impressum","Legal Notice"),contact:u("Kontakt","Contact"),privacy:u("Datenschutz","Privacy Policy"),project:u("Projekt","Project"),projectName:u("Projektname","Project Name"),enterProjectName:u("Projektname eingeben...","Enter project name..."),edit:u("Bearbeiten","Edit"),undo:u("Rückgängig","Undo"),redo:u("Wiederherstellen","Redo"),floors:u("Etagen","Floors"),currentFloor:u("Aktuelle Etage","Current Floor"),newFloor:u("Neue Etage","New Floor"),floorplan:u("Grundriss...","Floorplan..."),prompt_newFloorName:u("Name der neuen Etage:","Name of the new floor:"),renameFloor:u("Etage umbenennen","Rename Floor"),prompt_renameFloor:u('Neuen Namen für die Etage "{0}" eingeben:','Enter new name for floor "{0}":'),defaultFloorName:u("Standard-Etage","Default Floor"),tools:u("Werkzeuge","Tools"),pan:u("Bewegen","Pan"),select:u("Auswählen","Select"),moveElement:u("Verschieben","Move Element"),merge:u("Zusammenfügen","Merge"),scissors:u("Schere","Scissors"),delete:u("Löschen","Delete"),areas:u("Flächen","Areas"),rectangle:u("Viereck","Rectangle"),square:u("Quadrat","Square"),polygon:u("Polygon","Polygon"),circle:u("Kreis","Circle"),linesAndPoints:u("Linien & Punkte","Lines & Points"),line:u("Linie","Line"),door:u("Tür","Door"),arc:u("Bogen","Arc"),point:u("Punkt","Point"),area:u("Fläche","Area"),saveAndClose:u("Änderungen übernehmen & schließen","Save & Close"),calibrateScale:u("Kalibrieren","Calibrate"),calibratePrompt:u("Kalibrierung: Wählen Sie eine bestehende Kante oder zeichnen Sie eine Referenzlinie und geben Sie die reale Länge in Metern ein.","Calibration: Select an existing edge or draw a reference line, then enter the real length in meters."),calibratePromptShort:u("Kalibrierung: Geben Sie die reale Länge in Metern ein.","Calibration: enter the real length in meters."),elementType:u("Element-Typ","Element Type"),manageTypes:u("Typen verwalten...","Manage Types..."),newAreaType:u("Neue Fläche","New Area Type"),newPointType:u("Neuer Punkt","New Point Type"),doorLabel:u("Tür","Door"),lineLabel:u("Linie","Line"),arcLabel:u("Bogen","Arc"),defaultRoomLabel:u("Beispielraum","Sample Room"),customIndicatorSuffix:u(" (Benutzerdefiniert)"," (Custom)"),alert_selectAtLeastTwo:u("Bitte mindestens zwei Elemente auswählen.","Please select at least two elements."),alert_notEnoughPoints:u("Nicht genug Punkte für eine Fläche.","Not enough points for an area."),fontSettings:u("Schrift-Einstellungen","Font Settings"),fontSize:u("Schriftgröße","Font Size"),fontColor:u("Schriftfarbe","Font Color"),fontSizeDesc:u("Bestimmt die Schriftgröße für Beschriftungen dieses Typs.","Controls the label font size for this type."),fontColorDesc:u("Legt die Textfarbe der Beschriftung fest.","Defines the text color of the label."),optgroupAreas:u("Flächen","Areas"),optgroupPointElements:u("Punkt-Elemente","Point Elements"),optgroupConnectors:u("Konnektoren","Konnektoren"),properties:u("Eigenschaften","Properties"),beacon_parameters:u("Beacon Parameter","Beacon Parameters"),label:u("Bezeichnung","Label"),enterElementLabel:u("Bezeichnung des Elements...","Enter element label..."),noElementSelected:u("Kein Element ausgewählt.","No element selected."),description:u("Beschreibung","Description"),occupancyTimes:u("Besetzungszeiten","Occupancy Times"),isEmptyArea:u("Leere Fläche (Lichthof/Stiegenhaus)","Empty Area (Courtyard/Stairwell)"),occupancyBtn:u("Besetzungszeiten...","Occupancy Times..."),openingHoursBtn:u("Öffnungszeiten...","Opening Hours..."),viewAndLayers:u("Ansicht & Layer","View & Layers"),grid:u("Raster","Grid"),layers:u("Layer","Layers"),showGrid:u("Raster anzeigen","Show Grid"),snapToGrid:u("Am Raster ausrichten","Snap to Grid"),size:u("Größe:","Size:"),metersPerCell:u("Meter/Kasten:","Meters per cell:"),layersFloorplan:u("Grundriss","Floor plan"),layersAreas:u("Flächen","Areas"),layersPaths:u("Wege/Linien","Paths/Lines"),layersPoints:u("Punktelemente","Point Elements"),preview3D:u("3D-Vorschau","3D Preview"),dimensions:u("Maße","Dimensions"),showEdgeLengths:u("Kantenlängen anzeigen","Show edge lengths"),showCornerAngles:u("Eckenwinkel anzeigen","Show corner angles"),showLineLengths:u("Linienlängen anzeigen","Show line lengths"),showCircleRadius:u("Radius anzeigen (Kreise)","Show radius (circles)"),showBeaconRangeRing:u("Signal‑Simulation anzeigen","Show signal simulation"),editAnglePrompt:u("Winkel bearbeiten: Grad eingeben","Edit angle: enter degrees"),analysis:u("Analyse","Analysis"),simulateSignal:u("Signal simulieren","Simulate signal"),simulationOff:u("Simulation aus","Stop simulation"),welcomeTitle:u("Willkommen beim IMD Editor!","Welcome to IMD Editor!"),welcomeText:u("Dies ist ein Werkzeug zur Digitalisierung von Indoor-Karten.","This is a tool for digitizing indoor maps."),basicsTitle:u("Grundlagen der Bedienung:","Basic Operation:"),basicsTools:u("Werkzeuge: Wählen Sie links ein Werkzeug (z.B. Fläche, Punkt), um Elemente auf der Karte zu erstellen.","Tools: Select a tool on the left (e.g., Area, Point) to create elements on the map."),basicsZoom:u("Zoomen: Benutzen Sie das Mausrad, um in die Karte hinein- und herausuzoomen.","Zooming: Use the mouse wheel to zoom in and out of the map."),basicsPan:u("Verschieben der Ansicht: Halten Sie die mittlere Maustaste gedrückt und bewegen Sie die Maus, um die Kartenansicht zu verschieben.","Panning the view: Hold down the middle mouse button and move the mouse to pan the map view."),basicsMove:u("Elemente verschieben: Wählen Sie ein Element aus und ziehen Sie es mit der Maus an eine neue Position.","Move elements: Select an element and drag it with the mouse to a new position."),basicsSave:u('Speichern: Vergessen Sie nicht, Ihr Projekt über das "Datei"-Menü zu speichern.',`Saving: Don't forget to save your project via the "File" menu.`),intro_welcomeTitle:u("Willkommen im Editor!","Welcome to the Editor!"),intro_startText:u("Starten Sie, indem Sie Ihrem Projekt oben links einen Namen geben und rechts unter „Etagen“ einen Grundriss laden.","Start by giving your project a name in the top left and load a floor plan on the right under “Floors.”"),intro_sectionTitle:u("So bedienen Sie die Karte:","Map Controls"),intro_zoom:u("Zoomen: Drehen Sie das Mausrad.","Zoom: Scroll the mouse wheel."),intro_pan:u("Verschieben: Halten Sie das Mausrad gedrückt und bewegen Sie die Maus.","Pan: Hold down the mouse wheel and move the mouse."),intro_preview3d:u("3D-Vorschau: Nutzen Sie den Button unten links, um Ihr Modell räumlich zu sehen.","3D Preview: Use the button in the bottom left to view your model in 3D."),intro_draw_title:u("Zeichnen & Bearbeiten:","Drawing & Editing:"),intro_analysis_title:u("Analyse","Analysis"),intro_finishShape:u("Form beenden: Ein Doppelklick schließt eine gezeichnete Fläche ab.","Finish shape: Double-click to close a drawn area."),intro_escape:u("Abbrechen (ESC): Drücken Sie die ESC-Taste, um ein Werkzeug wegzulegen oder die Auswahl aufzuheben.","Cancel (ESC): Press ESC to put away a tool or clear the selection."),intro_merge:u("Klicke mindestens zwei Flächen auf derselben Etage an und drücke Enter, um sie zu einer neuen Fläche zusammenzufassen.","Click at least two areas on the same floor and press Enter to merge them into a new area."),intro_calibrate:u("Kalibrierung: Wählen Sie eine bestehende Kante oder zeichnen Sie eine Referenzlinie und geben Sie die reale Länge in Metern ein.","Calibration: Select an existing edge or draw a reference line, then enter the real length in meters."),intro_shortcuts_title:u("Wichtige Tastenkürzel:","Key shortcuts:"),intro_undo_redo:u("Strg + Z / Y: Fehler rückgängig machen / wiederherstellen.","Ctrl + Z / Y: Undo / Redo actions."),intro_copy_paste:u("Strg + C / V: Elemente kopieren und einfügen.","Ctrl + C / V: Copy and paste elements."),intro_paste_active_floor:u("Einfügen platziert Kopien auf der aktiven Etage.","Pasting places copies on the active floor."),intro_select_all:u("Strg + A: Alle Elemente der aktiven Etage auswählen.","Ctrl + A: Select all elements on the active floor."),intro_delete:u("Entf: Das ausgewählte Element löschen.","Delete: Remove the selected element."),intro_shift_zoom:u("Shift (Umschalt): Gedrückt halten, um die Lupe zu aktivieren.","Shift: Hold to activate the magnifier."),intro_alt_click:u("Alt + Klick: Fügt einer bestehenden Linie einen neuen Punkt hinzu.","Alt + Click: Use Alt + Click to add a new point to an existing line."),intro_full_content:u(`<h2>Interface Einstellungen</h2>
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
<li><strong>Grundriss</strong>: Schaltet das geladene Hintergrundbild ein/aus.</li>
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
</ul>`),intro_tip_title:u("Tipp","Tip"),intro_save_reminder:u("Vergessen Sie nicht, Ihr Projekt regelmäßig über das Menü „Datei“ zu speichern!","Remember to save your project regularly via the “File” menu!"),mergeHintShort:u("Klicke mindestens zwei Flächen auf derselben Etage an und drücke Enter, um sie zu einer neuen Fläche zusammenzufassen.","Click at least two areas on the same floor and press Enter to merge them into a new area."),angleEditHintShort:u("Winkel bearbeiten: Wähle zwei angrenzende Kanten derselben Fläche und gib den Winkel (Grad) ein.","Edit angle: pick two adjacent edges of the same area and enter the angle (degrees)."),angleEditStep1:u("Schritt 1/2: Erste Kante wählen (Klick).","Step 1/2: Pick the first edge (click)."),angleEditInvalidAdj:u("Nur benachbarte Kanten gültig – bitte angrenzende Kante wählen.","Only adjacent edges are valid — please pick a neighboring edge."),angleEditDone:u("Winkel gesetzt.","Angle set."),parallelEditHintShort:u("Parallel setzen: Erste Kante wählen, dann zweite Kante derselben Fläche. Zielkante wird parallel und gleich lang wie die erste.","Set parallel: pick first edge, then second edge of the same area. Target edge becomes parallel and equal length to the first."),parallelEditStep1:u("Schritt 1/2: Erste Kante wählen (Klick).","Step 1/2: Pick the first edge (click)."),parallelEditDone:u("Parallel und Länge gesetzt.","Parallel and length applied."),alert_selectTwo:u("Bitte genau zwei Elemente auswählen.","Please select exactly two elements."),alert_sameFloor:u("Beide Elemente müssen auf derselben Etage liegen.","Both elements must be on the same floor."),alert_noOverlap:u("Kein Schnittbereich gefunden.","No overlap found."),manageTypesTitle:u("Element-Typen verwalten","Manage Element Types"),types:u("Typen","Types"),newType:u("+ Neuer Typ","+ New Type"),typeName:u("Typ-Name","Type Name"),exampleMarketing:u("z.B. Marketing","e.g. Marketing"),textStyle:u("Schrift-Stil","Font Style"),areaStyle:u("Flächen-Stil","Area Style"),pointStyle:u("Punkt-Stil","Point Style"),fillColor:u("Füllfarbe","Fill Color"),fillColorDesc:u("Farbe der Innenfläche des Elements (z.B. Raum).","Color of the element's inner area (e.g., room)."),fillOpacity:u("Deckkraft der Füllung","Fill Opacity"),fillOpacityDesc:u("Transparenz der Füllfarbe (0.0 = transparent, 1.0 = opak).","Transparency of the fill color (0.0 = transparent, 1.0 = opaque)."),strokeColor:u("Rahmenfarbe","Border Color"),strokeColorDesc:u("Farbe des Rahmens/der Umrandung des Elements.","Color of the element's border/outline."),currentFillColor:u("Aktuelle Füllfarbe","Current Fill Color"),currentStrokeColor:u("Aktuelle Rahmenfarbe","Current Border Color"),iconSelection:u("Icon Auswahl","Icon Selection"),iconSelectionDesc:u("Wählen Sie ein Symbol für diesen Punkt-Typ.","Select an icon for this point type."),iconColor:u("Icon-Farbe","Icon Color"),iconColorDesc:u("Farbe des Icons auf der Karte.","Color of the icon on the map."),deleteType:u("Typ löschen","Delete Type"),typeManagerPlaceholder:u("Wählen Sie links einen Typ aus oder erstellen Sie einen neuen.","Select a type on the left or create a new one."),saveChangesAndClose:u("Änderungen übernehmen & schließen","Apply Changes & Close"),typePreview:u("Vorschau","Preview"),previewAreaLabel:u("Beispielraum","Sample Room"),previewPointLabel:u("Beispielpunkt","Sample Point"),areasGroup:u("Flächen","Areas"),pointsConnectorsGroup:u("Punkte & Konnektoren","Points & Connectors"),createNewElementType:u("Neuen Element-Typ erstellen","Create New Element Type"),chooseBaseType:u("Wählen Sie den Basis-Typ aus:","Choose the base type:"),choiceArea:u("Fläche","Area"),choicePoint:u("Punkt","Point"),cancel:u("Abbrechen","Cancel"),ok:u("OK","OK"),rename:u("Umbenennen...","Rename..."),copy:u("Kopieren","Copy"),changeType:u("Typ ändern","Change Type"),ctxAddOverlapPoint:u("Punkt im Schnittbereich setzen","Place point at overlap"),toggleAccessibility:u("Barrierefreiheit umschalten","Toggle Accessibility"),accessible:u("Barrierefrei","Accessible"),roomContentsTitle:u("Rauminhalt","Contents"),roomContentsPlaceholder:u("Eintrag hinzufügen...","Add entry..."),roomContentsAdd:u("Hinzufügen","Add"),accessibleRoomsHeader:u("Barrierefreie Räume","Accessible Rooms"),openingHours:u("Öffnungszeiten","Opening Hours"),openingHoursEdit:u("Öffnungszeiten bearbeiten...","Edit Opening Hours..."),openingHoursTitle:u("Öffnungszeiten","Opening Hours"),openingHoursWeekly:u("Wochentage","Weekdays"),openingHoursExceptions:u("Ausnahmen","Exceptions"),openingHoursRanges:u("Zeitspanne","Date Range"),roomNumber:u("Flächen-/Raumnummer","Area/Room Number"),designation:u("Bezeichnung (Art)","Designation (Type)"),occupancyTitle:u("Besetzungszeiten","Staffing Times"),occupancyEdit:u("Besetzungszeiten bearbeiten...","Edit Staffing Times..."),occupancyAdd:u("Hinzufügen","Add"),occupancyNotePlaceholder:u("Notiz...","Note..."),editRoomContents:u("Rauminhalt bearbeiten...","Edit Contents..."),occupancyType:u("Art","Type"),occupancyTypeWeekday:u("Wochentag","Weekday"),occupancyTypeDate:u("Kalendertag","Calendar Date"),occupancyTypeRange:u("Zeitraum","Date Range"),occupancyTypeLabel:u("Art","Type"),occupancyWeekdayLabel:u("Wochentag","Weekday"),occupancyDateLabel:u("Kalendertag","Calendar Date"),occupancyStartLabel:u("von","from"),occupancyEndLabel:u("bis","to"),occupancyRangeStartLabel:u("Zeitraum von","Range start"),occupancyRangeEndLabel:u("Zeitraum bis","Range end"),occupancyNoteLabel:u("Notiz","Note"),beacon_activation_label:u("Aktivierungszeit","Activation Time"),activationStartDate:u("Startdatum","Start Date"),activationEndDate:u("Enddatum","End Date"),activationStartTime:u("von","from"),activationEndTime:u("bis","to"),weekdayMon:u("Mo","Mon"),weekdayTue:u("Di","Tue"),weekdayWed:u("Mi","Wed"),weekdayThu:u("Do","Thu"),weekdayFri:u("Fr","Fri"),weekdaySat:u("Sa","Sat"),weekdaySun:u("So","Sun"),fromTime:u("von","from"),toTime:u("bis","to"),addRule:u("Regel hinzufügen","Add Rule"),addException:u("Ausnahme hinzufügen","Add Exception"),noAccessibleRooms:u("Keine barrierefreien Räume","No accessible rooms"),addRange:u("Zeitraum hinzufügen","Add Date Range"),calendarToday:u("Heute","Today"),calendarClear:u("Leeren","Clear"),alert_deleteTypeConfirm:u('Möchten Sie den Typ "{0}" wirklich löschen?','Do you really want to delete the type "{0}"?'),alert_renameSelectOne:u("Bitte wählen Sie genau ein Element zum Umbenennen aus.","Please select exactly one element to rename."),prompt_renameElement:u("Neuen Namen eingeben:","Enter new name:"),alert_noActiveFloor:u("Bitte zuerst eine Etage auswählen oder erstellen.","Please select or create a floor first."),alert_floorNameExists:u("Dieser Etagenname ist bereits vergeben.","This floor name already exists."),alert_newProjectConfirm:u("Möchten Sie wirklich ein neues Projekt starten? Nicht gespeicherte Änderungen gehen verloren.","Do you really want to start a new project? Unsaved changes will be lost."),confirm_deleteElement_single:u("Möchten Sie das ausgewählte Element wirklich löschen?","Do you really want to delete the selected element?"),confirm_deleteElement_multi:u("Möchten Sie die {0} ausgewählten Elemente wirklich löschen?","Do you really want to delete the {0} selected elements?"),area_raum_label:u("Raum","Room"),area_buero_label:u("Büro","Office"),area_toiletten_label:u("Toiletten","Restrooms"),area_gang_label:u("Gang","Corridor"),area_lager_label:u("Lager","Storage"),point_eingang_label:u("Eingang","Entrance"),point_feuerloescher_label:u("Feuerlöscher","Fire Extinguisher"),point_treppe_label:u("Treppe","Stairs"),point_aufzug_label:u("Aufzug","Elevator"),point_beacon_label:u("Beacon","Beacon"),point_erstehilfe_label:u("Erste Hilfe","First Aid"),point_notausgang_label:u("Notausgang","Emergency Exit"),beacon_uuid_label:u("Beacon UUID","Beacon UUID"),beacon_serial_label:u("Gerät-ID","Device ID"),beacon_major_label:u("Beacon Major","Beacon Major"),beacon_minor_label:u("Beacon Minor","Beacon Minor"),beacon_installation_label:u("Installationsdatum","Installation Date"),beacon_range_label:u("Reichweite (m)","Range (m)"),beacon_number_label:u("Nummer","Number"),beacon_note_de_label:u("Notiz","Note"),beacon_note_en_label:u("Notiz (EN)","Note (EN)"),threeD_fullscreen_title:u("3D-Ansicht","3D View"),threeD_minimize:u("Minimieren","Minimize"),threeD_toggle_fullscreen:u("Vollbild umschalten","Toggle Fullscreen"),screenshot:u("Screenshot","Screenshot"),pdf_convert:u("Konvertiere PDF, dies kann einen Moment dauern...","Converting PDF, this may take a moment..."),image_load:u("Lade Bild...","Loading image...")};ot.properties_label_desc=u("Anzeigename des Elements, wird in der Karte gezeigt.","Display name of the element, shown on the map.");ot.beacon_serial_desc=u("Eindeutige Geräte-ID des Beacons.","Unique device ID of the beacon.");ot.beacon_number_desc=u("Interne Beacon-Nummer zur Zuordnung.","Internal beacon number for mapping.");ot.beacon_installation_desc=u("Datum der Installation.","Installation date.");ot.beacon_range_desc=u("Geplante Signalreichweite in Metern für die Heatmap.","Planned signal range in meters for the heatmap.");ot.beacon_note_de_desc=u("Freitextnotiz in Deutsch.","Free-form note in German.");function ni(t){Zr=t}function a(t,o=Zr,...n){const r=ot[t];if(!r)return console.warn(`Missing translation key: ${t}`),t;let i=r[o]||r.en||t;return n.forEach((s,l)=>{i=i.replace(new RegExp(`\\{${l}\\}`,"g"),String(s))}),i}const _e={raum:{fill:"rgba(53, 138, 216, 0.4)",stroke:"#5e5bb1"},buero:{fill:"rgba(141, 35, 166, 0.3)",stroke:"#54176e"},toiletten:{fill:"rgba(236, 240, 241, 0.5)",stroke:"#c0392b"},gang:{fill:"rgba(246, 235, 252, 0.2)",stroke:"#bdc3c7"},lager:{fill:"rgba(255, 255, 255, 0.3)",stroke:"#7f8c8d"},default:{fill:"rgba(189, 195, 199, 0.3)",stroke:"#95a5a6"}},ie="#358ad8",fn={eingang:"M12 3L4 9v12h5v-7h6v7h5V9l-8-6zm-2 14H8v-5h2v5zm4 0h-2v-5h2v5z",feuerloescher:"M9 8H15V20H9Z M10 6H14V8H10Z M15 10L19 11L15 12Z M11 4H14V6H11Z",treppe:"M6 18H18V20H6Z M10 14H18V16H10Z M14 10H18V12H14Z",aufzug:"M5 4H19V20H5Z M11.5 4H12.5V20H11.5Z M8 9L12 5L16 9Z M8 15L12 19L16 15Z",beacon:"M10.5 3 l6 4.5 -6 4.5 6 4.5 -6 4.5 V3 M17.25 9.75 c1.5 .75 1.5 .75 1.5 2.25 M17.25 14.25 c1.5 .75 1.5 .75 1.5 2.25",erstehilfe:"M10 5H14V10H19V14H14V19H10V14H5V10H10Z",notausgang:"M3 4H10V20H3Z M11 12H21V13H11Z M17 9L21 12L17 15Z",default:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"},Nn={info:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",warning:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z","meeting-point":"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",coffee:"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm-2 5h-2V5h2v3zM4 19h16v2H4z",printer:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM18 3H6v4h12V3z",restroom:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"};function ze(){const t=new Set;return e.project.features.forEach(o=>t.add(o.properties.floor)),e.project.floorplanImages&&Object.keys(e.project.floorplanImages).forEach(o=>t.add(o)),Array.from(t).sort((o,n)=>o.localeCompare(n,void 0,{numeric:!0}))}function Se(){const t={},o={raum:a("area_raum_label"),buero:a("area_buero_label"),toiletten:a("area_toiletten_label"),gang:a("area_gang_label"),lager:a("area_lager_label")};for(const i in _e)o[i]&&(t[i]={label:o[i],baseType:"area",fill:_e[i].fill,stroke:_e[i].stroke,isDefault:!0});const n={eingang:a("point_eingang_label"),feuerloescher:a("point_feuerloescher_label"),treppe:a("point_treppe_label"),aufzug:a("point_aufzug_label"),beacon:a("point_beacon_label"),erstehilfe:a("point_erstehilfe_label"),notausgang:a("point_notausgang_label")};for(const i in fn)n[i]&&(t[i]={label:n[i],baseType:"point",icon:fn[i],iconColor:"#34495e",isDefault:!0});const r=e.project.properties.elementTypeStyles;if(r)for(const i in r)t[i]={...t[i],...r[i],isDefault:!1};return t}function fe(){const t=ze(),o=e.activeFloorId,n=document.getElementById("floor-select");if(!n)return;if(n.innerHTML="",t.length===0){const i=document.createElement("option");i.textContent=a("currentFloor"),n.appendChild(i),e.activeFloorId=null}else t.forEach(i=>{const s=document.createElement("option");s.value=i,s.textContent=i,n.appendChild(s)}),o&&t.includes(o)?n.value=o:(e.activeFloorId=t[0],n.value=t[0]);const r=document.getElementById("floor-preview");r&&e.activeFloorId&&e.cachedFloorPlanImages[e.activeFloorId]?(r.src=e.cachedFloorPlanImages[e.activeFloorId].src,r.style.display="block"):r&&(r.style.display="none")}function rt(){const t=document.getElementById("element-type-select");if(!t)return;const o=Se(),n=t.value,r=[],i=[],s=[];for(const y in o){const f=o[y];f.baseType==="area"?r.push({key:y,style:f}):f.baseType==="point"&&(["treppe","aufzug"].includes(y)?s.push({key:y,style:f}):i.push({key:y,style:f}))}const l=(y,f)=>y.style.label.localeCompare(f.style.label);r.sort(l),i.sort(l),s.sort(l);const c=document.createElement("optgroup");c.label=a("optgroupAreas");const d=document.createElement("optgroup");d.label=a("optgroupPointElements");const m=document.createElement("optgroup");m.label=a("optgroupConnectors");const b=(y,f)=>{f.forEach(({key:I,style:h})=>{const E=document.createElement("option");E.value=I;const w=h.isDefault?"":a("customIndicatorSuffix");E.textContent=h.label+w,E.dataset.type=h.baseType,y.appendChild(E)})};b(c,r),b(d,i),b(m,s),t.innerHTML="",t.appendChild(c),t.appendChild(d),s.length>0&&t.appendChild(m),n&&t.querySelector(`option[value="${n}"]`)?t.value=n:r.length>0?t.value=r[0].key:i.length>0&&(t.value=i[0].key)}function Ho(t,o,n){return{x:2*n.x-.5*(t.x+o.x),y:2*n.y-.5*(t.y+o.y)}}function Kt(t,o,n,r=20){const i=[];for(let s=0;s<=r;s++){const l=s/r,c=Math.pow(1-l,2)*t.x+2*(1-l)*l*n.x+Math.pow(l,2)*o.x,d=Math.pow(1-l,2)*t.y+2*(1-l)*l*n.y+Math.pow(l,2)*o.y;i.push([c,d])}return i}function Ro(t,o,n,r){const i=o.x-t.x,s=o.y-t.y,l=r.x-n.x,c=r.y-n.y,d=i*c-s*l;if(d===0)return null;const m=((n.x-t.x)*c-(n.y-t.y)*l)/d,b=((n.x-t.x)*s-(n.y-t.y)*i)/d;return m<0||m>1||b<0||b>1?null:{x:t.x+m*i,y:t.y+m*s}}function at(t){const o=t.coordinates[0];let[n,r]=o[0],[i,s]=o[0];for(const[l,c]of o)l<n&&(n=l),c<r&&(r=c),l>i&&(i=l),c>s&&(s=c);return{x:n,y:r,width:i-n,height:s-r}}function Be(t,o){const n=at(o);if(t.x<n.x||t.x>n.x+n.width||t.y<n.y||t.y>n.y+n.height)return!1;let r=!1;const i=o.coordinates[0];for(let s=0,l=i.length-1;s<i.length;l=s++){const[c,d]=i[s],[m,b]=i[l];d>t.y!=b>t.y&&t.x<(m-c)*(t.y-d)/(b-d)+c&&(r=!r)}return r}function Ce(t){if(!e.isGridVisible||!e.isSnapEnabled)return t;const o=e.gridSize;return{x:Math.round(t.x/o)*o,y:Math.round(t.y/o)*o}}function ct(t){const o=10/e.scale,n=e.project.features.filter(i=>i.properties.floor===e.activeFloorId&&!i.properties.isPlaceholder);let r=null;for(const i of n)if(i.geometry.type==="Point"||i.properties.type==="connector"){const[s,l]=i.geometry.coordinates,c=Math.hypot(t.x-s,t.y-l);c<o&&(!r||c<r.d)&&(r={x:s,y:l,d:c})}else if(i.geometry.type==="LineString"){const s=i.geometry.coordinates;for(const l of s){const c=l[0],d=l[1],m=Math.hypot(t.x-c,t.y-d);m<o&&(!r||m<r.d)&&(r={x:c,y:d,d:m})}}return r?{x:r.x,y:r.y}:t}function oi(){const t=[];if(!e.activeFloorId)return t;const o=e.metersPerPixel;if(!o||o<=0)return t.push("Maßstab nicht kalibriert. Analyse ist ungenau oder nicht möglich."),t;const n=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.properties.type==="area"&&c.geometry.type==="Polygon"&&!c.properties.isEmpty),r=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.geometry.type==="Point"&&c.properties.subType==="beacon"),i=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.properties.type==="area"&&c.geometry.type==="Polygon"&&c.properties.isEmpty);r.length<3&&t.push("Zu wenige Beacons: Mindestens 3 Beacons werden für eine Trilateration benötigt.");const l=.5/o;return n.forEach(c=>{const d=c.geometry,m=at(d);let b=0,y=0,f=0;for(let I=m.x;I<m.x+m.width;I+=l)for(let h=m.y;h<m.y+m.height;h+=l)if(Be({x:I,y:h},d)){if(i.some(k=>Be({x:I,y:h},k.geometry)))continue;b++;let w=0;for(const k of r){const[F,L]=k.geometry.coordinates,A=Math.hypot(I-F,h-L),D=typeof k.properties.beacon_range=="number"&&k.properties.beacon_range>0?k.properties.beacon_range/o:0;A<=D&&w++}w===0?y++:w<3&&f++}if(b>0){const I=y/b*100,h=f/b*100,E=c.properties.label||"Unbenannter Raum";I>2&&t.push(`Funkloch in "${E}": ${I.toFixed(1)}% der Fläche nicht abgedeckt.`),h>40&&t.push(`Eingeschränkte Trilateration in "${E}": ${h.toFixed(1)}% der Fläche haben < 3 Beacons.`)}}),t}function wt(t,o){let n=1/0,r=-1;const i=16/e.scale,s=o.coordinates[0];for(let l=0;l<s.length-1;l++){const c={x:s[l][0],y:s[l][1]},d={x:s[l+1][0],y:s[l+1][1]},m=d.x-c.x,b=d.y-c.y;if(m===0&&b===0)continue;const y=((t.x-c.x)*m+(t.y-c.y)*b)/(m*m+b*b),f=y<0?c:y>1?d:{x:c.x+y*m,y:c.y+y*b},I=Math.sqrt((t.x-f.x)**2+(t.y-f.y)**2);I<n&&(n=I,r=l)}return n<i?{index:r,distance:n}:{index:-1,distance:1/0}}function ri(t,o,n){const r=o.coordinates[0],i=Math.max(0,Math.min(n,r.length-2)),s={x:r[i][0],y:r[i][1]},l={x:r[i+1][0],y:r[i+1][1]},c=l.x-s.x,d=l.y-s.y;if(c===0&&d===0)return s;const m=((t.x-s.x)*c+(t.y-s.y)*d)/(c*c+d*d),b=Math.max(0,Math.min(1,m));return{x:s.x+b*c,y:s.y+b*d}}function Jr(t,o){const n=o.coordinates;let r=1/0,i=-1;const s=16/e.scale;for(let l=0;l<n.length-1;l++){const c={x:n[l][0],y:n[l][1]},d={x:n[l+1][0],y:n[l+1][1]},m=d.x-c.x,b=d.y-c.y;if(m===0&&b===0)continue;const y=((t.x-c.x)*m+(t.y-c.y)*b)/(m*m+b*b),f=y<0?c.x:y>1?d.x:c.x+y*m,I=y<0?c.y:y>1?d.y:c.y+y*b,h=Math.hypot(t.x-f,t.y-I);h<r&&(r=h,i=l)}return r<s?{index:i,distance:r}:{index:-1,distance:1/0}}function si(t,o,n){const r=o.coordinates,i=Math.max(0,Math.min(n,r.length-2)),s={x:r[i][0],y:r[i][1]},l={x:r[i+1][0],y:r[i+1][1]},c=l.x-s.x,d=l.y-s.y;if(c===0&&d===0)return s;const m=((t.x-s.x)*c+(t.y-s.y)*d)/(c*c+d*d),b=Math.max(0,Math.min(1,m));return{x:s.x+b*c,y:s.y+b*d}}let ce,S,dt,te,pt,ne,Je,He;function ii(){ce=document.getElementById("canvas"),S=ce.getContext("2d"),dt=document.getElementById("ruler-top"),te=dt.getContext("2d"),pt=document.getElementById("ruler-left"),ne=pt.getContext("2d"),Je=document.createElement("canvas"),He=Je.getContext("2d")}function li(t,o){const n=o.getContext("2d");if(!n)return;const r=e.project.features.filter(T=>T.properties.floor===t),i=e.cachedFloorPlanImages[t];if(r.length===0&&!i){n.fillStyle=e.activeTheme==="dark"?"#261638":"#f8f9fa",n.fillRect(0,0,o.width,o.height),n.fillStyle=e.activeTheme==="dark"?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.2)",n.font="12px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("No Floor Plan",o.width/2,o.height/2);return}let s=1/0,l=1/0,c=-1/0,d=-1/0;r.forEach(T=>{if(T.geometry.type==="Polygon"){const p=at(T.geometry);s=Math.min(s,p.x),l=Math.min(l,p.y),c=Math.max(c,p.x+p.width),d=Math.max(d,p.y+p.height)}else if(T.geometry.type==="LineString")T.geometry.coordinates.forEach(p=>{s=Math.min(s,p[0]),l=Math.min(l,p[1]),c=Math.max(c,p[0]),d=Math.max(d,p[1])});else if(T.geometry.type==="Point"){const p=T.geometry.coordinates;s=Math.min(s,p[0]),l=Math.min(l,p[1]),c=Math.max(c,p[0]),d=Math.max(d,p[1])}}),i&&(s=Math.min(s,0),l=Math.min(l,0),c=Math.max(c,i.width),d=Math.max(d,i.height)),s===1/0&&(s=0,l=0,c=1e3,d=1e3);const m=20,b=c-s,y=d-l,f=(o.width-m*2)/b,I=(o.height-m*2)/y,h=Math.min(f,I);n.clearRect(0,0,o.width,o.height),n.save();const E=o.width/2-(s+b/2)*h,w=o.height/2-(l+y/2)*h;n.translate(E,w),n.scale(h,h),i&&n.drawImage(i,0,0);const k=r.filter(T=>T.geometry.type==="Polygon"),F=r.filter(T=>T.geometry.type!=="Polygon"),L=k.filter(T=>T.properties.isEmpty),A=k.filter(T=>!T.properties.isEmpty),z=document.createElement("canvas");z.width=o.width,z.height=o.height;const D=z.getContext("2d");D.save(),D.translate(E,w),D.scale(h,h),A.forEach(T=>{ut(T,!1,{ctx:D,onlyFill:!0,noLabel:!0})}),L.forEach(T=>{ut(T,!1,{ctx:D,onlyFill:!0,noLabel:!0,forceComposite:"destination-out",forceColor:"#000000"})}),D.restore(),n.drawImage(z,0,0),k.forEach(T=>{ut(T,!1,{ctx:n,onlyStroke:!0,noLabel:!0})}),F.forEach(T=>{T.geometry.type==="LineString"?ts(T,!1,{ctx:n}):T.geometry.type==="Point"&&es(T,!1,{ctx:n})}),n.restore()}function Z(){if(!(!S||!ce.parentElement)){if(ce.width=ce.parentElement.clientWidth,ce.height=ce.parentElement.clientHeight,dt.width=ce.width,pt.height=ce.height,ai(),e.measureLabels=[],S.save(),S.translate(e.pan.x,e.pan.y),S.scale(e.scale,e.scale),e.activeFloorId){const t=e.cachedFloorPlanImages[e.activeFloorId];t&&e.visibleLayers.floorplan!==!1&&S.drawImage(t,0,0),e.isGridVisible&&ci();const o=e.project.features.filter(l=>l.properties.floor===e.activeFloorId&&e.visibleLayers[l.properties.type]),n=o.filter(l=>l.geometry.type==="Polygon"),r=o.filter(l=>l.geometry.type!=="Polygon"),i=n.filter(l=>l.properties.isEmpty),s=n.filter(l=>!l.properties.isEmpty);if(n.length>0&&(Je.width=ce.width,Je.height=ce.height,He.clearRect(0,0,Je.width,Je.height),He.save(),He.translate(e.pan.x,e.pan.y),He.scale(e.scale,e.scale),s.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);ut(l,c,{ctx:He,onlyFill:!0,noLabel:!0})}),i.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);ut(l,c,{ctx:He,onlyFill:!0,noLabel:!0,forceComposite:"destination-out",forceColor:"#000000"})}),He.restore(),S.save(),S.setTransform(1,0,0,1,0,0),S.drawImage(Je,0,0),S.restore(),n.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);ut(l,c,{onlyStroke:!0})})),r.forEach(l=>{const c=e.selectedFeatureIds.includes(l.properties.id);switch(S.lineWidth=(c?3:2)/e.scale,l.geometry.type){case"Point":es(l,c);break;case"LineString":ts(l,c);break}}),e.currentMode==="door"){const l=r.filter(c=>c.geometry.type==="LineString");ui(n,l)}}e.tempShape&&(e.currentMode==="area"&&gi(),e.currentMode==="square"&&yi(),e.currentMode==="line"&&_n(),e.currentMode==="calibrate"&&_n(),e.currentMode==="door"&&_n(),e.currentMode==="polygon"&&hi(),e.currentMode==="arc"&&fi(),e.currentMode==="circle"&&bi()),e.showBeaconHeatmap&&mi(),S.restore(),e.isShiftPressed&&vi()}}function Xr(t){const o=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);return o?{r:parseInt(o[1]),g:parseInt(o[2]),b:parseInt(o[3]),a:o[4]!==void 0?parseFloat(o[4]):1}:null}function Ie(){return e.metersPerPixel}function Le(t){const o=e.activeLanguage==="de"?"de-DE":"en-US";return`${t.toLocaleString(o,{maximumFractionDigits:2})} m`}function we(t,o,n){const r=4/e.scale,i=16/e.scale;S.font=`${12/e.scale}px sans-serif`;const s=S.measureText(n).width+r*2,l=t-s/2,c=o-i/2,d=e.activeTheme==="dark"?"rgba(20,20,25,0.85)":"rgba(255,255,255,0.85)",m=e.activeTheme==="dark"?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.15)";S.fillStyle=d,S.fillRect(l,c,s,i),S.strokeStyle=m,S.lineWidth=1/e.scale,S.strokeRect(l,c,s,i),S.fillStyle=e.activeTheme==="dark"?"#eee":"#333",S.textAlign="center",S.textBaseline="middle",S.fillText(n,t,o)}function Qr(t,o,n,r){if(n)return ie;if(r)return r;const i=t?Xr(t):null,l=(i&&i.a>.4?t:o??(e.activeTheme==="dark"?"#e6e1ef":"#333333")).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(l){const c=parseInt(l[1]),d=parseInt(l[2]),m=parseInt(l[3]),b=(.299*c+.587*d+.114*m)/255,y=.5;return e.activeTheme==="dark"?b<y?"#e6e1ef":"#333333":b>y?"#333333":"#e6e1ef"}return e.activeTheme==="dark"?"#e6e1ef":"#333333"}function ai(){const t=getComputedStyle(document.body).getPropertyValue("--ruler-text").trim(),o=getComputedStyle(document.body).getPropertyValue("--ruler-border").trim(),n=getComputedStyle(document.body).getPropertyValue("--crosshair-color").trim()||"rgba(53, 138, 216, 0.9)";te.clearRect(0,0,dt.width,dt.height),ne.clearRect(0,0,pt.width,pt.height),te.font="12px sans-serif",ne.font="12px sans-serif",te.fillStyle=t,ne.fillStyle=t,te.strokeStyle=o,ne.strokeStyle=o;const{scale:r,pan:i}=e,s=r>1.5?50:r<.4?200:100;for(let d=0;d<dt.width;d+=10){const m=(d-i.x)/r;te.beginPath(),te.moveTo(d+.5,25),te.lineTo(d+.5,30),te.stroke(),Math.round(m)%s===0&&(te.beginPath(),te.moveTo(d+.5,22),te.lineTo(d+.5,30),te.stroke(),te.fillText(String(Math.round(m)),d+2,14))}for(let d=0;d<pt.height;d+=10){const m=(d-i.y)/r;ne.beginPath(),ne.moveTo(25,d+.5),ne.lineTo(30,d+.5),ne.stroke(),Math.round(m)%s===0&&(ne.beginPath(),ne.moveTo(22,d+.5),ne.lineTo(30,d+.5),ne.stroke(),ne.fillText(String(Math.round(m)),2,d+12))}const{x:l,y:c}=e.mousePosScreen;te.fillStyle=n,ne.fillStyle=n,te.beginPath(),te.moveTo(l,0),te.lineTo(l-3,5),te.lineTo(l+3,5),te.closePath(),te.fill(),ne.beginPath(),ne.moveTo(0,c),ne.lineTo(5,c-3),ne.lineTo(5,c+3),ne.closePath(),ne.fill()}function ci(){const{scale:t,pan:o,gridSize:n}=e,r=e.activeTheme==="dark"?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)",i=e.activeTheme==="dark"?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)";S.lineWidth=1/t;const s=-o.x/t,l=-o.y/t,c=(ce.width-o.x)/t,d=(ce.height-o.y)/t;let m=n;const b=40;for(;m*t<b;)m*=2;for(;m*t>b*2;)m/=2;const y=m,f=y/4;if(f*t>10){S.strokeStyle=r;const E=Math.floor(s/f)*f,w=Math.floor(l/f)*f;for(let k=E;k<c;k+=f)S.beginPath(),S.moveTo(k,l),S.lineTo(k,d),S.stroke();for(let k=w;k<d;k+=f)S.beginPath(),S.moveTo(s,k),S.lineTo(c,k),S.stroke()}S.strokeStyle=i,S.lineWidth=1.5/t;const I=Math.floor(s/y)*y,h=Math.floor(l/y)*y;for(let E=I;E<c;E+=y)S.beginPath(),S.moveTo(E,l),S.lineTo(E,d),S.stroke();for(let E=h;E<d;E+=y)S.beginPath(),S.moveTo(s,E),S.lineTo(c,E),S.stroke()}function ut(t,o,n={}){if(t.properties.isPlaceholder)return;const{subType:r,label:i}=t.properties,s=n.ctx||S,c=(e.styleOverrides||Se())[r];let d=_e.default.fill,m=_e.default.stroke,y=t.properties.fontSize||c?.fontSize||14,f=t.properties.fontColor||c?.fontColor;c&&c.baseType==="area"&&(d=c.fill||d,m=c.stroke||m),t.properties.isEmpty?(d="rgba(255, 255, 255, 0.1)",m="#666666",s.setLineDash([8/e.scale,4/e.scale])):s.setLineDash([]),n.forceColor&&(d=n.forceColor),n.forceComposite&&(s.globalCompositeOperation=n.forceComposite);const I=t.geometry.coordinates[0];s.fillStyle=d,s.strokeStyle=o?ie:m,s.lineWidth=(o?3:2)/e.scale,s.beginPath(),s.moveTo(I[0][0],I[0][1]);for(let h=1;h<I.length;h++)s.lineTo(I[h][0],I[h][1]);if(s.closePath(),n.onlyStroke||s.fill(),n.onlyFill||s.stroke(),n.forceComposite&&(s.globalCompositeOperation="source-over"),s.setLineDash([]),t.properties.isEmpty&&!n.onlyFill){const h=at(t.geometry);s.beginPath(),s.moveTo(h.x,h.y),s.lineTo(h.x+h.width,h.y+h.height),s.moveTo(h.x+h.width,h.y),s.lineTo(h.x,h.y+h.height),s.strokeStyle="rgba(100, 100, 100, 0.5)",s.lineWidth=1/e.scale,s.stroke()}if(i&&!n.onlyFill&&!n.onlyStroke&&!n.noLabel){const h=at(t.geometry),E=Qr(d,m,o,f);s.fillStyle=E,s.font=`bold ${y/e.scale}px sans-serif`,s.textAlign="center",s.textBaseline="middle";const w=h.x+h.width/2,k=h.y+h.height/2;s.fillText(i,w,k);const F=Array.isArray(t.properties.contents)?t.properties.contents:[];if(F.length>0){const z=(c?.contentsFontSize||Math.max(10,Math.round(y*.8)))/e.scale,D=(c?.contentsLineSpacing||Math.round(y*.5))/e.scale;s.font=`${z}px sans-serif`,s.textAlign="center",s.textBaseline="top";let T=k+D;for(let p=0;p<F.length;p++){const v=String(F[p]);v.trim()!==""&&(s.fillText(v,w,T),T+=D)}}const L=t.properties.room_number,A=t.properties.designation;if(L||A){const z=(c?.contentsFontSize||Math.max(8,Math.round(y*.7)))/e.scale,D=(c?.contentsLineSpacing||Math.round(y*.5))/e.scale;s.font=`${z}px sans-serif`,s.textAlign="center",s.textBaseline="top";let p=F.length>0?k+D*(F.length+1):k+D;L&&(s.fillText(String(L),w,p),p+=D),A&&s.fillText(String(A),w,p)}if(t.properties.isAccessible){const z=(c?.accessibleIconSize||16)/e.scale,D=(c?.accessibleIconOffsetX||6)/e.scale,T=(c?.accessibleIconOffsetY||6)/e.scale,p=getComputedStyle(document.body).getPropertyValue("--color-primary").trim()||"#6b2bd0",v=getComputedStyle(document.body).getPropertyValue("--color-primary-text").trim()||"#ffffff",B=z+4/e.scale,C=z+4/e.scale;s.fillStyle=o?ie:p,s.beginPath();const P=3/e.scale,M=h.x+D,j=h.y+T;s.moveTo(M+P,j),s.lineTo(M+B-P,j),s.quadraticCurveTo(M+B,j,M+B,j+P),s.lineTo(M+B,j+C-P),s.quadraticCurveTo(M+B,j+C,M+B-P,j+C),s.lineTo(M+P,j+C),s.quadraticCurveTo(M,j+C,M,j+C-P),s.lineTo(M,j+P),s.quadraticCurveTo(M,j,M+P,j),s.closePath(),s.fill(),s.fillStyle=o?"#ffffff":v,s.font=`${z}px sans-serif`,s.textAlign="left",s.textBaseline="top",s.fillText("♿",M+2/e.scale,j+2/e.scale)}}if(o&&!n.onlyFill&&!n.onlyStroke){const h=5/e.scale;if((e.isAltPressed||e.currentMode==="scissors"||e.currentMode==="angle-edit"||e.currentMode==="parallel-edit")&&e.hoveredFeatureId===t.properties.id&&e.hoveredEdgeIndex!==-1){const E=I[e.hoveredEdgeIndex],w=I[(e.hoveredEdgeIndex+1)%(I.length-1)];s.beginPath(),s.moveTo(E[0],E[1]),s.lineTo(w[0],w[1]),s.strokeStyle=ie,s.lineWidth=5/e.scale,s.lineCap="round",s.stroke()}s.fillStyle="#fff",s.strokeStyle=ie,s.lineWidth=2/e.scale,I.forEach(E=>{s.beginPath(),s.arc(E[0],E[1],h,0,2*Math.PI),s.fill(),s.stroke()})}if(e.showDimensions.area||e.showDimensions.circle||e.showDimensions.angles||e.currentMode==="calibrate"){const h=I,E=at(t.geometry),w=E.x+E.width/2,k=E.y+E.height/2;if(h.length>=20&&Math.abs(E.width-E.height)/Math.max(E.width,E.height)<.08&&e.showDimensions.circle){let L=0;for(let D=0;D<h.length-1;D++){const T=h[D][0]-w,p=h[D][1]-k;L+=Math.sqrt(T*T+p*p)}const A=L/(h.length-1),z=A*Ie();we(w+A,k-18/e.scale,Le(z))}else if(e.showDimensions.area||e.currentMode==="calibrate")for(let L=0;L<h.length-1;L++){const A=h[L][0],z=h[L][1],D=h[L+1][0],T=h[L+1][1],p=Math.hypot(D-A,T-z),v=p*Ie(),B=(A+D)/2,P=(z+T)/2-18/e.scale,M=Le(v);if(we(B,P,M),e.currentMode==="calibrate"){const j=4/e.scale,N=16/e.scale;S.font=`${12/e.scale}px sans-serif`;const _=S.measureText(M).width+j*2,O=B-_/2,X=P-N/2;e.measureLabels.push({bx:O,by:X,w:_,h:N,pxLength:p,type:"distance"})}}if(e.showDimensions.angles){const L=h.length-1;for(let A=0;A<L;A++){const z=h[(A-1+L)%L],D=h[A],T=h[(A+1)%L],p=z[0]-D[0],v=z[1]-D[1],B=T[0]-D[0],C=T[1]-D[1],P=Math.hypot(p,v),M=Math.hypot(B,C);if(P===0||M===0)continue;const j=(p*B+v*C)/(P*M),N=Math.min(1,Math.max(-1,j)),_=Math.round(Math.acos(N)*180/Math.PI),O=p/P+B/M,X=v/P+C/M,Y=Math.hypot(O,X)||1,Q=22/e.scale,g=D[0]+O/Y*Q,x=D[1]+X/Y*Q;we(g,x,`${_}°`);const W=4/e.scale,V=16/e.scale;S.font=`${12/e.scale}px sans-serif`;const $=S.measureText(`${_}°`).width+W*2,G=g-$/2,U=x-V/2;e.measureLabels.push({bx:G,by:U,w:$,h:V,pxLength:0,type:"angle",featureId:t.properties.id,vertexIndex:A,deg:_})}}}}function di(t,o,n,r,i,s=S){const l=new Path2D(t);s.save(),s.translate(o,n),s.scale(1/e.scale,1/e.scale),s.translate(-12,-12),s.fillStyle=r?ie:i||"#34495e",s.fill(l),s.restore()}function pi(t,o,n,r,i,s,l=S){const c=new Path2D(t);l.save(),l.translate(o,n),l.scale(1/e.scale,1/e.scale),l.translate(-12,-12),l.strokeStyle=r?ie:i,l.lineWidth=s/1,l.lineCap="round",l.lineJoin="round",l.stroke(c),l.restore()}function es(t,o,n={}){const[r,i]=t.geometry.coordinates,{subType:s,label:l}=t.properties,c=n.ctx||S,m=(e.styleOverrides||Se())[s];let b=fn.default,y="#34495e",I=t.properties.fontSize||m?.fontSize||12,h=t.properties.fontColor||m?.fontColor;if(m&&m.baseType==="point"&&(b=m.icon||b,y=m.iconColor||y),s==="beacon"){const w=typeof t.properties.beacon_range=="number"?t.properties.beacon_range:null;if(e.showBeaconRangeRing&&w&&w>0){const k=w*(e.gridSize/e.metersPerGridCell);c.beginPath(),c.arc(r,i,k,0,Math.PI*2),c.fillStyle="rgba(46, 204, 113, 0.12)",c.fill(),c.strokeStyle="rgba(46, 204, 113, 0.6)",c.lineWidth=1.5/e.scale,c.stroke()}}o&&(c.fillStyle="rgba(231, 76, 60, 0.3)",c.beginPath(),c.arc(r,i,18/e.scale,0,2*Math.PI),c.fill()),s==="beacon"?pi(b,r,i,o,"#b955d0",2,c):di(b,r,i,o,y,c);const E=Qr(void 0,y,o,h);c.fillStyle=E,c.font=`${I/e.scale}px sans-serif`,c.textAlign="center",c.fillText(l,r,i-22/e.scale)}function ts(t,o,n={}){const{coordinates:r}=t.geometry;if(r.length<2)return;const i=n.ctx||S;i.beginPath(),i.moveTo(r[0][0],r[0][1]),r.slice(1).forEach(l=>i.lineTo(l[0],l[1]));const s=t.properties.subType==="door";if(i.strokeStyle=o?ie:s?"#e67e22":t.properties.isAccessible?"#3498db":"#8e44ad",i.lineWidth=(o?5:s?4:3)/e.scale,i.lineCap="round",i.stroke(),o){const l=6/e.scale;i.fillStyle="#fff",i.strokeStyle=ie,i.lineWidth=2/e.scale;let c=[];if(t.properties.subType==="arc"&&t.properties.controlPoints){const{p0:d,p1:m,p2:b}=t.properties.controlPoints;c=[d,m,b],i.setLineDash([4/e.scale,4/e.scale]),i.beginPath(),i.moveTo(d.x,d.y),i.lineTo(m.x,m.y),i.lineTo(b.x,b.y),i.strokeStyle="#7f8c8d",i.stroke(),i.setLineDash([])}else c=r.map(d=>({x:d[0],y:d[1]}));c.forEach(d=>{i.beginPath(),i.arc(d.x,d.y,l,0,2*Math.PI),i.fill(),i.stroke()})}if(e.showDimensions.path||e.currentMode==="calibrate"){let l=0;for(let w=0;w<r.length-1;w++){const k=r[w][0],F=r[w][1],L=r[w+1][0],A=r[w+1][1];l+=Math.hypot(L-k,A-F)}const c=l*Ie();let d=r[0][0],m=r[0][0],b=r[0][1],y=r[0][1];for(let w=1;w<r.length;w++)d=Math.min(d,r[w][0]),m=Math.max(m,r[w][0]),b=Math.min(b,r[w][1]),y=Math.max(y,r[w][1]);const f=(d+m)/2,h=(b+y)/2-18/e.scale,E=Le(c);if(we(f,h,E),e.currentMode==="calibrate"){const w=4/e.scale,k=16/e.scale;S.font=`${12/e.scale}px sans-serif`;const F=S.measureText(E).width+w*2,L=f-F/2,A=h-k/2;e.measureLabels.push({bx:L,by:A,w:F,h:k,pxLength:l,type:"distance"})}}}function ui(t,o){S.save(),S.lineWidth=2/e.scale,t.forEach(n=>{const r=n.geometry.coordinates[0];for(let i=0;i<r.length-1;i++){const s=r[i],l=r[i+1],c=e.hoveredFeatureId===n.properties.id&&e.hoveredEdgeIndex===i;S.strokeStyle=c?ie:"#e67e22",S.setLineDash([6/e.scale,6/e.scale]),S.beginPath(),S.moveTo(s[0],s[1]),S.lineTo(l[0],l[1]),S.stroke(),S.setLineDash([]);const d=(s[0]+l[0])/2,m=(s[1]+l[1])/2;S.fillStyle=c?ie:"#e67e22",S.beginPath(),S.arc(d,m,3/e.scale,0,Math.PI*2),S.fill()}}),o.forEach(n=>{const r=n.geometry.coordinates;for(let i=0;i<r.length-1;i++){const s=r[i],l=r[i+1],c=e.hoveredFeatureId===n.properties.id&&e.hoveredEdgeIndex===i;S.strokeStyle=c?ie:"#3498db",S.setLineDash([6/e.scale,6/e.scale]),S.beginPath(),S.moveTo(s[0],s[1]),S.lineTo(l[0],l[1]),S.stroke(),S.setLineDash([]);const d=(s[0]+l[0])/2,m=(s[1]+l[1])/2;S.fillStyle=c?ie:"#3498db",S.beginPath(),S.arc(d,m,3/e.scale,0,Math.PI*2),S.fill()}}),S.restore()}function mi(){const t=e.project.features.filter(o=>o.properties.floor===e.activeFloorId&&o.geometry.type==="Point"&&o.properties.subType==="beacon");S.save(),S.globalCompositeOperation="multiply",t.forEach(o=>{const[n,r]=o.geometry.coordinates;if(!(typeof o.properties.beacon_range=="number"&&o.properties.beacon_range>0))return;const s=o.properties.beacon_range,l=Ie(),c=l>0?s/l:s*10,d=S.createRadialGradient(n,r,0,n,r,c);d.addColorStop(0,"rgba(46, 204, 113, 0.4)"),d.addColorStop(.5,"rgba(241, 196, 15, 0.25)"),d.addColorStop(1,"rgba(231, 76, 60, 0.15)"),S.fillStyle=d,S.beginPath(),S.arc(n,r,c,0,Math.PI*2),S.fill(),e.showBeaconRangeRing&&(S.save(),S.globalCompositeOperation="source-over",S.strokeStyle="rgba(46, 204, 113, 0.6)",S.lineWidth=1/e.scale,S.beginPath(),S.arc(n,r,c,0,Math.PI*2),S.stroke(),S.restore())}),S.restore()}function gi(){if(!e.tempShape?.start)return;S.strokeStyle=ie,S.lineWidth=1.5/e.scale,S.setLineDash([6/e.scale,6/e.scale]);const{start:t}=e.tempShape,o=Ce(e.mousePos);S.strokeRect(t.x,t.y,o.x-t.x,o.y-t.y),S.setLineDash([]);const n=Math.abs(o.x-t.x),r=Math.abs(o.y-t.y),i=n*Ie(),s=r*Ie(),l=(t.x+o.x)/2,c=(t.y+o.y)/2;we(l,t.y-18/e.scale,Le(i)),we(t.x-36/e.scale,c,Le(s))}function yi(){if(!e.tempShape?.start)return;S.strokeStyle=ie,S.lineWidth=1.5/e.scale,S.setLineDash([6/e.scale,6/e.scale]);const{start:t}=e.tempShape,o=Ce(e.mousePos),n=Math.max(Math.abs(o.x-t.x),Math.abs(o.y-t.y)),r=o.x>=t.x?t.x:t.x-n,i=o.y>=t.y?t.y:t.y-n;S.strokeRect(r,i,n,n),S.setLineDash([]);const s=n*Ie();we(r+n/2,i-18/e.scale,Le(s))}function _n(){if(!e.tempShape?.start)return;S.strokeStyle=ie,S.lineWidth=2/e.scale,S.beginPath();const t=e.tempShape.start;S.moveTo(t.x,t.y);const o=e.tempShape.end||ct(Ce(e.mousePos));S.lineTo(o.x,o.y),S.stroke();const n=o.x-t.x,r=o.y-t.y,s=Math.sqrt(n*n+r*r)*Ie(),l=(t.x+o.x)/2,c=(t.y+o.y)/2;we(l,c-18/e.scale,Le(s)),S.fillStyle=e.activeTheme==="dark"?"#eee":"#333",S.font=`${12/e.scale}px sans-serif`,S.textAlign="center",S.beginPath(),S.arc(t.x,t.y,4/e.scale,0,Math.PI*2),S.fill(),S.fillText("A",t.x,t.y-10/e.scale),S.beginPath(),S.arc(o.x,o.y,4/e.scale,0,Math.PI*2),S.fill(),S.fillText((e.tempShape.end,"B"),o.x,o.y-10/e.scale)}function hi(){if(!e.tempShape?.nodes||e.tempShape.nodes.length===0)return;S.strokeStyle=ie,S.lineWidth=2/e.scale,S.beginPath();const t=e.tempShape.nodes[0];S.moveTo(t.x,t.y);for(let m=1;m<e.tempShape.nodes.length;m++)S.lineTo(e.tempShape.nodes[m].x,e.tempShape.nodes[m].y);const o=Ce(e.mousePos);S.lineTo(o.x,o.y),S.stroke();const n=e.tempShape.nodes[e.tempShape.nodes.length-1],r=o.x-n.x,i=o.y-n.y,l=Math.sqrt(r*r+i*i)*Ie(),c=(n.x+o.x)/2,d=(n.y+o.y)/2;we(c,d-18/e.scale,Le(l))}function fi(){if(!e.tempShape?.start)return;const t=ct(Ce(e.mousePos));if(S.strokeStyle=ie,S.lineWidth=2/e.scale,S.setLineDash([6/e.scale,6/e.scale]),S.beginPath(),e.tempShape.end){const o=e.tempShape.start,n=e.tempShape.end,i=Ho(o,n,t),s=Kt(o,n,i);S.moveTo(s[0][0],s[0][1]);for(let y=1;y<s.length;y++)S.lineTo(s[y][0],s[y][1]);let l=0;for(let y=0;y<s.length-1;y++){const f=s[y][0],I=s[y][1],h=s[y+1][0],E=s[y+1][1];l+=Math.hypot(h-f,E-I)}const c=l*Ie(),d=Math.floor(s.length/2),m=s[d][0],b=s[d][1];we(m,b-18/e.scale,Le(c))}else{S.moveTo(e.tempShape.start.x,e.tempShape.start.y),S.lineTo(t.x,t.y);const o=t.x-e.tempShape.start.x,n=t.y-e.tempShape.start.y,i=Math.sqrt(o*o+n*n)*Ie(),s=(e.tempShape.start.x+t.x)/2,l=(e.tempShape.start.y+t.y)/2;we(s,l-18/e.scale,Le(i))}S.stroke(),S.setLineDash([])}function bi(){if(!e.tempShape?.start)return;const t=e.tempShape.start,o=Ce(e.mousePos),n=Math.sqrt(Math.pow(o.x-t.x,2)+Math.pow(o.y-t.y,2)),r=Se(),s=document.getElementById("element-type-select")?.value||"default",l=r[s];let c=l&&l.baseType==="area"&&l.fill||_e.default.fill;const d=Xr(c);if(d){const b=Math.max(d.a,.65);c=`rgba(${d.r}, ${d.g}, ${d.b}, ${b})`}S.beginPath(),S.arc(t.x,t.y,n,0,2*Math.PI),S.fillStyle=c,S.fill(),S.strokeStyle=ie,S.lineWidth=1.5/e.scale,S.setLineDash([6/e.scale,6/e.scale]),S.stroke(),S.setLineDash([]);const m=n*Ie();we(t.x+n,t.y-18/e.scale,Le(m))}function vi(){if(!ce||ce.width===0||ce.height===0)return;const t=150,o=2.5,n=t/2,{x:r,y:i}=e.mousePosScreen,s=document.body.getAttribute("data-theme")||"light";S.save(),S.beginPath(),S.arc(r,i,n,0,Math.PI*2),S.strokeStyle=s==="dark"?"#333":"#a0a0a0",S.lineWidth=3,S.stroke(),S.clip(),S.globalAlpha=1,S.drawImage(ce,r-n/o,i-n/o,t/o,t/o,r-n,i-n,t,t),S.globalAlpha=1,S.restore()}function Ke(){const t=document.getElementById("overview-stats-panel");if(!t)return;const o=e.project.properties.projectName||a("unnamedProject"),n=ze(),r=n.length,i=e.project.features.filter(d=>d.properties.type==="area"&&!d.properties.isPlaceholder).length,s=e.project.features.filter(d=>d.properties.type==="point"||d.properties.type==="connector").length;let l=`<div><span>${a("stat_project")}:</span><span class="value">${o}</span></div><div><span>${a("stat_floors")}:</span><span class="value">${r}</span></div><div><span>${a("stat_areas")}:</span><span class="value">${i}</span></div><div><span>${a("stat_points")}:</span><span class="value">${s}</span></div>`;t.innerHTML=l;const c=document.getElementById("overview-floor-list");c&&(c.innerHTML="",n.forEach(d=>{const m=e.project.features.filter(T=>T.properties.floor===d&&T.properties.type==="area"&&!T.properties.isPlaceholder).length,b=e.project.features.filter(T=>T.properties.floor===d&&(T.properties.type==="point"||T.properties.type==="connector")).length,y=document.createElement("div");y.className="floor-block";const f=document.createElement("div");f.className="floor-card";const I=document.createElement("img");if(I.className="floor-thumb",e.cachedFloorPlanImages[d])I.src=e.cachedFloorPlanImages[d].src,f.classList.add("has-thumb");else{const T=document.createElement("canvas");T.width=240,T.height=120,li(d,T),I.src=T.toDataURL(),f.classList.add("has-thumb")}const h=document.createElement("div");h.className="floor-meta";const E=document.createElement("div");E.className="name",E.textContent=d;const w=document.createElement("div");w.className="counts",w.textContent=`${a("stat_areas")}: ${m} · ${a("stat_points")}: ${b}`,h.appendChild(E),h.appendChild(w),f.appendChild(I),f.appendChild(h),f.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),y.appendChild(f);const k=document.createElement("button");k.className="beacon-toggle";const F=e.project.features.filter(T=>T.properties.floor===d&&(T.properties.type==="point"||T.properties.type==="connector")&&T.properties.subType==="beacon");k.textContent=`${a("overviewBeacons")} (${F.length})`;const L=document.createElement("div");L.className="beacon-section",k.addEventListener("click",()=>{L.style.display===""||L.style.display==="none"?(L.innerHTML="",F.forEach(p=>{const v=document.createElement("div");v.className="beacon-card";const B=document.createElement("div");B.className="beacon-meta";const C=document.createElement("div");C.className="name";const P=p.properties.beacon_serial||"",M=p.properties.label||a("point_beacon_label");C.textContent=P?`${M} · ${P}`:M;const j=document.createElement("div");j.className="counts";const N=p.properties.beacon_range,_=p.properties.beacon_note_de||p.properties.beacon_note_en||"",O=[];O.push(`${a("beacon_serial_label")}: ${P||"-"}`),typeof N=="number"&&O.push(`${a("beacon_range_label")}: ${N}`),_&&O.push(`${a("beacon_note_de_label")}: ${_}`),j.textContent=O.join(" · "),B.appendChild(C),B.appendChild(j),v.appendChild(B),v.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),L.appendChild(v)}),L.style.display="block"):(L.style.display="none",L.innerHTML="")}),y.appendChild(k),y.appendChild(L);const A=e.project.features.filter(T=>T.properties.floor===d&&T.properties.type==="area"&&!T.properties.isPlaceholder).sort((T,p)=>{const v=(T.properties.label||"").toLowerCase(),B=(p.properties.label||"").toLowerCase();return v.localeCompare(B)}),z=document.createElement("button");z.className="beacon-toggle",z.textContent=`${a("areas")} (${A.length})`;const D=document.createElement("div");D.className="area-section",z.addEventListener("click",()=>{if(D.style.display===""||D.style.display==="none"){const p=Se();D.innerHTML="",A.forEach(B=>{const C=document.createElement("div");C.className="area-card";const P=document.createElement("div");P.className="area-meta";const M=document.createElement("div");M.className="name";const j=B.properties.label||"";M.textContent=j;const N=document.createElement("div");N.className="counts";const _=p[B.properties.subType]?.label||B.properties.subType,O=Array.isArray(B.properties.contents)?B.properties.contents.filter(Y=>Y.trim()!==""):[],X=O.length>0?O.join(", "):"-";N.textContent=`${a("elementType")}: ${_} · ${a("roomContentsTitle")}: ${X}`,P.appendChild(M),P.appendChild(N),C.appendChild(P),C.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),D.appendChild(C)});const v=A.filter(B=>!!B.properties.isAccessible);if(v.length>0){const B=document.createElement("div");B.className="area-meta";const C=document.createElement("div");C.className="name",C.textContent=a("accessibleRoomsHeader"),B.appendChild(C),D.appendChild(B),v.forEach(P=>{const M=document.createElement("div");M.className="area-card";const j=document.createElement("div");j.className="area-meta";const N=document.createElement("div");N.className="name",N.textContent=P.properties.label||"";const _=document.createElement("div");_.className="counts",_.textContent="Barrierefrei",j.appendChild(N),j.appendChild(_),M.appendChild(j),M.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),D.appendChild(M)})}D.style.display="block"}else D.style.display="none",D.innerHTML=""}),y.appendChild(z),y.appendChild(D),c.appendChild(y)}))}function xi(){if(!e.activeFloorId||!e.tempShape)return null;const t=Se();let n=document.getElementById("element-type-select")?.value||"raum";const i=t[n]?.label||"Preview",s="preview_feature",l=e.activeFloorId,c=e.mousePos||{x:0,y:0},d=Ce(c);if(e.currentMode==="area"&&e.tempShape.start){const m=e.tempShape.start,b=Math.min(m.x,d.x),y=Math.min(m.y,d.y),f=Math.abs(d.x-m.x),I=Math.abs(d.y-m.y);return f<1||I<1?null:{type:"Feature",geometry:{type:"Polygon",coordinates:[[[b,y],[b+f,y],[b+f,y+I],[b,y+I],[b,y]]]},properties:{id:s,floor:l,type:"area",subType:n,label:i,isPlaceholder:!0}}}if(e.currentMode==="square"&&e.tempShape.start){const m=e.tempShape.start,b=Math.abs(d.x-m.x),y=Math.abs(d.y-m.y),f=Math.max(b,y),I=Math.min(m.x,d.x),h=Math.min(m.y,d.y);return f<1?null:{type:"Feature",geometry:{type:"Polygon",coordinates:[[[I,h],[I+f,h],[I+f,h+f],[I,h+f],[I,h]]]},properties:{id:s,floor:l,type:"area",subType:n,label:i,isPlaceholder:!0}}}if(e.currentMode==="polygon"&&e.tempShape.nodes&&e.tempShape.nodes.length>=1){const m=[...e.tempShape.nodes.map(b=>[b.x,b.y]),[d.x,d.y]];return m.length<3?null:(m.push(m[0]),{type:"Feature",geometry:{type:"Polygon",coordinates:[m]},properties:{id:s,floor:l,type:"area",subType:n,label:i,isPlaceholder:!0}})}if(e.currentMode==="circle"&&e.tempShape.start){const m=e.tempShape.start,b=Math.sqrt((d.x-m.x)**2+(d.y-m.y)**2);if(b<1)return null;const y=64,f=Array.from({length:y},(I,h)=>{const E=h/y*2*Math.PI;return[m.x+b*Math.cos(E),m.y+b*Math.sin(E)]});return f.push(f[0]),{type:"Feature",geometry:{type:"Polygon",coordinates:[f]},properties:{id:s,floor:l,type:"area",subType:n,label:i,isPlaceholder:!0}}}if(e.currentMode==="line"&&e.tempShape.start){const m=e.tempShape.start;return{type:"Feature",geometry:{type:"LineString",coordinates:[[m.x,m.y],[d.x,d.y]]},properties:{id:s,floor:l,type:"path",subType:n,label:i,isPlaceholder:!0}}}if(e.currentMode==="door"&&e.tempShape.start){const m=e.tempShape.start,b=[[m.x,m.y],[d.x,d.y]],y=d.x-m.x,f=d.y-m.y,I=Math.sqrt(y*y+f*f),h=Math.round(I*e.metersPerPixel*100)/100;return{type:"Feature",geometry:{type:"LineString",coordinates:b},properties:{id:s,floor:l,type:"path",subType:"door",label:"Tür",isPlaceholder:!0,door_length_m:h,door_edge_index:e.tempShape.edgeIndex}}}if(e.currentMode==="arc"&&e.tempShape.start){const m=e.tempShape.start;if(e.tempShape.end){const b=e.tempShape.start,y=e.tempShape.end,f=Ho(b,y,d);return{type:"Feature",geometry:{type:"LineString",coordinates:Kt(b,y,f)},properties:{id:s,floor:l,type:"path",subType:"arc",label:i,isPlaceholder:!0}}}else return{type:"Feature",geometry:{type:"LineString",coordinates:[[m.x,m.y],[d.x,d.y]]},properties:{id:s,floor:l,type:"path",subType:"arc",label:i,isPlaceholder:!0}}}return e.currentMode==="point"?{type:"Feature",geometry:{type:"Point",coordinates:[d.x,d.y]},properties:{id:s,floor:l,type:"point",subType:n,label:i,isPlaceholder:!0}}:null}function q(){const t=document.getElementById("live-geojson-output");if(t){const o=xi(),n=o?{...e.project,features:[...e.project.features,o]}:e.project;t.textContent=JSON.stringify(n,null,2)}}let st=null,$n=null,Ye=null,Xt=null,Qt=null,It=null,On=null,en=null,tn=null,Ht=null,Hn=null,Rn=null;function Ei(t){st=t.inputPromptModal,$n=t.inputPromptLabel,Ye=t.inputPromptInput,Xt=t.inputPromptOk,Qt=t.inputPromptCancel,It=t.confirmModal,On=t.confirmMessage,en=t.confirmOk,tn=t.confirmCancel,Ht=t.loadingModal,Hn=t.loadingMessage,Rn=t.loadingOk}function Pe(t,o=""){return!st||!$n||!Ye||!Xt||!Qt?Promise.resolve(null):($n.textContent=t,Ye.value=o,st.classList.remove("hidden"),Ye.focus(),new Promise(n=>{const r=()=>{st.classList.add("hidden"),Xt.removeEventListener("click",i),Qt.removeEventListener("click",s),Ye.removeEventListener("keydown",l),c&&c.removeEventListener("click",s)},i=()=>{const d=Ye.value.trim();r(),n(d||null)},s=()=>{r(),n(null)},l=d=>{d.key==="Enter"?i():d.key==="Escape"&&s()};Xt.addEventListener("click",i),Qt.addEventListener("click",s),Ye.addEventListener("keydown",l);const c=st?st.querySelector(".modal-overlay"):null;c&&c.addEventListener("click",s)}))}function Fe(t){return!It||!On||!en||!tn?Promise.resolve(!1):(On.textContent=t,It.classList.remove("hidden"),new Promise(o=>{const n=()=>{It.classList.add("hidden"),en.removeEventListener("click",r),tn.removeEventListener("click",i),l?.removeEventListener("click",i),window.removeEventListener("keydown",s)},r=()=>{n(),o(!0)},i=()=>{n(),o(!1)},s=c=>{c.key==="Escape"&&i(),c.key==="Enter"&&r()};en.addEventListener("click",r),tn.addEventListener("click",i),window.addEventListener("keydown",s);const l=It.querySelector(".modal-overlay");l&&l.addEventListener("click",i)}))}function qo(t){!Ht||!Hn||!Rn||(Hn.textContent=t,Ht.classList.remove("hidden"),Rn.onclick=()=>mt())}function mt(){Ht&&Ht.classList.add("hidden")}const Me=Object.freeze({publicAPI:"/api",imdAPI:"/app/api",login:"/app/login",imd:"/app"}),Jt=t=>{console.error(`[UI Error Message]: ${t}`)};class wi{baseUrl;backendAvailable=!1;warnedNoBackend=!1;constructor(o=window.location.origin){this.baseUrl=o,this.setupLockRelease()}base64ToFile(o,n){const r=o.split(","),i=r[0].match(/:(.*?);/)[1],s=atob(r[1]);let l=s.length;const c=new Uint8Array(l);for(;l--;)c[l]=s.charCodeAt(l);const d=i.split("/")[1]||"png",m=n.includes(".")?n:`${n}.${d}`;return new File([c],m,{type:i})}async request(o,n={}){if(!this.backendAvailable&&!o.includes("random-id"))throw new Error("Backend not available");n.credentials="include";try{const r=await fetch(`${this.baseUrl}${o}`,n);if(r.status===204)return{};const i=(r.headers.get("content-type")||"").toLowerCase();let s;if(i.includes("application/json"))s=await r.json();else{const l=await r.text(),c='Serverantwort ist keine JSON-API. Läuft das Backend unter "/app/api" und "/api"?';throw this.backendAvailable=!1,this.warnedNoBackend||(Jt(`${c}
Pfad: ${o}
Status: ${r.status}
Antwort: ${l.slice(0,200)}`),this.warnedNoBackend=!0),new Error(c)}if(!r.ok){const l=s.error||s.message||`Request failed with status ${r.status}`;throw Jt(l),new Error(l)}return s}catch(r){throw r instanceof Error||Jt("An unexpected network error occurred."),r}}isAvailable(){return this.backendAvailable}async probeBackend(){const o=new AbortController,n=setTimeout(()=>o.abort(),1e3);try{const r=await fetch(`${this.baseUrl}${Me.imdAPI}/random-id`,{method:"GET",credentials:"include",signal:o.signal});clearTimeout(n);const i=(r.headers.get("content-type")||"").toLowerCase();this.backendAvailable=r.ok&&i.includes("application/json")}catch{clearTimeout(n),this.backendAvailable=!1}}async getProject(o,n){const r=n?`${Me.publicAPI}/${o}/${n}`:`${Me.publicAPI}/${o}`;return this.request(r)}async listProjects(){return this.request(`${Me.publicAPI}/list`)}async listVersions(o){return(await this.request(`${Me.publicAPI}/${o}/list`)).versions}async getNewId(){return(await this.request(`${Me.imdAPI}/random-id`)).id}async saveProject(o,n,r){try{const i=o??(await this.request("/app/api/random-id")).id,s=[];if(n.project.floorplanImages)for(const[m,b]of Object.entries(n.project.floorplanImages))b!==null&&b.startsWith("data:image")&&s.push(this.base64ToFile(b,m));const l=r?`/app/api/${i}/${r}`:`/app/api/${i}`,c=JSON.parse(JSON.stringify(n));c.project.floorplanImages=null,await this.request(l,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});let d=r;if(!d){const m=await this.request(`/api/${i}/list`);d=Math.max(...m.versions)}if(s.length>0){const m=new FormData;s.forEach(b=>m.append("floorplans",b)),await this.request(`/app/api/${i}/${d}/floorplans`,{method:"POST",body:m})}return{id:i,version:d}}catch(i){throw Jt(i),i}}async delete(o,n){const r=n?`${Me.imdAPI}/${o}/${n}`:`${Me.imdAPI}/${o}`;await this.request(r,{method:"DELETE"})}async releaseLock(){try{await fetch(`${this.baseUrl}${Me.imdAPI}/release-lock`,{method:"POST",credentials:"include",keepalive:!0})}catch(o){console.warn("Failed to release lock",o)}}setupLockRelease(){window.addEventListener("beforeunload",()=>{if(!this.backendAvailable)return;const o=`${this.baseUrl}${Me.imdAPI}/release-lock`;if(navigator.sendBeacon){const n=new Blob([],{type:"application/json"});navigator.sendBeacon(o,n)}else fetch(o,{method:"POST",credentials:"include",keepalive:!0}).catch(()=>{})})}}const ge=new wi;function cr(t){e.project.properties.projectName=t.trim(),e.project.properties.sizegrid=e.gridSize,Ke(),q();const o=new Blob([JSON.stringify(e.project,null,2)],{type:"application/geo+json"}),n=document.createElement("a");n.href=URL.createObjectURL(o);const r=(e.project.properties.projectName||"projekt").replace(/[^a-z0-9]/gi,"_").toLowerCase();n.download=`${r}.geojson`,n.click(),URL.revokeObjectURL(n.href)}async function ns(t,o){e.project.properties.projectName=(e.project.properties.projectName||"").trim(),e.project.properties.sizegrid=e.gridSize,Ke(),q(),qo(a("saveProject"));try{const n=await ge.saveProject(t,e,o);return e.currentServerProjectId=n.id,e.currentServerVersion=n.version,n}finally{mt()}}async function dr(t,o){qo(a("loadProject"));try{const n=await ge.getProject(t,o);e.currentServerProjectId=t,e.currentServerVersion=o,Vo(),tt(n),R()}finally{mt()}}function Ii(t){const o=new FileReader;o.onload=n=>{try{const r=JSON.parse(n.target?.result);Vo(),tt(r),R()}catch(r){alert("Fehler beim Laden der Projektdatei."),console.error(r)}},o.readAsText(t)}function tt(t){if(t.type!=="FeatureCollection"||!t.features)throw new Error("Ungültiges GeoJSON-Projektformat.");e.project=t,os();const o=document.getElementById("projectName");o&&(o.value=e.project.properties.projectName||""),e.cachedFloorPlanImages={},e.project.floorplanImages&&Object.entries(e.project.floorplanImages).forEach(([i,s])=>{if(s){const l=new Image;l.onload=()=>{e.cachedFloorPlanImages[i]=l,i===e.activeFloorId&&Z()},l.src=s}});const n=e.project.properties.settings||{};n.language&&(e.activeLanguage=n.language,document.documentElement.lang=n.language),n.theme&&(e.activeTheme=n.theme,document.body.setAttribute("data-theme",n.theme)),typeof e.project.properties.sizegrid=="number"?e.gridSize=e.project.properties.sizegrid:typeof n.gridSize=="number"&&(e.gridSize=n.gridSize),typeof n.isGridVisible=="boolean"&&(e.isGridVisible=n.isGridVisible),typeof n.isSnapEnabled=="boolean"&&(e.isSnapEnabled=n.isSnapEnabled),typeof n.metersPerPixel=="number"&&(e.metersPerPixel=n.metersPerPixel),typeof n.metersPerGridCell=="number"&&(e.metersPerGridCell=n.metersPerGridCell),n.visibleLayers&&(e.visibleLayers={...e.visibleLayers,...n.visibleLayers}),n.showDimensions&&(e.showDimensions={...e.showDimensions,...n.showDimensions}),typeof n.showBeaconHeatmap=="boolean"&&(e.showBeaconHeatmap=n.showBeaconHeatmap),typeof n.showBeaconRangeRing=="boolean"&&(e.showBeaconRangeRing=n.showBeaconRangeRing);const r=ze();e.activeFloorId=r.includes(e.activeFloorId)?e.activeFloorId:r[0]||null,fe(),rt(),Ke(),q(),Z()}async function Si(t){try{const o=await lt(()=>import("./pdf-DcE_ssc1.js"),[]);o.GlobalWorkerOptions.workerSrc=`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${o.version}/pdf.worker.mjs`;const n=await t.arrayBuffer(),r=new Uint8Array(n),s=await(await o.getDocument(r).promise).getPage(1),l=s.getViewport({scale:2}),c=document.createElement("canvas");if(!c.getContext("2d"))throw new Error("Canvas-Kontext konnte nicht erstellt werden.");return c.height=l.height,c.width=l.width,await s.render({canvas:c,viewport:l}).promise,c.toDataURL("image/png")}catch(o){throw console.error("Fehler beim Konvertieren des PDFs:",o),new Error("Das PDF konnte nicht verarbeitet werden.")}}function ki(t,o){e.project.floorplanImages||(e.project.floorplanImages={}),e.project.floorplanImages[o]=t;const n=new Image;n.onload=()=>{e.cachedFloorPlanImages[o]=n,R(),fe(),Z()},n.src=t}async function Pi(t){return new Promise((o,n)=>{const r=new FileReader;r.onload=()=>o(r.result),r.onerror=()=>n(new Error("Fehler beim Lesen der Bilddatei.")),r.readAsDataURL(t)})}async function Bi(t){if(!e.activeFloorId){alert("Bitte zuerst eine Etage auswählen oder erstellen.");return}const o=e.activeFloorId,n=t.type;try{let r;if(qo(a(n==="application/pdf"?"pdf_convert":"image_load")),n.startsWith("image/"))r=await Pi(t);else if(n==="application/pdf")r=await Si(t);else{mt(),alert("Nicht unterstützter Dateityp. Bitte wählen Sie eine Bild- oder PDF-Datei.");return}ki(r,o),mt()}catch(r){mt();const i=r instanceof Error?r.message:"Ein unbekannter Fehler ist aufgetreten.";alert(`Der Grundriss konnte nicht geladen werden: ${i}`)}}const Ve="EG";function Ci(){return{type:"FeatureCollection",features:[],properties:{projectName:"Unbenanntes Projekt",sizegrid:40,elementTypeStyles:{},settings:{language:"en",theme:"light",gridSize:40,isGridVisible:!0,isSnapEnabled:!0,metersPerPixel:.025,metersPerGridCell:1,visibleLayers:{area:!0,path:!0,point:!0,connector:!0},showDimensions:{area:!1,path:!1,circle:!1,angles:!1},showBeaconHeatmap:!1,showBeaconRangeRing:!1}},floorplanImages:{[Ve]:null}}}const e={project:Ci(),worldSize:{width:8e3,height:6e3},pan:{x:0,y:0},scale:1,threeDPan:{x:50,y:50},threeDScale:.8,threeDIsDragging:!1,threeDStartPos:{x:0,y:0},activeFloorId:Ve,activeLanguage:"en",activeTheme:"light",currentMode:"select",tempShape:null,mousePos:{x:0,y:0},mousePosScreen:{x:0,y:0},gridSize:40,isGridVisible:!0,isSnapEnabled:!0,metersPerPixel:.025,metersPerGridCell:1,selectedFeatureIds:[],cachedFloorPlanImages:{},clipboard:null,isShiftPressed:!1,isCtrlPressed:!1,isAltPressed:!1,styleOverrides:null,isMovingElement:!1,dragStartPos:{x:0,y:0},originalGeometriesOnMove:new Map,isEditingPath:!1,editedFeatureId:null,editedNodeIndex:-1,hoveredFeatureId:null,hoveredEdgeIndex:-1,anglePickFeatureId:null,anglePickFirstEdgeIndex:-1,parallelPickFeatureId:null,parallelPickFirstEdgeIndex:-1,panStart:{x:0,y:0},isPanning:!1,visibleLayers:{area:!0,path:!0,point:!0,connector:!0,floorplan:!0},showDimensions:{area:!1,path:!1,circle:!1,angles:!1},showBeaconHeatmap:!1,showBeaconRangeRing:!1,measureLabels:[],currentServerProjectId:null,currentServerVersion:void 0};function os(){e.project.floorplanImages||(e.project.floorplanImages={});const t=Object.keys(e.project.floorplanImages);t.length===0&&(e.project.floorplanImages[Ve]=null),e.activeFloorId||(e.activeFloorId=t.length>0?t[0]:Ve)}const nt=[];let Ae=-1;function R(){Ae<nt.length-1&&nt.splice(Ae+1),nt.push(JSON.parse(JSON.stringify(e.project))),Ae++;try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}}function pr(){Ae>0&&(Ae--,tt(JSON.parse(JSON.stringify(nt[Ae]))))}function ur(){Ae<nt.length-1&&(Ae++,tt(JSON.parse(JSON.stringify(nt[Ae]))))}function Vo(){nt.length=0,Ae=-1}function Li(){rs(!1),document.getElementById("mode-area")?.click(),rt()}function rs(t=!0,o){if(t&&!confirm(a("alert_newProjectConfirm")))return;e.project.type="FeatureCollection",e.project.features=[],e.project.properties={projectName:a("unnamedProject"),elementTypeStyles:{}};const n=o&&o.trim()!==""?o.trim():Ve;e.project.floorplanImages={[n]:null};const r=document.getElementById("projectName");r&&(r.value=e.project.properties.projectName),e.cachedFloorPlanImages={},e.selectedFeatureIds=[],Vo(),e.activeFloorId=n,os(),R(),fe(),Ke(),q(),rt(),Z()}function mr(t,o=!0){if(!t||t.trim()===""){alert("Der Etagenname darf nicht leer sein.");return}const n=t.trim();if(ze().includes(n)){alert(a("alert_floorNameExists"));return}e.activeFloorId=n,e.selectedFeatureIds=[],e.project.floorplanImages||(e.project.floorplanImages={}),e.project.floorplanImages[e.activeFloorId]=null,o&&R(),fe(),Ke(),q(),Z()}function gr(t){const o=e.activeFloorId;if(!o){alert(a("alert_noActiveFloor"));return}const n=t.trim();if(!n||n===o)return;if(ze().filter(i=>i!==o).includes(n)){alert(a("alert_floorNameExists"));return}e.project.features.forEach(i=>{i.properties.floor===o&&(i.properties.floor=n)}),e.project.floorplanImages&&Object.prototype.hasOwnProperty.call(e.project.floorplanImages,o)&&(e.project.floorplanImages[n]=e.project.floorplanImages[o],delete e.project.floorplanImages[o]),Object.prototype.hasOwnProperty.call(e.cachedFloorPlanImages,o)&&(e.cachedFloorPlanImages[n]=e.cachedFloorPlanImages[o],delete e.cachedFloorPlanImages[o]),e.activeFloorId=n,R(),fe(),Ke(),q(),Z()}function Ge(t,o){e.project.features.push({type:"Feature",geometry:t,properties:o}),R(),Ke(),q(),Z()}async function zn(){if(e.selectedFeatureIds.length===0)return;const t=e.selectedFeatureIds.length>1?a("confirm_deleteElement_multi",void 0,e.selectedFeatureIds.length):a("confirm_deleteElement_single");if(await Fe(t)){e.project.features=e.project.features.filter(r=>!e.selectedFeatureIds.includes(r.properties.id)),e.selectedFeatureIds=[];const n=document.getElementById("deleteBtn");n&&(n.disabled=!0),R(),Ke(),q(),Z()}}function ss(t,o){const n=8/e.scale;for(let r=0;r<o.coordinates.length-1;r++){const i={x:o.coordinates[r][0],y:o.coordinates[r][1]},s={x:o.coordinates[r+1][0],y:o.coordinates[r+1][1]},l=s.x-i.x,c=s.y-i.y;if(l===0&&c===0)continue;const d=((t.x-i.x)*l+(t.y-i.y)*c)/(l*l+c*c),m=d<0?i:d>1?s:{x:i.x+d*l,y:i.y+d*c};if(Math.sqrt((t.x-m.x)**2+(t.y-m.y)**2)<n)return!0}return!1}function Ee(t){const o=e.project.features.filter(n=>n.properties.floor===e.activeFloorId&&!n.properties.isPlaceholder);for(const n of[...o].reverse()){if(n.geometry.type==="Polygon"&&Be(t,n.geometry))return n;if(n.geometry.type==="Point"||n.properties.type==="connector"){const[r,i]=n.geometry.coordinates;if(Math.sqrt((t.x-r)**2+(t.y-i)**2)*e.scale<15)return n}if(n.geometry.type==="LineString"&&ss(t,n.geometry))return n}return null}function Ut(t){if(!e.activeFloorId){alert(a("alert_noActiveFloor"));return}const o=document.getElementById("element-type-select");let n=o?.value||"";const r=Se();let i=r[n];if(!i){const b=t.type==="Polygon"?"area":t.type==="Point"?"point":null;if(b){const y=Object.keys(r).find(f=>r[f].baseType===b);y&&(n=y,i=r[y],o&&o.querySelector(`option[value="${y}"]`)&&(o.value=y))}if(!i)return}const s=i.baseType,l=i.label,c=e.project.features.filter(b=>b.properties.subType===n).length+1,d=`${l} ${c}`,m={id:`feat_${Date.now()}`,floor:e.activeFloorId,type:s==="area"?"area":"point",subType:n,label:d};if(s==="point"&&["treppe","aufzug"].includes(n)?m.type="connector":t.type==="LineString"&&(m.type="path"),Ge(t,m),m.type==="connector"){const b=ze(),y=e.activeFloorId,f=b.find(I=>I!==y)||null;if(f){const I=`Soll ich das Gegenstück in ${f} automatisch erstellen?`;Fe(I).then(h=>{if(h&&t.type==="Point"){const E=t.coordinates.slice(),w={id:`feat_${Date.now()}_link`,floor:f,type:"connector",subType:n,label:d,linksTo:{floor:y,connectorId:m.id}};Ge({type:"Point",coordinates:E},w)}})}}}function Mi(t){if(!e.tempShape)e.tempShape={start:t};else{const{start:o}=e.tempShape,n=Math.min(o.x,t.x),r=Math.min(o.y,t.y),i=Math.abs(t.x-o.x),s=Math.abs(t.y-o.y);if(i<e.gridSize/2||s<e.gridSize/2){e.tempShape=null;return}const l=[[[n,r],[n+i,r],[n+i,r+s],[n,r+s],[n,r]]];Ut({type:"Polygon",coordinates:l}),e.tempShape=null}}function Ti(t){if(!e.tempShape)e.tempShape={start:t};else{const o=e.tempShape.start,n=Math.abs(t.x-o.x),r=Math.abs(t.y-o.y),i=Math.max(n,r),s=Math.min(o.x,t.x),l=Math.min(o.y,t.y);if(i<e.gridSize/2){e.tempShape=null;return}const c=[[[s,l],[s+i,l],[s+i,l+i],[s,l+i],[s,l]]];Ut({type:"Polygon",coordinates:c}),e.tempShape=null}}function Fi(t){if(!e.tempShape)e.tempShape={start:t};else{const o=e.tempShape.start,n=Math.sqrt((t.x-o.x)**2+(t.y-o.y)**2);if(n<2){e.tempShape=null;return}const r=64,i=Array.from({length:r},(s,l)=>{const c=l/r*2*Math.PI;return[o.x+n*Math.cos(c),o.y+n*Math.sin(c)]});i.push(i[0]),Ut({type:"Polygon",coordinates:[i]}),e.tempShape=null}}function ji(t){if(!e.tempShape)e.tempShape={start:t};else{const o=[[e.tempShape.start.x,e.tempShape.start.y],[t.x,t.y]],n={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"line",label:a("lineLabel")};Ge({type:"LineString",coordinates:o},n),e.currentMode="select",document.getElementById("mode-select")?.classList.add("active"),document.getElementById("mode-line")?.classList.remove("active"),e.tempShape=null}}function Di(t){e.tempShape?e.tempShape.nodes.push(t):e.tempShape={nodes:[t]}}function Ai(t){Ut({type:"Point",coordinates:[t.x,t.y]})}function _i(t){if(!e.tempShape)e.tempShape={start:t};else if(!e.tempShape.end)e.tempShape.end=t;else{const o=e.tempShape.start,n=e.tempShape.end,i=Ho(o,n,t),s=Kt(o,n,i),l={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"arc",label:a("arcLabel"),controlPoints:{p0:o,p1:i,p2:n}};Ge({type:"LineString",coordinates:s},l),e.tempShape=null}}function zi(){if(!e.activeFloorId||!e.tempShape?.nodes||e.tempShape.nodes.length<3){e.tempShape=null;return}const t=[...e.tempShape.nodes.map(o=>[o.x,o.y]),[e.tempShape.nodes[0].x,e.tempShape.nodes[0].y]];Ut({type:"Polygon",coordinates:[t]}),document.getElementById("mode-select")?.click(),e.tempShape=null}function Ni(t){let o=null;if(e.hoveredFeatureId){const f=e.project.features.find(I=>I.properties.id===e.hoveredFeatureId);f&&(f.geometry.type==="Polygon"||f.geometry.type==="LineString")&&(o=f)}if(!o){const f=Ee(t);f&&(f.geometry.type==="Polygon"||f.geometry.type==="LineString")&&(o=f)}if(!o){const f=e.selectedFeatureIds.find(I=>{const h=e.project.features.find(E=>E.properties.id===I);return h&&(h.geometry.type==="Polygon"||h.geometry.type==="LineString")})||null;f&&(o=e.project.features.find(I=>I.properties.id===f))}if(o||(o=e.project.features.find(f=>f.properties.floor===e.activeFloorId&&f.geometry.type==="Polygon")||e.project.features.find(f=>f.properties.floor===e.activeFloorId&&f.geometry.type==="LineString")),!o)return;let n=null,r=-1;if(o.geometry.type==="Polygon"){const f=o.geometry,I=wt(t,f);if(I.index===-1)return;n=ri(t,f,I.index),r=I.index}else{const f=o.geometry,I=Jr(t,f);if(I.index===-1)return;n=si(t,f,I.index),r=I.index}if(!e.tempShape){e.tempShape={start:n,edgeIndex:r};return}if(e.tempShape.edgeIndex!==r){e.tempShape={start:n,edgeIndex:r};return}const i=e.tempShape.start,s=n,l=[[i.x,i.y],[s.x,s.y]],c=s.x-i.x,d=s.y-i.y,m=Math.sqrt(c*c+d*d),b=Math.round(m*e.metersPerPixel*100)/100,y={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"door",label:a("doorLabel"),attachedTo:o.properties.id,door_length_m:b,door_edge_index:e.tempShape.edgeIndex};Ge({type:"LineString",coordinates:l},y),e.currentMode="select",document.getElementById("mode-select")?.classList.add("active"),document.getElementById("mode-door")?.classList.remove("active"),e.tempShape=null}function $i(t){const n=[...t.coordinates[0]];if(n.length<4)return!1;const r=n[0],i=n[n.length-1];(Math.abs(r[0]-i[0])>1e-4||Math.abs(r[1]-i[1])>1e-4)&&n.push([r[0],r[1]]);for(let s=0;s<n.length-1;s++){const l=n[s],c=n[s+1],d=Math.abs(l[1]-c[1])<1e-4,m=Math.abs(l[0]-c[0])<1e-4;if(!d&&!m)return!1}return!0}function Oi(t){const n=h=>Math.round(h/1e-4)*1e-4,r=new Map,i=new Map,s=(h,E,w)=>{const k=Math.min(E,w),F=Math.max(E,w),L=n(h);r.has(L)||r.set(L,[]),r.get(L).push({x1:n(k),x2:n(F)})},l=(h,E,w)=>{const k=Math.min(E,w),F=Math.max(E,w),L=n(h);i.has(L)||i.set(L,[]),i.get(L).push({y1:n(k),y2:n(F)})};for(const h of t){const E=h.coordinates[0];for(let w=0;w<E.length-1;w++){const k=E[w],F=E[w+1];Math.abs(k[1]-F[1])<1e-4?s(k[1],k[0],F[0]):l(k[0],k[1],F[1])}}const c=new Map,d=(h,E,w,k)=>{const F=`${n(h)},${n(E)}`,L=`${n(w)},${n(k)}`;return F<L?`${F}|${L}`:`${L}|${F}`};r.forEach((h,E)=>{const w=Array.from(new Set(h.flatMap(k=>[k.x1,k.x2]))).sort((k,F)=>k-F);for(const k of h)for(let F=0;F<w.length-1;F++){const L=w[F],A=w[F+1];if(L>=k.x1-1e-4&&A<=k.x2+1e-4){const z=d(L,E,A,E);c.set(z,(c.get(z)||0)+1)}}}),i.forEach((h,E)=>{const w=Array.from(new Set(h.flatMap(k=>[k.y1,k.y2]))).sort((k,F)=>k-F);for(const k of h)for(let F=0;F<w.length-1;F++){const L=w[F],A=w[F+1];if(L>=k.y1-1e-4&&A<=k.y2+1e-4){const z=d(E,L,E,A);c.set(z,(c.get(z)||0)+1)}}});const m=[];if(c.forEach((h,E)=>{if(h%2===1){const[w,k]=E.split("|"),[F,L]=w.split(",").map(Number),[A,z]=k.split(",").map(Number);m.push({x1:F,y1:L,x2:A,y2:z})}}),m.length===0)return[];const b=new Map;for(const h of m){const E=`${h.x1},${h.y1}`,w=`${h.x2},${h.y2}`;b.has(E)||b.set(E,[]),b.has(w)||b.set(w,[]),b.get(E).push({x:h.x2,y:h.y2}),b.get(w).push({x:h.x1,y:h.y1})}const y=new Set(m.map(h=>d(h.x1,h.y1,h.x2,h.y2))),f=[];for(;y.size>0;){const h=Array.from(y)[0].split("|")[0],[E,w]=h.split(",").map(Number),k={x:E,y:w},F=[k];let L=k,A=null;for(;;){const D=b.get(`${L.x},${L.y}`)||[];let T=null;for(const p of D){const v=d(L.x,L.y,p.x,p.y);if(y.has(v)&&(!A||p.x!==A.x||p.y!==A.y)){T=p;break}}if(!T||(y.delete(d(L.x,L.y,T.x,T.y)),A=L,L=T,F.push(L),L.x===k.x&&L.y===k.y))break}const z=F.map(D=>[D.x,D.y]);z.length>=4&&f.push(z)}if(f.length===0)return[];const I=h=>{let E=0;for(let w=0;w<h.length-1;w++){const[k,F]=h[w],[L,A]=h[w+1];E+=k*A-L*F}return Math.abs(E)/2};return f.sort((h,E)=>I(E)-I(h)),f[0]}function Hi(t){const o=[...t].sort((s,l)=>s.x===l.x?s.y-l.y:s.x-l.x),n=(s,l,c)=>(l.x-s.x)*(c.y-s.y)-(l.y-s.y)*(c.x-s.x),r=[];for(const s of o){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],s)<=0;)r.pop();r.push(s)}const i=[];for(let s=o.length-1;s>=0;s--){const l=o[s];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],l)<=0;)i.pop();i.push(l)}return i.pop(),r.pop(),r.concat(i)}let vt=null;function Ri(){const t=document.getElementById("file-menu-trigger"),o=document.getElementById("output-menu-trigger"),n=document.getElementById("overview-menu-trigger"),r=document.getElementById("backstage-panel"),i=document.getElementById("backstage-close-btn"),s=document.getElementById("backstage-title"),l=document.getElementById("backstage-file-content"),c=document.getElementById("backstage-output-content"),d=document.getElementById("backstage-overview-content");if(!t||!o||!n||!r){console.error("Menü-Elemente konnten nicht gefunden werden!");return}const m=y=>{l.style.display="none",c.style.display="none",d.style.display="none",y==="file"?(l.style.display="block",s.textContent=a("filePanelTitle")):y==="output"?(c.style.display="block",s.textContent=a("outputPanelTitle")):y==="overview"&&(d.style.display="block",s.textContent=a("overviewPanelTitle")),r.classList.add("visible"),document.body.classList.add("backstage-visible"),vt=y,t.classList.remove("active"),o.classList.remove("active"),n.classList.remove("active"),document.getElementById(`${y}-menu-trigger`)?.classList.add("active")},b=()=>{r.classList.remove("visible"),document.body.classList.remove("backstage-visible"),vt=null,t.classList.remove("active"),o.classList.remove("active"),n.classList.remove("active")};t.addEventListener("click",y=>{y.stopPropagation(),vt==="file"?b():m("file")}),o.addEventListener("click",y=>{y.stopPropagation(),vt==="output"?b():m("output")}),n.addEventListener("click",y=>{y.stopPropagation(),vt==="overview"?b():m("overview")}),i.addEventListener("click",b)}function je(){const t=document.getElementById("gridInfo");if(!t)return;const o=Math.round(e.gridSize),n=e.activeLanguage==="de"?"Kasten":"cell",r=e.metersPerPixel;if(r&&r>0){const i=Math.round(r*e.gridSize*100)/100,s=(e.activeLanguage==="de","m");t.textContent=`1 ${n} ≈ ${o} px · ${i} ${s}`}else t.textContent=`1 ${n} ≈ ${o} px`}function qi(t){const o=document.getElementById("toggleGridBtn"),n=document.getElementById("toggleSnapBtn"),r=document.getElementById("gridSizeInput"),i=document.getElementById("gridMinusBtn"),s=document.getElementById("gridPlusBtn"),l=document.getElementById("gridMetersInput"),c=document.getElementById("gridMetersMinusBtn"),d=document.getElementById("gridMetersPlusBtn"),m=document.getElementById("toggleAreaDimensions"),b=document.getElementById("togglePathLengths"),y=document.getElementById("toggleAreaAngles"),f=document.getElementById("toggleCircleRadius"),I=document.getElementById("toggleBeaconRing");o&&o.addEventListener("change",()=>{e.isGridVisible=o.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.isGridVisible=e.isGridVisible,h(),t()}),n&&n.addEventListener("change",()=>{e.isSnapEnabled=n.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.isSnapEnabled=e.isSnapEnabled,h(),q()}),r&&r.addEventListener("input",()=>{const E=parseInt(r.value,10);if(!isNaN(E)&&E>=5){e.gridSize=E,e.project.properties.sizegrid=e.gridSize;const w=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=w,l&&(l.value=String(w)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,h(),q(),je(),t()}}),i&&i.addEventListener("click",()=>{const E=Math.max(5,(e.gridSize||40)-5);e.gridSize=E,e.project.properties.sizegrid=e.gridSize,r&&(r.value=String(E));const w=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=w,l&&(l.value=String(w)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,h(),q(),je(),t()}),s&&s.addEventListener("click",()=>{const E=Math.min(400,(e.gridSize||40)+5);e.gridSize=E,e.project.properties.sizegrid=e.gridSize,r&&(r.value=String(E));const w=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=w,l&&(l.value=String(w)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,h(),q(),je(),t()}),l&&l.addEventListener("input",()=>{const E=parseFloat(l.value);!isNaN(E)&&E>=.1&&(e.metersPerGridCell=Math.round(E*100)/100,e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,h(),je())}),c&&c.addEventListener("click",()=>{const E=Math.max(.1,(e.metersPerGridCell||1)-.1),w=Math.round(E*100)/100;e.metersPerGridCell=w,l&&(l.value=String(w)),e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,h(),je()}),d&&d.addEventListener("click",()=>{const E=Math.min(100,(e.metersPerGridCell||1)+.1),w=Math.round(E*100)/100;e.metersPerGridCell=w,l&&(l.value=String(w)),e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,h(),je()}),document.querySelectorAll(".layer-toggle").forEach(E=>{E.addEventListener("change",w=>{const k=w.target,F=k.dataset.layer;F&&(e.visibleLayers[F]=k.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.visibleLayers={...e.project.properties.settings.visibleLayers,[F]:k.checked},h(),t())})}),m&&m.addEventListener("change",()=>{e.showDimensions.area=m.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,area:e.showDimensions.area},h(),t()}),y&&y.addEventListener("change",()=>{e.showDimensions.angles=y.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,angles:e.showDimensions.angles},h(),t()}),b&&b.addEventListener("change",()=>{e.showDimensions.path=b.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,path:e.showDimensions.path},h(),t()}),f&&f.addEventListener("change",()=>{e.showDimensions.circle=f.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,circle:e.showDimensions.circle},h(),t()}),I&&I.addEventListener("change",()=>{e.showBeaconRangeRing=I.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showBeaconRangeRing=e.showBeaconRangeRing,h(),t()}),je();function h(){try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}}}let Xe=null,nn=null,qn=null;function Vi(t){Xe=t.contextMenu,nn=t.ctxMenuTypeSubmenu,qn=t.ctxMenuAddOverlapPoint}function Gi(t,o){if(!nn)return;nn.innerHTML="";const n=Se(),r=t.geometry.type==="Polygon"||t.geometry.type==="Point"?n[t.properties.subType]?.baseType:null;if(r){for(const i in n)if(n[i].baseType===r){const s=document.createElement("li");s.textContent=n[i].label,s.dataset.typeKey=i,s.addEventListener("click",()=>{e.project.features.forEach(l=>{if(e.selectedFeatureIds.includes(l.properties.id)){const c=n[l.properties.subType];c&&c.baseType===r&&(l.properties.subType=i)}}),R(),Z(),o()}),nn.appendChild(s)}}}function Wi(t,o,n){Xe&&(qn&&(qn.style.display=n===2?"":"none"),Xe.style.display="block",Xe.style.left=`${t}px`,Xe.style.top=`${o}px`)}function is(){Xe&&(Xe.style.display="none")}function Ki(){const t=e.project.features.filter(o=>e.selectedFeatureIds.includes(o.properties.id));t.length!==0&&(e.clipboard=t.map(o=>JSON.parse(JSON.stringify(o))))}function Ui(t){if(!e.clipboard||e.clipboard.length===0)return;const o=e.gridSize||20,n=e.clipboard.map(r=>{const i=JSON.parse(JSON.stringify(r.geometry));if(i.type==="Point"){const c=i.coordinates;i.coordinates=[c[0]+o,c[1]+o]}else if(i.type==="LineString"){const c=i.coordinates;i.coordinates=c.map(([d,m])=>[d+o,m+o])}else if(i.type==="Polygon"){const c=i.coordinates;i.coordinates=c.map(d=>d.map(([m,b])=>[m+o,b+o]))}const s=`feat_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,l=`${r.properties.label}`;return{type:"Feature",geometry:i,properties:{...r.properties,id:s,label:l,floor:e.activeFloorId}}});e.project.features.push(...n),e.selectedFeatureIds=n.map(r=>r.properties.id),R(),Z(),t(),q()}let St=null,kt=null,Vn=null,Pt=null,Bt=null,on=null;function Yi(t){St=t.propertiesContent,kt=t.propertiesPlaceholder,Vn=t.propertiesLabelInput,Pt=t.propertiesTypeSelect,Bt=t.propertiesIsEmptyCheckbox,on=t.propertiesIsAccessibleCheckbox}function ue(){const t=document.getElementById("properties-panel");if(!St||!kt||!Vn||!Pt)return;if(e.selectedFeatureIds.length!==1){t&&(t.style.display="none"),St.style.display="none",kt.style.display="block";return}t&&(t.style.display="block"),St.style.display="block",kt.style.display="none";const o=e.selectedFeatureIds[0],n=e.project.features.find(P=>P.properties.id===o);if(!n){St.style.display="none",kt.style.display="block";return}Vn.value=n.properties.label,Pt.innerHTML="";const r=Se(),i=n.geometry.type==="Polygon"||n.geometry.type==="Point"?r[n.properties.subType]?.baseType:null;if(i){for(const P in r)if(r[P].baseType===i){const M=document.createElement("option");M.value=P,M.textContent=r[P].label,Pt.appendChild(M)}Pt.value=n.properties.subType}const s=n.properties.type==="area",l=document.getElementById("area-properties-footer");l&&(l.style.display=s?"flex":"none"),s&&Bt&&(Bt.checked=!!n.properties.isEmpty),s&&on&&(on.checked=!!n.properties.isAccessible,on.disabled=!!n.properties.isEmpty);const c=document.getElementById("beacon-fields"),d=document.getElementById("beacon-uuid-input"),m=document.getElementById("beacon-serial-input"),b=document.getElementById("beacon-major-input"),y=document.getElementById("beacon-minor-input"),f=document.getElementById("beacon-installation-input"),I=document.getElementById("beacon-range-input"),h=document.getElementById("beacon-note-de-input"),E=document.getElementById("beacon-note-en-input");if(c){const P=n.geometry.type==="Point"&&n.properties.subType==="beacon",M=document.querySelector("#properties-panel h2");if(M&&M.childNodes[0]){const j=P?"beacon_parameters":"properties";M.childNodes[0].textContent=a(j)+" "}if(c.style.display=P?"block":"none",P){const j=document.querySelector('label[for="beacon-serial-input"]'),N=document.querySelector('label[for="beacon-installation-input"]'),_=document.querySelector('label[for="beacon-range-input"]'),O=document.querySelector('label[for="beacon-note-de-input"]');j&&(j.textContent=a("beacon_serial_label"),j.title=a("beacon_serial_desc")),N&&(N.textContent=a("beacon_installation_label"),N.title=a("beacon_installation_desc")),_&&(_.textContent=a("beacon_range_label"),_.title=a("beacon_range_desc")),O&&(O.textContent=a("beacon_note_de_label"),O.title=a("beacon_note_de_desc")),d&&(d.value=n.properties.beacon_uuid||""),m&&(m.value=n.properties.beacon_serial||""),b&&(b.value=n.properties.beacon_major?.toString()||""),y&&(y.value=n.properties.beacon_minor?.toString()||""),f&&(f.value=n.properties.beacon_installation||""),I&&(I.value=n.properties.beacon_range!==void 0?String(n.properties.beacon_range):""),h&&(h.value=n.properties.beacon_note_de||""),E&&(E.value=n.properties.beacon_note_en||"")}}const w=document.getElementById("properties-description-input"),k=document.getElementById("properties-opening-hours-input"),F=document.getElementById("properties-room-number-input"),L=document.getElementById("properties-designation-select");if(w&&(w.value=n.properties.description||""),k){const P=n.properties.opening_hours;if(!P)k.value="";else if(typeof P=="string")k.value=P;else{const M=[],j=P.weekly||{},N=Object.keys(j).map(Y=>Number(Y)).sort((Y,Q)=>Y-Q),_=Y=>{switch(Y){case 1:return a("weekdayMon");case 2:return a("weekdayTue");case 3:return a("weekdayWed");case 4:return a("weekdayThu");case 5:return a("weekdayFri");case 6:return a("weekdaySat");case 0:return a("weekdaySun");default:return""}};N.forEach(Y=>{const Q=j[Y].map(g=>`${g.start}–${g.end}`).join(", ");M.push(`${_(Y)} ${Q}`)});const O=P.exceptions,X=P.ranges;Array.isArray(O)&&O.length>0&&M.push(`${a("openingHoursExceptions")}: ${O.length}`),Array.isArray(X)&&X.length>0&&M.push(`${a("openingHoursRanges")}: ${X.length}`),k.value=M.join(" · ")}}F&&(F.value=n.properties.room_number||""),L&&(L.value=n.properties.designation||L.value);const A=document.querySelector('label[for="properties-description-input"]'),z=document.querySelector('label[for="properties-opening-hours-input"]'),D=document.querySelector('label[for="properties-room-number-input"]'),T=document.querySelector('label[for="properties-designation-select"]'),p=n.geometry.type!=="Point"||n.properties.subType!=="beacon";w&&(w.style.display=p?"":"none"),k&&(k.style.display=p?"":"none"),F&&(F.style.display=p?"":"none"),L&&(L.style.display=p?"":"none"),A&&(A.style.display=p?"":"none"),z&&(z.style.display=p?"":"none"),D&&(D.style.display=p?"":"none"),T&&(T.style.display=p?"":"none");const v=document.getElementById("open-opening-hours-modal-btn"),B=document.getElementById("open-occupancy-modal-btn"),C=n.properties.type==="area"&&n.geometry.type==="Polygon";if(v&&(v.style.display=C?"":"none"),B&&(B.style.display=C?"":"none"),Bt){const P=Bt.parentElement;P&&(P.style.display=C?"":"none")}}function bn(){const t=document.getElementById("mode-merge");if(!t)return;const o=t.querySelector("span"),i=e.project.features.filter(l=>l.properties.floor===e.activeFloorId).filter(l=>e.selectedFeatureIds.includes(l.properties.id)&&(l.geometry.type==="Polygon"||l.geometry.type==="LineString"&&l.properties.subType==="arc")).length,s=a("merge");o&&(o.textContent=i>0?`${s} (${i})`:s),i>=2?t.classList.add("merge-ready"):t.classList.remove("merge-ready")}let me=null,gt=null,yt=null,ht=null,ft=null,Gn={x:0,y:0},Wn={x:0,y:0},Go=!1,Wo=!1;function Zi(t){me=t.canvas,gt=t.scrollbarX,yt=t.scrollbarY,ht=t.thumbX,ft=t.thumbY}function zt(t){return{x:(t.x-e.pan.x)/e.scale,y:(t.y-e.pan.y)/e.scale}}function bt(){const{scale:t,worldSize:o}=e;if(!me||!me.parentElement)return;const n=me.parentElement.clientWidth,r=me.parentElement.clientHeight,i=o.width*t,s=o.height*t;if(i<n)e.pan.x=(n-i)/2;else{const c=n-i;e.pan.x=Math.min(e.pan.x,0),e.pan.x=Math.max(e.pan.x,c)}if(s<r)e.pan.y=(r-s)/2;else{const c=r-s;e.pan.y=Math.min(e.pan.y,0),e.pan.y=Math.max(e.pan.y,c)}}function vn(){const{scale:t,pan:o,worldSize:n}=e;if(!me||!me.parentElement||!gt||!yt||!ht||!ft)return;const{clientWidth:r,clientHeight:i}=me.parentElement,s=n.width*t,l=s>r&&r>0;if(gt.style.display=l?"block":"none",l){const m=gt.clientWidth,b=r/s*m,y=Math.max(b,20),f=Math.max(s-r,0),I=10,h=Math.max(m-y-2*I,0),E=f>0?-o.x/f*h:0;ht.style.width=`${y}px`;const w=1,k=Math.abs(o.x-(r-s))<=w,F=Math.abs(o.x-0)<=w&&s>=r,L=k?I+h:F?I:I+Math.max(0,Math.min(E,h));ht.style.left=`${L}px`}const c=n.height*t,d=c>i&&i>0;if(yt.style.display=d?"block":"none",d){const m=yt.clientHeight,b=i/c*m,y=Math.max(b,20),f=Math.max(c-i,0),I=10,h=Math.max(m-y-2*I,0),E=f>0?-o.y/f*h:0;ft.style.height=`${y}px`;const w=1,k=Math.abs(o.y-(i-c))<=w,F=Math.abs(o.y-0)<=w&&c>=i,L=k?I+h:F?I:I+Math.max(0,Math.min(E,h));ft.style.top=`${L}px`}}function Ji(t){t.preventDefault(),e.isPanning=!0,e.panStart={x:t.clientX,y:t.clientY},me&&(me.style.cursor="grabbing")}function Xi(t){if(!e.isPanning)return;const o=t.clientX-e.panStart.x,n=t.clientY-e.panStart.y;e.pan.x+=o,e.pan.y+=n,e.panStart={x:t.clientX,y:t.clientY},bt(),Z(),vn()}function Qi(){!e.isPanning||!me||(e.isPanning=!1,e.currentMode==="pan"||e.currentMode==="move-element"?me.style.cursor="grab":e.currentMode==="select"?me.style.cursor="default":me.style.cursor="crosshair")}function yr(t){t.stopPropagation(),t.preventDefault(),Gn={x:t.clientX,y:t.clientY},Wn={...e.pan},t.target===ht&&(Go=!0),t.target===ft&&(Wo=!0),document.addEventListener("mousemove",ls),document.addEventListener("mouseup",el,{once:!0})}function ls(t){if(t.preventDefault(),!(!gt||!yt)){if(Go){const o=t.clientX-Gn.x,n=gt.clientWidth,r=me?.parentElement?.clientWidth||0,i=e.worldSize.width*e.scale,s=ht?.clientWidth||0,l=Math.max(i-r,0),d=Math.max(n-s-2*10,1);if(n>0&&l>0){const m=o/d*l;e.pan.x=Wn.x-m}bt(),Z(),vn()}if(Wo){const o=t.clientY-Gn.y,n=yt.clientHeight,r=me?.parentElement?.clientHeight||0,i=e.worldSize.height*e.scale,s=ft?.clientHeight||0,l=Math.max(i-r,0),d=Math.max(n-s-2*10,1);if(n>0&&l>0){const m=o/d*l;e.pan.y=Wn.y-m}bt(),Z(),vn()}}}function el(){Go=!1,Wo=!1,document.removeEventListener("mousemove",ls)}let Ne=null;function tl(t){Ne=t.canvas}function nl(t){if(e.selectedFeatureIds.length>0){e.isMovingElement=!0,e.dragStartPos=t,e.originalGeometriesOnMove.clear(),e.project.features.forEach(n=>{e.selectedFeatureIds.includes(n.properties.id)&&(e.originalGeometriesOnMove.set(n.properties.id,JSON.parse(JSON.stringify(n.geometry))),n.properties.controlPoints&&(n.properties.originalControlPoints=JSON.parse(JSON.stringify(n.properties.controlPoints))))});const o=new Set(e.selectedFeatureIds);e.project.features.forEach(n=>{const r=n.properties.attachedTo;r&&o.has(r)&&(e.originalGeometriesOnMove.has(n.properties.id)||(e.originalGeometriesOnMove.set(n.properties.id,JSON.parse(JSON.stringify(n.geometry))),n.properties.controlPoints&&(n.properties.originalControlPoints=JSON.parse(JSON.stringify(n.properties.controlPoints)))))}),Ne&&(Ne.style.cursor="move")}}function ol(t){if(!e.isMovingElement||e.selectedFeatureIds.length===0)return;const o=t.x-e.dragStartPos.x,n=t.y-e.dragStartPos.y,r=(i,s,l)=>{if(Array.isArray(i)&&typeof i[0]=="number"&&i.length===2){i[0]+=s,i[1]+=l;return}i.forEach(c=>{Array.isArray(c[0])?r(c,s,l):(c[0]+=s,c[1]+=l)})};e.project.features.forEach(i=>{const s=e.originalGeometriesOnMove.get(i.properties.id);if(s){const c=JSON.parse(JSON.stringify(s));"coordinates"in c&&(r(c.coordinates,o,n),i.geometry=c)}const l=i.properties.originalControlPoints;l&&(i.properties.controlPoints={p0:{x:l.p0.x+o,y:l.p0.y+n},p1:{x:l.p1.x+o,y:l.p1.y+n},p2:{x:l.p2.x+o,y:l.p2.y+n}})}),Z()}function rl(){e.isMovingElement&&(e.isMovingElement=!1,e.originalGeometriesOnMove.clear(),e.project.features.forEach(t=>delete t.properties.originalControlPoints),Ne&&(Ne.style.cursor="default"),R())}function sl(t){if(e.selectedFeatureIds.length!==1)return!1;const o=e.project.features.find(i=>i.properties.id===e.selectedFeatureIds[0]);if(!o||o.geometry.type!=="LineString"&&o.geometry.type!=="Polygon")return!1;const n=8/e.scale;let r=[];if(o.geometry.type==="LineString"&&o.properties.subType==="arc"&&o.properties.controlPoints){const{p0:i,p1:s,p2:l}=o.properties.controlPoints;r=[i,s,l]}else{const i=o.geometry.type==="LineString"?o.geometry.coordinates:o.geometry.coordinates[0];r=(o.geometry.type==="Polygon"?i.slice(0,-1):i).map(l=>({x:l[0],y:l[1]}))}for(let i=0;i<r.length;i++)if(Math.sqrt((t.x-r[i].x)**2+(t.y-r[i].y)**2)<n)return e.isEditingPath=!0,e.editedFeatureId=o.properties.id,e.editedNodeIndex=i,Ne&&(Ne.style.cursor="grabbing"),!0;return!1}function il(t){if(!e.isEditingPath||!e.editedFeatureId)return;const o=e.project.features.find(r=>r.properties.id===e.editedFeatureId);if(!o)return;const n=ct(Ce(t));if(o.geometry.type==="LineString"&&o.properties.subType==="arc"&&o.properties.controlPoints){const r=o.properties.controlPoints;e.editedNodeIndex===0?r.p0=n:e.editedNodeIndex===1?r.p1=n:e.editedNodeIndex===2&&(r.p2=n),o.geometry.coordinates=Kt(r.p0,r.p2,r.p1)}else if(o.geometry.type==="LineString")o.geometry.coordinates[e.editedNodeIndex]=[n.x,n.y];else if(o.geometry.type==="Polygon"){const r=o.geometry.coordinates[0];r[e.editedNodeIndex]=[n.x,n.y],e.editedNodeIndex===0&&(r[r.length-1]=[n.x,n.y])}Z()}function ll(){!e.isEditingPath||!Ne||(e.isEditingPath=!1,Ne.style.cursor="default",R())}function al(t,o){const n=parseInt(t.slice(1,3),16),r=parseInt(t.slice(3,5),16),i=parseInt(t.slice(5,7),16);return`rgba(${n}, ${r}, ${i}, ${o})`}let Fn=null,Ze=null,Ko=null,Uo=null,Re=null,Kn=null,Yo=null,as=null,Zo=null,Jo=null,cs=null,Un=null,rn=null,Xo=null,Qo=null,ds=null,er=null,tr=null,Yn=null,Zn=null,Jn=null,sn=null,Xn=null,Ct=null,Lt=null,Qn=null,Mt=null,Tt=null,ln=null,de=null;function cl(t){Fn=t.typeManagerModal,Ze=t.typeManagerList,Ko=t.typeManagerDetailsContent,Uo=t.typeManagerPlaceholder,Re=t.typeNameInput,Kn=t.typeEditorArea,Yo=t.typeFillColorInput,as=t.typeFillColorSwatch,Zo=t.typeFillOpacitySlider,Jo=t.typeStrokeColorInput,cs=t.typeStrokeColorSwatch,Un=t.typeEditorPoint,rn=t.typeIconLibrary,Xo=t.typeIconColorInput,Qo=t.typeManagerDeleteBtn,ds=t.newTypeChoiceModal,er=t.typeFontColorInput,tr=t.typeFontSizeInput,Yn=t.typeTextStyleHeader,Zn=t.typeAreaStyleHeader,Jn=t.typePointStyleHeader,sn=t.typePreviewContainer,Xn=t.typePreviewHeader,Ct=t.typePreviewArea,Lt=t.typePreviewAreaRect,Qn=t.typePreviewAreaLabel,Mt=t.typePreviewPoint,Tt=t.typePreviewPointIcon,ln=t.typePreviewPointLabel}function dl(){e.styleOverrides=JSON.parse(JSON.stringify(Se())),Yt(),ml(),gs(),Fn.classList.remove("hidden")}function hr(){Fn.classList.add("hidden"),de=null,e.styleOverrides=null,jn(void 0),Z()}function pl(){if(!e.styleOverrides)return;e.project.properties.elementTypeStyles||(e.project.properties.elementTypeStyles={});const t=e.project.properties.elementTypeStyles;Object.keys(e.styleOverrides).forEach(o=>{const n=e.styleOverrides[o];n.isDefault?delete t[o]:t[o]={label:n.label,baseType:n.baseType,fill:n.fill,stroke:n.stroke,icon:n.icon,iconColor:n.iconColor,fontSize:n.fontSize,fontColor:n.fontColor}}),Object.keys(t).forEach(o=>{e.styleOverrides[o]||delete t[o]}),R(),rt(),q(),e.styleOverrides=null,Z(),Fn.classList.add("hidden")}function Yt(){if(!e.styleOverrides||!Ze)return;Ze.innerHTML="";const t={},o={};for(const i in e.styleOverrides){const s=e.styleOverrides[i];s.baseType==="area"?t[i]=s:o[i]=s}const n=i=>{const s=document.createElement("li");return s.textContent=i,s.style.cssText="font-weight: bold; padding: 12px 8px 4px; color: var(--color-primary); background-color: var(--color-secondary); border-bottom: 1px solid var(--color-border);",s},r=(i,s)=>{const l=document.createElement("li");if(l.style.cssText="cursor: pointer; padding: 8px; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; gap: 8px;",s.baseType==="area"){const m=document.createElement("div");m.style.cssText=`width: 16px; height: 16px; border-radius: 4px; background-color: ${s.fill||"transparent"}; border: 1px solid ${s.stroke||"black"}; flex-shrink: 0;`,l.appendChild(m)}else if(s.baseType==="point"&&s.icon){const m="http://www.w3.org/2000/svg",b=document.createElementNS(m,"svg");b.setAttribute("viewBox","0 0 24 24"),b.style.cssText=`width: 16px; height: 16px; fill: ${s.iconColor||"black"}; flex-shrink: 0;`;const y=document.createElementNS(m,"path");y.setAttribute("d",s.icon),b.appendChild(y),l.appendChild(b)}const c=document.createElement("span"),d=s.isDefault?"":" (Cust.)";if(c.textContent=s.label+d,l.appendChild(c),l.dataset.subType=i,i===de){l.style.backgroundColor="var(--color-accent)",l.style.color="white";const m=l.querySelector("svg");m&&(m.style.fill="white")}return l.addEventListener("click",()=>{de=i,Yt(),ps(i)}),l};Object.keys(t).length>0&&(Ze.appendChild(n(a("areasGroup"))),Object.keys(t).sort((s,l)=>t[s].label.localeCompare(t[l].label)).forEach(s=>Ze.appendChild(r(s,t[s])))),Object.keys(o).length>0&&(Ze.appendChild(n(a("pointsConnectorsGroup"))),Object.keys(o).sort((s,l)=>o[s].label.localeCompare(o[l].label)).forEach(s=>Ze.appendChild(r(s,o[s]))))}function ps(t){if(!e.styleOverrides)return;Uo.classList.add("hidden"),Ko.classList.remove("hidden");const o=e.styleOverrides[t];if(Re.value=o.label,tr.value=(o.fontSize||(o.baseType==="area"?14:12)).toString(),er.value=o.fontColor||(e.activeTheme==="dark"?"#e6e1ef":"#000000"),Yn&&(Yn.style.display="block"),Zn&&(Zn.style.display=o.baseType==="area"?"block":"none"),Jn&&(Jn.style.display=o.baseType==="point"?"block":"none"),o.baseType==="area"){Kn.style.display="block",Un.style.display="none";const{hex:n,alpha:r}=yl(o.fill||"rgba(0,0,0,0.5)");Yo.value=n,Zo.value=r.toString(),Jo.value=o.stroke||"#000000"}else Kn.style.display="none",Un.style.display="block",Xo.value=o.iconColor||"#34495e",document.querySelectorAll("#type-icon-library div").forEach(n=>{const r=n.querySelector("svg");r&&r.dataset.iconPath===o.icon?n.classList.add("active"):n.classList.remove("active")});ms(),jn(o),Re.disabled=!!o.isDefault,Qo.style.display=o.isDefault?"none":"block"}function us(){if(!de||!e.styleOverrides)return;const t=e.styleOverrides[de];if(t.isDefault&&(t.isDefault=!1,Re.disabled=!1,Qo.style.display="block"),Re.value=Re.value.trim(),!!Re.value){t.label=Re.value,t.fontSize=parseInt(tr.value)||(t.baseType==="area"?14:12),t.fontColor=er.value,t.baseType==="area"?(t.fill=al(Yo.value,parseFloat(Zo.value)),t.stroke=Jo.value):t.iconColor=Xo.value,ms(),jn(t);try{Yt()}catch{}Z()}}async function fr(t){if(!e.styleOverrides)return;ds.classList.add("hidden");const o=a("prompt_newFloorName"),n=a(t==="area"?"newAreaType":"newPointType"),r=await ys(o,n);if(!r||r.trim()==="")return;const i=`custom_${r.trim().toLowerCase().replace(/[^a-z0-9]/gi,"_")}_${Date.now()}`,s=e.activeTheme==="dark";t==="area"?e.styleOverrides[i]={label:r.trim(),baseType:"area",fill:"rgba(128, 128, 128, 0.5)",stroke:"#808080",fontSize:14,fontColor:s?"#e6e1ef":"#000000",isDefault:!1}:e.styleOverrides[i]={label:r.trim(),baseType:"point",icon:Nn.info,iconColor:"#34495e",fontSize:12,fontColor:s?"#e6e1ef":"#000000",isDefault:!1},de=i,Yt(),ps(i)}async function ul(){!de||!e.styleOverrides||e.styleOverrides[de].isDefault||!await hs(a("alert_deleteTypeConfirm",e.activeLanguage,e.styleOverrides[de].label))||!de||!e.styleOverrides||(delete e.styleOverrides[de],gs(),Yt(),Z())}function ml(){if(rn){rn.innerHTML="";for(const t in Nn){const o=Nn[t],n=document.createElement("div");n.style.cssText="padding: 4px; border: 1px solid transparent; border-radius: 4px; cursor: pointer;";const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("viewBox","0 0 24 24"),r.style.width="32px",r.style.height="32px",r.style.fill="currentColor";const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d",o),r.appendChild(i),r.dataset.iconPath=o,n.appendChild(r),n.addEventListener("click",()=>{!de||!e.styleOverrides||(e.styleOverrides[de].icon=o,document.querySelectorAll("#type-icon-library > div").forEach(s=>s.classList.remove("active")),n.classList.add("active"),us())}),rn.appendChild(n)}}}function ms(){if(!de||!e.styleOverrides)return;const t=e.styleOverrides[de];t.baseType==="area"&&(as.style.backgroundColor=t.fill||"transparent",cs.style.backgroundColor=t.stroke||"transparent")}function gl(){return e.activeTheme==="dark"?"#e6e1ef":"#1f2933"}function jn(t){if(!sn||!Ct||!Mt)return;if(!t){sn.classList.add("hidden"),Ct.style.display="none",Mt.style.display="none";return}sn.classList.remove("hidden"),Xn&&(Xn.textContent=a("typePreview"));const o=t.fontColor||gl(),n=t.baseType==="area"?a("previewAreaLabel"):a("previewPointLabel");if(t.baseType==="area"){if(Ct.style.display="block",Mt.style.display="none",Lt){const r=t.fill||_e.default.fill,i=t.stroke||_e.default.stroke;Lt.style.background=r,Lt.style.borderColor=i,Lt.style.color=o}Qn&&(Qn.textContent=t.label||n)}else{Ct.style.display="none",Mt.style.display="flex";const r=t.icon||fn.default,i=t.iconColor||"#34495e";if(Tt){Tt.innerHTML=`<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="${r}"></path></svg>`;const s=Tt.querySelector("svg"),l=Tt.querySelector("path");s&&(s.style.width="36px",s.style.height="36px"),l&&(de==="beacon"?(l.setAttribute("fill","none"),l.setAttribute("stroke",i),l.setAttribute("stroke-width","2"),l.setAttribute("stroke-linecap","round"),l.setAttribute("stroke-linejoin","round")):l.setAttribute("fill",i))}ln&&(ln.textContent=t.label||n,ln.style.color=o)}}function gs(){Uo.classList.remove("hidden"),Ko.classList.add("hidden"),de=null,jn(void 0)}function yl(t){const o=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(!o)return{hex:"#000000",alpha:1};const n=s=>("0"+s.toString(16)).slice(-2),r=`#${n(parseInt(o[1]))}${n(parseInt(o[2]))}${n(parseInt(o[3]))}`,i=o[4]!==void 0?parseFloat(o[4]):1;return{hex:r,alpha:i}}let ys=async()=>null,hs=async()=>!1;function hl(t){ys=t.showInputPrompt,hs=t.showConfirm}function fl(t){if(t.length<1)return t;const o=t[0],n=t[t.length-1];return(o[0]!==n[0]||o[1]!==n[1])&&t.push([o[0],o[1]]),t}function bl(t,o){const n=t.slice(0,-1),r=o.slice(0,-1),i=r.map((c,d)=>({a:{x:c[0],y:c[1]},b:{x:r[(d+1)%r.length][0],y:r[(d+1)%r.length][1]}})),s=[];for(let c=0;c<n.length;c++){const d={x:n[c][0],y:n[c][1]},m={x:n[(c+1)%n.length][0],y:n[(c+1)%n.length][1]},b=[];i.forEach(f=>{const I=Ro(d,m,f.a,f.b);if(I){const h=m.x-d.x,E=m.y-d.y,w=h*h+E*E,k=w===0?0:((I.x-d.x)*h+(I.y-d.y)*E)/w;k>=0&&k<=1&&b.push({t:k,p:I})}}),b.sort((f,I)=>f.t-I.t);const y=[{x:d.x,y:d.y},...b.map(f=>f.p),{x:m.x,y:m.y}];for(let f=0;f<y.length-1;f++){const I=y[f],h=y[f+1],E={x:(I.x+h.x)/2,y:(I.y+h.y)/2};Be(E,{coordinates:[o]})||(s.length===0&&s.push([I.x,I.y]),s.push([h.x,h.y]))}}const l=[];for(let c=0;c<s.length;c++){const d=l[l.length-1],m=s[c];(!d||d[0]!==m[0]||d[1]!==m[1])&&l.push(m)}return l}function fs(t,o){const n=t.slice(0,-1),r=o.slice(0,-1),i=[];for(let f=0;f<n.length;f++){const I={x:n[f][0],y:n[f][1]},h={x:n[(f+1)%n.length][0],y:n[(f+1)%n.length][1]};for(let E=0;E<r.length;E++){const w={x:r[E][0],y:r[E][1]},k={x:r[(E+1)%r.length][0],y:r[(E+1)%r.length][1]},F=Ro(I,h,w,k);F&&i.push(F)}}const s={coordinates:[t]},l={coordinates:[o]};if(n.forEach(f=>{Be({x:f[0],y:f[1]},l)&&i.push({x:f[0],y:f[1]})}),r.forEach(f=>{Be({x:f[0],y:f[1]},s)&&i.push({x:f[0],y:f[1]})}),i.length===0)return null;const c=i.reduce((f,I)=>f+I.x,0)/i.length,d=i.reduce((f,I)=>f+I.y,0)/i.length,m={x:c,y:d};if(Be(m,s)&&Be(m,l))return[m.x,m.y];const y=i.find(f=>Be(f,s)&&Be(f,l));return y?[y.x,y.y]:null}function vl(t,o){const r=[t[0]];for(let s=0;s<t.length-1;s++){const l={x:t[s][0],y:t[s][1]},c={x:t[s+1][0],y:t[s+1][1]},d=c.x-l.x,m=c.y-l.y,b=Math.sqrt(d*d+m*m);if(b<1e-6)continue;const y=d/b,f=m/b,I=[];for(let w=0;w<o.length-1;w++){const k={x:o[w][0],y:o[w][1]},F={x:o[w+1][0],y:o[w+1][1]},L=F.x-k.x,A=F.y-k.y,z=d*A-m*L,D=(k.x-l.x)*m-(k.y-l.y)*d;if(Math.abs(z)<1e-6&&Math.abs(D)<1e-6){const T=(k.x-l.x)*y+(k.y-l.y)*f,p=(F.x-l.x)*y+(F.y-l.y)*f,v=Math.max(0,Math.min(T,p)),B=Math.min(b,Math.max(T,p));B-v>1e-6&&I.push({a:v,b:B})}}if(I.length===0){r.push([c.x,c.y]);continue}I.sort((w,k)=>w.a-k.a);const h=[];for(const w of I)h.length===0||w.a>h[h.length-1].b+1e-6?h.push({a:w.a,b:w.b}):h[h.length-1].b=Math.max(h[h.length-1].b,w.b);let E=0;for(const w of h){if(w.a-E>1e-6){const k=l.x+y*E,F=l.y+f*E,L=l.x+y*w.a,A=l.y+f*w.a;(r.length===0||r[r.length-1][0]!==k||r[r.length-1][1]!==F)&&r.push([k,F]),r.push([L,A])}E=Math.max(E,w.b)}if(b-E>1e-6){const w=l.x+y*E,k=l.y+f*E,F=c.x,L=c.y;(r.length===0||r[r.length-1][0]!==w||r[r.length-1][1]!==k)&&r.push([w,k]),r.push([F,L])}}const i=[];for(let s=0;s<r.length;s++){const l=i[i.length-1],c=r[s];(!l||l[0]!==c[0]||l[1]!==c[1])&&i.push(c)}return i}function bs(t,o){for(let r=0;r<t.length-1;r++){const i={x:t[r][0],y:t[r][1]},s={x:t[r+1][0],y:t[r+1][1]};for(let l=0;l<o.length-1;l++){const c={x:o[l][0],y:o[l][1]},d={x:o[l+1][0],y:o[l+1][1]},m=Ro(i,s,c,d);if(m)return[m.x,m.y];const b=s.x-i.x,y=s.y-i.y,f=d.x-c.x,I=d.y-c.y,h=b*I-y*f,E=(c.x-i.x)*y-(c.y-i.y)*b;if(Math.abs(h)<1e-6&&Math.abs(E)<1e-6){const w=Math.sqrt(b*b+y*y);if(w<1e-6)continue;const k=b/w,F=y/w,L=(c.x-i.x)*k+(c.y-i.y)*F,A=(d.x-i.x)*k+(d.y-i.y)*F,z=Math.max(0,Math.min(L,A)),D=Math.min(w,Math.max(L,A));if(D-z>1e-6){const T=(z+D)/2,p=i.x+k*T,v=i.y+F*T;return[p,v]}}}}return null}let Nt=null,Te=null,pe,br,vr,eo,to,vs,xs,no,oo,Qe,ro,qe,Es,ws,ke,Is,Ss,xr,Er,xn,En,wn,so,In,io,lo,wr,ao,ks,Ps,Ir,co,po,uo,Sn,mo=null,go=null,yo=null,ho=null,Sr,kr,Pr,Br,Cr,be,We,Rt,qt,Lr,Mr,Tr,Ft=null,$t=null,it=null,fo=null,bo=null,vo=null,jt=null,Ot=null,Dt=null,At=null,an=null,cn=null,dn=null,pn=null,un=null,mn=null,xo=null,Eo=null,wo=null,Bs=null,Vt=null,_t=null,Cs=null,gn=null,yn=null,hn=null,Io=null,Ls=null,Ms=null,So=null,Ts=null,Fs=null,js=null,ko=null,Ds=null,As=null,_s=null,zs=null,Po=null,Bo=null,Co=null,Lo,Ns,Fr,jr,Dr,Mo,Ar,To,_r,Fo,jo,zr,Nr,$r,Do,$s,Ao,Os,Hs,kn,Rs,qs,Vs,_o,De,nr,or,Gt,Wt,zo,No,Pn,Bn,Cn,Or,Ln,Hr,Rr,Mn,qr,Vr,Tn,rr;function xl(t,o){let n;return function(){clearTimeout(n),n=window.setTimeout(t,o)}}const xt=xl(Z,50);function sr(){const t=`mode-${e.currentMode}`,o=document.getElementById(t);e.tempShape&&e.currentMode!=="select"&&e.currentMode!=="pan"&&e.currentMode!=="move-element"?(document.querySelectorAll(".tool-btn").forEach(n=>n.classList.remove("has-temp-shape")),o&&o.classList.add("has-temp-shape")):document.querySelectorAll(".tool-btn").forEach(n=>n.classList.remove("has-temp-shape"))}function H(){Z(),vn(),sr(),je(),Ll();const t=document.getElementById("floor3DView"),o=document.getElementById("floor3DContent");t&&t.style.display==="flex"&&o&&Nt&&Nt.render3DFloorStack(e.project,"floor3DContent")}function El(t){t.preventDefault();const o=.1,n=e.scale,r={x:t.offsetX,y:t.offsetY},i=zt(r),s=t.deltaY<0?n*(1+o):n/(1+o);e.scale=Math.max(.1,Math.min(s,10)),e.pan.x=r.x-i.x*e.scale,e.pan.y=r.y-i.y*e.scale,bt(),H()}function wl(t){if(e.currentMode==="scissors"){const r=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.properties.type==="area"&&!c.properties.isPlaceholder&&c.geometry.type==="Polygon"&&Be(t,c.geometry)),i=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.geometry.type==="LineString"&&ss(t,c.geometry));let s,l;if(e.selectedFeatureIds.length===1){const c=e.project.features.find(d=>d.properties.id===e.selectedFeatureIds[0]);c?.geometry.type==="Polygon"?(s=c,l=r.find(d=>d.properties.id!==s?.properties.id)):c?.geometry.type==="LineString"&&(s=c,l=i.find(d=>d.properties.id!==s?.properties.id))}else{s=r[0]||i[0];const c=s&&s.geometry.type==="Polygon"?r:i;l=c&&c.length>1?c[1]:void 0}if(s&&l){if(s.geometry.type==="Polygon"&&l.geometry.type==="Polygon"){const c=s.geometry.coordinates[0],d=l.geometry.coordinates[0],m=bl(c,d);if(m.length>=4){const b=fs(c,d);s.geometry.coordinates[0]=fl(m),b&&e.activeFloorId&&Ge({type:"Point",coordinates:b},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:a("previewPointLabel")}),R(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H(),q();return}}else if(s.geometry.type==="LineString"&&l.geometry.type==="LineString"){const c=s.geometry.coordinates,d=l.geometry.coordinates,m=bs(c,d),b=vl(c,d);if(b.length>=2){s.geometry.coordinates=b,m&&e.activeFloorId&&Ge({type:"Point",coordinates:m},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:a("previewPointLabel")}),R(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H(),q();return}}}else{const c=e.hoveredFeatureId||Ee(t)?.properties.id||null;if(c){const d=e.project.features.find(m=>m.properties.id===c);if(d&&d.geometry.type==="Polygon"&&e.hoveredEdgeIndex!==-1){const m=d.geometry.coordinates[0],b=e.hoveredEdgeIndex+1;if(m.length>4&&b>0&&b<m.length){m.splice(b,1),m[m.length-1]=m[0],R(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H(),q();return}}}}}if(e.currentMode==="select"&&e.isAltPressed&&e.hoveredEdgeIndex!==-1&&e.hoveredFeatureId){const r=e.project.features.find(i=>i.properties.id===e.hoveredFeatureId);if(r&&r.geometry.type==="Polygon"){const i=[t.x,t.y];r.geometry.coordinates[0].splice(e.hoveredEdgeIndex+1,0,i),R(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H();return}}const o=Ce(t),n=e.currentMode==="line"||e.currentMode==="arc"||e.currentMode==="point"?ct(o):o;switch(e.currentMode){case"area":Mi(n);break;case"square":Ti(n);break;case"polygon":Di(n);break;case"circle":Fi(n);break;case"line":ji(n);break;case"arc":_i(n);break;case"door":Ni(t);break;case"point":Ai(n);break;case"calibrate":{if(e.tempShape){if(e.tempShape.start){const r=Ee(n);let i=ct(Ce(n));if(r&&r.properties.floor===e.activeFloorId){if(r.geometry.type==="Point"){const d=r.geometry.coordinates;i={x:d[0],y:d[1]}}else if(r.geometry.type==="LineString"){const d=r.geometry;let m=null,b=1/0;for(let y=0;y<d.coordinates.length-1;y++){const f={x:d.coordinates[y][0],y:d.coordinates[y][1]},I={x:d.coordinates[y+1][0],y:d.coordinates[y+1][1]},h=I.x-f.x,E=I.y-f.y,w=h*h+E*E;if(w===0)continue;const k=((n.x-f.x)*h+(n.y-f.y)*E)/w,F=k<0?0:k>1?1:k,L=f.x+F*h,A=f.y+F*E,z=Math.hypot(n.x-L,n.y-A);z<b&&(b=z,m={x:L,y:A})}m&&(i=m)}else if(r.geometry.type==="Polygon"){const d=r.geometry.coordinates[0];let m=null,b=1/0;for(let y=0;y<d.length-1;y++){const f={x:d[y][0],y:d[y][1]},I={x:d[y+1][0],y:d[y+1][1]},h=I.x-f.x,E=I.y-f.y,w=h*h+E*E;if(w===0)continue;const k=((n.x-f.x)*h+(n.y-f.y)*E)/w,F=k<0?0:k>1?1:k,L=f.x+F*h,A=f.y+F*E,z=Math.hypot(n.x-L,n.y-A);z<b&&(b=z,m={x:L,y:A})}m&&(i=m)}}const s=i.x-e.tempShape.start.x,l=i.y-e.tempShape.start.y,c=Math.sqrt(s*s+l*l);Pe(a("calibratePrompt")).then(d=>{const m=d?parseFloat(d):NaN;if(!Number.isNaN(m)&&m>0){const b=m/c;e.metersPerPixel=b;const y=Math.round(b*e.gridSize*100)/100;e.metersPerGridCell=y;const f=document.getElementById("gridMetersInput");f&&(f.value=String(y)),je(),H()}e.tempShape=null})}}else{const r=e.measureLabels.find(l=>n.x>=l.bx&&n.x<=l.bx+l.w&&n.y>=l.by&&n.y<=l.by+l.h);if(r){const l=r.pxLength;Pe(a("calibratePrompt")).then(c=>{const d=c?parseFloat(c):NaN;if(!Number.isNaN(d)&&d>0){const m=d/l;e.metersPerPixel=m;const b=Math.round(m*e.gridSize*100)/100;e.metersPerGridCell=b;const y=document.getElementById("gridMetersInput");y&&(y.value=String(b)),je(),H()}});break}const i=Ee(n);let s=ct(Ce(n));if(i&&i.properties.floor===e.activeFloorId){if(i.geometry.type==="Point"){const l=i.geometry.coordinates;s={x:l[0],y:l[1]}}else if(i.geometry.type==="LineString"){const l=i.geometry;let c=null,d=1/0;for(let m=0;m<l.coordinates.length-1;m++){const b={x:l.coordinates[m][0],y:l.coordinates[m][1]},y={x:l.coordinates[m+1][0],y:l.coordinates[m+1][1]},f=y.x-b.x,I=y.y-b.y,h=f*f+I*I;if(h===0)continue;const E=((n.x-b.x)*f+(n.y-b.y)*I)/h,w=E<0?0:E>1?1:E,k=b.x+w*f,F=b.y+w*I,L=Math.hypot(n.x-k,n.y-F);L<d&&(d=L,c={x:k,y:F})}c&&(s=c)}else if(i.geometry.type==="Polygon"){const l=i.geometry.coordinates[0];let c=null,d=1/0;for(let m=0;m<l.length-1;m++){const b={x:l[m][0],y:l[m][1]},y={x:l[m+1][0],y:l[m+1][1]},f=y.x-b.x,I=y.y-b.y,h=f*f+I*I;if(h===0)continue;const E=((n.x-b.x)*f+(n.y-b.y)*I)/h,w=E<0?0:E>1?1:E,k=b.x+w*f,F=b.y+w*I,L=Math.hypot(n.x-k,n.y-F);L<d&&(d=L,c={x:k,y:F})}c&&(s=c)}}e.tempShape={start:s}}break}case"select":Gs(t);break;case"merge":{const r=Ee(t);if(r){const i=r.properties.id,s=e.selectedFeatureIds.indexOf(i);s>-1?e.selectedFeatureIds.splice(s,1):e.selectedFeatureIds.push(i),qe.disabled=e.selectedFeatureIds.length===0,ue(),bn(),H()}break}}sr()}function Il(){const t=e.selectedFeatureIds.slice(),o=e.project.features.filter(y=>t.includes(y.properties.id)&&y.properties.floor===e.activeFloorId),n=o.filter(y=>y.geometry.type==="Polygon"),r=o.filter(y=>y.geometry.type==="LineString");if(n.length<1||n.length+r.length<2){alert(a("alert_selectAtLeastTwo"));return}let i=null;if(n.length>0&&r.length===0&&n.every(y=>$i(y.geometry))){const y=Oi(n.map(f=>f.geometry));y&&y.length>=4&&(i=y)}if(!i){const y=[];for(const h of n){const E=h.geometry.coordinates[0];for(let w=0;w<E.length-1;w++)y.push({x:E[w][0],y:E[w][1]})}for(const h of r)if(h.properties.subType==="arc"&&h.properties.controlPoints){const{p0:E,p1:w,p2:k}=h.properties.controlPoints;Kt(E,k,w,24).forEach(([L,A])=>y.push({x:L,y:A}))}else h.geometry.coordinates.forEach(([w,k])=>y.push({x:w,y:k}));if(y.length<3){alert(a("alert_notEnoughPoints"));return}const f=Hi(y);if(f.length<3){alert(a("alert_notEnoughPoints"));return}const I=f.map(h=>[h.x,h.y]);I.push([f[0].x,f[0].y]),i=I}const l=Se(),c=Object.keys(l).find(y=>l[y].baseType==="area")||"raum",d=l[c]?.label||"Raum",m=e.project.features.filter(y=>y.properties.type==="area").length+1,b={type:"Feature",geometry:{type:"Polygon",coordinates:[i]},properties:{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"area",subType:c,label:`${d} ${m}`}};e.project.features.push(b),R(),H(),q()}function Gs(t){const o=Ee(t),n=o?o.properties.id:null;if(e.isCtrlPressed){if(n){const r=e.selectedFeatureIds.indexOf(n);r>-1?e.selectedFeatureIds.splice(r,1):e.selectedFeatureIds.push(n)}}else e.selectedFeatureIds=n?[n]:[];qe.disabled=e.selectedFeatureIds.length===0,ue(),bn(),H()}function Gr(t){const o=ro.querySelector(`option[data-type="${t}"]`);ro.querySelectorAll("optgroup").forEach(n=>{let r=!1;n.querySelectorAll("option").forEach(i=>{i.dataset.type===t?(i.style.display="",r=!0):i.style.display="none"}),n.style.display=r?"":"none"}),o&&(o.selected=!0)}function Oe(){is()}function Sl(t){t.preventDefault(),is();const o=zt({x:t.offsetX,y:t.offsetY}),n=Ee(o);if(!n||(e.selectedFeatureIds.includes(n.properties.id)||(e.selectedFeatureIds=[n.properties.id],H(),ue()),e.selectedFeatureIds.length===0))return;Gi(n,()=>ue());const r=n.properties.type==="area"&&n.geometry.type==="Polygon",i=document.getElementById("ctx-menu-edit-contents"),s=document.getElementById("ctx-menu-edit-opening-hours"),l=document.getElementById("ctx-menu-edit-occupancy"),c=document.getElementById("ctx-menu-toggle-accessibility");i&&(i.style.display=r?"":"none"),s&&(s.style.display=r?"":"none"),l&&(l.style.display=r?"":"none"),c&&(c.style.display=r?"":"none"),Wi(t.clientX,t.clientY,e.selectedFeatureIds.length)}async function kl(){if(e.selectedFeatureIds.length!==1){alert(a("alert_renameSelectOne"));return}const t=e.project.features.find(n=>n.properties.id===e.selectedFeatureIds[0]);if(!t)return;const o=await Pe(a("prompt_renameElement"),t.properties.label);o&&o.trim()!==""&&(t.properties.label=o.trim(),R(),Z(),ue(),q())}function Wr(){const t=[],o=e.gridSize||20,n=e.project.features.filter(r=>e.selectedFeatureIds.includes(r.properties.id));n.length!==0&&(n.forEach(r=>{const i=`feat_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,s=`${r.properties.label} - Kopie`,l=JSON.parse(JSON.stringify(r.geometry)),c=m=>{m.forEach(b=>{Array.isArray(b[0])?c(b):(b[0]+=o,b[1]+=o)})};"coordinates"in l&&c(l.coordinates);const d={type:"Feature",properties:{...r.properties,id:i,label:s},geometry:l};t.push(d)}),e.project.features.push(...t),e.selectedFeatureIds=t.map(r=>r.properties.id),R(),H(),ue(),q())}function Pl(){Ki()}function Bl(){if(!e.activeFloorId)return;if(e.selectedFeatureIds.length!==2){alert(a("alert_selectTwo"));return}const[t,o]=e.selectedFeatureIds,n=e.project.features.find(s=>s.properties.id===t),r=e.project.features.find(s=>s.properties.id===o);if(!n||!r)return;if(n.properties.floor!==e.activeFloorId||r.properties.floor!==e.activeFloorId){alert(a("alert_sameFloor"));return}let i=null;if(n.geometry.type==="Polygon"&&r.geometry.type==="Polygon"){const s=n.geometry.coordinates[0],l=r.geometry.coordinates[0];i=fs(s,l)}else n.geometry.type==="LineString"&&r.geometry.type==="LineString"&&(i=bs(n.geometry.coordinates,r.geometry.coordinates));if(!i){alert(a("alert_noOverlap"));return}Ge({type:"Point",coordinates:i},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:a("previewPointLabel")}),R(),q(),Z()}function Cl(){Ui(()=>ue())}function Kr(){e.selectedFeatureIds.length!==0&&(e.project.features.forEach(t=>{if(e.selectedFeatureIds.includes(t.properties.id)&&t.properties.type==="area"&&t.geometry.type==="Polygon"&&!t.properties.isEmpty){const o=!!t.properties.isAccessible;t.properties.isAccessible=!o}}),R(),q(),H())}function Ll(){const t=e.project.features.some(n=>e.selectedFeatureIds.includes(n.properties.id)&&n.properties.type==="area"&&n.geometry.type==="Polygon"&&!n.properties.isEmpty),o=document.getElementById("ctx-menu-toggle-accessibility");o&&(o.style.display=t?"":"none"),Vt&&(Vt.disabled=!t)}function $o(t){$t&&($t.innerHTML="",t.forEach((o,n)=>{const r=document.createElement("div");r.style.display="flex",r.style.alignItems="center",r.style.gap="0.5rem",r.style.margin="0.25rem 0";const i=document.createElement("input");i.type="text",i.value=o,i.style.flex="1",i.addEventListener("input",()=>{t[n]=i.value});const s=document.createElement("button");s.textContent="×",s.className="mini-btn",s.addEventListener("click",()=>{t.splice(n,1),$o(t)}),r.appendChild(i),r.appendChild(s),$t.appendChild(r)}))}function Ml(){if(!Ft||!$t)return;const t=e.project.features.filter(i=>e.selectedFeatureIds.includes(i.properties.id));if(t.length!==1){be&&We&&(We.textContent=a("alert_renameSelectOne"),be.classList.remove("hidden"),Rt?.addEventListener("click",()=>be.classList.add("hidden")),qt?.addEventListener("click",()=>be.classList.add("hidden")));return}const o=t[0],n=Array.isArray(o.properties.contents)?[...o.properties.contents]:[];$o(n),Ft.classList.remove("hidden");const r=()=>{if(!it)return;const i=it.value.trim();i!==""&&(n.push(i),it.value="",$o(n))};fo&&(fo.onclick=r),it&&(it.onkeydown=i=>{i.key==="Enter"&&r()}),bo&&(bo.onclick=()=>{o.properties.contents=n.filter(i=>i.trim()!==""),R(),q(),Ft?.classList.add("hidden"),H()}),vo&&(vo.onclick=()=>{Ft?.classList.add("hidden")})}function ir(t){switch(t){case 1:return a("weekdayMon");case 2:return a("weekdayTue");case 3:return a("weekdayWed");case 4:return a("weekdayThu");case 5:return a("weekdayFri");case 6:return a("weekdaySat");case 0:return a("weekdaySun");default:return""}}function Oo(t){Ot&&(Ot.innerHTML="",t.forEach((o,n)=>{const r=document.createElement("div");r.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const i=document.createElement("span");i.textContent=o.name?String(o.name):"",i.style.fontWeight="600";const s=document.createElement("span");if(typeof o.weekday=="number"){const m=ir(o.weekday);s.textContent=m}else o.date?s.textContent=o.date:o.startDate&&o.endDate?s.textContent=`${o.startDate}–${o.endDate}`:s.textContent="";const l=document.createElement("span");o.start&&o.end&&(l.textContent=`${o.start}–${o.end}`);const c=document.createElement("span");c.textContent=o.note||"",c.style.flex="1";const d=document.createElement("button");d.textContent="×",d.className="mini-btn",d.addEventListener("click",()=>{t.splice(n,1),Oo(t)}),o.name&&r.appendChild(i),r.appendChild(s),r.appendChild(l),r.appendChild(c),r.appendChild(d),Ot.appendChild(r)}))}function Ur(){if(!jt||!Ot)return;const t=e.project.features.filter(s=>e.selectedFeatureIds.includes(s.properties.id));if(t.length!==1){be&&We&&(We.textContent=a("alert_renameSelectOne"),be.classList.remove("hidden"),Rt?.addEventListener("click",()=>be.classList.add("hidden")),qt?.addEventListener("click",()=>be.classList.add("hidden")));return}const o=t[0],n=Array.isArray(o.properties.occupancy)?JSON.parse(JSON.stringify(o.properties.occupancy)):[];Oo(n),jt.classList.remove("hidden");const r=()=>{const s=Dt?.value||"date",l=s==="weekday",c=s==="date",d=s==="range";At&&(At.style.display=l?"":"none");const m=document.getElementById("occupancy-weekday-label");m&&(m.style.display=l?"":"none"),an&&(an.style.display=c?"":"none");const b=document.getElementById("occupancy-date-label");b&&(b.style.display=c?"":"none"),pn&&(pn.style.display=d?"":"none"),un&&(un.style.display=d?"":"none");const y=document.getElementById("occupancy-range-start-label");y&&(y.style.display=d?"":"none");const f=document.getElementById("occupancy-range-end-label");f&&(f.style.display=d?"":"none"),cn&&(cn.style.display=l||c||d?"":"none"),dn&&(dn.style.display=l||c||d?"":"none");const I=document.getElementById("occupancy-start-label");I&&(I.style.display=l||c||d?"":"none");const h=document.getElementById("occupancy-end-label");h&&(h.style.display=l||c||d?"":"none")};r(),Dt&&(Dt.onchange=r);const i=()=>{const s=Dt?.value||"date",l=cn?.value||"",c=dn?.value||"",d=mn?.value||"",m=o.properties.label||"";if(s==="weekday"){const b=At?.value?parseInt(At.value,10):NaN;if(isNaN(b)||!l||!c)return;n.push({name:m,weekday:b,start:l,end:c,note:d})}else if(s==="date"){const b=an?.value||"";if(!b||!l||!c)return;n.push({name:m,date:b,start:l,end:c,note:d})}else if(s==="range"){const b=pn?.value||"",y=un?.value||"";if(!b||!y)return;n.push({name:m,startDate:b,endDate:y,start:l||void 0,end:c||void 0,note:d})}mn&&(mn.value=""),Oo(n)};xo&&(xo.onclick=i),Eo&&(Eo.onclick=()=>{o.properties.occupancy=n,R(),q(),jt?.classList.add("hidden"),H()}),wo&&(wo.onclick=()=>{jt?.classList.add("hidden")})}function et(t){if(gn&&(gn.innerHTML="",t.weekly&&Object.keys(t.weekly).forEach(o=>{const n=t.weekly[o];n.forEach((r,i)=>{const s=document.createElement("div");s.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const l=document.createElement("span");l.textContent=`${ir(Number(o))}`;const c=document.createElement("span");c.textContent=`${r.start}–${r.end}`;const d=document.createElement("button");d.textContent="×",d.className="mini-btn",d.addEventListener("click",()=>{n.splice(i,1),n.length===0&&delete t.weekly[o],et(t)}),s.appendChild(l),s.appendChild(c),s.appendChild(d),gn.appendChild(s)})})),yn){yn.innerHTML="";const o=Array.isArray(t.exceptions)?t.exceptions:[];o.forEach((n,r)=>{const i=document.createElement("div");i.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const s=document.createElement("span");s.textContent=n.date;const l=document.createElement("span");n.start&&n.end&&(l.textContent=`${n.start}–${n.end}`);const c=document.createElement("button");c.textContent="×",c.className="mini-btn",c.addEventListener("click",()=>{o.splice(r,1),t.exceptions=o,et(t)}),i.appendChild(s),i.appendChild(l),i.appendChild(c),yn.appendChild(i)})}if(hn){hn.innerHTML="";const o=Array.isArray(t.ranges)?t.ranges:[];o.forEach((n,r)=>{const i=document.createElement("div");i.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const s=document.createElement("span");s.textContent=`${n.startDate}–${n.endDate}`;const l=document.createElement("span");n.start&&n.end&&(l.textContent=`${n.start}–${n.end}`);const c=document.createElement("button");c.textContent="×",c.className="mini-btn",c.addEventListener("click",()=>{o.splice(r,1),t.ranges=o,et(t)}),i.appendChild(s),i.appendChild(l),i.appendChild(c),hn.appendChild(i)})}}function Tl(t){const o=[];return t.weekly&&Object.keys(t.weekly).map(r=>Number(r)).sort((r,i)=>r-i).forEach(r=>{const i=ir(r),s=t.weekly[r].map(l=>`${l.start}–${l.end}`).join(", ");o.push(`${i} ${s}`)}),Array.isArray(t.exceptions)&&t.exceptions.length>0&&o.push(`${a("openingHoursExceptions")}: ${t.exceptions.length}`),Array.isArray(t.ranges)&&t.ranges.length>0&&o.push(`${a("openingHoursRanges")}: ${t.ranges.length}`),o.join(" · ")}function Yr(){if(!_t)return;const t=e.project.features.filter(i=>e.selectedFeatureIds.includes(i.properties.id));if(t.length!==1){be&&We&&(We.textContent=a("alert_renameSelectOne"),be.classList.remove("hidden"),Rt?.addEventListener("click",()=>be.classList.add("hidden")),qt?.addEventListener("click",()=>be.classList.add("hidden")));return}const o=t[0];let n={};const r=o.properties.opening_hours;r&&typeof r=="object"?n=JSON.parse(JSON.stringify(r)):n={weekly:{},exceptions:[],ranges:[]},et(n),_t.classList.remove("hidden"),So&&(So.onclick=()=>{const i=Io?.value?parseInt(Io.value,10):NaN,s=Ls?.value||"",l=Ms?.value||"";isNaN(i)||!s||!l||(n.weekly[i]||(n.weekly[i]=[]),n.weekly[i].push({start:s,end:l}),et(n))}),ko&&(ko.onclick=()=>{const i=Ts?.value||"",s=Fs?.value||"",l=js?.value||"";i&&(n.exceptions=Array.isArray(n.exceptions)?n.exceptions:[],n.exceptions.push({date:i,start:s||void 0,end:l||void 0}),et(n))}),Po&&(Po.onclick=()=>{const i=Ds?.value||"",s=As?.value||"",l=_s?.value||"",c=zs?.value||"";!i||!s||(n.ranges=Array.isArray(n.ranges)?n.ranges:[],n.ranges.push({startDate:i,endDate:s,start:l||void 0,end:c||void 0}),et(n))}),Bo&&(Bo.onclick=()=>{o.properties.opening_hours=n;const i=Tl(n);In.value=i,R(),q(),_t?.classList.add("hidden"),H()}),Co&&(Co.onclick=()=>{_t?.classList.add("hidden")})}function ae(){const t=document.getElementById("overview-stats-panel");if(!t)return;const o=e.project.properties.projectName||a("unnamedProject"),n=ze(),r=n.length,i=e.project.features.filter(d=>d.properties.type==="area"&&!d.properties.isPlaceholder).length,s=e.project.features.filter(d=>d.properties.type==="point").length;let l=`<div><span>${a("stat_project")}:</span><span class="value">${o}</span></div><div><span>${a("stat_floors")}:</span><span class="value">${r}</span></div><div><span>${a("stat_areas")}:</span><span class="value">${i}</span></div><div><span>${a("stat_points")}:</span><span class="value">${s}</span></div>`;t.innerHTML=l;const c=document.getElementById("overview-floor-list");c&&(c.innerHTML="",n.forEach(d=>{const m=e.project.features.filter(T=>T.properties.floor===d&&T.properties.type==="area"&&!T.properties.isPlaceholder).length,b=e.project.features.filter(T=>T.properties.floor===d&&T.properties.type==="point").length,y=document.createElement("div");y.className="floor-block";const f=document.createElement("div");f.className="floor-card";const I=document.createElement("img");I.className="floor-thumb",e.cachedFloorPlanImages[d]&&(I.src=e.cachedFloorPlanImages[d].src,f.classList.add("has-thumb"));const h=document.createElement("div");h.className="floor-meta";const E=document.createElement("div");E.className="name",E.textContent=d;const w=document.createElement("div");w.className="counts",w.textContent=`${a("stat_areas")}: ${m} · ${a("stat_points")}: ${b}`,h.appendChild(E),h.appendChild(w),f.appendChild(I),f.appendChild(h),f.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),y.appendChild(f);const k=document.createElement("button");k.className="beacon-toggle";const F=e.project.features.filter(T=>T.properties.floor===d&&T.properties.type==="point"&&T.properties.subType==="beacon");k.textContent=`${a("overviewBeacons")} (${F.length})`;const L=document.createElement("div");L.className="beacon-section",k.addEventListener("click",()=>{L.style.display===""||L.style.display==="none"?(L.innerHTML="",F.forEach(p=>{const v=document.createElement("div");v.className="beacon-card";const B=document.createElement("div");B.className="beacon-meta";const C=document.createElement("div");C.className="name";const P=p.properties.beacon_serial||"",M=p.properties.label||a("point_beacon_label");C.textContent=P?`${M} · ${P}`:M;const j=document.createElement("div");j.className="counts";const N=p.properties.beacon_range,_=p.properties.beacon_note_de||p.properties.beacon_note_en||"",O=[];O.push(`${a("beacon_serial_label")}: ${P||"-"}`),typeof N=="number"&&O.push(`${a("beacon_range_label")}: ${N}`),_&&O.push(`${a("beacon_note_de_label")}: ${_}`),j.textContent=O.join(" · "),B.appendChild(C),B.appendChild(j),v.appendChild(B),v.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),L.appendChild(v)}),L.style.display="block"):(L.style.display="none",L.innerHTML="")}),y.appendChild(k),y.appendChild(L);const A=e.project.features.filter(T=>T.properties.floor===d&&T.properties.type==="area"&&!T.properties.isPlaceholder).sort((T,p)=>{const v=(T.properties.label||"").toLowerCase(),B=(p.properties.label||"").toLowerCase();return v.localeCompare(B)}),z=document.createElement("button");z.className="beacon-toggle",z.textContent=`${a("areas")} (${A.length})`;const D=document.createElement("div");D.className="area-section",z.addEventListener("click",()=>{if(D.style.display===""||D.style.display==="none"){const p=Se();D.innerHTML="",A.forEach(B=>{const C=document.createElement("div");C.className="area-card";const P=document.createElement("div");P.className="area-meta";const M=document.createElement("div");M.className="name";const j=B.properties.label||"";M.textContent=j;const N=document.createElement("div");N.className="counts";const _=p[B.properties.subType]?.label||B.properties.subType,O=Array.isArray(B.properties.contents)?B.properties.contents.filter(Y=>Y.trim()!==""):[],X=O.length>0?O.join(", "):"-";N.textContent=`${a("elementType")}: ${_} · ${a("roomContentsTitle")}: ${X}`,P.appendChild(M),P.appendChild(N),C.appendChild(P),C.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),D.appendChild(C)});const v=A.filter(B=>!!B.properties.isAccessible);if(v.length>0){const B=document.createElement("div");B.className="area-meta";const C=document.createElement("div");C.className="name",C.textContent=a("accessibleRoomsHeader"),B.appendChild(C),D.appendChild(B),v.forEach(P=>{const M=document.createElement("div");M.className="area-card";const j=document.createElement("div");j.className="area-meta";const N=document.createElement("div");N.className="name",N.textContent=P.properties.label||"";const _=document.createElement("div");_.className="counts",_.textContent="Barrierefrei",j.appendChild(N),j.appendChild(_),M.appendChild(j),M.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),D.appendChild(M)})}D.style.display="block"}else D.style.display="none",D.innerHTML=""}),y.appendChild(z),y.appendChild(D),c.appendChild(y)}))}function Fl(){pe=document.getElementById("canvas"),br=document.getElementById("scrollbar-x"),vr=document.getElementById("scrollbar-y"),eo=document.getElementById("thumb-x"),to=document.getElementById("thumb-y"),vs=document.getElementById("crosshair-h"),xs=document.getElementById("crosshair-v"),no=document.getElementById("coordinate-display"),oo=document.getElementById("floor-select"),Qe=document.getElementById("projectName"),ro=document.getElementById("element-type-select"),qe=document.getElementById("deleteBtn"),Es=document.getElementById("element-options"),ws=document.getElementById("corner-box"),ke=document.getElementById("info-modal"),Is=document.getElementById("info-modal-close-btn"),Ss=ke.querySelector(".modal-overlay"),xr=document.getElementById("properties-content"),Er=document.getElementById("properties-placeholder"),xn=document.getElementById("properties-label-input"),En=document.getElementById("properties-type-select"),wn=document.getElementById("properties-is-empty-checkbox");const t=document.getElementById("properties-is-accessible-checkbox");so=document.getElementById("properties-description-input"),In=document.getElementById("properties-opening-hours-input"),io=document.getElementById("properties-room-number-input"),lo=document.getElementById("properties-designation-select"),Yi({propertiesContent:xr,propertiesPlaceholder:Er,propertiesLabelInput:xn,propertiesTypeSelect:En,propertiesIsEmptyCheckbox:wn,propertiesIsAccessibleCheckbox:t}),wr=document.getElementById("context-menu"),ao=document.getElementById("ctx-menu-copy"),ks=document.getElementById("ctx-menu-delete"),Ps=document.getElementById("ctx-menu-rename"),ao=document.getElementById("ctx-menu-copy"),Ir=document.getElementById("ctx-menu-type-submenu"),co=document.getElementById("ctx-floor-submenu"),po=document.getElementById("ctx-floor-add"),uo=document.getElementById("ctx-floor-rename"),Sn=document.getElementById("ctx-menu-add-overlap-point"),mo=document.getElementById("ctx-menu-toggle-accessibility"),go=document.getElementById("ctx-menu-edit-contents"),Sr=document.getElementById("input-prompt-modal"),kr=document.getElementById("input-prompt-label"),Pr=document.getElementById("input-prompt-input"),Br=document.getElementById("input-prompt-ok"),Cr=document.getElementById("input-prompt-cancel"),be=document.getElementById("confirm-modal"),We=document.getElementById("confirm-message"),Rt=document.getElementById("confirm-ok"),qt=document.getElementById("confirm-cancel"),Lr=document.getElementById("loading-modal"),Mr=document.getElementById("loading-message"),Tr=document.getElementById("loading-ok"),Ft=document.getElementById("room-contents-modal"),$t=document.getElementById("room-contents-list"),it=document.getElementById("room-contents-new-item"),fo=document.getElementById("room-contents-add-btn"),bo=document.getElementById("room-contents-save"),vo=document.getElementById("room-contents-cancel"),Vt=document.getElementById("toggleAccessibleBtn"),yo=document.getElementById("ctx-menu-edit-occupancy"),ho=document.getElementById("ctx-menu-edit-opening-hours"),jt=document.getElementById("occupancy-modal"),Ot=document.getElementById("occupancy-list"),Dt=document.getElementById("occupancy-type"),At=document.getElementById("occupancy-weekday"),an=document.getElementById("occupancy-date"),cn=document.getElementById("occupancy-start"),dn=document.getElementById("occupancy-end"),pn=document.getElementById("occupancy-range-start"),un=document.getElementById("occupancy-range-end"),mn=document.getElementById("occupancy-note"),xo=document.getElementById("occupancy-add-btn"),Eo=document.getElementById("occupancy-save"),wo=document.getElementById("occupancy-cancel"),Bs=document.getElementById("open-occupancy-modal-btn"),_t=document.getElementById("opening-hours-modal"),Cs=document.getElementById("open-opening-hours-modal-btn"),gn=document.getElementById("opening-hours-weekly-list"),yn=document.getElementById("opening-hours-exceptions-list"),hn=document.getElementById("opening-hours-ranges-list"),Io=document.getElementById("opening-hours-weekday"),Ls=document.getElementById("opening-hours-start"),Ms=document.getElementById("opening-hours-end"),So=document.getElementById("opening-hours-add-rule"),Ts=document.getElementById("opening-hours-ex-date"),Fs=document.getElementById("opening-hours-ex-start"),js=document.getElementById("opening-hours-ex-end"),ko=document.getElementById("opening-hours-add-exception"),Ds=document.getElementById("opening-hours-range-start"),As=document.getElementById("opening-hours-range-end"),_s=document.getElementById("opening-hours-range-time-start"),zs=document.getElementById("opening-hours-range-time-end"),Po=document.getElementById("opening-hours-add-range"),Bo=document.getElementById("opening-hours-save"),Co=document.getElementById("opening-hours-cancel"),Lo=document.getElementById("type-manager-modal"),Ns=document.getElementById("type-manager-close-btn"),Fr=document.getElementById("type-manager-list"),jr=document.getElementById("type-manager-details-content"),Dr=document.getElementById("type-manager-placeholder"),Mo=document.getElementById("type-name-input"),Ar=document.getElementById("type-editor-area"),To=document.getElementById("type-fill-color-input"),_r=document.getElementById("type-fill-color-swatch"),Fo=document.getElementById("type-fill-opacity-slider"),jo=document.getElementById("type-stroke-color-input"),zr=document.getElementById("type-stroke-color-swatch"),Nr=document.getElementById("type-editor-point"),$r=document.getElementById("type-icon-library"),Do=document.getElementById("type-icon-color-input"),$s=document.getElementById("type-manager-new-btn"),Ao=document.getElementById("type-manager-delete-btn"),Os=document.getElementById("type-manager-save-btn"),Hs=document.getElementById("manage-types-btn"),kn=document.getElementById("new-type-choice-modal"),Rs=document.getElementById("choose-type-area"),qs=document.getElementById("choose-type-point"),Vs=document.getElementById("new-type-choice-cancel"),_o=document.getElementById("lang-trigger"),De=document.getElementById("lang-menu"),nr=document.getElementById("active-lang-display"),or=document.getElementById("theme-trigger"),Gt=document.getElementById("theme-icon"),Wt=document.getElementById("lang-icon"),zo=document.getElementById("type-font-color-input"),No=document.getElementById("type-font-size-input"),Pn=document.getElementById("type-text-style-header"),Bn=document.getElementById("type-area-style-header"),Cn=document.getElementById("type-point-style-header"),Or=document.getElementById("type-preview"),Ln=document.getElementById("type-preview-header"),Hr=document.getElementById("type-preview-area"),Rr=document.getElementById("type-preview-area-rect"),Mn=document.getElementById("type-preview-area-label"),qr=document.getElementById("type-preview-point"),Vr=document.getElementById("type-preview-point-icon"),Tn=document.getElementById("type-preview-point-label"),Zi({canvas:pe,scrollbarX:br,scrollbarY:vr,thumbX:eo,thumbY:to}),tl({canvas:pe}),cl({typeManagerModal:Lo,typeManagerList:Fr,typeManagerDetailsContent:jr,typeManagerPlaceholder:Dr,typeNameInput:Mo,typeEditorArea:Ar,typeFillColorInput:To,typeFillColorSwatch:_r,typeFillOpacitySlider:Fo,typeStrokeColorInput:jo,typeStrokeColorSwatch:zr,typeEditorPoint:Nr,typeIconLibrary:$r,typeIconColorInput:Do,typeManagerDeleteBtn:Ao,newTypeChoiceModal:kn,typeFontColorInput:zo,typeFontSizeInput:No,typeTextStyleHeader:Pn,typeAreaStyleHeader:Bn,typePointStyleHeader:Cn,typePreviewContainer:Or,typePreviewHeader:Ln,typePreviewArea:Hr,typePreviewAreaRect:Rr,typePreviewAreaLabel:Mn,typePreviewPoint:qr,typePreviewPointIcon:Vr,typePreviewPointLabel:Tn}),hl({showInputPrompt:Pe,showConfirm:Fe}),rr=document.getElementById("renameFloorBtn"),Ei({inputPromptModal:Sr,inputPromptLabel:kr,inputPromptInput:Pr,inputPromptOk:Br,inputPromptCancel:Cr,confirmModal:be,confirmMessage:We,confirmOk:Rt,confirmCancel:qt,loadingModal:Lr,loadingMessage:Mr,loadingOk:Tr}),Vi({contextMenu:wr,ctxMenuTypeSubmenu:Ir,ctxMenuAddOverlapPoint:Sn}),Al()}function Ws(){document.getElementById("backstage-close-btn").title=a("backToApp");const t=document.getElementById("backstage-panel");if(t&&t.classList.contains("visible")){const g=document.getElementById("backstage-title");if(g){const x=document.querySelector(".main-menu button.active")?.id.replace("-menu-trigger","");x==="file"?g.textContent=a("filePanelTitle"):x==="output"?g.textContent=a("outputPanelTitle"):x==="overview"&&(g.textContent=a("overviewPanelTitle"))}}{const x=document.getElementById("newProjectBtn")?.querySelector("span");x&&(x.textContent=a("newProject"))}{const x=document.getElementById("loadProjectBtn")?.querySelector("span");x&&(x.textContent=a("loadProject"))}{const x=document.getElementById("saveProjectBtn")?.querySelector("span");x&&(x.textContent=a("saveProject"))}{const x=document.getElementById("loadProjectFromServerBtn")?.querySelector("span");x&&(x.textContent=a("loadFromServer"))}{const x=document.getElementById("saveProjectToServerBtn")?.querySelector("span");x&&(x.textContent=a("saveToServer"))}{const g=document.getElementById("serverProjectLabel");g&&(g.textContent=a("serverProject"));const x=document.getElementById("serverVersionLabel");x&&(x.textContent=a("serverVersion"));const W=document.getElementById("serverProjectAddBtn"),V=W?.querySelector("span");V&&(V.textContent=a("add")),W&&W.setAttribute("title",a("add"));const $=document.getElementById("serverProjectDeleteBtn"),G=$?.querySelector("span");G&&(G.textContent=a("deleteAction")),$&&$.setAttribute("title",a("deleteAction"));const U=document.getElementById("serverRefreshBtn");U&&(U.title=a("refresh"));const K=document.getElementById("serverVersionRefreshBtn");K&&(K.title=a("refresh"));const ee=document.getElementById("serverLoadBtn")?.querySelector("span");ee&&(ee.textContent=a("load"));const re=document.getElementById("serverLoadLatestBtn")?.querySelector("span");re&&(re.textContent=a("latestVersion"));const le=document.getElementById("serverSavePanelBtn")?.querySelector("span");le&&(le.textContent=a("save"));const se=document.getElementById("serverVersionAddBtn"),ve=se?.querySelector("span");ve&&(ve.textContent=a("add")),se&&se.setAttribute("title",a("add"));const xe=document.getElementById("serverVersionDeleteBtn"),he=xe?.querySelector("span");he&&(he.textContent=a("deleteAction")),xe&&xe.setAttribute("title",a("deleteAction"))}{const x=document.getElementById("Einleitung")?.querySelector("span");x&&(x.textContent=a("introduction"))}{const x=document.getElementById("exportGeoJsonBtn")?.querySelector("span");x&&(x.textContent=a("exportGeoJson"))}{const g=document.querySelector('.sponsor-display p[data-i18n="sponsoredByMinew"]');g&&(g.textContent=a("sponsoredByMinew"));const x=document.querySelector('.sponsor-display p[data-i18n="supportedByPalfinger"]');x&&(x.textContent=a("supportedByPalfinger"));const W=document.querySelector('.sponsor-footer p[data-i18n="sponsoredByMinew"]');W&&(W.textContent=a("sponsoredByMinew"))}{const g=document.getElementById("imprintBtn"),x=g?.querySelector('span[data-i18n="imprint"]');x&&(x.textContent=a("imprint")),g&&g.setAttribute("title",a("imprint"))}{const g=document.getElementById("contactBtn"),x=g?.querySelector('span[data-i18n="contact"]');x&&(x.textContent=a("contact")),g&&g.setAttribute("title",a("contact"))}{const g=document.getElementById("privacyBtn"),x=g?.querySelector('span[data-i18n="privacy"]');x&&(x.textContent=a("privacy")),g&&g.setAttribute("title",a("privacy"))}{const g=document.getElementById("sponsorsBtn"),x=g?.querySelector('span[data-i18n="sponsorsButtonTitle"]');x&&(x.textContent=a("sponsorsButtonTitle")),g&&g.setAttribute("title",a("sponsorsButtonTitle"))}const o=document.getElementById("showGeoJsonBtn"),n=document.getElementById("live-geojson-output"),r=n?n.style.display==="block":!1;{const g=o?.querySelector("span");g&&(g.textContent=a(r?"hideCode":"showLiveCode"))}const i=document.querySelector(".toolbar-section:nth-child(1) h2");i?.childNodes[0]&&(i.childNodes[0].textContent=a("project")+" ");const s=document.getElementById("projectName");{const g=s?.parentElement?.querySelector("label");g&&(g.textContent=a("projectName"))}s&&(s.placeholder=a("enterProjectName"));const l=document.querySelector(".toolbar-section:nth-child(2) h2");l?.childNodes[0]&&(l.childNodes[0].textContent=a("edit")+" ");{const x=document.getElementById("undoBtn")?.querySelector("span");x&&(x.textContent=a("undo"))}{const x=document.getElementById("redoBtn")?.querySelector("span");x&&(x.textContent=a("redo"))}const c=document.querySelector(".toolbar-section:nth-child(3) h2");c?.childNodes[0]&&(c.childNodes[0].textContent=a("floors")+" ");{const x=document.getElementById("floor-select")?.parentElement?.querySelector("label");x&&(x.textContent=a("currentFloor"))}{const x=document.getElementById("addFloorBtn")?.querySelector("span");x&&(x.textContent=a("newFloor"))}{const g=rr?.querySelector("span");g&&(g.textContent=a("rename"))}const d=document.querySelector("#floor-select + .button-group button:nth-child(3)");d&&(d.querySelector("span").textContent=a("floorplan"));const m=document.querySelector(".toolbar-section:nth-child(4) h2");m?.childNodes[0]&&(m.childNodes[0].textContent=a("tools")+" ");{const x=document.getElementById("mode-pan")?.querySelector("span");x&&(x.textContent=a("pan"))}{const x=document.getElementById("mode-select")?.querySelector("span");x&&(x.textContent=a("select"))}{const x=document.getElementById("mode-move-element")?.querySelector("span");x&&(x.textContent=a("moveElement"))}{const x=document.getElementById("mode-calibrate")?.querySelector("span");x&&(x.textContent=a("calibrateScale"))}{const g=document.getElementById("mode-merge");if(g){const x=g.querySelector("span");x&&(x.textContent=a("merge"))}}{const x=document.getElementById("deleteBtn")?.querySelector("span");x&&(x.textContent=a("delete"))}{const g=document.querySelectorAll(".tool-buttons .toolbar-separator");g[0]&&(g[0].textContent=a("areas")),g[1]&&(g[1].textContent=a("linesAndPoints"))}{const x=document.getElementById("mode-area")?.querySelector("span");x&&(x.textContent=a("rectangle"))}{const x=document.getElementById("mode-square")?.querySelector("span");x&&(x.textContent=a("square"))}{const x=document.getElementById("mode-polygon")?.querySelector("span");x&&(x.textContent=a("polygon"))}if(co){const g=co.parentElement;g&&g.childNodes[0]&&(g.childNodes[0].textContent=a("floors"));const x=document.getElementById("ctx-floor-add");x&&(x.textContent=a("newFloor"));const W=document.getElementById("ctx-floor-rename");W&&(W.textContent=a("renameFloor"))}{const g=document.getElementById("ctx-menu-toggle-accessibility");g&&(g.textContent=a("toggleAccessibility"))}{const g=document.getElementById("ctx-menu-edit-contents");g&&(g.textContent=a("editRoomContents"))}{const g=document.getElementById("ctx-menu-edit-occupancy");g&&(g.textContent=a("occupancyEdit"));const x=document.getElementById("ctx-menu-edit-opening-hours");x&&(x.textContent=a("openingHoursEdit"))}{const x=document.getElementById("mode-circle")?.querySelector("span");x&&(x.textContent=a("circle"))}{const x=document.getElementById("mode-line")?.querySelector("span");x&&(x.textContent=a("line"))}{const x=document.getElementById("mode-line")?.querySelector("span");x&&(x.textContent=a("line"))}{const x=document.getElementById("mode-door")?.querySelector("span");x&&(x.textContent=a("door"))}{const x=document.getElementById("mode-arc")?.querySelector("span");x&&(x.textContent=a("arc"))}{const x=document.getElementById("mode-point")?.querySelector("span");x&&(x.textContent=a("point"))}{const x=document.getElementById("mode-area")?.querySelector("span");x&&(x.textContent=a("rectangle"))}{const x=document.getElementById("mode-square")?.querySelector("span");x&&(x.textContent=a("square"))}{const x=document.getElementById("element-type-select")?.parentElement?.querySelector("label");x&&(x.textContent=a("elementType"))}{const x=document.getElementById("manage-types-btn")?.querySelector("span");x&&(x.textContent=a("manageTypes"))}{const x=document.getElementById("copyBtn")?.querySelector("span");x&&(x.textContent=a("copy"))}{const x=document.getElementById("toggleAccessibleBtn")?.querySelector("span");x&&(x.textContent=a("accessible"))}{const g=document.getElementById("simulateSignalBtn"),x=g?.querySelector("span");x&&(x.textContent=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal")),g&&(g.classList.toggle("active",e.showBeaconHeatmap),g.setAttribute("aria-pressed",e.showBeaconHeatmap?"true":"false"),g.title=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal"))}const b=document.querySelector("#properties-panel h2");b?.childNodes[0]&&(b.childNodes[0].textContent=a("properties")+" ");{const g=document.getElementById("properties-label-input")?.parentElement?.querySelector("label");g&&(g.textContent=a("label")),g&&(g.title=a("properties_label_desc"))}{const g=document.getElementById("beacon-fields-title");g&&(g.textContent=a("beacon_parameters"))}{const g=document.querySelector('label[for="beacon-uuid-input"]');g&&(g.textContent=a("beacon_uuid_label"))}{const g=document.querySelector('label[for="beacon-serial-input"]');g&&(g.textContent=a("beacon_serial_label")),g&&(g.title=a("beacon_serial_desc"))}{const g=document.querySelector('label[for="beacon-major-input"]');g&&(g.textContent=a("beacon_major_label"))}{const g=document.querySelector('label[for="beacon-minor-input"]');g&&(g.textContent=a("beacon_minor_label"))}{const g=document.querySelector('label[for="beacon-installation-input"]');g&&(g.textContent=a("beacon_installation_label")),g&&(g.title=a("beacon_installation_desc"))}{const g=document.querySelector('label[for="beacon-range-input"]');g&&(g.textContent=a("beacon_range_label")),g&&(g.title=a("beacon_range_desc"))}{const g=document.querySelector('label[for="beacon-number-input"]');g&&(g.textContent=a("beacon_number_label")),g&&(g.title=a("beacon_number_desc"))}{const g=document.querySelector('label[for="beacon-note-de-input"]');g&&(g.textContent=a("beacon_note_de_label")),g&&(g.title=a("beacon_note_de_desc"))}{const g=document.querySelector('label[for="beacon-note-en-input"]');g&&(g.textContent=a("beacon_note_en_label")),g&&(g.title=a("beacon_note_de_desc"))}const y=document.getElementById("properties-label-input");y&&(y.placeholder=a("enterElementLabel"));{const g=document.getElementById("beacon-serial-input");g&&(g.placeholder=a("beacon_serial_label"))}{const g=document.getElementById("beacon-number-input");g&&(g.placeholder=a("beacon_number_label"))}{const g=document.getElementById("beacon-installation-input");g&&(g.placeholder=a("beacon_installation_label"),g.title=a("beacon_installation_label"))}{const g=document.getElementById("beacon-range-input");g&&(g.placeholder=a("beacon_range_label"))}{const g=document.getElementById("beacon-note-de-input");g&&(g.placeholder=a("beacon_note_de_label"))}{const x=document.getElementById("properties-type-select")?.parentElement?.querySelector("label");x&&(x.textContent=a("elementType"))}{const g=document.getElementById("properties-placeholder");g&&(g.textContent=a("noElementSelected"))}const f=document.querySelector(".toolbar-section:nth-child(5) h2");f?.childNodes[0]&&(f.childNodes[0].textContent=a("viewAndLayers")+" ");const I=document.getElementById("view-grid-sep");I&&(I.textContent=a("grid"));const h=document.getElementById("view-layers-sep");h&&(h.textContent=a("layers"));const E=document.getElementById("analysis-sep");E&&(E.textContent=a("analysis"));{const x=document.getElementById("toggleGridBtn")?.parentElement?.querySelector("span");x&&(x.textContent=a("showGrid"))}{const x=document.getElementById("toggleSnapBtn")?.parentElement?.querySelector("span");x&&(x.textContent=a("snapToGrid"))}{const g=document.querySelector('label[for="gridSizeInput"]');g&&(g.textContent=a("size"))}{const x=document.getElementById("gridMetersInput")?.parentElement?.querySelector("label");x&&(x.textContent=a("metersPerCell"))}{const x=document.querySelector('.layer-toggle[data-layer="floorplan"]')?.parentElement?.querySelector("span");x&&(x.textContent=a("layersFloorplan"))}{const x=document.querySelector('.layer-toggle[data-layer="area"]')?.parentElement?.querySelector("span");x&&(x.textContent=a("layersAreas"))}{const x=document.querySelector('.layer-toggle[data-layer="path"]')?.parentElement?.querySelector("span");x&&(x.textContent=a("layersPaths"))}{const x=document.querySelector('.layer-toggle[data-layer="point"]')?.parentElement?.querySelector("span");x&&(x.textContent=a("layersPoints"))}{const g=document.getElementById("dimensions-sep");g&&(g.textContent=a("dimensions"));const W=document.getElementById("toggleAreaDimensions")?.parentElement?.querySelector("span");W&&(W.textContent=a("showEdgeLengths"));const $=document.getElementById("toggleAreaAngles")?.parentElement?.querySelector("span");$&&($.textContent=a("showCornerAngles"));const U=document.getElementById("togglePathLengths")?.parentElement?.querySelector("span");U&&(U.textContent=a("showLineLengths"));const J=document.getElementById("toggleCircleRadius")?.parentElement?.querySelector("span");J&&(J.textContent=a("showCircleRadius"));const oe=document.getElementById("toggleBeaconRing")?.parentElement?.querySelector("span");oe&&(oe.textContent=a("showBeaconRangeRing"))}{const g=document.getElementById("intro-content");g&&(g.innerHTML=a("intro_full_content"))}const w=document.getElementById("show3DViewBtn");w&&(w.querySelector("span").textContent=document.getElementById("floor3DView")?.style.display==="flex"?a("backToApp"):a("preview3D"));{const g=document.querySelector("#type-manager-modal h2");g&&(g.textContent=a("manageTypesTitle"));const x=document.querySelector("#type-manager-modal h4");x&&(x.textContent=a("types"));const W=document.getElementById("type-manager-new-btn");W&&(W.textContent=a("newType"));const V=document.getElementById("type-name-input"),$=V?.parentElement?.querySelector("label");$&&($.textContent=a("typeName")),V&&(V.placeholder=a("exampleMarketing"))}Pn&&(Pn.textContent=a("textStyle")),Bn&&(Bn.textContent=a("areaStyle")),Cn&&(Cn.textContent=a("pointStyle"));{const g=document.getElementById("type-font-size-input")?.parentElement?.querySelector("label");g&&(g.textContent=a("fontSize"),g.title=a("fontSizeDesc"))}{const g=document.getElementById("type-font-color-input")?.parentElement?.querySelector("label");g&&(g.textContent=a("fontColor"),g.title=a("fontColorDesc"))}const k=document.getElementById("ctx-menu-rename");k&&(k.textContent=a("rename"));const F=document.getElementById("ctx-menu-copy");F&&(F.textContent=a("copy"));const L=document.querySelector("#context-menu .has-submenu");L&&L.firstChild&&L.firstChild.textContent&&(L.firstChild.textContent=a("changeType"));const A=document.getElementById("ctx-menu-add-overlap-point");A&&(A.textContent=a("ctxAddOverlapPoint"));const z=document.getElementById("type-fill-color-input").parentElement.querySelector("label");z.textContent=a("fillColor"),z.title=a("fillColorDesc"),document.getElementById("type-fill-color-swatch").title=a("currentFillColor");const D=document.getElementById("type-fill-opacity-slider").parentElement.querySelector("label");D.textContent=a("fillOpacity"),D.title=a("fillOpacityDesc");const T=document.getElementById("type-stroke-color-input").parentElement.querySelector("label");T.textContent=a("strokeColor"),T.title=a("strokeColorDesc"),document.getElementById("type-stroke-color-swatch").title=a("currentStrokeColor");const p=document.querySelector("#type-editor-point > label");p.textContent=a("iconSelection"),p.title=a("iconSelectionDesc");const v=document.getElementById("type-icon-color-input").parentElement.querySelector("label");v.textContent=a("iconColor"),v.title=a("iconColorDesc");{const g=document.getElementById("type-manager-delete-btn");g&&(g.textContent=a("deleteType"))}{const g=document.getElementById("type-manager-placeholder");g&&(g.textContent=a("typeManagerPlaceholder"))}document.getElementById("type-manager-save-btn").textContent=a("saveChangesAndClose"),Ln&&(Ln.textContent=a("typePreview")),Mn&&(Mn.textContent=a("previewAreaLabel")),Tn&&(Tn.textContent=a("previewPointLabel")),document.querySelector("#new-type-choice-modal h4").textContent=a("createNewElementType"),document.querySelector("#new-type-choice-modal p").textContent=a("chooseBaseType"),document.getElementById("choose-type-area").textContent=a("choiceArea"),document.getElementById("choose-type-point").textContent=a("choicePoint"),document.getElementById("new-type-choice-cancel").textContent=a("cancel"),document.getElementById("input-prompt-ok").textContent=a("ok"),document.getElementById("input-prompt-cancel").textContent=a("cancel"),document.getElementById("confirm-ok").textContent=a("ok"),document.getElementById("confirm-cancel").textContent=a("cancel");{const g=document.getElementById("room-contents-title");g&&(g.textContent=a("roomContentsTitle"));const x=document.getElementById("room-contents-new-item");x&&(x.placeholder=a("roomContentsPlaceholder"));const W=document.getElementById("room-contents-add-btn");W&&(W.textContent=a("roomContentsAdd"));const V=document.getElementById("room-contents-save");V&&(V.textContent=a("ok"));const $=document.getElementById("room-contents-cancel");$&&($.textContent=a("cancel"))}{const g=document.getElementById("occupancy-title");g&&(g.textContent=a("occupancyTitle"));const x=document.getElementById("occupancy-type");x&&(x.options[0].text=a("occupancyTypeWeekday"),x.options[1].text=a("occupancyTypeDate"),x.options[2].text=a("occupancyTypeRange"));const W=document.getElementById("occupancy-type-label");W&&(W.textContent=a("occupancyTypeLabel"));const V=document.getElementById("occupancy-weekday");V&&(V.options[0].text=a("weekdayMon"),V.options[1].text=a("weekdayTue"),V.options[2].text=a("weekdayWed"),V.options[3].text=a("weekdayThu"),V.options[4].text=a("weekdayFri"),V.options[5].text=a("weekdaySat"),V.options[6].text=a("weekdaySun"));const $=document.getElementById("occupancy-weekday-label");$&&($.textContent=a("occupancyWeekdayLabel"));const G=document.getElementById("occupancy-date-label");G&&(G.textContent=a("occupancyDateLabel"));const U=document.getElementById("occupancy-start-label");U&&(U.textContent=a("occupancyStartLabel"));const K=document.getElementById("occupancy-end-label");K&&(K.textContent=a("occupancyEndLabel"));const J=document.getElementById("occupancy-range-start-label");J&&(J.textContent=a("occupancyRangeStartLabel"));const ee=document.getElementById("occupancy-range-end-label");ee&&(ee.textContent=a("occupancyRangeEndLabel"));const oe=document.getElementById("occupancy-note");oe&&(oe.placeholder=a("occupancyNotePlaceholder"));const re=document.getElementById("occupancy-note-label");re&&(re.textContent=a("occupancyNoteLabel"));const ye=document.getElementById("occupancy-add-btn");ye&&(ye.textContent=a("occupancyAdd"));const le=document.getElementById("occupancy-save");le&&(le.textContent=a("ok"));const se=document.getElementById("occupancy-cancel");se&&(se.textContent=a("cancel"))}{const g=document.getElementById("opening-hours-title");g&&(g.textContent=a("openingHoursTitle"));const x=document.getElementById("opening-hours-weekly-label");x&&(x.textContent=a("openingHoursWeekly"));const W=document.getElementById("opening-hours-exceptions-label");W&&(W.textContent=a("openingHoursExceptions"));const V=document.getElementById("opening-hours-ranges-label");V&&(V.textContent=a("openingHoursRanges"));const $=document.getElementById("opening-hours-weekday-label");$&&($.textContent=a("occupancyWeekdayLabel"));const G=document.getElementById("opening-hours-start-label");G&&(G.textContent=a("occupancyStartLabel"));const U=document.getElementById("opening-hours-end-label");U&&(U.textContent=a("occupancyEndLabel"));const K=document.getElementById("opening-hours-weekday");K&&(K.options[0].text=a("weekdayMon"),K.options[1].text=a("weekdayTue"),K.options[2].text=a("weekdayWed"),K.options[3].text=a("weekdayThu"),K.options[4].text=a("weekdayFri"),K.options[5].text=a("weekdaySat"),K.options[6].text=a("weekdaySun"));const J=document.getElementById("opening-hours-ex-date-label");J&&(J.textContent=a("occupancyDateLabel"));const ee=document.getElementById("opening-hours-ex-start-label");ee&&(ee.textContent=a("occupancyStartLabel"));const oe=document.getElementById("opening-hours-ex-end-label");oe&&(oe.textContent=a("occupancyEndLabel"));const re=document.getElementById("opening-hours-range-start-label");re&&(re.textContent=a("occupancyRangeStartLabel"));const ye=document.getElementById("opening-hours-range-end-label");ye&&(ye.textContent=a("occupancyRangeEndLabel"));const le=document.getElementById("opening-hours-range-time-start-label");le&&(le.textContent=a("occupancyStartLabel"));const se=document.getElementById("opening-hours-range-time-end-label");se&&(se.textContent=a("occupancyEndLabel"));const ve=document.getElementById("opening-hours-add-rule");ve&&(ve.textContent=a("addRule"));const xe=document.getElementById("opening-hours-add-exception");xe&&(xe.textContent=a("addException"));const he=document.getElementById("opening-hours-add-range");he&&(he.textContent=a("addRange"));const $e=document.getElementById("opening-hours-save");$e&&($e.textContent=a("ok"));const Ue=document.getElementById("opening-hours-cancel");Ue&&(Ue.textContent=a("cancel"))}document.getElementById("ctx-menu-rename").textContent=a("rename"),document.getElementById("ctx-menu-copy").textContent=a("copy");{const g=document.getElementById("ctx-menu-delete");g&&(g.textContent=a("delete"))}{const g=document.querySelector(".context-menu .has-submenu");g&&g.childNodes[0]&&(g.childNodes[0].textContent=a("changeType"))}{const g=document.getElementById("file-menu-trigger");g&&(g.textContent=a("file"))}{const g=document.getElementById("output-menu-trigger");g&&(g.textContent=a("output"))}{const g=document.getElementById("overview-menu-trigger");g&&(g.textContent=a("overview"))}const B={de:"Deutsch",en:"English"},C=e.activeLanguage,P=B[C]||C.toUpperCase();if(nr.textContent=P,De){const g=De.querySelector('button[data-lang="en"]'),x=De.querySelector('button[data-lang="de"]');g&&(g.textContent="English"),x&&(x.textContent="Deutsch")}const M=e.activeTheme==="dark";or.title=a(M?"lightMode":"darkMode"),Gt&&(Gt.src=M?"assets/lightMode.png":"assets/darkMode.png"),Wt&&(Wt.src=M?"assets/language-dark.png":"assets/language-light.png"),document.querySelector("#element-type-select optgroup:nth-child(1)")?.setAttribute("label",a("optgroupAreas")),document.querySelector("#element-type-select optgroup:nth-child(2)")?.setAttribute("label",a("optgroupPointElements")),document.querySelector("#element-type-select optgroup:nth-child(3)")?.setAttribute("label",a("optgroupConnectors"));const j=document.querySelector('label[for="properties-description-input"]');j&&(j.textContent=a("description"));const N=document.querySelector('label[for="properties-room-number-input"]');N&&(N.textContent=a("roomNumber"));const _=document.querySelector('label[for="properties-designation-select"]');_&&(_.textContent=a("designation"));const O=document.querySelector('label[for="properties-opening-hours-input"]');O&&(O.textContent=a("openingHours"));const X=document.getElementById("open-opening-hours-modal-btn");X&&(X.textContent=a("openingHoursBtn"));const Y=document.getElementById("open-occupancy-modal-btn");Y&&(Y.textContent=a("occupancyBtn"));const Q=document.querySelector('label[for="properties-is-empty-checkbox"] span');Q&&(Q.textContent=a("isEmptyArea"))}function Ks(t){if(e.activeLanguage===t)return;const o=e.activeLanguage;ni(t),localStorage.setItem("imd_editor_language",t),e.activeLanguage=t,document.documentElement.lang=t,nr.textContent=t==="en"?"English":"Deutsch";const n=a("unnamedProject",o),r=a("unnamedProject",t);e.project.properties.projectName===n&&(e.project.properties.projectName=r,Qe&&(Qe.value=r),R()),Ws(),ae(),fe(),rt(),ue(),Z()}function Us(t){e.activeTheme===t&&document.body.getAttribute("data-theme")===t||(e.activeTheme=t,document.body.setAttribute("data-theme",t),localStorage.setItem("imd_editor_theme",t),Gt&&(Gt.src=t==="dark"?"assets/lightMode.png":"assets/darkMode.png"),Wt&&(Wt.src=t==="dark"?"assets/language-dark.png":"assets/language-light.png"),Ws(),H())}function jl(){pe.addEventListener("wheel",El,{passive:!1}),pe.addEventListener("contextmenu",Sl),window.addEventListener("click",Oe),pe.addEventListener("mousedown",p=>{if(p.button===1||e.currentMode==="pan"&&p.button===0){Ji(p);return}if(p.button!==0)return;const v=zt({x:p.offsetX,y:p.offsetY});if((e.currentMode==="angle-edit"||e.currentMode==="parallel-edit"||e.isAltPressed&&e.currentMode==="select")&&e.hoveredEdgeIndex!==-1&&e.hoveredFeatureId){const C=e.hoveredFeatureId,P=e.hoveredEdgeIndex;if(e.currentMode==="angle-edit"&&(!e.anglePickFeatureId||e.anglePickFeatureId!==C)){e.anglePickFeatureId=C,e.anglePickFirstEdgeIndex=P;const M=new CustomEvent("imd-info",{detail:{title:a("tools"),message:a("angleEditStep1")}});document.dispatchEvent(M),H();return}if(e.currentMode==="angle-edit"&&e.anglePickFirstEdgeIndex===-1){e.anglePickFirstEdgeIndex=P,H();return}if(e.currentMode==="angle-edit"){const M=e.anglePickFirstEdgeIndex,j=P,N=e.project.features.find(Q=>Q.properties.id===C);if(e.anglePickFeatureId=null,e.anglePickFirstEdgeIndex=-1,!N||N.geometry.type!=="Polygon")return;const _=N.geometry.coordinates[0],O=_.length-1;if(!((j-M+O)%O===1||(M-j+O)%O===1)){const Q=new CustomEvent("imd-info",{detail:{title:a("tools"),message:a("angleEditInvalidAdj")}});document.dispatchEvent(Q);return}const Y=(M+1)%O;Pe(a("editAnglePrompt")).then(Q=>{const g=Q?parseFloat(Q):NaN;if(Number.isNaN(g)||g<=0||g>=360)return;const x=Y,W=_[(x-1+O)%O],V=_[x],$=(x+1)%O,G=_[$],U=W[0]-V[0],K=W[1]-V[1],J=Math.hypot(U,K)||1,ee=U/J,oe=K/J,re=Math.hypot(G[0]-V[0],G[1]-V[1])||1,ye=g*Math.PI/180,le=Math.cos(ye),se=Math.sin(ye),ve=ee*le-oe*se,xe=ee*se+oe*le,he=ee*le+oe*se,$e=-ee*se+oe*le,Ue=(G[0]-V[0])/re,Zt=(G[1]-V[1])/re,Dn=Math.acos(Math.max(-1,Math.min(1,ve*Ue+xe*Zt))),An=Math.acos(Math.max(-1,Math.min(1,he*Ue+$e*Zt))),lr=Dn<=An,Ys=lr?ve:he,Zs=lr?xe:$e,Js=V[0]+Ys*re,Xs=V[1]+Zs*re;_[$]=[Js,Xs],_[O]=_[0],R(),H(),q();const Qs=new CustomEvent("imd-info",{detail:{title:a("tools"),message:a("angleEditDone")}});document.dispatchEvent(Qs)});return}else if(e.currentMode==="parallel-edit"){if(!e.parallelPickFeatureId||e.parallelPickFeatureId!==C){e.parallelPickFeatureId=C,e.parallelPickFirstEdgeIndex=P;const he=new CustomEvent("imd-info",{detail:{title:a("tools"),message:a("parallelEditStep1")}});document.dispatchEvent(he),H();return}if(e.parallelPickFirstEdgeIndex===-1){e.parallelPickFirstEdgeIndex=P,H();return}const M=e.parallelPickFirstEdgeIndex,j=P,N=e.project.features.find(he=>he.properties.id===C);if(e.parallelPickFeatureId=null,e.parallelPickFirstEdgeIndex=-1,!N||N.geometry.type!=="Polygon")return;const _=N.geometry.coordinates[0],O=_.length-1,X=_[M],Y=_[(M+1)%O],Q=_[j],g=_[(j+1)%O],x=Y[0]-X[0],W=Y[1]-X[1],V=g[0]-Q[0],$=g[1]-Q[1],G=Math.hypot(x,W)||1,U=Math.hypot(V,$)||1,K=x/G,J=W/G,ee=V/U,oe=$/U,re=K*ee+J*oe,ye=re>=0?K:-K,le=re>=0?J:-J,se=Q[0]+ye*G,ve=Q[1]+le*G;_[(j+1)%O]=[se,ve],_[O]=_[0],R(),H(),q();const xe=new CustomEvent("imd-info",{detail:{title:a("tools"),message:a("parallelEditDone")}});document.dispatchEvent(xe);return}}if(e.currentMode==="select"&&sl(v))return;const B=Ee(v);if((e.currentMode==="select"||e.currentMode==="move-element")&&B){if(e.isCtrlPressed){Gs(v);return}const C=B.properties.id;e.selectedFeatureIds.includes(C)||(e.selectedFeatureIds=[C],ue(),H()),nl(v);return}wl(v)}),window.addEventListener("mouseup",p=>{Qi(),p.button===0&&(rl(),ll(),Te&&Te.stop3DDrag())}),window.addEventListener("mousemove",p=>{const v=pe.getBoundingClientRect();if(e.mousePosScreen={x:p.clientX-v.left,y:p.clientY-v.top},e.mousePos=zt(e.mousePosScreen),vs.style.top=`${e.mousePosScreen.y}px`,xs.style.left=`${e.mousePosScreen.x}px`,no&&(no.textContent=`X: ${e.mousePos.x.toFixed(2)} m | Y: ${e.mousePos.y.toFixed(2)} m`),e.isPanning){Xi(p);return}if(e.isEditingPath){il(e.mousePos);return}if(e.isMovingElement){ol(e.mousePos);return}if(e.threeDIsDragging&&Te){Te.do3DDrag(p);return}let B=!1;if(e.currentMode==="scissors"){let C;if(e.selectedFeatureIds.length===1){const P=e.project.features.find(M=>M.properties.id===e.selectedFeatureIds[0]);P&&P.geometry.type==="Polygon"&&(C=P)}else{const P=Ee(e.mousePos);P&&P.geometry.type==="Polygon"&&(C=P)}if(C){const P=wt(e.mousePos,C.geometry);(P.index!==e.hoveredEdgeIndex||P.index!==-1&&e.hoveredFeatureId!==C.properties.id)&&(e.hoveredEdgeIndex=P.index,e.hoveredFeatureId=P.index!==-1?C.properties.id:null,B=!0)}else e.hoveredEdgeIndex!==-1&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0)}else if(e.isAltPressed&&e.currentMode==="select"&&e.selectedFeatureIds.length===1){const C=e.project.features.find(P=>P.properties.id===e.selectedFeatureIds[0]);if(C&&C.geometry.type==="Polygon"){const P=wt(e.mousePos,C.geometry);(P.index!==e.hoveredEdgeIndex||P.index!==-1&&e.hoveredFeatureId!==C.properties.id)&&(e.hoveredEdgeIndex=P.index,e.hoveredFeatureId=P.index!==-1?C.properties.id:null,B=!0)}}else if(e.currentMode==="angle-edit"){const C=Ee(e.mousePos);if(C&&C.geometry.type==="Polygon"){const P=wt(e.mousePos,C.geometry);(P.index!==e.hoveredEdgeIndex||P.index!==-1&&e.hoveredFeatureId!==C.properties.id)&&(e.hoveredEdgeIndex=P.index,e.hoveredFeatureId=P.index!==-1?C.properties.id:null,B=!0)}else e.hoveredEdgeIndex!==-1&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0)}else e.hoveredEdgeIndex!==-1&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0);if(e.currentMode==="door"){const C=Ee(e.mousePos);if(C&&C.geometry.type==="Polygon"){const P=wt(e.mousePos,C.geometry);(P.index!==e.hoveredEdgeIndex||P.index!==-1&&e.hoveredFeatureId!==C.properties.id)&&(e.hoveredEdgeIndex=P.index,e.hoveredFeatureId=P.index!==-1?C.properties.id:null,B=!0)}else if(C&&C.geometry.type==="LineString"){const P=Jr(e.mousePos,C.geometry);(P.index!==e.hoveredEdgeIndex||P.index!==-1&&e.hoveredFeatureId!==C.properties.id)&&(e.hoveredEdgeIndex=P.index,e.hoveredFeatureId=P.index!==-1?C.properties.id:null,B=!0)}else(e.hoveredEdgeIndex!==-1||e.hoveredFeatureId)&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0)}(e.tempShape||B||e.isShiftPressed)&&(H(),q())}),pe.addEventListener("dblclick",p=>{p.preventDefault();const v={x:p.offsetX,y:p.offsetY},B=zt(v);if(e.showDimensions.angles){const C=e.measureLabels.find(P=>P.type==="angle"&&B.x>=P.bx&&B.x<=P.bx+P.w&&B.y>=P.by&&B.y<=P.by+P.h);if(C&&C.featureId!=null&&typeof C.vertexIndex=="number"){Pe(a("editAnglePrompt")).then(P=>{const M=P?parseFloat(P):NaN;if(!Number.isNaN(M)&&M>0&&M<360){const j=e.project.features.find(N=>N.properties.id===C.featureId);if(j&&j.geometry.type==="Polygon"){const N=j.geometry.coordinates[0],_=N.length-1,O=C.vertexIndex,X=N[(O-1+_)%_],Y=N[O],Q=(O+1)%_,g=N[Q],x=X[0]-Y[0],W=X[1]-Y[1],V=Math.hypot(x,W)||1,$=x/V,G=W/V,U=Math.hypot(g[0]-Y[0],g[1]-Y[1])||1,K=M*Math.PI/180,J=Math.cos(K),ee=Math.sin(K),oe=$*J-G*ee,re=$*ee+G*J,ye=$*J+G*ee,le=-$*ee+G*J,se=(g[0]-Y[0])/U,ve=(g[1]-Y[1])/U,xe=Math.acos(Math.max(-1,Math.min(1,oe*se+re*ve))),he=Math.acos(Math.max(-1,Math.min(1,ye*se+le*ve))),$e=xe<=he,Ue=$e?oe:ye,Zt=$e?re:le,Dn=Y[0]+Ue*U,An=Y[1]+Zt*U;N[Q]=[Dn,An],N[_]=N[0],R(),H(),q()}}});return}}e.currentMode==="polygon"&&zi()}),eo.addEventListener("mousedown",yr),to.addEventListener("mousedown",yr),ws.addEventListener("dblclick",()=>{e.scale=1,e.pan={x:0,y:0},bt(),H()}),document.getElementById("mode-screenshot")?.addEventListener("click",()=>{const p=document.getElementById("canvas");if(!p)return;const v=document.createElement("a"),B=e.activeLanguage==="de"?"karte":"map",C=e.activeFloorId||"screenshot";v.download=`${B}-${C}.png`,v.href=p.toDataURL("image/png"),v.click()}),_o.addEventListener("click",p=>{p.stopPropagation(),De.style.display=De.style.display==="block"?"none":"block"}),De.addEventListener("click",p=>{const B=p.target.dataset.lang;B&&(Ks(B),De.style.display="none")}),window.addEventListener("click",p=>{!_o.contains(p.target)&&!De.contains(p.target)&&(De.style.display="none")}),or.addEventListener("click",()=>{Us(e.activeTheme==="light"?"dark":"light")}),Qe.addEventListener("input",()=>{e.project.properties.projectName=Qe.value,R(),ae(),q()}),document.getElementById("newProjectBtn").addEventListener("click",async()=>{if(!await Fe(a("alert_newProjectConfirm")))return;const v=ze(),B=v.length>0?v[0]:Ve,C=await Pe(a("prompt_newFloorName"),B);rs(!1,C||Ve)}),document.getElementById("saveProjectBtn").addEventListener("click",()=>cr(Qe.value)),document.getElementById("exportGeoJsonBtn").addEventListener("click",()=>cr(Qe.value)),document.getElementById("loadProjectFromServerBtn").addEventListener("click",async()=>{const p=document.getElementById("server-load-panel");if(p.classList.contains("hidden")){if(!ge.isAvailable()){alert('Backend nicht verfügbar. Bitte API unter "/app/api" und "/api" starten oder Proxy konfigurieren.');return}p.classList.remove("hidden"),await n()}else p.classList.add("hidden")}),document.getElementById("saveProjectToServerBtn").addEventListener("click",async()=>{const p=document.getElementById("server-load-panel");if(p.classList.contains("hidden")){if(!ge.isAvailable()){alert('Backend nicht verfügbar. Bitte API unter "/app/api" und "/api" starten oder Proxy konfigurieren.');return}p.classList.remove("hidden"),await n()}});const o=document.getElementById("serverSavePanelBtn");o&&o.addEventListener("click",async()=>{if(!ge.isAvailable()){alert("Backend nicht verfügbar. Speichern zum Server ist derzeit deaktiviert.");return}const p=document.getElementById("serverProjectSelect"),v=document.getElementById("serverVersionSelect"),B=p?.value,C=B&&B!==""?parseInt(B,10):null,P=v?.value,M=P&&P!==""?parseInt(P,10):void 0;if(C!==null&&M!==void 0){const N=p?.selectedOptions?.[0]?.textContent||`#${C}`;if(!await Fe(a("confirmOverwriteVersion",void 0,N,M)))return}const j=await ns(C,M);await n(),p&&(p.value=String(j.id)),await(async()=>{const N=document.getElementById("serverVersionSelect");N&&(N.value=String(j.version))})()});async function n(){const p=document.getElementById("serverProjectSelect"),v=document.getElementById("serverVersionSelect"),B=document.getElementById("serverSaveHint");if(p.innerHTML="",v.innerHTML="",!ge.isAvailable()){const $=document.createElement("option");$.value="",$.textContent="Backend nicht verfügbar",$.disabled=!0,p.appendChild($),B&&(B.textContent="Kein Backend verbunden. Bitte API starten oder Proxy konfigurieren.");return}let P=(await ge.listProjects()).slice();const M=$=>{p.innerHTML="";const G=document.createElement("option");G.value="",G.textContent=a("newProjectOption"),p.appendChild(G),$.forEach(U=>{const K=document.createElement("option");K.value=String(U.id),K.textContent=`${U.name} (#${U.id})`,p.appendChild(K)}),$.length>0?p.value=String($[0].id):p.value=""};M(P),await W();const j=document.getElementById("serverRefreshBtn");j&&(j.onclick=async()=>{P=(await ge.listProjects()).slice(),M(P),await W(),x(),V()});const N=document.getElementById("serverVersionRefreshBtn");N&&(N.onclick=async()=>{await W(),x(),V()}),p.onchange=async()=>{await W(),x(),V()},v.onchange=()=>{x(),V()};const _=document.getElementById("serverLoadBtn");_&&(_.onclick=async()=>{const $=parseInt(p.value,10),G=v.value,U=G?parseInt(G,10):void 0;await dr($,U)});const O=document.getElementById("serverLoadLatestBtn");O&&(O.onclick=async()=>{const $=parseInt(p.value,10);await dr($)});const X=document.getElementById("serverProjectAddBtn");X&&(X.onclick=async()=>{await Fe(a("infoNewProject")),p.value="",await W(),x()});const Y=document.getElementById("serverProjectDeleteBtn");Y&&(Y.onclick=async()=>{const $=parseInt(p.value,10);if(isNaN($))return;const G=p.selectedOptions?.[0]?.textContent||`#${$}`;if(!await Fe(a("confirmDeleteProject",void 0,G,$)))return;await ge.delete($),P=(await ge.listProjects()).slice(),M(P),await W(),x()});const Q=document.getElementById("serverVersionAddBtn");Q&&(Q.onclick=()=>{Fe(a("infoNewVersion")),v.value="",x()});const g=document.getElementById("serverVersionDeleteBtn");g&&(g.onclick=async()=>{const $=parseInt(p.value,10);if(isNaN($))return;const G=v.value;if(!G){await Fe(a("alertSelectVersionFirst"));return}const U=parseInt(G,10),K=p.selectedOptions?.[0]?.textContent||`#${$}`;await Fe(a("confirmDeleteVersion",void 0,K,U,$))&&(await ge.delete($,U),await W(),x())});function x(){const $=document.getElementById("serverProjectDeleteBtn"),G=document.getElementById("serverVersionDeleteBtn"),U=document.getElementById("serverProjectAddBtn"),K=document.getElementById("serverVersionAddBtn"),J=!!p.value,ee=!!v.value;$&&($.disabled=!J),G&&(G.disabled=!J||!ee),U&&(U.disabled=!1),K&&(K.disabled=!J)}async function W(){const $=parseInt(p.value,10);v.innerHTML="";const G=document.createElement("option");if(G.value="",G.textContent=a("newVersionOption"),v.appendChild(G),isNaN($)){v.disabled=!0,V();return}else v.disabled=!1;(await ge.listVersions($)).sort((K,J)=>J-K).forEach(K=>{const J=document.createElement("option");J.value=String(K),J.textContent=String(K),v.appendChild(J)}),x(),V()}x(),V();function V(){if(!B)return;const $=p.value,G=v.value;if(!$){B.textContent=a("infoNewProject");return}const U=p.selectedOptions?.[0]?.textContent||`#${$}`;if(!G){B.textContent=a("infoNewVersion");return}const K=parseInt(G,10);B.textContent=a("saveTargetVersion",void 0,U,K)}}document.getElementById("loadProjectInput").addEventListener("change",p=>{const v=p.target.files?.[0];v&&(Ii(v),p.target.value="")}),document.getElementById("showGeoJsonBtn").addEventListener("click",()=>{const p=document.getElementById("live-geojson-output"),v=document.getElementById("showGeoJsonBtn"),B=p.style.display==="block";p.style.display=B?"none":"block",v.querySelector("span").textContent=a(B?"showLiveCode":"hideCode")}),document.getElementById("addFloorBtn").addEventListener("click",async()=>{const p=ze(),v=p.length===0?Ve:`Etage ${p.length+1}`,B=a("prompt_newFloorName"),C=await Pe(B,v);C&&mr(C)}),rr.addEventListener("click",async()=>{if(!e.activeFloorId){alert(a("alert_noActiveFloor"));return}const p=a("prompt_renameFloor",e.activeLanguage,e.activeFloorId),v=await Pe(p,e.activeFloorId);v&&gr(v)}),oo.addEventListener("change",()=>{e.activeFloorId=oo.value,e.selectedFeatureIds=[],qe.disabled=!0,H()}),document.getElementById("floorplanInput").addEventListener("change",async p=>{const v=p.target.files?.[0];if(v)try{await Bi(v)}finally{p.target.value=""}}),document.getElementById("undoBtn").addEventListener("click",pr),document.getElementById("redoBtn").addEventListener("click",ur),qe.addEventListener("click",()=>{if(e.selectedFeatureIds.length>1){const p=Ee(e.mousePos);p&&(e.selectedFeatureIds=[p.properties.id])}zn()});const r=document.getElementById("copyBtn");r&&r.addEventListener("click",()=>{e.selectedFeatureIds.length,Wr()}),po&&po.addEventListener("click",()=>{const p=a("prompt_newFloorName");Pe(p,e.activeFloorId||"").then(v=>{v&&mr(v),Oe()})}),uo&&uo.addEventListener("click",()=>{if(!e.activeFloorId){alert(a("alert_noActiveFloor"));return}const p=a("prompt_renameFloor",e.activeLanguage,e.activeFloorId);Pe(p,e.activeFloorId).then(v=>{v&&gr(v),Oe()})}),["select","pan","move-element","angle-edit","parallel-edit","calibrate","merge","area","square","polygon","circle","line","arc","door","point"].forEach(p=>{const v=document.getElementById(`mode-${p}`);v&&v.addEventListener("click",()=>{if(e.currentMode===p&&!["select","pan","move-element"].includes(p)){document.getElementById("mode-select")?.click();return}switch(e.currentMode=p,e.tempShape=null,["area","polygon","circle","line","arc","door","point"].includes(p)&&(e.selectedFeatureIds=[]),rt(),document.querySelectorAll(".tool-btn").forEach(M=>M.classList.remove("active")),v.classList.add("active"),p){case"pan":case"move-element":pe.style.cursor="grab";break;case"select":pe.style.cursor="default";break;case"angle-edit":{pe.style.cursor="default",e.anglePickFeatureId=null,e.anglePickFirstEdgeIndex=-1,e.showDimensions.angles=!0;const M=new CustomEvent("imd-info",{detail:{title:a("tools"),message:a("angleEditHintShort")}});document.dispatchEvent(M);break}case"parallel-edit":{pe.style.cursor="default",e.parallelPickFeatureId=null,e.parallelPickFirstEdgeIndex=-1;const M=new CustomEvent("imd-info",{detail:{title:a("tools"),message:a("parallelEditHintShort")}});document.dispatchEvent(M);break}case"calibrate":{pe.style.cursor="crosshair";const M=new CustomEvent("imd-info",{detail:{title:a("calibrateScale"),message:a("calibratePrompt")}});document.dispatchEvent(M);break}case"merge":pe.style.cursor="default",bn();{const M=new CustomEvent("imd-info",{detail:{title:a("merge"),message:a("mergeHintShort")}});document.dispatchEvent(M)}break;case"scissors":pe.style.cursor="default";break;default:pe.style.cursor="crosshair";break}const C=["area","square","polygon","circle"].includes(p),P=p==="point";Es.style.display=C||P?"block":"none",C&&Gr("area"),P&&Gr("point"),qe.disabled=e.selectedFeatureIds.length===0,ue(),H()})}),document.getElementById("show3DViewBtn").addEventListener("click",async()=>{const p=document.getElementById("floor3DView"),v=document.querySelector(".canvas-wrapper"),B=document.getElementById("show3DViewBtn").querySelector("span");p.style.display==="flex"?(p.style.display="none",v.style.display="grid",B.textContent=a("preview3D")):(Te||(Te=await lt(()=>import("./3d-BmlCx_QG.js"),__vite__mapDeps([0,1]))),Nt||(Nt=await lt(()=>import("./floor3D-DrR2gta5.js"),[])),Te.setup3DViewControls(),p.style.display="flex",v.style.display="none",B.textContent=a("backToApp"),e.threeDPan={x:50,y:50},e.threeDScale=.8,Te.update3DFloorSelector(),Nt.render3DFloorStack(e.project,"floor3DContent"),p.style.cursor="grab",p.addEventListener("mousedown",Te.start3DDrag),p.addEventListener("wheel",Te.handle3DZoom,{passive:!1}))}),qi(H);const s=document.querySelector(".toolbar");s&&s.addEventListener("wheel",p=>{p.stopPropagation()},{passive:!0});function l(){const p=document.getElementById("intro-content"),v=document.getElementById("intro-logo-wrapper"),B=document.getElementById("intro-logo"),C=document.getElementById("intro-logo-row");if(v&&B&&(v.style.display="block",B.src="assets/company_logo.png",B.onerror=()=>{v.style.display="none"}),C){C.innerHTML="";const P=["assets/company_logo.png","assets/company_logo2.png","assets/company_logo3.png"];for(const M of P){const j=document.createElement("img");j.className="intro-logo-img",j.alt="Logo",j.src=M,j.onerror=()=>j.remove(),C.appendChild(j)}C.style.display="flex"}p&&(p.innerHTML=a("intro_full_content",e.activeLanguage)),ke.classList.remove("hidden")}document.getElementById("Einleitung").addEventListener("click",l);function c(p,v){const B=document.getElementById("intro-content"),C=document.getElementById("intro-logo-wrapper"),P=document.getElementById("intro-logo-row");C&&(C.style.display="none"),P&&(P.style.display="none"),B&&(B.innerHTML=`
        <h2>${a(p,e.activeLanguage)}</h2>
        ${v}
      `),ke.classList.remove("hidden")}const d=`
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
  `;document.getElementById("sponsorsBtn")?.addEventListener("click",()=>{c("sponsorsButtonTitle",m)}),Is.addEventListener("click",()=>{ke.classList.add("hidden")}),Ss.addEventListener("click",()=>{ke.classList.add("hidden")}),document.addEventListener("imd-info",p=>{const v=p.detail||{},B=v.title||"Info",C=v.message||"",P=ke.querySelector("h2"),M=ke.querySelector("p"),j=ke.querySelector("h4"),N=ke.querySelector(".modal-content ul"),_=document.getElementById("intro-logo-wrapper"),O=document.getElementById("intro-logo-row"),X=document.getElementById("intro-content");P&&(P.textContent=B),M&&(M.textContent=C),j&&(j.style.display="none"),N&&(N.style.display="none"),_&&(_.style.display="none"),O&&(O.style.display="none"),X&&(X.innerHTML=""),ke.classList.remove("hidden")}),xn.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&(p.properties.label=xn.value,R(),xt(),q())}),so.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&(p.properties.description=so.value,R(),xt(),q())}),In.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&(p.properties.opening_hours=In.value,R(),xt(),q())}),io.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&(p.properties.room_number=io.value,R(),xt(),q())}),lo.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&(p.properties.designation=lo.value,R(),xt(),q())}),En.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&(p.properties.subType=En.value,R(),Z(),q(),ae(),ue())}),wn.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);if(p){p.properties.isEmpty=wn.checked;const v=document.getElementById("properties-is-accessible-checkbox");p.properties.isEmpty?(p.properties.isAccessible=!1,v&&(v.checked=!1,v.disabled=!0)):v&&(v.disabled=!1),R(),Z(),q(),ue(),ae()}});const b=document.getElementById("properties-is-accessible-checkbox");b&&b.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&p.properties.type==="area"&&!p.properties.isEmpty&&(p.properties.isAccessible=b.checked,R(),Z(),q(),ue(),ae())});const y=document.getElementById("beacon-uuid-input"),f=document.getElementById("beacon-serial-input"),I=document.getElementById("beacon-major-input"),h=document.getElementById("beacon-minor-input"),E=document.getElementById("beacon-installation-input"),w=document.getElementById("beacon-range-input"),k=document.getElementById("beacon-note-de-input"),F=document.getElementById("beacon-note-en-input"),L=document.getElementById("beacon-activation-start-date"),A=document.getElementById("beacon-activation-end-date"),z=document.getElementById("beacon-activation-start-time"),D=document.getElementById("beacon-activation-end-time");y?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&p.geometry.type==="Point"&&p.properties.subType==="beacon"&&(p.properties.beacon_uuid=y.value,R(),q(),ae(),H())}),f?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&p.geometry.type==="Point"&&p.properties.subType==="beacon"&&(p.properties.beacon_serial=f.value,R(),q(),ae(),H())}),I?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);if(p&&p.geometry.type==="Point"&&p.properties.subType==="beacon"){const v=parseInt(I.value,10);Number.isNaN(v)?delete p.properties.beacon_major:p.properties.beacon_major=v,R(),q(),ae(),H()}}),h?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);if(p&&p.geometry.type==="Point"&&p.properties.subType==="beacon"){const v=parseInt(h.value,10);Number.isNaN(v)?delete p.properties.beacon_minor:p.properties.beacon_minor=v,R(),q(),ae(),H()}}),E?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&p.geometry.type==="Point"&&p.properties.subType==="beacon"&&(p.properties.beacon_installation=E.value,R(),q(),ae(),H())}),w?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);if(p&&p.geometry.type==="Point"&&p.properties.subType==="beacon"){const v=parseFloat(w.value);Number.isNaN(v)?delete p.properties.beacon_range:p.properties.beacon_range=v,R(),q(),ae(),H()}}),k?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&p.geometry.type==="Point"&&p.properties.subType==="beacon"&&(p.properties.beacon_note_de=k.value,R(),q(),ae(),H())}),F?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&p.geometry.type==="Point"&&p.properties.subType==="beacon"&&(p.properties.beacon_note_en=F.value,R(),q(),ae(),H())}),L?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&p.geometry.type==="Point"&&p.properties.subType==="beacon"&&(p.properties.beacon_activation=p.properties.beacon_activation||{},p.properties.beacon_activation.startDate=L.value,R(),q(),ae(),H())}),A?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&p.geometry.type==="Point"&&p.properties.subType==="beacon"&&(p.properties.beacon_activation=p.properties.beacon_activation||{},p.properties.beacon_activation.endDate=A.value,R(),q(),ae(),H())}),z?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&p.geometry.type==="Point"&&p.properties.subType==="beacon"&&(p.properties.beacon_activation=p.properties.beacon_activation||{},p.properties.beacon_activation.startTime=z.value,R(),q(),ae(),H())}),D?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const p=e.project.features.find(v=>v.properties.id===e.selectedFeatureIds[0]);p&&p.geometry.type==="Point"&&p.properties.subType==="beacon"&&(p.properties.beacon_activation=p.properties.beacon_activation||{},p.properties.beacon_activation.endTime=D.value,R(),q(),ae(),H())}),ks.addEventListener("click",zn),Sn&&Sn.addEventListener("click",()=>{Bl(),Oe()}),Ps.addEventListener("click",kl),ao.addEventListener("click",Wr),mo&&mo.addEventListener("click",()=>{Kr(),Oe()}),go&&go.addEventListener("click",()=>{Ml(),Oe()}),yo&&yo.addEventListener("click",()=>{Ur(),Oe()}),ho&&ho.addEventListener("click",()=>{Yr(),Oe()}),Vt&&Vt.addEventListener("click",()=>{Kr()}),Bs?.addEventListener("click",()=>Ur()),Cs?.addEventListener("click",()=>Yr()),Hs.addEventListener("click",dl),Ns.addEventListener("click",hr),Os.addEventListener("click",pl),$s.addEventListener("click",()=>kn.classList.remove("hidden")),Ao.addEventListener("click",ul),Rs.addEventListener("click",()=>fr("area")),qs.addEventListener("click",()=>fr("point")),Vs.addEventListener("click",()=>kn.classList.add("hidden")),[Mo,To,Fo,jo,Do,zo,No].forEach(p=>p.addEventListener("input",us)),window.addEventListener("keydown",p=>{if(document.activeElement?.tagName!=="INPUT"){if(p.key==="Escape"){Lo.classList.contains("hidden")?e.tempShape&&(e.tempShape=null,H(),sr()):hr(),e.selectedFeatureIds=[],qe.disabled=!0,ue(),bn(),H();const v=document.getElementById("mode-pan");v&&e.currentMode!=="pan"&&v.click()}if(p.key==="Shift"&&!e.isShiftPressed&&(e.isShiftPressed=!0,H()),p.key==="Control"&&!e.isCtrlPressed&&(e.isCtrlPressed=!0),p.key==="Alt"&&!e.isAltPressed&&(e.isAltPressed=!0,H()),p.key==="Delete"||p.key==="Backspace"){if(p.preventDefault(),e.editedFeatureId&&e.editedNodeIndex!==-1){const v=e.project.features.find(B=>B.properties.id===e.editedFeatureId);if(v&&v.geometry.type==="Polygon"){const B=v.geometry.coordinates[0];if(B.length>4){B.splice(e.editedNodeIndex,1),e.editedNodeIndex===0&&(B[B.length-1]=B[0]),e.editedNodeIndex=-1,R(),H();return}}}if(e.selectedFeatureIds.length>1&&!p.ctrlKey&&!p.metaKey){const v=Ee(e.mousePos);v&&(e.selectedFeatureIds=[v.properties.id])}zn()}if(p.ctrlKey||p.metaKey)switch(p.key.toLowerCase()){case"z":p.preventDefault(),pr();break;case"y":p.preventDefault(),ur();break;case"a":{p.preventDefault();const v=e.project.features.filter(B=>B.properties.floor===e.activeFloorId);e.selectedFeatureIds=v.map(B=>B.properties.id),qe.disabled=e.selectedFeatureIds.length===0,ue(),H();break}case"c":p.preventDefault(),Pl();break;case"v":p.preventDefault(),Cl();break}p.key==="Enter"&&e.currentMode==="merge"&&e.project.features.filter(C=>C.properties.floor===e.activeFloorId).filter(C=>e.selectedFeatureIds.includes(C.properties.id)&&C.geometry.type==="Polygon").length>=2&&(p.preventDefault(),Il())}}),window.addEventListener("keyup",p=>{p.key==="Shift"&&(e.isShiftPressed=!1,H()),p.key==="Control"&&(e.isCtrlPressed=!1),p.key==="Alt"&&(e.isAltPressed=!1,e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H())}),document.querySelectorAll(".toolbar-header").forEach(p=>{p.addEventListener("click",()=>{p.classList.toggle("collapsed")})})}function Dl(){Fl(),ii(),jl(),Ri(),e.scale=.7,e.pan={x:0,y:0},bt(),H();const t=localStorage.getItem("imd_editor_theme");Us(t||"light");const o=localStorage.getItem("imd_editor_language");Ks(o||"de"),ae(),rt(),ue()}function Al(){const t=document.getElementById("imd-date-picker"),o=document.getElementById("imd-dp-grid"),n=document.getElementById("imd-dp-month"),r=document.getElementById("imd-dp-prev"),i=document.getElementById("imd-dp-next"),s=document.getElementById("imd-dp-clear"),l=document.getElementById("imd-dp-today"),c=document.getElementById("imd-dp-target");if(!t||!o||!n||!r||!i||!s||!l||!c)return;const d=t,m=o,b=n,y=c;s.textContent=a("calendarClear"),l.textContent=a("calendarToday");let f=new Date,I=null;const h=(document.documentElement.lang||"de").toLowerCase().startsWith("de")?"de-DE":"en-US",E=new Intl.DateTimeFormat(h,{month:"long",year:"numeric"}),w=new Intl.DateTimeFormat(h,{weekday:"short"}),k=[];for(let p=0;p<7;p++){const v=new Date(2020,5,7+p);k.push(w.format(v))}function F(p){const v=p.getFullYear(),B=String(p.getMonth()+1).padStart(2,"0"),C=String(p.getDate()).padStart(2,"0");return`${v}-${B}-${C}`}function L(p){if(!p)return null;const v=p.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!v)return null;const B=Number(v[1]),C=Number(v[2])-1,P=Number(v[3]),M=new Date(B,C,P);return Number.isNaN(M.getTime())?null:M}function A(){b.textContent=E.format(f),m.innerHTML="",k.forEach(P=>{const M=document.createElement("div");M.className="imd-date-picker__dow",M.textContent=P,m.appendChild(M)});const B=(new Date(f.getFullYear(),f.getMonth(),1).getDay()+6)%7,C=new Date(f.getFullYear(),f.getMonth(),1-B);for(let P=0;P<42;P++){const M=new Date(C);M.setDate(C.getDate()+P);const j=document.createElement("div");j.className="imd-date-picker__day",M.getMonth()!==f.getMonth()&&j.classList.add("imd-date-picker__day--outside"),(M.getDay()===0||M.getDay()===6)&&j.classList.add("imd-date-picker__day--weekend");const _=new Date;M.getDate()===_.getDate()&&M.getMonth()===_.getMonth()&&M.getFullYear()===_.getFullYear()&&j.classList.add("imd-date-picker__day--today"),I&&M.getDate()===I.getDate()&&M.getMonth()===I.getMonth()&&M.getFullYear()===I.getFullYear()&&j.classList.add("imd-date-picker__day--selected"),j.textContent=String(M.getDate()),j.addEventListener("click",()=>{I=M;const O=document.getElementById(y.value);if(O){O.value=F(M);const X=new Event("input",{bubbles:!0});O.dispatchEvent(X)}D()}),m.appendChild(j)}}function z(p){I=L(p.value),f=I||new Date,y.value=p.id;const v=p.getBoundingClientRect();d.style.left=`${v.left+window.scrollX}px`,d.style.top=`${v.bottom+window.scrollY+6}px`,d.classList.add("open"),A()}function D(){d.classList.remove("open")}r.addEventListener("click",()=>{f.setMonth(f.getMonth()-1),A()}),i.addEventListener("click",()=>{f.setMonth(f.getMonth()+1),A()}),s.addEventListener("click",()=>{const p=document.getElementById(y.value);if(p){p.value="";const v=new Event("input",{bubbles:!0});p.dispatchEvent(v)}D()}),l.addEventListener("click",()=>{const p=new Date,v=document.getElementById(y.value);if(v){v.value=F(p);const B=new Event("input",{bubbles:!0});v.dispatchEvent(B)}D()}),document.addEventListener("click",p=>{const v=p.target;!d.contains(v)&&!v.closest('input[type="date"]')&&D()}),(()=>{document.querySelectorAll('input[type="date"]').forEach(p=>{p.id||(p.id=`date_${Math.random().toString(36).slice(2)}`),p.addEventListener("focus",v=>{v.preventDefault(),z(p)}),p.addEventListener("click",v=>{v.preventDefault(),z(p)})})})()}const Et=document.getElementById("simulateSignalBtn");Et?.addEventListener("click",()=>{e.showBeaconHeatmap=!e.showBeaconHeatmap;const t=Et.querySelector("span");t&&(t.textContent=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal")),Et.classList.toggle("active",e.showBeaconHeatmap),Et.setAttribute("aria-pressed",e.showBeaconHeatmap?"true":"false"),Et.title=e.showBeaconHeatmap?a("simulationOff"):a("simulateSignal"),e.showBeaconHeatmap,H()});const _l=document.getElementById("checkCoverageBtn");_l?.addEventListener("click",()=>{const t=oi();t.length>0?alert(`Analyse-Ergebnisse:

- `+t.join(`
- `)):alert(`Keine Probleme erkannt.

Alle Räume sind abgedeckt und haben ausreichend Beacon-Signalstärke (Trilateration möglich).`)});const zl=`<aside class="toolbar">
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
        <button id="mode-angle-edit" class="tool-btn" title="Winkel bearbeiten (2 Kanten wählen)">
          <span style="font-size: 20px; line-height: 1;">📐</span>
          <span>Winkel</span>
        </button>
        <button id="mode-parallel-edit" class="tool-btn" title="Parallel setzen (2 Kanten wählen)">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none">
            <path d="M4 7h16M4 17h16"></path>
          </svg>
          <span>Parallel</span>
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
`,Nl=`<aside id="backstage-panel" class="backstage-panel">
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
`,$l=`<div id="info-modal" class="modal hidden">
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
`;function Ol(){const t=document.getElementById("toolbar-container"),o=document.getElementById("backstage-container"),n=document.getElementById("modals-container");t&&(t.innerHTML=zl),o&&(o.innerHTML=Nl),n&&(n.innerHTML=$l)}document.addEventListener("DOMContentLoaded",()=>{Ol(),setTimeout(async()=>{const o=location.pathname.match(/\/app\/(floor|etage)\/(.+)$/);if(Dl(),o){ge.probeBackend().catch(()=>{});const r=decodeURIComponent(o[2]);e.activeFloorId=r;try{const c=(location.hash||"").match(/#proj=([^&]+)/);if(c&&c[1]){const d=decodeURIComponent(c[1]),m=decodeURIComponent(escape(atob(d))),b=JSON.parse(m);tt(b)}}catch{}if(!e.project?.features?.length)try{const l=sessionStorage.getItem("imd_editor_project")||localStorage.getItem("imd_editor_project");if(l){const c=JSON.parse(l);tt(c)}}catch{}[".app-header","#toolbar-container","#backstage-container","#page-scrollbar-y",".canvas-wrapper"].forEach(l=>{const c=document.querySelector(l);c&&(c.style.display="none")});const s=document.getElementById("floor3DView");s&&(s.style.display="flex",s.style.height="100vh",s.style.width="100vw"),e.threeDPan={x:50,y:50},e.threeDScale=.8,window.addEventListener("storage",async l=>{if(l.key==="imd_editor_project"&&l.newValue)try{const c=JSON.parse(l.newValue);tt(c),(await lt(()=>import("./floor3D-DrR2gta5.js"),[])).render3DFloorStack(e.project,"floor3DContent")}catch{}})}else Li(),ge.probeBackend().catch(()=>{}),R(),console.log("IMD Editor erfolgreich initialisiert.");(async()=>{const r=await lt(()=>import("./3d-BmlCx_QG.js"),__vite__mapDeps([0,1])),i=await lt(()=>import("./floor3D-DrR2gta5.js"),[]);r.setup3DViewControls(),r.update3DFloorSelector(),i.render3DFloorStack(e.project,"floor3DContent");const s=document.getElementById("floor3DView");s&&(s.style.cursor="grab",s.addEventListener("mousedown",r.start3DDrag),s.addEventListener("mousemove",r.do3DDrag),s.addEventListener("mouseup",r.stop3DDrag),s.addEventListener("mouseleave",r.stop3DDrag),s.addEventListener("wheel",r.handle3DZoom,{passive:!1}))})();const n=300*1e3;setInterval(async()=>{if(ge.isAvailable())try{await ns(e.currentServerProjectId,e.currentServerVersion)}catch{}try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}},n)},0)});export{ze as a,Se as b,at as c,a as g,Be as i,e as s,fe as u};
