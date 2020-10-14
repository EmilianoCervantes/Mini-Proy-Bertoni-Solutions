from flask import send_file
from flask_restful import Resource, request

from schemas.tareas import TareasSchema

tareas_schema = TareasSchema()

tareasList = ['Primera tarea']

class Tareas(Resource):
    ''' Almacenar las tareas '''

    def get(self):
        return tareasList

    def post(self):
        request_json = request.get_json()
        # sol_data = tareas_schema.load(request_json)

        if request_json['tareas']:
            tareasList = request_json['tareas']
            return { 'message': 'Exito' }, 200

        # return send_file('FormatoSalida-.pdf', generatePDF())
        return {'message': 'Faltan datos. Si persiste este problema, contacte al equipo de soporte.'}
