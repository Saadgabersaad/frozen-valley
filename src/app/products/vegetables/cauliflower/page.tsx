import React from 'react'
import ProductCard from "@/app/components/Cards";
import { cauliflower} from "@/app/core/consts/products";
import InfoSection from "@/app/components/InfoSection";
import {productInfoData} from "@/app/core/consts/info";

const Page = () => {
    return (
        <div>
            <ProductCard cards={cauliflower} />
            <InfoSection data={productInfoData.cauliflower} />

        </div>
    )
}
export default Page
