import psutil

from flask import Flask
from flask import render_template
from flask import jsonify


app = Flask(__name__)


@app.route('/cpu')
def cpu():
    cpu_percent = psutil.cpu_percent()
    return jsonify(cpu_percent=cpu_percent)

@app.route('/')
def home():
   return render_template('index.html') 


if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True)
