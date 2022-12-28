import * as React from "react"
import { ShareSocial } from 'react-share-social' 
import styled from "styled-components"

const CustomBox = styled.div`



`

const style = {
  root: {
    background: 'transparent',
    borderRadius: '12px',
    border: 0,
    color: 'inherit',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column'
  },
  copyContainer: {
    border: '1px solid',
    background: 'rgb(0,0,0,0.1)',
    color: 'inherit !important',
  },
  copyIcon: {
    color:'#fff',
    border:'1px solid red'
  },
  copyContainerbefore: {
    content: 'please share this link:',
    position: 'absolute',
    left: '0',
    top: '-24px',
},
 iconContainer: {
textAlign:'center !important',
border:'1px solid blue'
 },
 copyUrl: {
color:'#ff0000'
 },

};

const Foo = () => {
  
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
<CustomBox style={{}}>
{/* <h4 style={{textAlign:'center', fontSize:'130%', marginTop:'2rem'}}>Sharing IS Caring!</h4> */}
    <ShareSocial
    id="share"
    style={style}
    // style={{background:'transparent !important'}}
    url ={url}
    // title="Sharing IS Caring!"
    socialTypes={['facebook','twitter','reddit','linkedin']}>

      </ShareSocial>
    </CustomBox>


  );
};

export default Foo



