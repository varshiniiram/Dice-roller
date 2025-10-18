function rollDice(){
    const myinput = document.getElementById("myinput").value;
    const DiceResult = document.getElementById("DiceResult");
    const DiceImage = document.getElementById("DiceImage");
    const values = [];
    const images = [];

    for(let i=0; i < myinput; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src = "dice_images/${value}.png">`);
    }

    DiceResult.textContent = `dice :${values.join(', ')}`;
    DiceImage.innerHTML = images.join('');
    

}