export const footerStyles = {
    footerWrapper: {
        transform: "translateY(100%)",
        willChange: "transform",
        flexDirection: "column",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 8,
        color: "#fff",
        bg: "black",
        minHeight: "250px",
        transition: "transform .8s cubic-bezier(.19,1,.22,1)",
    },
    openFooter: {
        transform: "translateY(0)",
        willChange: "transform",
        flexDirection: "column",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 8,
        color: "#fff",
        bg: "black",
        minHeight: "250px",
        transition: "transform .8s cubic-bezier(.19,1,.22,1)",
    },
    socialBox: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcons: {
        color: 'white',
        fontSize: [5, 6, null, null, null, null, 7],
        transition: 'opacity 450ms',
        '&:hover': {
            transition: 'opacity 125ms',
            opacity: .75
        }
    },
    bottomBox: {
        justifyContent: 'space-between',
        alignItems: ['center', 'end'],
        mt: 'auto',
        ml: 4,
        mr: 4,
        mb: 3,
        fontFamily: 'body',
        flexDirection: ['column-reverse', 'row'],
    },
    copyright: {
        fontWeight: 400,
        m: '0px',
        fontSize: [2, null]
    },
    navigationBox: {
        mb: [5, 0]
    },
    navLink: {
        fontWeight: 400,
        mr: 2,
        ml: 2,
        color: 'red',
        textDecoration: 'none',
        fontSize: [3, null, null, null, null, null, 4],
        cursor: 'pointer',
        transition: 'opacity 450ms',
        '&:hover': {
            transition: 'opacity 125ms',
            opacity: .75
        }
    }
}