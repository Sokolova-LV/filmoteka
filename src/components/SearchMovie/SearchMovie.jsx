import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { Form, Input, Button } from "./SearchMovie.styled";

const SearchMovie = ({ onSubmit }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const query = e.target.elements.query.value;
        if(!query) {
            toast.error(`String cannot be empty. Please, text something.`);
            return;
        }
        onSubmit(query);
        e.target.reset();
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="query" placeholder="Movie search"/>
                <Button type="submit">Search</Button>
            </Form>
        </div>
    );
};

SearchMovie.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default SearchMovie;