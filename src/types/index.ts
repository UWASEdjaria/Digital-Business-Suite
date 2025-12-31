export interface ClientProfile {
  username: string;
  fullName: string;
  role: string;
  bio: string;
  themeColor: string;
  avatarUrl: string;
  links: { label: string; url: string }[];
  isLive: boolean;
}