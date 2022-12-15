import React from "react";

export default function Accordion() {
    return (
        <div>
            <div className="w-full px-8 mx-auto mt-20 space-y-2 shadow lg:max-w-md">
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">
                        How to create Accordion (FAQ) in react ?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-gray-600">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias
                            quae voluptatum velit aut repudiandae enim quos explicabo magni, ab
                            similique incidunt veniam consectetur quibusdam, cum accusantium quis
                            ratione aliquid.
                        </p>
                    </div>
                </details>
                <hr />
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">How to use tailwind css 3 in react</summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-gray-600">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
                            libero natus! Placeat enim ipsum vero laudantium ducimus veritatis iste,
                            qui magni at laboriosam adipisci ullam, quasi doloremque? Aliquam, quo
                            dolorum.
                        </p>
                    </div>
                </details>
                <hr />
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">How to install Tailwind CSS 3 ?</summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque esse
                            veniam ea tenetur expedita dolor quasi vitae deleniti magnam, placeat
                            dicta nulla distinctio adipisci exercitationem in illo ipsum aperiam
                            consequuntur!
                        </p>
                    </div>
                </details>
                <hr />
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">How to send feedback ?</summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi nulla
                            minima fugit nesciunt fuga id eos voluptatibus. Doloremque, quis. Alias
                            ipsa soluta quaerat minus illo. Laudantium harum numquam odit.
                        </p>
                    </div>
                </details>
                <details>
                    <summary>Hello</summary>
                    <div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa mollitia,
                            rerum ut vero nulla quam impedit at temporibus assumenda adipisci aut
                            veniam accusantium natus. Et voluptatum eveniet non illum architecto.
                        </p>
                    </div>
                </details>
            </div>
        </div>
    );
}
