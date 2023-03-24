
import {
  createStyles,
  Header,
  HoverCard,
  Group,

  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';

import { useSelector } from 'react-redux'
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { userLogout } from '../../../Redux/Actions/userActions/LoginActions'

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
];

function Navbar() {
  const userData = useSelector((state) => state.userLogin.userLoginDetails)


  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logOut = () => {
    console.log('hiiiiiiiiiiiiiiiiiiiiii');
    dispatch(userLogout())
    navigate("/login")
  }
  const onUserProfile = () => {
    navigate("/profile")
  }


  return (
    <Box>
      <Header height={60} px="md" style={{ backgroundColor: 'whitesmoke' }}>
        <Group position="apart" sx={{ height: '100%' }}>
          {/* <MantineLogo size={30} /> */}
          <h3 style={{ color: 'rgb(53, 91, 62)', marginLeft: '10%' }}> <i class="fa-solid fa-book-open-reader" ></i> LetterBox</h3>

          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            <Link to={'/'}>
              <a className={classes.link}>
                HOME
              </a>
            </Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      BOOKS
                    </Box>
                    {/* <IconChevronDown size={16} color={theme.fn.primaryColor()} /> */}
                  </Center>
                </a>
              </HoverCard.Target>


            </HoverCard>
            <a href="#" className={classes.link}>
              SELL
            </a>
            <a href="#" className={classes.link}>
              CHAT WITH US
            </a>
          </Group>

          <Group className={classes.hiddenMobile}>

            {/* <Link to={userData?logOut():'/login'}>
                <a className={classes.link} variant="default">{userData?'LOG OUT':'LOG IN'}</a>
              </Link> */}
            {userData ?
              <a className={classes.link} variant="default" onClick={logOut}>LOG OUT</a>
              : <Link to={'/login'}>
                <a className={classes.link} variant="default">LOG IN</a>
              </Link>}
            {/* <Link to={'/login'}>
              <a className={classes.link} variant="default">LOG IN</a>
            </Link> */}
            <Link to={'/signup'}>
              <a className={classes.link}>SIGN UP</a>
            </Link>

            <Link to={'/profile'}>
              {/* <a className={classes.link} icon="pi pi-user" rounded severity="primary" aria-label="User" /> */}
              <i class="fa fa-user" aria-hidden="true" style={{ color: 'black' }}></i>
            </Link>

          </Group>


          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>


      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="LetterBox"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Link to={'/'}>
            <a href="#" className={classes.link}>
              HOME
            </a>
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                BOOKS
              </Box>
              {/* <IconChevronDown size={16} color={theme.fn.primaryColor()} /> */}
            </Center>
          </UnstyledButton>
          {/* <Collapse in={linksOpened}>{links}</Collapse> */}
          <a href="#" className={classes.link}>
            SELL
          </a>
          <a href="#" className={classes.link}>
            CHAT WITH US
          </a>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">LOG IN</Button>
            <Button>Sign up</Button>

          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default Navbar