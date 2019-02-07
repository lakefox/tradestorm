function update() {
  getSheet("13OKP_hxz97LrO0bLyI_WiyL-JDHDkDZ5tP0vHAdpq5k").then((res) => {
    var html = "";
    for (var stock in res) {
      if (res.hasOwnProperty(stock)) {
        html += `
        <div class="box">
          <div class="head">
            ${res[stock].fullname} (${stock}) <span class="price">${res[stock].price}</span>
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
        </div>
        `
      }
    }
    document.querySelector(".center_col").innerHTML = html;
  });
}

update();
setInterval(update, 60000);
