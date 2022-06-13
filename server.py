from flask import Flask
import os
import json
import glob
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return 'Hello World'


@app.route('/GetDataBasePreparation')
@cross_origin()
def getDataBasePreparation():
    response = []
    os.system('jupyter nbconvert --execute --to python Average_user/Database_preparation.ipynb')
    read_files = glob.glob('Average_user/*.json')
    for i in range(len(read_files)):
        response.append(json.load(open(read_files[i])))

    res = json.dumps(response)
    return res

@app.route('/GetResultsOfAnalysis')
@cross_origin()
def getResultsOfAnalysis():
    response = []
    os.system('jupyter nbconvert --execute --to python Average_user/Average_user.ipynb')
    os.system('jupyter nbconvert --execute --to python Average_user/JSON_zipper.ipynb')

    read_files = glob.glob('Average_user/ZippedJSON.json')
    for i in range(len(read_files)):
        response.append(json.load(open(read_files[i])))

    res = json.dumps(response)
    return res


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8081)
