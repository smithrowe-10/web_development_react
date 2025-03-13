// export default function TapButton({props}) {
//   return(
//     <li>
//       <button>{props.label}</button>
//     </li>
//   );
// }

// export default function TapButton({label}) {
//   return(
//     <li>
//       <button>{label}</button>
//     </li>
//   );
// }

export default function TabButton({children, onSelect}) {

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
