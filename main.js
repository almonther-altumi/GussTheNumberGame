let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let guessInput = document.getElementById("guessInput");
let guessButton = document.getElementById("guessButton");
let message = document.getElementById("message");
let attemptsText = document.getElementById("attempts");

function checkGuess() {
    const guess = parseInt(guessInput.value);

    // التحقق من انتهاء المحاولات
    if (attempts <= 0) {
        message.textContent = "❗لقد نفذت محاولاتك. الرقم السري هو: " + secretNumber;
        attemptsText.textContent = "محاولاتك المتبقية: 0";
        guessButton.disabled = true;
        return;
    }

    // تغيير لون النص عند اقتراب انتهاء المحاولات
    if (attempts <= 4) {
        attemptsText.style.color = "red";
    } else {
        attemptsText.style.color = "white";
    }

    // التحقق من صحة الإدخال
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "❗ادخل رقم صحيح بين 1 و 100.";
        return;
    }

    // تقليل عدد المحاولات وتحديث النص
    attempts--;
    attemptsText.textContent = "محاولاتك المتبقية: " + attempts;

    // التحقق من التخمين
    if (guess === secretNumber) {
        message.textContent = "🎉 تهانينا! لقد خمنت الرقم الصحيح: " + secretNumber;
        guessButton.disabled = true;
    } else if (guess < secretNumber) {
        message.textContent = "❗رقمك أقل من الرقم السري ↗️. حاول مرة أخرى.";
    } else {
        message.textContent = "❗رقمك أكبر من الرقم السري ↙️. حاول مرة أخرى.";
    }

    // التحقق من انتهاء المحاولات بعد التخمين
    if (attempts === 0 && guess !== secretNumber) {
        message.textContent = "❗لقد نفذت محاولاتك. الرقم السري هو: " + secretNumber;
        guessButton.disabled = true;
        
    }
}

function restartGame() {
    // إعادة تعيين القيم
    attemptsText.style.color = "white";
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    guessInput.value = "";
    message.textContent = "🚀 ابدأ اللعب! تحقق من الرقم السري.";
    attemptsText.textContent = "محاولاتك المتبقية: " + attempts;
    guessButton.disabled = false;


}

