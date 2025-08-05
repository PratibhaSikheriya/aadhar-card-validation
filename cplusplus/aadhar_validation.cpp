#include <iostream>
#include <string>
using namespace std;

int d[10][10] = { /* multiplication table for Verhoeff algorithm */ };
int p[8][10] = { /* permutation table for Verhoeff algorithm */ };
int inv[10] = { /* inverse table for Verhoeff algorithm */ };

int verhoeffCheckDigit(string num) {
    int c = 0;
    for (int i = 0; i < num.length(); i++) {
        c = d[c][p[(i % 8)][num[num.length() - i - 1] - '0']];
    }
    return inv[c];
}

bool isAadhaarValid(string aadhaar) {
    return verhoeffCheckDigit(aadhaar) == 0;
}

int main() {
    string aadhaar;
    cout << "Enter Aadhaar number: ";
    cin >> aadhaar;
    
    if (isAadhaarValid(aadhaar)) {
        cout << "Valid Aadhaar number" << endl;
    } else {
        cout << "Invalid Aadhaar number" << endl;
    }
    
    return 0;
}
