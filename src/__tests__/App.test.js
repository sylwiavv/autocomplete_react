import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "../views/App";
import {renderWithProviders} from "../helpers/renderWithProviders";
import Autocomplete from "../components/templates/Autocomplete/Autocomplete";

// Change Render Application
describe('Render application', () => {
    it('Render the component', () => {
        render(<App />);
    });

    it('Properly input handle change', () => {
        render(<App />);
        const input = screen.getByPlaceholderText('Choose your technology');
        fireEvent.change(input, {target: { value: 'React' } });
        expect(input).toHaveValue('React');
    });

    it('Render result list', async () => {
        renderWithProviders(
            <Autocomplete />
        );

        const inputElement = screen.queryByTestId('input');
        const selectedList = screen.queryByTestId('selected-list');

        fireEvent.change(inputElement, {target: { value: 'xxx' } });
        await screen.findByText('xxx');
        const resultList = screen.queryByTestId('result-list');
        const resultListItem = screen.getByText('xxx');

        await expect('xxx').toMatch(/x/);

        //
        // fireEvent.click(inputElement);

    });
});