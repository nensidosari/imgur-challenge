import styled from "styled-components";

const Grid = styled.div`
display:grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 20px;

>div>div {
border:1px solid black;
}

>div >div>img {
width: 100%;}


`;

export {Grid};