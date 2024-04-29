document.addEventListener("DOMContentLoaded", () => {
    
    const button = document.getElementById("randomPassword");

    button.addEventListener("click", () => {

        alert(randomPassword(4));
    });
});

function randomPassword(length)
{
    let abc = "abcefd]ghijklmnopqrstuvwxyz";
    let symbols = "`~!@#$%^&*()-_=+[]|;:',<.>/?";
    let numbers = "0123456789";

    let categories = {abc, symbols, numbers};

    let randomPassword = "";

    for (let i = 0; i < length; i++)
    {
        let randomCategory = Math.round(Math.random() * 3);

        const randomCategoryChoose= categories[randomCategory];
        let randomChar = Math.random() * randomCategoryChoose.length;

        randomPassword += (categories[randomCategory])[randomChar];
    }

    return randomPassword;
}