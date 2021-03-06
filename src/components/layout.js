/** @jsx jsx */
import { jsx, Flex, Image } from 'theme-ui';
import React, { useState, createContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navigation from './navigation';
import Footer from './footer';
import CartButton from './cart.button';
import FadeAnimation from './fadeAnimation';
import { StoreContext } from "../context/store-context";
import Cart from './cart';
import { layoutStyles } from '../utils';
import { buttonStyles } from '../utils';
import { flexStyles } from '../utils';
import '../styles/layout.scss';

const OpenCart = {};

export const CartContext = createContext(OpenCart);

const Layout = ({ children, showCartButton = false, }) => {

    const [open, setOpen] = useState(false);
    const [cart, setCart] = useState(false);

    const { checkout } = React.useContext(StoreContext);

    const items = checkout ? checkout.lineItems : [];

    const quantity = items.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const delay = .7;

    const handleOpenCart = (childLogic) => {
        setCart(childLogic);
    };

    const data = useStaticQuery(graphql`
    query {
        allContentfulHomeIcon {
                edges {
                    node {
                        icon {
                            fluid {
                                src
                            }
                        }
                        title
                    }
                }
            }
        }
    `);

    const homeIconAlt = data.allContentfulHomeIcon.edges[0].node.title;

    return (
        <>
            {!showCartButton ?
                <Navigation
                    themeStyle={{
                        top: 0,
                        right: 0,
                        padding: ['18px', '25px'],
                    }}
                    customStyle={layoutStyles.navLink}
                    to='/products/'
                    direction='right'
                    delay={delay}
                    fadeanim={'fade'}
                    floatanim={'float'}
                    angleInitial={'+'}
                    customDelay={delay + .8}
                >
                    SHOP
                </Navigation>
                :
                <button
                    onClick={() => setCart(!cart)}
                    sx={{
                        top: 0,
                        right: 0,
                        padding: ['18px', '25px'],
                    }}
                    style={buttonStyles.cartButton}
                >
                    <FadeAnimation
                        wrapperElement='div'
                        direction='right'
                        delay={delay}
                    >
                        <CartButton
                            quantity={quantity}
                            badge={buttonStyles.cartButton.badge}
                        />
                    </FadeAnimation>
                </button>
            }
            <Navigation
                themeStyle={{
                    top: 0,
                    left: 0,
                    padding: ['18px', '25px'],
                }}
                customStyle={layoutStyles.navLink}
                to='/music'
                direction='left'
                delay={delay}
                fadeanim={'fade'}
                floatanim={'float'}
                angleInitial={'-'}
                customDelay={delay + .9}
            >
                MUSIC
            </Navigation>
            <Navigation
                themeStyle={{
                    bottom: !open ? 0 : 250,
                    right: 0,
                    padding: ['18px', '25px']
                }}
                customStyle={layoutStyles.navLink}
                to='/video'
                direction='right'
                delay={delay}
                fadeanim={'fade'}
                floatanim={'float'}
                angleInitial={'-'}
                customDelay={delay + .7}
                open={open}
            >
                VIDEOS
            </Navigation>
            <Navigation
                themeStyle={{
                    bottom: !open ? 0 : 250,
                    left: 0,
                    padding: ['18px', '25px']

                }}
                customStyle={layoutStyles.navLink}
                to='/artists'
                direction='left'
                delay={delay}
                fadeanim={'fade'}
                floatanim={'float'}
                angleInitial={'+'}
                customDelay={delay + .75}
                open={open}
            >
                ARTISTS
            </Navigation>
            <Navigation
                themeStyle={{
                    top: 0,
                    right: '50%',
                    mt: 2,
                    transform: 'translateX(50%) translateY(0)',
                    pb: 0,
                    maxWidth: ['90px', '105px'],
                }}
                customStyle={layoutStyles.navLink}
                to='/'
                direction='down'
                delay={delay}
            >
                <Image
                    src={data.allContentfulHomeIcon.edges[0].node.icon.fluid.src}
                    alt={homeIconAlt}
                />
            </Navigation>
            <button
                sx={{ bottom: 0, right: '50%', fontSize: 4 }}
                style={!open ? buttonStyles.bottomButton : buttonStyles.openFooter}
                onClick={() => { setOpen(!open); }}
            >
                +
            </button>
            <div sx={cart ? flexStyles.overlay : flexStyles.underlay}
                onClick={() => { setCart(false); }}

            />
            <FadeAnimation
                wrapperElement='div'
                direction='null'
                delay={.7}
            >
                <Flex
                    sx={open ? flexStyles.openFooter : flexStyles.main}
                >
                    <CartContext.Provider
                        value={handleOpenCart}
                    >
                        {children}
                    </CartContext.Provider>
                </Flex>
            </FadeAnimation>

            <div
                sx={cart ? layoutStyles.cart.open : layoutStyles.cart.closed}
            >
                <Cart
                    handleOpenCart={handleOpenCart}
                    quantity={quantity}
                    open={open}
                />
            </div>

            <Footer
                open={open}
            />
        </>
    );
};

export default Layout;