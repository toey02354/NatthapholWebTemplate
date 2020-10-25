<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="registerphpStyle.css">
    <link rel="icon" href="image/logo.ico" type="image/icon type">
    <script src="w3.js"></script>
    <title>Register</title>
</head>
<body>

    <div class="phpSection">
        <?php 

            $name = $_POST["getName"];

            echo "Great, Welcome to our website " .  $name ."<br>";
            echo "Redirect to homepage in 15 seconds.<br>";
            echo "Redirect now click <a href=\"Home.html\">here</a>.<br>";
            header( "refresh: 15; url=Home.html" );
            exit(0);
        ?>
    </div>


</body>
</html>