from flask import Flask, jsonify, render_template
import os

app = Flask(__name__)

RESTAURANTS = [
    # Fine Dining
    {
        "id": 1,
        "name": "La Pergola",
        "category": "fine_dining",
        "description": "Rome's only three-Michelin-star restaurant, perched atop the Rome Cavalieri hotel with breathtaking panoramic views. Chef Heinz Beck's Mediterranean cuisine is legendary.",
        "address": "Via Alberto Cadlolo, 101",
        "lat": 41.9185,
        "lng": 12.4354,
        "rating": 5,
        "price": "€€€€",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop"
    },
    {
        "id": 2,
        "name": "Il Pagliaccio",
        "category": "fine_dining",
        "description": "Two Michelin stars nestled in the heart of Rome. Chef Anthony Genovese crafts imaginative Italian cuisine with Asian influences in an intimate setting.",
        "address": "Via dei Banchi Vecchi, 129",
        "lat": 41.8975,
        "lng": 12.4665,
        "rating": 5,
        "price": "€€€€",
        "image": "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop"
    },
    {
        "id": 3,
        "name": "Aroma",
        "category": "fine_dining",
        "description": "Dine with a view of the Colosseum from the rooftop terrace of Palazzo Manfredi. One Michelin star, extraordinary Roman cuisine in an unmatched setting.",
        "address": "Via Labicana, 125",
        "lat": 41.8896,
        "lng": 12.4936,
        "rating": 5,
        "price": "€€€€",
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop"
    },
    # Trattoria
    {
        "id": 4,
        "name": "Da Enzo al 29",
        "category": "trattoria",
        "description": "A beloved Trastevere institution since 1935. Authentic Roman soul food — cacio e pepe, carbonara, and oxtail — served with no-nonsense warmth.",
        "address": "Via dei Vascellari, 29",
        "lat": 41.8872,
        "lng": 12.4727,
        "rating": 4,
        "price": "€€",
        "image": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=250&fit=crop"
    },
    {
        "id": 5,
        "name": "Flavio al Velavevodetto",
        "category": "trattoria",
        "description": "Built into Monte Testaccio — literally into ancient Roman pottery shards. The rigatoni con pajata and artichokes here are a spiritual experience.",
        "address": "Via di Monte Testaccio, 97",
        "lat": 41.8791,
        "lng": 12.4758,
        "rating": 4,
        "price": "€€",
        "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=250&fit=crop"
    },
    {
        "id": 6,
        "name": "Trattoria Vecchia Roma",
        "category": "trattoria",
        "description": "Tucked in the Jewish Ghetto, this family-run gem has been serving Roman-Jewish specialties since 1890. The fried artichokes are non-negotiable.",
        "address": "Via della Tribuna di Campitelli, 18",
        "lat": 41.8928,
        "lng": 12.4792,
        "rating": 4,
        "price": "€€",
        "image": "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&h=250&fit=crop"
    },
    # Café
    {
        "id": 7,
        "name": "Sant'Eustachio il Caffè",
        "category": "cafe",
        "description": "The most debated espresso in Rome. Since 1938, their secret-recipe gran caffè has drawn pilgrims from around the world. Standing room only — as it should be.",
        "address": "Piazza di Sant'Eustachio, 82",
        "lat": 41.8983,
        "lng": 12.4737,
        "rating": 5,
        "price": "€",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=250&fit=crop"
    },
    {
        "id": 8,
        "name": "Antico Caffè Greco",
        "category": "cafe",
        "description": "Rome's oldest café, opened in 1760 on Via Condotti. Keats, Goethe, and Casanova all sat here. The hot chocolate is dangerously good.",
        "address": "Via Condotti, 86",
        "lat": 41.9059,
        "lng": 12.4801,
        "rating": 4,
        "price": "€€",
        "image": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&h=250&fit=crop"
    },
    {
        "id": 9,
        "name": "Caffè della Pace",
        "category": "cafe",
        "description": "Draped in ivy near Piazza Navona, this 1891 café is Rome's most photogenic. Aperitivo hour here, with the ivy-framed facade glowing gold, is pure cinema.",
        "address": "Via della Pace, 3",
        "lat": 41.8997,
        "lng": 12.4718,
        "rating": 4,
        "price": "€€",
        "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=250&fit=crop"
    },
    # Pizza
    {
        "id": 10,
        "name": "Pizzarium",
        "category": "pizza",
        "description": "Gabriele Bonci's legendary pizza al taglio near the Vatican. The focaccia-like crust, creative seasonal toppings, and sold-by-weight format changed Roman pizza forever.",
        "address": "Via della Meloria, 43",
        "lat": 41.9079,
        "lng": 12.4554,
        "rating": 5,
        "price": "€",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop"
    },
    {
        "id": 11,
        "name": "Seu Pizza Illuminati",
        "category": "pizza",
        "description": "Pier Daniele Seu's Trastevere pizzeria pushes Neapolitan tradition into the future. The dough is fermented 48 hours, toppings are chef-driven. Book ahead.",
        "address": "Via Angelo Bargoni, 10",
        "lat": 41.8840,
        "lng": 12.4702,
        "rating": 5,
        "price": "€€",
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=250&fit=crop"
    },
    # Gelato
    {
        "id": 12,
        "name": "Fatamorgana",
        "category": "gelato",
        "description": "Rome's most inventive gelateria — all gluten-free, with flavors like basil-walnut-honey and rose-cardamom. Maria Agnese Spagnuolo is a genius. Multiple locations.",
        "address": "Via Roma Libera, 11",
        "lat": 41.8849,
        "lng": 12.4694,
        "rating": 5,
        "price": "€",
        "image": "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=250&fit=crop"
    },
    {
        "id": 13,
        "name": "Gelateria del Teatro",
        "category": "gelato",
        "description": "Handcrafted gelato near Piazza Navona using seasonal, local ingredients. Watch it being made through the glass. The ricotta-fig and sage-honey flavors are transcendent.",
        "address": "Via dei Coronari, 65",
        "lat": 41.9006,
        "lng": 12.4707,
        "rating": 5,
        "price": "€",
        "image": "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=250&fit=crop"
    },
]

CATEGORIES = {
    "fine_dining": {"label": "Fine Dining", "color": "#C9A84C", "icon": "✦"},
    "trattoria":   {"label": "Trattoria",   "color": "#E05C3A", "icon": "◈"},
    "cafe":        {"label": "Café",        "color": "#6B9E78", "icon": "◉"},
    "pizza":       {"label": "Pizza",       "color": "#D4547A", "icon": "◆"},
    "gelato":      {"label": "Gelato",      "color": "#5B8EC4", "icon": "◇"},
}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/restaurants")
def get_restaurants():
    return jsonify({"restaurants": RESTAURANTS, "categories": CATEGORIES})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
