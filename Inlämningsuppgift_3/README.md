# Assignment 3
The aim of the third assignment is to learn how to combine JavaScript with HTML. This is called Document Object Model (DOM).
The model makes an interface available to be able to work with JavaScript and HTML together.

It is also strongly recommended to take a look at the following methods (these will be used in the data):

* alert()
* prompt()
* confirm()
* .addEventListener()
* .createElement()
* .children
* .firstElementChild
* .lastElementChild

### Task 1
The div will get new background color and a class attribute when a user clicks one of three buttons.\
For example:\
If a user click the button with id "success", the div will get a class named "success" and change the background color. 

```html
<div id="message-box">
    <p>This is a very important message box!</p>
</div>

<button type="button" id="success">Success</button>
<button type="button" id="error">Error</button>
<button type="button" id="info">Info</button>
```

```css
#message-box {
    border: 1px solid black;
    padding: 15px;
    font-size: 20px;
}
.success {
    background-color: #dff0d8;
    border-color: #98B98B;
}
.error {
    background-color: #f2dede;
    border-color: #BE9090;
}
.info {
    background-color: #d9edf7;
    border-color: #7294A5;
}
```

### Task 2
Add and create new HTML element. When a user clicks to a button, it will pop-up box for writting a text. You will use the built-in function `prompt()`

```html
<ul id="items">
    <li>The first item is free!</li>
</ul>

<button type="button" id="add-item">Add item</button>
```

### Task 3
You will add a new button for Task 2. The button will delete the last element in the list when a user clicks. 

Hints: Use methods `.lastElementChild .removeChild`

### Task 4
A list with text and a button with the text "X". When a user clicks the button, the selected element will be deleted from the list.

```html
<ul>
    <li>
        This is the first item
        <button type="button" class="remove-list-item">X</button>
    </li>
    <li>
        This is the second item
        <button type="button" class="remove-list-item">X</button>
    </li>
    <li>
        This is the third item
        <button type="button" class="remove-list-item">X</button>
    </li>
    <li>
        This is the fourth item
        <button type="button" class="remove-list-item">X</button>
    </li>
</ul>
```

Hints:
Use the keyword `this` in the function that manages your event for each button to access the button's parent.

All buttons have the same class, it is recommended to get all these buttons and add click event.
```javascript
// Hämta alla knappar
var buttons = document.getElementsByClassName("remove-list-item");
// Gå igenom alla knappar och lägg till ett klick-event
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        // ...
    });
}
```

### Task 5
Work with forms, it is divided into two parts.

1. Get the data from the completed form and print it in the web console with `console.log()`.
2. Validate the inputs before submitting. Use `alert()` to give a message to the user.

```html
<form action="" method="get" id="apply-for-pet">
    <h2>Ansökan om att skaffa husdjur</h2>
    <input type="text" name="firstname"> Förnamn<br>
    <input type="text" name="lastname"> Efternamn<br>
    <input type="text" name="age"> Ålder<br>
    <input type="text" name="email"> Epost<br>

    <div id="pets">
        <p>Typ av husdjur?</p>
        <input type="radio" name="pet" value="dog"> Hund<br>
        <input type="radio" name="pet" value="cat"> Katt<br>
        <input type="radio" name="pet" value="fish"> Fisk<br>
        <input type="radio" name="pet" value="bird"> Fågel<br>
    </div>

    <button type="submit">Skicka ansökan</button>
</form>
```

Part 1\
The first step is to get the form and add event listener. The event listener will be called when the form is submitted.

```html
var form = /* hämta formuläret */;

form.addEventListener("submit", function(event) {
    // Genom denna rad så avbryter vi att formuläret skickar oss vidare
    event.preventDefault();

    // Om vi dock vill skicka formuläret vidare (vilket vi ska göra i del 2)
    // så hade vi skrivet följande, denna rad placeras lämpligen också inom
    // en if-sats (t.ex. när vi validerat alla fältens innehåll)
    event.target.submit();
});
```

Note: the line `event.target.submit();` should not be used in Part 1 because it sends the form.

Part 2
To create validation, you will check the values for each field in the form. The requirements are below:

* First name - can contain only to letters 0 50
* Last name - may contain only to letters 0 50
* Age - must be a digit () and be more than number 0
* Email - can only contain to letters 0 50
* Pets - a pet must be selected

If all requirements are correct, you can submit. If something is not correct, a warning message will pop-up using `alert()`.
