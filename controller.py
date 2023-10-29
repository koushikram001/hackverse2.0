import cv2
import pyautogui
cap = cv2.VideoCapture(0)
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
prev_nose_y = 0 
sensitivity = 2 
while True:
    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5)
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)
        nose_x = x + w // 2
        nose_y = y + h // 2
        nose_movement = nose_y - prev_nose_y
        pyautogui.move(0, nose_movement * sensitivity)
        prev_nose_y = nose_y
    cv2.imshow('push_pong', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows()