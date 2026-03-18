// import React, { useEffect, useRef } from "react";
// import ReactDOM from "react-dom";
// import { getFocusableElements, nextFocus, usePortal } from "./utils";

// const Frame: React.FC<{
//   closeOnClickOutside?: boolean;
//   closeOnEsc?: boolean;
//   onClose: () => void;
//   open?: boolean;
// }> = ({
//   children,
//   closeOnClickOutside = true,
//   closeOnEsc = true,
//   onClose,
//   open = true,
// }) => {
//   const portal = usePortal();
//   const previousFocus = useRef<HTMLElement | null>(null);

//   // close on click outside
//   const container = useRef<HTMLDivElement>(null);
//   const onOverlayClick = (e: React.MouseEvent) => {
//     if (!container.current?.contains(e.target as Node)) onClose();
//   };

//   // close on esc
//   useEffect(() => {
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (!open) return;

//       switch (e.key) {
//         case "Escape": {
//           if (closeOnEsc) onClose();
//           break;
//         }
//         case "Tab": {
//           e.preventDefault();
//           nextFocus(getFocusableElements(container.current), !e.shiftKey);
//           break;
//         }
//       }
//     };

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [closeOnEsc, onClose, open]);

//   useEffect(() => {
//     // aria-hidden
//     document
//       .getElementById("root")
//       ?.setAttribute("aria-hidden", open.toString());
//     portal.current?.setAttribute("aria-hidden", (!open).toString());

//     if (open) {
//       previousFocus.current = (document.activeElement as HTMLElement) ?? null;
//       nextFocus(getFocusableElements(container.current));
//     } else {
//       previousFocus.current?.focus?.();
//       previousFocus.current = null;
//     }
//   }, [open, portal]); // note: when importing, eslint doesn't recognise that portal is a ref, so it doesn't need to be in the deps array

//   return ReactDOM.createPortal(
//     // transparent overlay: `inset-0` to stretch over the entire screen (combines`top-0`, `right-0`, `bottom-0`, and `left-0`)
//     <div
//       className={`fixed inset-0 z-10 p-8 text-white bg-gray-600/90
//         ${open ? "visible" : "invisible"}`}
//       onClick={closeOnClickOutside ? onOverlayClick : undefined}
//     >
//       {/* container: `max-w-sm` to make it reasonably narrow, `mx-auto` to center horizontally */}
//       <div className="relative w-full max-w-sm mx-auto mt-8" ref={container}>
//         {/* contents */}
//         <div className="overflow-hidden bg-gray-800 rounded shadow-xl">
//           {children}
//         </div>
//         {/* closer in the corner */}
//         <button
//           className="absolute -top-2 -right-2 flex justify-center rounded-full h-8 w-8 bg-gray-600 cursor-pointer shadow-xl outline-none border-2 border-gray-600 focus:border-blue-300"
//           onClick={() => onClose()}
//           title="Bye bye 👋"
//         >
//           <span className="text-2xl leading-6 select-none">&times;</span>
//         </button>
//       </div>
//     </div>,
//     portal.current,
//   );
// };

// const Head: React.FC = ({ children }) => (
//   <div className="block px-4 py-2 bg-gray-900">
//     <h1 className="text-lg">{children}</h1>
//   </div>
// );

// const Body: React.FC = ({ children }) => <div className="p-4">{children}</div>;

// export const Modal = { Frame, Head, Body };
"use client";
type ModalProps = {
  onClose: () => void;
  title: string;
  description: string;
  src: string;
};

export default function Modal({
  onClose,
  title,
  description,
  src,
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-[#484293] opacity-70 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="p-8 w-96 shadow-lg rounded-md bg-white opacity-100">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-lg text-gray-500">{description}</p>
          </div>
          {/* <Image src={src} alt={`${title} image`} width={400} height={300} className="rounded-md" /> */}
          <div className="flex justify-center mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
