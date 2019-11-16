import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getImages} from "./store/actions/actionCreators";
import transformData from "./transformData";
import {Grid} from "./styles";

const App = ({images, actions}) =>{

  useEffect(()=> actions.getImages(),[]);
  return (
    <Grid>
      <div> {images.map(image => <div key={image.id}><img src={image.link} alt={image.title}/><div>{image.description}</div></div>)}</div>
    </Grid>
  );
};

 const mapStateToProps = ({images}) => ({
images:transformData(images)
});


 const mapDispatchToProps = dispatch => ({
   actions: {
     getImages:()=>dispatch(getImages({section:"hot", sort:"viral", window:"day"}, {}))
   }

 });


export default connect(mapStateToProps,mapDispatchToProps)(App);
