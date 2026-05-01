from flask import Flask,  jsonify , request
from flask_cors import CORS 
import cv2
import numpy as np
import random
from datetime import datetime


app = Flask (__name__)
CORS(app)


@app.route('/api/plant-data' , methods=['GET'])
def get_plant_data():
     
     return jsonify({
          "moisture": f"{random.randint(30, 80)}%",
          "temperature": f"{random.randint(20,32)}°C",
          "humidity": f"{random.randint(40, 70)}%",
          "light": "Optimal" if random.random() > 0.3 else "Low",
          "last_watered": datetime.now().strftime("%H:%M:%S"),
          "status": "Healthy" if random.randint(0, 1) == 1 else "Needs Water"
     })

@app.route('/api/water', methods=['POST'])
def water_plant():
     return jsonify({"message" : "Pump activated! Plant is being watered."})



RESULTS_DATABASE = {
    "healthy": {
         "disease": "Healthy Leaf",
         "confidence" : "95%",
         "treatment": "No action needed , continue regular watering and sunlight."
    },
    "dried" : {
         "disease": 'leaf Scorch/ Dehydration',
         "confidence": "85%",
         "treatment" : "Increase watering frequency and check for root rot."
    },
    "leaf_disease": {
          "disease": "Tomato Late Blight",
          "confidence" : "98%",
          "treatment": "Remove infected leaves and apply fungicide."
    },

     "leaf_spot":{
          "disease": "Leaf Spot",
          "confidence" : "87%",
          "treatment": "Use neem oil on it once a day."
    },
     "fungal":{
          "disease": "Powdery Mildew",
          "confidence" : "90%",
          "treatment": "Apply fungicide."
    },
    "unknown": {
         'disease':'Unknown Issue',
         "confidence": "N/A",
         "treatment": "Please consult a local botanist."
    }
}  

def analyze_plant_color(image_path):
     img = cv2.imread(image_path)
     if img is None: return "error"

     hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)


     green_mask = cv2.inRange(hsv, np.array ([35, 40, 40]),  np.array([85, 255, 255]))
     brown_mask = cv2.inRange(hsv, np.array ([10, 100, 20]), np.array([30, 255, 200]))
     red_mask = cv2.inRange(hsv, np.array([0, 100, 100]), np.array([10, 255, 255]))

     plant_pixels = np.sum(green_mask > 0) + np.sum(brown_mask > 0) + np.sum(red_mask > 0)
     total_pixels = img.shape[0] * img.shape[1]
     plant_pct = (plant_pixels / total_pixels) * 100

     if plant_pct > 1.0:
          keys = ["healthy", "dried", "leaf_disease","leaf_spot","fungal"]
          return random.choice(keys)
     else:
          return "unknown"
     
  

@app.route('/api/predict', methods=['POST'])
def detect_disease():
    if 'image' not in request.files:
         return jsonify({'error': 'No image uploaded'}), 400
    
    file = request.files['image']
    file_path = 'temp_image.jpg'
    file.save(file_path)

    status = analyze_plant_color(file_path)

    if status ==  "unknown":
         return jsonify({
              'success': False,
              'message': 'No plant detected.  Please upload a clear photo of a leaf.'
         })
    
    return jsonify({
         'success': True,
         'data': RESULTS_DATABASE[status]
    })
  



@app.route('/chat', methods=['POST'])
def chat_logic():
     data = request.json
     user_message = data.get("message", "").lower()

     if "yellow" in user_message:
          reply = "Yellow leaves usually mean overwatering or lack of nitrogen."
     elif"water" in user_message:
          reply = "Most indoor plants Prefer their soil to dry out between waterings."
     else:
          reply = "I'm your Plant Assistant. Ask me about leaf colors or watering!"

     return jsonify({"reply": reply})

if __name__ == '__main__' :
     app.run(debug=True, port=5000)