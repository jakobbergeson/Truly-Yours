export const buttonStyles = {
    bottomButton: {
        position: "fixed",
        padding: 25,
        zIndex: 100,
        transition: "all .8s cubic-bezier(.19,1,.22,1)",
        textDecoration: "none",
        color: "#333333",
        fontWeight: 600,
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
        transform: "translateX(50%) translateY(0)",
    },
    openFooter: {
        transform: "translateX(50%) translateY(-250px) rotate(45deg)",
        position: "fixed",
        padding: 25,
        zIndex: 100,
        transition: "all .8s cubic-bezier(.19,1,.22,1)",
        textDecoration: "none",
        color: "#333333",
        fontWeight: 600,
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
    }
}