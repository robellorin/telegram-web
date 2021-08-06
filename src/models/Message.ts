export interface Message {
  content: string;
  type: 'text' | 'emoji';
  date: Date;
  isOwner: boolean;
  isRead: boolean;
}