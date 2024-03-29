import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { getData } from './redux/action';
import { useEffect } from 'react';
import Homes from './components/Homes';
import { Box, Flex } from '@chakra-ui/react';
import SlideBar from './components/SlideBar';

function App() {
  const dispatch=useDispatch();
  const data=useSelector((pre)=>pre.reducer.dataValue); 
  console.log(data)
 useEffect(()=>{
   dispatch(getData());
 },[])
  return (
    <Flex className="App">
     <Box width={'249px'} className='sideBarBox'>
     <SlideBar/>
     </Box>
   <Box  className='widt1'>
    <Homes/>
   </Box>
    </Flex>
  );
}

export default App;
