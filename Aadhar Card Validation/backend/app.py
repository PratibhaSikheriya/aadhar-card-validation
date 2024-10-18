from flask import Flask, request, jsonify
from sklearn.linear_model import LogisticRegression
import numpy as np

app = Flask(__name__)

# Example Logistic Regression model (replace with real Aadhaar dataset)
model = LogisticRegression()
X = np.array([[123412341234], [987698769876], [123456789012], [987654321012], [111122223333], [444455556666]])
y = np.array([1, 0, 1, 0, 1, 0])
model.fit(X, y)

@app.route('/validate-aadhaar', methods=['POST'])
def validate_aadhaar():
    data = request.get_json()
    aadhaar_number = np.array([[int(data['aadhaarNumber'])]])
    prediction = model.predict(aadhaar_number)
    
    return jsonify({"valid": bool(prediction[0])})

if __name__ == "__main__":
    app.run(debug=True)
