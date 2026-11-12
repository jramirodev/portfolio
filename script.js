lucide.createIcons();

const contactForm = document.getElementById('contactForm');
const formNotice = document.getElementById('formNotice');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('emailAddress').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    formNotice.textContent = 'Message prepared — opening email client...';
    formNotice.classList.remove('text-slate-500');
    formNotice.classList.add('text-blue-400');

    window.location.href = `mailto:jramiro.dev@gmail.com?subject=${subject}&body=${body}`;
  });
}