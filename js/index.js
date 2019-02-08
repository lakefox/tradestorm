function update() {
  getSheet("13OKP_hxz97LrO0bLyI_WiyL-JDHDkDZ5tP0vHAdpq5k").then((res) => {
    console.log(res);
    var html = "";
    for (var stock in res) {
      if (res.hasOwnProperty(stock)) {
        html += `
        <div class="box">
          <div class="head">
            <div class="head_name">${res[stock].fullname} (${stock})</div><div class="price">${res[stock].price}</div>
          </div>
          <div class="your_info">
            Shares: ${res[stock].totalshares}<br>Profit: ${res[stock].profit}
          </div>
          <div class="content">
            <div class="col">
              <div class="col_head">
                Buy Price
              </div>
              <div class="buy_price">
                ${res[stock].buyprice}
              </div>
              <div class="choice">
                ${res[stock].buy}
              </div>
            </div>
            <div class="col">
              <div class="col_head">
                Sell Price
              </div>
              <div class="buy_price">
                ${res[stock].targetsellprice}
              </div>
              <div class="choice">
                ${res[stock].sell}
              </div>
            </div>
          </div>
          <div id="${stock}" class="closed bx bxs-news" onclick="loadNews('${res[stock].fullname} (${stock})')">
          </div>
        </div>
        `
      }
    }
    document.querySelector(".center_col").innerHTML = html;
  });
}

update();
setInterval(update, 60000);

function loadNews(stock) {
  document.querySelector("#stock_news").style.display = "block";
  document.querySelector("#news_feed").innerHTML = "";
  webHose(stock).then((posts) => {
    var html = "";
    for (var i =0; i < posts.length; i++) {
      let post = posts[i];
      if (post.title.trim() != "") {
        html += `
        <div class="post">
          <a class="post_title" target="_blank" href="${post.url}">
          ${post.title}
          </a>
          <div class="post_cont">
            <div class="post_preview">
              ${post.text.slice(0,200)}...
            </div>
            <div class="post_meta">
            ${post.author?post.author + " - ":""}
            ${moment(post.published).format('MMMM Do YYYY, h:mm:ss a')}
            </div>
          </div>
        </div>
        `;
      }
    }
    document.querySelector("#news_feed").innerHTML = html;
  });
}

function exit() {
  document.querySelector("#stock_news").style.display = "none";
}
