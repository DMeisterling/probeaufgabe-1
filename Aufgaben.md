# Aufgaben

Die Ärztin hat folgende User Storys formuliert:

### 1) Übersicht aller PatientInnen
Als User möchte ich, dass initial alle PatientInnen angezeigt werden, damit ich mir einen schnellen Überblick verschaffen kann.

Definition of Done:
* Es existiert eine Übersicht über die verfügbaren PatientInnen.
* Zu allen PatientInnen wird jeweils der Vor-, Nachname und das Geburtsdatum angezeigt.

### 2) Detailansicht der PatientInnen
Als User möchte ich bei Bedarf detaillierte Informationen zu einem/einer bestimmten PatientIn abrufen können.

Definition of Done:
* Bei klick auf einem/einer PatientIn öffnet sich eine Detailansicht.
* Neben bekannten Daten wie Vorname, Nachname und Geburtstag sollen dort zusätzlich folgende Informationen angezeigt werden:
* Geschlecht
* Kontakte - falls vorhanden.
* Relation der Kontakte - Verfügen PatientInnen über Kontakte, besitzen sie meist auch die Information über die Art des Kontakts. Diese Information soll ebenfalls angezeigt werden.

### 3) Markierung verstorbener PatientInnen
Als Ärztin möchte visuell dargestellt bekommen, wenn ein/eine PatientIn verstorben ist.

Definition of Done:
* PatientInnen, die bereits verstorben sind, sollen sich farblich von den anderen unterscheiden.
* In der Detailansicht soll das Sterbedatum angezeigt werden.


### 4) Übersicht über alle ÄrztInnen
Als User möchte ich eine Anzeige aller ÄrztInnen haben, damit ich mir einen schnellen Überblick verschaffen kann.

Definition of Done:
* Es existiert eine Übersicht über die verfügbaren ÄrztInnen.
* Die Darstellung soll denen der PatientInnen gleichen.

Hint:
Die URL für das Laden ist analog zu der für das Laden aller PatientInnen. Es muss lediglich das Schlüsselwort 'Patient' durch 'Practitioner' ersetzt werden.
(https://wildfhir4.aegis.net/fhir4-0-1/Practitioner)

### 5) Suche nach PatientInnen
Als User möchte ich nach den Namen meiner PatientInnen suchen können, um sie schneller zu finden.

Definition of Done:
* Es existiert ein Suchfeld in der PatientInnenübersicht.
* Über dieses Feld kann die Suche nach PatientInnen gestartet werden.

Hint: Die API-Schnittstelle erlaubt die Suche nach spezifischen Namen. Im PatientService kannst Du die URL anpassen und einen Parameter für den Namen übergeben.

### 6) Sortieren der PatientInnen

Als User möchte ich meine PatientInnen sortieren, um sie besser zu durchsuchen können.

Definition of Done:
* PatientInnen können alphabetisch nach Namen sortiert werden
* PatientInnen können nach Geburtstag sortiert werden.
* User können über die UI zwischen den beiden Sortierungsmöglichkeiten wechseln.

### 7) Unit Tests

Als EntwicklerIn möchte ich gewährleisten, dass alle meine Komponenten uns Services korrekt sind.

Definition of Done: Suche Dir eine Komponente oder einen Service und schreibe Unit Tests.
