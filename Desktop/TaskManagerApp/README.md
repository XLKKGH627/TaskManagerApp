# Task Manager App

A simple and functional **Task Manager App** built with **React Native + Expo**.

Users can:
- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Persist tasks locally using AsyncStorage

This app is built as part of the Chapter One React Native tech screen.

---

## 📸 Preview

![Screenshot](./assets/screenshot.png)

---

## ✨ Features

- **Modern UI** with [react-native-paper](https://callstack.github.io/react-native-paper/)
- **Cross-platform** support (iOS / Android / Web)
- **State persistence** using AsyncStorage
- **Modular code structure** using components, screens, and utilities
- **Responsive layout** with `FlatList`, `TextInput`, and `Button`

---

## 🛠 Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [react-native-paper](https://callstack.github.io/react-native-paper/)
- [uuid](https://www.npmjs.com/package/uuid)
- [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)

---

## 🚀 How to Set Up & Run the App

### ✅ Prerequisites

- [Node.js (LTS)](https://nodejs.org/)
- Expo CLI (install globally if you haven't):

```bash
npm install -g expo-cli
```
### ✅ Step By Step Set Up

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/TaskManagerApp.git

cd TaskManagerApp
```
2. **Install Dependencies**
```bash
npm install
```
3. **Start the Development Server**
```bash
npx expo start --web
```