const transformData = (images = []) =>
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
        link: images ? images.map(img => img.link)[0] : link,
        score,
        ups,
        downs,
        cover_width,
        cover_height
      };
    }
  );

export default transformData;