import clsx from 'clsx';
import { LogoComponentProps } from './Logo.types'

export const BovkunFamily: React.FC<LogoComponentProps> = ({
  isActive,
  theme = 'white',
}) => {

  const fill = clsx({
    white: theme === 'white' && !isActive,
    'rgba(242, 232, 222, 1)': theme === 'white' && isActive,
    'rgba(103, 95, 40, 0.6)': theme !== 'white' && !isActive,
    'rgba(77, 72, 67, 1)': theme !== 'white' && isActive,
  });

  const size = clsx({
    'w-[84px] h-[9px]': true,
    'lg:w-[98px] lg:h-[10px]': theme === 'white',
    'lg:w-[122px] lg:h-[13px]': theme !== 'white',
  });

  return (
    <>
      <svg
        className={size}
        aria-label="The second part of Logo"
        viewBox="0 0 99 11"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.556 10.5855C3.76832 10.5855 3.07819 10.4229 2.48562 10.0977C1.89305 9.77253 1.43236 9.31545 1.10356 8.7265C0.774754 8.13393 0.610352 7.43838 0.610352 6.63985C0.610352 6.05812 0.706102 5.52698 0.897603 5.04642C1.09272 4.56225 1.36732 4.14311 1.72142 3.78901C2.07913 3.4313 2.49827 3.1567 2.97882 2.9652C3.463 2.77008 3.99414 2.67253 4.57226 2.67253C5.16844 2.67253 5.67791 2.7484 6.10066 2.90016C6.52341 3.0483 6.89918 3.25968 7.22799 3.53428L6.50715 4.68871C6.2759 4.4683 6.00491 4.30571 5.69417 4.20092C5.38704 4.09253 5.04559 4.03833 4.66982 4.03833C4.26875 4.03833 3.90923 4.09795 3.59127 4.21718C3.2733 4.33642 3.00231 4.50985 2.77829 4.73749C2.55427 4.96151 2.38264 5.2325 2.2634 5.55047C2.14417 5.86843 2.08455 6.22614 2.08455 6.62359C2.08455 7.16919 2.19114 7.6353 2.40432 8.02192C2.6175 8.40492 2.92101 8.6994 3.31486 8.90535C3.7087 9.11131 4.17661 9.21428 4.7186 9.21428C5.08353 9.21428 5.43944 9.15828 5.78631 9.04627C6.13679 8.93426 6.4674 8.7554 6.77814 8.5097L7.42852 9.69665C7.0672 9.97848 6.64806 10.1971 6.17111 10.3524C5.69778 10.5078 5.15941 10.5855 4.556 10.5855Z"
          fill={fill}
        />
        <path
          d="M10.8185 10.4229V2.83512H12.2277V10.4229H10.8185Z"
          fill={fill}
        />
        <path
          d="M16.3104 10.4229V2.83512H17.6708L20.695 7.78886L20.1422 7.79428L23.0418 2.83512H24.386V10.4229H23.0147L23.0364 4.67787L23.2966 4.77001L20.8468 8.85657H19.855L17.3456 4.77001L17.5786 4.67787L17.6003 10.4229H16.3104Z"
          fill={fill}
        />
        <path
          d="M28.2815 5.8323L28.146 2.83512H29.4196L29.2841 5.8323H28.2815Z"
          fill={fill}
        />
        <path
          d="M33.1797 10.4229V2.83512H34.5888V10.4229H33.1797ZM32.8978 1.93543C32.6774 1.93543 32.4913 1.86136 32.3396 1.71321C32.1914 1.56146 32.1174 1.36634 32.1174 1.12787C32.1174 0.885783 32.1914 0.690669 32.3396 0.542526C32.4913 0.394384 32.6774 0.320312 32.8978 0.320312C33.1146 0.320312 33.2971 0.394384 33.4452 0.542526C33.597 0.690669 33.6729 0.885783 33.6729 1.12787C33.6729 1.36634 33.597 1.56146 33.4452 1.71321C33.2971 1.86136 33.1146 1.93543 32.8978 1.93543ZM34.8706 1.93543C34.6539 1.93543 34.4696 1.86136 34.3178 1.71321C34.1697 1.56146 34.0956 1.36634 34.0956 1.12787C34.0956 0.885783 34.1697 0.690669 34.3178 0.542526C34.4696 0.394384 34.6539 0.320312 34.8706 0.320312C35.0947 0.320312 35.2807 0.394384 35.4289 0.542526C35.577 0.690669 35.6511 0.885783 35.6511 1.12787C35.6511 1.36634 35.577 1.56146 35.4289 1.71321C35.2807 1.86136 35.0947 1.93543 34.8706 1.93543Z"
          fill={fill}
        />
        <path
          d="M43.4435 10.4229V2.83512H48.343V4.07085H44.8526V5.92443H46.1588C46.9935 5.92443 47.6601 6.11413 48.1588 6.49352C48.661 6.87291 48.9121 7.43296 48.9121 8.17367C48.9121 8.65062 48.8019 9.05711 48.5815 9.39314C48.3611 9.72555 48.0449 9.98029 47.633 10.1573C47.2247 10.3344 46.7315 10.4229 46.1534 10.4229H43.4435ZM44.8526 9.34436H46.045C46.4967 9.34436 46.8435 9.24499 47.0856 9.04627C47.3313 8.84754 47.4542 8.56029 47.4542 8.18451C47.4542 7.81957 47.3349 7.53232 47.0965 7.32276C46.858 7.10957 46.5274 7.00298 46.1046 7.00298H44.8526V9.34436Z"
          fill={fill}
        />
        <path
          d="M56.1054 10.5855C55.5308 10.5855 54.9979 10.4861 54.5065 10.2874C54.0187 10.0851 53.5942 9.80505 53.2328 9.44734C52.8715 9.08963 52.5915 8.67049 52.3928 8.18993C52.194 7.70937 52.0947 7.18907 52.0947 6.62901C52.0947 6.06535 52.194 5.54324 52.3928 5.06268C52.5915 4.58212 52.8715 4.16298 53.2328 3.80527C53.5942 3.44756 54.0187 3.16935 54.5065 2.97062C54.9979 2.77189 55.5308 2.67253 56.1054 2.67253C56.6762 2.67253 57.2056 2.7737 57.6934 2.97604C58.1811 3.17838 58.6057 3.46021 58.967 3.82153C59.3284 4.18286 59.6102 4.6038 59.8125 5.08436C60.0149 5.56131 60.116 6.07619 60.116 6.62901C60.116 7.18907 60.0149 7.70937 59.8125 8.18993C59.6102 8.67049 59.3284 9.08963 58.967 9.44734C58.6057 9.80505 58.1811 10.0851 57.6934 10.2874C57.2056 10.4861 56.6762 10.5855 56.1054 10.5855ZM56.1054 9.25764C56.4631 9.25764 56.7955 9.19622 57.1026 9.07337C57.4133 8.9469 57.6825 8.76985 57.9102 8.54222C58.1414 8.31097 58.3203 8.03456 58.4467 7.71298C58.5768 7.38779 58.6418 7.02647 58.6418 6.62901C58.6418 6.09787 58.5298 5.63538 58.3058 5.24153C58.0818 4.84769 57.7783 4.54237 57.3953 4.32558C57.0123 4.10879 56.5823 4.00039 56.1054 4.00039C55.744 4.00039 55.4098 4.06181 55.1027 4.18466C54.7956 4.30751 54.5264 4.48456 54.2951 4.71581C54.0675 4.94706 53.8886 5.22347 53.7586 5.54505C53.6321 5.86662 53.5689 6.22795 53.5689 6.62901C53.5689 7.16016 53.6791 7.62265 53.8995 8.0165C54.1235 8.41034 54.427 8.71566 54.81 8.93245C55.193 9.14924 55.6248 9.25764 56.1054 9.25764Z"
          fill={fill}
        />
        <path
          d="M63.7213 10.4229V2.83512H66.4367C67.1774 2.83512 67.7736 2.99772 68.2252 3.32291C68.6805 3.64449 68.9081 4.12143 68.9081 4.75375C68.9081 4.98861 68.8539 5.21082 68.7455 5.42039C68.6371 5.62996 68.4962 5.81423 68.3228 5.97321C68.1494 6.12858 67.9651 6.24782 67.77 6.33092C68.1819 6.461 68.5215 6.69405 68.7889 7.03008C69.0563 7.36611 69.19 7.77622 69.19 8.26039C69.19 8.68675 69.0816 9.06253 68.8648 9.38772C68.6516 9.71291 68.3463 9.96764 67.9488 10.1519C67.5514 10.3326 67.0816 10.4229 66.5397 10.4229H63.7213ZM65.1305 9.34436H66.3174C66.7908 9.34436 67.1449 9.25041 67.3797 9.06253C67.6146 8.87102 67.732 8.58558 67.732 8.20619C67.732 7.83403 67.6146 7.54858 67.3797 7.34985C67.1485 7.15113 66.7962 7.05176 66.3229 7.05176H65.1305V9.34436ZM65.1305 6.03283H66.2307C66.4945 6.03283 66.7239 5.98947 66.919 5.90276C67.1142 5.81604 67.2659 5.69138 67.3743 5.52879C67.4827 5.36258 67.5369 5.16566 67.5369 4.93802C67.5369 4.6056 67.4213 4.35268 67.19 4.17924C66.9624 4.0022 66.6354 3.91367 66.209 3.91367H65.1305V6.03283Z"
          fill={fill}
        />
        <path
          d="M77.5322 10.4229L74.4429 6.44474L77.2016 2.83512H78.9468L76.161 6.43932L79.3479 10.4229H77.5322ZM72.844 10.4229V2.83512H74.2532V5.78352H75.6678V7.07344H74.2532V10.4229H72.844Z"
          fill={fill}
        />
        <path
          d="M82.8928 10.5584L82.3616 9.26848C82.8024 9.17092 83.1945 9.02459 83.5377 8.82947C83.8846 8.63436 84.1953 8.3724 84.4699 8.04359C84.7482 7.71479 85.0065 7.30469 85.245 6.81329L87.169 2.83512H88.8004L86.5295 7.32818C86.2693 7.84487 86.0056 8.2911 85.7382 8.66688C85.4708 9.04265 85.1908 9.35881 84.8981 9.61535C84.6091 9.86828 84.2983 10.0706 83.9659 10.2224C83.6371 10.3741 83.2794 10.4861 82.8928 10.5584ZM85.0228 8.13031L82.1232 2.83512H83.8358L85.9712 6.91085L85.0228 8.13031Z"
          fill={fill}
        />
        <path
          d="M91.8939 10.4229V2.83512H93.3031V5.78352H96.7501V2.83512H98.1593V10.4229H96.7501V7.07344H93.3031V10.4229H91.8939Z"
          fill={fill}
        />
      </svg>
    </>
  );
};
