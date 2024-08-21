<template>
    <div class="contact-container">
        <center><div class="title">
            <h1>Let's Get in Touch</h1>
        </div>
        <div class="contact-form">
            <form action="https://formspree.io/f/mdknwave" method="POST">
        <label>
            Your email:
            <input type="email" name="email">
        </label>
        <label>
            Your message:
            <textarea name="message"></textarea>
        </label>
                    <button type="submit">Send</button>
        </form>
            <div class="image-ocean">
                <img src="https://chlowus.github.io/Nodejs.pictures/contactform.jpeg" alt="#">
            </div>
        </div>
    </center>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.title h1{
    font-size: 3em;
     font-family: "DM Sans";
     color: #87CEEB;
     font-weight: 800;
     padding-top: 1vw;
    }

.contact-form{
     height: 80vh;
     width: 60vw;
     background-color: #87cfeb85;
     margin-bottom: 6vw;
     margin-top: 2vw;
}

.image-ocean img{
    height: 10vh;
}

</style>