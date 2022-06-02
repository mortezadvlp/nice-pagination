import { cleanup, render } from "@testing-library/react";
import ReactDOM from 'react-dom';
import SelectedButton from "../components/selected-button";


describe("SelectedButton tests:", () => {
    afterEach(cleanup);

    it("Render without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<SelectedButton text="3" />, div);
    });

    it("Check button text", () => {
        const {getByTestId} = render(<SelectedButton text="3" />);
        const btn = getByTestId("selectedbutton");
        expect(btn.innerHTML).toBe("3");
    });
})