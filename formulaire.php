<?php require __DIR__ . "/public/header.html.php"?>

<main>
<h1>Formulaire</h1>

<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 
</main>
<?php require __DIR__ . "/public/footer.html.php"?>