import React from "react";

function SitemapDetails({ page, selectHandler }) {
  const classes = [
    "sitemap",
    "py-4",
    "pl-2",
    "border-t",
    "border-solid",
    "border-grey"
  ];
  if (page.selected) {
    classes.push("bg-green");
  }
  return (
    <div className={classes.join(" ")} onClick={() => selectHandler(page.id)}>
      <a href={page.url}>{page.url}</a>
      <p>Pages: {page.pageCount}</p>
    </div>
  );
}

export default SitemapDetails;
