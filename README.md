# 🌿 Plant Disease Detection & Smart Plant Monitoring 

## 🚀 Live Demo
- **Frontend:** (https://plant-diseases-detection-smart-plan.vercel.app/)
- **Backend:** (https://plant-diseases-detection-smart-plant.onrender.com)

## 📌 Description

A full-stack plant care web application that combines plant disease detection, smart plant monitoring, an indoor plant shop, and an interactive chatbot.

Built using React and Flask, the system helps users analyze plant health, monitor environmental conditions, and explore plant-related resources in a single platform.


## ✨ Features


### 🌱 Plant Disease Detection

* Detect plant diseases based on **leaf color analysis**
* Supports:

  * 📷 Camera capture
  * 🖼️ Image upload
* Uses OpenCV and NumPy for image processing
* Provides instant prediction results
---

  ### 🌿 Smart Plant Monitor (Live Monitoring)
- Real-time monitoring of plant and environmental conditions using Flask backend  
- Tracks key parameters:
  - 💧 Moisture level  
  - 🌡️ Temperature  
  - 💨 Humidity  
  - ☀️ Light intensity  

- Displays:
  - 📊 Live temperature trend chart  
  - 📈 Plant health status  
  - 🧾 System logs

 * Provides insights for better plant care

- Data is dynamically fetched from the Flask backend, enabling near real-time updates on the dashboard

---
### 🛒 Indoor Plant Shop

* Browse indoor plants
* Filter plants based on categories
* Clean and responsive UI for product display

---
### 🤖 Plant Chatbot

* Interactive chatbot integrated on homepage
* Answers plant-related queries
* Enhances user experience with quick guidance

---
### 📱 Responsive Design

* Fully responsive across mobile, tablet, and desktop
* Built using Tailwind CSS


## 🛠️ Tech Stack

### Frontend

* React
* Tailwind CSS
* Axios
* Lucide Icons

### Backend

* Python
* Flask
* Flask-CORS

### Image Processing

* OpenCV
* NumPy


## 🧠 How It Works

* Users upload or capture plant images
* Backend processes image using OpenCV
* Disease detection is performed based on color analysis
* Smart monitoring dashboard displays plant/environment data
* Smart plant monitoring data is served live from the Flask backend and updated dynamically on the frontend
* Chatbot assists with plant-related queries
* Shop allows users to explore indoor plants


## 📂 Project Structure

* React-based frontend (UI, dashboard, chatbot, shop)
* Flask backend (API, image processing)
* Modular architecture for scalability


## ⚙️ Installation & Setup

### 🔹 Frontend

```bash id="plant01"
cd frontend
npm install
npm start
```


### 🔹 Backend

```bash id="plant02"
cd backend
pip install -r requirements.txt
python app.py
```


## 📸 Screenshots

* Home <img width="1890" height="901" alt="Screenshot 13" src="https://github.com/user-attachments/assets/13a29dcb-ecc5-4b85-9866-a2264c426f08" />

* Disease Detection (Camera & Upload) <img width="1478" height="838" alt="Screenshot 13  camera upload" src="https://github.com/user-attachments/assets/d4af60b9-878c-4409-88c2-c6e18cbe0415" />

* Disease Analyze <img width="1318" height="887" alt="Screenshot 13  analyze" src="https://github.com/user-attachments/assets/95c4825c-e964-4159-83fc-3c9e9c3f8e86" />

* Smart Plant Dashboard <img width="1868" height="912" alt="Screenshot 13  smart plant" src="https://github.com/user-attachments/assets/63d9c79c-bfbe-4841-b18d-73a8e508a5d2" />

* Temperature Chart <img width="1713" height="889" alt="Screenshot 13  chart" src="https://github.com/user-attachments/assets/fb747d21-0e44-42b0-aa5b-4efecf308568" />

* Plant Shop <img width="1896" height="912" alt="Screenshot 13  shop" src="https://github.com/user-attachments/assets/110bfb76-a9ae-45f2-b250-6e7090ec7a54" />

* Chatbot Interface <img width="1171" height="815" alt="Screenshot 13  chatbot" src="https://github.com/user-attachments/assets/050a103b-6d85-43c0-b35c-62e6580a7e28" />



## 🎯 Learning Outcome

This project helped me understand:

* Full-stack development (React + Flask)
* Image processing using OpenCV
* API integration between frontend and backend
* Building multi-feature applications
* Designing real-world problem-solving systems


## 🚧 Future Improvements

* Integrate machine learning for more accurate disease detection
* Real-time sensor data integration (IoT)
* User authentication and data storage
* Advanced analytics and visualization
* Online checkout for plant shop


## 👩‍💻 Author

Sonali

## 📝 Medical/Agricultural Disclaimer
*This application is for educational and informational purposes only. The health analysis is based on color-range logic and may not be 100% accurate. For serious agricultural issues, please consult a local expert or botanist.*
