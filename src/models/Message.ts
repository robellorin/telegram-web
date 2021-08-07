export interface Message {
  content: string;
  type: 'text' | 'emoji' | 'sticker';
  date: Date;
  isOwner: boolean;
  isRead?: boolean;
}