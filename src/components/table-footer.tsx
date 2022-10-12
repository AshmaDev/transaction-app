import React, { useEffect } from "react";
import { classNames } from "../utils/class-names";

interface Props {
    slice: any,
    range: number[],
    page: number,
    setPage: (value: number) => void,

}

export default function TableFooter({ slice, range, page, setPage }: Props) {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);

    return range.length > 1 ? (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
                {range.map((el: number) => (
                    <li key={el}>
                        <button
                            onClick={() => setPage(el)}
                            className={classNames(
                                "py-2 px-3 leading-tight border border-gray-300 rounded-md m-1",
                                page === el ? "bg-pink-700 text-white hover:bg-pink-800 hover:text-gray-100 " : "bg-white text-gray-500 hover:bg-gray-200 hover:text-gray-700 "
                            )}
                        >
                            {el}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    ) : null;
};