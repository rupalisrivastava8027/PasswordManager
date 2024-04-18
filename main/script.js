let all = [];

function add()
{

    let username = prompt("Username: ");
    let password = prompt("Password: ");
    let displayPassword = "";

    for (let i = 0; i < password.length; i++)
    {
        displayPassword += "#";
    }

    displayPassword += "!";


    let a = [username, password, displayPassword, localStorage.getItem("Credentials")];

    localStorage.setItem("Credentials", a);
    //console.log(localStorage.getItem(""));
}

function process()
{
    let all = [];
    let temp = []; 

    let string = "";

    let credentials = localStorage.getItem("Credentials");

    for (let i = 0; i < credentials.length; i++)
    {
        //console.log(credentials[i]);    

        if (credentials[i] == ",")
        {
            temp.push(string);
            string = "";
            continue;
        }

        if (credentials[i] == "!")
        {
            temp.push(string);
            string = "";
            all.push(temp);
            temp = [];
            continue;  
        }
        string += credentials[i];
        
        
    }
    //onsole.log(all.toString());
    return all;
    
    // [ [Domain, username, password, displayPassword], ]
}
function getCredentials()
{
    let find = document.getElementById("find").value;

    document.getElementById("paragraph").innerHTML = "Searching for " + find + " ...";

    let credentials = process();

    console.log(credentials.toString());

    for (let i = 0; i < credentials.length; i++)
    {
        if (credentials[i][0].toLowerCase() == find.toLowerCase())
        {
            console.log("Found password: " + credentials[i][1]);
            document.getElementById("result").innerHTML = "Found password: " + credentials[i][1];
        }
    }

    
}

