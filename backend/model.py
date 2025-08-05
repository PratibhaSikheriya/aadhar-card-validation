import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

# Example dataset
X = np.array([[123412341234], [987698769876], [123456789012], [987654321012]])
y = np.array([1, 0, 1, 0])

# Split data for training/testing
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Train Logistic Regression model
model = LogisticRegression()
model.fit(X_train, y_train)

# Model is ready for prediction
