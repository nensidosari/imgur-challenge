const filterImageData = (images = []) =>
  images.map(
    ({
      id,
      title,
      description,
      images,
      link,
      score,
      ups,
      downs,
      cover_width,
      cover_height
    }) => {
      return {
        id,
        title,
        description,
        images:
          images &&
          images.map(({ link, decription, title }) => ({
            link,
            decription,
            title
          })),
        link: images ? images.map(img => img.link)[0] : link,
        score,
        ups,
        downs,
        cover_width,
        cover_height
      };
    }
  );

export { filterImageData };
