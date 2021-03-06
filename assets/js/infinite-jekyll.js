$(function () {
  var postURLs,
    isFetchingPosts = false,
    shouldFetchPosts = true,
    postsToLoad = 12,
    loadNewPostsThreshold = 3000,
    windowHeight = $(window).height(),
    windowScrollPosition = $(window).scrollTop(),
    bottomScrollPosition = windowHeight + windowScrollPosition,
    documentHeight = $(document).height();

  // Load the JSON file containing all URLs
  $.getJSON('/all-posts.json', function (data) {
    postURLs = data['posts'];

    // If there aren't any more posts available to load than already visible, disable fetching
    if (postURLs.length <= postsToLoad) disableFetching();
  });

  // If there's no spinner, it's not a page where posts should be fetched
  if ($('.infinite-spinner').length < 1) shouldFetchPosts = false;

  // Are we close to the end of the page? If we are, load more posts

  $(window).load(function (e) {
    if ($(window).width() > 1024) {
      while (
        documentHeight - $('.list-posts').height() <
        bottomScrollPosition
      ) {
        fetchPosts();
      }
    }
  });

  $(window).scroll(function (e) {
    if (!shouldFetchPosts || isFetchingPosts) return;

    // If we've scrolled past the loadNewPostsThreshold, fetch posts
    if (documentHeight - loadNewPostsThreshold < bottomScrollPosition) {
      fetchPosts();
    }
  });

  // Fetch a chunk of posts
  function fetchPosts() {
    // Exit if postURLs haven't been loaded
    if (!postURLs) return;

    isFetchingPosts = true;

    // Load as many posts as there were present on the page when it loaded
    // After successfully loading a post, load the next one
    var loadedPosts = 0,
      postCount = $('.list-posts').children().length,
      callback = function () {
        loadedPosts++;
        var postIndex = postCount + loadedPosts;

        if (postIndex > postURLs.length - 1) {
          disableFetching();
          return;
        }

        if (loadedPosts < postsToLoad) {
          fetchPostWithIndex(postIndex, callback);
        } else {
          isFetchingPosts = false;
        }
      };

    fetchPostWithIndex(postCount + loadedPosts, callback);
  }

  function fetchPostWithIndex(index, callback) {
    var data = postURLs[index];
    const markup =
      "<li class='list-posts__item'><a href='" +
      data.url +
      "' class='list-posts__card' title='" +
      data.title +
      ' ' +
      data.artist +
      "'><img class='list-posts__card__image' src='" +
      data.image +
      "' alt='" +
      data.title +
      "'/></a></li>";

    $('.list-posts').append(markup);
    callback();
  }

  function disableFetching() {
    shouldFetchPosts = false;
    isFetchingPosts = false;
    $('.infinite-spinner').fadeOut();
  }
});
