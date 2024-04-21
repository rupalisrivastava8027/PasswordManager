let credentials = new Map();

let realPassword = "";

function add()
{
    let domain = prompt("Domain: ");
    let username = prompt("Username: ");
    let password = prompt("Password: ");

    localStorage.setItem(domain.toLowerCase(), [username, password]);
}

function getCredentials()
{
    let find = document.getElementById("find").value;
    
    document.getElementById("search").innerHTML = "Searching for " + find + " ...";
    
    if (localStorage.getItem(find.toLowerCase()) != null)
    {
        document.getElementById("result").innerHTML= "Found " + find + ".";
    }

    else
    {
        document.getElementById("result").innerHTML= "Not Found " + find + ".";
    }
    const foundCredentials = localStorage.getItem(find.toLowerCase()).toString().split(",");
    realPassword = foundCredentials[1];


    document.getElementById("username").innerHTML = "Username: " + foundCredentials[0];

    document.getElementById("password").innerHTML = "Password: " + toHidden(realPassword); 
    // console.log(credentials.toString());

    // for (let i = 0; i < credentials.length; i++)
    // {
    //     if (credentials[i][0].toLowerCase() == find.toLowerCase())
    //     {
    //         console.log("Found password: " + credentials[i][1]);
    //         document.getElementById("result").innerHTML = "Found password: " + credentials[i][1];
    //     }
    // }

    
}

function toHidden(password)
{
    let hidden = "";

    for (let i = 0; i < password.length; i++)
    {
        hidden += "*";
    }
    return hidden;
}

function changeFromHidden()
{
    document.getElementById("password").innerHTML = "Password: " + realPassword;
}

function changeToHidden()
{
    document.getElementById("password").innerHTML = "Password: " + toHidden(realPassword);

}
