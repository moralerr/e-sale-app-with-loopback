module.exports = function(app) {
  app.dataSources.esaleDS.automigrate('product', function(err) {
    if (err) throw err;

    app.models.product.create([{
      name: 'MJ Jersey',
      detail_page_url: 'www.detail_page_url.com',
      price: 20,
      thumbnail_url: "www.thumbnail_url.com"
    }, {
      name: 'Book',
      detail_page_url: 'www.test2-detail.com',
      price: 10,
      thumbnail_url: 'www.test2.com'
    }, {
      name: 'Glove',
      detail_page_url: 'www.test3-detail.com',
      price: 15,
      thumbnail_url: 'www.test3-thumb.com'
  }, ], function(err, product) {
      if (err) throw err;

      console.log('Models created: \n', product);
    });
  });
};
