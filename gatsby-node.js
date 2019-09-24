exports.sourceNodes = async({ actions, createNodeId, createContentDigest }) => {
  const axios = require('axios');
  const crypto = require('crypto');
  //const api =  `https://kt37s48t0d.execute-api.us-east-1.amazonaws.com/dev/catalogue`
  const api =  `https://iwf9mauhed.execute-api.us-east-1.amazonaws.com/prod/catalogue`
  const { createNode } = actions;
  try {
    let result = await axios.get(api)
    result.data.forEach(content => {
      const bookNode =  {
        id: content.address,
        parent: null,
        children: [],
        internal: {
          type: `Book`,
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(content))
            .digest(`hex`),
        },
        address: content.address,
        bookFile: content.bookFile,
        categories: content.categories,
        coverImage: content.coverImage,
        contributors: content.contributors,
        description: content.description,
        isbn: content.isbn ? content.isbn : "",
        language: content.language,
        pageCount: content.pageCount,
        price: content.price,
        publishedDate: content.publishedDate,
        publisher: content.publisher,
        seriesLength: content.seriesLength ? content.seriesLength : "",
        seriesSequence: content.seriesSequence ? content.seriesSequence : "",
        seriesTitle: content.seriesTitle ? content.seriesTitle : "",
        subtitle: content.subtitle ? content.subtitle : "",
        title: content.title,
      }
      createNode(bookNode);
    });
    return;
  } catch (e) {
    console.log(e)
  }
}