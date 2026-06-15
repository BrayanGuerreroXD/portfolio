import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Container from '@mui/material/Container'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { colors } from '../theme'
import { navLinks } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkSx = {
    fontFamily: '"Space Mono", monospace',
    fontSize: '0.875rem',
    letterSpacing: '0.1em',
    color: colors.onSurfaceVariant,
    px: 1.5,
    py: 1,
    borderRadius: '12px',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    '&:hover': {
      color: colors.primary,
      bgcolor: 'rgba(211,187,255,0.1)',
      borderColor: colors.primary,
      borderStyle: 'dashed',
    },
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'rgba(16,20,21,0.8)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 0 20px rgba(211,187,255,0.1)',
          borderBottom: `4px dashed rgba(211,187,255,0.3)`,
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: { xs: 2.5, md: 4 } }}>
            {/* Logo */}
            <Box
              component="a"
              href="#top"
              sx={{
                display: 'flex',
                alignItems: 'center',
                '&:hover img': { transform: 'scale(1.1)' },
              }}
            >
              <Box
                component="img"
                src="/assets/logo.png"
                alt="Brayan Guerrero logo"
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: `4px solid ${colors.secondary}`,
                  transition: 'transform 0.3s ease',
                }}
              />
            </Box>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              {navLinks.map((link) => (
                <Box key={link.href} component="a" href={link.href} sx={linkSx}>
                  {link.label}
                </Box>
              ))}
            </Box>

            {/* Connect CTA (desktop) */}
            <Button
              href="#contact"
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                px: 3,
                py: 1.25,
                borderRadius: '999px',
                border: `4px solid ${colors.primaryContainer}`,
                bgcolor: 'rgba(109,40,217,0.2)',
                color: colors.onPrimaryContainer,
                boxShadow: '0 0 15px rgba(109,40,217,0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: colors.primary,
                  color: colors.onPrimary,
                  boxShadow: '0 0 25px rgba(211,187,255,0.5)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Connect
            </Button>

            {/* Mobile toggle */}
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                color: colors.onSurface,
                border: `2px dashed ${colors.onSurface}`,
                borderRadius: '10px',
              }}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: 'rgba(16,20,21,0.95)',
            backdropFilter: 'blur(12px)',
            borderLeft: `4px dashed ${colors.primaryContainer}`,
            width: 260,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: colors.onSurface }} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton component="a" href={link.href} onClick={() => setOpen(false)}>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontFamily: '"Space Mono", monospace',
                    letterSpacing: '0.1em',
                    color: colors.onSurface,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 1 }}>
            <ListItemButton component="a" href="#contact" onClick={() => setOpen(false)}>
              <ListItemText
                primary="Connect"
                primaryTypographyProps={{
                  fontFamily: '"Space Mono", monospace',
                  letterSpacing: '0.1em',
                  color: colors.primary,
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
