import React from 'react';
import styles from './NewcomerTools.module.css';
import uniqid from 'uniqid';
import { PopularToolsList } from '../mostPopularTools/popularToolsList/PopularToolsList';

export const NewcomerTools = () => {
    const tools = [
        {
            id: uniqid(),
            icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.78">
            <path d="M12.6315 40.3366L9.70191 41.3886L9.54462 49.9552L19.6858 46.3136C16.2075 45.1652 13.6674 43.1445 12.6315 40.3366" fill="#FDBD39"/>
            <path d="M14.1646 31.2759L4 34.9259L9.70192 41.3885L12.6315 40.3366C11.5986 37.5368 12.2356 34.372 14.1646 31.2759" fill="#F69833"/>
            <path  d="M31.2698 18.9149C18.3262 23.5627 9.98147 33.1535 12.6315 40.3366L59.5046 23.5053C56.8546 16.3222 44.2135 14.267 31.2698 18.9149Z" fill="#FECF33"/>
            <path d="M40.8663 44.927C53.81 40.2791 62.1703 30.7308 59.5046 23.5052L12.6315 40.3365C15.2971 47.5622 27.9226 49.5748 40.8663 44.927Z" fill="#EE6723"/>
            <path d="M59.5046 23.5052L12.6315 40.3365C13.5493 42.8244 17.0494 44.0501 21.9605 44.0501C26.7483 44.0501 32.8772 42.886 39.2669 40.5916C52.2106 35.9437 61.3173 28.4186 59.5046 23.5052" fill="#F69833"/>
            <path d="M50.1756 19.7916C45.3877 19.7916 39.2589 20.9557 32.8692 23.2501C19.9255 27.898 10.8188 35.4231 12.6315 40.3365L59.5046 23.5052C58.5868 21.0173 55.0867 19.7916 50.1756 19.7916" fill="#FDBD39"/>
            <path d="M47.587 50.4088H47.5867C46.2076 50.4088 44.173 49.1843 41.5394 46.7694C38.4237 43.9124 34.8547 39.7278 31.4896 34.9866C28.1247 30.2455 25.3596 25.5055 23.7039 21.6397C21.9 17.427 21.6428 14.8367 22.9394 13.9408C23.2237 13.7446 23.5665 13.6452 23.958 13.6452C25.0127 13.6452 27.0679 14.4171 30.8682 18.0945L30.9513 18.1749L30.94 18.2892C30.914 18.5534 30.8901 18.8199 30.8688 19.0816L30.8264 19.6011L30.4536 19.2318C26.3589 15.177 24.5564 14.7392 23.9714 14.7392C23.8046 14.7392 23.6718 14.7726 23.5765 14.8384C23.0141 15.2268 22.9779 17.1294 24.7268 21.2132C26.353 25.0101 29.0778 29.6784 32.3993 34.3581C35.7209 39.0382 39.2353 43.161 42.2954 45.9669C45.5951 48.9925 47.0821 49.3192 47.5682 49.3192C47.7361 49.3192 47.8725 49.2838 47.9737 49.2138C48.567 48.8041 48.5677 46.7659 46.6173 42.3704L46.5278 42.1686L46.7238 42.0631C46.9198 41.9576 47.1094 41.8537 47.2872 41.7544L47.522 41.6232L47.6302 41.867C49.0132 44.9816 50.3059 48.9401 48.6108 50.1114C48.325 50.3087 47.9806 50.4088 47.587 50.4088V50.4088ZM47.5867 49.9283H47.587L47.5868 50.1685L47.5867 49.9283Z" fill="#EE6723"/>
            <path d="M41.1805 44.7959L41.1608 45.0353C40.8336 49.0154 39.9719 53.8003 37.7254 53.994C37.6802 53.998 37.6333 54 37.5865 54C36.0603 54 34.6165 51.8507 33.2951 47.6117C32.0449 43.6013 31.0748 38.2167 30.5634 32.4499C30.052 26.6843 30.0596 21.2154 30.585 17.0507C31.1575 12.5125 32.2476 10.1424 33.8248 10.0064C33.8714 10.0022 33.9197 10 33.9674 10C35.0745 10 36.7431 11.2322 38.4512 16.9717L37.3359 17.1833C36.7656 15.2653 36.144 13.7054 35.527 12.6335C34.9562 11.642 34.4013 11.096 33.9643 11.096C33.9499 11.096 33.9354 11.0966 33.9212 11.0978C33.2376 11.1568 32.242 12.7867 31.687 17.186C31.171 21.276 31.1648 26.663 31.6695 32.3546C32.1744 38.047 33.1287 43.3511 34.3565 47.2896C34.9064 49.0536 35.5095 50.5073 36.1007 51.4938C36.6458 52.4035 37.1734 52.9045 37.5861 52.9045C37.6003 52.9045 37.6145 52.9038 37.6286 52.9026C38.2827 52.8463 39.5153 51.1502 40.0341 45.1827L41.1805 44.7959" fill="#EE6723"/>
            </g>
            </svg>,
            title: 'Zeplin',
            paid: 'Free & Paid',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            liked: false,
            width: '48%',
        },
        {
            id: uniqid(),
            icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_138)">
            <path d="M36.2057 13.8971L33.1886 4.75429L10.88 0L0 12.3429L34.0114 29.7143L36.2057 13.8971Z" fill="url(#paint0_linear_1_138)"/>
            <path d="M25.6 37.8514L24.96 18.8343L0 12.3429L6.12571 49.0057L25.6 48.8229V37.8514Z" fill="url(#paint1_linear_1_138)"/>
            <path d="M20.2057 37.4858L21.3943 22.4L39.4971 3.84005L55.68 6.76576L64 27.52L55.3143 36.1143L41.1429 33.8286L32.3657 43.0629L20.2057 37.4858Z" fill="url(#paint2_linear_1_138)"/>
            <path d="M39.4972 3.84005L13.5315 26.88L18.56 56.5029L40.1372 64L64 49.7372L39.4972 3.84005Z" fill="url(#paint3_linear_1_138)"/>
            <path d="M12.2514 12.2514H51.7485V51.7486H12.2514V12.2514Z" fill="black"/>
            <path d="M16 44.3429H30.8114V46.8114H16V44.3429Z" fill="white"/>
            <path d="M15.817 17.3714H22.4913C26.4228 17.3714 28.7999 19.6571 28.7999 23.04V23.1314C28.7999 26.9714 25.8742 28.8914 22.1256 28.8914H19.3828V33.8286H15.817V17.3714ZM22.3085 25.6C24.137 25.6 25.1428 24.5029 25.1428 23.1314V23.04C25.1428 21.3943 24.0456 20.5714 22.217 20.5714H19.4742V25.6H22.3085Z" fill="white"/>
            <path d="M29.7143 31.4514L31.8171 28.8914C33.28 30.0799 34.8343 30.9028 36.7543 30.9028C38.2171 30.9028 39.1314 30.3542 39.1314 29.3485V29.2571C39.1314 28.3428 38.5828 27.8856 35.84 27.1542C32.5486 26.3314 30.3543 25.4171 30.3543 22.1256V22.0342C30.3543 19.0171 32.7314 17.0971 36.1143 17.0971C38.4914 17.0971 40.5943 17.8285 42.24 19.1999L40.32 21.9428C38.8571 20.9371 37.3943 20.2971 36.0228 20.2971C34.6514 20.2971 33.92 20.9371 33.92 21.7599V21.8514C33.92 22.9485 34.6514 23.3142 37.4857 24.0456C40.7771 24.9599 42.6971 26.1485 42.6971 28.9828V29.0742C42.6971 32.3656 40.2285 34.1942 36.6628 34.1942C34.1943 34.1028 31.7257 33.1885 29.7143 31.4514Z" fill="white"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_1_138" x1="0.510171" y1="42.8306" x2="27.3801" y2="7.33806" gradientUnits="userSpaceOnUse">
            <stop offset="0.016" stop-color="#765AF8"/>
            <stop offset="0.382" stop-color="#B345F1"/>
            <stop offset="0.758" stop-color="#FA3293"/>
            <stop offset="0.941" stop-color="#FF318C"/>
            </linearGradient>
            <linearGradient id="paint1_linear_1_138" x1="2.496" y1="44.2322" x2="29.323" y2="8.79634" gradientUnits="userSpaceOnUse">
            <stop offset="0.016" stop-color="#765AF8"/>
            <stop offset="0.382" stop-color="#B345F1"/>
            <stop offset="0.758" stop-color="#FA3293"/>
            <stop offset="0.941" stop-color="#FF318C"/>
            </linearGradient>
            <linearGradient id="paint2_linear_1_138" x1="46.4978" y1="42.4275" x2="31.3362" y2="6.44394" gradientUnits="userSpaceOnUse">
            <stop offset="0.183" stop-color="#765AF8"/>
            <stop offset="0.238" stop-color="#8655F6"/>
            <stop offset="0.345" stop-color="#9F4CF3"/>
            <stop offset="0.443" stop-color="#AE47F2"/>
            <stop offset="0.522" stop-color="#B345F1"/>
            </linearGradient>
            <linearGradient id="paint3_linear_1_138" x1="57.8432" y1="52.4243" x2="22.5811" y2="25.1575" gradientUnits="userSpaceOnUse">
            <stop offset="0.016" stop-color="#765AF8"/>
            <stop offset="0.382" stop-color="#B345F1"/>
            </linearGradient>
            <clipPath id="clip0_1_138">
            <rect width="64" height="64" fill="white"/>
            </clipPath>
            </defs>
            </svg>,
            title: 'PHPStorm',
            paid: 'Free',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            liked: false,
            width: '48%'
        },
        {
            id: uniqid(),
            icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.78" clip-path="url(#clip0_1_107)">
            <path d="M32 64.152L60 48.13V16.114L32 32.134V64.152Z" fill="#000001"/>
            <path d="M38 49.1112V54L50 46.8888V42L38 49.1112Z" fill="white"/>
            <path d="M32 0.151978L4 16.114V48.13L32 64.152V32.134L60 16.114L32 0.151978Z" fill="url(#paint0_linear_1_107)"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_1_107" x1="4.36" y1="46.51" x2="60.082" y2="17.564" gradientUnits="userSpaceOnUse">
            <stop offset="0.043" stop-color="#FF8618"/>
            <stop offset="0.382" stop-color="#FF246E"/>
            <stop offset="0.989" stop-color="#AF1DF5"/>
            </linearGradient>
            <clipPath id="clip0_1_107">
            <rect width="64" height="64" fill="white"/>
            </clipPath>
            </defs>
            </svg>,
            title: 'Toolbox',
            paid: 'Free',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            liked: false,
            width: '48%'
        },
        {
            id: uniqid(),
            icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.78">
            <path d="M4 24.2667C4 17.1727 4 13.6257 5.38058 10.9161C6.59498 8.53273 8.53273 6.59498 10.9161 5.38058C13.6257 4 17.1727 4 24.2667 4H39.7333C46.8273 4 50.3743 4 53.0839 5.38058C55.4673 6.59498 57.405 8.53273 58.6194 10.9161C60 13.6257 60 17.1727 60 24.2667V39.7333C60 46.8273 60 50.3743 58.6194 53.0839C57.405 55.4673 55.4673 57.405 53.0839 58.6194C50.3743 60 46.8273 60 39.7333 60H24.2667C17.1727 60 13.6257 60 10.9161 58.6194C8.53273 57.405 6.59498 55.4673 5.38058 53.0839C4 50.3743 4 46.8273 4 39.7333V24.2667Z" fill="#1E252B"/>
            <path d="M19.7334 32.8C11.9334 38.5408 10.4 46.9334 10.4 53.9334C10.7556 51.8445 12.3867 46.9467 16.0667 44.0667C21.5334 39.7884 31.5333 41.1978 42.4667 33.9334C53.4001 26.6689 54.4667 17.2 53.0667 9.93335C52.094 16.9451 48.7744 20.001 44.2 22.7334C34.2668 28.6667 28.0668 26.6667 19.7334 32.8Z" fill="url(#paint0_linear_1_171)"/>
            <path d="M19.7334 32.8C11.9334 38.5408 10.4 46.9334 10.4 53.9334C10.7556 51.8445 12.3867 46.9467 16.0667 44.0667C21.5334 39.7884 31.5333 41.1978 42.4667 33.9334C53.4001 26.6689 54.4667 17.2 53.0667 9.93335C52.094 16.9451 48.7744 20.001 44.2 22.7334C34.2668 28.6667 28.0668 26.6667 19.7334 32.8Z" fill="url(#paint1_linear_1_171)"/>
            <path d="M10.4933 51.0639C10.9213 44.739 12.975 37.774 19.7333 32.8C24.0777 29.6025 27.8422 28.6155 31.8582 27.5626C34.2018 26.9482 36.6311 26.3113 39.3112 25.1995C38.3334 26.1333 33.6871 28.3133 30.1825 29.7699C26.6871 31.2227 23.0018 32.7543 19.9334 34.8C13.777 38.9042 11.2737 46.045 10.4933 51.0639Z" fill="url(#paint2_linear_1_171)"/>
            <path d="M10.4933 51.0639C10.9213 44.739 12.975 37.774 19.7333 32.8C24.0777 29.6025 27.8422 28.6155 31.8582 27.5626C34.2018 26.9482 36.6311 26.3113 39.3112 25.1995C38.3334 26.1333 33.6871 28.3133 30.1825 29.7699C26.6871 31.2227 23.0018 32.7543 19.9334 34.8C13.777 38.9042 11.2737 46.045 10.4933 51.0639Z" fill="url(#paint3_linear_1_171)"/>
            <path d="M48.4355 28.7418C47.6689 29.4927 46.8141 30.1649 45.8668 30.7333C41.6001 33.2934 37.065 34.1189 32.6522 34.9223C29.1357 35.5624 25.6969 36.1884 22.5334 37.6667C15.4006 40.9998 11.0007 47.9324 10.4002 53.9322C10.4002 53.9324 10.4001 53.9327 10.4001 53.9329C10.4001 53.9318 10.4 53.9308 10.4 53.9297C10.4001 53.4717 10.4067 53.0078 10.4212 52.539C10.4575 51.7953 10.5344 50.9713 10.6616 50.0926C11.6033 45.1584 14.1644 38.646 19.9334 34.8C22.3756 33.1719 25.2084 31.8693 28.0254 30.673C30.5027 29.8597 32.7354 29.3535 34.8626 28.8712C38.2111 28.1121 41.2983 27.4122 44.6668 25.6667C51.7349 22.0041 53.5868 14.4776 53.089 10.0503C54.1458 15.6601 53.7186 22.5598 48.4355 28.7418Z" fill="url(#paint4_linear_1_171)"/>
            <path d="M48.4353 28.7419C47.6687 29.4928 46.814 30.165 45.8668 30.7334C41.6001 33.2934 37.065 34.119 32.6521 34.9223C29.1357 35.5624 25.6969 36.1884 22.5334 37.6667C18.4313 39.5836 15.2331 42.691 13.1416 46.1268C14.987 43.5337 17.7983 40.637 21.2667 39.5334C24.6512 38.4565 27.8795 38.3452 31.2334 38.2296C32.1946 38.1965 33.1662 38.163 34.1547 38.1063C36.8189 37.1365 39.6109 35.8308 42.4666 33.9334C44.9282 32.2979 46.8896 30.5506 48.4353 28.7419Z" fill="url(#paint5_linear_1_171)"/>
            <path d="M48.4353 28.7419C47.6687 29.4928 46.814 30.165 45.8668 30.7334C41.6001 33.2934 37.065 34.119 32.6521 34.9223C29.1357 35.5624 25.6969 36.1884 22.5334 37.6667C18.4313 39.5836 15.2331 42.691 13.1416 46.1268C14.987 43.5337 17.7983 40.637 21.2667 39.5334C24.6512 38.4565 27.8795 38.3452 31.2334 38.2296C32.1946 38.1965 33.1662 38.163 34.1547 38.1063C36.8189 37.1365 39.6109 35.8308 42.4666 33.9334C44.9282 32.2979 46.8896 30.5506 48.4353 28.7419Z" fill="url(#paint6_linear_1_171)"/>
            <path d="M53.0889 10.0503C53.0816 10.0112 53.0741 9.97227 53.0666 9.93335C52.0939 16.9451 48.7744 20.001 44.2 22.7334C42.4671 23.7684 40.8479 24.5621 39.3111 25.1996C38.3331 26.1335 33.687 28.3134 30.1825 29.7699L30.1819 29.7701C29.4687 30.0666 28.7476 30.3663 28.0254 30.673C30.5027 29.8597 32.7353 29.3535 34.8625 28.8712C38.2111 28.1121 41.2982 27.4122 44.6667 25.6667C51.7349 22.0041 53.5867 14.4776 53.0889 10.0503Z" fill="url(#paint7_linear_1_171)"/>
            <path d="M53.0889 10.0503C53.0816 10.0112 53.0741 9.97227 53.0666 9.93335C52.0939 16.9451 48.7744 20.001 44.2 22.7334C42.4671 23.7684 40.8479 24.5621 39.3111 25.1996C38.3331 26.1335 33.687 28.3134 30.1825 29.7699L30.1819 29.7701C29.4687 30.0666 28.7476 30.3663 28.0254 30.673C30.5027 29.8597 32.7353 29.3535 34.8625 28.8712C38.2111 28.1121 41.2982 27.4122 44.6667 25.6667C51.7349 22.0041 53.5867 14.4776 53.0889 10.0503Z" fill="url(#paint8_linear_1_171)"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_1_171" x1="34.8" y1="36.4" x2="11.7334" y2="52.9333" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FE5004"/>
            <stop offset="0.602538" stop-color="#FFB915"/>
            <stop offset="1" stop-color="#FFFC41"/>
            </linearGradient>
            <linearGradient id="paint1_linear_1_171" x1="25.6667" y1="37.8" x2="25.8" y2="40.2" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FD3E00"/>
            <stop offset="1" stop-color="#FD4400" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_1_171" x1="39.3333" y1="24" x2="6.79999" y2="52.9333" gradientUnits="userSpaceOnUse">
            <stop stop-color="#005FC6"/>
            <stop offset="0.279756" stop-color="#23A4DF"/>
            <stop offset="0.465158" stop-color="#3AC2B7"/>
            <stop offset="0.640642" stop-color="#60EC7A"/>
            <stop offset="0.818668" stop-color="#CFFDBD"/>
            <stop offset="1" stop-color="#D0FCB6"/>
            </linearGradient>
            <linearGradient id="paint3_linear_1_171" x1="32.7333" y1="29.5333" x2="29.9333" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0061CB"/>
            <stop offset="1" stop-color="#067EEA" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint4_linear_1_171" x1="53.2" y1="10" x2="10.4" y2="53.8667" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8E55F1"/>
            <stop offset="0.140795" stop-color="#8B48DF"/>
            <stop offset="0.274905" stop-color="#E04DD9"/>
            <stop offset="0.492309" stop-color="#F496C8"/>
            <stop offset="0.633104" stop-color="#FAD2BA"/>
            <stop offset="0.856964" stop-color="#FEF7E5"/>
            <stop offset="1" stop-color="#FFF5BF"/>
            </linearGradient>
            <linearGradient id="paint5_linear_1_171" x1="49" y1="28.3334" x2="14.0666" y2="44.1334" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F41A73"/>
            <stop offset="0.399909" stop-color="#FC50A3"/>
            <stop offset="0.584511" stop-color="#FE9485"/>
            <stop offset="0.703104" stop-color="#FFAF88"/>
            <stop offset="1" stop-color="#FFC385"/>
            </linearGradient>
            <linearGradient id="paint6_linear_1_171" x1="36.4" y1="33.2" x2="36.4666" y2="36.4" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9B0008"/>
            <stop offset="1" stop-color="#EA115A" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint7_linear_1_171" x1="53.2" y1="13.6" x2="21.6666" y2="34.2" gradientUnits="userSpaceOnUse">
            <stop stop-color="#231283"/>
            <stop offset="0.362865" stop-color="#7053C6"/>
            <stop offset="0.466353" stop-color="#7272DB"/>
            <stop offset="0.634311" stop-color="#399EE9"/>
            <stop offset="1" stop-color="#00CFFF"/>
            </linearGradient>
            <linearGradient id="paint8_linear_1_171" x1="45.3333" y1="24" x2="46.7333" y2="25.8" gradientUnits="userSpaceOnUse">
            <stop stop-color="#3F259D" stop-opacity="0"/>
            <stop offset="1" stop-color="#412DAA"/>
            </linearGradient>
            </defs>
            </svg>,
            title: 'Procreate',
            paid: 'Free',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            liked: false,
            width: '48%'
        },
    ]

  return (
    <section className={styles.newcomerTools__container}>
        <article className={styles.exploreMore__container}>
            <div className={styles.exploreMore}>
                <h2 className={styles.eploreMore__title}>Newcomer Tools</h2>
                <div className={styles.exploreMore__content}>
                    Wow! see the latest update of the most recommended tools from reliable designers and developers
                </div>
                <button className={styles.exploreMore__button}>Explore more</button>
            </div>
        </article>

        <div className={styles.tools__container}>
            <div className={styles.newcomerTools}>
                <PopularToolsList tools={tools} />
            </div>
        </div>
    </section>
  )
};
