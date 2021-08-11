export interface ILottieViewProps {
  stickerName: string;
  styles?: object;
  className?: string;
  isMessage?: boolean;
  onHandleClick?: (stickerName: string) => void;
}
