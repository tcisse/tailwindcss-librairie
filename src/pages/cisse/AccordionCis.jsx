/* This example requires Tailwind CSS v3.0+ */
import { Disclosure } from "@headlessui/react";
// import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";

const faqs = [
    {
        question: "Question title",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
        question: "Question title",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
        question: "Question title",
        answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iusto nobis fugiat, sapiente, laudantium laborum perspiciatis voluptatibus maxime molestias quia ad doloribus sequi illum reiciendis quaerat cupiditate aut et aliquam?"
    }
];

export default function AccordionCis() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-3xl text-center font-bold leading-10 tracking-tight text-gray-900">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map(faq => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">
                                                    {faq.question}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <AiOutlinePlus
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <BiMinus
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">
                                                {faq.answer}
                                            </p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
