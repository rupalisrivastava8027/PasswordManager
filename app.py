from flask import Flask, render_template, request
from Encryption import encryption


app = Flask(__name__)

all = open("all.txt", "w")

categories = ["Domain", "Username", "Password"]
credentials = []



@app.route("/", methods = ["POST", "GET"])
def home():

    return render_template("pages/home.html", credentials=credentials)


@app.route("/addCredentials")
def addCredentials():
    return render_template("pages/addCredential.html")

@app.route("/submit", methods = ["POST"])
def submit():
    username = request.form.get("username")
    password = request.form.get("password")
    domain = request.form.get("domain")
    
    

    secure = encryption()

    print(secure.encrypt("Hello"))
    all.write("Domain: " + domain + "\nUsername: " + secure.encrypt(username) + "\nPassword: " + secure.encrypt(password) + "\n\n")

    

    print(credentials)
    return render_template("pages/submit.html", username=username, password=password, domain=domain)


app.run(debug=True)