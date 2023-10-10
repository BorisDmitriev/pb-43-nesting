# Nester

#### 1. 2D-Array
* Gib das folgende 2D-Array ein und führe eine Schleife durch die Arrays, um die Werte zu drucken.

```javascript
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];
```

#### 2. Doggo
* 2.1 Erstelle ein Objekt namens doggo. Füge Name und Rasse als Eigenschaften des Objekts hinzu.
* 2.2 Erstelle ein Array innerhalb des doggo-Objekts mit dem Namen `favoriteFoods` und füge das Lieblingsfutter des Hundes zu diesem Array hinzu.
* 2.3 Greife auf das zweite Element der Lieblingsspeisen des Doggos zu.
* 2.4 Füge eine Methode mit dem Namen `showFavorites` hinzu, die in einer Schleife alle Lieblingsspeisen des Doggos ausgibt.

#### 3. Rezept
* 3.1 Erstelle ein Objekt namens recipe. Füge den Namen und die Zubereitungszeit als Eigenschaften des Objekts hinzu.
* 3.2 Innerhalb dieses Objekts solltest du ein weiteres Objekt für Zutaten erstellen und die Zutaten als Eigenschaften Butter, Zucker, Mehl usw. speichern. Jede Eigenschaft sollte einen String als Wert haben. Beispiel:
  ```js
     {
      butter:'butter' 
     }
  ```
* 3.3 Ohne den vorherigen Code zu ändern, füge eine weitere Zutat hinzu - fügen wir `ginger` hinzu.
* 3.4 Ändere den Wert der Zutat `ginger` in `grated ginger`.
* 3.5 Schreibe im Rezeptobjekt eine Methode namens `showIngredients`, die den Wert jeder Zutat im Zutatenobjekt ausgibt.



[//]: # (autograding info start)
## Ergebnisse
  [![Ergebnisabzeichen](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/PB-datastructure-nesting/actions)
  
  [Ergebnisdetails](https://github.com/DigitalCareerInstitute/PB-datastructure-nesting/actions)
  
  ### Debugging deines Codes
  > [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
  #### 1. Tests lokal ausführen
  - Führe `npm install` aus
  - Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.
  
  #### 2. Überprüfen der Testausgabe auf GitHub
  - Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/PB-datastructure-nesting/actions)
  - Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
  - Klicke auf "Autograding".
  - Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
  - Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
