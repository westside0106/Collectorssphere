const copyButtons = document.querySelectorAll("[data-copy]");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const url = button.dataset.copy;
    if (!url) return;

    try {
      await navigator.clipboard.writeText(url);
      button.textContent = "Link kopiert";
      setTimeout(() => {
        button.textContent = "Link kopieren";
      }, 2000);
    } catch (error) {
      window.alert("Kopieren fehlgeschlagen. Bitte den Link manuell kopieren.");
    }
  });
});

const ctaButton = document.querySelector(".contact-card .primary");
if (ctaButton) {
  ctaButton.addEventListener("click", () => {
    window.location.href = "mailto:kontakt@lahnsche-wende.org";
  });
}
