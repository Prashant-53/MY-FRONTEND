
function toggleMenu() {
    const menu = document.querySelector(".Menu-Links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const error = document.getElementById('form-error');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    };
    try {
        const response = await fetch('https://my-backend-wq6l.onrender.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            status.style.display = 'block';
            error.style.display = 'none';
            form.reset();

            // Hide status after 5 seconds
            setTimeout(() => {
                status.style.display = 'none';
            }, 5000);
        } else {
            throw new Error('Failed to send');
        }
    } catch (err) {
        console.error('Client error:', err);
        status.style.display = 'none';
        error.style.display = 'block';
    }
});
