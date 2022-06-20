import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'logo',
    template: `

<div class="logo">
        
  <svg [attr.fill]="fillColor" class="fill1" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.131 0.34791H8.74432C8.74432 0.34791 8.65637 0.33565 8.5625 0.414545C8.47782 0.485531 8.48936 0.59646 8.48936 0.59646V3.27811C8.48936 3.52271 8.22603 3.68396 7.99773 3.57906L5.10922 2.25316C4.80666 2.11426 4.6138 1.81904 4.6138 1.49486V0.59646C4.6138 0.459135 4.49879 0.34791 4.35701 0.34791H1.21578C1.074 0.34791 0.958984 0.459135 0.958984 0.59646V2.65753V2.9303H0.978494C1.06471 3.53714 1.43519 4.07844 1.9923 4.38977L10.7825 9.30185C11.496 9.70048 12.3878 9.20219 12.3878 8.40473V0.59646C12.3878 0.59646 12.3977 0.471691 12.3211 0.403671C12.2453 0.336442 12.131 0.34791 12.131 0.34791Z" />
</svg>

<svg [attr.fill]="fillColor" class="fill2" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.6807 11.4438H17.8416H17.0981H9.5903H5.20002C4.87632 11.4438 4.6138 11.1897 4.6138 10.8763V8.48747C4.6138 8.16338 4.80666 7.86817 5.10932 7.72926L7.99773 6.40326C8.22603 6.29846 8.48936 6.45962 8.48936 6.70431V9.37796C8.48936 9.51518 8.60428 9.62641 8.74616 9.62641H12.131C12.2729 9.62641 12.3878 9.51518 12.3878 9.37796V1.57769C12.3878 0.780234 11.496 0.281849 10.7825 0.680676L1.9923 5.59266C1.35286 5.95006 0.958984 6.61029 0.958984 7.3249V13.9769C0.958984 14.2871 1.21885 14.5386 1.53928 14.5386H7.90304C7.93174 14.5386 7.95963 14.5413 7.98721 14.545H9.5903H17.0981H18.2257C18.2477 14.5418 18.2697 14.5385 18.2926 14.5385H21.2661C21.5152 14.5385 21.7172 14.7339 21.7172 14.9751V17.4981C21.7172 17.8203 21.5255 18.1136 21.2247 18.2517L18.3574 19.5679C18.1178 19.678 17.8416 19.5088 17.8416 19.2522V16.5963C17.8416 16.5963 17.8483 16.5055 17.7717 16.4237C17.698 16.345 17.5821 16.3465 17.5821 16.3465H14.1999C14.1999 16.3465 14.0774 16.3417 14.0034 16.419C13.9384 16.487 13.9432 16.5963 13.9432 16.5963V24.4046C13.9432 25.202 14.835 25.7004 15.5484 25.3017L24.3387 20.3896C24.978 20.0323 25.3719 19.372 25.3719 18.6574V12.1128C25.3719 11.7433 25.0625 11.4438 24.6807 11.4438Z" />
</svg>

<svg [attr.fill]="fillColor" class="fill3" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3371 5.5927L2.54685 0.68062C1.83346 0.281892 0.941615 0.780278 0.941615 1.57773V9.3779C0.941615 9.3779 0.933239 9.46866 1.02262 9.55714C1.09279 9.62665 1.19831 9.62645 1.19831 9.62645H4.58326C4.58326 9.62645 4.69245 9.62764 4.76906 9.54528C4.84353 9.4652 4.84005 9.378 4.84005 9.378V6.73016C4.84005 6.4735 5.11626 6.30444 5.35579 6.41438L12.0607 9.49239C12.2045 9.55843 12.3703 9.45689 12.3703 9.30286V7.32494C12.3703 6.61033 11.9766 5.95 11.3371 5.5927Z"/>
</svg>

<svg [attr.stroke]="fillColor" class="polygon" width="38" height="42" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3769 1.63857L35.6719 10.3136C36.4256 10.7411 36.8907 11.5359 36.8907 12.3966V29.7106C36.8907 30.5712 36.4256 31.366 35.6719 31.7935L20.3769 40.4686C19.6316 40.8913 18.7161 40.8913 17.9709 40.4686L2.67585 31.7935C1.92208 31.366 1.45703 30.5712 1.45703 29.7106V12.3966C1.45703 11.5359 1.92208 10.7411 2.67585 10.3136L17.9709 1.63857C18.7161 1.21586 19.6316 1.21586 20.3769 1.63857Z" stroke-width="1.8"/>
</svg>

<svg [attr.fill]="fillColor" class="logo-text" width="136" height="29" viewBox="0 0 136 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49538 22.8933C5.97271 22.8933 4.64843 22.6833 3.52251 22.2633C2.39659 21.8433 1.52803 21.2509 0.916817 20.4862C0.305602 19.7215 0 18.8438 0 17.8529V17.6914C0 17.5191 0.0536161 17.379 0.160847 17.2713C0.268077 17.1636 0.407475 17.1098 0.579044 17.1098H4.53584C4.92187 17.1098 5.11488 17.1744 5.11488 17.3037V17.4975C5.11488 17.9068 5.3347 18.246 5.77434 18.5153C6.21399 18.7845 6.77694 18.9192 7.46321 18.9192C8.06371 18.9192 8.54624 18.8169 8.91082 18.6122C9.27541 18.4076 9.4577 18.133 9.4577 17.7883C9.4577 17.4437 9.26468 17.1906 8.87865 17.029C8.49262 16.8675 7.88142 16.7113 7.04502 16.5605C5.69391 16.302 4.60018 15.9897 3.76378 15.6235C2.69147 15.1712 1.82828 14.6004 1.17417 13.9111C0.520064 13.2218 0.193016 12.2956 0.193016 11.1324C0.193016 9.45224 0.841749 8.12214 2.13924 7.14205C3.43673 6.16197 5.14704 5.67193 7.2702 5.67193C8.70709 5.67193 9.96703 5.90349 11.0501 6.36661C12.1331 6.82972 12.9748 7.48131 13.5753 8.32138C14.1758 9.16145 14.4761 10.1308 14.4761 11.2293C14.4761 11.337 14.4225 11.4286 14.3152 11.504C14.208 11.5793 14.0686 11.617 13.897 11.617H10.0689C9.68288 11.617 9.48986 11.5524 9.48986 11.4232V11.2293C9.48986 10.82 9.29685 10.4862 8.91082 10.2277C8.52479 9.96921 7.99937 9.83997 7.33454 9.83997C6.73405 9.83997 6.24616 9.94228 5.87085 10.1469C5.49554 10.3515 5.30789 10.637 5.30789 11.0031C5.30789 11.3693 5.51163 11.6332 5.9191 11.7947C6.32658 11.9563 7.01284 12.134 7.97792 12.3279C9.28613 12.5863 10.1654 12.791 10.6158 12.9418C11.924 13.3726 12.948 13.9541 13.6879 14.6865C14.4278 15.4189 14.7978 16.399 14.7978 17.6268C14.7978 19.3069 14.1383 20.6047 12.8194 21.5202C11.5004 22.4356 9.72578 22.8933 7.49538 22.8933ZM23.4968 5.67193C24.9123 5.67193 26.199 5.91426 27.3571 6.39892C28.5152 6.88357 29.4267 7.55131 30.0915 8.40216C30.7563 9.253 31.0887 10.1954 31.0887 11.2293V22.0533C31.0887 22.2256 31.0351 22.3656 30.9279 22.4733C30.8207 22.581 30.6813 22.6349 30.5097 22.6349H26.3277C26.1562 22.6349 26.0168 22.581 25.9095 22.4733C25.8023 22.3656 25.7487 22.2256 25.7487 22.0533V21.4071C25.7487 21.2994 25.7219 21.2347 25.6683 21.2132C25.6146 21.1917 25.5557 21.224 25.4913 21.3101C24.6335 22.3656 23.2502 22.8933 21.3415 22.8933C19.6473 22.8933 18.2962 22.4895 17.2882 21.6817C16.2803 20.8739 15.7763 19.6839 15.7763 18.1114C15.7763 16.4528 16.35 15.1712 17.4973 14.2665C18.6447 13.3618 20.3014 12.9095 22.4674 12.9095H25.5235C25.6736 12.9095 25.7487 12.8341 25.7487 12.6833V12.134C25.7487 11.5524 25.561 11.0947 25.1857 10.7608C24.8104 10.4269 24.2796 10.26 23.5934 10.26C23.1001 10.26 22.6765 10.3408 22.3227 10.5023C21.9688 10.6639 21.7168 10.8847 21.5667 11.1647C21.4595 11.3155 21.3576 11.4286 21.2611 11.504C21.1646 11.5793 21.0413 11.6063 20.8912 11.5847L16.5805 11.0354C16.1945 10.9924 16.0229 10.8416 16.0658 10.5831C16.173 9.65687 16.5591 8.8222 17.2239 8.07905C17.8887 7.33591 18.7626 6.74895 19.8457 6.31814C20.9287 5.88733 22.1457 5.67193 23.4968 5.67193ZM22.95 19.0484C23.7649 19.0484 24.4351 18.8384 24.9605 18.4184C25.486 17.9983 25.7487 17.4437 25.7487 16.7544V16.0436C25.7487 15.8928 25.6736 15.8174 25.5235 15.8174H23.6577C22.8427 15.8174 22.2155 15.9574 21.7758 16.2374C21.3362 16.5174 21.1163 16.9375 21.1163 17.4975C21.1163 17.9714 21.2772 18.3484 21.5989 18.6284C21.9206 18.9084 22.3709 19.0484 22.95 19.0484ZM42.372 5.89811C42.5436 5.89811 42.683 5.95196 42.7902 6.05966C42.8975 6.16736 42.9511 6.30737 42.9511 6.47969V9.71073C42.9511 9.88305 42.8975 10.0231 42.7902 10.1308C42.683 10.2385 42.5436 10.2923 42.372 10.2923H39.6055C39.4554 10.2923 39.3803 10.3677 39.3803 10.5185V22.0533C39.3803 22.2256 39.3267 22.3656 39.2195 22.4733C39.1122 22.581 38.9728 22.6349 38.8013 22.6349H34.6193C34.4477 22.6349 34.3083 22.581 34.2011 22.4733C34.0939 22.3656 34.0403 22.2256 34.0403 22.0533V10.5185C34.0403 10.3677 33.9652 10.2923 33.8151 10.2923H32.271C32.0994 10.2923 31.96 10.2385 31.8528 10.1308C31.7455 10.0231 31.6919 9.88305 31.6919 9.71073V6.47969C31.6919 6.30737 31.7455 6.16736 31.8528 6.05966C31.96 5.95196 32.0994 5.89811 32.271 5.89811H33.8151C33.9652 5.89811 34.0403 5.82272 34.0403 5.67193V4.86417C34.0403 3.5933 34.2654 2.59707 34.7158 1.87547C35.1662 1.15387 35.8846 0.647677 36.8711 0.356883C37.8576 0.0660882 39.198 -0.046997 40.8923 0.0176241H42.0182C42.1897 0.0176241 42.3291 0.0714743 42.4364 0.179176C42.5436 0.286878 42.5972 0.426888 42.5972 0.59921V3.15173C42.5972 3.32405 42.5436 3.46406 42.4364 3.57176C42.3291 3.67946 42.1897 3.73331 42.0182 3.73331H40.9566C40.3776 3.77639 39.9701 3.9164 39.7342 4.15335C39.4983 4.39029 39.3803 4.78878 39.3803 5.34883V5.67193C39.3803 5.82272 39.4554 5.89811 39.6055 5.89811H42.372ZM51.6608 18.3376C52.3257 18.3376 52.9422 18.2353 53.5106 18.0306C54.0789 17.826 54.556 17.5514 54.9421 17.2067C55.0708 17.0559 55.2102 16.9806 55.3603 16.9806C55.489 16.9806 55.6176 17.0559 55.7463 17.2067L57.7408 19.5977C57.8695 19.7485 57.9338 19.8885 57.9338 20.0177C57.9338 20.1685 57.8695 20.3085 57.7408 20.4378C57.0116 21.2132 56.0894 21.8163 54.9743 22.2471C53.8591 22.6779 52.6688 22.8933 51.4035 22.8933C49.9452 22.8933 48.653 22.6295 47.5271 22.1017C46.4012 21.574 45.4737 20.8363 44.7445 19.8885C43.565 18.3807 42.9752 16.4636 42.9752 14.1372C42.9752 13.1033 43.0932 12.134 43.3291 11.2293C43.8009 9.54917 44.723 8.19753 46.0956 7.17437C47.4681 6.1512 49.0766 5.63962 50.921 5.63962C53.0656 5.63962 54.7973 6.30736 56.1162 7.64286C57.4352 8.97837 58.2984 10.8416 58.7059 13.2326C58.7916 13.8357 58.856 14.4927 58.8989 15.2035C58.8989 15.5912 58.7059 15.7851 58.3198 15.7851H48.6048C48.5404 15.7851 48.4815 15.8066 48.4278 15.8497C48.3742 15.8928 48.3582 15.9574 48.3796 16.0436L48.5726 16.6898C48.7871 17.2067 49.1624 17.6106 49.6985 17.9014C50.2347 18.1922 50.8888 18.3376 51.6608 18.3376ZM50.8244 10.26C49.7307 10.26 48.9908 10.7877 48.6048 11.8432C48.519 12.0586 48.4654 12.2202 48.4439 12.3279V12.3925C48.4439 12.5217 48.519 12.5863 48.6691 12.5863H53.0763C53.1621 12.5863 53.221 12.5594 53.2532 12.5056C53.2854 12.4517 53.2907 12.3925 53.2693 12.3279L53.1406 11.9078C52.969 11.3909 52.6903 10.987 52.3042 10.6962C51.9182 10.4054 51.4249 10.26 50.8244 10.26ZM70.15 6.512C70.15 6.33968 70.2036 6.19967 70.3108 6.09197C70.4181 5.98427 70.5575 5.93042 70.729 5.93042H74.911C75.0826 5.93042 75.222 5.98427 75.3292 6.09197C75.4364 6.19967 75.4901 6.33968 75.4901 6.512V20.7609C75.4901 23.7119 74.6376 25.8228 72.9326 27.0937C71.2276 28.3646 69.0884 29 66.5149 29C65.6999 29 64.7456 28.9246 63.6518 28.7738C63.2873 28.7092 63.1157 28.4938 63.1371 28.1276L63.298 24.5412C63.3194 24.1319 63.5446 23.9596 63.9735 24.0242C64.8314 24.1965 65.582 24.2827 66.2254 24.2827C67.4478 24.2827 68.4075 24.0027 69.1045 23.4426C69.8015 22.8826 70.15 21.9994 70.15 20.7932L69.7961 21.1163C69.0455 21.8271 67.9732 22.1825 66.5792 22.1825C65.1638 22.1825 63.8663 21.8702 62.6868 21.2455C61.5072 20.6208 60.6601 19.5223 60.1454 17.9499C59.8023 16.9159 59.6307 15.6451 59.6307 14.1372C59.6307 12.4786 59.8345 11.1216 60.2419 10.0661C60.7352 8.73064 61.5233 7.66441 62.6064 6.86742C63.6894 6.07042 64.9493 5.67193 66.3862 5.67193C67.8874 5.67193 69.0562 6.1135 69.8926 6.99666C69.957 7.08282 70.0159 7.11513 70.0696 7.09359C70.1232 7.07205 70.15 7.00743 70.15 6.89973V6.512ZM69.8605 16.5282C70.0535 16.0328 70.15 15.225 70.15 14.1049C70.15 13.5233 70.1285 13.0656 70.0857 12.7317C70.0428 12.3979 69.957 12.0802 69.8283 11.7786C69.6567 11.3047 69.3833 10.9331 69.008 10.6639C68.6327 10.3946 68.177 10.26 67.6408 10.26C66.6328 10.26 65.9144 10.7662 65.4855 11.7786C65.1638 12.3817 65.0029 13.1787 65.0029 14.1696C65.0029 15.225 65.1423 16.0005 65.4211 16.4959C65.6142 16.9482 65.9037 17.3144 66.2897 17.5944C66.6757 17.8745 67.1368 18.0145 67.673 18.0145C68.7667 18.0145 69.4959 17.5191 69.8605 16.5282ZM86.5973 6.52859C86.5973 6.35627 86.6509 6.21626 86.7581 6.10856C86.8653 6.00086 87.0047 5.94701 87.1763 5.94701H91.3583C91.5299 5.94701 91.6693 6.00086 91.7765 6.10856C91.8837 6.21626 91.9373 6.35627 91.9373 6.52859V22.0699C91.9373 22.2422 91.8837 22.3822 91.7765 22.4899C91.6693 22.5976 91.5299 22.6515 91.3583 22.6515H87.1763C87.0047 22.6515 86.8653 22.5976 86.7581 22.4899C86.6509 22.3822 86.5973 22.2422 86.5973 22.0699V21.2621C86.5973 21.1544 86.5705 21.0898 86.5168 21.0682C86.4632 21.0467 86.4043 21.079 86.3399 21.1652C85.4392 22.3284 84.1095 22.9099 82.351 22.9099C80.721 22.9099 79.4021 22.393 78.3942 21.359C77.3862 20.3251 76.8822 18.8819 76.8822 17.0295V6.52859C76.8822 6.35627 76.9358 6.21626 77.0431 6.10856C77.1503 6.00086 77.2897 5.94701 77.4613 5.94701H81.6432C81.8148 5.94701 81.9542 6.00086 82.0614 6.10856C82.1687 6.21626 82.2223 6.35627 82.2223 6.52859V15.8017C82.2223 16.5556 82.4153 17.1587 82.8013 17.611C83.1874 18.0634 83.7128 18.2896 84.3776 18.2896C84.9781 18.2896 85.4767 18.1065 85.8735 17.7403C86.2702 17.3741 86.5115 16.8894 86.5973 16.2863V6.52859ZM100.791 5.67193C102.206 5.67193 103.493 5.91426 104.651 6.39892C105.809 6.88357 106.721 7.55131 107.386 8.40216C108.05 9.253 108.383 10.1954 108.383 11.2293V22.0533C108.383 22.2256 108.329 22.3656 108.222 22.4733C108.115 22.581 107.975 22.6349 107.804 22.6349H103.622C103.45 22.6349 103.311 22.581 103.204 22.4733C103.096 22.3656 103.043 22.2256 103.043 22.0533V21.4071C103.043 21.2994 103.016 21.2347 102.962 21.2132C102.909 21.1917 102.85 21.224 102.785 21.3101C101.928 22.3656 100.544 22.8933 98.6357 22.8933C96.9414 22.8933 95.5903 22.4895 94.5824 21.6817C93.5744 20.8739 93.0704 19.6839 93.0704 18.1114C93.0704 16.4528 93.6441 15.1712 94.7915 14.2665C95.9388 13.3618 97.5955 12.9095 99.7616 12.9095H102.818C102.968 12.9095 103.043 12.8341 103.043 12.6833V12.134C103.043 11.5524 102.855 11.0947 102.48 10.7608C102.105 10.4269 101.574 10.26 100.887 10.26C100.394 10.26 99.9707 10.3408 99.6168 10.5023C99.263 10.6639 99.011 10.8847 98.8609 11.1647C98.7536 11.3155 98.6518 11.4286 98.5553 11.504C98.4587 11.5793 98.3354 11.6063 98.1853 11.5847L93.8746 11.0354C93.4886 10.9924 93.317 10.8416 93.3599 10.5831C93.4672 9.65687 93.8532 8.8222 94.518 8.07905C95.1829 7.33591 96.0568 6.74895 97.1398 6.31814C98.2228 5.88733 99.4399 5.67193 100.791 5.67193ZM100.244 19.0484C101.059 19.0484 101.729 18.8384 102.255 18.4184C102.78 17.9983 103.043 17.4437 103.043 16.7544V16.0436C103.043 15.8928 102.968 15.8174 102.818 15.8174H100.952C100.137 15.8174 99.5096 15.9574 99.0699 16.2374C98.6303 16.5174 98.4105 16.9375 98.4105 17.4975C98.4105 17.9714 98.5713 18.3484 98.893 18.6284C99.2147 18.9084 99.6651 19.0484 100.244 19.0484ZM118.197 5.70424C118.883 5.70424 119.441 5.82271 119.87 6.05966C120.149 6.21044 120.256 6.44738 120.192 6.77048L119.484 10.9062C119.462 11.1862 119.323 11.3262 119.066 11.3262C118.958 11.3262 118.873 11.3155 118.808 11.2939C118.551 11.2293 118.229 11.197 117.843 11.197C117.5 11.197 117.243 11.2185 117.071 11.2616C116.406 11.3478 115.843 11.6063 115.382 12.0371C114.921 12.4679 114.691 13.0387 114.691 13.7495V22.0533C114.691 22.2256 114.637 22.3656 114.53 22.4733C114.423 22.581 114.283 22.6349 114.112 22.6349H109.93C109.758 22.6349 109.619 22.581 109.511 22.4733C109.404 22.3656 109.351 22.2256 109.351 22.0533V6.512C109.351 6.33968 109.404 6.19967 109.511 6.09197C109.619 5.98427 109.758 5.93042 109.93 5.93042H114.112C114.283 5.93042 114.423 5.98427 114.53 6.09197C114.637 6.19967 114.691 6.33968 114.691 6.512V7.22283C114.691 7.33053 114.717 7.39515 114.771 7.41669C114.825 7.43823 114.873 7.40592 114.916 7.31976C115.774 6.24274 116.867 5.70424 118.197 5.70424ZM130.66 0.59921C130.66 0.426888 130.714 0.286878 130.821 0.179176C130.928 0.0714743 131.067 0.0176241 131.239 0.0176241H135.421C135.593 0.0176241 135.732 0.0714743 135.839 0.179176C135.946 0.286878 136 0.426888 136 0.59921V22.0533C136 22.2256 135.946 22.3656 135.839 22.4733C135.732 22.581 135.593 22.6349 135.421 22.6349H131.239C131.067 22.6349 130.928 22.581 130.821 22.4733C130.714 22.3656 130.66 22.2256 130.66 22.0533V21.2778C130.66 21.1701 130.633 21.1055 130.58 21.084C130.526 21.0624 130.467 21.0947 130.403 21.1809C129.588 22.3225 128.365 22.8933 126.735 22.8933C125.341 22.8933 124.055 22.4302 122.875 21.504C121.695 20.5778 120.891 19.3823 120.462 17.9176C120.119 16.8621 119.948 15.6235 119.948 14.2019C119.948 12.6725 120.173 11.3155 120.623 10.1308C121.116 8.79526 121.915 7.71287 123.02 6.88357C124.124 6.05427 125.363 5.63962 126.735 5.63962C128.365 5.63962 129.588 6.13504 130.403 7.1259C130.467 7.21206 130.526 7.24437 130.58 7.22283C130.633 7.20129 130.66 7.13667 130.66 7.02897V0.59921ZM130.081 16.9482C130.445 16.259 130.628 15.3758 130.628 14.2988C130.628 13.1141 130.435 12.1663 130.049 11.4555C129.598 10.7231 128.976 10.3569 128.183 10.3569C127.347 10.3569 126.703 10.7339 126.253 11.4878C125.867 12.1986 125.674 13.1356 125.674 14.2988C125.674 15.3974 125.856 16.2913 126.221 16.9806C126.671 17.7775 127.325 18.176 128.183 18.176C128.998 18.176 129.631 17.7668 130.081 16.9482Z"/>
</svg>

<svg [attr.fill]="fillColor" class="mark" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49132 0C4.13979 0 4.73325 0.152427 5.27171 0.457286C5.81018 0.762145 6.23284 1.17546 6.5397 1.69724C6.84657 2.21901 7 2.80234 7 3.44724C7 4.11558 6.84657 4.71943 6.5397 5.25879C6.23284 5.79816 5.81018 6.2232 5.27171 6.53392C4.73325 6.84464 4.13979 7 3.49132 7C2.84284 7 2.25228 6.84464 1.7196 6.53392C1.18693 6.2232 0.767164 5.79816 0.460297 5.25879C0.15343 4.71943 0 4.11558 0 3.44724C0 2.80234 0.15343 2.21901 0.460297 1.69724C0.767164 1.17546 1.18693 0.762145 1.7196 0.457286C2.25228 0.152427 2.84284 0 3.49132 0ZM3.49132 6.15578C3.98925 6.15578 4.44086 6.03853 4.84616 5.80402C5.25146 5.56951 5.56989 5.24414 5.80148 4.82789C6.03308 4.41164 6.14888 3.95143 6.14888 3.44724C6.14888 2.9665 6.03308 2.52387 5.80148 2.11935C5.56989 1.71482 5.25146 1.39824 4.84616 1.1696C4.44086 0.940954 3.98925 0.826633 3.49132 0.826633C3.00496 0.826633 2.56204 0.940954 2.16254 1.1696C1.76303 1.39824 1.44748 1.71482 1.21588 2.11935C0.984284 2.52387 0.868484 2.9665 0.868484 3.44724C0.868484 3.95143 0.984284 4.41164 1.21588 4.82789C1.44748 5.24414 1.76303 5.56951 2.16254 5.80402C2.56204 6.03853 3.00496 6.15578 3.49132 6.15578ZM4.68983 2.86683C4.68983 3.24204 4.55087 3.51172 4.27295 3.67588C4.22663 3.71106 4.20926 3.75796 4.22084 3.81658L4.56824 4.76633C4.57982 4.80151 4.5856 4.84255 4.5856 4.88945C4.5856 5.01843 4.50456 5.08291 4.34244 5.08291H4.16873C4.01819 5.08291 3.91398 5.0067 3.85608 4.85427L3.52606 3.90452C3.51448 3.8459 3.47394 3.81658 3.40446 3.81658H3.33499C3.26551 3.81658 3.23077 3.85176 3.23077 3.92211V4.80151C3.23077 4.98911 3.13813 5.08291 2.95285 5.08291H2.79652C2.61125 5.08291 2.51862 4.98911 2.51862 4.80151V2.14573C2.51862 1.95812 2.61125 1.86432 2.79652 1.86432H3.69975C3.98925 1.86432 4.22663 1.96105 4.41191 2.15452C4.59719 2.34799 4.68983 2.58543 4.68983 2.86683ZM3.33499 2.4799C3.26551 2.4799 3.23077 2.51508 3.23077 2.58543V3.16583C3.23077 3.23618 3.26551 3.27136 3.33499 3.27136H3.59554C3.71133 3.27136 3.80396 3.23325 3.87344 3.15703C3.94292 3.08082 3.97766 2.98995 3.97766 2.88442C3.97766 2.76717 3.94292 2.67044 3.87344 2.59422C3.80396 2.51801 3.71133 2.4799 3.59554 2.4799H3.33499Z"/>
</svg>
</div>

  `,
    styles: [`
  .polygon {
    position: absolute;
left: 0.5%;
right: 80.98%;
top: 3.15%;
bottom: 2.89%;


}
.fill1 {
    position: absolute;
left: 3.59%;
right: 90.52%;
top: 55.97%;
bottom: 20.38%;

}

.fill2 {
    position: absolute;
left: 3.59%;
right: 83.83%;
top: 20.33%;
bottom: 20.38%;
}

.fill3 {
    position: absolute;
left: 10.28%;
right: 83.83%;
top: 20.33%;
bottom: 58.03%;
}

.logo-text {
    position: absolute;
left: 24.74%;
right: 5.15%;
top: 14.29%;
bottom: 16.67%;
}

.mark {
  position: absolute;
left: 96.39%;
right: 0%;
top: 16.67%;
bottom: 66.67%;
}

.logo {
        
        margin: auto 0;
        width: 194px;
        height: 45px;
        position: relative;
        left: 0.75%;
        right: 80.98%;
        top: 3.15%;
        bottom: 2.89%;
    
    }
  `]
})
export class LogoComponent {

    @Input() fillColor = 'black';

}