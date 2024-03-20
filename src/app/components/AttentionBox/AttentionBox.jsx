import React, { Children } from "react";
import Text from "../Text/Text";
// I call it "AttentionBox", because AttentionWarningNoteBox is too long :P
let AttentionBox = ({ text = "Warning: do not the", variant }) => {
  //The 3 SVGs... Blame figma
  let Icon = () => {
    return (
      <div>
        {variant === "attention" && (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9992 3.03809L1.40442 24.963H26.5948L13.9992 3.03809ZM13.9992 4.91059L24.983 24.0293H3.01617L13.9992 4.91059Z"
              fill="#9CA43C"
            />
            <path
              d="M13.5327 11.9009H14.4655V18.4319H13.5327V11.9009Z"
              fill="#9CA43C"
            />
            <path
              d="M13.9983 19.8311C13.6124 19.8311 13.3 20.1443 13.3 20.5311C13.3 20.9161 13.6124 21.2302 13.9983 21.2302C14.3859 21.2302 14.6992 20.9169 14.6992 20.5311C14.6992 20.1443 14.3859 19.8311 13.9983 19.8311Z"
              fill="#9CA43C"
            />
          </svg>
        )}
        {variant === "warning" && (
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_83_31)">
              <path
                d="M12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0ZM12.5 1.38889C6.3635 1.38889 1.38889 6.3635 1.38889 12.5C1.38889 18.6365 6.3635 23.6111 12.5 23.6111C18.6365 23.6111 23.6111 18.6365 23.6111 12.5C23.6111 6.3635 18.6365 1.38889 12.5 1.38889ZM12.5 16.6667C12.8835 16.6667 13.1944 16.9776 13.1944 17.3611C13.1944 17.7446 12.8835 18.0556 12.5 18.0556C12.1165 18.0556 11.8056 17.7446 11.8056 17.3611C11.8056 16.9776 12.1165 16.6667 12.5 16.6667ZM12.5 6.94444C12.8835 6.94444 13.1944 7.25536 13.1944 7.63889V14.5833C13.1944 14.9669 12.8835 15.2778 12.5 15.2778C12.1165 15.2778 11.8056 14.9669 11.8056 14.5833V7.63889C11.8056 7.25536 12.1165 6.94444 12.5 6.94444Z"
                fill="#B12F13"
              />
            </g>
            <defs>
              <clipPath id="clip0_83_31">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
        {variant === "note" && (
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 24.427C17.2111 24.4233 16.935 24.3069 16.7307 24.1026C16.5264 23.8983 16.41 23.6222 16.4062 23.3333V16.0416C16.4062 15.7516 16.5215 15.4733 16.7266 15.2683C16.9317 15.0631 17.2099 14.9479 17.5 14.9479C17.7901 14.9479 18.0683 15.0631 18.2734 15.2683C18.4785 15.4733 18.5938 15.7516 18.5938 16.0416V23.3333C18.59 23.6222 18.4736 23.8983 18.2693 24.1026C18.065 24.3069 17.7889 24.4233 17.5 24.427Z"
              fill="#0870EB"
            />
            <path
              d="M17.4062 13.4895C17.1421 13.4858 16.8897 13.3693 16.7029 13.165C16.5161 12.9607 16.4097 12.6847 16.4062 12.3958V11.6666C16.4062 11.3765 16.5116 11.0983 16.6992 10.8932C16.8866 10.6881 17.1411 10.5729 17.4062 10.5729C17.6715 10.5729 17.9259 10.6881 18.1133 10.8932C18.3009 11.0983 18.4062 11.3765 18.4062 11.6666V12.3958C18.4028 12.6847 18.2964 12.9607 18.1096 13.165C17.9228 13.3693 17.6704 13.4858 17.4062 13.4895Z"
              fill="#0870EB"
            />
            <path
              d="M17.5 30.625C14.9042 30.625 12.3665 29.8553 10.2081 28.413C8.04975 26.9709 6.36749 24.921 5.37409 22.5228C4.38069 20.1244 4.12077 17.4854 4.6272 14.9395C5.13362 12.3934 6.38366 10.0548 8.21922 8.21922C10.0548 6.38366 12.3934 5.13362 14.9395 4.6272C17.4854 4.12077 20.1244 4.38069 22.5228 5.37409C24.921 6.36749 26.9709 8.04975 28.413 10.2081C29.8553 12.3665 30.625 14.9042 30.625 17.5C30.625 20.981 29.2422 24.3193 26.7808 26.7808C24.3193 29.2422 20.981 30.625 17.5 30.625ZM17.5 6.5625C15.3367 6.5625 13.2221 7.20397 11.4235 8.4058C9.62479 9.60763 8.2229 11.3158 7.39508 13.3144C6.56724 15.3129 6.35065 17.5121 6.77266 19.6338C7.19469 21.7554 8.23639 23.7043 9.76602 25.234C11.2957 26.7636 13.2445 27.8053 15.3662 28.2274C17.4879 28.6494 19.6871 28.4328 21.6856 27.6049C23.6842 26.777 25.3924 25.3751 26.5942 23.5766C27.796 21.7779 28.4375 19.6633 28.4375 17.5C28.4375 14.5992 27.2851 11.8172 25.234 9.76602C23.1828 7.71484 20.4008 6.5625 17.5 6.5625Z"
              fill="#0870EB"
            />
          </svg>
        )}
      </div>
    );
  };

  return (
    <div>
      {variant === "attention" && (
        <div className="w-full py-4 mb-6 px-6 bg-[#141510] bg-opacity-95 rounded-[15px] border-2 border-[#343C14] backdrop-blur-[10px] justify-start items-center gap-1 inline-flex">
          <div className="flex items-center justify-end w-full">
            <div className="w-full">
              <Text variant="sm">
                {/* This is a really stupid way to change the color of the text elemet, as passing props as tailwind classes is really fcking annoying*/}
                <p className="text-[#9CA43C]">
                  <b>Attention:</b> {text}
                </p>
              </Text>
            </div>

            <div className=" flex justify-end">
              {/* The Icon component takes the variant of the box itself and changes accordingly */}
              <Icon></Icon>
            </div>
          </div>
        </div>
      )}
      {variant === "warning" && (
        <div className="w-full py-4 mb-6 px-6 bg-[#160D10] bg-opacity-95 rounded-[15px] border-2 border-[#4E1718] backdrop-blur-[10px] justify-start items-center gap-1 inline-flex">
          <div className="flex items-center justify-end w-full">
            <div className="w-full">
              <Text variant="sm">
                {/* This is a really stupid way to change the color of the text elemet, as passing props as tailwind classes is really fcking annoying*/}
                <p className="text-[#B12F13]">
                  <b>Warning:</b> {text}
                </p>
              </Text>
            </div>

            <div className=" flex justify-end">
              <Icon></Icon>
            </div>
          </div>
        </div>
      )}
      {variant === "note" && (
        <div className="w-full py-4 mb-6 px-6 bg-[#0C101C] bg-opacity-95 rounded-[15px] border-2 border-[#1A3E75]  backdrop-blur-[10px] justify-start items-center gap-1 inline-flex">
          <div className="flex items-center justify-end w-full">
            <div className="w-full">
              <Text variant="sm">
                {/* This is a really stupid way to change the color of the text elemet, as passing props as tailwind classes is really fcking annoying*/}
                <p className="text-[#0870EB]">
                  <b>Note:</b>
                  {text}
                </p>
              </Text>
            </div>

            <div className=" flex justify-end">
              <Icon></Icon>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttentionBox;
