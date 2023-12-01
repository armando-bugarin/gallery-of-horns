/* eslint-disable react/prop-types */

import React from 'react';
import Form from 'react-bootstrap/Form';

function FilterForm(props) {
    return (
        <>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Filter by Number of Horns:</Form.Label>
                    <Form.Control as="select" onChange={props.handleFilter}>
                        <option value="">All Horns</option>
                        <option value="1">One Horn</option>
                        <option value="2">Two Horns</option>
                        <option value="3">Three Horns</option>
                        <option value="100">100 Horns</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </>)
}

export default FilterForm;
