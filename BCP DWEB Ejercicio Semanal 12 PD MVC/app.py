from flask import Flask, render_template, request
import requests

app = Flask(__name__)

GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes"

@app.route("/", methods=["GET", "POST"])
def index():
    query = request.form.get("query", "python programming")  # búsqueda por defecto
    params = {
        "q": query,
        "maxResults": 10
    }
    response = requests.get(GOOGLE_BOOKS_API, params=params)
    data = response.json()
    books = []

    if "items" in data:
        for item in data["items"]:
            info = item.get("volumeInfo", {})
            books.append({
                "title": info.get("title", "Sin título"),
                "authors": ", ".join(info.get("authors", ["Autor desconocido"])),
                "thumbnail": info.get("imageLinks", {}).get("thumbnail"),
                "description": info.get("description", "Sin descripción disponible"),
                "infoLink": info.get("infoLink")
            })

    return render_template("index.html", books=books, query=query)

if __name__ == "__main__":
    app.run(debug=True)
