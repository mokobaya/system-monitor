import psutil

from flask import Flask
from flask import Flask, flash, redirect, render_template, request, session, abort
import os
from flask import jsonify


app = Flask(__name__)


@app.route('/')
def home():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return render_template('index.html') 
 
@app.route('/login', methods=['POST'])
def do_admin_login():
    if request.form['password'] == 'pass1234' and request.form['username'] == 'kanri':
        session['logged_in'] = True
    else:
        flash('wrong password!')
    return home()
 
@app.route('/cpu')
def cpu():
    cpu_percent = psutil.cpu_percent()
    return jsonify(cpu_percent=cpu_percent)



if __name__ == "__main__":
    app.secret_key = os.urandom(12)
    app.run(host='0.0.0.0', threaded=True)

