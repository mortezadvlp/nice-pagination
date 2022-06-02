import { act, cleanup, fireEvent, render } from "@testing-library/react";
import ReactDOM from 'react-dom';
import PageButton from "../components/page-button";


describe("PageButton tests:", () => {
    afterEach(cleanup);

    it("Render without crashing", () => {
        const div = document.createElement("div");
        const onClickHandler = jest.fn();
        ReactDOM.render(<PageButton text="3" onClick={onClickHandler} />, div);
    });

    it("Check button text", () => {
        const onClickHandler = jest.fn();
        const {getByTestId} = render(<PageButton text="3" onClick={onClickHandler} />);
        const btn = getByTestId("pagebutton");
        expect(btn.innerHTML).toBe("3");
    });

    it("Get action from button", async () => {
        const span = document.createElement("span");
        const onClickHandler = () => span.innerHTML = "Hi";
        const {getByTestId} = render(<PageButton text="3" onClick={onClickHandler} />);
        await act(async () => {
            const btn = getByTestId("pagebutton");
            await fireEvent.click(btn);
            expect(span.innerHTML).toBe("Hi");
        })
    });
})