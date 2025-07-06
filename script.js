function predictFuture() {
  const username = document.getElementById('username').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');
  console.log('predictFuture called, username:', username, 'resultDiv:', resultDiv);

  if (!username) {
    resultDiv.innerHTML = 'Please enter a valid X username!';
    console.log('No username entered');
    return;
  }

  // Special outcomes for notable users
  const specialUsers = {
    'x nair_advaith': `🌟 ${username}, OG of the Succinct Prover Network! Your testnet legacy inspires all!`,
    '0xcrashout': `🔥 ${username}, OG trailblazer! Your dev skills power Succinct’s ZK revolution!`,
    'pumatheuma': `👑 ${username}, CEO/Founder of Succinct Labs! Your vision shapes the future of zero-knowledge tech!`
  };

  if (specialUsers[username]) {
    resultDiv.innerHTML = specialUsers[username];
    console.log('Special outcome for:', username);
    return;
  }

  // Mock logic for other users
  const lengthScore = username.length;
  const alignmentScore = Math.random(); // Simulate alignment check
  let outcome;

  if (lengthScore > 8 && alignmentScore > 0.3) {
    const goodOutcomes = [
      `🎉 ${username}, your testnet grinding paid off! You’re a top $PROVE staker in the Succinct Prover Network!`,
      `😎 ${username}, your alignment with Succinct’s ZK mission lands you a role building SP1-powered dApps!`,
      `🚀 As a Succinct testnet OG, ${username}, you score a massive $PROVE airdrop and become a ZK thought leader!`,
      `🌟 ${username}, your contributions to Succinct’s Stage 2.5 testnet earn you VIP status in the Prover Network!`,
      `🔒 Thanks to your ZK passion, ${username}, you’re bridging Ethereum and Bitcoin with Succinct’s ZK-IBC!`,
      `💡 ${username}, your innovative proofs secure a spot as a Succinct ZK ambassador!`,
      `🏆 ${username}, your dedication to Succinct’s testnets earns you a golden $PROVE multiplier!`,
      `🌐 ${username}, your ZK expertise propels you to lead Succinct’s global Prover Network expansion!`,
      `🎯 ${username}, your precision in ZK proofs earns you a seat on Succinct’s advisory council!`,
      `🌍 ${username}, your global impact with Succinct’s ZK tech lands you a keynote at a ZK conference!`,
      `⚡ ${username}, your lightning-fast proofs make you a Succinct Prover Network legend!`,
      `🌱 ${username}, your early support grows into a thriving ZK career with Succinct!`,
      `📈 ${username}, your testnet stats skyrocket you to $PROVE elite status!`
    ];
    outcome = goodOutcomes[Math.floor(Math.random() * goodOutcomes.length)];
  } else {
    const badOutcomes = [
      `😢 ${username}, too much X posting, not enough proving! You missed the Succinct airdrop.`,
      `😭 ${username}, your X clout-chasing didn’t impress. You’re stuck refreshing X for TGE updates.`,
      `🤔 ${username}, your X engagement was loud but shallow. Bots outshine you in the Succinct Discord.`,
      `💤 ${username}, your inactivity on the testnet leaves you off the $PROVE leaderboard!`,
      `😞 ${username}, your ZK skills need work—better join Succinct’s next testnet!`,
      `🚫 ${username}, your late start missed the Succinct TGE wave—time to catch up!`,
      `😕 ${username}, your proofs were rejected. Back to the drawing board with SP1!`,
      `🤦 ${username}, your testnet efforts were sloppy—Succinct’s bots flagged your work!`,
      `😣 ${username}, your X distractions cost you a spot in the Prover Network!`,
      `🙅 ${username}, your ZK learning curve is steep—start with Succinct’s tutorials!`,
      `😟 ${username}, your proofs lacked gas efficiency—Succinct’s network moved on without you!`,
      `🤨 ${username}, your testnet participation was minimal—time to step up!`
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
