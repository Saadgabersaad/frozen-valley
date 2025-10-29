export interface InfoSectionData {
    icon?: string;
    columns: {
        title: string;
        items: string[];
    }[];
}

export const productInfoData: Record<string, InfoSectionData> = {
    artichoke: {
        columns: [
            {
                title: "Ingredients:",
                items: [
                    "1. Bottoms",
                    "2. Quarters",
                    "3. Whole hearts",
                    "4. Whole hearts with stalk",
                ],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Cooked by the normal method for fresh vegetables",
                    "Do not freeze after thawing",
                    "Free from any preservatives or chemical substances",
                    "Keep frozen at -18°C or 0°F",
                ],
            },
        ],
    },

    frozenStrawberry: {
        columns: [
            {
                title: "Ingredients:",
                items: ["1. Frozen Strawberries"],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Do not freeze after thawing",
                    "Free from any artificial colors or chemical substances",
                    "Free from any genetically modified elements",
                    "Can be used in the preparation of fruit salad, sweets and cocktails",
                    "Keep frozen at -18°C or 0°F",
                ],
            },
        ],
    },

    frozenMango: {
        columns: [
            {
                title: "Ingredients:",
                items: ["1. Frozen Mango"],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Do not freeze after thawing",
                    "Free from any artificial colors or chemical substances",
                    "Free from any genetically modified elements",
                    "Can be used in the preparation of fruit salad, sweets and cocktails",
                    "Keep frozen at -18°C or 0°F",
                ],
            },
        ],
    },

    frozenApricot: {
        columns: [
            {
                title: "Ingredients:",
                items: ["1. Frozen Apricot"],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Do not freeze after thawing",
                    "Free from any artificial colors or chemical substances",
                    "Free from any genetically modified elements",
                    "Can be used in the preparation of fruit salad, sweets and cocktails",
                    "Keep frozen at -18°C or 0°F",
                ],
            },
        ],
    },

    cauliflower: {
        columns: [
            {
                title: "Ingredients:",
                items: ["1. Frozen Cauliflower"],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Do not freeze after thawing.",
                    "Free from any artificial colors or chemical substances.",
                    "Free from any genetically modified elements.",
                    "Can be used in soups, stews, or stir-fry dishes.",
                    "Keep frozen at -18°C or 0°F.",
                ],
            },
        ],
    },

    broccoli: {
        columns: [
            {
                title: "Ingredients:",
                items: ["1. Frozen Broccoli"],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Do not freeze after thawing.",
                    "Free from any artificial colors or chemical substances.",
                    "Free from any genetically modified elements.",
                    "Ideal for steaming, stir-frying, or casseroles.",
                    "Keep frozen at -18°C or 0°F.",
                ],
            },
        ],
    },

    peasCarrot: {
        columns: [
            {
                title: "Ingredients:",
                items: ["1. Frozen  Peas", "2. Frozen Carrot Cubes"],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Do not freeze after thawing.",
                    "Free from any artificial colors or preservatives.",
                    "Free from any genetically modified elements.",
                    "Can be used in rice dishes, soups, and stews.",
                    "Keep frozen at -18°C or 0°F.",
                ],
            },
        ],
    },

    okra: {
        columns: [
            {
                title: "Ingredients:",
                items: ["1. Frozen Okra"],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Do not freeze after thawing.",
                    "Free from any artificial colors or chemical substances.",
                    "Free from any genetically modified elements.",
                    "Perfect for okra stews and curries.",
                    "Keep frozen at -18°C or 0°F.",
                ],
            },
        ],
    },

    mixedVegetables: {
        columns: [
            {
                title: "Ingredients:",
                items: [
                    "1. Frozen Mixed Vegetables",

                ],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Do not freeze after thawing.",
                    "Free from any artificial colors or chemical substances.",
                    "Free from any genetically modified elements.",
                    "Excellent for mixed vegetable dishes, soups, or fried rice.",
                    "Keep frozen at -18°C or 0°F.",
                ],
            },
        ],
    },
    carrot: {
        columns: [
            {
                title: "Ingredients:",
                items: [
                    "1. Frozen diced-onion",

                ],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Do not freeze after thawing.",
                    "Free from any artificial colors or chemical substances.",
                    "Free from any genetically modified elements.",
                    "Excellent for mixed vegetable dishes, soups, or fried rice.",
                    "Keep frozen at -18°C or 0°F.",
                ],
            },
        ],
        }, greenBeans: {
        columns: [
            {
                title: "Ingredients:",
                items: [
                    "1. Frozen Beans",

                ],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Do not freeze after thawing.",
                    "Free from any artificial colors or chemical substances.",
                    "Free from any genetically modified elements.",
                    "Excellent for mixed vegetable dishes, soups, or fried rice.",
                    "Keep frozen at -18°C or 0°F.",
                ],
            },
        ],
    }, fries: {
        columns: [
            {
                title: "Ingredients:",
                items: [
                    "1. Frozen French fries",

                ],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Do not freeze after thawing.",
                    "Free from any artificial colors or chemical substances.",
                    "Free from any genetically modified elements.",
                    "Excellent for mixed vegetable dishes, soups, or fried rice.",
                    "Keep frozen at -18°C or 0°F.",
                ],
            },
        ],
    },
    sweetCorn: {
        columns: [
            {
                title: "Ingredients:",
                items: [
                    "1. Frozen Sweet Corn",

                ],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Do not freeze after thawing.",
                    "Free from any artificial colors or chemical substances.",
                    "Free from any genetically modified elements.",
                    "Excellent for mixed vegetable dishes, soups, or fried rice.",
                    "Keep frozen at -18°C or 0°F.",
                ],
            },
        ],
    },pomegranate: {
        columns: [
            {
                title: "Ingredients:",
                items: [
                    "1. Frozen pomegranate",

                ],
            },
            {
                title: "Packing:",
                items: [
                    "• 1×10kg / carton.",
                    "• 10×1kg / carton.",
                    "• 4×2.5kg / carton.",
                    "• 20×400gm / carton.",
                ],
            },
            {
                title: "Cooking Methods:",
                items: [
                    "Do not freeze after thawing",
                    "Free from any artificial colors or chemical substances",
                    "Free from any genetically modified elements",
                    "Can be used in the preparation of fruit salad, sweets and cocktails",
                    "Keep frozen at -18°C or 0°F",
                ],
            },
        ],
    },
};
