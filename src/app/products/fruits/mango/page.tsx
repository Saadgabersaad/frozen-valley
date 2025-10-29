import React from 'react'
import ProductCard  from "@/app/components/Cards";
import {mango} from "@/app/core/consts/products";
import InfoSection from "@/app/components/InfoSection";
import {productInfoData} from "@/app/core/consts/info";

const Page = () => {
    return (
        <div>
            <ProductCard cards={mango}/>
            <InfoSection data={productInfoData.frozenMango} />
        </div>
    )
}
export default Page
