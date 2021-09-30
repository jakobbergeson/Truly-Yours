/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import * as React from "react"
import { footerStyles } from "../utils"

const Footer = ({ open }) => {
    return (
        <Flex style={ !open ? footerStyles.footerWrapper : footerStyles.openFooter}>

        </Flex>
    )
}

export default Footer