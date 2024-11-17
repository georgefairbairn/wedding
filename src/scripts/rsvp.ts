document.addEventListener('DOMContentLoaded', () => {
  const comingRadios = document.querySelectorAll(
    'input[name="coming"]'
  ) as NodeListOf<HTMLInputElement>;
  const additionalFields = document.getElementById(
    'additionalFields'
  ) as HTMLInputElement;

  comingRadios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      const eventTarget = event.target as HTMLInputElement;
      if (eventTarget?.value === 'No') {
        additionalFields.style.display = 'none';
      } else {
        additionalFields.style.display = 'block';
      }
    });
  });

  // Initial check for pre-selected values
  const selectedComing = document.querySelector(
    'input[name="coming"]:checked'
  ) as HTMLInputElement;
  if (selectedComing && selectedComing.value === 'No') {
    additionalFields.style.display = 'none';
  }

  const form = document.getElementById('rsvp') as HTMLFormElement;
  const button = document.getElementById('submitButton') as HTMLButtonElement;
  const buttonText = document.getElementById('buttonText') as HTMLSpanElement;
  const spinner = document.getElementById('spinner') as HTMLElement;

  form.addEventListener('submit', () => {
    // Show the loading state
    button.disabled = true;
    buttonText.classList.add('hidden');
    spinner.classList.remove('hidden');
  });
});
