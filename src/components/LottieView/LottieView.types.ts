export interface ILottieViewProps {
  stickerName: string;
  styles?: object;
  className?: string;
  onHandleClick?: (stickerName: string) => void;
}
