function getSheet(id) {
  let url = `https://spreadsheets.google.com/feeds/list/${id}/1/public/basic?alt=json`;
  return new Promise(function(resolve, reject) {
    fetch(url).then((r) => {
      return r.json();
    }).then((res) => {
      let entrys = res.feed.entry;
      let stocks = {};
      for (var a = 0; a < entrys.length; a++) {
        let content = entrys[a].content.$t;
        let obj = content.split(",");
        let store = {};
        for (var b = 0; b < obj.length; b++) {
          let ok = obj[b].split(":");
          let name = ok[0].trim();
          ok.shift();
          store[name] = ok.join(":").trim();
        }
        stocks[entrys[a].title.$t] = store
      }
      resolve(stocks);
    });
  });
}
