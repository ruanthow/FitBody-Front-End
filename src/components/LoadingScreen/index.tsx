import styled from '../../styles/components/LoadingContainer.module.css';

export function LoadingScreen() {
    return (
        <div className={styled.loadingContainer}>
            <div className={styled.loadingContents}>

            <svg version="1.1" id="L9"  height="350px" width="350px"
                viewBox="0 0 100 100">
                <path fill="#ff0707" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    
                </path>
            </svg>
        </div>
        </div >
    )
}