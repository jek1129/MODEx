/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styling */
body {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    font-family: 'Arial', sans-serif;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

/* Container Styling */
.container {
    text-align: center;
}

/* Animated Title Styling */
.animated-title {
    font-size: rem;
    font-weight: bold;
    position: relative;
    display: inline-block;
    overflow: hidden;
    background: linear-gradient(90deg, #FFD700, #DAA520, #FFD700, #DAA520);
    background-size: 200% auto;
    color: #fff;
    text-transform: uppercase;
    animation: shine 3s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@keyframes shine {
    0% {
        background-position: 200% center;
    }
    100% {
        background-position: -200% center;
    }
}

/* Subtitle Styling */
.subtitle {
    font-size: 1.2rem;
    margin-top: 10px;
    letter-spacing: 2px;
}

/* Proceed Button Styling */
.proceed-btn {
    margin-top: 40px;
    padding: 15px 30px;
    font-size: 1.2rem;
    color: #fff;
    background: #FFD700;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

.proceed-btn:hover {
    background: #DAA520;
    transform: translateY(-5px);
}
// Navigate to secondpage.html when the button is clicked
document.querySelector('.proceed-btn').addEventListener('click', () => {
    window.location.href = 'secondpage.html';
});
