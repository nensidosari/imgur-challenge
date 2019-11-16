const transformData = (images=[]) => images.map(({id, title, description,link,score,ups,downs, cover_width, cover_height}) => ({
  id, title, description,link,score,ups,downs, cover_width, cover_height
}));

export default transformData;