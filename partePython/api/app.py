from crypt import methods
from flask import Flask
from flask import render_template, jsonify, request, redirect, url_for
import json
from conectiondb import connect_db, get_list
import redis

app = Flask(__name__)

def connect_db():
    conexion = redis.StrictRedis(host='127.0.0.1', port=6379, db=0, decode_responses= True)
    if (conexion.ping()):
        print("conectado al servidor de redis")
    else:
        print("error....")
    return conexion

    

@app.route('/', methods=['GET', 'POST'])
def index():
    """Retorna la pagina index."""
    db = connect_db()
    db.set('Chapter 1: The Mandalorian', 'Disponible')
    db.set('Chapter 2: The Child', 'Reservado')
    db.set('Chapter 3: The Sin', '')
    db.set('Chapter 4: Sanctuary')
    db.set('Chapter 5: The Gunslinger')
    db.set('Chapter 6: The Prisoner')
    db.set('Chapter 7: The Reckoning')
    db.set('Chapter 8: Redemption')
    print("OK")
    if(request.method == 'GET'):
        lista = db.get('Chapter 1')
    return render_template('/index.html', datos=lista)


@app.route('/cargar')
def cargar():
    db = connect_db()
    dic = {'nombre': '', 'aparicion': '', 'biografia': '', 'personaje': ''}
    return render_template('/cargar.html', documento=dic)


@app.route('/about')
def about():
    return "About Python Flask"

if __name__ == '__main__':
    app.run(host='localhost', port='5050', debug=False)



