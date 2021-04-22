from flask import Flask, request, jsonify
app = Flask(__name__)

# Copy Website Recommendation function here


@app.route('/recommend_restaurant/', methods=['POST'])
def welcome():
    request_data = request.get_json()
    restaurant_name = request_data['restaurant_name']
    print(f"Restaurant Name is {restaurant_name}")
    # Call website recommendation function here with restaurant name
    return jsonify({"status": True, "data": ["1", "2"]})


if __name__ == '__main__':
    # Load Dataframe Here
    app.run(host='0.0.0.0', port=8000)