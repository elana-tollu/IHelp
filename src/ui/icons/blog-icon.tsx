import { getColor, IIconProps } from './utils';

export const BlogIcon = ({ color, ...props }: IIconProps) => (
  <svg
    width="23"
    height="20"
    viewBox="0 0 23 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.69998 19.9999H4.60001C4.50001 19.9999 4.39999 19.9018 4.39999 19.7057V15.9803H0.299988C0.0999878 15.9803 0 15.8822 0 15.6862V2.25486C0 2.05878 0.0999878 1.96069 0.299988 1.96069H18.1C18.3 1.96069 18.4 2.05878 18.4 2.25486V2.5489L17.7 3.62276V2.5489H0.5V15.3921H4.60001C4.80001 15.3921 4.89999 15.4901 4.89999 15.6862V19.1175L8.89999 15.4901C8.94999 15.4901 8.975 15.4656 9 15.4411C9.025 15.4166 9.05001 15.3921 9.10001 15.3921H17.7V11.688V9.71957L18.4 8.67407V10.631V15.6862C18.4 15.8822 18.3 15.9803 18.1 15.9803H9.29999L4.89999 19.9019C4.79999 19.9019 4.69998 19.9999 4.69998 19.9999Z"
      fill={getColor(color)}
    />
    <path
      d="M12.4661 14.7059C12.3729 14.7059 12.3729 14.7059 12.2797 14.7059C12.1865 14.7059 12.1865 14.6148 12.1865 14.5237L12 11.5171C12 11.426 12 11.4261 12 11.335L19.4576 0.128826C19.5508 0.0377199 19.7373 -0.0533643 19.8305 0.0377422L22.9068 1.95096C23 1.95096 23 2.04213 23 2.13324C23 2.22434 23 2.3154 23 2.3154L15.5424 13.5215C15.5424 13.6127 15.4492 13.6126 15.4492 13.6126L12.4661 14.7059C12.5593 14.7059 12.4661 14.7059 12.4661 14.7059ZM12.5593 11.5171L12.7458 14.0682L15.1695 13.1571L22.4407 2.22432L19.8305 0.584359L12.5593 11.5171Z"
      fill={getColor(color)}
    />
  </svg>
);
