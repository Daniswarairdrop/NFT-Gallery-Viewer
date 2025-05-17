async function fetchNFTs(wallet) {
  const apiKey = "YOUR_ALCHEMY_API_KEY";
  const url = `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}/getNFTs?owner=${wallet}`;
  const res = await fetch(url);
  const data = await res.json();
  displayNFTs(data.ownedNfts);
}

function displayNFTs(nfts) {
  const container = document.getElementById("nft-container");
  nfts.forEach(nft => {
    const img = nft.media[0]?.gateway || 'assets/placeholder.png';
    const el = `<div class="card">
      <img src="${img}" alt="${nft.title}">
      <p>${nft.title}</p>
    </div>`;
    container.innerHTML += el;
  });
}
