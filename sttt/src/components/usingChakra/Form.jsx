// import {
//   Input,
//   InputGroup,
//   Stack,
//   InputLeftElement,
//   InputRightElement,
//   Button,
//   RangeSlider,
//   RangeSliderTrack,
//   RangeSliderFilledTrack,
//   RangeSliderThumb
// } from "@chakra-ui/react";
// import { useState } from "react";

// export const Form = () => {
//   const [show, setShow] = useState(false);
//   const handleClick = () => setShow(!show);
//   return (
//     <>
//       <Stack spacing={4}>
//         <InputGroup>
//           <InputLeftElement pointerEvents="none" />
//           <Input type="tel" placeholder="Phone number" />
//         </InputGroup>

//         <InputGroup>
//           <InputLeftElement
//             pointerEvents="none"
//             color="gray.300"
//             fontSize="1.2em"
//             children="$"
//           />
//           <Input placeholder="Enter amount" />
//           <InputRightElement />
//         </InputGroup>
//         <InputGroup size="md">
//           <Input
//             pr="4.5rem"
//             type={show ? "text" : "password"}
//             placeholder="Enter password"
//           />
//           <InputRightElement width="10px">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </Stack>
//       <RangeSlider aria-labelledby={["min", "max"]} defaultValue={[10, 30]}>
//         <RangeSliderTrack>
//           <RangeSliderFilledTrack />
//         </RangeSliderTrack>
//         <RangeSliderThumb index={0} />
//         <RangeSliderThumb index={1} />
//       </RangeSlider>
//     </>
//   );
// };
