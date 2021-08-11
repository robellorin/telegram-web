export interface ILottieViewProps {
  stickerName: string;
  styles?: object;
  className?: string;
  isMessage?: boolean;
  inView?: boolean;
  onHandleClick?: (stickerName: string) => void;
}
