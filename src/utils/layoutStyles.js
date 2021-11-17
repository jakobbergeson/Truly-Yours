
export const layoutStyles = {
   navLink: {
      position: 'fixed',
      textTransform: 'uppercase',
      zIndex: 40,
      transition: 'all .8s cubic-bezier(.19,1,.22,1)',
      textDecoration: 'none',
      color: '#333333',
      fontWeight: 600,
   },
   cart: {
      closed: {
         transform: "translateX(100%)",
         willChange: "transform",
         flexDirection: "column",
         position: "fixed",
         top: 0,
         right: 0,
         height: "100%",
         zIndex: 50,
         color: "red",
         bg: "white",
         transition: "transform .8s cubic-bezier(.19,1,.22,1)",
      },
      open: {
         transform: "translateX(0)",
         willChange: "transform",
         flexDirection: "column",
         position: "fixed",
         top: 0,
         right: 0,
         height: "100%",
         zIndex: 50,
         color: "red",
         bg: "white",
         transition: "transform .8s cubic-bezier(.19,1,.22,1)",
      }
   }
};