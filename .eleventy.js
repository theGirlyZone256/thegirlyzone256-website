module.exports = function(eleventyConfig) {
  // Pass through assets
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy("public/_redirects");
  
  // Add number formatting filter
  eleventyConfig.addFilter("formatNumber", function(number) {
    return new Intl.NumberFormat().format(number);
  });

  // Add collection for all products
  eleventyConfig.addCollection("allProducts", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.data.pagination && item.data.pagination.data === "products");
  });

  // Add serverless support for search
  eleventyConfig.addFilter("where", function(array, key, value) {
    return array.filter(item => item[key] == value);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "../_data"
    },
    templateFormats: ["html", "md", "liquid", "njk"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    
    // This will fix the URL structure
    pathPrefix: "/"
  };
};