import React from 'react'
import ProductCard from "@/app/components/Cards";
import { pomegranate} from "@/app/core/consts/products";
import InfoSection from "@/app/components/InfoSection";
import {productInfoData} from "@/app/core/consts/info";

const Page = () => {
    return (<>
            <div>
                <ProductCard cards={pomegranate}/>
                <InfoSection data={productInfoData.pomegranate}/>
            </div>
        </>
    )
}
export default Page
