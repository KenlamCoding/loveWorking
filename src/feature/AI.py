from sklearn.tree import DecisionTreeClassifier

# Define the weather features and corresponding labels for training
weather_features = [
    [25, 'Sunny'],
    [18, 'Rainy'],
    [20, 'Cloudy'],
    # Add more weather features here...
]

activity_labels = [
    'Go for a hike',
    'Stay indoors and watch a movie',
    'Go for a bike ride',
    # Add more activity labels here...
]

# Create a mapping between weather labels and numerical values
weather_mapping = {'Sunny': 0, 'Rainy': 1, 'Cloudy': 2}

# Convert weather labels to numerical values for training
weather_features_encoded = [[temp, weather_mapping[condition]] for temp, condition in weather_features]

# Train the decision tree classifier
clf = DecisionTreeClassifier()
clf.fit(weather_features_encoded, activity_labels)

def suggest_outdoor_activity(temperature, weather_condition):
    # Encode the input features
    input_features = [[temperature, weather_mapping[weather_condition]]]

    # Make predictions using the trained decision tree model
    predicted_label = clf.predict(input_features)[0]

    return predicted_label

# Test the model with new inputs
temperature = 22
weather_condition = 'Sunny'
suggested_activity = suggest_outdoor_activity(temperature, weather_condition)
print(f"For a temperature of {temperature}C and {weather_condition} weather, I suggest: {suggested_activity}")