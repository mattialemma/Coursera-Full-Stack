/**
 * First Component
 */

import { useState } from 'react';

function Heading() {
    let title: string = "this is some heading text";
    return (
        <h1 className="text-center text-2xl font-bold text-blue-600">{title}</h1>
    );
};

function Exercise01() {
    return (
        <Heading />
    );
};

export default Exercise01;
