(function () {
  var FEED_URL = 'https://afonsof.substack.com/feed';
  var API_URL = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(FEED_URL);
  var lang = document.documentElement.lang || 'en';
  var badgeLabel = 'Substack';

  function formatDate(dateStr) {
    var d = new Date(dateStr);
    var day = ('0' + d.getDate()).slice(-2);
    var month = ('0' + (d.getMonth() + 1)).slice(-2);
    var year = String(d.getFullYear()).slice(-2);
    return day + '/' + month + '/' + year;
  }

  function isoDate(dateStr) {
    return new Date(dateStr).toISOString().slice(0, 10);
  }

  function injectRecentArticles(items) {
    var list = document.querySelector('#recent-articles .article-list');
    if (!list) return;

    items.forEach(function (item) {
      var li = document.createElement('li');
      li.className = 'article-item';
      li.setAttribute('data-date', isoDate(item.pubDate));
      li.innerHTML =
        '<a href="' + item.link + '" rel="bookmark" target="_blank">' +
          '<div>' + item.title + ' <span class="badge badge-substack">' + badgeLabel + '</span></div>' +
          '<div>' + formatDate(item.pubDate) + '</div>' +
        '</a>';
      list.appendChild(li);
    });

    var allItems = Array.prototype.slice.call(list.querySelectorAll('li.article-item'));
    allItems.sort(function (a, b) {
      return b.getAttribute('data-date').localeCompare(a.getAttribute('data-date'));
    });
    allItems.forEach(function (li) { list.appendChild(li); });

    // Keep only first 6
    allItems.slice(6).forEach(function (li) { li.style.display = 'none'; });
  }

  function injectBlog(items) {
    var section = document.querySelector('#blog.internal-list');
    if (!section) return;

    items.forEach(function (item) {
      var a = document.createElement('a');
      a.href = item.link;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'feed-article';
      a.setAttribute('data-date', isoDate(item.pubDate));

      var imageHtml = item.thumbnail
        ? '<div><figure class="image" style="background-image: url(\'' + item.thumbnail + '\');"></figure></div>'
        : '';

      a.innerHTML =
        '<section class="content">' +
          '<header class="eyebrow">' +
            '<time datetime="' + isoDate(item.pubDate) + '">' + formatDate(item.pubDate) + '</time>' +
            '<span class="badge badge-substack">' + badgeLabel + '</span>' +
          '</header>' +
          '<h3 class="title">' + item.title + '</h3>' +
        '</section>' +
        imageHtml;

      section.appendChild(a);
    });

    var allArticles = Array.prototype.slice.call(section.querySelectorAll('a.feed-article'));
    allArticles.sort(function (a, b) {
      return b.getAttribute('data-date').localeCompare(a.getAttribute('data-date'));
    });
    allArticles.forEach(function (a) { section.appendChild(a); });
  }

  fetch(API_URL)
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (data.status !== 'ok') return;
      var items = data.items || [];
      injectRecentArticles(items);
      injectBlog(items);
    })
    .catch(function () {});
})();
