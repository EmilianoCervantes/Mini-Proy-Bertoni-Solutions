from marshmallow import Schema, fields


class TareasSchema(Schema):
    tareas = fields.Pluck("self", "tareas", many=True)