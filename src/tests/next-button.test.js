import { act, cleanup, fireEvent, render } from "@testing-library/react";
import ReactDOM from 'react-dom';
import NextButton from "../components/next-button";


describe("NextButton tests:", () => {
    afterEach(cleanup);

    it("Render without crashing", () => {
        const div = document.createElement("div");
        const onClickHandler = jest.fn();
        ReactDOM.render(<NextButton onClick={onClickHandler} />, div);
    });

    it("Get action from button", async () => {
        const span = document.createElement("span");
        const onClickHandler = () => span.innerHTML = "Hi";
        const {getByTestId} = render(<NextButton onClick={onClickHandler} />);
        await act(async () => {
            const btn = getByTestId("nextbutton");
            await fireEvent.click(btn);
            expect(span.innerHTML).toBe("Hi");
        })
    });
})