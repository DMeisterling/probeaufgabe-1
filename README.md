# Red Client Probeaufgabe

## Einführung
Es ist ein ruhiger Sonntagabend. Du sitzt auf der Terrasse und wirst von den
letzten Sonnenstrahlen erwärmt. Eine leichte Brise umweht dein Gesicht.
Du nimmst einen tiefen Atemzug und genießt die Stille, als plötzlich dein Handy vibriert.
Am anderen Ende hörst du eine panische Stimme. Nach einiger Zeit gelingt es dir, die Person zu beruhigen
und du erfährst, dass es sich um eine Ärztin vom Land handelt, die dringend deine Hilfe braucht.
Sie hat die Praxis ihres Onkels inklusive Kundschaftsstamm übernommen. Morgen soll es losgehen.
Als sie heute vor Ort war, um zu überprüfen, ob für den nächsten Tag alles bereit ist,
konnte sie keine Behandlungsakten finden. Nach einer langen Suche und etlichen Telefonanrufen wurde klar:
Ihr Onkel vernichtete in einem spontanen Anfall von Digitalisierungswahn alle analogen Daten.
Doch er hat sie nicht ohne alles zurückgelassen. Es existiert eine API, über die alle relevanten Daten abgerufen werden können.
Aktuell gibt es keine Software für deren Darstellung und Verwendung.
Kannst du der Ärztin helfen, eine UI zu entwickeln, damit die Praxis nicht geschlossen bleiben muss?

## Aufgabenstellung
In ihrer Verzweiflung hat die Ärztin ein Repository mit einer Angular-Anwendung vorbereitet.
Es existiert bereits ein Service, der die URL für das Laden der Daten enthält. Das Aufrufen und die Interpretation des Datenmodells sind Deine Aufgabe.
Die Ärztin hat sich überlegt, wie sie die Anwendung haben möchte. Dafür hat sie User Storys formuliert, die Du [hier einsehen kannst](./Aufgaben.md).

### Datengrundlage
Natürlich handelt es sich bei den Daten um keine selbstgebaute Testdaten-API.
Wir möchten, dass Du in dieser Aufgabe Testdaten der offenen FHIR REST Schnittstelle verwendest.
FHIR ist ein internationaler Standard für den Austausch von Medizindaten (weiterführende Links) und findet in den Produkten von RED Anwendung.

### Technische Details
Im Frontend setzen wir bei RED Medical auf Angular. Aktuell laufen unsere Produkte mit Angular 12, daher verwenden wir auch diese Version in der Probeaufgabe.
Als UI-Component-Library setzen wir auf Angular Material.
Für die Umsetzung der Aufgabe kannst Du gerne auf die mitgelieferten Bausteine zurückgreifen.

### Erwartungshaltung
Wir wünschen uns, dass [Du die Aufgaben](./Aufgaben.md)  wie beschrieben erfüllst. Wenn Du bei der Durchführung Details entdeckst, die für Dich in der Software nicht fehlen dürfen, 
freuen wir uns natürlich über kreative Abgaben.

Bei Prüfung der Abgabe schauen wir uns insbesondere an, wie Du Deinen Code strukturierst und Modelle, Services und Components aufgebaut hast.
Denke dran, komplizierte Stellen zu kommentieren, damit wir verstehen können, wie Du gedacht hast.
Insgesamt hast Du für die Bearbeitung der Aufgabe 3 Tage Zeit. Erfahrene EntwicklerInnen brauchen dafür ca 4h.
Wir wünschen Dir viel Spaß und freuen uns auf Dich :)

## Weiterführende Links
* Warum Fhir? https://hl7.de/themen/hl7-fhir-mobile-kommunikation-und-mehr/warum-fhir/
* Dokumentation Patient: http://www.hl7.org/fhir/patient.html
* Dokumentation Practitioner: https://www.hl7.org/fhir/practitioner.html
* Angular-Tutorial: https://angular.io/tutorial
* Angular Material: https://v12.material.angular.io/
* User Story: https://www.agile-academy.com/de/agiles-lexikon/user-story/
* Definition of Done: https://www.agile-academy.com/de/scrum-master/definition-of-done/

## Start der Applikation
Mit dem Befehl `ng serve` startet die Applikation auf folgender URL: `http://localhost:4200/`.
