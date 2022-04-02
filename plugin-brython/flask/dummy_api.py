from flask import Flask
from flask import request

from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/msg', methods=['GET', 'POST', 'OPTIONS'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def receive_info():
	print(request.data)
	return request.data


app.run(port=8666, debug=True)
