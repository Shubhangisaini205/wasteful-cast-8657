
import { Box, Button, Center, Img, SimpleGrid, Text, VStack, Select, Spinner, Heading } from "@chakra-ui/react";
import React, { useReducer } from "react"
import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import axios from "axios";
import ProductCard from "../Component/ProductCard";


const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const reducer = (state, action) => {

    switch (action.type) {
        case "REQUEST": {
            return {
                ...state,
                isLoading: true,
                error: false
            }
        }
        case "SUCCESS": {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false,
            }
        }
        case "FAILURE": {
            return {
                ...state,
                data: [],
                isLoading: false,
                error: true,

            }
        }
    }

};
function HairCare() {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [searchParams, setSearchParams] = useSearchParams();
    const [order, setOrder] = useState("asc")
    const [filter, setFilter] = useState("")

    let sort = "offerPrice"

    // let apiUrl;

    // (order && filter) ?
    //     apiUrl = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/skincare?_sort=${sort}&_order=${order}&breed=${filter}` :
    //     apiUrl = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/skincare?_sort=${sort}&_order=${order}`


        

const GetShampoo=()=>{
    dispatch({type:"REQUEST"})
  axios.get(`http://localhost:8080/shampoo`).then((res)=>{
   console.log(res.data)
   dispatch({type:"SUCCESS",payload:res.data})
    
  }).catch((err)=>{
   dispatch({type:"FAILURE",payload:err})
  })
}
// const GetSunsScreen=()=>{
//     dispatch({type:"REQUEST"})
//   axios.get(`http://localhost:8080/sunscreen`).then((res)=>{
//    console.log(res.data)
//    dispatch({type:"SUCCESS",payload:res.data})
    
//   }).catch((err)=>{
//    dispatch({type:"FAILURE",payload:err})
//   })
// }
// const GetEyeliner=()=>{
//     dispatch({type:"REQUEST"})
//   axios.get(`http://localhost:8080/eyeliner`).then((res)=>{
//    console.log(res.data)
//    dispatch({type:"SUCCESS",payload:res.data})
    
//   }).catch((err)=>{
//    dispatch({type:"FAILURE",payload:err})
//   })
// }

useEffect(()=>{
GetShampoo()
 let paramObj = {order}
 setSearchParams(paramObj)
},[order])
 


    return (
      <>
        <Box mb={10}
        p={4}
        boxShadow= " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
       >
          <Text>
          HOME/HAIRCARE
          </Text>
          </Box>
        <Box>
        <Heading 
        className="ProductPageHeading"
      
        >HAIRCARE</Heading>
        </Box>
       
       <SimpleGrid
        className="main_container"
        w="85%"
        m={'auto'}
        mt={10}
         columns={{sm:2,md:2,lg:3,base:1}} 
         spacing={10}>
      {state.data.map((el)=> <ProductCard key = {el.id} {...el}/>)}
      </SimpleGrid>
   
      </>
//         <Box>
//             <Heading>Heloo react</Heading>
//             <div className="sortingButtons">
//         <Button colorScheme={"green"}
//         isDisabled={order=="asc"}
//         className="sortByofferPricetAsc"
//         // onClick={()=>setOrder("asc")}
//         >
//           Sort by Asc
//         </Button>
//         <Button colorScheme={"red"} className="sortByofferPriceDesc" m={2}
//         // onClick = {()=>setOrder("desc")}
//         >
//           Sort by desc
//         </Button>
//       </div>
     

     
//       {state.isLoading? <Spinner />:
//         <SimpleGrid className="main_container" columns={4} spacing={10}>
//           {state.data.map((el)=>(
//         <Box className="ProductDetails"
//          key={el.id}
//          >
//           <Center>
//             <Img src={el.img} w={400} h={200} />
//           </Center>

//           <VStack spacing={2} p={2}>
//             <Text className="name" fontSize={"20px"} fontWeight="bold"> {el.name}</Text>

//             <Text className="description">{el.description}</Text>
//             <Text className="offerPrice">
//                  OFFER PRICE :
//             {el.offerPrice}
//             </Text>
//             {/* <Text className="actualPrice">ACTUAL PRICE :{el.actualPrice}</Text> */}
        
          
//             <Button className="AddToCart" bg={"green"}
//              >Add to Cart</Button>
//           </VStack>
//         </Box>
      
//       ))}
//       </SimpleGrid>
// }
//         </Box>
    )
}
export default HairCare