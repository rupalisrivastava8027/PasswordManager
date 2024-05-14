from flask import Flask, render_template, request

app = Flask(__name__)

credentials = [
    {
        "domain": "College",
        "username": "Aarush",
        "password": "jdiojwioq"
    }
    
]

@app.route("/", methods = ["POST", "GET"])
def home():

    return render_template("pages/Home.html", credentials=credentials)


@app.route("/addCredentials")
def addCredentials():
    return render_template("pages/Add_Credentials.html")

@app.route("/submit", methods = ["POST"])
def submit():
    username = request.form.get("username")
    password = request.form.get("password")
    domain = request.form.get("domain")
    
    credentials.append (
        {
            "domain": domain,
            "username": username,
            "password": password
        }
    )   

    print(credentials)
    return render_template("pages/Submit.html", username=username, password=password, domain=domain)


app.run(debug=True)