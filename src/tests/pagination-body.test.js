import { act, cleanup, fireEvent, render } from "@testing-library/react";
import ReactDOM from 'react-dom';
import PaginationBody from "../components/pagination-body";

describe("PaginationBody tests:", () => {
    afterEach(cleanup);

    it("Render without crashing", () => {
        const div = document.createElement("div");
        const onClickHandler = jest.fn();
        ReactDOM.render(<PaginationBody initialPage={1} totalPages={10} minButtonsToDots={6}
            onPageChanged={onClickHandler} type='simple' />, div);
    });

    describe("Buttons count", () => {
        afterEach(cleanup);

        it("Button types in total 0 and init 1 without crash", () => {
            const onClickHandler = jest.fn();
            const {queryAllByTestId} = render(<PaginationBody initialPage={1} totalPages={1} minButtonsToDots={6}
                onPageChanged={onClickHandler} type='simple' />);
            let btn = queryAllByTestId("prebutton");
            expect(btn.length).toEqual(0);
            btn = queryAllByTestId("nextbutton");
            expect(btn.length).toEqual(0);
            btn = queryAllByTestId("dotsbutton");
            expect(btn.length).toEqual(0);
            btn = queryAllByTestId("selectedbutton");
            expect(btn.length).toEqual(0);
            btn = queryAllByTestId("pagebutton");
            expect(btn.length).toEqual(0);
        });

        it("Button types in total 1 and init 1", () => {
            const onClickHandler = jest.fn();
            const {queryAllByTestId} = render(<PaginationBody initialPage={1} totalPages={1} minButtonsToDots={6}
                onPageChanged={onClickHandler} type='simple' />);
            let btn = queryAllByTestId("prebutton");
            expect(btn.length).toEqual(0);
            btn = queryAllByTestId("nextbutton");
            expect(btn.length).toEqual(0);
            btn = queryAllByTestId("dotsbutton");
            expect(btn.length).toEqual(0);
            btn = queryAllByTestId("selectedbutton");
            expect(btn.length).toEqual(0);
            btn = queryAllByTestId("pagebutton");
            expect(btn.length).toEqual(0);
        });

        it("Button types in total 2 and init 1", () => {
            const onClickHandler = jest.fn();
            const {queryAllByTestId} = render(<PaginationBody initialPage={1} totalPages={2} minButtonsToDots={6}
                onPageChanged={onClickHandler} type='simple' />);
            let btn = queryAllByTestId("prebutton");
            expect(btn.length).toEqual(0);
            btn = queryAllByTestId("nextbutton");
            expect(btn.length).toEqual(0);
            btn = queryAllByTestId("dotsbutton");
            expect(btn.length).toEqual(0);
            btn = queryAllByTestId("selectedbutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("pagebutton");
            expect(btn.length).toEqual(1);
        });

        it("Button types in total 3 and init 1", () => {
            const onClickHandler = jest.fn();
            const {queryAllByTestId} = render(<PaginationBody initialPage={1} totalPages={3} minButtonsToDots={6}
                onPageChanged={onClickHandler} type='simple' />);
            let btn = queryAllByTestId("prebutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("nextbutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("dotsbutton");
            expect(btn.length).toEqual(0);
            btn = queryAllByTestId("selectedbutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("pagebutton");
            expect(btn.length).toEqual(2);
        });

        it("Button types in total 5 and init 1", () => {
            const onClickHandler = jest.fn();
            const {queryAllByTestId} = render(<PaginationBody initialPage={1} totalPages={5} minButtonsToDots={6}
                onPageChanged={onClickHandler} type='simple' />);
            let btn = queryAllByTestId("prebutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("nextbutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("dotsbutton");
            expect(btn.length).toEqual(0);
            btn = queryAllByTestId("selectedbutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("pagebutton");
            expect(btn.length).toEqual(4);
        });

        it("Button types in total 6 and init 1", () => {
            const onClickHandler = jest.fn();
            const {queryAllByTestId} = render(<PaginationBody initialPage={1} totalPages={6} minButtonsToDots={6}
                onPageChanged={onClickHandler} type='simple' />);
            let btn = queryAllByTestId("prebutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("nextbutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("dotsbutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("selectedbutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("pagebutton");
            expect(btn.length).toEqual(3);
        });

        it("Button types in total 10 and init 5", () => {
            const onClickHandler = jest.fn();
            const {queryAllByTestId} = render(<PaginationBody initialPage={5} totalPages={10} minButtonsToDots={6}
                onPageChanged={onClickHandler} type='simple' />);
            let btn = queryAllByTestId("prebutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("nextbutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("dotsbutton");
            expect(btn.length).toEqual(2);
            btn = queryAllByTestId("selectedbutton");
            expect(btn.length).toEqual(1);
            btn = queryAllByTestId("pagebutton");
            expect(btn.length).toEqual(4);
        });
    });

    describe("Buttons act", () => {
        afterEach(cleanup);

        it("Click on NextButton & PreButton", async () => {
            const span = document.createElement("span");
            const onClickHandler = (p) => span.innerHTML = p;
            const {queryAllByTestId} = render(<PaginationBody initialPage={1} totalPages={10} minButtonsToDots={6}
                onPageChanged={onClickHandler} type='simple' />);
            await act(async () => {
                const btn = queryAllByTestId("nextbutton")[0];
                await fireEvent.click(btn);
                expect(span.innerHTML).toBe("2");
                const btn2 = queryAllByTestId("prebutton")[0];
                await fireEvent.click(btn2);
                expect(span.innerHTML).toBe("1");
            })
        });

        it("Click on PreButton with init 1", async () => {
            const span = document.createElement("span");
            const onClickHandler = (p) => span.innerHTML = p;
            const {queryAllByTestId} = render(<PaginationBody initialPage={1} totalPages={10} minButtonsToDots={6}
                onPageChanged={onClickHandler} type='simple' />);
            await act(async () => {
                const btn = queryAllByTestId("prebutton")[0];
                await fireEvent.click(btn);
                expect(span.innerHTML).toBe("1");
            })
        });

        it("Click on NextButton with init 1", async () => {
            const span = document.createElement("span");
            const onClickHandler = (p) => span.innerHTML = p;
            const {queryAllByTestId} = render(<PaginationBody initialPage={10} totalPages={10} minButtonsToDots={6}
                onPageChanged={onClickHandler} type='simple' />);
            await act(async () => {
                const btn = queryAllByTestId("nextbutton")[0];
                await fireEvent.click(btn);
                expect(span.innerHTML).toBe("10");
            })
        });

        it("Click on PageButton #3", async () => {
            const span = document.createElement("span");
            const onClickHandler = (p) => span.innerHTML = p;
            const {getByText} = render(<PaginationBody initialPage={1} totalPages={10} minButtonsToDots={6}
                onPageChanged={onClickHandler} type='simple' />);
            await act(async () => {
                const btn = getByText("3");
                await fireEvent.click(btn);
                expect(span.innerHTML).toBe("3");
            })
        });

        it("Click on DotsButton with init 2 (+3 pages)", async () => {
            const span = document.createElement("span");
            const onClickHandler = (p) => span.innerHTML = p;
            const {getByText} = render(<PaginationBody initialPage={2} totalPages={10} minButtonsToDots={6} 
                dotsButtonStep={3} onPageChanged={onClickHandler} type='simple' />);
            await act(async () => {
                const btn = getByText("...");
                await fireEvent.click(btn);
                expect(span.innerHTML).toBe("5");
            })
        });

        it("Click on DotsButton with init 9 (-3 pages)", async () => {
            const span = document.createElement("span");
            const onClickHandler = (p) => span.innerHTML = p;
            const {getByText} = render(<PaginationBody initialPage={9} totalPages={10} minButtonsToDots={6} 
                dotsButtonStep={3} onPageChanged={onClickHandler} type='simple' />);
            await act(async () => {
                const btn = getByText("...");
                await fireEvent.click(btn);
                expect(span.innerHTML).toBe("6");
            })
        });

        it("Click twice on DotsButton with init 2 (+5 pages)", async () => {
            const span = document.createElement("span");
            const onClickHandler = (p) => span.innerHTML = p;
            const {getByText, getAllByText} = render(<PaginationBody initialPage={2} totalPages={10} minButtonsToDots={6} 
                dotsButtonStep={5} onPageChanged={onClickHandler} type='simple' />);
            await act(async () => {
                const btn = getByText("...");
                await fireEvent.click(btn);
                expect(span.innerHTML).toBe("7");
            })
            await act(async () => {
                const btn = getAllByText("...")[1];
                await fireEvent.click(btn);
                expect(span.innerHTML).toBe("10");  //7+5=12 -> 10
            })
        });

        it("Click twice on DotsButton with init 9 (-5 pages)", async () => {
            const span = document.createElement("span");
            const onClickHandler = (p) => span.innerHTML = p;
            const {getByText, getAllByText} = render(<PaginationBody initialPage={9} totalPages={10} minButtonsToDots={6} 
                dotsButtonStep={5} onPageChanged={onClickHandler} type='simple' />);
            await act(async () => {
                const btn = getByText("...");
                await fireEvent.click(btn);
                expect(span.innerHTML).toBe("4");
            })
            await act(async () => {
                const btn = getAllByText("...")[0];
                await fireEvent.click(btn);
                expect(span.innerHTML).toBe("1");   //4-5=-1 -> 1
            })
        });
    })
    
})