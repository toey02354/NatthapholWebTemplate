<!DOCTYPE html>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="contactStyle.css">
    <link rel="icon" href="image/logo.ico" type="image/icon type">
    <script src="w3.js"></script>
    <title>Contact (Test JS)</title>
</head>
<body>
    <div class="phpSection">
        <?php

            $name = $_POST["getNameTest"];
            print $name;
            header("refresh: 3; url=Contact.html");

        ?>
    </div>
</body>
</html>