export const footerStyles = {
    footerWrapper: {
        transform: "translateY(100%)",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 8,
        color: "#fff",
        backgroundColor: "#9702e8",
        minHeight: "250px",
        transition: "transform .8s cubic-bezier(.19,1,.22,1)",
    },
    openFooter: {
        transform: "translateY(0)",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 8,
        color: "#fff",
        backgroundColor: "#9702e8",
        minHeight: "250px",
        transition: "transform .8s cubic-bezier(.19,1,.22,1)",
    }
}