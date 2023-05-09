import './Translate.scss';

const Translate = () => {
    return (
        <div className="translate">
            {/*onClick={this.props.translateLanguage}*/}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M31.0001 16H1.13281M31.0001 16C31.0001 24.2843 24.2843 31 16 31M31.0001 16C31.0001 7.71573 24.2843 1 16 1M16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1M16 31C20.1788 31 23.5665 24.2843 23.5665 16C23.5665 7.71573 20.1788 1 16 1M16 31C11.8212 31 8.43376 24.2843 8.43376 16C8.43376 7.71573 11.8212 1 16 1M16 31V1.13275M28.7433 8.43364H3.25659M28.7433 23.5664H3.25659"
                    stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
}

export default Translate;