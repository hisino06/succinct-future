function predictFuture() {
  const username = document.getElementById('username').value.trim();
  const resultDiv = document.getElementById('result');
  console.log('predictFuture called, username:', username, 'resultDiv:', resultDiv);

  if (!username) {
    resultDiv.innerHTML = 'Please enter a valid X username!';
    console.log('No username entered');
    return;
  }

  // Mock logic: use username length and a random factor
  const lengthScore = username.length;
  const alignmentScore = Math.random(); // Simulate alignment check
  let outcome;

  if (lengthScore > 8 && alignmentScore > 0.3) {
    const goodOutcomes = [
      `🎉 ${username}, your testnet grinding paid off! You’re a top $PROVE staker in the Succinct Prover Network!`,
      `😎 ${username}, your alignment with Succinct’s ZK mission lands you a role building SP1-powered dApps!`,
      `🚀 As a Succinct testnet OG, ${username}, you score a massive $PROVE airdrop and become a ZK thought leader!`,
      `🌟 ${username}, your contributions to Succinct’s Stage 2.5 testnet earn you VIP status in the Prover Network!`,
      `🔒 Thanks to your ZK passion, ${username}, you’re bridging Ethereum and Bitcoin with Succinct’s ZK-IBC!`
    ];
    outcome = goodOutcomes[Math.floor(Math.random() * goodOutcomes.length)];
  } else {
    const badOutcomes = [
      `😢 ${username}, too much X posting, not enough proving! You missed the Succinct airdrop.`,
      `😭 ${username}, your X clout-chasing didn’t impress. You’re stuck refreshing X for TGE updates.`,
      `🤔 ${username}, your X engagement was loud but shallow. Bots outshine you in the Succinct Discord.`,
    ];
    outcome = badOutcomes[Math.floor(Math.random() * badOutcomes.length)];
  }

  resultDiv.innerHTML = outcome;
  console.log('Outcome set to:', outcome);
}

function shareOnX() {
  const result = document.getElementById('result').innerText;
  if (!result) {
    alert('Please generate a prediction first!');
    return;
  }
  const tweet = encodeURIComponent(`${result} Check your Succinct TGE future at ${window.location.href}! #SuccinctLabs`);
  window.open(`https://x.com/intent/tweet?text=${tweet}`, '_blank');
}
