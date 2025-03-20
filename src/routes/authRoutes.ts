import passport from 'passport'
import { Router, Request, Response } from 'express'
import dotenv from 'dotenv'
import session from 'express-session'
import { Strategy as GitHubStrategy, Profile } from 'passport-github'

dotenv.config()
const router = Router()

// ✅ Define the User Interface
export interface GitHubUser {
  id: string
  username: string
  displayName: string
}

// ✅ Configure session middleware
router.use(
  session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true,
  })
)

// ✅ Initialize Passport middleware
router.use(passport.initialize())
router.use(passport.session())

// ✅ GitHub OAuth Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      callbackURL: 'http://localhost:3000/auth/github/callback',
    },
    (accessToken, refreshToken, profile: Profile, done) => {
      const user: GitHubUser = {
        id: profile.id,
        username: profile.username || 'unknown',
        displayName: profile.displayName || 'Anonymous',
      }
      return done(null, user)
    }
  )
)

// ✅ Fix: Serialize only the user ID
passport.serializeUser((user: GitHubUser, done) => {
  done(null, user.id)
})

// ✅ Fix: Deserialize user correctly
passport.deserializeUser((id: string, done) => {
  // Normally, retrieve the user from a database
  const user: GitHubUser = {
    id,
    username: 'GitHubUser',
    displayName: 'GitHub User',
  }
  done(null, user)
})

// ✅ Route: Start GitHub OAuth Login
router.get('/github', passport.authenticate('github'))

// ✅ Route: GitHub OAuth Callback
router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req: Request, res: Response) => {
    res.json({ message: '✅ GitHub login successful!', user: req.user })
  }
)

// ✅ Logout Route
router.get('/logout', (req, res) => {
  req.logout(() => res.redirect('/'))
})

export default router
