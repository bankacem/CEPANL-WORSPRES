
import { User, BlogPost, Extension, AnalyticsData } from './types';

export const STORAGE_KEYS = {
  USERS: 'cms_users_v4',
  POSTS: 'cms_posts_v4',
  EXTENSIONS: 'cms_extensions_v4',
  MEDIA: 'cms_media_v4',
  ANALYTICS: 'cms_analytics_v4',
  INDEX: 'cms_index_v4',
  SCHEDULER: 'cms_scheduler_v4',
  SETTINGS: 'cms_settings_v4',
  AUTH: 'cms_auth_v4',
  DARK_MODE: 'cms_dark_mode_v4'
};

export const DEFAULT_USERS: User[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123',
    email: 'admin@extensionto.com',
    role: 'admin',
    createdAt: '2025-01-01T00:00:00Z',
    avatar: 'https://picsum.photos/seed/admin/100/100'
  },
  {
    id: '2',
    username: 'editor',
    password: 'editor123',
    email: 'editor@extensionto.com',
    role: 'editor',
    createdAt: '2025-01-01T00:00:00Z',
    avatar: 'https://picsum.photos/seed/editor/100/100'
  }
];

export const DEFAULT_SETTINGS = {
  siteTitle: 'ExtensionTo Hub',
  siteDescription: 'Premium Browser Extensions Directory',
  postsPerPage: 10,
  autoPublish: true,
  seoOptimization: true,
  analyticsEnabled: true,
  backupSchedule: 'weekly'
};

export const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 'welcome-to-extensionto',
    title: 'Welcome to ExtensionTo – Your Premium Extension Hub',
    excerpt: 'Discover the future of browser extensions with our curated, high-performance directory.',
    content: `<h2>Why ExtensionTo Matters</h2>
             <p>In today's digital landscape, your browser is your primary workspace. Every extension you install affects your productivity, privacy, and overall experience.</p>
             <h2>Our Commitment to Excellence</h2>
             <p>We don't just list extensions – we curate them. Each tool in our directory undergoes rigorous testing for performance impact and privacy standards.</p>`,
    category: 'Announcements',
    tags: 'welcome, introduction, premium',
    date: 'January 5, 2025',
    publishDate: '2025-01-05T10:00:00Z',
    readTime: '3 min read',
    image: 'https://picsum.photos/seed/cms-welcome/1200/600',
    status: 'published',
    featured: true,
    seoTitle: 'Welcome to ExtensionTo – Premium Browser Extensions Hub',
    seoDesc: 'Discover curated, high-performance browser extensions.',
    seoKeywords: 'browser extensions, premium tools, productivity',
    wordCount: 150,
    readingTime: 1,
    seoScore: 85,
    views: 1240
  }
];

export const DEFAULT_EXTENSIONS: Extension[] = [
  { id: '1', name: 'AdGuard AdBlocker', description: 'Block ads and tracking', rating: 4.8, downloads: 1200000, icon: '🛡️' },
  { id: '2', name: 'uBlock Origin', description: 'Lightweight ad blocker', rating: 4.9, downloads: 2500000, icon: '🛑' },
  { id: '3', name: 'Grammarly', description: 'AI writing assistant', rating: 4.6, downloads: 3200000, icon: '✍️' }
];

export const INITIAL_ANALYTICS: AnalyticsData[] = [
  {
    date: '2025-01-01',
    views: 1200,
    uniqueVisitors: 800,
    avgSessionDuration: 180,
    bounceRate: 35,
    topPosts: ['Welcome to ExtensionTo'],
    referrals: [
      { source: 'Direct', visits: 500 },
      { source: 'Google', visits: 400 },
      { source: 'Twitter', visits: 200 }
    ]
  },
  {
    date: '2025-01-02',
    views: 1450,
    uniqueVisitors: 950,
    avgSessionDuration: 195,
    bounceRate: 32,
    topPosts: ['Welcome to ExtensionTo'],
    referrals: [
      { source: 'Direct', visits: 600 },
      { source: 'Google', visits: 550 },
      { source: 'Twitter', visits: 300 }
    ]
  }
];
