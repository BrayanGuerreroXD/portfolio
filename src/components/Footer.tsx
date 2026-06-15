import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { colors } from '../theme'
import { profile, contact } from '../data/portfolio'

const year = new Date().getFullYear()

const links = [
  { label: 'GitHub', href: contact.github, icon: GitHubIcon, external: true },
  { label: 'LinkedIn', href: contact.linkedin, icon: LinkedInIcon, external: true },
  { label: 'Email', href: `mailto:${contact.email}`, icon: EmailIcon, external: false },
]

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 12, md: 15 },
        py: 1,
        borderTop: `4px dashed ${colors.outlineVariant}4d`,
        bgcolor: 'rgba(16,20,21,0.8)',
        backdropFilter: 'blur(12px)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
            py: 6,
            px: { xs: 2.5, md: 4 },
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h3" sx={{ color: colors.secondary, fontSize: '1.5rem' }}>
              © {year} {profile.name}
            </Typography>
            <Typography variant="body2" sx={{ color: colors.onSurfaceVariant, fontSize: '0.875rem' }}>
              {profile.footerNote}
            </Typography>
          </Box>

          <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center" useFlexGap>
            {links.map(({ label, href, icon: Icon, external }) => (
              <Box
                key={label}
                component="a"
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.75,
                  color: colors.onTertiaryContainer,
                  textDecoration: 'none',
                  fontFamily: '"Fredoka", sans-serif',
                  transition: 'all 0.2s ease',
                  '&:hover': { color: colors.secondary, transform: 'scale(1.1)' },
                }}
              >
                <Icon sx={{ fontSize: 20 }} />
                {label}
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
