
    // Slider value display
    const importanceSlider = document.getElementById('importanceSlider');
    const sliderValue = document.getElementById('sliderValue');
    importanceSlider.oninput = function() {
        sliderValue.textContent = this.value + '%';
    };

    const paymentSlider = document.getElementById('paymentSlider');
    const paymentValue = document.getElementById('paymentValue');
    paymentSlider.oninput = function() {
        paymentValue.textContent = 'tsh' + this.value;
    };

    // Show thank you message and open email client on form submission
    document.getElementById('surveyForm').onsubmit = function(event) {
        event.preventDefault(); // Prevent actual form submission

        const form = event.target;

        // Construct the email body with form values
        const formData = new FormData(form);
        let emailBody = '';
        formData.forEach((value, key) => {
            emailBody += `${key}: ${value}\n`;
        });

        // Encode email body
        const encodedBody = encodeURIComponent(emailBody);
        // Create a mailto link
        const mailtoLink = `mailto:celestinekabonge@gmail.com?subject=Survey Results&body=${encodedBody}`;

        // Open the email client
        window.location.href = mailtoLink;

        // Show thank you message
        document.getElementById('thankYouMessage').style.display = 'block';
    };
