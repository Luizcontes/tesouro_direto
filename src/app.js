async function getTesouroData() {

  try {
    const response = await fetch('https://www.tesourodireto.com.br/json/br/com/b3/tesourodireto/service/api/treasurybondsinfo.json',
      {
        method: 'GET',
        headers: {
          'Accept': '*/*',
          'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36'
        }
      }
    );
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

getTesouroData();