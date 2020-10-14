from flask import Flask, jsonify
from flask_restful import Api
from marshmallow import ValidationError
from flask_cors import CORS

from controladores.tareas import Tareas

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

# Con esto se pueden borrar cada try y catch de ESE error y se comporta igual
@app.errorhandler(ValidationError)
def handle_marshmallow_validation(err):  # == except ValidationError as err
    # return jsonify(err.messages), 400
    return {'message': 'Faltan datos o alguno se está enviando mal.'}, 400


api.add_resource(Tareas, '/tareas')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
