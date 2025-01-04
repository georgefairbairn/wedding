const initializeRsvp = () => {
  const comingRadios = document.querySelectorAll(
    'input[name="coming"]'
  ) as NodeListOf<HTMLInputElement>;
  const additionalFields = document.getElementById(
    'additionalFields'
  ) as HTMLElement | null;

  if (comingRadios && additionalFields) {
    comingRadios.forEach((radio) => {
      radio.addEventListener('change', (event) => {
        const eventTarget = event.target as HTMLInputElement;
        additionalFields.style.display =
          eventTarget.value === 'No' ? 'none' : 'block';
      });
    });

    // Initial visibility check for pre-selected values
    const selectedComing = document.querySelector(
      'input[name="coming"]:checked'
    ) as HTMLInputElement;
    if (selectedComing?.value === 'No') {
      additionalFields.style.display = 'none';
    } else {
      additionalFields.style.display = 'block';
    }
  }

  const form = document.getElementById('rsvp') as HTMLFormElement | null;
  const button = document.getElementById(
    'submitButton'
  ) as HTMLButtonElement | null;
  const buttonText = document.getElementById(
    'buttonText'
  ) as HTMLElement | null;
  const spinner = document.getElementById('spinner') as HTMLElement | null;

  if (form && button && buttonText && spinner) {
    form.addEventListener('submit', () => {
      button.disabled = true;
      buttonText?.classList.add('hidden');
      spinner?.classList.remove('hidden');
    });
  }
};

// Run on both initial page load and after client-side navigation
document.addEventListener('astro:after-swap', initializeRsvp);
document.addEventListener('DOMContentLoaded', initializeRsvp);
