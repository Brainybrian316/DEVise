import { createGlobalStyle } from "styled-components";
import background from "../../assets/images/background2.png"

export const GlobalStyles = createGlobalStyle`
html,body{
box-sizing:border-box;
margin:0;
padding:0;
position:relative;
// background: white;
background:url(${background});
background-size: 100%;
// font-family: 'Nunito', sans-serif;


}
`
