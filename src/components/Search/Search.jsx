import {Form, Input} from './SearchStyle';

const Search = ({
    placeholder,
    onChange
}) => {
    return (
        <Form>
            <Input type="search" placeholder={placeholder} onChange={onChange}/>
        </Form>
    );
}

export default Search;