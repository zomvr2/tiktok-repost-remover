async function removeReposts() {
  try {
    const click = (selector) => document.querySelector(selector)?.click();

    click('[data-e2e="repost-tab"]');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    let hasReposts = true;
    while (hasReposts) {
      click('[data-e2e="video-share-repost"]');
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const nextButton = document.querySelector('[data-e2e="arrow-right"]');
      if (nextButton) {
        nextButton.click();
      } else {
        console.log('No next video button found. Stopping.');
        hasReposts = false;
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  } catch (error) {
    console.error('Error during TikTok repost removal:', error);
  }
}

removeReposts();
