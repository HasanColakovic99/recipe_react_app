import {ThreeDots} from 'react-loader-spinner';
import {LoaderWrapper} from './LoaderStyle';

const Loader = () => {
    return (
        <LoaderWrapper>
            <ThreeDots 
                color="#b5927f"
                height={120}
                width={120}
            />
        </LoaderWrapper>
    );
}

export default Loader;