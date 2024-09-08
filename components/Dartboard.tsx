import { useEffect, useRef, useState } from "react";
import DartboardGroup from "./DartboardGroup";

interface DartboardProps {
  mouseOverIndex: number;
  setMouseOverIndex: (index: number) => void;
}

const dartboardGroups = [
  <g id="group1" className="z-10" key="group1">
    <path id="s1" fill="#5A4528" stroke="#040000" strokeWidth="4" d="M479.846 218.655l-66.101 138.907c-2.034-0.828-4.165-1.463-6.372-1.884l19.939-152.517 c16.062 2.2 31.7 6.6 46.7 12.914C476.002 216.9 477.9 217.8 479.8 218.655z M443.272 81.073l-13.365 102.2 c17.849 2.5 35.2 7.3 51.9 14.321c2.225 0.9 4.4 1.9 6.6 2.945l44.31-93.115c-3.562-1.667-7.15-3.29-10.786-4.828 C496.672 91.9 470.3 84.7 443.3 81.073z" />
    <path id="d1" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M523.14 99.874c3.677 1.6 7.3 3.2 10.9 4.882l6.771-14.23 c-31.719-14.905-60.387-23.369-95.11-28.079l-2.046 15.652C470.984 81.8 497.6 89.1 523.1 99.874z" />
    <path id="t1" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M429.519 186.287l-1.817 13.899c16.33 2.3 32.2 6.7 47.5 13.1 c1.992 0.8 4 1.7 5.9 2.635l6.024-12.659c-2.145-0.995-4.301-1.967-6.485-2.891 C464.223 193.4 447.1 188.7 429.5 186.287z" />

    <path id="s2" fill="#040000" stroke="#040000" strokeWidth="4" d="M483.458 220.372c16.491 8.1 31.6 18.5 45.1 31.017l-105.769 111.7 c-1.691-1.425-3.522-2.689-5.472-3.766L483.458 220.372z M492.061 202.294c18.388 9 35.2 20.6 50.3 34.564l70.898-74.847 c-22.955-21.496-48.725-39.215-76.883-52.84L492.061 202.294z" />
    <path id="d18" fill="#710000" stroke="#040000" strokeWidth="4" d="M615.32 159.833l10.888-11.494c-25.557-23.974-50.207-40.882-81.778-56.095l-6.766 14.2 C566.107 120.2 592.1 138.1 615.3 159.833z" />
    <path id="t18" fill="#710000" stroke="#040000" strokeWidth="4" d="M490.771 205.003l-6.024 12.66c16.776 8.2 32.2 18.8 45.9 31.548l9.639-10.175 C525.472 225.2 508.9 213.8 490.8 205.003z" />

    <path id="s3" fill="#5A4528" stroke="#040000" strokeWidth="4" d="M533.705 256.295c12.355 12.4 22.8 26.2 31.2 41.238l-135.129 73.5 c-1.18-1.886-2.539-3.646-4.054-5.26l105.77-111.661C532.237 254.9 533 255.6 533.7 256.295z M620.759 169.2 c-1.515-1.515-3.051-3.004-4.592-4.484l-70.903 74.852c0.869 0.8 1.7 1.7 2.6 2.5 c13.724 13.7 25.3 29.1 34.6 45.823l90.58-49.287C659.04 213.3 641.5 190 620.8 169.241z" />
    <path id="d4" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M622.88 167.12c20.979 21 38.7 44.5 52.8 70.124l13.843-7.532 c-16.898-30.7-35.117-54.398-60.442-78.622l-10.883 11.489C619.791 164.1 621.3 165.6 622.9 167.12z" />
    <path id="t4" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M543.201 241.787l-9.64 10.176c0.758 0.7 1.5 1.5 2.3 2.2 c12.561 12.6 23.2 26.6 31.7 41.926l12.314-6.701c-9.188-16.491-20.604-31.617-34.124-45.136 C544.9 243.4 544 242.6 543.2 241.787z" />

    <path id="s4" fill="#040000" stroke="#040000" strokeWidth="4" d="M573.926 315.95c5.027 11.9 8.8 24.2 11.2 36.711l-151.229 28.17c-0.541-2.177-1.291-4.271-2.229-6.26 l135.123-73.525C569.397 305.9 571.8 310.9 573.9 315.95z M674.995 242.188l-90.584 49.3 c2.885 5.4 5.5 11 8 16.681c5.592 13.2 9.7 26.9 12.5 40.837l101.372-18.883 c-4.072-21.24-10.351-41.992-18.849-62.083C683.627 259.2 679.5 250.6 675 242.188z" />
    <path id="d13" fill="#710000" stroke="#040000" strokeWidth="4" d="M690.127 266.859c8.582 20.3 14.9 41.3 19 62.703l15.494-2.886 c-6.587-34.424-16.591-62.592-33.188-93.451l-13.836 7.529C682.176 249.2 686.4 257.9 690.1 266.859z" />
    <path id="t13" fill="#710000" stroke="#040000" strokeWidth="4" d="M581.775 292.911l-12.314 6.701c2.618 4.9 5 10 7.2 15.2 c5.112 12.1 8.9 24.6 11.4 37.331l13.781-2.567c-2.685-13.755-6.779-27.197-12.287-40.217 C587.231 303.7 584.6 298.2 581.8 292.911z" />
  </g>,
  <g id="group2" key="group2">
    <path id="s5" fill="#5A4528" stroke="#040000" strokeWidth="4" d="M434.658 384.765l151.235-28.172c1.847 10.6 2.8 21.4 2.8 32.4 c0 7.521-0.448 14.975-1.319 22.345l-152.518-19.938c0.056-0.796 0.095-1.596 0.095-2.406 C434.932 387.6 434.8 386.2 434.7 384.765z M605.578 352.926c2.068 11.8 3.1 23.9 3.1 36.1 c0 8.396-0.503 16.715-1.484 24.94l102.251 13.367c1.546-12.629 2.33-25.408 2.33-38.308c0-18.6-1.623-36.95-4.832-54.958 L605.578 352.926z" />
    <path id="d6" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M725.388 330.608l-15.484 2.884c3.243 18.2 4.9 36.7 4.9 55.5 c0 13.03-0.792 25.939-2.355 38.696l15.643 2.045C732.446 395 731.6 365.1 725.4 330.608z" />
    <path id="t6" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M588.844 356.043c1.881 10.8 2.8 21.8 2.8 32.957c0 7.652-0.456 15.235-1.344 22.7 l13.9 1.816c0.964-8.097 1.459-16.286 1.459-24.551c0-12.019-1.026-23.88-3.062-35.524L588.844 356.043z" />

    <path id="s6" fill="#040000" stroke="#040000" strokeWidth="4" d="M586.84 415.312c-2.248 16.062-6.556 31.705-12.914 46.738c-0.825 1.951-1.693 3.879-2.581 5.8 l-138.906-66.101c0.828-2.034 1.463-4.166 1.884-6.373L586.84 415.312z M708.928 431.272l-102.239-13.365 c-2.479 17.849-7.257 35.231-14.321 51.935c-0.941 2.226-1.932 4.423-2.945 6.606l93.114 44.3 c1.667-3.562 3.289-7.15 4.827-10.786C698.064 484.7 705.3 458.3 708.9 431.272z" />
    <path id="d10" fill="#710000" stroke="#040000" strokeWidth="4" d="M690.127 511.14c-1.555 3.677-3.195 7.306-4.882 10.907l14.229 6.8 c14.903-31.712 23.367-60.381 28.08-95.11l-15.652-2.046C708.198 459 700.9 485.6 690.1 511.14z" />
    <path id="t10" fill="#710000" stroke="#040000" strokeWidth="4" d="M603.714 417.519l-13.899-1.817c-2.282 16.329-6.661 32.233-13.125 47.5 c-0.843 1.992-1.729 3.96-2.636 5.917l12.659 6.023c0.994-2.145 1.967-4.301 2.891-6.485 C596.562 452.2 601.3 435.1 603.7 417.519z" />

    <path id="s7" fill="#5A4528" stroke="#040000" strokeWidth="4" d="M569.628 471.458c-8.065 16.491-18.461 31.616-31.017 45.138L426.952 410.8 c1.425-1.691 2.688-3.522 3.766-5.471L569.628 471.458z M587.706 480.062c-8.97 18.388-20.556 35.244-34.564 50.299l74.847 70.9 c21.496-22.955 39.216-48.725 52.841-76.883L587.706 480.062z" />
    <path id="d15" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M630.166 603.32l11.494 10.888c23.974-25.555 40.883-50.205 56.096-81.778l-14.218-6.766 C669.777 554.1 651.9 580.1 630.2 603.32z" />
    <path id="t15" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M572.337 472.748c-8.201 16.775-18.774 32.16-31.548 45.91l10.175 9.6 c13.792-14.825 25.199-31.422 34.033-49.525L572.337 472.748z" />

    <path id="s8" fill="#040000" stroke="#040000" strokeWidth="4" d="M533.705 521.705c-12.355 12.355-26.175 22.797-41.238 31.207l-73.528-135.129c1.886-1.18 3.646-2.539 5.26-4.054 l111.661 105.77C535.145 520.2 534.4 521 533.7 521.705z M625.243 604.167l-74.852-70.902 c-0.84 0.868-1.678 1.738-2.533 2.594c-13.725 13.724-29.081 25.313-45.823 34.639l49.287 90.6 c25.391-14.035 48.662-31.543 69.437-52.317C622.273 607.2 623.8 605.7 625.2 604.167z" />
    <path id="d2" fill="#710000" stroke="#040000" strokeWidth="4" d="M622.88 610.88c-20.979 20.979-44.481 38.659-70.124 52.831l7.533 13.8 c30.7-16.899 54.398-35.119 78.62-60.443l-11.488-10.882C625.922 607.8 624.4 609.3 622.9 610.88z" />
    <path id="t2" fill="#710000" stroke="#040000" strokeWidth="4" d="M548.214 531.201l-10.177-9.639c-0.733 0.757-1.464 1.517-2.211 2.3 c-12.561 12.561-26.61 23.173-41.926 31.721l6.7 12.314c16.491-9.188 31.617-20.604 45.137-34.124 C546.574 532.9 547.4 532.1 548.2 531.201z" />
  </g>,
  <g id="group3" key="group3">
    <path id="s9" fill="#5A4528" stroke="#040000" strokeWidth="4" d="M474.051 561.926c-11.888 5.027-24.157 8.772-36.712 11.234l-28.171-151.229 c2.178-0.541 4.271-1.291 6.261-2.229l73.525 135.124C484.106 557.4 479.1 559.8 474.1 561.926z M547.812 663 l-49.29-90.584c-5.424 2.885-10.981 5.546-16.681 7.956c-13.222 5.592-26.87 9.748-40.837 12.473l18.883 101.4 c21.241-4.072 41.993-10.351 62.084-18.849C530.807 671.6 539.4 667.5 547.8 662.995z" />
    <path id="d17" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M523.14 678.127c-20.291 8.582-41.251 14.923-62.702 19.034l2.886 15.5 c34.421-6.584 62.59-16.587 93.452-33.186l-7.529-13.838C540.768 670.2 532.1 674.4 523.1 678.127z" />
    <path id="t17" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M497.088 569.775l-6.7-12.314c-4.934 2.619-9.987 5.037-15.169 7.2 c-12.088 5.112-24.564 8.919-37.33 11.42l2.566 13.781c13.756-2.685 27.197-6.779 40.219-12.287 C486.281 575.2 491.8 572.6 497.1 569.775z" />

    <path id="s10" fill="#040000" stroke="#040000" strokeWidth="4" d="M401 576.674c-7.519 0-14.968-0.448-22.335-1.318l19.936-152.519c0.793 0.1 1.6 0.1 2.4 0.1 c1.432 0 2.84-0.1 4.226-0.272l28.165 151.237C422.772 575.7 412 576.7 401 576.674z M455.937 694.958l-18.88-101.377 c-11.819 2.066-23.858 3.108-36.057 3.108c-8.393 0-16.708-0.503-24.93-1.482l-13.365 102.2 c12.625 1.5 25.4 2.3 38.3 2.329C419.593 699.8 437.9 698.2 455.9 694.958z" />
    <path id="d3" fill="#710000" stroke="#040000" strokeWidth="4" d="M401 702.786c-13.026 0-25.93-0.792-38.684-2.354l-2.057 15.7 c14.603 1.8 28.2 2.8 41.6 2.828c0.001 0 0 0 0 0c18.557 0 37.397-1.848 57.523-5.491l-2.905-15.602 C438.306 701.1 419.8 702.8 401 702.786z" />
    <path id="t3" fill="#710000" stroke="#040000" strokeWidth="4" d="M436.508 590.631l-2.567-13.784c-10.799 1.878-21.797 2.827-32.94 2.8 c-7.649 0-15.229-0.456-22.724-1.343l-1.817 13.9c8.094 1 16.3 1.5 24.5 1.5 C413.013 593.7 424.9 592.7 436.5 590.631z" />

    <path id="s11" fill="#5A4528" stroke="#040000" strokeWidth="4" d="M327.95 561.926c-1.952-0.825-3.879-1.693-5.795-2.581l66.1-138.906 c2.034 0.8 4.2 1.5 6.4 1.884L374.688 574.84C358.626 572.6 343 568.3 327.9 561.926z M358.728 696.9 l13.366-102.239c-17.849-2.479-35.233-7.257-51.936-14.321c-2.225-0.941-4.422-1.932-6.605-2.945l-44.31 93.1 c3.562 1.7 7.2 3.3 10.8 4.827C305.328 686.1 331.7 693.3 358.7 696.928z" />
    <path id="d19" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M278.859 678.127c-3.676-1.555-7.305-3.195-10.906-4.882l-6.771 14.2 c31.715 14.9 60.4 23.4 95.1 28.08l2.046-15.652C331.017 696.2 304.4 688.9 278.9 678.127z" />
    <path id="t19" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M372.482 591.714l1.817-13.899c-16.33-2.282-32.234-6.661-47.519-13.125 c-1.992-0.843-3.96-1.729-5.916-2.635l-6.023 12.658c2.144 1 4.3 2 6.5 2.9 C337.778 584.6 354.9 589.3 372.5 591.714z" />

    <path id="s12" fill="#040000" stroke="#040000" strokeWidth="4" d="M318.542 557.628c-16.491-8.065-31.616-18.461-45.137-31.017l105.769-111.66c1.691 1.4 3.5 2.7 5.5 3.8 L318.542 557.628z M309.939 575.706c-18.388-8.97-35.245-20.556-50.299-34.564l-70.898 74.8 c22.955 21.5 48.7 39.2 76.9 52.84L309.939 575.706z" />
    <path id="d7" fill="#710000" stroke="#040000" strokeWidth="4" d="M186.679 618.167l-10.888 11.494c25.558 24 50.2 40.9 81.8 56.095l6.765-14.217 C235.892 657.8 209.9 639.9 186.7 618.167z" />
    <path id="t7" fill="#710000" stroke="#040000" strokeWidth="4" d="M317.252 560.337c-16.775-8.201-32.16-18.774-45.91-31.548l-9.639 10.2 c14.825 13.8 31.4 25.2 49.5 34.033L317.252 560.337z" />
  </g>,
  <g id="group4" key="group4">
    <path id="s13" fill="#5A4528" stroke="#040000" strokeWidth="4" d="M268.295 521.705c-12.355-12.355-22.796-26.175-31.207-41.238l135.129-73.528 c1.179 1.9 2.5 3.6 4.1 5.26l-105.77 111.661C269.763 523.1 269 522.4 268.3 521.705z M185.833 613.2 l70.903-74.852c-0.868-0.84-1.738-1.678-2.594-2.533c-13.724-13.725-25.313-29.081-34.638-45.823l-90.58 49.3 c14.036 25.4 31.5 48.7 52.3 69.437C182.756 610.3 184.3 611.8 185.8 613.243z" />
    <path id="d16" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M179.12 610.88c-20.979-20.979-38.658-44.48-52.831-70.124l-13.844 7.5 c16.9 30.7 35.1 54.4 60.4 78.621l10.883-11.488C182.209 613.9 180.7 612.4 179.1 610.88z" />
    <path id="t16" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M258.799 536.214l9.639-10.177c-0.757-0.733-1.517-1.464-2.264-2.211 c-12.561-12.56-23.173-26.609-31.721-41.926l-12.314 6.701c9.188 16.5 20.6 31.6 34.1 45.1 C257.1 534.6 257.9 535.4 258.8 536.214z" />

    <path id="s14" fill="#040000" stroke="#040000" strokeWidth="4" d="M228.074 462.051c-5.027-11.887-8.772-24.156-11.234-36.711l151.229-28.172c0.54 2.2 1.3 4.3 2.2 6.3 l-135.124 73.525C232.603 472.1 230.2 467.1 228.1 462.051z M127.005 535.812l90.584-49.29 c-2.885-5.424-5.546-10.981-7.956-16.681c-5.592-13.221-9.749-26.869-12.473-40.836L95.789 447.9 c4.072 21.2 10.3 42 18.8 62.082C118.373 518.8 122.5 527.4 127 535.812z" />
    <path id="d8" fill="#710000" stroke="#040000" strokeWidth="4" d="M111.874 511.14c-8.583-20.291-14.923-41.249-19.034-62.701l-15.494 2.9 c6.585 34.4 16.6 62.6 33.2 93.45l13.837-7.529C119.825 528.8 115.6 520.1 111.9 511.14z" />
    <path id="t8" fill="#710000" stroke="#040000" strokeWidth="4" d="M220.225 485.089l12.315-6.701c-2.619-4.934-5.037-9.987-7.228-15.169 c-5.113-12.087-8.919-24.562-11.421-37.329l-13.781 2.566c2.685 13.8 6.8 27.2 12.3 40.2 C214.768 474.3 217.4 479.8 220.2 485.089z" />

    <path id="s15" fill="#5A4528" stroke="#040000" strokeWidth="4" d="M95.046 443.96c-3.209-18.009-4.833-36.359-4.833-54.96c0-12.899 0.784-25.678 2.331-38.307 l102.25 13.367c-0.981 8.225-1.484 16.544-1.484 24.94c0 12.2 1 24.2 3.1 36.075L95.046 443.96z M367.069 389 c0-0.81 0.039-1.61 0.095-2.406l-152.518-19.938c-0.871 7.37-1.319 14.823-1.319 22.345c0 11 0.9 21.8 2.8 32.4 l151.236-28.173C367.169 391.8 367.1 390.4 367.1 389z" />
    <path id="d11" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M87.214 389c0-13.03 0.792-25.938 2.355-38.696l-15.643-2.045 c-4.373 34.77-3.564 64.7 2.7 99.134l15.485-2.885C88.854 426.3 87.2 407.8 87.2 389z" />
    <path id="t11" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M213.157 421.958c-1.88-10.805-2.83-21.809-2.83-32.958c0-7.653 0.457-15.235 1.344-22.734 l-13.9-1.817c-0.964 8.097-1.459 16.286-1.459 24.551c0 12 1 23.9 3.1 35.525L213.157 421.958z" />

    <path id="s16" fill="#040000" stroke="#040000" strokeWidth="4" d="M215.161 362.688c2.248-16.062 6.555-31.707 12.914-46.739c0.825-1.952 1.693-3.879 2.581-5.796l138.907 66.1 c-0.828 2.034-1.463 4.165-1.884 6.372L215.161 362.688z M93.073 346.728l102.239 13.366c2.479-17.849 7.256-35.233 14.321-51.936 c0.941-2.225 1.932-4.422 2.945-6.605l-93.115-44.31c-1.667 3.562-3.29 7.15-4.828 10.8 C103.936 293.3 96.7 319.7 93.1 346.728z" />
    <path id="d14" fill="#710000" stroke="#040000" strokeWidth="4" d="M111.874 266.859c1.555-3.676 3.195-7.305 4.881-10.906l-14.23-6.771 c-14.904 31.716-23.368 60.385-28.08 95.111l15.653 2.046C93.802 319 101.1 292.4 111.9 266.859z" />
    <path id="t14" fill="#710000" stroke="#040000" strokeWidth="4" d="M198.287 360.482l13.899 1.817c2.282-16.33 6.661-32.235 13.125-47.519 c0.843-1.992 1.729-3.959 2.635-5.916l-12.659-6.024c-0.995 2.145-1.967 4.301-2.891 6.5 C205.438 325.8 200.7 342.9 198.3 360.482z" />
  </g>,
  <g id="group5" key="group5">
    <path id="s17" fill="#5A4528" stroke="#040000" strokeWidth="4" d="M232.372 306.542c8.066-16.491 18.461-31.617 31.017-45.137l111.66 105.8 c-1.425 1.691-2.689 3.522-3.766 5.471L232.372 306.542z M214.294 297.938c8.97-18.388 20.556-35.244 34.564-50.298 l-74.848-70.898c-21.495 22.955-39.214 48.724-52.84 76.883L214.294 297.938z" />
    <path id="d9" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M171.833 174.679l-11.494-10.888c-23.975 25.557-40.883 50.207-56.095 81.779l14.218 6.8 C132.223 223.9 150.1 197.9 171.8 174.679z" />
    <path id="t9" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M229.663 305.252c8.202-16.776 18.775-32.161 31.548-45.911l-10.175-9.638 c-13.792 14.825-25.199 31.421-34.033 49.525L229.663 305.252z" />

    <path id="s18" fill="#040000" stroke="#040000" strokeWidth="4" d="M268.295 256.295c12.355-12.356 26.175-22.796 41.238-31.207l73.528 135.1 c-1.885 1.18-3.646 2.539-5.259 4.054l-111.662-105.77C266.855 257.8 267.6 257 268.3 256.295z M176.756 173.8 l74.853 70.903c0.839-0.868 1.677-1.738 2.533-2.594c13.724-13.724 29.08-25.313 45.823-34.639l-49.287-90.58 c-25.392 14.036-48.663 31.543-69.437 52.317C179.726 170.8 178.2 172.3 176.8 173.833z" />
    <path id="d12" fill="#710000" stroke="#040000" strokeWidth="4" d="M179.12 167.12c20.979-20.979 44.48-38.658 70.124-52.831l-7.533-13.843 c-30.701 16.9-54.399 35.119-78.621 60.442l11.489 10.882C176.078 170.2 177.6 168.7 179.1 167.12z" />
    <path id="t12" fill="#710000" stroke="#040000" strokeWidth="4" d="M253.787 246.799l10.176 9.639c0.733-0.757 1.464-1.517 2.211-2.264 c12.56-12.561 26.61-23.173 41.926-31.721l-6.701-12.314c-16.491 9.188-31.617 20.605-45.136 34.1 C255.426 245.1 254.6 245.9 253.8 246.799z" />

    <path id="s19" fill="#5A4528" stroke="#040000" strokeWidth="4" d="M327.95 216.074c11.887-5.028 24.156-8.772 36.711-11.234l28.17 151.2 c-2.177 0.54-4.271 1.29-6.26 2.229l-73.525-135.124C317.894 220.6 322.9 218.2 327.9 216.074z M254.187 115 l49.29 90.584c5.423-2.885 10.982-5.546 16.681-7.956c13.221-5.592 26.87-9.749 40.837-12.473L342.112 83.8 c-21.24 4.071-41.993 10.35-62.083 18.848C271.193 106.4 262.6 110.5 254.2 115.005z" />
    <path id="d5" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M278.859 99.874c20.292-8.583 41.251-14.923 62.703-19.034l-2.886-15.494 c-34.42 6.584-62.589 16.588-93.452 33.188l7.529 13.836C261.231 107.8 269.9 103.6 278.9 99.874z" />
    <path id="t5" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M304.911 208.225l6.701 12.315c4.934-2.619 9.988-5.037 15.169-7.228 c12.087-5.113 24.564-8.919 37.331-11.421l-2.567-13.781c-13.755 2.685-27.197 6.779-40.218 12.3 C315.719 202.8 310.2 205.4 304.9 208.225z" />

    <path id="s20" fill="#040000" stroke="#040000" strokeWidth="4" d="M401 201.327c7.521 0 15 0.4 22.3 1.319l-19.938 152.518c-0.796-0.056-1.596-0.095-2.406-0.095 c-1.435 0-2.846 0.1-4.235 0.274l-28.171-151.236C379.217 202.3 390 201.3 401 201.327z M346.042 83.046l18.884 101.4 c11.825-2.069 23.87-3.111 36.074-3.111c8.396 0 16.7 0.5 24.9 1.484l13.367-102.25c-12.629-1.547-25.408-2.331-38.308-2.331 C382.4 78.2 364.1 79.8 346 83.046z" />
    <path id="d20" fill="#710000" stroke="#040000" strokeWidth="4" d="M401 75.214c13.03 0 25.9 0.8 38.7 2.355l2.045-15.642 c-14.604-1.835-28.238-2.729-41.611-2.729c-18.558 0-37.395 1.772-57.521 5.416l2.884 15.5 C363.681 76.9 382.2 75.2 401 75.214z" />
    <path id="t20" fill="#710000" stroke="#040000" strokeWidth="4" d="M365.476 187.372l2.567 13.784c10.804-1.88 21.808-2.83 32.957-2.83 c7.652 0 15.2 0.5 22.7 1.344l1.816-13.901c-8.097-0.964-16.285-1.459-24.551-1.459 C388.981 184.3 377.1 185.3 365.5 187.372z" />
  </g>
]

const Dartboard = ({ mouseOverIndex, setMouseOverIndex }: DartboardProps) => {
  const bullRef = useRef<SVGGElement | null>(null);
  const coverRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const handleMouseOver = () => {
      if (bullRef.current && coverRef.current) {
        setMouseOverIndex(5);
        document.querySelectorAll('.dartboard-group').forEach((otherItem) => {
          otherItem.classList.add('opacity-50');
        });
      }
    };

    const handleMouseOut = () => {
      if (coverRef.current) {
        setMouseOverIndex(-1);
        document.querySelectorAll('.dartboard-group').forEach((otherItem) => {
          otherItem.classList.remove('opacity-50');
        });
      }
    };

    const item = bullRef.current;
    if (item) {
      item.addEventListener('mouseover', handleMouseOver);
      item.addEventListener('mouseout', handleMouseOut);

      return () => {
        item.removeEventListener('mouseover', handleMouseOver);
        item.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  return (
    <div id="dartboard" className="flex w-full">
      {/* Huge thank you to djave for this brilliant free-to-use SVG dartboard! http://djave.co.uk/free-svg-dartboard/ */}
      <svg id="dartboard" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 787 774" enable-background="new 0 0 787 774" xmlSpace="preserve">
        <g id="areas">
          <g id="s">
            {dartboardGroups.map((group, i) => (
              <DartboardGroup key={i} index={i} mouseOverIndex={mouseOverIndex} setMouseOverIndex={setMouseOverIndex} coverRef={coverRef}>
                {group}
              </DartboardGroup>
            ))}
          </g>
          <g ref={bullRef} id="bull" onMouseEnter={() => setMouseOverIndex(5)} onMouseLeave={() => setMouseOverIndex(-1)}>
            <path id="Outer" fill="#2A5A30" stroke="#040000" strokeWidth="4" d="M432.438 389c0 17.087-13.852 30.938-30.938 30.938S370.562 406.1 370.6 389 s13.852-30.938 30.938-30.938S432.438 371.9 432.4 389z M401.5 372.602c-9.057 0-16.398 7.342-16.398 16.4 s7.342 16.4 16.4 16.398s16.398-7.342 16.398-16.398S410.557 372.6 401.5 372.602z" />
            <circle id="Bull" fill="#710000" stroke="#040000" strokeWidth="4" cx="401.5" cy="389" r="13.7" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Dartboard