<template>
    <div class="contact-container">
        <h1>Let's Get in Touch!</h1>
        <div class="contact-content">
            <div class="form-section">
                <form action="https://formspree.io/f/mdknwave" method="POST">
                    <div class="input-group">
                        <label for="email">Enter Your Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="input-group">
                        <label for="message">Enter Your Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div class="image-section">
                <img src="https://chlowus.github.io/Nodejs.pictures/contactform.jpeg" alt="Ocean with Stacked Stones">
            </div>
        </div>
        <div class="contact-info">
            <div class="info-text">
                <p>Number: (+27) 88 888 4841</p>
                <p>Location: 123 Kloof Road Arby</p>
            </div>
            <div class="social-icons">
                <a href="https://www.facebook.com" target="_blank">
                    <i class="lab la-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <i class="lab la-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                    <i class="lab la-linkedin"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: #f5faff;
    font-family: 'DM Sans', sans-serif;
    width: 100%; /* Changed from 100vw to 100% */
    box-sizing: border-box;
    overflow-x: hidden; /* Prevent horizontal scrolling */
}

h1 {
    font-size: 2.5rem;
    color: #87CEEB;
    font-weight: 800;
    margin-bottom: 2rem;
    text-align: center;
}

.contact-content {
    display: flex;
    width: 100%; /* Changed from 90vw to 100% */
    max-width: 1200px;
    height: auto;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #87cfeb85;
    flex-direction: column;
}

@media(min-width: 768px) {
    .contact-content {
        flex-direction: row;
        height: 60vh;
    }
}

.form-section {
    flex: 2;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}

form {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.input-group {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
}

input, textarea {
    width: 100%;
    padding: 1rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    font-size: 1rem;
}

textarea {
    min-height: 15vh;
}

button {
    padding: 1rem 2rem;
    background-color: #87CEEB;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    align-self: flex-start;
}

button:hover {
    background-color: #00bfff;
}

.image-section {
    flex: 1;
    width: 100%;
    height: 40vh;
    overflow: hidden;
}

.image-section img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media(min-width: 768px) {
    .image-section {
        height: 100%;
    }
}

.contact-info {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; /* Ensure it doesn't overflow horizontally */
    box-sizing: border-box;
}

@media(min-width: 768px) {
    .contact-info {
        flex-direction: row;
        justify-content: space-between;
        max-width: 800px;
    }
}

.info-text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
}

@media(min-width: 768px) {
    .info-text {
        align-items: flex-start;
    }
}

.social-icons {
    display: flex;
    gap: 1.5rem; 
    margin-top: 1rem;
}

.social-icons a {
    font-size: 3rem; 
    color: #FEB262;
    transition: color 0.3s ease;
}

.social-icons a:hover {
    color: #ff8400;
}

@media(min-width: 768px) {
    .social-icons {
        margin-top: 0;
    }
}
</style>