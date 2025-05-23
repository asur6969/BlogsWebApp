// // hooks/useSetInfo.ts
// import { useEffect } from "react";
// import { useAppDispatch } from "../hooks/useAppDispatch";
// import { setInfo } from "../slices/infoSlice/infoSlice";

// export const useSetInfo = (value: string | null) => {
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (value !== null) {
//         dispatch(setInfo(value));
//       }
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [value, dispatch]);
// };
