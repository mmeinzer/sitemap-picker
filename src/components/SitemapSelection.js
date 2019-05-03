import React, { useState, useEffect } from 'react';

const sitemapMetadata = {
  pages: [
    {
      id: 1,
      url: 'https://www.triplebarcoffee.com/post-sitemap.xml',
      pageCount: 9,
    },
    {
      id: 2,
      url: 'https://www.triplebarcoffee.com/page-sitemap.xml',
      pageCount: 40,
    },
    {
      id: 3,
      url: 'https://www.triplebarcoffee.com/category-sitemap.xml',
      pageCount: 3,
    },
    {
      id: 4,
      url: 'https://www.triplebarcoffee.com/post_tag-sitemap.xml',
      pageCount: 16,
    },
    {
      id: 5,
      url: 'https://www.triplebarcoffee.com/attachment-sitemap.xml',
      pageCount: 1028,
    },
  ],
};

function getPrice(pageCount) {
  const BASE_PRICE = 2900;
  const BASE_PAGE_COUNT = 50;
  const PER_PAGE_PRICE = 10;
  if (pageCount <= BASE_PAGE_COUNT) {
    return BASE_PRICE;
  }
  return BASE_PRICE + (pageCount - BASE_PAGE_COUNT) * PER_PAGE_PRICE;
}

function SitemapDetails() {
  const [sitemaps, setSitemaps] = useState([]);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    setSitemaps(
      sitemapMetadata.pages.map(page => ({ ...page, selected: false }))
    );
    setPrice(getPrice(0));
  }, []);

  function selectHandler(id) {
    const updatedSitemaps = sitemaps.map(page => {
      if (page.id === id) {
        return { ...page, selected: !page.selected };
      }
      return page;
    });
    setSitemaps(updatedSitemaps);
    setPrice(
      getPrice(
        updatedSitemaps.reduce(
          (totalPages, page) =>
            page.selected ? totalPages + page.pageCount : totalPages,
          0
        )
      )
    );
  }

  function selectAll() {
    setSitemaps(sitemaps =>
      sitemaps.map(sitemap => ({ ...sitemap, selected: true }))
    );
  }

  function clearAll() {
    setSitemaps(sitemaps =>
      sitemaps.map(sitemap => ({ ...sitemap, selected: false }))
    );
  }

  return (
    <section className="container mx-auto">
      <div className="details pb-4">
        <h2>Select the sitemaps you'd like us to scrape:</h2>
        <p>Total: ${price ? (price / 100).toFixed(2) : 'Loading..'}</p>
        <p>
          Page Count:{' '}
          {sitemaps.reduce(
            (totalPages, page) =>
              page.selected ? totalPages + page.pageCount : totalPages,
            0
          )}
        </p>
      </div>
      <div>
        <button onClick={selectAll}>Select All</button>
        <button onClick={clearAll}>Clear All</button>
      </div>
      <div className="sitemaps mx-auto max-w-xl">
        {sitemaps.map(details => (
          <SitemapDetails
            page={details}
            selectHandler={selectHandler}
            key={details.id}
          />
        ))}
      </div>
    </section>
  );
}

export default SitemapDetails;
