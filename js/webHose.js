function webHose(query) {
  let url = `http://webhose.io/filterWebContent?token=d6f97c5e-0ace-402f-89ad-d3f85eb021b5&format=json&ts=1548980070683&sort=relevancy&q=${encodeURIComponent(query)}%20language%3Aenglish`;
  return new Promise(function(resolve, reject) {
    fetch(url).then((r) => {
      return r.json();
    }).then((res) => {
      resolve(res.posts);
    });
  });
}
