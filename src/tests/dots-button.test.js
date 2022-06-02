import { act, cleanup, fireEvent, render } from "@testing-library/react";
import ReactDOM from 'react-dom';
import DotsButton from "../components/dots-button";


describe("DotsButton tests:", () => {
    afterEach(cleanup);

    it("Render without crashing", () => {
        const div = document.createElement("div");
        const onClickHandler = jest.fn();
        ReactDOM.render(<DotsButton onClick={onClickHandler} />, div);
    });

    it("Get action from button", async () => {
        const span = document.createElement("span");
        const onClickHandler = () => span.innerHTML = "Hi";
        const {getByTestId} = render(<DotsButton onClick={onClickHandler} />);
        await act(async () => {
            const btn = getByTestId("dotsbutton");
            await fireEvent.click(btn);
            expect(span.innerHTML).toBe("Hi");
        })
    });
})