
import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import "./Navbar.css";
import NavbarTop from "./NavbarTop"
import SearchBar from "./SearchBar";
import { FaShoppingBag,FaUser } from "react-icons/fa";
import Menubar from "./Menubar";
import { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";

function Navbar() {
    const {bag}=useContext(CartContext)
   
   
    return (
        <Box className="navbar-sticky">
        <div className="main-nav">

          {/* mid navbar */}
           <nav className="mid-nav">
            <div className="logo">
            <h2>
            <span>G</span>row
            <span> G</span>lamorous
          </h2>

            </div>
            {/* search bar */}
            <div className="search">
                 <SearchBar/>

            </div>

            {/* bag and profile */}
            <div  className="bag-profile">

                <ul className = "bag-profile-desktop">
                    <li>
                       <Link to="/bag">
                        <span>
                        <i className="fas fa-cart-plus"></i>
                        </span>
                        
                        <span>{bag.length}</span>
                        </Link>
                       
                    </li>
                    <li>
                        <Link>
                        <FaUser   color="red"/></Link>
                    </li>
                </ul>
                
               
                
            </div>

           </nav>

           {/* //bottom navbar */}
           <nav className="bottom-nav">
           <ul>
            <li>
            <Link to="/">HOME</Link>
            </li>
            <li>
            <Link to="/makeup">MAKE UP</Link>
            </li>
            <li>
            <Link to="/haircare">HAIR CARE</Link>
            </li>

            <li>
            <Link to="/skincare">SKINCARE</Link>
            </li>
            <li>
            <Link to="/Sanitizing">SANITIZING CARE</Link>
            </li>
            <li>
            <Link to="/collection">COLLECTION</Link>
            </li>
            <li>
            <Link to="/reward">REWARD</Link>
            </li>

          </ul>
          {/* <Menubar/> */}
           </nav>

      
                
          

        </div>
        </Box>
        

    )
}

export default Navbar


//                 //
//                 // <Link to="/makeup">MAKEUP</Link>
//                 // <Link to="/haircare">HAIR CARE</Link>
//                 // <Link to="/skincare">SKINCARE</Link>
//                 // <Link to="/Sanitizing">SANITIZING CARE</Link>
//                 // <Link to="/collection">COLLECTION</Link>
//                 // <Link to="/reward">REWARD</Link>
// import {
//     Box,
//     Flex,
//     Text,
//     IconButton,
//     Button,
//     Stack,
//     Collapse,
//     Icon,
//     Link,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     useColorModeValue,
//     useBreakpointValue,
//     useDisclosure,
//   } from '@chakra-ui/react';
//   import {
//     HamburgerIcon,
//     CloseIcon,
//     ChevronDownIcon,
//     ChevronRightIcon,
//   } from '@chakra-ui/icons';
  
//   export default function WithSubnavigation() {
//     const { isOpen, onToggle } = useDisclosure();
  
//     return (
//       <Box>
//         <Flex
//           bg={useColorModeValue('white', 'gray.800')}
//           color={useColorModeValue('gray.600', 'white')}
//           minH={'60px'}
//           py={{ base: 2 }}
//           px={{ base: 4 }}
//           borderBottom={1}
//           borderStyle={'solid'}
//           borderColor={useColorModeValue('gray.200', 'gray.900')}
//           align={'center'}>
//           <Flex
//             flex={{ base: 1, md: 'auto' }}
//             ml={{ base: -2 }}
//             display={{ base: 'flex', md: 'none' }}>
//             <IconButton
//               onClick={onToggle}
//               icon={
//                 isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//               }
//               variant={'ghost'}
//               aria-label={'Toggle Navigation'}
//             />
//           </Flex>
//           <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
//             <Text
//               textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
//               fontFamily={'heading'}
//               color={useColorModeValue('gray.800', 'white')}>
//               Logo
//             </Text>
  
//             <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
//               <DesktopNav />
//             </Flex>
//           </Flex>
  
//           <Stack
//             flex={{ base: 1, md: 0 }}
//             justify={'flex-end'}
//             direction={'row'}
//             spacing={6}>
//             <Button
//               as={'a'}
//               fontSize={'sm'}
//               fontWeight={400}
//               variant={'link'}
//               href={'#'}>
//               Sign In
//             </Button>
//             <Button
//               as={'a'}
//               display={{ base: 'none', md: 'inline-flex' }}
//               fontSize={'sm'}
//               fontWeight={600}
//               color={'white'}
//               bg={'pink.400'}
//               href={'#'}
//               _hover={{
//                 bg: 'pink.300',
//               }}>
//               Sign Up
//             </Button>
//           </Stack>
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity>
//           <MobileNav />
//         </Collapse>
//       </Box>
//     );
//   }
  
//   const DesktopNav = () => {
//     const linkColor = useColorModeValue('gray.600', 'gray.200');
//     const linkHoverColor = useColorModeValue('gray.800', 'white');
//     const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
//     return (
//       <Stack direction={'row'} spacing={4}>
//         {NAV_ITEMS.map((navItem) => (
//           <Box key={navItem.label}>
//             <Popover trigger={'hover'} placement={'bottom-start'}>
//               <PopoverTrigger>
//                 <Link
//                   p={2}
//                   href={navItem.href ?? '#'}
//                   fontSize={'sm'}
//                   fontWeight={500}
//                   color={linkColor}
//                   _hover={{
//                     textDecoration: 'none',
//                     color: linkHoverColor,
//                   }}>
//                   {navItem.label}
//                 </Link>
//               </PopoverTrigger>
  
//               {navItem.children && (
//                 <PopoverContent
//                   border={0}
//                   boxShadow={'xl'}
//                   bg={popoverContentBgColor}
//                   p={4}
//                   rounded={'xl'}
//                   minW={'sm'}>
//                   <Stack>
//                     {navItem.children.map((child) => (
//                       <DesktopSubNav key={child.label} {...child} />
//                     ))}
//                   </Stack>
//                 </PopoverContent>
//               )}
//             </Popover>
//           </Box>
//         ))}
//       </Stack>
//     );
//   };
  
//   const DesktopSubNav = ({ label, href, subLabel }) => {
//     return (
//       <Link
//         href={href}
//         role={'group'}
//         display={'block'}
//         p={2}
//         rounded={'md'}
//         _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//         <Stack direction={'row'} align={'center'}>
//           <Box>
//             <Text
//               transition={'all .3s ease'}
//               _groupHover={{ color: 'pink.400' }}
//               fontWeight={500}>
//               {label}
//             </Text>
//             <Text fontSize={'sm'}>{subLabel}</Text>
//           </Box>
//           <Flex
//             transition={'all .3s ease'}
//             transform={'translateX(-10px)'}
//             opacity={0}
//             _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//             justify={'flex-end'}
//             align={'center'}
//             flex={1}>
//             <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//           </Flex>
//         </Stack>
//       </Link>
//     );
//   };
  
//   const MobileNav = () => {
//     return (
//       <Stack
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         display={{ md: 'none' }}>
//         {NAV_ITEMS.map((navItem) => (
//           <MobileNavItem key={navItem.label} {...navItem} />
//         ))}
//       </Stack>
//     );
//   };
  
//   const MobileNavItem = ({ label, children, href }) => {
//     const { isOpen, onToggle } = useDisclosure();
  
//     return (
//       <Stack spacing={4} onClick={children && onToggle}>
//         <Flex
//           py={2}
//           as={Link}
//           href={href ?? '#'}
//           justify={'space-between'}
//           align={'center'}
//           _hover={{
//             textDecoration: 'none',
//           }}>
//           <Text
//             fontWeight={600}
//             color={useColorModeValue('gray.600', 'gray.200')}>
//             {label}
//           </Text>
//           {children && (
//             <Icon
//               as={ChevronDownIcon}
//               transition={'all .25s ease-in-out'}
//               transform={isOpen ? 'rotate(180deg)' : ''}
//               w={6}
//               h={6}
//             />
//           )}
//         </Flex>
  
//         <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//           <Stack
//             mt={2}
//             pl={4}
//             borderLeft={1}
//             borderStyle={'solid'}
//             borderColor={useColorModeValue('gray.200', 'gray.700')}
//             align={'start'}>
//             {children &&
//               children.map((child) => (
//                 <Link key={child.label} py={2} href={child.href}>
//                   {child.label}
//                 </Link>
//               ))}
//           </Stack>
//         </Collapse>
//       </Stack>
//     );
//   };
  
  
  
//   const NAV_ITEMS= [
//     {
//         label: 'HOME',
//         href:"/"
//       },

//     {
//       label: 'MAKEUP',
//       href:"./makeup",
//       children: [
//         {
//           label: 'lipstick',
//           href: './lipstick',
//         },
//         {
//           label: 'Crayon lipstick',
        
//         },
//         {
//             label: 'Matte lipstick',
//             href: '#',
//         },
          
//       ],
//     },
//     {
//       label: 'HAIR CARE',
//       href:"./haircare",
//       children: [
//         {
//           label: 'Job Board',
//           subLabel: 'Find your dream design job',
//           href: '#',
//         },
//         {
//           label: 'Freelance Projects',
//           subLabel: 'An exclusive list for contract work',
//           href: '#',
//         },
//       ],
//     },
//     {
//       label: 'SKIN CARE',
//       href: './skincare',
//     },
//     {
//       label: 'SANITIZING CARE',
//       href: '#',
//     },
//     {
//         label: 'COLLLECTION',
//         href: '#',
//       },
//       {
//         label: 'REWARDS',
//         href: '#',
//       },
//       {
//         label: 'OUR STUDIO',
//         href: '#',
//       },
//       {
//         label: 'OFFERS',
//         href: '#',
//       },
//   ];