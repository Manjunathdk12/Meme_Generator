In this project, let's build a **Meme Generator** app by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/meme-generator-output.gif" alt="meme-generator" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

---

## 🚀 Features

- 📷 Add your own image via URL
- ✍️ Add custom **Top Text** and **Bottom Text**
- 🔠 Choose different font sizes for meme text
- ⚡ Instant meme generation preview
- 🧑‍🎨 Stylish and responsive UI using Styled Components

---

## 🛠️ Tech Stack

- **React JS**
- **Styled Components**
- **CSS**
- **JavaScript**

---

## 📂 Folder Structure

meme-generator/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── MemeGenerator/
│   │       ├── index.js               # Main MemeGenerator component logic
│   │       ├── styledComponents.js    # Styled components for MemeGenerator
│   │       └── index.css              # (Optional) Additional CSS if any
│   ├── utils/
│   │   └── constants.js               # Font size options or other constants
│   ├── App.js                         # App component which renders MemeGenerator
│   ├── App.css                        # Global styles if needed
│   └── index.js                       # Entry point to render App
├── package.json
├── README.md
└── .gitignore

---

## 🧑‍💻 Getting Started

### 🔧 Installation

```bash
git clone https://github.com/your-username/meme-generator.git
cd meme-generator
npm install

```
▶️ Run the app
npm start
The app will open on http://localhost:3000/.
✅ Requirements
Node.js

npm or yarn

React environment set up

### Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`


### Completion Instructions


<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, values in the inputs elements should be empty and the selected value in the select element should be the first item in the given fontSizesOptionsList
- When non-empty values are provided for **Image Url**, **Top Text**, **Bottom Text**, and **Font Size** and the **Generate** button is clicked
  - The Image URL that has been provided should be applied as a background-image for the generated meme
  - The given Top and Bottom text values should be at the top and bottom of the generated meme
  - The selected font size value should be applied for both top and bottom text of the generated meme





<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.js`
- `src/components/MemeGenerator/index.js`
- `src/components/MemeGenerator/styledComponents.js`



### Important Note


<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- The HTML container element for the generated meme should have `data-testid` attribute value as **meme**
- When Styled Components are used, `data-testid` attribute should be used instead of `testid` attribute



### Resources

<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/nature-img.png](https://assets.ccbp.in/frontend/react-js/nature-img.png)




<summary>Colors</summary>

<br/>

<div style="background-color: #35469c; width: 150px; padding: 10px; color: black">Hex: #35469c</div>
<div style="background-color: #7e858e; width: 150px; padding: 10px; color: black">Hex: #7e858e</div>
<div style="background-color: #5a7184; width: 150px; padding: 10px; color: black">Hex: #5a7184</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #d7dfe9; width: 150px; padding: 10px; color: black">Hex: #d7dfe9</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: black">Hex: #1e293b</div>
<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: black">Hex: #0b69ff</div>




<summary>Font-families</summary>

- Open Sans

🧾 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙌 Acknowledgements
UI Inspired by NxtWave's assignment design

Image sourced from Cloudinary and CCBP assets


