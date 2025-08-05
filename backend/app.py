from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Verhoeff algorithm multiplication table
verhoeff_d = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
]

# Verhoeff algorithm permutation table
verhoeff_p = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
]

def is_aadhaar_valid(aadhaar_number):
    """
    Validates an Aadhaar number using the Verhoeff algorithm.
    """
    try:
        if not (isinstance(aadhaar_number, str) and len(aadhaar_number) == 12 and aadhaar_number.isdigit()):
            return False
        c = 0
        for i, digit_char in enumerate(reversed(aadhaar_number)):
            digit = int(digit_char)
            p_val = verhoeff_p[i % 8][digit]
            c = verhoeff_d[c][p_val]
        return c == 0
    except (ValueError, TypeError):
        return False

@app.route('/validate-aadhaar', methods=['POST'])
def validate_aadhaar_endpoint():
    data = request.get_json()
    aadhaar_number = data.get('aadhaarNumber')
    is_valid = is_aadhaar_valid(aadhaar_number)
    return jsonify({"valid": is_valid})

if __name__ == "__main__":
    app.run(debug=True)