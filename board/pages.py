from flask import Blueprint, request, render_template

bp = Blueprint("pages", __name__)

@bp.route("/")
def home(): 
    return render_template("pages/Home/Home.html")

@bp.route("/Add_Credentials")
def addCredential():
    return render_template("pages/Add_Credentials.html")

@bp.route("/Add_Credentials_Submit", methods=["post"])
def submit():
    username = request.form.get("username")
    password = request.form.get("password")

    return render_template("pages/Submit.html", username=username, password=password)

