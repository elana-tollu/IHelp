import { getColor, IIconProps } from './utils';

export const ExecutedRequestIcon = ({ color, ...props }: IIconProps) => (
  <svg
    width="43"
    height="50"
    viewBox="0 0 43 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.0284 50H42.5614C42.7076 50 42.8538 49.819 43 49.4567V13.2247C43 12.8624 42.8538 12.6812 42.5614 12.6812H26.9969L26.5 13.7681H42.1228V48.9131H13.3209V25.3623H12.5898V49.4567C12.5898 49.819 12.736 50 13.0284 50Z"
      fill={getColor(color)}
    />
    <path
      d="M38.4676 26.9932H16.5372C16.2448 26.9932 16.0986 26.8119 16.0986 26.4496C16.0986 26.0873 16.2448 25.9062 16.5372 25.9062H38.4676C38.76 25.9062 38.9062 26.0873 38.9062 26.4496C38.9062 26.6308 38.76 26.9932 38.4676 26.9932Z"
      fill={getColor(color)}
    />
    <path
      d="M27.6486 31.5222H16.5372C16.2448 31.5222 16.0986 31.341 16.0986 30.9786C16.0986 30.6163 16.2448 30.4353 16.5372 30.4353H27.6486C27.941 30.4353 28.0871 30.6163 28.0871 30.9786C28.0871 31.341 27.941 31.5222 27.6486 31.5222Z"
      fill={getColor(color)}
    />
    <path
      d="M27.6486 40.7612H16.5372C16.2448 40.7612 16.0986 40.58 16.0986 40.2177C16.0986 39.8553 16.2448 39.6743 16.5372 39.6743H27.6486C27.941 39.6743 28.0871 39.8553 28.0871 40.2177C28.0871 40.58 27.941 40.7612 27.6486 40.7612Z"
      fill={getColor(color)}
    />
    <path
      d="M38.4676 36.2324H16.5372C16.2448 36.2324 16.0986 36.0512 16.0986 35.6889C16.0986 35.3265 16.2448 35.1455 16.5372 35.1455H38.4676C38.76 35.1455 38.9062 35.3265 38.9062 35.6889C38.9062 35.87 38.76 36.2324 38.4676 36.2324Z"
      fill={getColor(color)}
    />
    <path
      d="M6.67239 11.6486L11.6583 16.1796L29.2557 0.187854C29.6956 -0.211941 30.5755 0.0545404 30.5755 0.720865V9.78294C30.5755 9.91621 30.4289 10.1827 30.2822 10.316L11.9516 26.9741C11.6583 27.2406 11.0717 27.2406 10.7784 26.9741L0.219968 17.1125C-0.0733226 16.846 -0.0733226 16.3129 0.219968 16.0463L5.35255 11.6486C5.93913 11.3821 6.3791 11.3821 6.67239 11.6486ZM0.806585 16.7127L11.5117 26.4411L29.8423 9.78294V0.854179L12.2449 16.846C11.9516 17.1125 11.365 17.1125 11.0718 16.846L5.93917 12.1817C3.73949 14.0474 1.39317 16.0463 0.806585 16.7127Z"
      fill={getColor(color)}
    />
  </svg>
);
