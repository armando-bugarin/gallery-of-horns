/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function FilterForm(props) {
    
    // const hornNumberOptions = ["all", "1", "2", "3", "100"];
    // const [selectedOptions, setSelectedOptions] = useState("all");

    // const handleOptionChange = (event) => {

    //     setSelectedOptions(event.target.value);
    //     props.onSelectedOptionChange(event.target.value);
    // };

    return (
        <>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Filter by Number of Horns:</Form.Label>
                    <Form.Control as="select" onChange={props.handleFilter}>
                        <option value="">All Horns</option>
                        <option value="1">1 Horn</option>
                        <option value="2">2 Horns</option>
                        <option value="3">3 Horns</option>
                        <option value="100">100 Horns</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </>)
}

export default FilterForm;
