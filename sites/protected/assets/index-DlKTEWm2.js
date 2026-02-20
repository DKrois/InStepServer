const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/3d-ojV9qoUz.js","assets/floor3D-B8MaNFXT.js"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const Js="modulepreload",Xs=function(t){return"/"+t},ir={},it=function(o,n,i){let s=Promise.resolve();if(n&&n.length>0){let d=function(m){return Promise.all(m.map(v=>Promise.resolve(v).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=d(n.map(m=>{if(m=Xs(m),m in ir)return;ir[m]=!0;const v=m.endsWith(".css"),f=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${f}`))return;const h=document.createElement("link");if(h.rel=v?"stylesheet":Js,v||(h.as="script"),h.crossOrigin="",h.href=m,c&&h.setAttribute("nonce",c),document.head.appendChild(h),v)return new Promise((S,g)=>{h.addEventListener("load",S),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${m}`)))})}))}function r(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&r(c.reason);return o().catch(r)})};let Yr="en";function p(t,o){return{de:t,en:o}}const nt={file:p("Datei","File"),output:p("Ausgabe","Output"),overview:p("Übersicht","Overview"),darkMode:p("Dunkles Thema","Dark Theme"),lightMode:p("Helles Thema","Light Theme"),backToApp:p("Zurück zur Anwendung","Back to Application"),filePanelTitle:p("Datei","File"),newProject:p("Neues Projekt","New Project"),loadProject:p("Projekt laden","Load Project"),saveProject:p("Projekt speichern","Save Project"),loadFromServer:p("Vom Server laden","Load from Server"),saveToServer:p("Zum Server speichern","Save to Server"),newProjectOption:p("(Neues Projekt)","(New Project)"),newVersionOption:p("(Neue Version)","(New Version)"),introduction:p("Einleitung","Introduction"),serverProject:p("Projekt","Project"),serverVersion:p("Version","Version"),refresh:p("Aktualisieren","Refresh"),load:p("Laden","Load"),latestVersion:p("Neueste Version","Latest Version"),save:p("Speichern","Save"),search:p("Suche","Search"),searchPlaceholder:p("Projekt suchen...","Search project..."),projectDetails:p("Projektdetails","Project Details"),detailId:p("ID:","ID:"),detailName:p("Name:","Name:"),detailLatest:p("Neueste Version:","Latest Version:"),detailFloorplans:p("Grundrisse:","Floorplans:"),detailCreated:p("Erstellt:","Created:"),detailUpdated:p("Aktualisiert:","Updated:"),confirmOverwriteVersion:p('Alte Version {1} von "{0}" überschreiben?','Overwrite old version {1} of "{0}"?'),add:p("Hinzufügen","Add"),deleteAction:p("Löschen","Delete"),confirmDeleteProject:p('Projekt "{0}" (# {1}) wirklich löschen? Dies entfernt alle Versionen.','Really delete project "{0}" (# {1})? This will remove all versions.'),confirmDeleteVersion:p('Version {1} von Projekt "{0}" (# {2}) löschen?','Delete version {1} of project "{0}" (# {2})?'),infoNewProject:p("Neues Projekt wird beim Speichern erstellt.","A new project will be created on save."),infoNewVersion:p("Neue Version wird beim Speichern erstellt.","A new version will be created on save."),saveTargetVersion:p('Speichern in Version {1} von "{0}".','Save into version {1} of "{0}".'),alertSelectVersionFirst:p("Bitte zuerst eine Version auswählen.","Please select a version first."),outputPanelTitle:p("Ausgabe","Output"),exportGeoJson:p("GeoJSON exportieren","Export GeoJSON"),showLiveCode:p("Live Code anzeigen","Show Live Code"),hideCode:p("Code ausblenden","Hide Code"),overviewPanelTitle:p("Projektübersicht","Project Overview"),unnamedProject:p("Unbenanntes Projekt","Unnamed Project"),stat_project:p("Projekt","Project"),stat_floors:p("Etagen","Floors"),stat_areas:p("Flächen","Areas"),stat_points:p("Punkte","Points"),overviewBeacons:p("Beacons","Beacons"),sponsoredBy:p("Gesponsert von","Sponsored by"),sponsoredByMinew:p("Gesponsert von MINEW","Sponsored by MINEW"),supportedByPalfinger:p("Unterstützt von PALFINGER","Supported by PALFINGER"),sponsorsButtonTitle:p("Sponsoren","Sponsors"),imprint:p("Impressum","Legal Notice"),contact:p("Kontakt","Contact"),privacy:p("Datenschutz","Privacy Policy"),project:p("Projekt","Project"),projectName:p("Projektname","Project Name"),enterProjectName:p("Projektname eingeben...","Enter project name..."),edit:p("Bearbeiten","Edit"),undo:p("Rückgängig","Undo"),redo:p("Wiederherstellen","Redo"),floors:p("Etagen","Floors"),currentFloor:p("Aktuelle Etage","Current Floor"),newFloor:p("Neue Etage","New Floor"),floorplan:p("Grundriss...","Floorplan..."),prompt_newFloorName:p("Name der neuen Etage:","Name of the new floor:"),renameFloor:p("Etage umbenennen","Rename Floor"),prompt_renameFloor:p('Neuen Namen für die Etage "{0}" eingeben:','Enter new name for floor "{0}":'),defaultFloorName:p("Standard-Etage","Default Floor"),tools:p("Werkzeuge","Tools"),pan:p("Bewegen","Pan"),select:p("Auswählen","Select"),moveElement:p("Verschieben","Move Element"),merge:p("Zusammenfügen","Merge"),scissors:p("Schere","Scissors"),delete:p("Löschen","Delete"),areas:p("Flächen","Areas"),rectangle:p("Viereck","Rectangle"),square:p("Quadrat","Square"),polygon:p("Polygon","Polygon"),circle:p("Kreis","Circle"),linesAndPoints:p("Linien & Punkte","Lines & Points"),line:p("Linie","Line"),door:p("Tür","Door"),arc:p("Bogen","Arc"),point:p("Punkt","Point"),area:p("Fläche","Area"),saveAndClose:p("Änderungen übernehmen & schließen","Save & Close"),calibrateScale:p("Kalibrieren","Calibrate"),calibratePrompt:p("Kalibrierung: Wählen Sie eine bestehende Kante oder zeichnen Sie eine Referenzlinie und geben Sie die reale Länge in Metern ein.","Calibration: Select an existing edge or draw a reference line, then enter the real length in meters."),calibratePromptShort:p("Kalibrierung: Geben Sie die reale Länge in Metern ein.","Calibration: enter the real length in meters."),elementType:p("Element-Typ","Element Type"),manageTypes:p("Typen verwalten...","Manage Types..."),newAreaType:p("Neue Fläche","New Area Type"),newPointType:p("Neuer Punkt","New Point Type"),doorLabel:p("Tür","Door"),lineLabel:p("Linie","Line"),arcLabel:p("Bogen","Arc"),defaultRoomLabel:p("Beispielraum","Sample Room"),customIndicatorSuffix:p(" (Benutzerdefiniert)"," (Custom)"),alert_selectAtLeastTwo:p("Bitte mindestens zwei Elemente auswählen.","Please select at least two elements."),alert_notEnoughPoints:p("Nicht genug Punkte für eine Fläche.","Not enough points for an area."),fontSettings:p("Schrift-Einstellungen","Font Settings"),fontSize:p("Schriftgröße","Font Size"),fontColor:p("Schriftfarbe","Font Color"),fontSizeDesc:p("Bestimmt die Schriftgröße für Beschriftungen dieses Typs.","Controls the label font size for this type."),fontColorDesc:p("Legt die Textfarbe der Beschriftung fest.","Defines the text color of the label."),optgroupAreas:p("Flächen","Areas"),optgroupPointElements:p("Punkt-Elemente","Point Elements"),optgroupConnectors:p("Konnektoren","Konnektoren"),properties:p("Eigenschaften","Properties"),beacon_parameters:p("Beacon Parameter","Beacon Parameters"),label:p("Bezeichnung","Label"),enterElementLabel:p("Bezeichnung des Elements...","Enter element label..."),noElementSelected:p("Kein Element ausgewählt.","No element selected."),description:p("Beschreibung","Description"),occupancyTimes:p("Besetzungszeiten","Occupancy Times"),isEmptyArea:p("Leere Fläche (Lichthof/Stiegenhaus)","Empty Area (Courtyard/Stairwell)"),occupancyBtn:p("Besetzungszeiten...","Occupancy Times..."),openingHoursBtn:p("Öffnungszeiten...","Opening Hours..."),viewAndLayers:p("Ansicht & Layer","View & Layers"),grid:p("Raster","Grid"),layers:p("Layer","Layers"),showGrid:p("Raster anzeigen","Show Grid"),snapToGrid:p("Am Raster ausrichten","Snap to Grid"),size:p("Größe:","Size:"),metersPerCell:p("Meter/Kasten:","Meters per cell:"),layersAreas:p("Flächen","Areas"),layersPaths:p("Wege/Linien","Paths/Lines"),layersPoints:p("Punktelemente","Point Elements"),preview3D:p("3D-Vorschau","3D Preview"),dimensions:p("Maße","Dimensions"),showEdgeLengths:p("Kantenlängen anzeigen","Show edge lengths"),showCornerAngles:p("Eckenwinkel anzeigen","Show corner angles"),showLineLengths:p("Linienlängen anzeigen","Show line lengths"),showCircleRadius:p("Radius anzeigen (Kreise)","Show radius (circles)"),showBeaconRangeRing:p("Signal‑Simulation anzeigen","Show signal simulation"),editAnglePrompt:p("Winkel bearbeiten: Grad eingeben","Edit angle: enter degrees"),analysis:p("Analyse","Analysis"),simulateSignal:p("Signal simulieren","Simulate signal"),simulationOff:p("Simulation aus","Stop simulation"),welcomeTitle:p("Willkommen beim IMD Editor!","Welcome to IMD Editor!"),welcomeText:p("Dies ist ein Werkzeug zur Digitalisierung von Indoor-Karten.","This is a tool for digitizing indoor maps."),basicsTitle:p("Grundlagen der Bedienung:","Basic Operation:"),basicsTools:p("Werkzeuge: Wählen Sie links ein Werkzeug (z.B. Fläche, Punkt), um Elemente auf der Karte zu erstellen.","Tools: Select a tool on the left (e.g., Area, Point) to create elements on the map."),basicsZoom:p("Zoomen: Benutzen Sie das Mausrad, um in die Karte hinein- und herausuzoomen.","Zooming: Use the mouse wheel to zoom in and out of the map."),basicsPan:p("Verschieben der Ansicht: Halten Sie die mittlere Maustaste gedrückt und bewegen Sie die Maus, um die Kartenansicht zu verschieben.","Panning the view: Hold down the middle mouse button and move the mouse to pan the map view."),basicsMove:p("Elemente verschieben: Wählen Sie ein Element aus und ziehen Sie es mit der Maus an eine neue Position.","Move elements: Select an element and drag it with the mouse to a new position."),basicsSave:p('Speichern: Vergessen Sie nicht, Ihr Projekt über das "Datei"-Menü zu speichern.',`Saving: Don't forget to save your project via the "File" menu.`),intro_welcomeTitle:p("Willkommen im Editor!","Welcome to the Editor!"),intro_startText:p("Starten Sie, indem Sie Ihrem Projekt oben links einen Namen geben und rechts unter „Etagen“ einen Grundriss laden.","Start by giving your project a name in the top left and load a floor plan on the right under “Floors.”"),intro_sectionTitle:p("So bedienen Sie die Karte:","Map Controls"),intro_zoom:p("Zoomen: Drehen Sie das Mausrad.","Zoom: Scroll the mouse wheel."),intro_pan:p("Verschieben: Halten Sie das Mausrad gedrückt und bewegen Sie die Maus.","Pan: Hold down the mouse wheel and move the mouse."),intro_preview3d:p("3D-Vorschau: Nutzen Sie den Button unten links, um Ihr Modell räumlich zu sehen.","3D Preview: Use the button in the bottom left to view your model in 3D."),intro_draw_title:p("Zeichnen & Bearbeiten:","Drawing & Editing:"),intro_analysis_title:p("Analyse","Analysis"),intro_finishShape:p("Form beenden: Ein Doppelklick schließt eine gezeichnete Fläche ab.","Finish shape: Double-click to close a drawn area."),intro_escape:p("Abbrechen (ESC): Drücken Sie die ESC-Taste, um ein Werkzeug wegzulegen oder die Auswahl aufzuheben.","Cancel (ESC): Press ESC to put away a tool or clear the selection."),intro_merge:p("Klicke mindestens zwei Flächen auf derselben Etage an und drücke Enter, um sie zu einer neuen Fläche zusammenzufassen.","Click at least two areas on the same floor and press Enter to merge them into a new area."),intro_calibrate:p("Kalibrierung: Wählen Sie eine bestehende Kante oder zeichnen Sie eine Referenzlinie und geben Sie die reale Länge in Metern ein.","Calibration: Select an existing edge or draw a reference line, then enter the real length in meters."),intro_shortcuts_title:p("Wichtige Tastenkürzel:","Key shortcuts:"),intro_undo_redo:p("Strg + Z / Y: Fehler rückgängig machen / wiederherstellen.","Ctrl + Z / Y: Undo / Redo actions."),intro_copy_paste:p("Strg + C / V: Elemente kopieren und einfügen.","Ctrl + C / V: Copy and paste elements."),intro_paste_active_floor:p("Einfügen platziert Kopien auf der aktiven Etage.","Pasting places copies on the active floor."),intro_select_all:p("Strg + A: Alle Elemente der aktiven Etage auswählen.","Ctrl + A: Select all elements on the active floor."),intro_delete:p("Entf: Das ausgewählte Element löschen.","Delete: Remove the selected element."),intro_shift_zoom:p("Shift (Umschalt): Gedrückt halten, um die Lupe zu aktivieren.","Shift: Hold to activate the magnifier."),intro_alt_click:p("Alt + Klick: Fügt einer bestehenden Linie einen neuen Punkt hinzu.","Alt + Click: Use Alt + Click to add a new point to an existing line."),intro_full_content:p(`<h2>Interface Einstellungen</h2>
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
</ul>`),intro_tip_title:p("Tipp","Tip"),intro_save_reminder:p("Vergessen Sie nicht, Ihr Projekt regelmäßig über das Menü „Datei“ zu speichern!","Remember to save your project regularly via the “File” menu!"),mergeHintShort:p("Klicke mindestens zwei Flächen auf derselben Etage an und drücke Enter, um sie zu einer neuen Fläche zusammenzufassen.","Click at least two areas on the same floor and press Enter to merge them into a new area."),angleEditHintShort:p("Winkel bearbeiten: Wähle zwei angrenzende Kanten derselben Fläche und gib den Winkel (Grad) ein.","Edit angle: pick two adjacent edges of the same area and enter the angle (degrees)."),angleEditStep1:p("Schritt 1/2: Erste Kante wählen (Klick).","Step 1/2: Pick the first edge (click)."),angleEditInvalidAdj:p("Nur benachbarte Kanten gültig – bitte angrenzende Kante wählen.","Only adjacent edges are valid — please pick a neighboring edge."),angleEditDone:p("Winkel gesetzt.","Angle set."),parallelEditHintShort:p("Parallel setzen: Erste Kante wählen, dann zweite Kante derselben Fläche. Zielkante wird parallel und gleich lang wie die erste.","Set parallel: pick first edge, then second edge of the same area. Target edge becomes parallel and equal length to the first."),parallelEditStep1:p("Schritt 1/2: Erste Kante wählen (Klick).","Step 1/2: Pick the first edge (click)."),parallelEditDone:p("Parallel und Länge gesetzt.","Parallel and length applied."),alert_selectTwo:p("Bitte genau zwei Elemente auswählen.","Please select exactly two elements."),alert_sameFloor:p("Beide Elemente müssen auf derselben Etage liegen.","Both elements must be on the same floor."),alert_noOverlap:p("Kein Schnittbereich gefunden.","No overlap found."),manageTypesTitle:p("Element-Typen verwalten","Manage Element Types"),types:p("Typen","Types"),newType:p("+ Neuer Typ","+ New Type"),typeName:p("Typ-Name","Type Name"),exampleMarketing:p("z.B. Marketing","e.g. Marketing"),textStyle:p("Schrift-Stil","Font Style"),areaStyle:p("Flächen-Stil","Area Style"),pointStyle:p("Punkt-Stil","Point Style"),fillColor:p("Füllfarbe","Fill Color"),fillColorDesc:p("Farbe der Innenfläche des Elements (z.B. Raum).","Color of the element's inner area (e.g., room)."),fillOpacity:p("Deckkraft der Füllung","Fill Opacity"),fillOpacityDesc:p("Transparenz der Füllfarbe (0.0 = transparent, 1.0 = opak).","Transparency of the fill color (0.0 = transparent, 1.0 = opaque)."),strokeColor:p("Rahmenfarbe","Border Color"),strokeColorDesc:p("Farbe des Rahmens/der Umrandung des Elements.","Color of the element's border/outline."),currentFillColor:p("Aktuelle Füllfarbe","Current Fill Color"),currentStrokeColor:p("Aktuelle Rahmenfarbe","Current Border Color"),iconSelection:p("Icon Auswahl","Icon Selection"),iconSelectionDesc:p("Wählen Sie ein Symbol für diesen Punkt-Typ.","Select an icon for this point type."),iconColor:p("Icon-Farbe","Icon Color"),iconColorDesc:p("Farbe des Icons auf der Karte.","Color of the icon on the map."),deleteType:p("Typ löschen","Delete Type"),typeManagerPlaceholder:p("Wählen Sie links einen Typ aus oder erstellen Sie einen neuen.","Select a type on the left or create a new one."),saveChangesAndClose:p("Änderungen übernehmen & schließen","Apply Changes & Close"),typePreview:p("Vorschau","Preview"),previewAreaLabel:p("Beispielraum","Sample Room"),previewPointLabel:p("Beispielpunkt","Sample Point"),areasGroup:p("Flächen","Areas"),pointsConnectorsGroup:p("Punkte & Konnektoren","Points & Connectors"),createNewElementType:p("Neuen Element-Typ erstellen","Create New Element Type"),chooseBaseType:p("Wählen Sie den Basis-Typ aus:","Choose the base type:"),choiceArea:p("Fläche","Area"),choicePoint:p("Punkt","Point"),cancel:p("Abbrechen","Cancel"),ok:p("OK","OK"),rename:p("Umbenennen...","Rename..."),copy:p("Kopieren","Copy"),changeType:p("Typ ändern","Change Type"),ctxAddOverlapPoint:p("Punkt im Schnittbereich setzen","Place point at overlap"),toggleAccessibility:p("Barrierefreiheit umschalten","Toggle Accessibility"),accessible:p("Barrierefrei","Accessible"),roomContentsTitle:p("Rauminhalt","Contents"),roomContentsPlaceholder:p("Eintrag hinzufügen...","Add entry..."),roomContentsAdd:p("Hinzufügen","Add"),accessibleRoomsHeader:p("Barrierefreie Räume","Accessible Rooms"),openingHours:p("Öffnungszeiten","Opening Hours"),openingHoursEdit:p("Öffnungszeiten bearbeiten...","Edit Opening Hours..."),openingHoursTitle:p("Öffnungszeiten","Opening Hours"),openingHoursWeekly:p("Wochentage","Weekdays"),openingHoursExceptions:p("Ausnahmen","Exceptions"),openingHoursRanges:p("Zeitspanne","Date Range"),roomNumber:p("Flächen-/Raumnummer","Area/Room Number"),designation:p("Bezeichnung (Art)","Designation (Type)"),occupancyTitle:p("Besetzungszeiten","Staffing Times"),occupancyEdit:p("Besetzungszeiten bearbeiten...","Edit Staffing Times..."),occupancyAdd:p("Hinzufügen","Add"),occupancyNotePlaceholder:p("Notiz...","Note..."),editRoomContents:p("Rauminhalt bearbeiten...","Edit Contents..."),occupancyType:p("Art","Type"),occupancyTypeWeekday:p("Wochentag","Weekday"),occupancyTypeDate:p("Kalendertag","Calendar Date"),occupancyTypeRange:p("Zeitraum","Date Range"),occupancyTypeLabel:p("Art","Type"),occupancyWeekdayLabel:p("Wochentag","Weekday"),occupancyDateLabel:p("Kalendertag","Calendar Date"),occupancyStartLabel:p("von","from"),occupancyEndLabel:p("bis","to"),occupancyRangeStartLabel:p("Zeitraum von","Range start"),occupancyRangeEndLabel:p("Zeitraum bis","Range end"),occupancyNoteLabel:p("Notiz","Note"),beacon_activation_label:p("Aktivierungszeit","Activation Time"),activationStartDate:p("Startdatum","Start Date"),activationEndDate:p("Enddatum","End Date"),activationStartTime:p("von","from"),activationEndTime:p("bis","to"),weekdayMon:p("Mo","Mon"),weekdayTue:p("Di","Tue"),weekdayWed:p("Mi","Wed"),weekdayThu:p("Do","Thu"),weekdayFri:p("Fr","Fri"),weekdaySat:p("Sa","Sat"),weekdaySun:p("So","Sun"),fromTime:p("von","from"),toTime:p("bis","to"),addRule:p("Regel hinzufügen","Add Rule"),addException:p("Ausnahme hinzufügen","Add Exception"),noAccessibleRooms:p("Keine barrierefreien Räume","No accessible rooms"),addRange:p("Zeitraum hinzufügen","Add Date Range"),calendarToday:p("Heute","Today"),calendarClear:p("Leeren","Clear"),alert_deleteTypeConfirm:p('Möchten Sie den Typ "{0}" wirklich löschen?','Do you really want to delete the type "{0}"?'),alert_renameSelectOne:p("Bitte wählen Sie genau ein Element zum Umbenennen aus.","Please select exactly one element to rename."),prompt_renameElement:p("Neuen Namen eingeben:","Enter new name:"),alert_noActiveFloor:p("Bitte zuerst eine Etage auswählen oder erstellen.","Please select or create a floor first."),alert_floorNameExists:p("Dieser Etagenname ist bereits vergeben.","This floor name already exists."),alert_newProjectConfirm:p("Möchten Sie wirklich ein neues Projekt starten? Nicht gespeicherte Änderungen gehen verloren.","Do you really want to start a new project? Unsaved changes will be lost."),confirm_deleteElement_single:p("Möchten Sie das ausgewählte Element wirklich löschen?","Do you really want to delete the selected element?"),confirm_deleteElement_multi:p("Möchten Sie die {0} ausgewählten Elemente wirklich löschen?","Do you really want to delete the {0} selected elements?"),area_raum_label:p("Raum","Room"),area_buero_label:p("Büro","Office"),area_toiletten_label:p("Toiletten","Restrooms"),area_gang_label:p("Gang","Corridor"),area_lager_label:p("Lager","Storage"),point_eingang_label:p("Eingang","Entrance"),point_feuerloescher_label:p("Feuerlöscher","Fire Extinguisher"),point_treppe_label:p("Treppe","Stairs"),point_aufzug_label:p("Aufzug","Elevator"),point_beacon_label:p("Beacon","Beacon"),point_erstehilfe_label:p("Erste Hilfe","First Aid"),point_notausgang_label:p("Notausgang","Emergency Exit"),beacon_uuid_label:p("Beacon UUID","Beacon UUID"),beacon_serial_label:p("Gerät-ID","Device ID"),beacon_major_label:p("Beacon Major","Beacon Major"),beacon_minor_label:p("Beacon Minor","Beacon Minor"),beacon_installation_label:p("Installationsdatum","Installation Date"),beacon_range_label:p("Reichweite (m)","Range (m)"),beacon_number_label:p("Nummer","Number"),beacon_note_de_label:p("Notiz","Note"),beacon_note_en_label:p("Notiz (EN)","Note (EN)"),threeD_fullscreen_title:p("3D-Ansicht","3D View"),threeD_minimize:p("Minimieren","Minimize"),threeD_toggle_fullscreen:p("Vollbild umschalten","Toggle Fullscreen"),screenshot:p("Screenshot","Screenshot"),pdf_convert:p("Konvertiere PDF, dies kann einen Moment dauern...","Converting PDF, this may take a moment..."),image_load:p("Lade Bild...","Loading image...")};nt.properties_label_desc=p("Anzeigename des Elements, wird in der Karte gezeigt.","Display name of the element, shown on the map.");nt.beacon_serial_desc=p("Eindeutige Geräte-ID des Beacons.","Unique device ID of the beacon.");nt.beacon_number_desc=p("Interne Beacon-Nummer zur Zuordnung.","Internal beacon number for mapping.");nt.beacon_installation_desc=p("Datum der Installation.","Installation date.");nt.beacon_range_desc=p("Geplante Signalreichweite in Metern für die Heatmap.","Planned signal range in meters for the heatmap.");nt.beacon_note_de_desc=p("Freitextnotiz in Deutsch.","Free-form note in German.");function Qs(t){Yr=t}function l(t,o=Yr,...n){const i=nt[t];if(!i)return console.warn(`Missing translation key: ${t}`),t;let s=i[o]||i.en||t;return n.forEach((r,a)=>{s=s.replace(new RegExp(`\\{${a}\\}`,"g"),String(r))}),s}const Ae={raum:{fill:"rgba(53, 138, 216, 0.4)",stroke:"#5e5bb1"},buero:{fill:"rgba(141, 35, 166, 0.3)",stroke:"#54176e"},toiletten:{fill:"rgba(236, 240, 241, 0.5)",stroke:"#c0392b"},gang:{fill:"rgba(246, 235, 252, 0.2)",stroke:"#bdc3c7"},lager:{fill:"rgba(255, 255, 255, 0.3)",stroke:"#7f8c8d"},default:{fill:"rgba(189, 195, 199, 0.3)",stroke:"#95a5a6"}},re="#358ad8",yn={eingang:"M12 3L4 9v12h5v-7h6v7h5V9l-8-6zm-2 14H8v-5h2v5zm4 0h-2v-5h2v5z",feuerloescher:"M9 8H15V20H9Z M10 6H14V8H10Z M15 10L19 11L15 12Z M11 4H14V6H11Z",treppe:"M6 18H18V20H6Z M10 14H18V16H10Z M14 10H18V12H14Z",aufzug:"M5 4H19V20H5Z M11.5 4H12.5V20H11.5Z M8 9L12 5L16 9Z M8 15L12 19L16 15Z",beacon:"M10.5 3 l6 4.5 -6 4.5 6 4.5 -6 4.5 V3 M17.25 9.75 c1.5 .75 1.5 .75 1.5 2.25 M17.25 14.25 c1.5 .75 1.5 .75 1.5 2.25",erstehilfe:"M10 5H14V10H19V14H14V19H10V14H5V10H10Z",notausgang:"M3 4H10V20H3Z M11 12H21V13H11Z M17 9L21 12L17 15Z",default:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"},An={info:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",warning:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z","meeting-point":"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",coffee:"M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm-2 5h-2V5h2v3zM4 19h16v2H4z",printer:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM18 3H6v4h12V3z",restroom:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"};function ze(){const t=new Set;return e.project.features.forEach(o=>t.add(o.properties.floor)),e.project.floorplanImages&&Object.keys(e.project.floorplanImages).forEach(o=>t.add(o)),Array.from(t).sort((o,n)=>o.localeCompare(n,void 0,{numeric:!0}))}function Se(){const t={},o={raum:l("area_raum_label"),buero:l("area_buero_label"),toiletten:l("area_toiletten_label"),gang:l("area_gang_label"),lager:l("area_lager_label")};for(const s in Ae)o[s]&&(t[s]={label:o[s],baseType:"area",fill:Ae[s].fill,stroke:Ae[s].stroke,isDefault:!0});const n={eingang:l("point_eingang_label"),feuerloescher:l("point_feuerloescher_label"),treppe:l("point_treppe_label"),aufzug:l("point_aufzug_label"),beacon:l("point_beacon_label"),erstehilfe:l("point_erstehilfe_label"),notausgang:l("point_notausgang_label")};for(const s in yn)n[s]&&(t[s]={label:n[s],baseType:"point",icon:yn[s],iconColor:"#34495e",isDefault:!0});const i=e.project.properties.elementTypeStyles;if(i)for(const s in i)t[s]={...t[s],...i[s],isDefault:!1};return t}function fe(){const t=ze(),o=e.activeFloorId,n=document.getElementById("floor-select");if(!n)return;if(n.innerHTML="",t.length===0){const s=document.createElement("option");s.textContent=l("currentFloor"),n.appendChild(s),e.activeFloorId=null}else t.forEach(s=>{const r=document.createElement("option");r.value=s,r.textContent=s,n.appendChild(r)}),o&&t.includes(o)?n.value=o:(e.activeFloorId=t[0],n.value=t[0]);const i=document.getElementById("floor-preview");i&&e.activeFloorId&&e.cachedFloorPlanImages[e.activeFloorId]?(i.src=e.cachedFloorPlanImages[e.activeFloorId].src,i.style.display="block"):i&&(i.style.display="none")}function ot(){const t=document.getElementById("element-type-select");if(!t)return;const o=Se(),n=t.value,i=[],s=[],r=[];for(const f in o){const h=o[f];h.baseType==="area"?i.push({key:f,style:h}):h.baseType==="point"&&(["treppe","aufzug"].includes(f)?r.push({key:f,style:h}):s.push({key:f,style:h}))}const a=(f,h)=>f.style.label.localeCompare(h.style.label);i.sort(a),s.sort(a),r.sort(a);const c=document.createElement("optgroup");c.label=l("optgroupAreas");const d=document.createElement("optgroup");d.label=l("optgroupPointElements");const m=document.createElement("optgroup");m.label=l("optgroupConnectors");const v=(f,h)=>{h.forEach(({key:S,style:g})=>{const w=document.createElement("option");w.value=S;const k=g.isDefault?"":l("customIndicatorSuffix");w.textContent=g.label+k,w.dataset.type=g.baseType,f.appendChild(w)})};v(c,i),v(d,s),v(m,r),t.innerHTML="",t.appendChild(c),t.appendChild(d),r.length>0&&t.appendChild(m),n&&t.querySelector(`option[value="${n}"]`)?t.value=n:i.length>0?t.value=i[0].key:s.length>0&&(t.value=s[0].key)}function $o(t,o,n){return{x:2*n.x-.5*(t.x+o.x),y:2*n.y-.5*(t.y+o.y)}}function Wt(t,o,n,i=20){const s=[];for(let r=0;r<=i;r++){const a=r/i,c=Math.pow(1-a,2)*t.x+2*(1-a)*a*n.x+Math.pow(a,2)*o.x,d=Math.pow(1-a,2)*t.y+2*(1-a)*a*n.y+Math.pow(a,2)*o.y;s.push([c,d])}return s}function Oo(t,o,n,i){const s=o.x-t.x,r=o.y-t.y,a=i.x-n.x,c=i.y-n.y,d=s*c-r*a;if(d===0)return null;const m=((n.x-t.x)*c-(n.y-t.y)*a)/d,v=((n.x-t.x)*r-(n.y-t.y)*s)/d;return m<0||m>1||v<0||v>1?null:{x:t.x+m*s,y:t.y+m*r}}function Dt(t){const o=t.coordinates[0];let[n,i]=o[0],[s,r]=o[0];for(const[a,c]of o)a<n&&(n=a),c<i&&(i=c),a>s&&(s=a),c>r&&(r=c);return{x:n,y:i,width:s-n,height:r-i}}function Be(t,o){const n=Dt(o);if(t.x<n.x||t.x>n.x+n.width||t.y<n.y||t.y>n.y+n.height)return!1;let i=!1;const s=o.coordinates[0];for(let r=0,a=s.length-1;r<s.length;a=r++){const[c,d]=s[r],[m,v]=s[a];d>t.y!=v>t.y&&t.x<(m-c)*(t.y-d)/(v-d)+c&&(i=!i)}return i}function Ce(t){if(!e.isGridVisible||!e.isSnapEnabled)return t;const o=e.gridSize;return{x:Math.round(t.x/o)*o,y:Math.round(t.y/o)*o}}function at(t){const o=10/e.scale,n=e.project.features.filter(s=>s.properties.floor===e.activeFloorId&&!s.properties.isPlaceholder);let i=null;for(const s of n)if(s.geometry.type==="Point"||s.properties.type==="connector"){const[r,a]=s.geometry.coordinates,c=Math.hypot(t.x-r,t.y-a);c<o&&(!i||c<i.d)&&(i={x:r,y:a,d:c})}else if(s.geometry.type==="LineString"){const r=s.geometry.coordinates;for(const a of r){const c=a[0],d=a[1],m=Math.hypot(t.x-c,t.y-d);m<o&&(!i||m<i.d)&&(i={x:c,y:d,d:m})}}return i?{x:i.x,y:i.y}:t}function ei(){const t=[];if(!e.activeFloorId)return t;const o=e.metersPerPixel;if(!o||o<=0)return t.push("Maßstab nicht kalibriert. Analyse ist ungenau oder nicht möglich."),t;const n=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.properties.type==="area"&&c.geometry.type==="Polygon"&&!c.properties.isEmpty),i=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.geometry.type==="Point"&&c.properties.subType==="beacon"),s=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.properties.type==="area"&&c.geometry.type==="Polygon"&&c.properties.isEmpty);i.length<3&&t.push("Zu wenige Beacons: Mindestens 3 Beacons werden für eine Trilateration benötigt.");const a=.5/o;return n.forEach(c=>{const d=c.geometry,m=Dt(d);let v=0,f=0,h=0;for(let S=m.x;S<m.x+m.width;S+=a)for(let g=m.y;g<m.y+m.height;g+=a)if(Be({x:S,y:g},d)){if(s.some(P=>Be({x:S,y:g},P.geometry)))continue;v++;let k=0;for(const P of i){const[T,L]=P.geometry.coordinates,_=Math.hypot(S-T,g-L),D=typeof P.properties.beacon_range=="number"&&P.properties.beacon_range>0?P.properties.beacon_range/o:0;_<=D&&k++}k===0?f++:k<3&&h++}if(v>0){const S=f/v*100,g=h/v*100,w=c.properties.label||"Unbenannter Raum";S>2&&t.push(`Funkloch in "${w}": ${S.toFixed(1)}% der Fläche nicht abgedeckt.`),g>40&&t.push(`Eingeschränkte Trilateration in "${w}": ${g.toFixed(1)}% der Fläche haben < 3 Beacons.`)}}),t}function xt(t,o){let n=1/0,i=-1;const s=16/e.scale,r=o.coordinates[0];for(let a=0;a<r.length-1;a++){const c={x:r[a][0],y:r[a][1]},d={x:r[a+1][0],y:r[a+1][1]},m=d.x-c.x,v=d.y-c.y;if(m===0&&v===0)continue;const f=((t.x-c.x)*m+(t.y-c.y)*v)/(m*m+v*v),h=f<0?c:f>1?d:{x:c.x+f*m,y:c.y+f*v},S=Math.sqrt((t.x-h.x)**2+(t.y-h.y)**2);S<n&&(n=S,i=a)}return n<s?{index:i,distance:n}:{index:-1,distance:1/0}}function ti(t,o,n){const i=o.coordinates[0],s=Math.max(0,Math.min(n,i.length-2)),r={x:i[s][0],y:i[s][1]},a={x:i[s+1][0],y:i[s+1][1]},c=a.x-r.x,d=a.y-r.y;if(c===0&&d===0)return r;const m=((t.x-r.x)*c+(t.y-r.y)*d)/(c*c+d*d),v=Math.max(0,Math.min(1,m));return{x:r.x+v*c,y:r.y+v*d}}function Zr(t,o){const n=o.coordinates;let i=1/0,s=-1;const r=16/e.scale;for(let a=0;a<n.length-1;a++){const c={x:n[a][0],y:n[a][1]},d={x:n[a+1][0],y:n[a+1][1]},m=d.x-c.x,v=d.y-c.y;if(m===0&&v===0)continue;const f=((t.x-c.x)*m+(t.y-c.y)*v)/(m*m+v*v),h=f<0?c.x:f>1?d.x:c.x+f*m,S=f<0?c.y:f>1?d.y:c.y+f*v,g=Math.hypot(t.x-h,t.y-S);g<i&&(i=g,s=a)}return i<r?{index:s,distance:i}:{index:-1,distance:1/0}}function ni(t,o,n){const i=o.coordinates,s=Math.max(0,Math.min(n,i.length-2)),r={x:i[s][0],y:i[s][1]},a={x:i[s+1][0],y:i[s+1][1]},c=a.x-r.x,d=a.y-r.y;if(c===0&&d===0)return r;const m=((t.x-r.x)*c+(t.y-r.y)*d)/(c*c+d*d),v=Math.max(0,Math.min(1,m));return{x:r.x+v*c,y:r.y+v*d}}let ae,x,lt,ee,ct,te,_t,Ye;function oi(){ae=document.getElementById("canvas"),x=ae.getContext("2d"),lt=document.getElementById("ruler-top"),ee=lt.getContext("2d"),ct=document.getElementById("ruler-left"),te=ct.getContext("2d"),_t=document.createElement("canvas"),Ye=_t.getContext("2d")}function Z(){if(!(!x||!ae.parentElement)){if(ae.width=ae.parentElement.clientWidth,ae.height=ae.parentElement.clientHeight,lt.width=ae.width,ct.height=ae.height,ri(),e.measureLabels=[],x.save(),x.translate(e.pan.x,e.pan.y),x.scale(e.scale,e.scale),e.activeFloorId){const t=e.cachedFloorPlanImages[e.activeFloorId];t&&x.drawImage(t,0,0),e.isGridVisible&&si();const o=e.project.features.filter(a=>a.properties.floor===e.activeFloorId&&e.visibleLayers[a.properties.type]),n=o.filter(a=>a.geometry.type==="Polygon"),i=o.filter(a=>a.geometry.type!=="Polygon"),s=n.filter(a=>a.properties.isEmpty),r=n.filter(a=>!a.properties.isEmpty);if(s.length>0?(_t.width=ae.width,_t.height=ae.height,Ye.save(),Ye.translate(e.pan.x,e.pan.y),Ye.scale(e.scale,e.scale),r.forEach(a=>{const c=e.selectedFeatureIds.includes(a.properties.id);ht(a,c,{ctx:Ye,onlyFill:!0,noLabel:!0})}),s.forEach(a=>{const c=e.selectedFeatureIds.includes(a.properties.id);ht(a,c,{ctx:Ye,onlyFill:!0,noLabel:!0,forceComposite:"destination-out",forceColor:"#000000"})}),Ye.restore(),x.save(),x.setTransform(1,0,0,1,0,0),x.drawImage(_t,0,0),x.restore(),r.forEach(a=>{const c=e.selectedFeatureIds.includes(a.properties.id);ht(a,c,{onlyStroke:!0})}),s.forEach(a=>{const c=e.selectedFeatureIds.includes(a.properties.id);ht(a,c,{onlyStroke:!0})})):n.forEach(a=>{const c=e.selectedFeatureIds.includes(a.properties.id);ht(a,c)}),i.forEach(a=>{const c=e.selectedFeatureIds.includes(a.properties.id);switch(x.lineWidth=(c?3:2)/e.scale,a.geometry.type){case"Point":li(a,c);break;case"LineString":ci(a,c);break}}),e.currentMode==="door"){const a=i.filter(c=>c.geometry.type==="LineString");di(n,a)}}e.tempShape&&(e.currentMode==="area"&&ui(),e.currentMode==="square"&&mi(),e.currentMode==="line"&&Dn(),e.currentMode==="calibrate"&&Dn(),e.currentMode==="door"&&Dn(),e.currentMode==="polygon"&&gi(),e.currentMode==="arc"&&yi(),e.currentMode==="circle"&&hi()),e.showBeaconHeatmap&&pi(),x.restore(),e.isShiftPressed&&fi()}}function Jr(t){const o=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);return o?{r:parseInt(o[1]),g:parseInt(o[2]),b:parseInt(o[3]),a:o[4]!==void 0?parseFloat(o[4]):1}:null}function we(){return e.metersPerPixel}function Le(t){const o=e.activeLanguage==="de"?"de-DE":"en-US";return`${t.toLocaleString(o,{maximumFractionDigits:2})} m`}function Ee(t,o,n){const i=4/e.scale,s=16/e.scale;x.font=`${12/e.scale}px sans-serif`;const r=x.measureText(n).width+i*2,a=t-r/2,c=o-s/2,d=e.activeTheme==="dark"?"rgba(20,20,25,0.85)":"rgba(255,255,255,0.85)",m=e.activeTheme==="dark"?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.15)";x.fillStyle=d,x.fillRect(a,c,r,s),x.strokeStyle=m,x.lineWidth=1/e.scale,x.strokeRect(a,c,r,s),x.fillStyle=e.activeTheme==="dark"?"#eee":"#333",x.textAlign="center",x.textBaseline="middle",x.fillText(n,t,o)}function Xr(t,o,n,i){if(n)return re;if(i)return i;const s=t?Jr(t):null,a=(s&&s.a>.4?t:o??(e.activeTheme==="dark"?"#e6e1ef":"#333333")).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(a){const c=parseInt(a[1]),d=parseInt(a[2]),m=parseInt(a[3]),v=(.299*c+.587*d+.114*m)/255,f=.5;return e.activeTheme==="dark"?v<f?"#e6e1ef":"#333333":v>f?"#333333":"#e6e1ef"}return e.activeTheme==="dark"?"#e6e1ef":"#333333"}function ri(){const t=getComputedStyle(document.body).getPropertyValue("--ruler-text").trim(),o=getComputedStyle(document.body).getPropertyValue("--ruler-border").trim(),n=getComputedStyle(document.body).getPropertyValue("--crosshair-color").trim()||"rgba(53, 138, 216, 0.9)";ee.clearRect(0,0,lt.width,lt.height),te.clearRect(0,0,ct.width,ct.height),ee.font="12px sans-serif",te.font="12px sans-serif",ee.fillStyle=t,te.fillStyle=t,ee.strokeStyle=o,te.strokeStyle=o;const{scale:i,pan:s}=e,r=i>1.5?50:i<.4?200:100;for(let d=0;d<lt.width;d+=10){const m=(d-s.x)/i;ee.beginPath(),ee.moveTo(d+.5,25),ee.lineTo(d+.5,30),ee.stroke(),Math.round(m)%r===0&&(ee.beginPath(),ee.moveTo(d+.5,22),ee.lineTo(d+.5,30),ee.stroke(),ee.fillText(String(Math.round(m)),d+2,14))}for(let d=0;d<ct.height;d+=10){const m=(d-s.y)/i;te.beginPath(),te.moveTo(25,d+.5),te.lineTo(30,d+.5),te.stroke(),Math.round(m)%r===0&&(te.beginPath(),te.moveTo(22,d+.5),te.lineTo(30,d+.5),te.stroke(),te.fillText(String(Math.round(m)),2,d+12))}const{x:a,y:c}=e.mousePosScreen;ee.fillStyle=n,te.fillStyle=n,ee.beginPath(),ee.moveTo(a,0),ee.lineTo(a-3,5),ee.lineTo(a+3,5),ee.closePath(),ee.fill(),te.beginPath(),te.moveTo(0,c),te.lineTo(5,c-3),te.lineTo(5,c+3),te.closePath(),te.fill()}function si(){const{scale:t,pan:o,gridSize:n}=e,i=e.activeTheme==="dark"?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)",s=e.activeTheme==="dark"?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)";x.lineWidth=1/t;const r=-o.x/t,a=-o.y/t,c=(ae.width-o.x)/t,d=(ae.height-o.y)/t;let m=n;const v=40;for(;m*t<v;)m*=2;for(;m*t>v*2;)m/=2;const f=m,h=f/4;if(h*t>10){x.strokeStyle=i;const w=Math.floor(r/h)*h,k=Math.floor(a/h)*h;for(let P=w;P<c;P+=h)x.beginPath(),x.moveTo(P,a),x.lineTo(P,d),x.stroke();for(let P=k;P<d;P+=h)x.beginPath(),x.moveTo(r,P),x.lineTo(c,P),x.stroke()}x.strokeStyle=s,x.lineWidth=1.5/t;const S=Math.floor(r/f)*f,g=Math.floor(a/f)*f;for(let w=S;w<c;w+=f)x.beginPath(),x.moveTo(w,a),x.lineTo(w,d),x.stroke();for(let w=g;w<d;w+=f)x.beginPath(),x.moveTo(r,w),x.lineTo(c,w),x.stroke()}function ht(t,o,n={}){if(t.properties.isPlaceholder)return;const{subType:i,label:s}=t.properties,r=n.ctx||x,c=(e.styleOverrides||Se())[i];let d=Ae.default.fill,m=Ae.default.stroke,f=t.properties.fontSize||c?.fontSize||14,h=t.properties.fontColor||c?.fontColor;c&&c.baseType==="area"&&(d=c.fill||d,m=c.stroke||m),t.properties.isEmpty?(d="rgba(255, 255, 255, 0.1)",m="#666666",r.setLineDash([8/e.scale,4/e.scale])):r.setLineDash([]),n.forceColor&&(d=n.forceColor),n.forceComposite&&(r.globalCompositeOperation=n.forceComposite);const S=t.geometry.coordinates[0];r.fillStyle=d,r.strokeStyle=o?re:m,r.lineWidth=(o?3:2)/e.scale,r.beginPath(),r.moveTo(S[0][0],S[0][1]);for(let g=1;g<S.length;g++)r.lineTo(S[g][0],S[g][1]);if(r.closePath(),n.onlyStroke||r.fill(),n.onlyFill||r.stroke(),n.forceComposite&&(r.globalCompositeOperation="source-over"),r.setLineDash([]),t.properties.isEmpty&&!n.onlyFill){const g=Dt(t.geometry);r.beginPath(),r.moveTo(g.x,g.y),r.lineTo(g.x+g.width,g.y+g.height),r.moveTo(g.x+g.width,g.y),r.lineTo(g.x,g.y+g.height),r.strokeStyle="rgba(100, 100, 100, 0.5)",r.lineWidth=1/e.scale,r.stroke()}if(s&&!n.onlyFill&&!n.onlyStroke&&!n.noLabel){const g=Dt(t.geometry),w=Xr(d,m,o,h);r.fillStyle=w,r.font=`bold ${f/e.scale}px sans-serif`,r.textAlign="center",r.textBaseline="middle";const k=g.x+g.width/2,P=g.y+g.height/2;r.fillText(s,k,P);const T=Array.isArray(t.properties.contents)?t.properties.contents:[];if(T.length>0){const N=(c?.contentsFontSize||Math.max(10,Math.round(f*.8)))/e.scale,D=(c?.contentsLineSpacing||Math.round(f*.5))/e.scale;r.font=`${N}px sans-serif`,r.textAlign="center",r.textBaseline="top";let u=P+D;for(let b=0;b<T.length;b++){const B=String(T[b]);B.trim()!==""&&(r.fillText(B,k,u),u+=D)}}const L=t.properties.room_number,_=t.properties.designation;if(L||_){const N=(c?.contentsFontSize||Math.max(8,Math.round(f*.7)))/e.scale,D=(c?.contentsLineSpacing||Math.round(f*.5))/e.scale;r.font=`${N}px sans-serif`,r.textAlign="center",r.textBaseline="top";let b=T.length>0?P+D*(T.length+1):P+D;L&&(r.fillText(String(L),k,b),b+=D),_&&r.fillText(String(_),k,b)}if(t.properties.isAccessible){const N=(c?.accessibleIconSize||16)/e.scale,D=(c?.accessibleIconOffsetX||6)/e.scale,u=(c?.accessibleIconOffsetY||6)/e.scale,b=getComputedStyle(document.body).getPropertyValue("--color-primary").trim()||"#6b2bd0",B=getComputedStyle(document.body).getPropertyValue("--color-primary-text").trim()||"#ffffff",I=N+4/e.scale,C=N+4/e.scale;r.fillStyle=o?re:b,r.beginPath();const F=3/e.scale,M=g.x+D,j=g.y+u;r.moveTo(M+F,j),r.lineTo(M+I-F,j),r.quadraticCurveTo(M+I,j,M+I,j+F),r.lineTo(M+I,j+C-F),r.quadraticCurveTo(M+I,j+C,M+I-F,j+C),r.lineTo(M+F,j+C),r.quadraticCurveTo(M,j+C,M,j+C-F),r.lineTo(M,j+F),r.quadraticCurveTo(M,j,M+F,j),r.closePath(),r.fill(),r.fillStyle=o?"#ffffff":B,r.font=`${N}px sans-serif`,r.textAlign="left",r.textBaseline="top",r.fillText("♿",M+2/e.scale,j+2/e.scale)}}if(o&&!n.onlyFill&&!n.onlyStroke){const g=5/e.scale;if((e.isAltPressed||e.currentMode==="scissors"||e.currentMode==="angle-edit"||e.currentMode==="parallel-edit")&&e.hoveredFeatureId===t.properties.id&&e.hoveredEdgeIndex!==-1){const w=S[e.hoveredEdgeIndex],k=S[(e.hoveredEdgeIndex+1)%(S.length-1)];r.beginPath(),r.moveTo(w[0],w[1]),r.lineTo(k[0],k[1]),r.strokeStyle=re,r.lineWidth=5/e.scale,r.lineCap="round",r.stroke()}r.fillStyle="#fff",r.strokeStyle=re,r.lineWidth=2/e.scale,S.forEach(w=>{r.beginPath(),r.arc(w[0],w[1],g,0,2*Math.PI),r.fill(),r.stroke()})}if(e.showDimensions.area||e.showDimensions.circle||e.showDimensions.angles||e.currentMode==="calibrate"){const g=S,w=Dt(t.geometry),k=w.x+w.width/2,P=w.y+w.height/2;if(g.length>=20&&Math.abs(w.width-w.height)/Math.max(w.width,w.height)<.08&&e.showDimensions.circle){let L=0;for(let D=0;D<g.length-1;D++){const u=g[D][0]-k,b=g[D][1]-P;L+=Math.sqrt(u*u+b*b)}const _=L/(g.length-1),N=_*we();Ee(k+_,P-18/e.scale,Le(N))}else if(e.showDimensions.area||e.currentMode==="calibrate")for(let L=0;L<g.length-1;L++){const _=g[L][0],N=g[L][1],D=g[L+1][0],u=g[L+1][1],b=Math.hypot(D-_,u-N),B=b*we(),I=(_+D)/2,F=(N+u)/2-18/e.scale,M=Le(B);if(Ee(I,F,M),e.currentMode==="calibrate"){const j=4/e.scale,z=16/e.scale;x.font=`${12/e.scale}px sans-serif`;const $=x.measureText(M).width+j*2,q=I-$/2,Y=F-z/2;e.measureLabels.push({bx:q,by:Y,w:$,h:z,pxLength:b,type:"distance"})}}if(e.showDimensions.angles){const L=g.length-1;for(let _=0;_<L;_++){const N=g[(_-1+L)%L],D=g[_],u=g[(_+1)%L],b=N[0]-D[0],B=N[1]-D[1],I=u[0]-D[0],C=u[1]-D[1],F=Math.hypot(b,B),M=Math.hypot(I,C);if(F===0||M===0)continue;const j=(b*I+B*C)/(F*M),z=Math.min(1,Math.max(-1,j)),$=Math.round(Math.acos(z)*180/Math.PI),q=b/F+I/M,Y=B/F+C/M,J=Math.hypot(q,Y)||1,Q=22/e.scale,y=D[0]+q/J*Q,E=D[1]+Y/J*Q;Ee(y,E,`${$}°`);const V=4/e.scale,A=16/e.scale;x.font=`${12/e.scale}px sans-serif`;const O=x.measureText(`${$}°`).width+V*2,K=y-O/2,W=E-A/2;e.measureLabels.push({bx:K,by:W,w:O,h:A,pxLength:0,type:"angle",featureId:t.properties.id,vertexIndex:_,deg:$})}}}}function ii(t,o,n,i,s){const r=new Path2D(t);x.save(),x.translate(o,n),x.scale(1/e.scale,1/e.scale),x.translate(-12,-12),x.fillStyle=i?re:s||"#34495e",x.fill(r),x.restore()}function ai(t,o,n,i,s,r){const a=new Path2D(t);x.save(),x.translate(o,n),x.scale(1/e.scale,1/e.scale),x.translate(-12,-12),x.strokeStyle=i?re:s,x.lineWidth=r/1,x.lineCap="round",x.lineJoin="round",x.stroke(a),x.restore()}function li(t,o){const[n,i]=t.geometry.coordinates,{subType:s,label:r}=t.properties,c=(e.styleOverrides||Se())[s];let d=yn.default,m="#34495e",f=t.properties.fontSize||c?.fontSize||12,h=t.properties.fontColor||c?.fontColor;if(c&&c.baseType==="point"&&(d=c.icon||d,m=c.iconColor||m),s==="beacon"){const g=typeof t.properties.beacon_range=="number"?t.properties.beacon_range:null;if(e.showBeaconRangeRing&&g&&g>0){const w=g*(e.gridSize/e.metersPerGridCell);x.beginPath(),x.arc(n,i,w,0,Math.PI*2),x.fillStyle="rgba(46, 204, 113, 0.12)",x.fill(),x.strokeStyle="rgba(46, 204, 113, 0.6)",x.lineWidth=1.5/e.scale,x.stroke()}}o&&(x.fillStyle="rgba(231, 76, 60, 0.3)",x.beginPath(),x.arc(n,i,18/e.scale,0,2*Math.PI),x.fill()),s==="beacon"?ai(d,n,i,o,"#b955d0",2):ii(d,n,i,o,m);const S=Xr(void 0,m,o,h);x.fillStyle=S,x.font=`${f/e.scale}px sans-serif`,x.textAlign="center",x.fillText(r,n,i-22/e.scale)}function ci(t,o){const{coordinates:n}=t.geometry;if(n.length<2)return;x.beginPath(),x.moveTo(n[0][0],n[0][1]),n.slice(1).forEach(s=>x.lineTo(s[0],s[1]));const i=t.properties.subType==="door";if(x.strokeStyle=o?re:i?"#e67e22":t.properties.isAccessible?"#3498db":"#8e44ad",x.lineWidth=(o?5:i?4:3)/e.scale,x.lineCap="round",x.stroke(),o){const s=6/e.scale;x.fillStyle="#fff",x.strokeStyle=re,x.lineWidth=2/e.scale;let r=[];if(t.properties.subType==="arc"&&t.properties.controlPoints){const{p0:a,p1:c,p2:d}=t.properties.controlPoints;r=[a,c,d],x.setLineDash([4/e.scale,4/e.scale]),x.beginPath(),x.moveTo(a.x,a.y),x.lineTo(c.x,c.y),x.lineTo(d.x,d.y),x.strokeStyle="#7f8c8d",x.stroke(),x.setLineDash([])}else r=n.map(a=>({x:a[0],y:a[1]}));r.forEach(a=>{x.beginPath(),x.arc(a.x,a.y,s,0,2*Math.PI),x.fill(),x.stroke()})}if(e.showDimensions.path||e.currentMode==="calibrate"){let s=0;for(let g=0;g<n.length-1;g++){const w=n[g][0],k=n[g][1],P=n[g+1][0],T=n[g+1][1];s+=Math.hypot(P-w,T-k)}const r=s*we();let a=n[0][0],c=n[0][0],d=n[0][1],m=n[0][1];for(let g=1;g<n.length;g++)a=Math.min(a,n[g][0]),c=Math.max(c,n[g][0]),d=Math.min(d,n[g][1]),m=Math.max(m,n[g][1]);const v=(a+c)/2,h=(d+m)/2-18/e.scale,S=Le(r);if(Ee(v,h,S),e.currentMode==="calibrate"){const g=4/e.scale,w=16/e.scale;x.font=`${12/e.scale}px sans-serif`;const k=x.measureText(S).width+g*2,P=v-k/2,T=h-w/2;e.measureLabels.push({bx:P,by:T,w:k,h:w,pxLength:s,type:"distance"})}}}function di(t,o){x.save(),x.lineWidth=2/e.scale,t.forEach(n=>{const i=n.geometry.coordinates[0];for(let s=0;s<i.length-1;s++){const r=i[s],a=i[s+1],c=e.hoveredFeatureId===n.properties.id&&e.hoveredEdgeIndex===s;x.strokeStyle=c?re:"#e67e22",x.setLineDash([6/e.scale,6/e.scale]),x.beginPath(),x.moveTo(r[0],r[1]),x.lineTo(a[0],a[1]),x.stroke(),x.setLineDash([]);const d=(r[0]+a[0])/2,m=(r[1]+a[1])/2;x.fillStyle=c?re:"#e67e22",x.beginPath(),x.arc(d,m,3/e.scale,0,Math.PI*2),x.fill()}}),o.forEach(n=>{const i=n.geometry.coordinates;for(let s=0;s<i.length-1;s++){const r=i[s],a=i[s+1],c=e.hoveredFeatureId===n.properties.id&&e.hoveredEdgeIndex===s;x.strokeStyle=c?re:"#3498db",x.setLineDash([6/e.scale,6/e.scale]),x.beginPath(),x.moveTo(r[0],r[1]),x.lineTo(a[0],a[1]),x.stroke(),x.setLineDash([]);const d=(r[0]+a[0])/2,m=(r[1]+a[1])/2;x.fillStyle=c?re:"#3498db",x.beginPath(),x.arc(d,m,3/e.scale,0,Math.PI*2),x.fill()}}),x.restore()}function pi(){const t=e.project.features.filter(o=>o.properties.floor===e.activeFloorId&&o.geometry.type==="Point"&&o.properties.subType==="beacon");x.save(),x.globalCompositeOperation="multiply",t.forEach(o=>{const[n,i]=o.geometry.coordinates;if(!(typeof o.properties.beacon_range=="number"&&o.properties.beacon_range>0))return;const r=o.properties.beacon_range,a=we(),c=a>0?r/a:r*10,d=x.createRadialGradient(n,i,0,n,i,c);d.addColorStop(0,"rgba(46, 204, 113, 0.4)"),d.addColorStop(.5,"rgba(241, 196, 15, 0.25)"),d.addColorStop(1,"rgba(231, 76, 60, 0.15)"),x.fillStyle=d,x.beginPath(),x.arc(n,i,c,0,Math.PI*2),x.fill(),e.showBeaconRangeRing&&(x.save(),x.globalCompositeOperation="source-over",x.strokeStyle="rgba(46, 204, 113, 0.6)",x.lineWidth=1/e.scale,x.beginPath(),x.arc(n,i,c,0,Math.PI*2),x.stroke(),x.restore())}),x.restore()}function ui(){if(!e.tempShape?.start)return;x.strokeStyle=re,x.lineWidth=1.5/e.scale,x.setLineDash([6/e.scale,6/e.scale]);const{start:t}=e.tempShape,o=Ce(e.mousePos);x.strokeRect(t.x,t.y,o.x-t.x,o.y-t.y),x.setLineDash([]);const n=Math.abs(o.x-t.x),i=Math.abs(o.y-t.y),s=n*we(),r=i*we(),a=(t.x+o.x)/2,c=(t.y+o.y)/2;Ee(a,t.y-18/e.scale,Le(s)),Ee(t.x-36/e.scale,c,Le(r))}function mi(){if(!e.tempShape?.start)return;x.strokeStyle=re,x.lineWidth=1.5/e.scale,x.setLineDash([6/e.scale,6/e.scale]);const{start:t}=e.tempShape,o=Ce(e.mousePos),n=Math.max(Math.abs(o.x-t.x),Math.abs(o.y-t.y)),i=o.x>=t.x?t.x:t.x-n,s=o.y>=t.y?t.y:t.y-n;x.strokeRect(i,s,n,n),x.setLineDash([]);const r=n*we();Ee(i+n/2,s-18/e.scale,Le(r))}function Dn(){if(!e.tempShape?.start)return;x.strokeStyle=re,x.lineWidth=2/e.scale,x.beginPath();const t=e.tempShape.start;x.moveTo(t.x,t.y);const o=e.tempShape.end||at(Ce(e.mousePos));x.lineTo(o.x,o.y),x.stroke();const n=o.x-t.x,i=o.y-t.y,r=Math.sqrt(n*n+i*i)*we(),a=(t.x+o.x)/2,c=(t.y+o.y)/2;Ee(a,c-18/e.scale,Le(r)),x.fillStyle=e.activeTheme==="dark"?"#eee":"#333",x.font=`${12/e.scale}px sans-serif`,x.textAlign="center",x.beginPath(),x.arc(t.x,t.y,4/e.scale,0,Math.PI*2),x.fill(),x.fillText("A",t.x,t.y-10/e.scale),x.beginPath(),x.arc(o.x,o.y,4/e.scale,0,Math.PI*2),x.fill(),x.fillText((e.tempShape.end,"B"),o.x,o.y-10/e.scale)}function gi(){if(!e.tempShape?.nodes||e.tempShape.nodes.length===0)return;x.strokeStyle=re,x.lineWidth=2/e.scale,x.beginPath();const t=e.tempShape.nodes[0];x.moveTo(t.x,t.y);for(let m=1;m<e.tempShape.nodes.length;m++)x.lineTo(e.tempShape.nodes[m].x,e.tempShape.nodes[m].y);const o=Ce(e.mousePos);x.lineTo(o.x,o.y),x.stroke();const n=e.tempShape.nodes[e.tempShape.nodes.length-1],i=o.x-n.x,s=o.y-n.y,a=Math.sqrt(i*i+s*s)*we(),c=(n.x+o.x)/2,d=(n.y+o.y)/2;Ee(c,d-18/e.scale,Le(a))}function yi(){if(!e.tempShape?.start)return;const t=at(Ce(e.mousePos));if(x.strokeStyle=re,x.lineWidth=2/e.scale,x.setLineDash([6/e.scale,6/e.scale]),x.beginPath(),e.tempShape.end){const o=e.tempShape.start,n=e.tempShape.end,s=$o(o,n,t),r=Wt(o,n,s);x.moveTo(r[0][0],r[0][1]);for(let f=1;f<r.length;f++)x.lineTo(r[f][0],r[f][1]);let a=0;for(let f=0;f<r.length-1;f++){const h=r[f][0],S=r[f][1],g=r[f+1][0],w=r[f+1][1];a+=Math.hypot(g-h,w-S)}const c=a*we(),d=Math.floor(r.length/2),m=r[d][0],v=r[d][1];Ee(m,v-18/e.scale,Le(c))}else{x.moveTo(e.tempShape.start.x,e.tempShape.start.y),x.lineTo(t.x,t.y);const o=t.x-e.tempShape.start.x,n=t.y-e.tempShape.start.y,s=Math.sqrt(o*o+n*n)*we(),r=(e.tempShape.start.x+t.x)/2,a=(e.tempShape.start.y+t.y)/2;Ee(r,a-18/e.scale,Le(s))}x.stroke(),x.setLineDash([])}function hi(){if(!e.tempShape?.start)return;const t=e.tempShape.start,o=Ce(e.mousePos),n=Math.sqrt(Math.pow(o.x-t.x,2)+Math.pow(o.y-t.y,2)),i=Se(),r=document.getElementById("element-type-select")?.value||"default",a=i[r];let c=a&&a.baseType==="area"&&a.fill||Ae.default.fill;const d=Jr(c);if(d){const v=Math.max(d.a,.65);c=`rgba(${d.r}, ${d.g}, ${d.b}, ${v})`}x.beginPath(),x.arc(t.x,t.y,n,0,2*Math.PI),x.fillStyle=c,x.fill(),x.strokeStyle=re,x.lineWidth=1.5/e.scale,x.setLineDash([6/e.scale,6/e.scale]),x.stroke(),x.setLineDash([]);const m=n*we();Ee(t.x+n,t.y-18/e.scale,Le(m))}function fi(){if(!ae||ae.width===0||ae.height===0)return;const t=150,o=2.5,n=t/2,{x:i,y:s}=e.mousePosScreen,r=document.body.getAttribute("data-theme")||"light";x.save(),x.beginPath(),x.arc(i,s,n,0,Math.PI*2),x.strokeStyle=r==="dark"?"#333":"#a0a0a0",x.lineWidth=3,x.stroke(),x.clip(),x.globalAlpha=1,x.drawImage(ae,i-n/o,s-n/o,t/o,t/o,i-n,s-n,t,t),x.globalAlpha=1,x.restore()}function We(){const t=document.getElementById("overview-stats-panel");if(!t)return;const o=e.project.properties.projectName||l("unnamedProject"),n=ze(),i=n.length,s=e.project.features.filter(d=>d.properties.type==="area"&&!d.properties.isPlaceholder&&!d.properties.isEmpty).length,r=e.project.features.filter(d=>d.properties.type==="point").length;let a=`<div><span>${l("stat_project")}:</span><span class="value">${o}</span></div><div><span>${l("stat_floors")}:</span><span class="value">${i}</span></div><div><span>${l("stat_areas")}:</span><span class="value">${s}</span></div><div><span>${l("stat_points")}:</span><span class="value">${r}</span></div>`;t.innerHTML=a;const c=document.getElementById("overview-floor-list");c&&(c.innerHTML="",n.forEach(d=>{const m=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder&&!u.properties.isEmpty).length,v=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point").length,f=document.createElement("div");f.className="floor-block";const h=document.createElement("div");h.className="floor-card";const S=document.createElement("img");S.className="floor-thumb",e.cachedFloorPlanImages[d]&&(S.src=e.cachedFloorPlanImages[d].src,h.classList.add("has-thumb"));const g=document.createElement("div");g.className="floor-meta";const w=document.createElement("div");w.className="name",w.textContent=d;const k=document.createElement("div");k.className="counts",k.textContent=`${l("stat_areas")}: ${m} · ${l("stat_points")}: ${v}`,g.appendChild(w),g.appendChild(k),h.appendChild(S),h.appendChild(g),h.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),f.appendChild(h);const P=document.createElement("button");P.className="beacon-toggle";const T=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point"&&u.properties.subType==="beacon");P.textContent=`${l("overviewBeacons")} (${T.length})`;const L=document.createElement("div");L.className="beacon-section",P.addEventListener("click",()=>{L.style.display===""||L.style.display==="none"?(L.innerHTML="",T.forEach(b=>{const B=document.createElement("div");B.className="beacon-card";const I=document.createElement("div");I.className="beacon-meta";const C=document.createElement("div");C.className="name";const F=b.properties.beacon_serial||"",M=b.properties.label||l("point_beacon_label");C.textContent=F?`${M} · ${F}`:M;const j=document.createElement("div");j.className="counts";const z=b.properties.beacon_range,$=b.properties.beacon_note_de||b.properties.beacon_note_en||"",q=[];q.push(`${l("beacon_serial_label")}: ${F||"-"}`),typeof z=="number"&&q.push(`${l("beacon_range_label")}: ${z}`),$&&q.push(`${l("beacon_note_de_label")}: ${$}`),j.textContent=q.join(" · "),I.appendChild(C),I.appendChild(j),B.appendChild(I),B.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),L.appendChild(B)}),L.style.display="block"):(L.style.display="none",L.innerHTML="")}),f.appendChild(P),f.appendChild(L);const _=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder&&!u.properties.isEmpty).sort((u,b)=>{const B=(u.properties.label||"").toLowerCase(),I=(b.properties.label||"").toLowerCase();return B.localeCompare(I)}),N=document.createElement("button");N.className="beacon-toggle",N.textContent=`${l("areas")} (${_.length})`;const D=document.createElement("div");D.className="area-section",N.addEventListener("click",()=>{if(D.style.display===""||D.style.display==="none"){const b=Se();D.innerHTML="",_.forEach(I=>{const C=document.createElement("div");C.className="area-card";const F=document.createElement("div");F.className="area-meta";const M=document.createElement("div");M.className="name";const j=I.properties.label||"";M.textContent=j;const z=document.createElement("div");z.className="counts";const $=b[I.properties.subType]?.label||I.properties.subType,q=Array.isArray(I.properties.contents)?I.properties.contents.filter(J=>J.trim()!==""):[],Y=q.length>0?q.join(", "):"-";z.textContent=`${l("elementType")}: ${$} · ${l("roomContentsTitle")}: ${Y}`,F.appendChild(M),F.appendChild(z),C.appendChild(F),C.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),D.appendChild(C)});const B=_.filter(I=>!!I.properties.isAccessible);if(B.length>0){const I=document.createElement("div");I.className="area-meta";const C=document.createElement("div");C.className="name",C.textContent=l("accessibleRoomsHeader"),I.appendChild(C),D.appendChild(I),B.forEach(F=>{const M=document.createElement("div");M.className="area-card";const j=document.createElement("div");j.className="area-meta";const z=document.createElement("div");z.className="name",z.textContent=F.properties.label||"";const $=document.createElement("div");$.className="counts",$.textContent="Barrierefrei",j.appendChild(z),j.appendChild($),M.appendChild(j),M.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),D.appendChild(M)})}D.style.display="block"}else D.style.display="none",D.innerHTML=""}),f.appendChild(N),f.appendChild(D),c.appendChild(f)}))}function bi(){if(!e.activeFloorId||!e.tempShape)return null;const t=Se();let n=document.getElementById("element-type-select")?.value||"raum";const s=t[n]?.label||"Preview",r="preview_feature",a=e.activeFloorId,c=e.mousePos||{x:0,y:0},d=Ce(c);if(e.currentMode==="area"&&e.tempShape.start){const m=e.tempShape.start,v=Math.min(m.x,d.x),f=Math.min(m.y,d.y),h=Math.abs(d.x-m.x),S=Math.abs(d.y-m.y);return h<1||S<1?null:{type:"Feature",geometry:{type:"Polygon",coordinates:[[[v,f],[v+h,f],[v+h,f+S],[v,f+S],[v,f]]]},properties:{id:r,floor:a,type:"area",subType:n,label:s,isPlaceholder:!0}}}if(e.currentMode==="square"&&e.tempShape.start){const m=e.tempShape.start,v=Math.abs(d.x-m.x),f=Math.abs(d.y-m.y),h=Math.max(v,f),S=Math.min(m.x,d.x),g=Math.min(m.y,d.y);return h<1?null:{type:"Feature",geometry:{type:"Polygon",coordinates:[[[S,g],[S+h,g],[S+h,g+h],[S,g+h],[S,g]]]},properties:{id:r,floor:a,type:"area",subType:n,label:s,isPlaceholder:!0}}}if(e.currentMode==="polygon"&&e.tempShape.nodes&&e.tempShape.nodes.length>=1){const m=[...e.tempShape.nodes.map(v=>[v.x,v.y]),[d.x,d.y]];return m.length<3?null:(m.push(m[0]),{type:"Feature",geometry:{type:"Polygon",coordinates:[m]},properties:{id:r,floor:a,type:"area",subType:n,label:s,isPlaceholder:!0}})}if(e.currentMode==="circle"&&e.tempShape.start){const m=e.tempShape.start,v=Math.sqrt((d.x-m.x)**2+(d.y-m.y)**2);if(v<1)return null;const f=64,h=Array.from({length:f},(S,g)=>{const w=g/f*2*Math.PI;return[m.x+v*Math.cos(w),m.y+v*Math.sin(w)]});return h.push(h[0]),{type:"Feature",geometry:{type:"Polygon",coordinates:[h]},properties:{id:r,floor:a,type:"area",subType:n,label:s,isPlaceholder:!0}}}if(e.currentMode==="line"&&e.tempShape.start){const m=e.tempShape.start;return{type:"Feature",geometry:{type:"LineString",coordinates:[[m.x,m.y],[d.x,d.y]]},properties:{id:r,floor:a,type:"path",subType:n,label:s,isPlaceholder:!0}}}if(e.currentMode==="door"&&e.tempShape.start){const m=e.tempShape.start,v=[[m.x,m.y],[d.x,d.y]],f=d.x-m.x,h=d.y-m.y,S=Math.sqrt(f*f+h*h),g=Math.round(S*e.metersPerPixel*100)/100;return{type:"Feature",geometry:{type:"LineString",coordinates:v},properties:{id:r,floor:a,type:"path",subType:"door",label:"Tür",isPlaceholder:!0,door_length_m:g,door_edge_index:e.tempShape.edgeIndex}}}if(e.currentMode==="arc"&&e.tempShape.start){const m=e.tempShape.start;if(e.tempShape.end){const v=e.tempShape.start,f=e.tempShape.end,h=$o(v,f,d);return{type:"Feature",geometry:{type:"LineString",coordinates:Wt(v,f,h)},properties:{id:r,floor:a,type:"path",subType:"arc",label:s,isPlaceholder:!0}}}else return{type:"Feature",geometry:{type:"LineString",coordinates:[[m.x,m.y],[d.x,d.y]]},properties:{id:r,floor:a,type:"path",subType:"arc",label:s,isPlaceholder:!0}}}return e.currentMode==="point"?{type:"Feature",geometry:{type:"Point",coordinates:[d.x,d.y]},properties:{id:r,floor:a,type:"point",subType:n,label:s,isPlaceholder:!0}}:null}function G(){const t=document.getElementById("live-geojson-output");if(t){const o=bi(),n=o?{...e.project,features:[...e.project.features,o]}:e.project;t.textContent=JSON.stringify(n,null,2)}}let rt=null,zn=null,Ze=null,Zt=null,Jt=null,Et=null,Nn=null,Xt=null,Qt=null,Ot=null,$n=null,On=null;function vi(t){rt=t.inputPromptModal,zn=t.inputPromptLabel,Ze=t.inputPromptInput,Zt=t.inputPromptOk,Jt=t.inputPromptCancel,Et=t.confirmModal,Nn=t.confirmMessage,Xt=t.confirmOk,Qt=t.confirmCancel,Ot=t.loadingModal,$n=t.loadingMessage,On=t.loadingOk}function Pe(t,o=""){return!rt||!zn||!Ze||!Zt||!Jt?Promise.resolve(null):(zn.textContent=t,Ze.value=o,rt.classList.remove("hidden"),Ze.focus(),new Promise(n=>{const i=()=>{rt.classList.add("hidden"),Zt.removeEventListener("click",s),Jt.removeEventListener("click",r),Ze.removeEventListener("keydown",a),c&&c.removeEventListener("click",r)},s=()=>{const d=Ze.value.trim();i(),n(d||null)},r=()=>{i(),n(null)},a=d=>{d.key==="Enter"?s():d.key==="Escape"&&r()};Zt.addEventListener("click",s),Jt.addEventListener("click",r),Ze.addEventListener("keydown",a);const c=rt?rt.querySelector(".modal-overlay"):null;c&&c.addEventListener("click",r)}))}function Fe(t){return!Et||!Nn||!Xt||!Qt?Promise.resolve(!1):(Nn.textContent=t,Et.classList.remove("hidden"),new Promise(o=>{const n=()=>{Et.classList.add("hidden"),Xt.removeEventListener("click",i),Qt.removeEventListener("click",s),a?.removeEventListener("click",s),window.removeEventListener("keydown",r)},i=()=>{n(),o(!0)},s=()=>{n(),o(!1)},r=c=>{c.key==="Escape"&&s(),c.key==="Enter"&&i()};Xt.addEventListener("click",i),Qt.addEventListener("click",s),window.addEventListener("keydown",r);const a=Et.querySelector(".modal-overlay");a&&a.addEventListener("click",s)}))}function Ho(t){!Ot||!$n||!On||($n.textContent=t,Ot.classList.remove("hidden"),On.onclick=()=>dt())}function dt(){Ot&&Ot.classList.add("hidden")}const Me=Object.freeze({publicAPI:"/api",imdAPI:"/app/api",login:"/app/login",imd:"/app"}),Yt=t=>{console.error(`[UI Error Message]: ${t}`)};class xi{baseUrl;backendAvailable=!0;warnedNoBackend=!1;constructor(o=window.location.origin){this.baseUrl=o,this.setupLockRelease()}base64ToFile(o,n){const i=o.split(","),s=i[0].match(/:(.*?);/)[1],r=atob(i[1]);let a=r.length;const c=new Uint8Array(a);for(;a--;)c[a]=r.charCodeAt(a);const d=s.split("/")[1]||"png",m=n.includes(".")?n:`${n}.${d}`;return new File([c],m,{type:s})}async request(o,n={}){n.credentials="include";try{const i=await fetch(`${this.baseUrl}${o}`,n);if(i.status===204)return{};const s=(i.headers.get("content-type")||"").toLowerCase();let r;if(s.includes("application/json"))r=await i.json();else{const a=await i.text(),c='Serverantwort ist keine JSON-API. Läuft das Backend unter "/app/api" und "/api"?';throw this.backendAvailable=!1,this.warnedNoBackend||(Yt(`${c}
Pfad: ${o}
Status: ${i.status}
Antwort: ${a.slice(0,200)}`),this.warnedNoBackend=!0),new Error(c)}if(!i.ok){const a=r.error||r.message||`Request failed with status ${i.status}`;throw Yt(a),new Error(a)}return r}catch(i){throw i instanceof Error||Yt("An unexpected network error occurred."),i}}isAvailable(){return this.backendAvailable}async probeBackend(){try{const o=await fetch(`${this.baseUrl}${Me.imdAPI}/random-id`,{method:"GET",credentials:"include"}),n=(o.headers.get("content-type")||"").toLowerCase();this.backendAvailable=o.ok&&n.includes("application/json")}catch{this.backendAvailable=!1}}async getProject(o,n){const i=n?`${Me.publicAPI}/${o}/${n}`:`${Me.publicAPI}/${o}`;return this.request(i)}async listProjects(){return this.request(`${Me.publicAPI}/list`)}async listVersions(o){return(await this.request(`${Me.publicAPI}/${o}/list`)).versions}async getNewId(){return(await this.request(`${Me.imdAPI}/random-id`)).id}async saveProject(o,n,i){try{const s=o??(await this.request("/app/api/random-id")).id,r=[];if(n.project.floorplanImages)for(const[m,v]of Object.entries(n.project.floorplanImages))v!==null&&v.startsWith("data:image")&&r.push(this.base64ToFile(v,m));const a=i?`/app/api/${s}/${i}`:`/app/api/${s}`,c=JSON.parse(JSON.stringify(n));c.project.floorplanImages=null,await this.request(a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});let d=i;if(!d){const m=await this.request(`/api/${s}/list`);d=Math.max(...m.versions)}if(r.length>0){const m=new FormData;r.forEach(v=>m.append("floorplans",v)),await this.request(`/app/api/${s}/${d}/floorplans`,{method:"POST",body:m})}return{id:s,version:d}}catch(s){throw Yt(s),s}}async delete(o,n){const i=n?`${Me.imdAPI}/${o}/${n}`:`${Me.imdAPI}/${o}`;await this.request(i,{method:"DELETE"})}async releaseLock(){try{await fetch(`${this.baseUrl}${Me.imdAPI}/release-lock`,{method:"POST",credentials:"include",keepalive:!0})}catch(o){console.warn("Failed to release lock",o)}}setupLockRelease(){window.addEventListener("beforeunload",()=>{const o=`${this.baseUrl}${Me.imdAPI}/release-lock`;if(navigator.sendBeacon){const n=new Blob([],{type:"application/json"});navigator.sendBeacon(o,n)}else fetch(o,{method:"POST",credentials:"include",keepalive:!0}).catch(()=>{})})}}const ye=new xi;function ar(t){e.project.properties.projectName=t.trim(),e.project.properties.sizegrid=e.gridSize,We(),G();const o=new Blob([JSON.stringify(e.project,null,2)],{type:"application/geo+json"}),n=document.createElement("a");n.href=URL.createObjectURL(o);const i=(e.project.properties.projectName||"projekt").replace(/[^a-z0-9]/gi,"_").toLowerCase();n.download=`${i}.geojson`,n.click(),URL.revokeObjectURL(n.href)}async function Qr(t,o){e.project.properties.projectName=(e.project.properties.projectName||"").trim(),e.project.properties.sizegrid=e.gridSize,We(),G(),Ho(l("saveProject"));try{const n=await ye.saveProject(t,e,o);return e.currentServerProjectId=n.id,e.currentServerVersion=n.version,n}finally{dt()}}async function lr(t,o){Ho(l("loadProject"));try{const n=await ye.getProject(t,o);e.currentServerProjectId=t,e.currentServerVersion=o,Ro(),Re(n),R()}finally{dt()}}function Ei(t){const o=new FileReader;o.onload=n=>{try{const i=JSON.parse(n.target?.result);Ro(),Re(i),R()}catch(i){alert("Fehler beim Laden der Projektdatei."),console.error(i)}},o.readAsText(t)}function Re(t){if(t.type!=="FeatureCollection"||!t.features)throw new Error("Ungültiges GeoJSON-Projektformat.");e.project=t,es();const o=document.getElementById("projectName");o&&(o.value=e.project.properties.projectName||""),e.cachedFloorPlanImages={},e.project.floorplanImages&&Object.entries(e.project.floorplanImages).forEach(([s,r])=>{if(r){const a=new Image;a.onload=()=>{e.cachedFloorPlanImages[s]=a,s===e.activeFloorId&&Z()},a.src=r}});const n=e.project.properties.settings||{};n.language&&(e.activeLanguage=n.language,document.documentElement.lang=n.language),n.theme&&(e.activeTheme=n.theme,document.body.setAttribute("data-theme",n.theme)),typeof e.project.properties.sizegrid=="number"?e.gridSize=e.project.properties.sizegrid:typeof n.gridSize=="number"&&(e.gridSize=n.gridSize),typeof n.isGridVisible=="boolean"&&(e.isGridVisible=n.isGridVisible),typeof n.isSnapEnabled=="boolean"&&(e.isSnapEnabled=n.isSnapEnabled),typeof n.metersPerPixel=="number"&&(e.metersPerPixel=n.metersPerPixel),typeof n.metersPerGridCell=="number"&&(e.metersPerGridCell=n.metersPerGridCell),n.visibleLayers&&(e.visibleLayers={...e.visibleLayers,...n.visibleLayers}),n.showDimensions&&(e.showDimensions={...e.showDimensions,...n.showDimensions}),typeof n.showBeaconHeatmap=="boolean"&&(e.showBeaconHeatmap=n.showBeaconHeatmap),typeof n.showBeaconRangeRing=="boolean"&&(e.showBeaconRangeRing=n.showBeaconRangeRing);const i=ze();e.activeFloorId=i.includes(e.activeFloorId)?e.activeFloorId:i[0]||null,fe(),ot(),We(),G(),Z()}async function wi(t){try{const o=await it(()=>import("./pdf-DcE_ssc1.js"),[]);o.GlobalWorkerOptions.workerSrc=`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${o.version}/pdf.worker.mjs`;const n=await t.arrayBuffer(),i=new Uint8Array(n),r=await(await o.getDocument(i).promise).getPage(1),a=r.getViewport({scale:2}),c=document.createElement("canvas");if(!c.getContext("2d"))throw new Error("Canvas-Kontext konnte nicht erstellt werden.");return c.height=a.height,c.width=a.width,await r.render({canvas:c,viewport:a}).promise,c.toDataURL("image/png")}catch(o){throw console.error("Fehler beim Konvertieren des PDFs:",o),new Error("Das PDF konnte nicht verarbeitet werden.")}}function Si(t,o){e.project.floorplanImages||(e.project.floorplanImages={}),e.project.floorplanImages[o]=t;const n=new Image;n.onload=()=>{e.cachedFloorPlanImages[o]=n,R(),fe(),Z()},n.src=t}async function Ii(t){return new Promise((o,n)=>{const i=new FileReader;i.onload=()=>o(i.result),i.onerror=()=>n(new Error("Fehler beim Lesen der Bilddatei.")),i.readAsDataURL(t)})}async function ki(t){if(!e.activeFloorId){alert("Bitte zuerst eine Etage auswählen oder erstellen.");return}const o=e.activeFloorId,n=t.type;try{let i;if(Ho(l(n==="application/pdf"?"pdf_convert":"image_load")),n.startsWith("image/"))i=await Ii(t);else if(n==="application/pdf")i=await wi(t);else{dt(),alert("Nicht unterstützter Dateityp. Bitte wählen Sie eine Bild- oder PDF-Datei.");return}Si(i,o),dt()}catch(i){dt();const s=i instanceof Error?i.message:"Ein unbekannter Fehler ist aufgetreten.";alert(`Der Grundriss konnte nicht geladen werden: ${s}`)}}const qe="EG";function Pi(){return{type:"FeatureCollection",features:[],properties:{projectName:"Unbenanntes Projekt",sizegrid:40,elementTypeStyles:{},settings:{language:"en",theme:"light",gridSize:40,isGridVisible:!0,isSnapEnabled:!0,metersPerPixel:.025,metersPerGridCell:1,visibleLayers:{area:!0,path:!0,point:!0,connector:!0},showDimensions:{area:!1,path:!1,circle:!1,angles:!1},showBeaconHeatmap:!1,showBeaconRangeRing:!1}},floorplanImages:{[qe]:null}}}const e={project:Pi(),worldSize:{width:8e3,height:6e3},pan:{x:0,y:0},scale:1,threeDPan:{x:50,y:50},threeDScale:.8,threeDIsDragging:!1,threeDStartPos:{x:0,y:0},activeFloorId:qe,activeLanguage:"en",activeTheme:"light",currentMode:"select",tempShape:null,mousePos:{x:0,y:0},mousePosScreen:{x:0,y:0},gridSize:40,isGridVisible:!0,isSnapEnabled:!0,metersPerPixel:.025,metersPerGridCell:1,selectedFeatureIds:[],cachedFloorPlanImages:{},clipboard:null,isShiftPressed:!1,isCtrlPressed:!1,isAltPressed:!1,styleOverrides:null,isMovingElement:!1,dragStartPos:{x:0,y:0},originalGeometriesOnMove:new Map,isEditingPath:!1,editedFeatureId:null,editedNodeIndex:-1,hoveredFeatureId:null,hoveredEdgeIndex:-1,anglePickFeatureId:null,anglePickFirstEdgeIndex:-1,parallelPickFeatureId:null,parallelPickFirstEdgeIndex:-1,panStart:{x:0,y:0},isPanning:!1,visibleLayers:{area:!0,path:!0,point:!0,connector:!0},showDimensions:{area:!1,path:!1,circle:!1,angles:!1},showBeaconHeatmap:!1,showBeaconRangeRing:!1,measureLabels:[],currentServerProjectId:null,currentServerVersion:void 0};function es(){e.project.floorplanImages||(e.project.floorplanImages={});const t=Object.keys(e.project.floorplanImages);t.length===0&&(e.project.floorplanImages[qe]=null),e.activeFloorId||(e.activeFloorId=t.length>0?t[0]:qe)}const tt=[];let _e=-1;function R(){_e<tt.length-1&&tt.splice(_e+1),tt.push(JSON.parse(JSON.stringify(e.project))),_e++;try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}}function cr(){_e>0&&(_e--,Re(JSON.parse(JSON.stringify(tt[_e]))))}function dr(){_e<tt.length-1&&(_e++,Re(JSON.parse(JSON.stringify(tt[_e]))))}function Ro(){tt.length=0,_e=-1}function Bi(){ts(!1),document.getElementById("mode-area")?.click(),ot()}function ts(t=!0,o){if(t&&!confirm(l("alert_newProjectConfirm")))return;e.project.type="FeatureCollection",e.project.features=[],e.project.properties={projectName:l("unnamedProject"),elementTypeStyles:{}};const n=o&&o.trim()!==""?o.trim():qe;e.project.floorplanImages={[n]:null};const i=document.getElementById("projectName");i&&(i.value=e.project.properties.projectName),e.cachedFloorPlanImages={},e.selectedFeatureIds=[],Ro(),e.activeFloorId=n,es(),R(),fe(),We(),G(),ot(),Z()}function pr(t,o=!0){if(!t||t.trim()===""){alert("Der Etagenname darf nicht leer sein.");return}const n=t.trim();if(ze().includes(n)){alert(l("alert_floorNameExists"));return}e.activeFloorId=n,e.selectedFeatureIds=[],e.project.floorplanImages||(e.project.floorplanImages={}),e.project.floorplanImages[e.activeFloorId]=null,o&&R(),fe(),We(),G(),Z()}function ur(t){const o=e.activeFloorId;if(!o){alert(l("alert_noActiveFloor"));return}const n=t.trim();if(!n||n===o)return;if(ze().filter(s=>s!==o).includes(n)){alert(l("alert_floorNameExists"));return}e.project.features.forEach(s=>{s.properties.floor===o&&(s.properties.floor=n)}),e.project.floorplanImages&&Object.prototype.hasOwnProperty.call(e.project.floorplanImages,o)&&(e.project.floorplanImages[n]=e.project.floorplanImages[o],delete e.project.floorplanImages[o]),Object.prototype.hasOwnProperty.call(e.cachedFloorPlanImages,o)&&(e.cachedFloorPlanImages[n]=e.cachedFloorPlanImages[o],delete e.cachedFloorPlanImages[o]),e.activeFloorId=n,R(),fe(),We(),G(),Z()}function Ve(t,o){e.project.features.push({type:"Feature",geometry:t,properties:o}),R(),We(),G(),Z()}async function _n(){if(e.selectedFeatureIds.length===0)return;const t=e.selectedFeatureIds.length>1?l("confirm_deleteElement_multi",void 0,e.selectedFeatureIds.length):l("confirm_deleteElement_single");if(await Fe(t)){e.project.features=e.project.features.filter(i=>!e.selectedFeatureIds.includes(i.properties.id)),e.selectedFeatureIds=[];const n=document.getElementById("deleteBtn");n&&(n.disabled=!0),R(),We(),G(),Z()}}function ns(t,o){const n=8/e.scale;for(let i=0;i<o.coordinates.length-1;i++){const s={x:o.coordinates[i][0],y:o.coordinates[i][1]},r={x:o.coordinates[i+1][0],y:o.coordinates[i+1][1]},a=r.x-s.x,c=r.y-s.y;if(a===0&&c===0)continue;const d=((t.x-s.x)*a+(t.y-s.y)*c)/(a*a+c*c),m=d<0?s:d>1?r:{x:s.x+d*a,y:s.y+d*c};if(Math.sqrt((t.x-m.x)**2+(t.y-m.y)**2)<n)return!0}return!1}function ve(t){const o=e.project.features.filter(n=>n.properties.floor===e.activeFloorId&&!n.properties.isPlaceholder);for(const n of[...o].reverse()){if(n.geometry.type==="Polygon"&&Be(t,n.geometry))return n;if(n.geometry.type==="Point"||n.properties.type==="connector"){const[i,s]=n.geometry.coordinates;if(Math.sqrt((t.x-i)**2+(t.y-s)**2)*e.scale<15)return n}if(n.geometry.type==="LineString"&&ns(t,n.geometry))return n}return null}function Kt(t){if(!e.activeFloorId){alert(l("alert_noActiveFloor"));return}const o=document.getElementById("element-type-select");let n=o?.value||"";const i=Se();let s=i[n];if(!s){const v=t.type==="Polygon"?"area":t.type==="Point"?"point":null;if(v){const f=Object.keys(i).find(h=>i[h].baseType===v);f&&(n=f,s=i[f],o&&o.querySelector(`option[value="${f}"]`)&&(o.value=f))}if(!s)return}const r=s.baseType,a=s.label,c=e.project.features.filter(v=>v.properties.subType===n).length+1,d=`${a} ${c}`,m={id:`feat_${Date.now()}`,floor:e.activeFloorId,type:r==="area"?"area":"point",subType:n,label:d};if(r==="point"&&["treppe","aufzug"].includes(n)?m.type="connector":t.type==="LineString"&&(m.type="path"),Ve(t,m),m.type==="connector"){const v=ze(),f=e.activeFloorId,h=v.find(S=>S!==f)||null;if(h){const S=`Soll ich das Gegenstück in ${h} automatisch erstellen?`;Fe(S).then(g=>{if(g&&t.type==="Point"){const w=t.coordinates.slice(),k={id:`feat_${Date.now()}_link`,floor:h,type:"connector",subType:n,label:d,linksTo:{floor:f,connectorId:m.id}};Ve({type:"Point",coordinates:w},k)}})}}}function Ci(t){if(!e.tempShape)e.tempShape={start:t};else{const{start:o}=e.tempShape,n=Math.min(o.x,t.x),i=Math.min(o.y,t.y),s=Math.abs(t.x-o.x),r=Math.abs(t.y-o.y);if(s<e.gridSize/2||r<e.gridSize/2){e.tempShape=null;return}const a=[[[n,i],[n+s,i],[n+s,i+r],[n,i+r],[n,i]]];Kt({type:"Polygon",coordinates:a}),e.tempShape=null}}function Li(t){if(!e.tempShape)e.tempShape={start:t};else{const o=e.tempShape.start,n=Math.abs(t.x-o.x),i=Math.abs(t.y-o.y),s=Math.max(n,i),r=Math.min(o.x,t.x),a=Math.min(o.y,t.y);if(s<e.gridSize/2){e.tempShape=null;return}const c=[[[r,a],[r+s,a],[r+s,a+s],[r,a+s],[r,a]]];Kt({type:"Polygon",coordinates:c}),e.tempShape=null}}function Mi(t){if(!e.tempShape)e.tempShape={start:t};else{const o=e.tempShape.start,n=Math.sqrt((t.x-o.x)**2+(t.y-o.y)**2);if(n<2){e.tempShape=null;return}const i=64,s=Array.from({length:i},(r,a)=>{const c=a/i*2*Math.PI;return[o.x+n*Math.cos(c),o.y+n*Math.sin(c)]});s.push(s[0]),Kt({type:"Polygon",coordinates:[s]}),e.tempShape=null}}function Ti(t){if(!e.tempShape)e.tempShape={start:t};else{const o=[[e.tempShape.start.x,e.tempShape.start.y],[t.x,t.y]],n={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"line",label:l("lineLabel")};Ve({type:"LineString",coordinates:o},n),e.currentMode="select",document.getElementById("mode-select")?.classList.add("active"),document.getElementById("mode-line")?.classList.remove("active"),e.tempShape=null}}function Fi(t){e.tempShape?e.tempShape.nodes.push(t):e.tempShape={nodes:[t]}}function ji(t){Kt({type:"Point",coordinates:[t.x,t.y]})}function Di(t){if(!e.tempShape)e.tempShape={start:t};else if(!e.tempShape.end)e.tempShape.end=t;else{const o=e.tempShape.start,n=e.tempShape.end,s=$o(o,n,t),r=Wt(o,n,s),a={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"arc",label:l("arcLabel"),controlPoints:{p0:o,p1:s,p2:n}};Ve({type:"LineString",coordinates:r},a),e.tempShape=null}}function _i(){if(!e.activeFloorId||!e.tempShape?.nodes||e.tempShape.nodes.length<3){e.tempShape=null;return}const t=[...e.tempShape.nodes.map(o=>[o.x,o.y]),[e.tempShape.nodes[0].x,e.tempShape.nodes[0].y]];Kt({type:"Polygon",coordinates:[t]}),document.getElementById("mode-select")?.click(),e.tempShape=null}function Ai(t){let o=null;if(e.hoveredFeatureId){const h=e.project.features.find(S=>S.properties.id===e.hoveredFeatureId);h&&(h.geometry.type==="Polygon"||h.geometry.type==="LineString")&&(o=h)}if(!o){const h=ve(t);h&&(h.geometry.type==="Polygon"||h.geometry.type==="LineString")&&(o=h)}if(!o){const h=e.selectedFeatureIds.find(S=>{const g=e.project.features.find(w=>w.properties.id===S);return g&&(g.geometry.type==="Polygon"||g.geometry.type==="LineString")})||null;h&&(o=e.project.features.find(S=>S.properties.id===h))}if(o||(o=e.project.features.find(h=>h.properties.floor===e.activeFloorId&&h.geometry.type==="Polygon")||e.project.features.find(h=>h.properties.floor===e.activeFloorId&&h.geometry.type==="LineString")),!o)return;let n=null,i=-1;if(o.geometry.type==="Polygon"){const h=o.geometry,S=xt(t,h);if(S.index===-1)return;n=ti(t,h,S.index),i=S.index}else{const h=o.geometry,S=Zr(t,h);if(S.index===-1)return;n=ni(t,h,S.index),i=S.index}if(!e.tempShape){e.tempShape={start:n,edgeIndex:i};return}if(e.tempShape.edgeIndex!==i){e.tempShape={start:n,edgeIndex:i};return}const s=e.tempShape.start,r=n,a=[[s.x,s.y],[r.x,r.y]],c=r.x-s.x,d=r.y-s.y,m=Math.sqrt(c*c+d*d),v=Math.round(m*e.metersPerPixel*100)/100,f={id:`F_${Date.now()}`,floor:e.activeFloorId,type:"path",subType:"door",label:l("doorLabel"),attachedTo:o.properties.id,door_length_m:v,door_edge_index:e.tempShape.edgeIndex};Ve({type:"LineString",coordinates:a},f),e.currentMode="select",document.getElementById("mode-select")?.classList.add("active"),document.getElementById("mode-door")?.classList.remove("active"),e.tempShape=null}function zi(t){const n=[...t.coordinates[0]];if(n.length<4)return!1;const i=n[0],s=n[n.length-1];(Math.abs(i[0]-s[0])>1e-4||Math.abs(i[1]-s[1])>1e-4)&&n.push([i[0],i[1]]);for(let r=0;r<n.length-1;r++){const a=n[r],c=n[r+1],d=Math.abs(a[1]-c[1])<1e-4,m=Math.abs(a[0]-c[0])<1e-4;if(!d&&!m)return!1}return!0}function Ni(t){const n=g=>Math.round(g/1e-4)*1e-4,i=new Map,s=new Map,r=(g,w,k)=>{const P=Math.min(w,k),T=Math.max(w,k),L=n(g);i.has(L)||i.set(L,[]),i.get(L).push({x1:n(P),x2:n(T)})},a=(g,w,k)=>{const P=Math.min(w,k),T=Math.max(w,k),L=n(g);s.has(L)||s.set(L,[]),s.get(L).push({y1:n(P),y2:n(T)})};for(const g of t){const w=g.coordinates[0];for(let k=0;k<w.length-1;k++){const P=w[k],T=w[k+1];Math.abs(P[1]-T[1])<1e-4?r(P[1],P[0],T[0]):a(P[0],P[1],T[1])}}const c=new Map,d=(g,w,k,P)=>{const T=`${n(g)},${n(w)}`,L=`${n(k)},${n(P)}`;return T<L?`${T}|${L}`:`${L}|${T}`};i.forEach((g,w)=>{const k=Array.from(new Set(g.flatMap(P=>[P.x1,P.x2]))).sort((P,T)=>P-T);for(const P of g)for(let T=0;T<k.length-1;T++){const L=k[T],_=k[T+1];if(L>=P.x1-1e-4&&_<=P.x2+1e-4){const N=d(L,w,_,w);c.set(N,(c.get(N)||0)+1)}}}),s.forEach((g,w)=>{const k=Array.from(new Set(g.flatMap(P=>[P.y1,P.y2]))).sort((P,T)=>P-T);for(const P of g)for(let T=0;T<k.length-1;T++){const L=k[T],_=k[T+1];if(L>=P.y1-1e-4&&_<=P.y2+1e-4){const N=d(w,L,w,_);c.set(N,(c.get(N)||0)+1)}}});const m=[];if(c.forEach((g,w)=>{if(g%2===1){const[k,P]=w.split("|"),[T,L]=k.split(",").map(Number),[_,N]=P.split(",").map(Number);m.push({x1:T,y1:L,x2:_,y2:N})}}),m.length===0)return[];const v=new Map;for(const g of m){const w=`${g.x1},${g.y1}`,k=`${g.x2},${g.y2}`;v.has(w)||v.set(w,[]),v.has(k)||v.set(k,[]),v.get(w).push({x:g.x2,y:g.y2}),v.get(k).push({x:g.x1,y:g.y1})}const f=new Set(m.map(g=>d(g.x1,g.y1,g.x2,g.y2))),h=[];for(;f.size>0;){const g=Array.from(f)[0].split("|")[0],[w,k]=g.split(",").map(Number),P={x:w,y:k},T=[P];let L=P,_=null;for(;;){const D=v.get(`${L.x},${L.y}`)||[];let u=null;for(const b of D){const B=d(L.x,L.y,b.x,b.y);if(f.has(B)&&(!_||b.x!==_.x||b.y!==_.y)){u=b;break}}if(!u||(f.delete(d(L.x,L.y,u.x,u.y)),_=L,L=u,T.push(L),L.x===P.x&&L.y===P.y))break}const N=T.map(D=>[D.x,D.y]);N.length>=4&&h.push(N)}if(h.length===0)return[];const S=g=>{let w=0;for(let k=0;k<g.length-1;k++){const[P,T]=g[k],[L,_]=g[k+1];w+=P*_-L*T}return Math.abs(w)/2};return h.sort((g,w)=>S(w)-S(g)),h[0]}function $i(t){const o=[...t].sort((r,a)=>r.x===a.x?r.y-a.y:r.x-a.x),n=(r,a,c)=>(a.x-r.x)*(c.y-r.y)-(a.y-r.y)*(c.x-r.x),i=[];for(const r of o){for(;i.length>=2&&n(i[i.length-2],i[i.length-1],r)<=0;)i.pop();i.push(r)}const s=[];for(let r=o.length-1;r>=0;r--){const a=o[r];for(;s.length>=2&&n(s[s.length-2],s[s.length-1],a)<=0;)s.pop();s.push(a)}return s.pop(),i.pop(),i.concat(s)}let ft=null;function Oi(){const t=document.getElementById("file-menu-trigger"),o=document.getElementById("output-menu-trigger"),n=document.getElementById("overview-menu-trigger"),i=document.getElementById("backstage-panel"),s=document.getElementById("backstage-close-btn"),r=document.getElementById("backstage-title"),a=document.getElementById("backstage-file-content"),c=document.getElementById("backstage-output-content"),d=document.getElementById("backstage-overview-content");if(!t||!o||!n||!i){console.error("Menü-Elemente konnten nicht gefunden werden!");return}const m=f=>{a.style.display="none",c.style.display="none",d.style.display="none",f==="file"?(a.style.display="block",r.textContent=l("filePanelTitle")):f==="output"?(c.style.display="block",r.textContent=l("outputPanelTitle")):f==="overview"&&(d.style.display="block",r.textContent=l("overviewPanelTitle")),i.classList.add("visible"),document.body.classList.add("backstage-visible"),ft=f,t.classList.remove("active"),o.classList.remove("active"),n.classList.remove("active"),document.getElementById(`${f}-menu-trigger`)?.classList.add("active")},v=()=>{i.classList.remove("visible"),document.body.classList.remove("backstage-visible"),ft=null,t.classList.remove("active"),o.classList.remove("active"),n.classList.remove("active")};t.addEventListener("click",f=>{f.stopPropagation(),ft==="file"?v():m("file")}),o.addEventListener("click",f=>{f.stopPropagation(),ft==="output"?v():m("output")}),n.addEventListener("click",f=>{f.stopPropagation(),ft==="overview"?v():m("overview")}),s.addEventListener("click",v)}function je(){const t=document.getElementById("gridInfo");if(!t)return;const o=Math.round(e.gridSize),n=e.activeLanguage==="de"?"Kasten":"cell",i=e.metersPerPixel;if(i&&i>0){const s=Math.round(i*e.gridSize*100)/100,r=(e.activeLanguage==="de","m");t.textContent=`1 ${n} ≈ ${o} px · ${s} ${r}`}else t.textContent=`1 ${n} ≈ ${o} px`}function Hi(t){const o=document.getElementById("toggleGridBtn"),n=document.getElementById("toggleSnapBtn"),i=document.getElementById("gridSizeInput"),s=document.getElementById("gridMinusBtn"),r=document.getElementById("gridPlusBtn"),a=document.getElementById("gridMetersInput"),c=document.getElementById("gridMetersMinusBtn"),d=document.getElementById("gridMetersPlusBtn"),m=document.getElementById("toggleAreaDimensions"),v=document.getElementById("togglePathLengths"),f=document.getElementById("toggleAreaAngles"),h=document.getElementById("toggleCircleRadius"),S=document.getElementById("toggleBeaconRing");o&&o.addEventListener("change",()=>{e.isGridVisible=o.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.isGridVisible=e.isGridVisible,g(),t()}),n&&n.addEventListener("change",()=>{e.isSnapEnabled=n.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.isSnapEnabled=e.isSnapEnabled,g(),G()}),i&&i.addEventListener("input",()=>{const w=parseInt(i.value,10);if(!isNaN(w)&&w>=5){e.gridSize=w,e.project.properties.sizegrid=e.gridSize;const k=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=k,a&&(a.value=String(k)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,g(),G(),je(),t()}}),s&&s.addEventListener("click",()=>{const w=Math.max(5,(e.gridSize||40)-5);e.gridSize=w,e.project.properties.sizegrid=e.gridSize,i&&(i.value=String(w));const k=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=k,a&&(a.value=String(k)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,g(),G(),je(),t()}),r&&r.addEventListener("click",()=>{const w=Math.min(400,(e.gridSize||40)+5);e.gridSize=w,e.project.properties.sizegrid=e.gridSize,i&&(i.value=String(w));const k=Math.round(e.metersPerPixel*e.gridSize*100)/100;e.metersPerGridCell=k,a&&(a.value=String(k)),e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.gridSize=e.gridSize,e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,g(),G(),je(),t()}),a&&a.addEventListener("input",()=>{const w=parseFloat(a.value);!isNaN(w)&&w>=.1&&(e.metersPerGridCell=Math.round(w*100)/100,e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,g(),je())}),c&&c.addEventListener("click",()=>{const w=Math.max(.1,(e.metersPerGridCell||1)-.1),k=Math.round(w*100)/100;e.metersPerGridCell=k,a&&(a.value=String(k)),e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,g(),je()}),d&&d.addEventListener("click",()=>{const w=Math.min(100,(e.metersPerGridCell||1)+.1),k=Math.round(w*100)/100;e.metersPerGridCell=k,a&&(a.value=String(k)),e.metersPerPixel=e.metersPerGridCell/e.gridSize,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.metersPerGridCell=e.metersPerGridCell,e.project.properties.settings.metersPerPixel=e.metersPerPixel,g(),je()}),document.querySelectorAll(".layer-toggle").forEach(w=>{w.addEventListener("change",k=>{const P=k.target,T=P.dataset.layer;T&&(e.visibleLayers[T]=P.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.visibleLayers={...e.project.properties.settings.visibleLayers,[T]:P.checked},g(),t())})}),m&&m.addEventListener("change",()=>{e.showDimensions.area=m.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,area:e.showDimensions.area},g(),t()}),f&&f.addEventListener("change",()=>{e.showDimensions.angles=f.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,angles:e.showDimensions.angles},g(),t()}),v&&v.addEventListener("change",()=>{e.showDimensions.path=v.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,path:e.showDimensions.path},g(),t()}),h&&h.addEventListener("change",()=>{e.showDimensions.circle=h.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showDimensions={...e.project.properties.settings.showDimensions,circle:e.showDimensions.circle},g(),t()}),S&&S.addEventListener("change",()=>{e.showBeaconRangeRing=S.checked,e.project.properties.settings=e.project.properties.settings||{},e.project.properties.settings.showBeaconRangeRing=e.showBeaconRangeRing,g(),t()}),je();function g(){try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}}}let Xe=null,en=null,Hn=null;function Ri(t){Xe=t.contextMenu,en=t.ctxMenuTypeSubmenu,Hn=t.ctxMenuAddOverlapPoint}function qi(t,o){if(!en)return;en.innerHTML="";const n=Se(),i=t.geometry.type==="Polygon"||t.geometry.type==="Point"?n[t.properties.subType]?.baseType:null;if(i){for(const s in n)if(n[s].baseType===i){const r=document.createElement("li");r.textContent=n[s].label,r.dataset.typeKey=s,r.addEventListener("click",()=>{e.project.features.forEach(a=>{if(e.selectedFeatureIds.includes(a.properties.id)){const c=n[a.properties.subType];c&&c.baseType===i&&(a.properties.subType=s)}}),R(),Z(),o()}),en.appendChild(r)}}}function Vi(t,o,n){Xe&&(Hn&&(Hn.style.display=n===2?"":"none"),Xe.style.display="block",Xe.style.left=`${t}px`,Xe.style.top=`${o}px`)}function os(){Xe&&(Xe.style.display="none")}function Gi(){const t=e.project.features.filter(o=>e.selectedFeatureIds.includes(o.properties.id));t.length!==0&&(e.clipboard=t.map(o=>JSON.parse(JSON.stringify(o))))}function Wi(t){if(!e.clipboard||e.clipboard.length===0)return;const o=e.gridSize||20,n=e.clipboard.map(i=>{const s=JSON.parse(JSON.stringify(i.geometry));if(s.type==="Point"){const c=s.coordinates;s.coordinates=[c[0]+o,c[1]+o]}else if(s.type==="LineString"){const c=s.coordinates;s.coordinates=c.map(([d,m])=>[d+o,m+o])}else if(s.type==="Polygon"){const c=s.coordinates;s.coordinates=c.map(d=>d.map(([m,v])=>[m+o,v+o]))}const r=`feat_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,a=`${i.properties.label}`;return{type:"Feature",geometry:s,properties:{...i.properties,id:r,label:a,floor:e.activeFloorId}}});e.project.features.push(...n),e.selectedFeatureIds=n.map(i=>i.properties.id),R(),Z(),t(),G()}let wt=null,St=null,Rn=null,It=null,tn=null;function Ki(t){wt=t.propertiesContent,St=t.propertiesPlaceholder,Rn=t.propertiesLabelInput,It=t.propertiesTypeSelect,tn=t.propertiesIsEmptyCheckbox}function he(){const t=document.getElementById("properties-panel");if(!wt||!St||!Rn||!It)return;if(e.selectedFeatureIds.length!==1){t&&(t.style.display="none"),wt.style.display="none",St.style.display="block";return}t&&(t.style.display="block"),wt.style.display="block",St.style.display="none";const o=e.selectedFeatureIds[0],n=e.project.features.find(I=>I.properties.id===o);if(!n){wt.style.display="none",St.style.display="block";return}Rn.value=n.properties.label,It.innerHTML="";const i=Se(),s=n.geometry.type==="Polygon"||n.geometry.type==="Point"?i[n.properties.subType]?.baseType:null;if(s){for(const I in i)if(i[I].baseType===s){const C=document.createElement("option");C.value=I,C.textContent=i[I].label,It.appendChild(C)}It.value=n.properties.subType}const r=document.getElementById("beacon-fields"),a=document.getElementById("beacon-uuid-input"),c=document.getElementById("beacon-serial-input"),d=document.getElementById("beacon-major-input"),m=document.getElementById("beacon-minor-input"),v=document.getElementById("beacon-installation-input"),f=document.getElementById("beacon-range-input"),h=document.getElementById("beacon-note-de-input"),S=document.getElementById("beacon-note-en-input");if(r){const I=n.geometry.type==="Point"&&n.properties.subType==="beacon",C=document.querySelector("#properties-panel h2");if(C&&C.childNodes[0]){const F=I?"beacon_parameters":"properties";C.childNodes[0].textContent=l(F)+" "}if(r.style.display=I?"block":"none",I){const F=document.querySelector('label[for="beacon-serial-input"]'),M=document.querySelector('label[for="beacon-installation-input"]'),j=document.querySelector('label[for="beacon-range-input"]'),z=document.querySelector('label[for="beacon-note-de-input"]');F&&(F.textContent=l("beacon_serial_label"),F.title=l("beacon_serial_desc")),M&&(M.textContent=l("beacon_installation_label"),M.title=l("beacon_installation_desc")),j&&(j.textContent=l("beacon_range_label"),j.title=l("beacon_range_desc")),z&&(z.textContent=l("beacon_note_de_label"),z.title=l("beacon_note_de_desc")),a&&(a.value=n.properties.beacon_uuid||""),c&&(c.value=n.properties.beacon_serial||""),d&&(d.value=n.properties.beacon_major?.toString()||""),m&&(m.value=n.properties.beacon_minor?.toString()||""),v&&(v.value=n.properties.beacon_installation||""),f&&(f.value=n.properties.beacon_range!==void 0?String(n.properties.beacon_range):""),h&&(h.value=n.properties.beacon_note_de||""),S&&(S.value=n.properties.beacon_note_en||"")}}const g=document.getElementById("properties-description-input"),w=document.getElementById("properties-opening-hours-input"),k=document.getElementById("properties-room-number-input"),P=document.getElementById("properties-designation-select");if(g&&(g.value=n.properties.description||""),w){const I=n.properties.opening_hours;if(!I)w.value="";else if(typeof I=="string")w.value=I;else{const C=[],F=I.weekly||{},M=Object.keys(F).map(q=>Number(q)).sort((q,Y)=>q-Y),j=q=>{switch(q){case 1:return l("weekdayMon");case 2:return l("weekdayTue");case 3:return l("weekdayWed");case 4:return l("weekdayThu");case 5:return l("weekdayFri");case 6:return l("weekdaySat");case 0:return l("weekdaySun");default:return""}};M.forEach(q=>{const Y=F[q].map(J=>`${J.start}–${J.end}`).join(", ");C.push(`${j(q)} ${Y}`)});const z=I.exceptions,$=I.ranges;Array.isArray(z)&&z.length>0&&C.push(`${l("openingHoursExceptions")}: ${z.length}`),Array.isArray($)&&$.length>0&&C.push(`${l("openingHoursRanges")}: ${$.length}`),w.value=C.join(" · ")}}k&&(k.value=n.properties.room_number||""),P&&(P.value=n.properties.designation||P.value);const T=document.querySelector('label[for="properties-description-input"]'),L=document.querySelector('label[for="properties-opening-hours-input"]'),_=document.querySelector('label[for="properties-room-number-input"]'),N=document.querySelector('label[for="properties-designation-select"]'),D=n.geometry.type!=="Point"||n.properties.subType!=="beacon";g&&(g.style.display=D?"":"none"),w&&(w.style.display=D?"":"none"),k&&(k.style.display=D?"":"none"),P&&(P.style.display=D?"":"none"),T&&(T.style.display=D?"":"none"),L&&(L.style.display=D?"":"none"),_&&(_.style.display=D?"":"none"),N&&(N.style.display=D?"":"none");const u=document.getElementById("open-opening-hours-modal-btn"),b=document.getElementById("open-occupancy-modal-btn"),B=n.properties.type==="area"&&n.geometry.type==="Polygon";if(u&&(u.style.display=B?"":"none"),b&&(b.style.display=B?"":"none"),tn){tn.checked=!!n.properties.isEmpty;const I=tn.parentElement;I&&(I.style.display=B?"":"none")}}function hn(){const t=document.getElementById("mode-merge");if(!t)return;const o=t.querySelector("span"),s=e.project.features.filter(a=>a.properties.floor===e.activeFloorId).filter(a=>e.selectedFeatureIds.includes(a.properties.id)&&(a.geometry.type==="Polygon"||a.geometry.type==="LineString"&&a.properties.subType==="arc")).length,r=l("merge");o&&(o.textContent=s>0?`${r} (${s})`:r),s>=2?t.classList.add("merge-ready"):t.classList.remove("merge-ready")}let me=null,pt=null,ut=null,mt=null,gt=null,qn={x:0,y:0},Vn={x:0,y:0},qo=!1,Vo=!1;function Ui(t){me=t.canvas,pt=t.scrollbarX,ut=t.scrollbarY,mt=t.thumbX,gt=t.thumbY}function At(t){return{x:(t.x-e.pan.x)/e.scale,y:(t.y-e.pan.y)/e.scale}}function yt(){const{scale:t,worldSize:o}=e;if(!me||!me.parentElement)return;const n=me.parentElement.clientWidth,i=me.parentElement.clientHeight,s=o.width*t,r=o.height*t;if(s<n)e.pan.x=(n-s)/2;else{const c=n-s;e.pan.x=Math.min(e.pan.x,0),e.pan.x=Math.max(e.pan.x,c)}if(r<i)e.pan.y=(i-r)/2;else{const c=i-r;e.pan.y=Math.min(e.pan.y,0),e.pan.y=Math.max(e.pan.y,c)}}function fn(){const{scale:t,pan:o,worldSize:n}=e;if(!me||!me.parentElement||!pt||!ut||!mt||!gt)return;const{clientWidth:i,clientHeight:s}=me.parentElement,r=n.width*t,a=r>i&&i>0;if(pt.style.display=a?"block":"none",a){const m=pt.clientWidth,v=i/r*m,f=Math.max(v,20),h=Math.max(r-i,0),S=10,g=Math.max(m-f-2*S,0),w=h>0?-o.x/h*g:0;mt.style.width=`${f}px`;const k=1,P=Math.abs(o.x-(i-r))<=k,T=Math.abs(o.x-0)<=k&&r>=i,L=P?S+g:T?S:S+Math.max(0,Math.min(w,g));mt.style.left=`${L}px`}const c=n.height*t,d=c>s&&s>0;if(ut.style.display=d?"block":"none",d){const m=ut.clientHeight,v=s/c*m,f=Math.max(v,20),h=Math.max(c-s,0),S=10,g=Math.max(m-f-2*S,0),w=h>0?-o.y/h*g:0;gt.style.height=`${f}px`;const k=1,P=Math.abs(o.y-(s-c))<=k,T=Math.abs(o.y-0)<=k&&c>=s,L=P?S+g:T?S:S+Math.max(0,Math.min(w,g));gt.style.top=`${L}px`}}function Yi(t){t.preventDefault(),e.isPanning=!0,e.panStart={x:t.clientX,y:t.clientY},me&&(me.style.cursor="grabbing")}function Zi(t){if(!e.isPanning)return;const o=t.clientX-e.panStart.x,n=t.clientY-e.panStart.y;e.pan.x+=o,e.pan.y+=n,e.panStart={x:t.clientX,y:t.clientY},yt(),Z(),fn()}function Ji(){!e.isPanning||!me||(e.isPanning=!1,e.currentMode==="pan"||e.currentMode==="move-element"?me.style.cursor="grab":e.currentMode==="select"?me.style.cursor="default":me.style.cursor="crosshair")}function mr(t){t.stopPropagation(),t.preventDefault(),qn={x:t.clientX,y:t.clientY},Vn={...e.pan},t.target===mt&&(qo=!0),t.target===gt&&(Vo=!0),document.addEventListener("mousemove",rs),document.addEventListener("mouseup",Xi,{once:!0})}function rs(t){if(t.preventDefault(),!(!pt||!ut)){if(qo){const o=t.clientX-qn.x,n=pt.clientWidth,i=me?.parentElement?.clientWidth||0,s=e.worldSize.width*e.scale,r=mt?.clientWidth||0,a=Math.max(s-i,0),d=Math.max(n-r-2*10,1);if(n>0&&a>0){const m=o/d*a;e.pan.x=Vn.x-m}yt(),Z(),fn()}if(Vo){const o=t.clientY-qn.y,n=ut.clientHeight,i=me?.parentElement?.clientHeight||0,s=e.worldSize.height*e.scale,r=gt?.clientHeight||0,a=Math.max(s-i,0),d=Math.max(n-r-2*10,1);if(n>0&&a>0){const m=o/d*a;e.pan.y=Vn.y-m}yt(),Z(),fn()}}}function Xi(){qo=!1,Vo=!1,document.removeEventListener("mousemove",rs)}let Ne=null;function Qi(t){Ne=t.canvas}function ea(t){if(e.selectedFeatureIds.length>0){e.isMovingElement=!0,e.dragStartPos=t,e.originalGeometriesOnMove.clear(),e.project.features.forEach(n=>{e.selectedFeatureIds.includes(n.properties.id)&&(e.originalGeometriesOnMove.set(n.properties.id,JSON.parse(JSON.stringify(n.geometry))),n.properties.controlPoints&&(n.properties.originalControlPoints=JSON.parse(JSON.stringify(n.properties.controlPoints))))});const o=new Set(e.selectedFeatureIds);e.project.features.forEach(n=>{const i=n.properties.attachedTo;i&&o.has(i)&&(e.originalGeometriesOnMove.has(n.properties.id)||(e.originalGeometriesOnMove.set(n.properties.id,JSON.parse(JSON.stringify(n.geometry))),n.properties.controlPoints&&(n.properties.originalControlPoints=JSON.parse(JSON.stringify(n.properties.controlPoints)))))}),Ne&&(Ne.style.cursor="move")}}function ta(t){if(!e.isMovingElement||e.selectedFeatureIds.length===0)return;const o=t.x-e.dragStartPos.x,n=t.y-e.dragStartPos.y,i=(s,r,a)=>{if(Array.isArray(s)&&typeof s[0]=="number"&&s.length===2){s[0]+=r,s[1]+=a;return}s.forEach(c=>{Array.isArray(c[0])?i(c,r,a):(c[0]+=r,c[1]+=a)})};e.project.features.forEach(s=>{const r=e.originalGeometriesOnMove.get(s.properties.id);if(r){const c=JSON.parse(JSON.stringify(r));"coordinates"in c&&(i(c.coordinates,o,n),s.geometry=c)}const a=s.properties.originalControlPoints;a&&(s.properties.controlPoints={p0:{x:a.p0.x+o,y:a.p0.y+n},p1:{x:a.p1.x+o,y:a.p1.y+n},p2:{x:a.p2.x+o,y:a.p2.y+n}})}),Z()}function na(){e.isMovingElement&&(e.isMovingElement=!1,e.originalGeometriesOnMove.clear(),e.project.features.forEach(t=>delete t.properties.originalControlPoints),Ne&&(Ne.style.cursor="default"),R())}function oa(t){if(e.selectedFeatureIds.length!==1)return!1;const o=e.project.features.find(s=>s.properties.id===e.selectedFeatureIds[0]);if(!o||o.geometry.type!=="LineString"&&o.geometry.type!=="Polygon")return!1;const n=8/e.scale;let i=[];if(o.geometry.type==="LineString"&&o.properties.subType==="arc"&&o.properties.controlPoints){const{p0:s,p1:r,p2:a}=o.properties.controlPoints;i=[s,r,a]}else{const s=o.geometry.type==="LineString"?o.geometry.coordinates:o.geometry.coordinates[0];i=(o.geometry.type==="Polygon"?s.slice(0,-1):s).map(a=>({x:a[0],y:a[1]}))}for(let s=0;s<i.length;s++)if(Math.sqrt((t.x-i[s].x)**2+(t.y-i[s].y)**2)<n)return e.isEditingPath=!0,e.editedFeatureId=o.properties.id,e.editedNodeIndex=s,Ne&&(Ne.style.cursor="grabbing"),!0;return!1}function ra(t){if(!e.isEditingPath||!e.editedFeatureId)return;const o=e.project.features.find(i=>i.properties.id===e.editedFeatureId);if(!o)return;const n=at(Ce(t));if(o.geometry.type==="LineString"&&o.properties.subType==="arc"&&o.properties.controlPoints){const i=o.properties.controlPoints;e.editedNodeIndex===0?i.p0=n:e.editedNodeIndex===1?i.p1=n:e.editedNodeIndex===2&&(i.p2=n),o.geometry.coordinates=Wt(i.p0,i.p2,i.p1)}else if(o.geometry.type==="LineString")o.geometry.coordinates[e.editedNodeIndex]=[n.x,n.y];else if(o.geometry.type==="Polygon"){const i=o.geometry.coordinates[0];i[e.editedNodeIndex]=[n.x,n.y],e.editedNodeIndex===0&&(i[i.length-1]=[n.x,n.y])}Z()}function sa(){!e.isEditingPath||!Ne||(e.isEditingPath=!1,Ne.style.cursor="default",R())}function ia(t,o){const n=parseInt(t.slice(1,3),16),i=parseInt(t.slice(3,5),16),s=parseInt(t.slice(5,7),16);return`rgba(${n}, ${i}, ${s}, ${o})`}let Mn=null,Je=null,Go=null,Wo=null,Oe=null,Gn=null,Ko=null,ss=null,Uo=null,Yo=null,is=null,Wn=null,nn=null,Zo=null,Jo=null,as=null,Xo=null,Qo=null,Kn=null,Un=null,Yn=null,on=null,Zn=null,kt=null,Pt=null,Jn=null,Bt=null,Ct=null,rn=null,le=null;function aa(t){Mn=t.typeManagerModal,Je=t.typeManagerList,Go=t.typeManagerDetailsContent,Wo=t.typeManagerPlaceholder,Oe=t.typeNameInput,Gn=t.typeEditorArea,Ko=t.typeFillColorInput,ss=t.typeFillColorSwatch,Uo=t.typeFillOpacitySlider,Yo=t.typeStrokeColorInput,is=t.typeStrokeColorSwatch,Wn=t.typeEditorPoint,nn=t.typeIconLibrary,Zo=t.typeIconColorInput,Jo=t.typeManagerDeleteBtn,as=t.newTypeChoiceModal,Xo=t.typeFontColorInput,Qo=t.typeFontSizeInput,Kn=t.typeTextStyleHeader,Un=t.typeAreaStyleHeader,Yn=t.typePointStyleHeader,on=t.typePreviewContainer,Zn=t.typePreviewHeader,kt=t.typePreviewArea,Pt=t.typePreviewAreaRect,Jn=t.typePreviewAreaLabel,Bt=t.typePreviewPoint,Ct=t.typePreviewPointIcon,rn=t.typePreviewPointLabel}function la(){e.styleOverrides=JSON.parse(JSON.stringify(Se())),Ut(),pa(),ps(),Mn.classList.remove("hidden")}function gr(){Mn.classList.add("hidden"),le=null,e.styleOverrides=null,Tn(void 0),Z()}function ca(){if(!e.styleOverrides)return;e.project.properties.elementTypeStyles||(e.project.properties.elementTypeStyles={});const t=e.project.properties.elementTypeStyles;Object.keys(e.styleOverrides).forEach(o=>{const n=e.styleOverrides[o];n.isDefault?delete t[o]:t[o]={label:n.label,baseType:n.baseType,fill:n.fill,stroke:n.stroke,icon:n.icon,iconColor:n.iconColor,fontSize:n.fontSize,fontColor:n.fontColor}}),Object.keys(t).forEach(o=>{e.styleOverrides[o]||delete t[o]}),R(),ot(),G(),e.styleOverrides=null,Z(),Mn.classList.add("hidden")}function Ut(){if(!e.styleOverrides||!Je)return;Je.innerHTML="";const t={},o={};for(const s in e.styleOverrides){const r=e.styleOverrides[s];r.baseType==="area"?t[s]=r:o[s]=r}const n=s=>{const r=document.createElement("li");return r.textContent=s,r.style.cssText="font-weight: bold; padding: 12px 8px 4px; color: var(--color-primary); background-color: var(--color-secondary); border-bottom: 1px solid var(--color-border);",r},i=(s,r)=>{const a=document.createElement("li");if(a.style.cssText="cursor: pointer; padding: 8px; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; gap: 8px;",r.baseType==="area"){const m=document.createElement("div");m.style.cssText=`width: 16px; height: 16px; border-radius: 4px; background-color: ${r.fill||"transparent"}; border: 1px solid ${r.stroke||"black"}; flex-shrink: 0;`,a.appendChild(m)}else if(r.baseType==="point"&&r.icon){const m="http://www.w3.org/2000/svg",v=document.createElementNS(m,"svg");v.setAttribute("viewBox","0 0 24 24"),v.style.cssText=`width: 16px; height: 16px; fill: ${r.iconColor||"black"}; flex-shrink: 0;`;const f=document.createElementNS(m,"path");f.setAttribute("d",r.icon),v.appendChild(f),a.appendChild(v)}const c=document.createElement("span"),d=r.isDefault?"":" (Cust.)";if(c.textContent=r.label+d,a.appendChild(c),a.dataset.subType=s,s===le){a.style.backgroundColor="var(--color-accent)",a.style.color="white";const m=a.querySelector("svg");m&&(m.style.fill="white")}return a.addEventListener("click",()=>{le=s,Ut(),ls(s)}),a};Object.keys(t).length>0&&(Je.appendChild(n(l("areasGroup"))),Object.keys(t).sort((r,a)=>t[r].label.localeCompare(t[a].label)).forEach(r=>Je.appendChild(i(r,t[r])))),Object.keys(o).length>0&&(Je.appendChild(n(l("pointsConnectorsGroup"))),Object.keys(o).sort((r,a)=>o[r].label.localeCompare(o[a].label)).forEach(r=>Je.appendChild(i(r,o[r]))))}function ls(t){if(!e.styleOverrides)return;Wo.classList.add("hidden"),Go.classList.remove("hidden");const o=e.styleOverrides[t];if(Oe.value=o.label,Qo.value=(o.fontSize||(o.baseType==="area"?14:12)).toString(),Xo.value=o.fontColor||(e.activeTheme==="dark"?"#e6e1ef":"#000000"),Kn&&(Kn.style.display="block"),Un&&(Un.style.display=o.baseType==="area"?"block":"none"),Yn&&(Yn.style.display=o.baseType==="point"?"block":"none"),o.baseType==="area"){Gn.style.display="block",Wn.style.display="none";const{hex:n,alpha:i}=ma(o.fill||"rgba(0,0,0,0.5)");Ko.value=n,Uo.value=i.toString(),Yo.value=o.stroke||"#000000"}else Gn.style.display="none",Wn.style.display="block",Zo.value=o.iconColor||"#34495e",document.querySelectorAll("#type-icon-library div").forEach(n=>{const i=n.querySelector("svg");i&&i.dataset.iconPath===o.icon?n.classList.add("active"):n.classList.remove("active")});ds(),Tn(o),Oe.disabled=!!o.isDefault,Jo.style.display=o.isDefault?"none":"block"}function cs(){if(!le||!e.styleOverrides)return;const t=e.styleOverrides[le];if(t.isDefault&&(t.isDefault=!1,Oe.disabled=!1,Jo.style.display="block"),Oe.value=Oe.value.trim(),!!Oe.value){t.label=Oe.value,t.fontSize=parseInt(Qo.value)||(t.baseType==="area"?14:12),t.fontColor=Xo.value,t.baseType==="area"?(t.fill=ia(Ko.value,parseFloat(Uo.value)),t.stroke=Yo.value):t.iconColor=Zo.value,ds(),Tn(t);try{Ut()}catch{}Z()}}async function yr(t){if(!e.styleOverrides)return;as.classList.add("hidden");const o=l("prompt_newFloorName"),n=l(t==="area"?"newAreaType":"newPointType"),i=await us(o,n);if(!i||i.trim()==="")return;const s=`custom_${i.trim().toLowerCase().replace(/[^a-z0-9]/gi,"_")}_${Date.now()}`,r=e.activeTheme==="dark";t==="area"?e.styleOverrides[s]={label:i.trim(),baseType:"area",fill:"rgba(128, 128, 128, 0.5)",stroke:"#808080",fontSize:14,fontColor:r?"#e6e1ef":"#000000",isDefault:!1}:e.styleOverrides[s]={label:i.trim(),baseType:"point",icon:An.info,iconColor:"#34495e",fontSize:12,fontColor:r?"#e6e1ef":"#000000",isDefault:!1},le=s,Ut(),ls(s)}async function da(){!le||!e.styleOverrides||e.styleOverrides[le].isDefault||!await ms(l("alert_deleteTypeConfirm",e.activeLanguage,e.styleOverrides[le].label))||!le||!e.styleOverrides||(delete e.styleOverrides[le],ps(),Ut(),Z())}function pa(){if(nn){nn.innerHTML="";for(const t in An){const o=An[t],n=document.createElement("div");n.style.cssText="padding: 4px; border: 1px solid transparent; border-radius: 4px; cursor: pointer;";const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","0 0 24 24"),i.style.width="32px",i.style.height="32px",i.style.fill="currentColor";const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d",o),i.appendChild(s),i.dataset.iconPath=o,n.appendChild(i),n.addEventListener("click",()=>{!le||!e.styleOverrides||(e.styleOverrides[le].icon=o,document.querySelectorAll("#type-icon-library > div").forEach(r=>r.classList.remove("active")),n.classList.add("active"),cs())}),nn.appendChild(n)}}}function ds(){if(!le||!e.styleOverrides)return;const t=e.styleOverrides[le];t.baseType==="area"&&(ss.style.backgroundColor=t.fill||"transparent",is.style.backgroundColor=t.stroke||"transparent")}function ua(){return e.activeTheme==="dark"?"#e6e1ef":"#1f2933"}function Tn(t){if(!on||!kt||!Bt)return;if(!t){on.classList.add("hidden"),kt.style.display="none",Bt.style.display="none";return}on.classList.remove("hidden"),Zn&&(Zn.textContent=l("typePreview"));const o=t.fontColor||ua(),n=t.baseType==="area"?l("previewAreaLabel"):l("previewPointLabel");if(t.baseType==="area"){if(kt.style.display="block",Bt.style.display="none",Pt){const i=t.fill||Ae.default.fill,s=t.stroke||Ae.default.stroke;Pt.style.background=i,Pt.style.borderColor=s,Pt.style.color=o}Jn&&(Jn.textContent=t.label||n)}else{kt.style.display="none",Bt.style.display="flex";const i=t.icon||yn.default,s=t.iconColor||"#34495e";if(Ct){Ct.innerHTML=`<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="${i}"></path></svg>`;const r=Ct.querySelector("svg"),a=Ct.querySelector("path");r&&(r.style.width="36px",r.style.height="36px"),a&&(le==="beacon"?(a.setAttribute("fill","none"),a.setAttribute("stroke",s),a.setAttribute("stroke-width","2"),a.setAttribute("stroke-linecap","round"),a.setAttribute("stroke-linejoin","round")):a.setAttribute("fill",s))}rn&&(rn.textContent=t.label||n,rn.style.color=o)}}function ps(){Wo.classList.remove("hidden"),Go.classList.add("hidden"),le=null,Tn(void 0)}function ma(t){const o=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(!o)return{hex:"#000000",alpha:1};const n=r=>("0"+r.toString(16)).slice(-2),i=`#${n(parseInt(o[1]))}${n(parseInt(o[2]))}${n(parseInt(o[3]))}`,s=o[4]!==void 0?parseFloat(o[4]):1;return{hex:i,alpha:s}}let us=async()=>null,ms=async()=>!1;function ga(t){us=t.showInputPrompt,ms=t.showConfirm}function ya(t){if(t.length<1)return t;const o=t[0],n=t[t.length-1];return(o[0]!==n[0]||o[1]!==n[1])&&t.push([o[0],o[1]]),t}function ha(t,o){const n=t.slice(0,-1),i=o.slice(0,-1),s=i.map((c,d)=>({a:{x:c[0],y:c[1]},b:{x:i[(d+1)%i.length][0],y:i[(d+1)%i.length][1]}})),r=[];for(let c=0;c<n.length;c++){const d={x:n[c][0],y:n[c][1]},m={x:n[(c+1)%n.length][0],y:n[(c+1)%n.length][1]},v=[];s.forEach(h=>{const S=Oo(d,m,h.a,h.b);if(S){const g=m.x-d.x,w=m.y-d.y,k=g*g+w*w,P=k===0?0:((S.x-d.x)*g+(S.y-d.y)*w)/k;P>=0&&P<=1&&v.push({t:P,p:S})}}),v.sort((h,S)=>h.t-S.t);const f=[{x:d.x,y:d.y},...v.map(h=>h.p),{x:m.x,y:m.y}];for(let h=0;h<f.length-1;h++){const S=f[h],g=f[h+1],w={x:(S.x+g.x)/2,y:(S.y+g.y)/2};Be(w,{coordinates:[o]})||(r.length===0&&r.push([S.x,S.y]),r.push([g.x,g.y]))}}const a=[];for(let c=0;c<r.length;c++){const d=a[a.length-1],m=r[c];(!d||d[0]!==m[0]||d[1]!==m[1])&&a.push(m)}return a}function gs(t,o){const n=t.slice(0,-1),i=o.slice(0,-1),s=[];for(let h=0;h<n.length;h++){const S={x:n[h][0],y:n[h][1]},g={x:n[(h+1)%n.length][0],y:n[(h+1)%n.length][1]};for(let w=0;w<i.length;w++){const k={x:i[w][0],y:i[w][1]},P={x:i[(w+1)%i.length][0],y:i[(w+1)%i.length][1]},T=Oo(S,g,k,P);T&&s.push(T)}}const r={coordinates:[t]},a={coordinates:[o]};if(n.forEach(h=>{Be({x:h[0],y:h[1]},a)&&s.push({x:h[0],y:h[1]})}),i.forEach(h=>{Be({x:h[0],y:h[1]},r)&&s.push({x:h[0],y:h[1]})}),s.length===0)return null;const c=s.reduce((h,S)=>h+S.x,0)/s.length,d=s.reduce((h,S)=>h+S.y,0)/s.length,m={x:c,y:d};if(Be(m,r)&&Be(m,a))return[m.x,m.y];const f=s.find(h=>Be(h,r)&&Be(h,a));return f?[f.x,f.y]:null}function fa(t,o){const i=[t[0]];for(let r=0;r<t.length-1;r++){const a={x:t[r][0],y:t[r][1]},c={x:t[r+1][0],y:t[r+1][1]},d=c.x-a.x,m=c.y-a.y,v=Math.sqrt(d*d+m*m);if(v<1e-6)continue;const f=d/v,h=m/v,S=[];for(let k=0;k<o.length-1;k++){const P={x:o[k][0],y:o[k][1]},T={x:o[k+1][0],y:o[k+1][1]},L=T.x-P.x,_=T.y-P.y,N=d*_-m*L,D=(P.x-a.x)*m-(P.y-a.y)*d;if(Math.abs(N)<1e-6&&Math.abs(D)<1e-6){const u=(P.x-a.x)*f+(P.y-a.y)*h,b=(T.x-a.x)*f+(T.y-a.y)*h,B=Math.max(0,Math.min(u,b)),I=Math.min(v,Math.max(u,b));I-B>1e-6&&S.push({a:B,b:I})}}if(S.length===0){i.push([c.x,c.y]);continue}S.sort((k,P)=>k.a-P.a);const g=[];for(const k of S)g.length===0||k.a>g[g.length-1].b+1e-6?g.push({a:k.a,b:k.b}):g[g.length-1].b=Math.max(g[g.length-1].b,k.b);let w=0;for(const k of g){if(k.a-w>1e-6){const P=a.x+f*w,T=a.y+h*w,L=a.x+f*k.a,_=a.y+h*k.a;(i.length===0||i[i.length-1][0]!==P||i[i.length-1][1]!==T)&&i.push([P,T]),i.push([L,_])}w=Math.max(w,k.b)}if(v-w>1e-6){const k=a.x+f*w,P=a.y+h*w,T=c.x,L=c.y;(i.length===0||i[i.length-1][0]!==k||i[i.length-1][1]!==P)&&i.push([k,P]),i.push([T,L])}}const s=[];for(let r=0;r<i.length;r++){const a=s[s.length-1],c=i[r];(!a||a[0]!==c[0]||a[1]!==c[1])&&s.push(c)}return s}function ys(t,o){for(let i=0;i<t.length-1;i++){const s={x:t[i][0],y:t[i][1]},r={x:t[i+1][0],y:t[i+1][1]};for(let a=0;a<o.length-1;a++){const c={x:o[a][0],y:o[a][1]},d={x:o[a+1][0],y:o[a+1][1]},m=Oo(s,r,c,d);if(m)return[m.x,m.y];const v=r.x-s.x,f=r.y-s.y,h=d.x-c.x,S=d.y-c.y,g=v*S-f*h,w=(c.x-s.x)*f-(c.y-s.y)*v;if(Math.abs(g)<1e-6&&Math.abs(w)<1e-6){const k=Math.sqrt(v*v+f*f);if(k<1e-6)continue;const P=v/k,T=f/k,L=(c.x-s.x)*P+(c.y-s.y)*T,_=(d.x-s.x)*P+(d.y-s.y)*T,N=Math.max(0,Math.min(L,_)),D=Math.min(k,Math.max(L,_));if(D-N>1e-6){const u=(N+D)/2,b=s.x+P*u,B=s.y+T*u;return[b,B]}}}}return null}let zt=null,Te=null,ue,hr,fr,Xn,Qn,hs,fs,eo,to,Qe,no,He,bs,vs,ke,xs,Es,br,vr,bn,vn,xn,oo,En,ro,so,xr,io,ws,Ss,Er,ao,lo,co,wn,po=null,uo=null,mo=null,go=null,wr,Sr,Ir,kr,Pr,be,Ge,Ht,Rt,Br,Cr,Lr,Lt=null,Nt=null,st=null,yo=null,ho=null,fo=null,Mt=null,$t=null,Tt=null,Ft=null,sn=null,an=null,ln=null,cn=null,dn=null,pn=null,bo=null,vo=null,xo=null,Is=null,qt=null,jt=null,ks=null,un=null,mn=null,gn=null,Eo=null,Ps=null,Bs=null,wo=null,Cs=null,Ls=null,Ms=null,So=null,Ts=null,Fs=null,js=null,Ds=null,Io=null,ko=null,Po=null,Bo,_s,Mr,Tr,Fr,Co,jr,Lo,Dr,Mo,To,_r,Ar,zr,Fo,As,jo,zs,Ns,Sn,$s,Os,Hs,Do,De,er,tr,Vt,Gt,_o,Ao,In,kn,Pn,Nr,Bn,$r,Or,Cn,Hr,Rr,Ln,nr;function ba(t,o){let n;return function(){clearTimeout(n),n=window.setTimeout(t,o)}}const bt=ba(Z,50);function or(){const t=`mode-${e.currentMode}`,o=document.getElementById(t);e.tempShape&&e.currentMode!=="select"&&e.currentMode!=="pan"&&e.currentMode!=="move-element"?(document.querySelectorAll(".tool-btn").forEach(n=>n.classList.remove("has-temp-shape")),o&&o.classList.add("has-temp-shape")):document.querySelectorAll(".tool-btn").forEach(n=>n.classList.remove("has-temp-shape"))}function H(){Z(),fn(),or(),je(),Ba();const t=document.getElementById("floor3DView"),o=document.getElementById("floor3DContent");t&&t.style.display==="flex"&&o&&zt&&zt.render3DFloorStack(e.project,"floor3DContent")}function va(t){t.preventDefault();const o=.1,n=e.scale,i={x:t.offsetX,y:t.offsetY},s=At(i),r=t.deltaY<0?n*(1+o):n/(1+o);e.scale=Math.max(.1,Math.min(r,10)),e.pan.x=i.x-s.x*e.scale,e.pan.y=i.y-s.y*e.scale,yt(),H()}function xa(t){if(e.currentMode==="scissors"){const i=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.properties.type==="area"&&!c.properties.isPlaceholder&&c.geometry.type==="Polygon"&&Be(t,c.geometry)),s=e.project.features.filter(c=>c.properties.floor===e.activeFloorId&&c.geometry.type==="LineString"&&ns(t,c.geometry));let r,a;if(e.selectedFeatureIds.length===1){const c=e.project.features.find(d=>d.properties.id===e.selectedFeatureIds[0]);c?.geometry.type==="Polygon"?(r=c,a=i.find(d=>d.properties.id!==r?.properties.id)):c?.geometry.type==="LineString"&&(r=c,a=s.find(d=>d.properties.id!==r?.properties.id))}else{r=i[0]||s[0];const c=r&&r.geometry.type==="Polygon"?i:s;a=c&&c.length>1?c[1]:void 0}if(r&&a){if(r.geometry.type==="Polygon"&&a.geometry.type==="Polygon"){const c=r.geometry.coordinates[0],d=a.geometry.coordinates[0],m=ha(c,d);if(m.length>=4){const v=gs(c,d);r.geometry.coordinates[0]=ya(m),v&&e.activeFloorId&&Ve({type:"Point",coordinates:v},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:l("previewPointLabel")}),R(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H(),G();return}}else if(r.geometry.type==="LineString"&&a.geometry.type==="LineString"){const c=r.geometry.coordinates,d=a.geometry.coordinates,m=ys(c,d),v=fa(c,d);if(v.length>=2){r.geometry.coordinates=v,m&&e.activeFloorId&&Ve({type:"Point",coordinates:m},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:l("previewPointLabel")}),R(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H(),G();return}}}else{const c=e.hoveredFeatureId||ve(t)?.properties.id||null;if(c){const d=e.project.features.find(m=>m.properties.id===c);if(d&&d.geometry.type==="Polygon"&&e.hoveredEdgeIndex!==-1){const m=d.geometry.coordinates[0],v=e.hoveredEdgeIndex+1;if(m.length>4&&v>0&&v<m.length){m.splice(v,1),m[m.length-1]=m[0],R(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H(),G();return}}}}}if(e.currentMode==="select"&&e.isAltPressed&&e.hoveredEdgeIndex!==-1&&e.hoveredFeatureId){const i=e.project.features.find(s=>s.properties.id===e.hoveredFeatureId);if(i&&i.geometry.type==="Polygon"){const s=[t.x,t.y];i.geometry.coordinates[0].splice(e.hoveredEdgeIndex+1,0,s),R(),e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H();return}}const o=Ce(t),n=e.currentMode==="line"||e.currentMode==="arc"||e.currentMode==="point"?at(o):o;switch(e.currentMode){case"area":Ci(n);break;case"square":Li(n);break;case"polygon":Fi(n);break;case"circle":Mi(n);break;case"line":Ti(n);break;case"arc":Di(n);break;case"door":Ai(t);break;case"point":ji(n);break;case"calibrate":{if(e.tempShape){if(e.tempShape.start){const i=ve(n);let s=at(Ce(n));if(i&&i.properties.floor===e.activeFloorId){if(i.geometry.type==="Point"){const d=i.geometry.coordinates;s={x:d[0],y:d[1]}}else if(i.geometry.type==="LineString"){const d=i.geometry;let m=null,v=1/0;for(let f=0;f<d.coordinates.length-1;f++){const h={x:d.coordinates[f][0],y:d.coordinates[f][1]},S={x:d.coordinates[f+1][0],y:d.coordinates[f+1][1]},g=S.x-h.x,w=S.y-h.y,k=g*g+w*w;if(k===0)continue;const P=((n.x-h.x)*g+(n.y-h.y)*w)/k,T=P<0?0:P>1?1:P,L=h.x+T*g,_=h.y+T*w,N=Math.hypot(n.x-L,n.y-_);N<v&&(v=N,m={x:L,y:_})}m&&(s=m)}else if(i.geometry.type==="Polygon"){const d=i.geometry.coordinates[0];let m=null,v=1/0;for(let f=0;f<d.length-1;f++){const h={x:d[f][0],y:d[f][1]},S={x:d[f+1][0],y:d[f+1][1]},g=S.x-h.x,w=S.y-h.y,k=g*g+w*w;if(k===0)continue;const P=((n.x-h.x)*g+(n.y-h.y)*w)/k,T=P<0?0:P>1?1:P,L=h.x+T*g,_=h.y+T*w,N=Math.hypot(n.x-L,n.y-_);N<v&&(v=N,m={x:L,y:_})}m&&(s=m)}}const r=s.x-e.tempShape.start.x,a=s.y-e.tempShape.start.y,c=Math.sqrt(r*r+a*a);Pe(l("calibratePrompt")).then(d=>{const m=d?parseFloat(d):NaN;if(!Number.isNaN(m)&&m>0){const v=m/c;e.metersPerPixel=v;const f=Math.round(v*e.gridSize*100)/100;e.metersPerGridCell=f;const h=document.getElementById("gridMetersInput");h&&(h.value=String(f)),je(),H()}e.tempShape=null})}}else{const i=e.measureLabels.find(a=>n.x>=a.bx&&n.x<=a.bx+a.w&&n.y>=a.by&&n.y<=a.by+a.h);if(i){const a=i.pxLength;Pe(l("calibratePrompt")).then(c=>{const d=c?parseFloat(c):NaN;if(!Number.isNaN(d)&&d>0){const m=d/a;e.metersPerPixel=m;const v=Math.round(m*e.gridSize*100)/100;e.metersPerGridCell=v;const f=document.getElementById("gridMetersInput");f&&(f.value=String(v)),je(),H()}});break}const s=ve(n);let r=at(Ce(n));if(s&&s.properties.floor===e.activeFloorId){if(s.geometry.type==="Point"){const a=s.geometry.coordinates;r={x:a[0],y:a[1]}}else if(s.geometry.type==="LineString"){const a=s.geometry;let c=null,d=1/0;for(let m=0;m<a.coordinates.length-1;m++){const v={x:a.coordinates[m][0],y:a.coordinates[m][1]},f={x:a.coordinates[m+1][0],y:a.coordinates[m+1][1]},h=f.x-v.x,S=f.y-v.y,g=h*h+S*S;if(g===0)continue;const w=((n.x-v.x)*h+(n.y-v.y)*S)/g,k=w<0?0:w>1?1:w,P=v.x+k*h,T=v.y+k*S,L=Math.hypot(n.x-P,n.y-T);L<d&&(d=L,c={x:P,y:T})}c&&(r=c)}else if(s.geometry.type==="Polygon"){const a=s.geometry.coordinates[0];let c=null,d=1/0;for(let m=0;m<a.length-1;m++){const v={x:a[m][0],y:a[m][1]},f={x:a[m+1][0],y:a[m+1][1]},h=f.x-v.x,S=f.y-v.y,g=h*h+S*S;if(g===0)continue;const w=((n.x-v.x)*h+(n.y-v.y)*S)/g,k=w<0?0:w>1?1:w,P=v.x+k*h,T=v.y+k*S,L=Math.hypot(n.x-P,n.y-T);L<d&&(d=L,c={x:P,y:T})}c&&(r=c)}}e.tempShape={start:r}}break}case"select":Rs(t);break;case"merge":{const i=ve(t);if(i){const s=i.properties.id,r=e.selectedFeatureIds.indexOf(s);r>-1?e.selectedFeatureIds.splice(r,1):e.selectedFeatureIds.push(s),He.disabled=e.selectedFeatureIds.length===0,he(),hn(),H()}break}}or()}function Ea(){const t=e.selectedFeatureIds.slice(),o=e.project.features.filter(f=>t.includes(f.properties.id)&&f.properties.floor===e.activeFloorId),n=o.filter(f=>f.geometry.type==="Polygon"),i=o.filter(f=>f.geometry.type==="LineString");if(n.length<1||n.length+i.length<2){alert(l("alert_selectAtLeastTwo"));return}let s=null;if(n.length>0&&i.length===0&&n.every(f=>zi(f.geometry))){const f=Ni(n.map(h=>h.geometry));f&&f.length>=4&&(s=f)}if(!s){const f=[];for(const g of n){const w=g.geometry.coordinates[0];for(let k=0;k<w.length-1;k++)f.push({x:w[k][0],y:w[k][1]})}for(const g of i)if(g.properties.subType==="arc"&&g.properties.controlPoints){const{p0:w,p1:k,p2:P}=g.properties.controlPoints;Wt(w,P,k,24).forEach(([L,_])=>f.push({x:L,y:_}))}else g.geometry.coordinates.forEach(([k,P])=>f.push({x:k,y:P}));if(f.length<3){alert(l("alert_notEnoughPoints"));return}const h=$i(f);if(h.length<3){alert(l("alert_notEnoughPoints"));return}const S=h.map(g=>[g.x,g.y]);S.push([h[0].x,h[0].y]),s=S}const a=Se(),c=Object.keys(a).find(f=>a[f].baseType==="area")||"raum",d=a[c]?.label||"Raum",m=e.project.features.filter(f=>f.properties.type==="area").length+1,v={type:"Feature",geometry:{type:"Polygon",coordinates:[s]},properties:{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"area",subType:c,label:`${d} ${m}`}};e.project.features.push(v),R(),H(),G()}function Rs(t){const o=ve(t),n=o?o.properties.id:null;if(e.isCtrlPressed){if(n){const i=e.selectedFeatureIds.indexOf(n);i>-1?e.selectedFeatureIds.splice(i,1):e.selectedFeatureIds.push(n)}}else e.selectedFeatureIds=n?[n]:[];He.disabled=e.selectedFeatureIds.length===0,he(),hn(),H()}function qr(t){const o=no.querySelector(`option[data-type="${t}"]`);no.querySelectorAll("optgroup").forEach(n=>{let i=!1;n.querySelectorAll("option").forEach(s=>{s.dataset.type===t?(s.style.display="",i=!0):s.style.display="none"}),n.style.display=i?"":"none"}),o&&(o.selected=!0)}function $e(){os()}function wa(t){t.preventDefault(),os();const o=At({x:t.offsetX,y:t.offsetY}),n=ve(o);if(!n||(e.selectedFeatureIds.includes(n.properties.id)||(e.selectedFeatureIds=[n.properties.id],H(),he()),e.selectedFeatureIds.length===0))return;qi(n,()=>he());const i=n.properties.type==="area"&&n.geometry.type==="Polygon",s=document.getElementById("ctx-menu-edit-contents"),r=document.getElementById("ctx-menu-edit-opening-hours"),a=document.getElementById("ctx-menu-edit-occupancy"),c=document.getElementById("ctx-menu-toggle-accessibility");s&&(s.style.display=i?"":"none"),r&&(r.style.display=i?"":"none"),a&&(a.style.display=i?"":"none"),c&&(c.style.display=i?"":"none"),Vi(t.clientX,t.clientY,e.selectedFeatureIds.length)}async function Sa(){if(e.selectedFeatureIds.length!==1){alert(l("alert_renameSelectOne"));return}const t=e.project.features.find(n=>n.properties.id===e.selectedFeatureIds[0]);if(!t)return;const o=await Pe(l("prompt_renameElement"),t.properties.label);o&&o.trim()!==""&&(t.properties.label=o.trim(),R(),Z(),he(),G())}function Vr(){const t=[],o=e.gridSize||20,n=e.project.features.filter(i=>e.selectedFeatureIds.includes(i.properties.id));n.length!==0&&(n.forEach(i=>{const s=`feat_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,r=`${i.properties.label} - Kopie`,a=JSON.parse(JSON.stringify(i.geometry)),c=m=>{m.forEach(v=>{Array.isArray(v[0])?c(v):(v[0]+=o,v[1]+=o)})};"coordinates"in a&&c(a.coordinates);const d={type:"Feature",properties:{...i.properties,id:s,label:r},geometry:a};t.push(d)}),e.project.features.push(...t),e.selectedFeatureIds=t.map(i=>i.properties.id),R(),H(),he(),G())}function Ia(){Gi()}function ka(){if(!e.activeFloorId)return;if(e.selectedFeatureIds.length!==2){alert(l("alert_selectTwo"));return}const[t,o]=e.selectedFeatureIds,n=e.project.features.find(r=>r.properties.id===t),i=e.project.features.find(r=>r.properties.id===o);if(!n||!i)return;if(n.properties.floor!==e.activeFloorId||i.properties.floor!==e.activeFloorId){alert(l("alert_sameFloor"));return}let s=null;if(n.geometry.type==="Polygon"&&i.geometry.type==="Polygon"){const r=n.geometry.coordinates[0],a=i.geometry.coordinates[0];s=gs(r,a)}else n.geometry.type==="LineString"&&i.geometry.type==="LineString"&&(s=ys(n.geometry.coordinates,i.geometry.coordinates));if(!s){alert(l("alert_noOverlap"));return}Ve({type:"Point",coordinates:s},{id:`feat_${Date.now()}`,floor:e.activeFloorId,type:"point",subType:"meeting-point",label:l("previewPointLabel")}),R(),G(),Z()}function Pa(){Wi(()=>he())}function Gr(){e.selectedFeatureIds.length!==0&&(e.project.features.forEach(t=>{if(e.selectedFeatureIds.includes(t.properties.id)&&t.properties.type==="area"&&t.geometry.type==="Polygon"&&!t.properties.isEmpty){const o=!!t.properties.isAccessible;t.properties.isAccessible=!o}}),R(),G(),H())}function Ba(){const t=e.project.features.some(n=>e.selectedFeatureIds.includes(n.properties.id)&&n.properties.type==="area"&&n.geometry.type==="Polygon"&&!n.properties.isEmpty),o=document.getElementById("ctx-menu-toggle-accessibility");o&&(o.style.display=t?"":"none"),qt&&(qt.disabled=!t)}function zo(t){Nt&&(Nt.innerHTML="",t.forEach((o,n)=>{const i=document.createElement("div");i.style.display="flex",i.style.alignItems="center",i.style.gap="0.5rem",i.style.margin="0.25rem 0";const s=document.createElement("input");s.type="text",s.value=o,s.style.flex="1",s.addEventListener("input",()=>{t[n]=s.value});const r=document.createElement("button");r.textContent="×",r.className="mini-btn",r.addEventListener("click",()=>{t.splice(n,1),zo(t)}),i.appendChild(s),i.appendChild(r),Nt.appendChild(i)}))}function Ca(){if(!Lt||!Nt)return;const t=e.project.features.filter(s=>e.selectedFeatureIds.includes(s.properties.id));if(t.length!==1){be&&Ge&&(Ge.textContent=l("alert_renameSelectOne"),be.classList.remove("hidden"),Ht?.addEventListener("click",()=>be.classList.add("hidden")),Rt?.addEventListener("click",()=>be.classList.add("hidden")));return}const o=t[0],n=Array.isArray(o.properties.contents)?[...o.properties.contents]:[];zo(n),Lt.classList.remove("hidden");const i=()=>{if(!st)return;const s=st.value.trim();s!==""&&(n.push(s),st.value="",zo(n))};yo&&(yo.onclick=i),st&&(st.onkeydown=s=>{s.key==="Enter"&&i()}),ho&&(ho.onclick=()=>{o.properties.contents=n.filter(s=>s.trim()!==""),R(),G(),Lt?.classList.add("hidden"),H()}),fo&&(fo.onclick=()=>{Lt?.classList.add("hidden")})}function rr(t){switch(t){case 1:return l("weekdayMon");case 2:return l("weekdayTue");case 3:return l("weekdayWed");case 4:return l("weekdayThu");case 5:return l("weekdayFri");case 6:return l("weekdaySat");case 0:return l("weekdaySun");default:return""}}function No(t){$t&&($t.innerHTML="",t.forEach((o,n)=>{const i=document.createElement("div");i.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const s=document.createElement("span");s.textContent=o.name?String(o.name):"",s.style.fontWeight="600";const r=document.createElement("span");if(typeof o.weekday=="number"){const m=rr(o.weekday);r.textContent=m}else o.date?r.textContent=o.date:o.startDate&&o.endDate?r.textContent=`${o.startDate}–${o.endDate}`:r.textContent="";const a=document.createElement("span");o.start&&o.end&&(a.textContent=`${o.start}–${o.end}`);const c=document.createElement("span");c.textContent=o.note||"",c.style.flex="1";const d=document.createElement("button");d.textContent="×",d.className="mini-btn",d.addEventListener("click",()=>{t.splice(n,1),No(t)}),o.name&&i.appendChild(s),i.appendChild(r),i.appendChild(a),i.appendChild(c),i.appendChild(d),$t.appendChild(i)}))}function Wr(){if(!Mt||!$t)return;const t=e.project.features.filter(r=>e.selectedFeatureIds.includes(r.properties.id));if(t.length!==1){be&&Ge&&(Ge.textContent=l("alert_renameSelectOne"),be.classList.remove("hidden"),Ht?.addEventListener("click",()=>be.classList.add("hidden")),Rt?.addEventListener("click",()=>be.classList.add("hidden")));return}const o=t[0],n=Array.isArray(o.properties.occupancy)?JSON.parse(JSON.stringify(o.properties.occupancy)):[];No(n),Mt.classList.remove("hidden");const i=()=>{const r=Tt?.value||"date",a=r==="weekday",c=r==="date",d=r==="range";Ft&&(Ft.style.display=a?"":"none");const m=document.getElementById("occupancy-weekday-label");m&&(m.style.display=a?"":"none"),sn&&(sn.style.display=c?"":"none");const v=document.getElementById("occupancy-date-label");v&&(v.style.display=c?"":"none"),cn&&(cn.style.display=d?"":"none"),dn&&(dn.style.display=d?"":"none");const f=document.getElementById("occupancy-range-start-label");f&&(f.style.display=d?"":"none");const h=document.getElementById("occupancy-range-end-label");h&&(h.style.display=d?"":"none"),an&&(an.style.display=a||c||d?"":"none"),ln&&(ln.style.display=a||c||d?"":"none");const S=document.getElementById("occupancy-start-label");S&&(S.style.display=a||c||d?"":"none");const g=document.getElementById("occupancy-end-label");g&&(g.style.display=a||c||d?"":"none")};i(),Tt&&(Tt.onchange=i);const s=()=>{const r=Tt?.value||"date",a=an?.value||"",c=ln?.value||"",d=pn?.value||"",m=o.properties.label||"";if(r==="weekday"){const v=Ft?.value?parseInt(Ft.value,10):NaN;if(isNaN(v)||!a||!c)return;n.push({name:m,weekday:v,start:a,end:c,note:d})}else if(r==="date"){const v=sn?.value||"";if(!v||!a||!c)return;n.push({name:m,date:v,start:a,end:c,note:d})}else if(r==="range"){const v=cn?.value||"",f=dn?.value||"";if(!v||!f)return;n.push({name:m,startDate:v,endDate:f,start:a||void 0,end:c||void 0,note:d})}pn&&(pn.value=""),No(n)};bo&&(bo.onclick=s),vo&&(vo.onclick=()=>{o.properties.occupancy=n,R(),G(),Mt?.classList.add("hidden"),H()}),xo&&(xo.onclick=()=>{Mt?.classList.add("hidden")})}function et(t){if(un&&(un.innerHTML="",t.weekly&&Object.keys(t.weekly).forEach(o=>{const n=t.weekly[o];n.forEach((i,s)=>{const r=document.createElement("div");r.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const a=document.createElement("span");a.textContent=`${rr(Number(o))}`;const c=document.createElement("span");c.textContent=`${i.start}–${i.end}`;const d=document.createElement("button");d.textContent="×",d.className="mini-btn",d.addEventListener("click",()=>{n.splice(s,1),n.length===0&&delete t.weekly[o],et(t)}),r.appendChild(a),r.appendChild(c),r.appendChild(d),un.appendChild(r)})})),mn){mn.innerHTML="";const o=Array.isArray(t.exceptions)?t.exceptions:[];o.forEach((n,i)=>{const s=document.createElement("div");s.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const r=document.createElement("span");r.textContent=n.date;const a=document.createElement("span");n.start&&n.end&&(a.textContent=`${n.start}–${n.end}`);const c=document.createElement("button");c.textContent="×",c.className="mini-btn",c.addEventListener("click",()=>{o.splice(i,1),t.exceptions=o,et(t)}),s.appendChild(r),s.appendChild(a),s.appendChild(c),mn.appendChild(s)})}if(gn){gn.innerHTML="";const o=Array.isArray(t.ranges)?t.ranges:[];o.forEach((n,i)=>{const s=document.createElement("div");s.style.cssText="display:flex; gap:.5rem; align-items:center; margin:.25rem 0;";const r=document.createElement("span");r.textContent=`${n.startDate}–${n.endDate}`;const a=document.createElement("span");n.start&&n.end&&(a.textContent=`${n.start}–${n.end}`);const c=document.createElement("button");c.textContent="×",c.className="mini-btn",c.addEventListener("click",()=>{o.splice(i,1),t.ranges=o,et(t)}),s.appendChild(r),s.appendChild(a),s.appendChild(c),gn.appendChild(s)})}}function La(t){const o=[];return t.weekly&&Object.keys(t.weekly).map(i=>Number(i)).sort((i,s)=>i-s).forEach(i=>{const s=rr(i),r=t.weekly[i].map(a=>`${a.start}–${a.end}`).join(", ");o.push(`${s} ${r}`)}),Array.isArray(t.exceptions)&&t.exceptions.length>0&&o.push(`${l("openingHoursExceptions")}: ${t.exceptions.length}`),Array.isArray(t.ranges)&&t.ranges.length>0&&o.push(`${l("openingHoursRanges")}: ${t.ranges.length}`),o.join(" · ")}function Kr(){if(!jt)return;const t=e.project.features.filter(s=>e.selectedFeatureIds.includes(s.properties.id));if(t.length!==1){be&&Ge&&(Ge.textContent=l("alert_renameSelectOne"),be.classList.remove("hidden"),Ht?.addEventListener("click",()=>be.classList.add("hidden")),Rt?.addEventListener("click",()=>be.classList.add("hidden")));return}const o=t[0];let n={};const i=o.properties.opening_hours;i&&typeof i=="object"?n=JSON.parse(JSON.stringify(i)):n={weekly:{},exceptions:[],ranges:[]},et(n),jt.classList.remove("hidden"),wo&&(wo.onclick=()=>{const s=Eo?.value?parseInt(Eo.value,10):NaN,r=Ps?.value||"",a=Bs?.value||"";isNaN(s)||!r||!a||(n.weekly[s]||(n.weekly[s]=[]),n.weekly[s].push({start:r,end:a}),et(n))}),So&&(So.onclick=()=>{const s=Cs?.value||"",r=Ls?.value||"",a=Ms?.value||"";s&&(n.exceptions=Array.isArray(n.exceptions)?n.exceptions:[],n.exceptions.push({date:s,start:r||void 0,end:a||void 0}),et(n))}),Io&&(Io.onclick=()=>{const s=Ts?.value||"",r=Fs?.value||"",a=js?.value||"",c=Ds?.value||"";!s||!r||(n.ranges=Array.isArray(n.ranges)?n.ranges:[],n.ranges.push({startDate:s,endDate:r,start:a||void 0,end:c||void 0}),et(n))}),ko&&(ko.onclick=()=>{o.properties.opening_hours=n;const s=La(n);En.value=s,R(),G(),jt?.classList.add("hidden"),H()}),Po&&(Po.onclick=()=>{jt?.classList.add("hidden")})}function pe(){const t=document.getElementById("overview-stats-panel");if(!t)return;const o=e.project.properties.projectName||l("unnamedProject"),n=ze(),i=n.length,s=e.project.features.filter(d=>d.properties.type==="area"&&!d.properties.isPlaceholder).length,r=e.project.features.filter(d=>d.properties.type==="point").length;let a=`<div><span>${l("stat_project")}:</span><span class="value">${o}</span></div><div><span>${l("stat_floors")}:</span><span class="value">${i}</span></div><div><span>${l("stat_areas")}:</span><span class="value">${s}</span></div><div><span>${l("stat_points")}:</span><span class="value">${r}</span></div>`;t.innerHTML=a;const c=document.getElementById("overview-floor-list");c&&(c.innerHTML="",n.forEach(d=>{const m=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder).length,v=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point").length,f=document.createElement("div");f.className="floor-block";const h=document.createElement("div");h.className="floor-card";const S=document.createElement("img");S.className="floor-thumb",e.cachedFloorPlanImages[d]&&(S.src=e.cachedFloorPlanImages[d].src,h.classList.add("has-thumb"));const g=document.createElement("div");g.className="floor-meta";const w=document.createElement("div");w.className="name",w.textContent=d;const k=document.createElement("div");k.className="counts",k.textContent=`${l("stat_areas")}: ${m} · ${l("stat_points")}: ${v}`,g.appendChild(w),g.appendChild(k),h.appendChild(S),h.appendChild(g),h.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),f.appendChild(h);const P=document.createElement("button");P.className="beacon-toggle";const T=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="point"&&u.properties.subType==="beacon");P.textContent=`${l("overviewBeacons")} (${T.length})`;const L=document.createElement("div");L.className="beacon-section",P.addEventListener("click",()=>{L.style.display===""||L.style.display==="none"?(L.innerHTML="",T.forEach(b=>{const B=document.createElement("div");B.className="beacon-card";const I=document.createElement("div");I.className="beacon-meta";const C=document.createElement("div");C.className="name";const F=b.properties.beacon_serial||"",M=b.properties.label||l("point_beacon_label");C.textContent=F?`${M} · ${F}`:M;const j=document.createElement("div");j.className="counts";const z=b.properties.beacon_range,$=b.properties.beacon_note_de||b.properties.beacon_note_en||"",q=[];q.push(`${l("beacon_serial_label")}: ${F||"-"}`),typeof z=="number"&&q.push(`${l("beacon_range_label")}: ${z}`),$&&q.push(`${l("beacon_note_de_label")}: ${$}`),j.textContent=q.join(" · "),I.appendChild(C),I.appendChild(j),B.appendChild(I),B.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),L.appendChild(B)}),L.style.display="block"):(L.style.display="none",L.innerHTML="")}),f.appendChild(P),f.appendChild(L);const _=e.project.features.filter(u=>u.properties.floor===d&&u.properties.type==="area"&&!u.properties.isPlaceholder).sort((u,b)=>{const B=(u.properties.label||"").toLowerCase(),I=(b.properties.label||"").toLowerCase();return B.localeCompare(I)}),N=document.createElement("button");N.className="beacon-toggle",N.textContent=`${l("areas")} (${_.length})`;const D=document.createElement("div");D.className="area-section",N.addEventListener("click",()=>{if(D.style.display===""||D.style.display==="none"){const b=Se();D.innerHTML="",_.forEach(I=>{const C=document.createElement("div");C.className="area-card";const F=document.createElement("div");F.className="area-meta";const M=document.createElement("div");M.className="name";const j=I.properties.label||"";M.textContent=j;const z=document.createElement("div");z.className="counts";const $=b[I.properties.subType]?.label||I.properties.subType,q=Array.isArray(I.properties.contents)?I.properties.contents.filter(J=>J.trim()!==""):[],Y=q.length>0?q.join(", "):"-";z.textContent=`${l("elementType")}: ${$} · ${l("roomContentsTitle")}: ${Y}`,F.appendChild(M),F.appendChild(z),C.appendChild(F),C.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),D.appendChild(C)});const B=_.filter(I=>!!I.properties.isAccessible);if(B.length>0){const I=document.createElement("div");I.className="area-meta";const C=document.createElement("div");C.className="name",C.textContent=l("accessibleRoomsHeader"),I.appendChild(C),D.appendChild(I),B.forEach(F=>{const M=document.createElement("div");M.className="area-card";const j=document.createElement("div");j.className="area-meta";const z=document.createElement("div");z.className="name",z.textContent=F.properties.label||"";const $=document.createElement("div");$.className="counts",$.textContent="Barrierefrei",j.appendChild(z),j.appendChild($),M.appendChild(j),M.addEventListener("click",()=>{e.activeFloorId=d,fe(),Z()}),D.appendChild(M)})}D.style.display="block"}else D.style.display="none",D.innerHTML=""}),f.appendChild(N),f.appendChild(D),c.appendChild(f)}))}function Ma(){ue=document.getElementById("canvas"),hr=document.getElementById("scrollbar-x"),fr=document.getElementById("scrollbar-y"),Xn=document.getElementById("thumb-x"),Qn=document.getElementById("thumb-y"),hs=document.getElementById("crosshair-h"),fs=document.getElementById("crosshair-v"),eo=document.getElementById("coordinate-display"),to=document.getElementById("floor-select"),Qe=document.getElementById("projectName"),no=document.getElementById("element-type-select"),He=document.getElementById("deleteBtn"),bs=document.getElementById("element-options"),vs=document.getElementById("corner-box"),ke=document.getElementById("info-modal"),xs=document.getElementById("info-modal-close-btn"),Es=ke.querySelector(".modal-overlay"),br=document.getElementById("properties-content"),vr=document.getElementById("properties-placeholder"),bn=document.getElementById("properties-label-input"),vn=document.getElementById("properties-type-select"),xn=document.getElementById("properties-is-empty-checkbox"),oo=document.getElementById("properties-description-input"),En=document.getElementById("properties-opening-hours-input"),ro=document.getElementById("properties-room-number-input"),so=document.getElementById("properties-designation-select"),Ki({propertiesContent:br,propertiesPlaceholder:vr,propertiesLabelInput:bn,propertiesTypeSelect:vn,propertiesIsEmptyCheckbox:xn}),xr=document.getElementById("context-menu"),io=document.getElementById("ctx-menu-copy"),ws=document.getElementById("ctx-menu-delete"),Ss=document.getElementById("ctx-menu-rename"),io=document.getElementById("ctx-menu-copy"),Er=document.getElementById("ctx-menu-type-submenu"),ao=document.getElementById("ctx-floor-submenu"),lo=document.getElementById("ctx-floor-add"),co=document.getElementById("ctx-floor-rename"),wn=document.getElementById("ctx-menu-add-overlap-point"),po=document.getElementById("ctx-menu-toggle-accessibility"),uo=document.getElementById("ctx-menu-edit-contents"),wr=document.getElementById("input-prompt-modal"),Sr=document.getElementById("input-prompt-label"),Ir=document.getElementById("input-prompt-input"),kr=document.getElementById("input-prompt-ok"),Pr=document.getElementById("input-prompt-cancel"),be=document.getElementById("confirm-modal"),Ge=document.getElementById("confirm-message"),Ht=document.getElementById("confirm-ok"),Rt=document.getElementById("confirm-cancel"),Br=document.getElementById("loading-modal"),Cr=document.getElementById("loading-message"),Lr=document.getElementById("loading-ok"),Lt=document.getElementById("room-contents-modal"),Nt=document.getElementById("room-contents-list"),st=document.getElementById("room-contents-new-item"),yo=document.getElementById("room-contents-add-btn"),ho=document.getElementById("room-contents-save"),fo=document.getElementById("room-contents-cancel"),qt=document.getElementById("toggleAccessibleBtn"),mo=document.getElementById("ctx-menu-edit-occupancy"),go=document.getElementById("ctx-menu-edit-opening-hours"),Mt=document.getElementById("occupancy-modal"),$t=document.getElementById("occupancy-list"),Tt=document.getElementById("occupancy-type"),Ft=document.getElementById("occupancy-weekday"),sn=document.getElementById("occupancy-date"),an=document.getElementById("occupancy-start"),ln=document.getElementById("occupancy-end"),cn=document.getElementById("occupancy-range-start"),dn=document.getElementById("occupancy-range-end"),pn=document.getElementById("occupancy-note"),bo=document.getElementById("occupancy-add-btn"),vo=document.getElementById("occupancy-save"),xo=document.getElementById("occupancy-cancel"),Is=document.getElementById("open-occupancy-modal-btn"),jt=document.getElementById("opening-hours-modal"),ks=document.getElementById("open-opening-hours-modal-btn"),un=document.getElementById("opening-hours-weekly-list"),mn=document.getElementById("opening-hours-exceptions-list"),gn=document.getElementById("opening-hours-ranges-list"),Eo=document.getElementById("opening-hours-weekday"),Ps=document.getElementById("opening-hours-start"),Bs=document.getElementById("opening-hours-end"),wo=document.getElementById("opening-hours-add-rule"),Cs=document.getElementById("opening-hours-ex-date"),Ls=document.getElementById("opening-hours-ex-start"),Ms=document.getElementById("opening-hours-ex-end"),So=document.getElementById("opening-hours-add-exception"),Ts=document.getElementById("opening-hours-range-start"),Fs=document.getElementById("opening-hours-range-end"),js=document.getElementById("opening-hours-range-time-start"),Ds=document.getElementById("opening-hours-range-time-end"),Io=document.getElementById("opening-hours-add-range"),ko=document.getElementById("opening-hours-save"),Po=document.getElementById("opening-hours-cancel"),Bo=document.getElementById("type-manager-modal"),_s=document.getElementById("type-manager-close-btn"),Mr=document.getElementById("type-manager-list"),Tr=document.getElementById("type-manager-details-content"),Fr=document.getElementById("type-manager-placeholder"),Co=document.getElementById("type-name-input"),jr=document.getElementById("type-editor-area"),Lo=document.getElementById("type-fill-color-input"),Dr=document.getElementById("type-fill-color-swatch"),Mo=document.getElementById("type-fill-opacity-slider"),To=document.getElementById("type-stroke-color-input"),_r=document.getElementById("type-stroke-color-swatch"),Ar=document.getElementById("type-editor-point"),zr=document.getElementById("type-icon-library"),Fo=document.getElementById("type-icon-color-input"),As=document.getElementById("type-manager-new-btn"),jo=document.getElementById("type-manager-delete-btn"),zs=document.getElementById("type-manager-save-btn"),Ns=document.getElementById("manage-types-btn"),Sn=document.getElementById("new-type-choice-modal"),$s=document.getElementById("choose-type-area"),Os=document.getElementById("choose-type-point"),Hs=document.getElementById("new-type-choice-cancel"),Do=document.getElementById("lang-trigger"),De=document.getElementById("lang-menu"),er=document.getElementById("active-lang-display"),tr=document.getElementById("theme-trigger"),Vt=document.getElementById("theme-icon"),Gt=document.getElementById("lang-icon"),_o=document.getElementById("type-font-color-input"),Ao=document.getElementById("type-font-size-input"),In=document.getElementById("type-text-style-header"),kn=document.getElementById("type-area-style-header"),Pn=document.getElementById("type-point-style-header"),Nr=document.getElementById("type-preview"),Bn=document.getElementById("type-preview-header"),$r=document.getElementById("type-preview-area"),Or=document.getElementById("type-preview-area-rect"),Cn=document.getElementById("type-preview-area-label"),Hr=document.getElementById("type-preview-point"),Rr=document.getElementById("type-preview-point-icon"),Ln=document.getElementById("type-preview-point-label"),Ui({canvas:ue,scrollbarX:hr,scrollbarY:fr,thumbX:Xn,thumbY:Qn}),Qi({canvas:ue}),aa({typeManagerModal:Bo,typeManagerList:Mr,typeManagerDetailsContent:Tr,typeManagerPlaceholder:Fr,typeNameInput:Co,typeEditorArea:jr,typeFillColorInput:Lo,typeFillColorSwatch:Dr,typeFillOpacitySlider:Mo,typeStrokeColorInput:To,typeStrokeColorSwatch:_r,typeEditorPoint:Ar,typeIconLibrary:zr,typeIconColorInput:Fo,typeManagerDeleteBtn:jo,newTypeChoiceModal:Sn,typeFontColorInput:_o,typeFontSizeInput:Ao,typeTextStyleHeader:In,typeAreaStyleHeader:kn,typePointStyleHeader:Pn,typePreviewContainer:Nr,typePreviewHeader:Bn,typePreviewArea:$r,typePreviewAreaRect:Or,typePreviewAreaLabel:Cn,typePreviewPoint:Hr,typePreviewPointIcon:Rr,typePreviewPointLabel:Ln}),ga({showInputPrompt:Pe,showConfirm:Fe}),nr=document.getElementById("renameFloorBtn"),vi({inputPromptModal:wr,inputPromptLabel:Sr,inputPromptInput:Ir,inputPromptOk:kr,inputPromptCancel:Pr,confirmModal:be,confirmMessage:Ge,confirmOk:Ht,confirmCancel:Rt,loadingModal:Br,loadingMessage:Cr,loadingOk:Lr}),Ri({contextMenu:xr,ctxMenuTypeSubmenu:Er,ctxMenuAddOverlapPoint:wn}),Fa()}function qs(){document.getElementById("backstage-close-btn").title=l("backToApp");const t=document.getElementById("backstage-panel");if(t&&t.classList.contains("visible")){const y=document.getElementById("backstage-title");if(y){const E=document.querySelector(".main-menu button.active")?.id.replace("-menu-trigger","");E==="file"?y.textContent=l("filePanelTitle"):E==="output"?y.textContent=l("outputPanelTitle"):E==="overview"&&(y.textContent=l("overviewPanelTitle"))}}{const E=document.getElementById("newProjectBtn")?.querySelector("span");E&&(E.textContent=l("newProject"))}{const E=document.getElementById("loadProjectBtn")?.querySelector("span");E&&(E.textContent=l("loadProject"))}{const E=document.getElementById("saveProjectBtn")?.querySelector("span");E&&(E.textContent=l("saveProject"))}{const E=document.getElementById("loadProjectFromServerBtn")?.querySelector("span");E&&(E.textContent=l("loadFromServer"))}{const E=document.getElementById("saveProjectToServerBtn")?.querySelector("span");E&&(E.textContent=l("saveToServer"))}{const y=document.getElementById("serverProjectLabel");y&&(y.textContent=l("serverProject"));const E=document.getElementById("serverVersionLabel");E&&(E.textContent=l("serverVersion"));const V=document.getElementById("serverProjectAddBtn"),A=V?.querySelector("span");A&&(A.textContent=l("add")),V&&V.setAttribute("title",l("add"));const O=document.getElementById("serverProjectDeleteBtn"),K=O?.querySelector("span");K&&(K.textContent=l("deleteAction")),O&&O.setAttribute("title",l("deleteAction"));const W=document.getElementById("serverRefreshBtn");W&&(W.title=l("refresh"));const U=document.getElementById("serverVersionRefreshBtn");U&&(U.title=l("refresh"));const oe=document.getElementById("serverLoadBtn")?.querySelector("span");oe&&(oe.textContent=l("load"));const ce=document.getElementById("serverLoadLatestBtn")?.querySelector("span");ce&&(ce.textContent=l("latestVersion"));const se=document.getElementById("serverSavePanelBtn")?.querySelector("span");se&&(se.textContent=l("save"));const ie=document.getElementById("serverVersionAddBtn"),xe=ie?.querySelector("span");xe&&(xe.textContent=l("add")),ie&&ie.setAttribute("title",l("add"));const ge=document.getElementById("serverVersionDeleteBtn"),Ie=ge?.querySelector("span");Ie&&(Ie.textContent=l("deleteAction")),ge&&ge.setAttribute("title",l("deleteAction"))}{const E=document.getElementById("Einleitung")?.querySelector("span");E&&(E.textContent=l("introduction"))}{const E=document.getElementById("exportGeoJsonBtn")?.querySelector("span");E&&(E.textContent=l("exportGeoJson"))}{const y=document.querySelector('.sponsor-display p[data-i18n="sponsoredByMinew"]');y&&(y.textContent=l("sponsoredByMinew"));const E=document.querySelector('.sponsor-display p[data-i18n="supportedByPalfinger"]');E&&(E.textContent=l("supportedByPalfinger"));const V=document.querySelector('.sponsor-footer p[data-i18n="sponsoredByMinew"]');V&&(V.textContent=l("sponsoredByMinew"))}{const y=document.getElementById("imprintBtn"),E=y?.querySelector('span[data-i18n="imprint"]');E&&(E.textContent=l("imprint")),y&&y.setAttribute("title",l("imprint"))}{const y=document.getElementById("contactBtn"),E=y?.querySelector('span[data-i18n="contact"]');E&&(E.textContent=l("contact")),y&&y.setAttribute("title",l("contact"))}{const y=document.getElementById("privacyBtn"),E=y?.querySelector('span[data-i18n="privacy"]');E&&(E.textContent=l("privacy")),y&&y.setAttribute("title",l("privacy"))}{const y=document.getElementById("sponsorsBtn"),E=y?.querySelector('span[data-i18n="sponsorsButtonTitle"]');E&&(E.textContent=l("sponsorsButtonTitle")),y&&y.setAttribute("title",l("sponsorsButtonTitle"))}const o=document.getElementById("showGeoJsonBtn"),n=document.getElementById("live-geojson-output"),i=n?n.style.display==="block":!1;{const y=o?.querySelector("span");y&&(y.textContent=l(i?"hideCode":"showLiveCode"))}const s=document.querySelector(".toolbar-section:nth-child(1) h2");s?.childNodes[0]&&(s.childNodes[0].textContent=l("project")+" ");const r=document.getElementById("projectName");{const y=r?.parentElement?.querySelector("label");y&&(y.textContent=l("projectName"))}r&&(r.placeholder=l("enterProjectName"));const a=document.querySelector(".toolbar-section:nth-child(2) h2");a?.childNodes[0]&&(a.childNodes[0].textContent=l("edit")+" ");{const E=document.getElementById("undoBtn")?.querySelector("span");E&&(E.textContent=l("undo"))}{const E=document.getElementById("redoBtn")?.querySelector("span");E&&(E.textContent=l("redo"))}const c=document.querySelector(".toolbar-section:nth-child(3) h2");c?.childNodes[0]&&(c.childNodes[0].textContent=l("floors")+" ");{const E=document.getElementById("floor-select")?.parentElement?.querySelector("label");E&&(E.textContent=l("currentFloor"))}{const E=document.getElementById("addFloorBtn")?.querySelector("span");E&&(E.textContent=l("newFloor"))}{const y=nr?.querySelector("span");y&&(y.textContent=l("rename"))}const d=document.querySelector("#floor-select + .button-group button:nth-child(3)");d&&(d.querySelector("span").textContent=l("floorplan"));const m=document.querySelector(".toolbar-section:nth-child(4) h2");m?.childNodes[0]&&(m.childNodes[0].textContent=l("tools")+" ");{const E=document.getElementById("mode-pan")?.querySelector("span");E&&(E.textContent=l("pan"))}{const E=document.getElementById("mode-select")?.querySelector("span");E&&(E.textContent=l("select"))}{const E=document.getElementById("mode-move-element")?.querySelector("span");E&&(E.textContent=l("moveElement"))}{const E=document.getElementById("mode-calibrate")?.querySelector("span");E&&(E.textContent=l("calibrateScale"))}{const y=document.getElementById("mode-merge");if(y){const E=y.querySelector("span");E&&(E.textContent=l("merge"))}}{const E=document.getElementById("deleteBtn")?.querySelector("span");E&&(E.textContent=l("delete"))}{const y=document.querySelectorAll(".tool-buttons .toolbar-separator");y[0]&&(y[0].textContent=l("areas")),y[1]&&(y[1].textContent=l("linesAndPoints"))}{const E=document.getElementById("mode-area")?.querySelector("span");E&&(E.textContent=l("rectangle"))}{const E=document.getElementById("mode-square")?.querySelector("span");E&&(E.textContent=l("square"))}{const E=document.getElementById("mode-polygon")?.querySelector("span");E&&(E.textContent=l("polygon"))}if(ao){const y=ao.parentElement;y&&y.childNodes[0]&&(y.childNodes[0].textContent=l("floors"));const E=document.getElementById("ctx-floor-add");E&&(E.textContent=l("newFloor"));const V=document.getElementById("ctx-floor-rename");V&&(V.textContent=l("renameFloor"))}{const y=document.getElementById("ctx-menu-toggle-accessibility");y&&(y.textContent=l("toggleAccessibility"))}{const y=document.getElementById("ctx-menu-edit-contents");y&&(y.textContent=l("editRoomContents"))}{const y=document.getElementById("ctx-menu-edit-occupancy");y&&(y.textContent=l("occupancyEdit"));const E=document.getElementById("ctx-menu-edit-opening-hours");E&&(E.textContent=l("openingHoursEdit"))}{const E=document.getElementById("mode-circle")?.querySelector("span");E&&(E.textContent=l("circle"))}{const E=document.getElementById("mode-line")?.querySelector("span");E&&(E.textContent=l("line"))}{const E=document.getElementById("mode-line")?.querySelector("span");E&&(E.textContent=l("line"))}{const E=document.getElementById("mode-door")?.querySelector("span");E&&(E.textContent=l("door"))}{const E=document.getElementById("mode-arc")?.querySelector("span");E&&(E.textContent=l("arc"))}{const E=document.getElementById("mode-point")?.querySelector("span");E&&(E.textContent=l("point"))}{const E=document.getElementById("mode-area")?.querySelector("span");E&&(E.textContent=l("rectangle"))}{const E=document.getElementById("mode-square")?.querySelector("span");E&&(E.textContent=l("square"))}{const E=document.getElementById("element-type-select")?.parentElement?.querySelector("label");E&&(E.textContent=l("elementType"))}{const E=document.getElementById("manage-types-btn")?.querySelector("span");E&&(E.textContent=l("manageTypes"))}{const E=document.getElementById("copyBtn")?.querySelector("span");E&&(E.textContent=l("copy"))}{const E=document.getElementById("toggleAccessibleBtn")?.querySelector("span");E&&(E.textContent=l("accessible"))}{const y=document.getElementById("simulateSignalBtn"),E=y?.querySelector("span");E&&(E.textContent=e.showBeaconHeatmap?l("simulationOff"):l("simulateSignal")),y&&(y.classList.toggle("active",e.showBeaconHeatmap),y.setAttribute("aria-pressed",e.showBeaconHeatmap?"true":"false"),y.title=e.showBeaconHeatmap?l("simulationOff"):l("simulateSignal"))}const v=document.querySelector("#properties-panel h2");v?.childNodes[0]&&(v.childNodes[0].textContent=l("properties")+" ");{const y=document.getElementById("properties-label-input")?.parentElement?.querySelector("label");y&&(y.textContent=l("label")),y&&(y.title=l("properties_label_desc"))}{const y=document.getElementById("beacon-fields-title");y&&(y.textContent=l("beacon_parameters"))}{const y=document.querySelector('label[for="beacon-uuid-input"]');y&&(y.textContent=l("beacon_uuid_label"))}{const y=document.querySelector('label[for="beacon-serial-input"]');y&&(y.textContent=l("beacon_serial_label")),y&&(y.title=l("beacon_serial_desc"))}{const y=document.querySelector('label[for="beacon-major-input"]');y&&(y.textContent=l("beacon_major_label"))}{const y=document.querySelector('label[for="beacon-minor-input"]');y&&(y.textContent=l("beacon_minor_label"))}{const y=document.querySelector('label[for="beacon-installation-input"]');y&&(y.textContent=l("beacon_installation_label")),y&&(y.title=l("beacon_installation_desc"))}{const y=document.querySelector('label[for="beacon-range-input"]');y&&(y.textContent=l("beacon_range_label")),y&&(y.title=l("beacon_range_desc"))}{const y=document.querySelector('label[for="beacon-number-input"]');y&&(y.textContent=l("beacon_number_label")),y&&(y.title=l("beacon_number_desc"))}{const y=document.querySelector('label[for="beacon-note-de-input"]');y&&(y.textContent=l("beacon_note_de_label")),y&&(y.title=l("beacon_note_de_desc"))}{const y=document.querySelector('label[for="beacon-note-en-input"]');y&&(y.textContent=l("beacon_note_en_label")),y&&(y.title=l("beacon_note_de_desc"))}const f=document.getElementById("properties-label-input");f&&(f.placeholder=l("enterElementLabel"));{const y=document.getElementById("beacon-serial-input");y&&(y.placeholder=l("beacon_serial_label"))}{const y=document.getElementById("beacon-number-input");y&&(y.placeholder=l("beacon_number_label"))}{const y=document.getElementById("beacon-installation-input");y&&(y.placeholder=l("beacon_installation_label"),y.title=l("beacon_installation_label"))}{const y=document.getElementById("beacon-range-input");y&&(y.placeholder=l("beacon_range_label"))}{const y=document.getElementById("beacon-note-de-input");y&&(y.placeholder=l("beacon_note_de_label"))}{const E=document.getElementById("properties-type-select")?.parentElement?.querySelector("label");E&&(E.textContent=l("elementType"))}{const y=document.getElementById("properties-placeholder");y&&(y.textContent=l("noElementSelected"))}const h=document.querySelector(".toolbar-section:nth-child(5) h2");h?.childNodes[0]&&(h.childNodes[0].textContent=l("viewAndLayers")+" ");const S=document.getElementById("view-grid-sep");S&&(S.textContent=l("grid"));const g=document.getElementById("view-layers-sep");g&&(g.textContent=l("layers"));const w=document.getElementById("analysis-sep");w&&(w.textContent=l("analysis"));{const E=document.getElementById("toggleGridBtn")?.parentElement?.querySelector("span");E&&(E.textContent=l("showGrid"))}{const E=document.getElementById("toggleSnapBtn")?.parentElement?.querySelector("span");E&&(E.textContent=l("snapToGrid"))}{const y=document.querySelector('label[for="gridSizeInput"]');y&&(y.textContent=l("size"))}{const E=document.getElementById("gridMetersInput")?.parentElement?.querySelector("label");E&&(E.textContent=l("metersPerCell"))}{const E=document.querySelector('.layer-toggle[data-layer="area"]')?.parentElement?.querySelector("span");E&&(E.textContent=l("layersAreas"))}{const E=document.querySelector('.layer-toggle[data-layer="path"]')?.parentElement?.querySelector("span");E&&(E.textContent=l("layersPaths"))}{const E=document.querySelector('.layer-toggle[data-layer="point"]')?.parentElement?.querySelector("span");E&&(E.textContent=l("layersPoints"))}{const y=document.getElementById("dimensions-sep");y&&(y.textContent=l("dimensions"));const V=document.getElementById("toggleAreaDimensions")?.parentElement?.querySelector("span");V&&(V.textContent=l("showEdgeLengths"));const O=document.getElementById("toggleAreaAngles")?.parentElement?.querySelector("span");O&&(O.textContent=l("showCornerAngles"));const W=document.getElementById("togglePathLengths")?.parentElement?.querySelector("span");W&&(W.textContent=l("showLineLengths"));const X=document.getElementById("toggleCircleRadius")?.parentElement?.querySelector("span");X&&(X.textContent=l("showCircleRadius"));const ne=document.getElementById("toggleBeaconRing")?.parentElement?.querySelector("span");ne&&(ne.textContent=l("showBeaconRangeRing"))}{const y=document.getElementById("intro-content");y&&(y.innerHTML=l("intro_full_content"))}const k=document.getElementById("show3DViewBtn");k&&(k.querySelector("span").textContent=document.getElementById("floor3DView")?.style.display==="flex"?l("backToApp"):l("preview3D"));{const y=document.querySelector("#type-manager-modal h2");y&&(y.textContent=l("manageTypesTitle"));const E=document.querySelector("#type-manager-modal h4");E&&(E.textContent=l("types"));const V=document.getElementById("type-manager-new-btn");V&&(V.textContent=l("newType"));const A=document.getElementById("type-name-input"),O=A?.parentElement?.querySelector("label");O&&(O.textContent=l("typeName")),A&&(A.placeholder=l("exampleMarketing"))}In&&(In.textContent=l("textStyle")),kn&&(kn.textContent=l("areaStyle")),Pn&&(Pn.textContent=l("pointStyle"));{const y=document.getElementById("type-font-size-input")?.parentElement?.querySelector("label");y&&(y.textContent=l("fontSize"),y.title=l("fontSizeDesc"))}{const y=document.getElementById("type-font-color-input")?.parentElement?.querySelector("label");y&&(y.textContent=l("fontColor"),y.title=l("fontColorDesc"))}const P=document.getElementById("ctx-menu-rename");P&&(P.textContent=l("rename"));const T=document.getElementById("ctx-menu-copy");T&&(T.textContent=l("copy"));const L=document.querySelector("#context-menu .has-submenu");L&&L.firstChild&&L.firstChild.textContent&&(L.firstChild.textContent=l("changeType"));const _=document.getElementById("ctx-menu-add-overlap-point");_&&(_.textContent=l("ctxAddOverlapPoint"));const N=document.getElementById("type-fill-color-input").parentElement.querySelector("label");N.textContent=l("fillColor"),N.title=l("fillColorDesc"),document.getElementById("type-fill-color-swatch").title=l("currentFillColor");const D=document.getElementById("type-fill-opacity-slider").parentElement.querySelector("label");D.textContent=l("fillOpacity"),D.title=l("fillOpacityDesc");const u=document.getElementById("type-stroke-color-input").parentElement.querySelector("label");u.textContent=l("strokeColor"),u.title=l("strokeColorDesc"),document.getElementById("type-stroke-color-swatch").title=l("currentStrokeColor");const b=document.querySelector("#type-editor-point > label");b.textContent=l("iconSelection"),b.title=l("iconSelectionDesc");const B=document.getElementById("type-icon-color-input").parentElement.querySelector("label");B.textContent=l("iconColor"),B.title=l("iconColorDesc");{const y=document.getElementById("type-manager-delete-btn");y&&(y.textContent=l("deleteType"))}{const y=document.getElementById("type-manager-placeholder");y&&(y.textContent=l("typeManagerPlaceholder"))}document.getElementById("type-manager-save-btn").textContent=l("saveChangesAndClose"),Bn&&(Bn.textContent=l("typePreview")),Cn&&(Cn.textContent=l("previewAreaLabel")),Ln&&(Ln.textContent=l("previewPointLabel")),document.querySelector("#new-type-choice-modal h4").textContent=l("createNewElementType"),document.querySelector("#new-type-choice-modal p").textContent=l("chooseBaseType"),document.getElementById("choose-type-area").textContent=l("choiceArea"),document.getElementById("choose-type-point").textContent=l("choicePoint"),document.getElementById("new-type-choice-cancel").textContent=l("cancel"),document.getElementById("input-prompt-ok").textContent=l("ok"),document.getElementById("input-prompt-cancel").textContent=l("cancel"),document.getElementById("confirm-ok").textContent=l("ok"),document.getElementById("confirm-cancel").textContent=l("cancel");{const y=document.getElementById("room-contents-title");y&&(y.textContent=l("roomContentsTitle"));const E=document.getElementById("room-contents-new-item");E&&(E.placeholder=l("roomContentsPlaceholder"));const V=document.getElementById("room-contents-add-btn");V&&(V.textContent=l("roomContentsAdd"));const A=document.getElementById("room-contents-save");A&&(A.textContent=l("ok"));const O=document.getElementById("room-contents-cancel");O&&(O.textContent=l("cancel"))}{const y=document.getElementById("occupancy-title");y&&(y.textContent=l("occupancyTitle"));const E=document.getElementById("occupancy-type");E&&(E.options[0].text=l("occupancyTypeWeekday"),E.options[1].text=l("occupancyTypeDate"),E.options[2].text=l("occupancyTypeRange"));const V=document.getElementById("occupancy-type-label");V&&(V.textContent=l("occupancyTypeLabel"));const A=document.getElementById("occupancy-weekday");A&&(A.options[0].text=l("weekdayMon"),A.options[1].text=l("weekdayTue"),A.options[2].text=l("weekdayWed"),A.options[3].text=l("weekdayThu"),A.options[4].text=l("weekdayFri"),A.options[5].text=l("weekdaySat"),A.options[6].text=l("weekdaySun"));const O=document.getElementById("occupancy-weekday-label");O&&(O.textContent=l("occupancyWeekdayLabel"));const K=document.getElementById("occupancy-date-label");K&&(K.textContent=l("occupancyDateLabel"));const W=document.getElementById("occupancy-start-label");W&&(W.textContent=l("occupancyStartLabel"));const U=document.getElementById("occupancy-end-label");U&&(U.textContent=l("occupancyEndLabel"));const X=document.getElementById("occupancy-range-start-label");X&&(X.textContent=l("occupancyRangeStartLabel"));const oe=document.getElementById("occupancy-range-end-label");oe&&(oe.textContent=l("occupancyRangeEndLabel"));const ne=document.getElementById("occupancy-note");ne&&(ne.placeholder=l("occupancyNotePlaceholder"));const ce=document.getElementById("occupancy-note-label");ce&&(ce.textContent=l("occupancyNoteLabel"));const de=document.getElementById("occupancy-add-btn");de&&(de.textContent=l("occupancyAdd"));const se=document.getElementById("occupancy-save");se&&(se.textContent=l("ok"));const ie=document.getElementById("occupancy-cancel");ie&&(ie.textContent=l("cancel"))}{const y=document.getElementById("opening-hours-title");y&&(y.textContent=l("openingHoursTitle"));const E=document.getElementById("opening-hours-weekly-label");E&&(E.textContent=l("openingHoursWeekly"));const V=document.getElementById("opening-hours-exceptions-label");V&&(V.textContent=l("openingHoursExceptions"));const A=document.getElementById("opening-hours-ranges-label");A&&(A.textContent=l("openingHoursRanges"));const O=document.getElementById("opening-hours-weekday-label");O&&(O.textContent=l("occupancyWeekdayLabel"));const K=document.getElementById("opening-hours-start-label");K&&(K.textContent=l("occupancyStartLabel"));const W=document.getElementById("opening-hours-end-label");W&&(W.textContent=l("occupancyEndLabel"));const U=document.getElementById("opening-hours-weekday");U&&(U.options[0].text=l("weekdayMon"),U.options[1].text=l("weekdayTue"),U.options[2].text=l("weekdayWed"),U.options[3].text=l("weekdayThu"),U.options[4].text=l("weekdayFri"),U.options[5].text=l("weekdaySat"),U.options[6].text=l("weekdaySun"));const X=document.getElementById("opening-hours-ex-date-label");X&&(X.textContent=l("occupancyDateLabel"));const oe=document.getElementById("opening-hours-ex-start-label");oe&&(oe.textContent=l("occupancyStartLabel"));const ne=document.getElementById("opening-hours-ex-end-label");ne&&(ne.textContent=l("occupancyEndLabel"));const ce=document.getElementById("opening-hours-range-start-label");ce&&(ce.textContent=l("occupancyRangeStartLabel"));const de=document.getElementById("opening-hours-range-end-label");de&&(de.textContent=l("occupancyRangeEndLabel"));const se=document.getElementById("opening-hours-range-time-start-label");se&&(se.textContent=l("occupancyStartLabel"));const ie=document.getElementById("opening-hours-range-time-end-label");ie&&(ie.textContent=l("occupancyEndLabel"));const xe=document.getElementById("opening-hours-add-rule");xe&&(xe.textContent=l("addRule"));const ge=document.getElementById("opening-hours-add-exception");ge&&(ge.textContent=l("addException"));const Ie=document.getElementById("opening-hours-add-range");Ie&&(Ie.textContent=l("addRange"));const Ke=document.getElementById("opening-hours-save");Ke&&(Ke.textContent=l("ok"));const Ue=document.getElementById("opening-hours-cancel");Ue&&(Ue.textContent=l("cancel"))}document.getElementById("ctx-menu-rename").textContent=l("rename"),document.getElementById("ctx-menu-copy").textContent=l("copy");{const y=document.getElementById("ctx-menu-delete");y&&(y.textContent=l("delete"))}{const y=document.querySelector(".context-menu .has-submenu");y&&y.childNodes[0]&&(y.childNodes[0].textContent=l("changeType"))}{const y=document.getElementById("file-menu-trigger");y&&(y.textContent=l("file"))}{const y=document.getElementById("output-menu-trigger");y&&(y.textContent=l("output"))}{const y=document.getElementById("overview-menu-trigger");y&&(y.textContent=l("overview"))}const I={de:"Deutsch",en:"English"},C=e.activeLanguage,F=I[C]||C.toUpperCase();if(er.textContent=F,De){const y=De.querySelector('button[data-lang="en"]'),E=De.querySelector('button[data-lang="de"]');y&&(y.textContent="English"),E&&(E.textContent="Deutsch")}const M=e.activeTheme==="dark";tr.title=l(M?"lightMode":"darkMode"),Vt&&(Vt.src=M?"assets/lightMode.png":"assets/darkMode.png"),Gt&&(Gt.src=M?"assets/language-dark.png":"assets/language-light.png"),document.querySelector("#element-type-select optgroup:nth-child(1)")?.setAttribute("label",l("optgroupAreas")),document.querySelector("#element-type-select optgroup:nth-child(2)")?.setAttribute("label",l("optgroupPointElements")),document.querySelector("#element-type-select optgroup:nth-child(3)")?.setAttribute("label",l("optgroupConnectors"));const j=document.querySelector('label[for="properties-description-input"]');j&&(j.textContent=l("description"));const z=document.querySelector('label[for="properties-room-number-input"]');z&&(z.textContent=l("roomNumber"));const $=document.querySelector('label[for="properties-designation-select"]');$&&($.textContent=l("designation"));const q=document.querySelector('label[for="properties-opening-hours-input"]');q&&(q.textContent=l("openingHours"));const Y=document.getElementById("open-opening-hours-modal-btn");Y&&(Y.textContent=l("openingHoursBtn"));const J=document.getElementById("open-occupancy-modal-btn");J&&(J.textContent=l("occupancyBtn"));const Q=document.querySelector('label[for="properties-is-empty-checkbox"] span');Q&&(Q.textContent=l("isEmptyArea"))}function Vs(t){if(e.activeLanguage===t)return;const o=e.activeLanguage;Qs(t),localStorage.setItem("imd_editor_language",t),e.activeLanguage=t,document.documentElement.lang=t,er.textContent=t==="en"?"English":"Deutsch";const n=l("unnamedProject",o),i=l("unnamedProject",t);e.project.properties.projectName===n&&(e.project.properties.projectName=i,Qe&&(Qe.value=i),R()),qs(),pe(),fe(),ot(),he(),Z()}function Gs(t){e.activeTheme===t&&document.body.getAttribute("data-theme")===t||(e.activeTheme=t,document.body.setAttribute("data-theme",t),localStorage.setItem("imd_editor_theme",t),Vt&&(Vt.src=t==="dark"?"assets/lightMode.png":"assets/darkMode.png"),Gt&&(Gt.src=t==="dark"?"assets/language-dark.png":"assets/language-light.png"),qs(),H())}function Ta(){ue.addEventListener("wheel",va,{passive:!1}),ue.addEventListener("contextmenu",wa),window.addEventListener("click",$e),ue.addEventListener("mousedown",u=>{if(u.button===1||e.currentMode==="pan"&&u.button===0){Yi(u);return}if(u.button!==0)return;const b=At({x:u.offsetX,y:u.offsetY});if((e.currentMode==="angle-edit"||e.currentMode==="parallel-edit"||e.isAltPressed&&e.currentMode==="select")&&e.hoveredEdgeIndex!==-1&&e.hoveredFeatureId){const I=e.hoveredFeatureId,C=e.hoveredEdgeIndex;if(e.currentMode==="angle-edit"&&(!e.anglePickFeatureId||e.anglePickFeatureId!==I)){e.anglePickFeatureId=I,e.anglePickFirstEdgeIndex=C;const F=new CustomEvent("imd-info",{detail:{title:l("tools"),message:l("angleEditStep1")}});document.dispatchEvent(F),H();return}if(e.currentMode==="angle-edit"&&e.anglePickFirstEdgeIndex===-1){e.anglePickFirstEdgeIndex=C,H();return}if(e.currentMode==="angle-edit"){const F=e.anglePickFirstEdgeIndex,M=C,j=e.project.features.find(J=>J.properties.id===I);if(e.anglePickFeatureId=null,e.anglePickFirstEdgeIndex=-1,!j||j.geometry.type!=="Polygon")return;const z=j.geometry.coordinates[0],$=z.length-1;if(!((M-F+$)%$===1||(F-M+$)%$===1)){const J=new CustomEvent("imd-info",{detail:{title:l("tools"),message:l("angleEditInvalidAdj")}});document.dispatchEvent(J);return}const Y=(F+1)%$;Pe(l("editAnglePrompt")).then(J=>{const Q=J?parseFloat(J):NaN;if(Number.isNaN(Q)||Q<=0||Q>=360)return;const y=Y,E=z[(y-1+$)%$],V=z[y],A=(y+1)%$,O=z[A],K=E[0]-V[0],W=E[1]-V[1],U=Math.hypot(K,W)||1,X=K/U,oe=W/U,ne=Math.hypot(O[0]-V[0],O[1]-V[1])||1,ce=Q*Math.PI/180,de=Math.cos(ce),se=Math.sin(ce),ie=X*de-oe*se,xe=X*se+oe*de,ge=X*de+oe*se,Ie=-X*se+oe*de,Ke=(O[0]-V[0])/ne,Ue=(O[1]-V[1])/ne,Fn=Math.acos(Math.max(-1,Math.min(1,ie*Ke+xe*Ue))),jn=Math.acos(Math.max(-1,Math.min(1,ge*Ke+Ie*Ue))),sr=Fn<=jn,Ws=sr?ie:ge,Ks=sr?xe:Ie,Us=V[0]+Ws*ne,Ys=V[1]+Ks*ne;z[A]=[Us,Ys],z[$]=z[0],R(),H(),G();const Zs=new CustomEvent("imd-info",{detail:{title:l("tools"),message:l("angleEditDone")}});document.dispatchEvent(Zs)});return}else if(e.currentMode==="parallel-edit"){if(!e.parallelPickFeatureId||e.parallelPickFeatureId!==I){e.parallelPickFeatureId=I,e.parallelPickFirstEdgeIndex=C;const ge=new CustomEvent("imd-info",{detail:{title:l("tools"),message:l("parallelEditStep1")}});document.dispatchEvent(ge),H();return}if(e.parallelPickFirstEdgeIndex===-1){e.parallelPickFirstEdgeIndex=C,H();return}const F=e.parallelPickFirstEdgeIndex,M=C,j=e.project.features.find(ge=>ge.properties.id===I);if(e.parallelPickFeatureId=null,e.parallelPickFirstEdgeIndex=-1,!j||j.geometry.type!=="Polygon")return;const z=j.geometry.coordinates[0],$=z.length-1,q=z[F],Y=z[(F+1)%$],J=z[M],Q=z[(M+1)%$],y=Y[0]-q[0],E=Y[1]-q[1],V=Q[0]-J[0],A=Q[1]-J[1],O=Math.hypot(y,E)||1,K=Math.hypot(V,A)||1,W=y/O,U=E/O,X=V/K,oe=A/K,ne=W*X+U*oe,ce=ne>=0?W:-W,de=ne>=0?U:-U,se=J[0]+ce*O,ie=J[1]+de*O;z[(M+1)%$]=[se,ie],z[$]=z[0],R(),H(),G();const xe=new CustomEvent("imd-info",{detail:{title:l("tools"),message:l("parallelEditDone")}});document.dispatchEvent(xe);return}}if(e.currentMode==="select"&&oa(b))return;const B=ve(b);if((e.currentMode==="select"||e.currentMode==="move-element")&&B){if(e.isCtrlPressed){Rs(b);return}const I=B.properties.id;e.selectedFeatureIds.includes(I)||(e.selectedFeatureIds=[I],he(),H()),ea(b);return}xa(b)}),window.addEventListener("mouseup",u=>{Ji(),u.button===0&&(na(),sa(),Te&&Te.stop3DDrag())}),window.addEventListener("mousemove",u=>{const b=ue.getBoundingClientRect();if(e.mousePosScreen={x:u.clientX-b.left,y:u.clientY-b.top},e.mousePos=At(e.mousePosScreen),hs.style.top=`${e.mousePosScreen.y}px`,fs.style.left=`${e.mousePosScreen.x}px`,eo&&(eo.textContent=`X: ${e.mousePos.x.toFixed(2)} m | Y: ${e.mousePos.y.toFixed(2)} m`),e.isPanning){Zi(u);return}if(e.isEditingPath){ra(e.mousePos);return}if(e.isMovingElement){ta(e.mousePos);return}if(e.threeDIsDragging&&Te){Te.do3DDrag(u);return}let B=!1;if(e.currentMode==="scissors"){let I;if(e.selectedFeatureIds.length===1){const C=e.project.features.find(F=>F.properties.id===e.selectedFeatureIds[0]);C&&C.geometry.type==="Polygon"&&(I=C)}else{const C=ve(e.mousePos);C&&C.geometry.type==="Polygon"&&(I=C)}if(I){const C=xt(e.mousePos,I.geometry);(C.index!==e.hoveredEdgeIndex||C.index!==-1&&e.hoveredFeatureId!==I.properties.id)&&(e.hoveredEdgeIndex=C.index,e.hoveredFeatureId=C.index!==-1?I.properties.id:null,B=!0)}else e.hoveredEdgeIndex!==-1&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0)}else if(e.isAltPressed&&e.currentMode==="select"&&e.selectedFeatureIds.length===1){const I=e.project.features.find(C=>C.properties.id===e.selectedFeatureIds[0]);if(I&&I.geometry.type==="Polygon"){const C=xt(e.mousePos,I.geometry);(C.index!==e.hoveredEdgeIndex||C.index!==-1&&e.hoveredFeatureId!==I.properties.id)&&(e.hoveredEdgeIndex=C.index,e.hoveredFeatureId=C.index!==-1?I.properties.id:null,B=!0)}}else if(e.currentMode==="angle-edit"){const I=ve(e.mousePos);if(I&&I.geometry.type==="Polygon"){const C=xt(e.mousePos,I.geometry);(C.index!==e.hoveredEdgeIndex||C.index!==-1&&e.hoveredFeatureId!==I.properties.id)&&(e.hoveredEdgeIndex=C.index,e.hoveredFeatureId=C.index!==-1?I.properties.id:null,B=!0)}else e.hoveredEdgeIndex!==-1&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0)}else e.hoveredEdgeIndex!==-1&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0);if(e.currentMode==="door"){const I=ve(e.mousePos);if(I&&I.geometry.type==="Polygon"){const C=xt(e.mousePos,I.geometry);(C.index!==e.hoveredEdgeIndex||C.index!==-1&&e.hoveredFeatureId!==I.properties.id)&&(e.hoveredEdgeIndex=C.index,e.hoveredFeatureId=C.index!==-1?I.properties.id:null,B=!0)}else if(I&&I.geometry.type==="LineString"){const C=Zr(e.mousePos,I.geometry);(C.index!==e.hoveredEdgeIndex||C.index!==-1&&e.hoveredFeatureId!==I.properties.id)&&(e.hoveredEdgeIndex=C.index,e.hoveredFeatureId=C.index!==-1?I.properties.id:null,B=!0)}else(e.hoveredEdgeIndex!==-1||e.hoveredFeatureId)&&(e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,B=!0)}(e.tempShape||B||e.isShiftPressed)&&(H(),G())}),ue.addEventListener("dblclick",u=>{u.preventDefault();const b={x:u.offsetX,y:u.offsetY},B=At(b);if(e.showDimensions.angles){const I=e.measureLabels.find(C=>C.type==="angle"&&B.x>=C.bx&&B.x<=C.bx+C.w&&B.y>=C.by&&B.y<=C.by+C.h);if(I&&I.featureId!=null&&typeof I.vertexIndex=="number"){Pe(l("editAnglePrompt")).then(C=>{const F=C?parseFloat(C):NaN;if(!Number.isNaN(F)&&F>0&&F<360){const M=e.project.features.find(j=>j.properties.id===I.featureId);if(M&&M.geometry.type==="Polygon"){const j=M.geometry.coordinates[0],z=j.length-1,$=I.vertexIndex,q=j[($-1+z)%z],Y=j[$],J=($+1)%z,Q=j[J],y=q[0]-Y[0],E=q[1]-Y[1],V=Math.hypot(y,E)||1,A=y/V,O=E/V,K=Math.hypot(Q[0]-Y[0],Q[1]-Y[1])||1,W=F*Math.PI/180,U=Math.cos(W),X=Math.sin(W),oe=A*U-O*X,ne=A*X+O*U,ce=A*U+O*X,de=-A*X+O*U,se=(Q[0]-Y[0])/K,ie=(Q[1]-Y[1])/K,xe=Math.acos(Math.max(-1,Math.min(1,oe*se+ne*ie))),ge=Math.acos(Math.max(-1,Math.min(1,ce*se+de*ie))),Ie=xe<=ge,Ke=Ie?oe:ce,Ue=Ie?ne:de,Fn=Y[0]+Ke*K,jn=Y[1]+Ue*K;j[J]=[Fn,jn],j[z]=j[0],R(),H(),G()}}});return}}e.currentMode==="polygon"&&_i()}),Xn.addEventListener("mousedown",mr),Qn.addEventListener("mousedown",mr),vs.addEventListener("dblclick",()=>{e.scale=1,e.pan={x:0,y:0},yt(),H()}),document.getElementById("mode-screenshot")?.addEventListener("click",()=>{const u=document.getElementById("canvas");if(!u)return;const b=document.createElement("a"),B=e.activeLanguage==="de"?"karte":"map",I=e.activeFloorId||"screenshot";b.download=`${B}-${I}.png`,b.href=u.toDataURL("image/png"),b.click()}),Do.addEventListener("click",u=>{u.stopPropagation(),De.style.display=De.style.display==="block"?"none":"block"}),De.addEventListener("click",u=>{const B=u.target.dataset.lang;B&&(Vs(B),De.style.display="none")}),window.addEventListener("click",u=>{!Do.contains(u.target)&&!De.contains(u.target)&&(De.style.display="none")}),tr.addEventListener("click",()=>{Gs(e.activeTheme==="light"?"dark":"light")}),Qe.addEventListener("input",()=>{e.project.properties.projectName=Qe.value,R(),pe(),G()}),document.getElementById("newProjectBtn").addEventListener("click",async()=>{if(!await Fe(l("alert_newProjectConfirm")))return;const b=ze(),B=b.length>0?b[0]:qe,I=await Pe(l("prompt_newFloorName"),B);ts(!1,I||qe)}),document.getElementById("saveProjectBtn").addEventListener("click",()=>ar(Qe.value)),document.getElementById("exportGeoJsonBtn").addEventListener("click",()=>ar(Qe.value)),document.getElementById("loadProjectFromServerBtn").addEventListener("click",async()=>{const u=document.getElementById("server-load-panel");if(u.classList.contains("hidden")){if(!ye.isAvailable()){alert('Backend nicht verfügbar. Bitte API unter "/app/api" und "/api" starten oder Proxy konfigurieren.');return}u.classList.remove("hidden"),await n()}else u.classList.add("hidden")}),document.getElementById("saveProjectToServerBtn").addEventListener("click",async()=>{const u=document.getElementById("server-load-panel");if(u.classList.contains("hidden")){if(!ye.isAvailable()){alert('Backend nicht verfügbar. Bitte API unter "/app/api" und "/api" starten oder Proxy konfigurieren.');return}u.classList.remove("hidden"),await n()}});const o=document.getElementById("serverSavePanelBtn");o&&o.addEventListener("click",async()=>{if(!ye.isAvailable()){alert("Backend nicht verfügbar. Speichern zum Server ist derzeit deaktiviert.");return}const u=document.getElementById("serverProjectSelect"),b=document.getElementById("serverVersionSelect"),B=u?.value,I=B&&B!==""?parseInt(B,10):null,C=b?.value,F=C&&C!==""?parseInt(C,10):void 0;if(I!==null&&F!==void 0){const j=u?.selectedOptions?.[0]?.textContent||`#${I}`;if(!await Fe(l("confirmOverwriteVersion",void 0,j,F)))return}const M=await Qr(I,F);await n(),u&&(u.value=String(M.id)),await(async()=>{const j=document.getElementById("serverVersionSelect");j&&(j.value=String(M.version))})()});async function n(){const u=document.getElementById("serverProjectSelect"),b=document.getElementById("serverVersionSelect"),B=document.getElementById("serverSaveHint");if(u.innerHTML="",b.innerHTML="",!ye.isAvailable()){const A=document.createElement("option");A.value="",A.textContent="Backend nicht verfügbar",A.disabled=!0,u.appendChild(A),B&&(B.textContent="Kein Backend verbunden. Bitte API starten oder Proxy konfigurieren.");return}let C=(await ye.listProjects()).slice();const F=A=>{u.innerHTML="";const O=document.createElement("option");O.value="",O.textContent=l("newProjectOption"),u.appendChild(O),A.forEach(K=>{const W=document.createElement("option");W.value=String(K.id),W.textContent=`${K.name} (#${K.id})`,u.appendChild(W)}),A.length>0?u.value=String(A[0].id):u.value=""};F(C),await E();const M=document.getElementById("serverRefreshBtn");M&&(M.onclick=async()=>{C=(await ye.listProjects()).slice(),F(C),await E(),y(),V()});const j=document.getElementById("serverVersionRefreshBtn");j&&(j.onclick=async()=>{await E(),y(),V()}),u.onchange=async()=>{await E(),y(),V()},b.onchange=()=>{y(),V()};const z=document.getElementById("serverLoadBtn");z&&(z.onclick=async()=>{const A=parseInt(u.value,10),O=b.value,K=O?parseInt(O,10):void 0;await lr(A,K)});const $=document.getElementById("serverLoadLatestBtn");$&&($.onclick=async()=>{const A=parseInt(u.value,10);await lr(A)});const q=document.getElementById("serverProjectAddBtn");q&&(q.onclick=async()=>{await Fe(l("infoNewProject")),u.value="",await E(),y()});const Y=document.getElementById("serverProjectDeleteBtn");Y&&(Y.onclick=async()=>{const A=parseInt(u.value,10);if(isNaN(A))return;const O=u.selectedOptions?.[0]?.textContent||`#${A}`;if(!await Fe(l("confirmDeleteProject",void 0,O,A)))return;await ye.delete(A),C=(await ye.listProjects()).slice(),F(C),await E(),y()});const J=document.getElementById("serverVersionAddBtn");J&&(J.onclick=()=>{Fe(l("infoNewVersion")),b.value="",y()});const Q=document.getElementById("serverVersionDeleteBtn");Q&&(Q.onclick=async()=>{const A=parseInt(u.value,10);if(isNaN(A))return;const O=b.value;if(!O){await Fe(l("alertSelectVersionFirst"));return}const K=parseInt(O,10),W=u.selectedOptions?.[0]?.textContent||`#${A}`;await Fe(l("confirmDeleteVersion",void 0,W,K,A))&&(await ye.delete(A,K),await E(),y())});function y(){const A=document.getElementById("serverProjectDeleteBtn"),O=document.getElementById("serverVersionDeleteBtn"),K=document.getElementById("serverProjectAddBtn"),W=document.getElementById("serverVersionAddBtn"),U=!!u.value,X=!!b.value;A&&(A.disabled=!U),O&&(O.disabled=!U||!X),K&&(K.disabled=!1),W&&(W.disabled=!U)}async function E(){const A=parseInt(u.value,10);b.innerHTML="";const O=document.createElement("option");if(O.value="",O.textContent=l("newVersionOption"),b.appendChild(O),isNaN(A)){b.disabled=!0,V();return}else b.disabled=!1;(await ye.listVersions(A)).sort((W,U)=>U-W).forEach(W=>{const U=document.createElement("option");U.value=String(W),U.textContent=String(W),b.appendChild(U)}),y(),V()}y(),V();function V(){if(!B)return;const A=u.value,O=b.value;if(!A){B.textContent=l("infoNewProject");return}const K=u.selectedOptions?.[0]?.textContent||`#${A}`;if(!O){B.textContent=l("infoNewVersion");return}const W=parseInt(O,10);B.textContent=l("saveTargetVersion",void 0,K,W)}}document.getElementById("loadProjectInput").addEventListener("change",u=>{const b=u.target.files?.[0];b&&(Ei(b),u.target.value="")}),document.getElementById("showGeoJsonBtn").addEventListener("click",()=>{const u=document.getElementById("live-geojson-output"),b=document.getElementById("showGeoJsonBtn"),B=u.style.display==="block";u.style.display=B?"none":"block",b.querySelector("span").textContent=l(B?"showLiveCode":"hideCode")}),document.getElementById("addFloorBtn").addEventListener("click",async()=>{const u=ze(),b=u.length===0?qe:`Etage ${u.length+1}`,B=l("prompt_newFloorName"),I=await Pe(B,b);I&&pr(I)}),nr.addEventListener("click",async()=>{if(!e.activeFloorId){alert(l("alert_noActiveFloor"));return}const u=l("prompt_renameFloor",e.activeLanguage,e.activeFloorId),b=await Pe(u,e.activeFloorId);b&&ur(b)}),to.addEventListener("change",()=>{e.activeFloorId=to.value,e.selectedFeatureIds=[],He.disabled=!0,H()}),document.getElementById("floorplanInput").addEventListener("change",async u=>{const b=u.target.files?.[0];if(b)try{await ki(b)}finally{u.target.value=""}}),document.getElementById("undoBtn").addEventListener("click",cr),document.getElementById("redoBtn").addEventListener("click",dr),He.addEventListener("click",()=>{if(e.selectedFeatureIds.length>1){const u=ve(e.mousePos);u&&(e.selectedFeatureIds=[u.properties.id])}_n()});const i=document.getElementById("copyBtn");i&&i.addEventListener("click",()=>{e.selectedFeatureIds.length,Vr()}),lo&&lo.addEventListener("click",()=>{const u=l("prompt_newFloorName");Pe(u,e.activeFloorId||"").then(b=>{b&&pr(b),$e()})}),co&&co.addEventListener("click",()=>{if(!e.activeFloorId){alert(l("alert_noActiveFloor"));return}const u=l("prompt_renameFloor",e.activeLanguage,e.activeFloorId);Pe(u,e.activeFloorId).then(b=>{b&&ur(b),$e()})}),["select","pan","move-element","angle-edit","parallel-edit","calibrate","merge","area","square","polygon","circle","line","arc","door","point"].forEach(u=>{const b=document.getElementById(`mode-${u}`);b&&b.addEventListener("click",()=>{if(e.currentMode===u&&!["select","pan","move-element"].includes(u)){document.getElementById("mode-select")?.click();return}switch(e.currentMode=u,e.tempShape=null,["area","polygon","circle","line","arc","door","point"].includes(u)&&(e.selectedFeatureIds=[]),ot(),document.querySelectorAll(".tool-btn").forEach(F=>F.classList.remove("active")),b.classList.add("active"),u){case"pan":case"move-element":ue.style.cursor="grab";break;case"select":ue.style.cursor="default";break;case"angle-edit":{ue.style.cursor="default",e.anglePickFeatureId=null,e.anglePickFirstEdgeIndex=-1,e.showDimensions.angles=!0;const F=new CustomEvent("imd-info",{detail:{title:l("tools"),message:l("angleEditHintShort")}});document.dispatchEvent(F);break}case"parallel-edit":{ue.style.cursor="default",e.parallelPickFeatureId=null,e.parallelPickFirstEdgeIndex=-1;const F=new CustomEvent("imd-info",{detail:{title:l("tools"),message:l("parallelEditHintShort")}});document.dispatchEvent(F);break}case"calibrate":{ue.style.cursor="crosshair";const F=new CustomEvent("imd-info",{detail:{title:l("calibrateScale"),message:l("calibratePrompt")}});document.dispatchEvent(F);break}case"merge":ue.style.cursor="default",hn();{const F=new CustomEvent("imd-info",{detail:{title:l("merge"),message:l("mergeHintShort")}});document.dispatchEvent(F)}break;case"scissors":ue.style.cursor="default";break;default:ue.style.cursor="crosshair";break}const I=["area","square","polygon","circle"].includes(u),C=u==="point";bs.style.display=I||C?"block":"none",I&&qr("area"),C&&qr("point"),He.disabled=e.selectedFeatureIds.length===0,he(),H()})}),document.getElementById("show3DViewBtn").addEventListener("click",async()=>{const u=document.getElementById("floor3DView"),b=document.querySelector(".canvas-wrapper"),B=document.getElementById("show3DViewBtn").querySelector("span");u.style.display==="flex"?(u.style.display="none",b.style.display="grid",B.textContent=l("preview3D")):(Te||(Te=await it(()=>import("./3d-ojV9qoUz.js"),__vite__mapDeps([0,1]))),zt||(zt=await it(()=>import("./floor3D-B8MaNFXT.js"),[])),Te.setup3DViewControls(),u.style.display="flex",b.style.display="none",B.textContent=l("backToApp"),e.threeDPan={x:50,y:50},e.threeDScale=.8,Te.update3DFloorSelector(),zt.render3DFloorStack(e.project,"floor3DContent"),u.style.cursor="grab",u.addEventListener("mousedown",Te.start3DDrag),u.addEventListener("wheel",Te.handle3DZoom,{passive:!1}))}),Hi(H);const r=document.querySelector(".toolbar");r&&r.addEventListener("wheel",u=>{u.stopPropagation()},{passive:!0});function a(){const u=document.getElementById("intro-content"),b=document.getElementById("intro-logo-wrapper"),B=document.getElementById("intro-logo"),I=document.getElementById("intro-logo-row");if(b&&B&&(b.style.display="block",B.src="assets/company_logo.png",B.onerror=()=>{b.style.display="none"}),I){I.innerHTML="";const C=["assets/company_logo.png","assets/company_logo2.png","assets/company_logo3.png"];for(const F of C){const M=document.createElement("img");M.className="intro-logo-img",M.alt="Logo",M.src=F,M.onerror=()=>M.remove(),I.appendChild(M)}I.style.display="flex"}u&&(u.innerHTML=l("intro_full_content",e.activeLanguage)),ke.classList.remove("hidden")}document.getElementById("Einleitung").addEventListener("click",a);function c(u,b){const B=document.getElementById("intro-content"),I=document.getElementById("intro-logo-wrapper"),C=document.getElementById("intro-logo-row");I&&(I.style.display="none"),C&&(C.style.display="none"),B&&(B.innerHTML=`
        <h2>${l(u,e.activeLanguage)}</h2>
        ${b}
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
  `;document.getElementById("sponsorsBtn")?.addEventListener("click",()=>{c("sponsorsButtonTitle",m)}),xs.addEventListener("click",()=>{ke.classList.add("hidden")}),Es.addEventListener("click",()=>{ke.classList.add("hidden")}),document.addEventListener("imd-info",u=>{const b=u.detail||{},B=b.title||"Info",I=b.message||"",C=ke.querySelector("h2"),F=ke.querySelector("p"),M=ke.querySelector("h4"),j=ke.querySelector(".modal-content ul"),z=document.getElementById("intro-logo-wrapper"),$=document.getElementById("intro-logo-row"),q=document.getElementById("intro-content");C&&(C.textContent=B),F&&(F.textContent=I),M&&(M.style.display="none"),j&&(j.style.display="none"),z&&(z.style.display="none"),$&&($.style.display="none"),q&&(q.innerHTML=""),ke.classList.remove("hidden")}),bn.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.label=bn.value,R(),bt(),G())}),oo.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.description=oo.value,R(),bt(),G())}),En.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.opening_hours=En.value,R(),bt(),G())}),ro.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.room_number=ro.value,R(),bt(),G())}),so.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.designation=so.value,R(),bt(),G())}),vn.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.subType=vn.value,R(),Z(),G(),pe(),he())}),xn.addEventListener("change",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&(u.properties.isEmpty=xn.checked,u.properties.isEmpty&&(u.properties.isAccessible=!1),R(),Z(),G(),he())});const v=document.getElementById("beacon-uuid-input"),f=document.getElementById("beacon-serial-input"),h=document.getElementById("beacon-major-input"),S=document.getElementById("beacon-minor-input"),g=document.getElementById("beacon-installation-input"),w=document.getElementById("beacon-range-input"),k=document.getElementById("beacon-note-de-input"),P=document.getElementById("beacon-note-en-input"),T=document.getElementById("beacon-activation-start-date"),L=document.getElementById("beacon-activation-end-date"),_=document.getElementById("beacon-activation-start-time"),N=document.getElementById("beacon-activation-end-time");v?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_uuid=v.value,R(),G(),pe(),H())}),f?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_serial=f.value,R(),G(),pe(),H())}),h?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);if(u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"){const b=parseInt(h.value,10);Number.isNaN(b)?delete u.properties.beacon_major:u.properties.beacon_major=b,R(),G(),pe(),H()}}),S?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);if(u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"){const b=parseInt(S.value,10);Number.isNaN(b)?delete u.properties.beacon_minor:u.properties.beacon_minor=b,R(),G(),pe(),H()}}),g?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_installation=g.value,R(),G(),pe(),H())}),w?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);if(u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"){const b=parseFloat(w.value);Number.isNaN(b)?delete u.properties.beacon_range:u.properties.beacon_range=b,R(),G(),pe(),H()}}),k?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_note_de=k.value,R(),G(),pe(),H())}),P?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_note_en=P.value,R(),G(),pe(),H())}),T?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.startDate=T.value,R(),G(),pe(),H())}),L?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.endDate=L.value,R(),G(),pe(),H())}),_?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.startTime=_.value,R(),G(),pe(),H())}),N?.addEventListener("input",()=>{if(e.selectedFeatureIds.length!==1)return;const u=e.project.features.find(b=>b.properties.id===e.selectedFeatureIds[0]);u&&u.geometry.type==="Point"&&u.properties.subType==="beacon"&&(u.properties.beacon_activation=u.properties.beacon_activation||{},u.properties.beacon_activation.endTime=N.value,R(),G(),pe(),H())}),ws.addEventListener("click",_n),wn&&wn.addEventListener("click",()=>{ka(),$e()}),Ss.addEventListener("click",Sa),io.addEventListener("click",Vr),po&&po.addEventListener("click",()=>{Gr(),$e()}),uo&&uo.addEventListener("click",()=>{Ca(),$e()}),mo&&mo.addEventListener("click",()=>{Wr(),$e()}),go&&go.addEventListener("click",()=>{Kr(),$e()}),qt&&qt.addEventListener("click",()=>{Gr()}),Is?.addEventListener("click",()=>Wr()),ks?.addEventListener("click",()=>Kr()),Ns.addEventListener("click",la),_s.addEventListener("click",gr),zs.addEventListener("click",ca),As.addEventListener("click",()=>Sn.classList.remove("hidden")),jo.addEventListener("click",da),$s.addEventListener("click",()=>yr("area")),Os.addEventListener("click",()=>yr("point")),Hs.addEventListener("click",()=>Sn.classList.add("hidden")),[Co,Lo,Mo,To,Fo,_o,Ao].forEach(u=>u.addEventListener("input",cs)),window.addEventListener("keydown",u=>{if(document.activeElement?.tagName!=="INPUT"){if(u.key==="Escape"){Bo.classList.contains("hidden")?e.tempShape&&(e.tempShape=null,H(),or()):gr(),e.selectedFeatureIds=[],He.disabled=!0,he(),hn(),H();const b=document.getElementById("mode-pan");b&&e.currentMode!=="pan"&&b.click()}if(u.key==="Shift"&&!e.isShiftPressed&&(e.isShiftPressed=!0,H()),u.key==="Control"&&!e.isCtrlPressed&&(e.isCtrlPressed=!0),u.key==="Alt"&&!e.isAltPressed&&(e.isAltPressed=!0,H()),u.key==="Delete"||u.key==="Backspace"){if(u.preventDefault(),e.editedFeatureId&&e.editedNodeIndex!==-1){const b=e.project.features.find(B=>B.properties.id===e.editedFeatureId);if(b&&b.geometry.type==="Polygon"){const B=b.geometry.coordinates[0];if(B.length>4){B.splice(e.editedNodeIndex,1),e.editedNodeIndex===0&&(B[B.length-1]=B[0]),e.editedNodeIndex=-1,R(),H();return}}}if(e.selectedFeatureIds.length>1&&!u.ctrlKey&&!u.metaKey){const b=ve(e.mousePos);b&&(e.selectedFeatureIds=[b.properties.id])}_n()}if(u.ctrlKey||u.metaKey)switch(u.key.toLowerCase()){case"z":u.preventDefault(),cr();break;case"y":u.preventDefault(),dr();break;case"a":{u.preventDefault();const b=e.project.features.filter(B=>B.properties.floor===e.activeFloorId);e.selectedFeatureIds=b.map(B=>B.properties.id),He.disabled=e.selectedFeatureIds.length===0,he(),H();break}case"c":u.preventDefault(),Ia();break;case"v":u.preventDefault(),Pa();break}u.key==="Enter"&&e.currentMode==="merge"&&e.project.features.filter(I=>I.properties.floor===e.activeFloorId).filter(I=>e.selectedFeatureIds.includes(I.properties.id)&&I.geometry.type==="Polygon").length>=2&&(u.preventDefault(),Ea())}}),window.addEventListener("keyup",u=>{u.key==="Shift"&&(e.isShiftPressed=!1,H()),u.key==="Control"&&(e.isCtrlPressed=!1),u.key==="Alt"&&(e.isAltPressed=!1,e.hoveredEdgeIndex=-1,e.hoveredFeatureId=null,H())}),document.querySelectorAll(".toolbar-header").forEach(u=>{u.addEventListener("click",()=>{u.classList.toggle("collapsed")})})}function Ur(){Ma(),oi(),Ta(),Oi(),e.scale=.7,e.pan={x:0,y:0},yt(),H();const t=localStorage.getItem("imd_editor_theme");Gs(t||"light");const o=localStorage.getItem("imd_editor_language");Vs(o||"de"),pe(),ot(),he()}function Fa(){const t=document.getElementById("imd-date-picker"),o=document.getElementById("imd-dp-grid"),n=document.getElementById("imd-dp-month"),i=document.getElementById("imd-dp-prev"),s=document.getElementById("imd-dp-next"),r=document.getElementById("imd-dp-clear"),a=document.getElementById("imd-dp-today"),c=document.getElementById("imd-dp-target");if(!t||!o||!n||!i||!s||!r||!a||!c)return;const d=t,m=o,v=n,f=c;r.textContent=l("calendarClear"),a.textContent=l("calendarToday");let h=new Date,S=null;const g=(document.documentElement.lang||"de").toLowerCase().startsWith("de")?"de-DE":"en-US",w=new Intl.DateTimeFormat(g,{month:"long",year:"numeric"}),k=new Intl.DateTimeFormat(g,{weekday:"short"}),P=[];for(let b=0;b<7;b++){const B=new Date(2020,5,7+b);P.push(k.format(B))}function T(b){const B=b.getFullYear(),I=String(b.getMonth()+1).padStart(2,"0"),C=String(b.getDate()).padStart(2,"0");return`${B}-${I}-${C}`}function L(b){if(!b)return null;const B=b.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!B)return null;const I=Number(B[1]),C=Number(B[2])-1,F=Number(B[3]),M=new Date(I,C,F);return Number.isNaN(M.getTime())?null:M}function _(){v.textContent=w.format(h),m.innerHTML="",P.forEach(F=>{const M=document.createElement("div");M.className="imd-date-picker__dow",M.textContent=F,m.appendChild(M)});const I=(new Date(h.getFullYear(),h.getMonth(),1).getDay()+6)%7,C=new Date(h.getFullYear(),h.getMonth(),1-I);for(let F=0;F<42;F++){const M=new Date(C);M.setDate(C.getDate()+F);const j=document.createElement("div");j.className="imd-date-picker__day",M.getMonth()!==h.getMonth()&&j.classList.add("imd-date-picker__day--outside"),(M.getDay()===0||M.getDay()===6)&&j.classList.add("imd-date-picker__day--weekend");const $=new Date;M.getDate()===$.getDate()&&M.getMonth()===$.getMonth()&&M.getFullYear()===$.getFullYear()&&j.classList.add("imd-date-picker__day--today"),S&&M.getDate()===S.getDate()&&M.getMonth()===S.getMonth()&&M.getFullYear()===S.getFullYear()&&j.classList.add("imd-date-picker__day--selected"),j.textContent=String(M.getDate()),j.addEventListener("click",()=>{S=M;const q=document.getElementById(f.value);if(q){q.value=T(M);const Y=new Event("input",{bubbles:!0});q.dispatchEvent(Y)}D()}),m.appendChild(j)}}function N(b){S=L(b.value),h=S||new Date,f.value=b.id;const B=b.getBoundingClientRect();d.style.left=`${B.left+window.scrollX}px`,d.style.top=`${B.bottom+window.scrollY+6}px`,d.classList.add("open"),_()}function D(){d.classList.remove("open")}i.addEventListener("click",()=>{h.setMonth(h.getMonth()-1),_()}),s.addEventListener("click",()=>{h.setMonth(h.getMonth()+1),_()}),r.addEventListener("click",()=>{const b=document.getElementById(f.value);if(b){b.value="";const B=new Event("input",{bubbles:!0});b.dispatchEvent(B)}D()}),a.addEventListener("click",()=>{const b=new Date,B=document.getElementById(f.value);if(B){B.value=T(b);const I=new Event("input",{bubbles:!0});B.dispatchEvent(I)}D()}),document.addEventListener("click",b=>{const B=b.target;!d.contains(B)&&!B.closest('input[type="date"]')&&D()}),(()=>{document.querySelectorAll('input[type="date"]').forEach(b=>{b.id||(b.id=`date_${Math.random().toString(36).slice(2)}`),b.addEventListener("focus",B=>{B.preventDefault(),N(b)}),b.addEventListener("click",B=>{B.preventDefault(),N(b)})})})()}const vt=document.getElementById("simulateSignalBtn");vt?.addEventListener("click",()=>{e.showBeaconHeatmap=!e.showBeaconHeatmap;const t=vt.querySelector("span");t&&(t.textContent=e.showBeaconHeatmap?l("simulationOff"):l("simulateSignal")),vt.classList.toggle("active",e.showBeaconHeatmap),vt.setAttribute("aria-pressed",e.showBeaconHeatmap?"true":"false"),vt.title=e.showBeaconHeatmap?l("simulationOff"):l("simulateSignal"),e.showBeaconHeatmap,H()});const ja=document.getElementById("checkCoverageBtn");ja?.addEventListener("click",()=>{const t=ei();t.length>0?alert(`Analyse-Ergebnisse:

- `+t.join(`
- `)):alert(`Keine Probleme erkannt.

Alle Räume sind abgedeckt und haben ausreichend Beacon-Signalstärke (Trilateration möglich).`)});const Da=`<aside class="toolbar">
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
`,_a=`<aside id="backstage-panel" class="backstage-panel">
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
`,Aa=`<div id="info-modal" class="modal hidden">
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
`;function za(){const t=document.getElementById("toolbar-container"),o=document.getElementById("backstage-container"),n=document.getElementById("modals-container");t&&(t.innerHTML=Da),o&&(o.innerHTML=_a),n&&(n.innerHTML=Aa)}document.addEventListener("DOMContentLoaded",()=>{za(),setTimeout(async()=>{const o=location.pathname.match(/^\/(floor|etage)\/(.+)$/);if(o){try{await ye.probeBackend()}catch{}Ur();const i=decodeURIComponent(o[2]);e.activeFloorId=i;try{const g=(location.hash||"").match(/#proj=([^&]+)/);if(g&&g[1]){const w=decodeURIComponent(g[1]),k=decodeURIComponent(escape(atob(w))),P=JSON.parse(k);Re(P)}}catch{}try{if(!e.project?.features?.length){const S=sessionStorage.getItem("imd_editor_project");if(S){const g=JSON.parse(S);Re(g)}}}catch{}try{const S=localStorage.getItem("imd_editor_project");if(S){const g=JSON.parse(S);Re(g)}}catch{}const s=document.querySelector(".app-header");s&&(s.style.display="none");const r=document.getElementById("toolbar-container");r&&(r.style.display="none");const a=document.getElementById("backstage-container");a&&(a.style.display="none");const c=document.getElementById("page-scrollbar-y");c&&(c.style.display="none");const d=document.querySelector(".canvas-wrapper");d&&(d.style.display="none");const m=document.getElementById("floor3DView");m&&(m.style.display="flex",m.style.height="100vh",m.style.width="100vw"),e.threeDPan={x:50,y:50},e.threeDScale=.8;const v=await it(()=>import("./3d-ojV9qoUz.js"),__vite__mapDeps([0,1])),f=await it(()=>import("./floor3D-B8MaNFXT.js"),[]);v.setup3DViewControls(),v.update3DFloorSelector(),f.render3DFloorStack(e.project,"floor3DContent");const h=document.getElementById("floor3DView");h&&(h.style.cursor="grab",h.addEventListener("mousedown",v.start3DDrag),h.addEventListener("mousemove",v.do3DDrag),h.addEventListener("mouseup",v.stop3DDrag),h.addEventListener("mouseleave",v.stop3DDrag),h.addEventListener("wheel",v.handle3DZoom,{passive:!1})),window.addEventListener("storage",async S=>{if(S.key==="imd_editor_project"&&S.newValue)try{const g=JSON.parse(S.newValue);Re(g),(await it(()=>import("./floor3D-B8MaNFXT.js"),[])).render3DFloorStack(e.project,"floor3DContent")}catch{}})}else{Ur(),Bi();try{await ye.probeBackend()}catch{}R(),console.log("IMD Editor erfolgreich initialisiert.")}const n=300*1e3;setInterval(async()=>{if(ye.isAvailable())try{await Qr(e.currentServerProjectId,e.currentServerVersion)}catch{}try{localStorage.setItem("imd_editor_project",JSON.stringify(e.project))}catch{}},n)},0)});export{ze as a,Se as b,Dt as c,l as g,e as s,fe as u};
