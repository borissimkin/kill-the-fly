
$(document).on('click', '.start_button', function (e) {
    startGame();
}).on('click', '.restart', function (e) {
    restartGame();
}).on('click', '.add_fly', function (e) {
    if (selectedNumberFlies < maxFlies && !playGame && flies.length)
    {
        addFly();
        selectedNumberFlies += 1;
        $('.count_flies').html(`Мух: ${selectedNumberFlies}`);
    }


}).on('click', '.remove_fly', function (e) {
    if (selectedNumberFlies > minFlies && !playGame && flies.length)
    {
        removeFly();
        selectedNumberFlies -= 1;
        $('.count_flies').html(`Мух: ${selectedNumberFlies}`);
    }

})

