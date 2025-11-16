export interface Post {
  id: number;
  key_words: string;
  contents: string;
  url: string;
  youtube_id: string;
  channel_name: string | null;
  play_time: number;
  created_at?: string;
  updated_at?: string;
}

export interface Tag {
  id: number;
  name: string;
  created_at?: string;
  updated_at?: string;
}

