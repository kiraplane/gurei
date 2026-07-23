export type SourceType =
  | 'official'
  | 'developer'
  | 'community'
  | 'youtube'
  | 'competitor'
  | 'search';

export type Confidence = 'high' | 'medium' | 'watch';

export type SourceStrategy =
  | 'official'
  | 'official_and_developer'
  | 'official_and_youtube'
  | 'user_intent_youtube'
  | 'popular_youtube'
  | 'youtube_explainer'
  | 'manual_data'
  | 'community_crosscheck';

export interface DataSource {
  type: SourceType;
  label: string;
  url: string;
  checkedAt: string;
  confidence: Confidence;
  note: string;
}

export interface GameFact {
  label: string;
  value: string;
}

export interface KeywordMatrixItem {
  keyword: string;
  intent: string;
  route: string;
  priority: 'P0' | 'P1' | 'P2' | 'P3';
  status: 'keep' | 'ignore' | 'watch' | 'localize_later';
  evidence: string;
  notes: string;
}

export interface Achievement {
  name: string;
  officialDescription: string;
  kind: 'kami' | 'encounter' | 'challenge' | 'hidden';
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideVideo {
  id: string;
  title: string;
  channel: string;
  url: string;
  thumbnailUrl: string;
  publishedAt: string;
  viewCountLabel?: string;
  checkedAt: string;
}

export type GuideCategory =
  | 'Start'
  | 'Bosses'
  | 'Combat'
  | 'Runs'
  | 'Achievements'
  | 'Secrets'
  | 'Platform'
  | 'Reference'
  | 'Review'
  | 'Safety';

export type GuideDifficulty =
  | 'Beginner'
  | 'System guide'
  | 'Checklist'
  | 'Status';

export interface Guide {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  category: GuideCategory;
  difficulty: GuideDifficulty;
  coverImageUrl: string;
  publishedAt: string;
  updatedAt: string;
  sourceStrategy: SourceStrategy;
  sourceNotes: string;
  videoSearchQueries: string[];
  video?: GuideVideo;
  tags: string[];
  relatedRoutes: string[];
  body: GuideSection[];
  faq: GuideFaq[];
}
