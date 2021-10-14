import React from "react";
import { Disclosure } from '@headlessui/react';
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

const MyDisclosure = (props) => {
  return (
    <>
    <div className="bg-white rounded px-1">
        <Disclosure>
        {
            ({open}) => (
                <>
                <Disclosure.Button className="py-2 flex justify-between">
                    <div className="flex items-center gap-5">
                        {open ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
                        <p className={open ? "text-red-500": "text-black" }>
                            {props.title}
                        </p>
                    </div>

                    {/* <p className="px-2 text-sm text-gray-500 hover:text-red-500">Clear</p> */}
                </Disclosure.Button>

                <Disclosure.Panel className="text-red-500 p-2">
                    <div className="flex items-center gap-3 flex-wrap">
                    {
                        props.tags.map((tag) => (
                            <div className="border-2 border-gray-200 p-1 rounded cursor-pointer">
                                <p>{tag}</p>
                            </div>
                        ))
                    }
                    </div>
                </Disclosure.Panel>
                </>
            )}
        </Disclosure>

    </div>
    </>
  )
}

export default MyDisclosure;
