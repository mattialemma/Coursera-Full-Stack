import { useState } from "react";

interface GiftCard {
    firstName: string;
    lastName: string;
    text: string;
    valid: boolean;
    instructions: string;
}

export default function Exercise08() {
    const [giftCard, setGiftCard] = useState<GiftCard>(
        {
            firstName: "Jennifer",
            lastName: "Smith",
            text: "Free dinner for 4 guests",
            valid: true,
            instructions: "To use your coupon, click the button below.",
        }
    );

    function spendGiftCard() {
        setGiftCard(prevState => {
            return {
                ...prevState,
                text: "Your coupon has been used.",
                valid: false,
                instructions: "Please visit our restaurant to renew your gift card.",
            }
        });
    }

    return (
        <div className="p-10 flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Gift Card Page
                </h1>
                <h2 className="text-xl text-gray-600 mb-6">
                    Customer: <span className="font-semibold text-gray-900">{giftCard.firstName} {giftCard.lastName}</span>
                </h2>

                <div className={`p-4 mb-6 rounded shadow-sm border-l-4 ${giftCard.valid ? "bg-amber-100 border-amber-500 text-amber-900" : "bg-gray-100 border-gray-400 text-gray-500"}`}>
                    <h3 className="text-lg font-bold mb-1">
                        {giftCard.text}
                    </h3>
                    <p className="text-sm">
                        {giftCard.instructions}
                    </p>
                </div>

                {
                    giftCard.valid && (
                        <button
                            onClick={spendGiftCard}
                            className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-full hover:bg-emerald-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0"
                        >
                            Spend Gift Card
                        </button>
                    )
                }
            </div>
        </div>
    );
}