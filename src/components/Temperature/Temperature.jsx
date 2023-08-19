import React from "react";

class Temperature extends React.Component {
    render() {
        const { temperature } = this.props;
        return (
            <div className="temperature-wrapper">
                <div className="temperature-display">
                    <div className="temperature-icon">
                        {temperature > 20 && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M12.5,18 C9.46243388,18 7,15.5375661 7,12.5 C7,9.46243388 9.46243388,7 12.5,7 C15.5375661,7 18,9.46243388 18,12.5 C18,15.5375661 15.5375661,18 12.5,18 Z M12.5,17 C14.9852814,17 17,14.9852814 17,12.5 C17,10.0147186 14.9852814,8 12.5,8 C10.0147186,8 8,10.0147186 8,12.5 C8,14.9852814 10.0147186,17 12.5,17 Z M13,5.5 C13,5.77614237 12.7761424,6 12.5,6 C12.2238576,6 12,5.77614237 12,5.5 L12,2.5 C12,2.22385763 12.2238576,2 12.5,2 C12.7761424,2 13,2.22385763 13,2.5 L13,5.5 Z M13,22.5 C13,22.7761424 12.7761424,23 12.5,23 C12.2238576,23 12,22.7761424 12,22.5 L12,19.5 C12,19.2238576 12.2238576,19 12.5,19 C12.7761424,19 13,19.2238576 13,19.5 L13,22.5 Z M17.8033009,7.90380592 C17.6080387,8.09906807 17.2914562,8.09906807 17.0961941,7.90380592 C16.9009319,7.70854378 16.9009319,7.39196129 17.0961941,7.19669914 L19.1464466,5.14644661 C19.3417088,4.95118446 19.6582912,4.95118446 19.8535534,5.14644661 C20.0488155,5.34170876 20.0488155,5.65829124 19.8535534,5.85355339 L17.8033009,7.90380592 Z M5.85355339,19.8535534 C5.65829124,20.0488155 5.34170876,20.0488155 5.14644661,19.8535534 C4.95118446,19.6582912 4.95118446,19.3417088 5.14644661,19.1464466 L7.19669914,17.0961941 C7.39196129,16.9009319 7.70854378,16.9009319 7.90380592,17.0961941 C8.09906807,17.2914562 8.09906807,17.6080387 7.90380592,17.8033009 L5.85355339,19.8535534 Z M19.5,13 C19.2238576,13 19,12.7761424 19,12.5 C19,12.2238576 19.2238576,12 19.5,12 L22.5,12 C22.7761424,12 23,12.2238576 23,12.5 C23,12.7761424 22.7761424,13 22.5,13 L19.5,13 Z M2.5,13 C2.22385763,13 2,12.7761424 2,12.5 C2,12.2238576 2.22385763,12 2.5,12 L5.5,12 C5.77614237,12 6,12.2238576 6,12.5 C6,12.7761424 5.77614237,13 5.5,13 L2.5,13 Z M17.0961941,17.8033009 C16.9009319,17.6080387 16.9009319,17.2914562 17.0961941,17.0961941 C17.2914562,16.9009319 17.6080387,16.9009319 17.8033009,17.0961941 L19.8535534,19.1464466 C20.0488155,19.3417088 20.0488155,19.6582912 19.8535534,19.8535534 C19.6582912,20.0488155 19.3417088,20.0488155 19.1464466,19.8535534 L17.0961941,17.8033009 Z M5.14644661,5.85355339 C4.95118446,5.65829124 4.95118446,5.34170876 5.14644661,5.14644661 C5.34170876,4.95118446 5.65829124,4.95118446 5.85355339,5.14644661 L7.90380592,7.19669914 C8.09906807,7.39196129 8.09906807,7.70854378 7.90380592,7.90380592 C7.70854378,8.09906807 7.39196129,8.09906807 7.19669914,7.90380592 L5.14644661,5.85355339 Z"/>
                        </svg>)}

                        {temperature < 10 &&(<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M403.3613,329.5322l-11.3125-6.5313,4.0586-1.2436a10,10,0,1,0-5.8594-19.122L368.38,309.3359l-16.12-9.3071,27.3739-8.3877a10,10,0,1,0-5.8594-19.1221l-45.1831,13.8448-31.5034-18.1886v-24.35l31.5034-18.1886,45.1831,13.8448a10,10,0,1,0,5.8594-19.1221L352.26,211.9712l16.12-9.3071,21.8676,6.7006a10,10,0,1,0,5.8594-19.122l-4.0586-1.2436,11.3125-6.5313a10,10,0,1,0-10-17.32l-11.3125,6.5312.9522-4.1362a10,10,0,0,0-19.49-4.4873l-5.13,22.2884L342.26,194.6509l6.4226-27.9a10,10,0,0,0-19.49-4.4873l-10.6008,46.0522-31.5037,18.1886L266,214.3293V177.9525l34.5811-32.2069A10,10,0,0,0,286.95,131.11L266,150.6216V132.0082L282.7373,116.42a10,10,0,1,0-13.6309-14.6357L266,104.6778V91.6152a10,10,0,0,0-20,0v13.0626l-3.1064-2.8931A10,10,0,1,0,229.2627,116.42L246,132.0082v18.6134L225.05,131.11a10,10,0,0,0-13.6309,14.6357L246,177.9525v36.3768l-21.0879,12.1752-31.5037-18.1886-10.6008-46.0522a10,10,0,0,0-19.49,4.4873l6.4226,27.9-16.1206-9.3073-5.13-22.2884a10,10,0,0,0-19.49,4.4873l.9522,4.1362-11.3125-6.5312a10,10,0,1,0-10,17.32l11.3125,6.5313-4.0586,1.2436a10,10,0,1,0,5.8594,19.122l21.8676-6.7006,16.1205,9.3071-27.3739,8.3877a10,10,0,1,0,5.8594,19.1221l45.1831-13.8448,31.5034,18.1886v24.35l-31.5034,18.1886L138.2256,272.519a10,10,0,1,0-5.8594,19.1221l27.3739,8.3877L143.62,309.3359l-21.8676-6.7006a10,10,0,1,0-5.8594,19.122l4.0586,1.2436-11.3125,6.5313a10,10,0,1,0,10,17.32l11.3125-6.5312-.9522,4.1362a10,10,0,1,0,19.49,4.4873l5.13-22.2884,16.1206-9.3073-6.4226,27.9a10,10,0,1,0,19.49,4.4873l10.6008-46.0522,31.5037-18.1886L246,297.6707v36.3768l-34.5811,32.2069A10,10,0,0,0,225.05,380.89L246,361.3784v18.6134L229.2627,395.58a10,10,0,1,0,13.6309,14.6357L246,407.3222v13.0626a10,10,0,1,0,20,0V407.3222l3.1064,2.8931A10,10,0,1,0,282.7373,395.58L266,379.9918V361.3784L286.95,380.89a10,10,0,0,0,13.6309-14.6357L266,334.0475V297.6707l21.0879-12.1752,31.5037,18.1886,10.6008,46.0522a10,10,0,0,0,19.49-4.4873l-6.4226-27.9,16.1206,9.3073,5.13,22.2884a10,10,0,0,0,19.49-4.4873l-.9522-4.1362,11.3125,6.5312a10,10,0,1,0,10-17.32ZM274.3431,266.5905,256,277.1808l-18.3431-10.59V245.41L256,234.8192l18.3431,10.59Z"/>
                        </svg>)}
                    </div>
                    {temperature}
                </div>
            </div>
        )
    }
}

export  default Temperature;

