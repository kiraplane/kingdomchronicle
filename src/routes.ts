import { websiteConfig } from './config/website';

export enum Routes {
  Root = '/',
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  Guides = '/guides',
  BeginnerGuide = '/guides/beginner-guide',
  TrainingRecruiting = '/guides/training-and-recruiting',
  DiplomacyAlliances = '/guides/diplomacy-and-alliances',
  WarReinforcements = '/guides/war-and-reinforcements',
  TroopTypes = '/guides/troop-types',
  OfficerSkills = '/guides/officer-skills',
  RenownMobilization = '/guides/renown-and-mobilization',
  OfficersRecruitment = '/guides/officers-and-recruitment',
  CampaignsVictory = '/guides/campaigns-and-victory',
  Achievements = '/guides/achievements',
  CasualDifficulty = '/guides/casual-difficulty',
  SystemRequirements = '/system-requirements',
  Review = '/review',
  Download = '/download',

  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',
  Payment = '/payment',
}

export const routesNotAllowedByLoggedInUsers: Routes[] = [];
export const protectedRoutes: Routes[] = [];
export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Dashboard;
