<?php 
    header('HTTP/1.0 404 Not Found');
    $baseUri = $_SERVER['REQUEST_URI'];
?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>404 tv</title>
        <link rel="stylesheet" href=<?php echo $baseUri . 'style.css'; ?>>
        <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
        <script src=<?php echo $baseUri . 'js/marquee.js';?>></script>
        <script src=<?php echo $baseUri . 'js/script.js';?>></script>
    </head>
    <body>
        <div class="tv">
            <div class="frame">
                <div class="second-frame">
                    <div class="monitor">
                        <div class="image">
                            <div class="marquee">Du er fortapt. You're lost. Estás perdido. είσαι χαμένος. 你都将丢失。Vous êtes perdu. 당신이 손실됩니다. вы потеряли. Ikaw ay mawawala. あなたは失われます。</marquee>
                        </div>
                    </div>
                </div>
                <div class="logo">404 <strong>tv</strong></div>
            </div>
            <div class="brand">philips</div>
        </div>
    </body>
</html>
