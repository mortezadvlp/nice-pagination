import { act, cleanup, fireEvent, render } from "@testing-library/react";
import ReactDOM from 'react-dom';
import PreButton from "../components/pre-button";


describe("PreButton tests:", () => {
    afterEach(cleanup);

    it("Render without crashing", () => {
        const div = document.createElement("div");
        const onClickHandler = jest.fn();
        ReactDOM.render(<PreButton onClick={onClickHandler} />, div);
    });

    it("Get action from button", async () => {
        const span = document.createElement("span");
        const onClickHandler = () => span.innerHTML = "Hi";
        const {getByTestId} = render(<PreButton onClick={onClickHandler} />);
        await act(async () => {
            const btn = getByTestId("prebutton");
            await fireEvent.click(btn);
            expect(span.innerHTML).toBe("Hi");
        })
    });
})