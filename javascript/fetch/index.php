<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form university</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<main>
    <div class="subscribe-block">
        <section class="subscribe-block__content">
            <h2 class="subscribe-block__title">
                Подпишись на рассылку
            </h2>
            <form action="/php/form_handler.php" method="post" class="subscribe-form">
                <input type="email" name="email" class="subscribe-form__input" placeholder="Ваш Email">
                <input type="submit" class="subscribe-form__button">
            </form>
            <div class="subscribe-block__result" data-result="success">
                Success
            </div>
            <div class="subscribe-block__result" data-result="error">
                Error
            </div>
        </section>
    </div>
</main>
<script src="js/app.js"></script>
</body>
</html>
